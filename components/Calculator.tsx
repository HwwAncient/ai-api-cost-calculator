import React, { useState, useMemo } from 'react';
import { Users, Activity, ArrowDownToLine, ArrowUpFromLine, Settings2, TrendingDown, TrendingUp, Calendar, Zap, FileText, Hash, CircleDollarSign, BarChart3 } from 'lucide-react';
import { AVAILABLE_MODELS, DEFAULT_INPUTS, SCENARIO_PRESETS } from '../constants';
import { UserInputs, CostResult } from '../types';
import { ComparisonChart } from './ComparisonChart';
import { InputField } from './InputField';
import { ModelSelector } from './ModelSelector';
import { PricingTable } from './PricingTable';

export const Calculator: React.FC = () => {
  const [inputs, setInputs] = useState<UserInputs>(DEFAULT_INPUTS);
  
  // Default models selection
  const [selectedModels, setSelectedModels] = useState<string[]>([
    'gemini-3-pro-preview', 
    'gemini-2.5-flash',
    'gpt-5.1',
    'gpt-5-mini',
    'opus-4.5',
    'sonnet-4.5'
  ]);
  
  const [isWordMode, setIsWordMode] = useState<boolean>(false);
  const [activePresetId, setActivePresetId] = useState<string | null>(null);

  const handleInputChange = (field: keyof UserInputs, value: number) => {
    // If user manually changes a value, we are no longer in a "preset" state
    setActivePresetId(null);

    // Enforce limits for active days
    if (field === 'activeDays') {
      value = Math.max(1, Math.min(30, value));
    }
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleTokenInputChange = (field: 'avgInputTokens' | 'avgOutputTokens', value: number) => {
    setActivePresetId(null); // Clear preset on manual edit
    
    // Conversion Logic: 1000 Tokens = 750 Words.
    const finalValue = isWordMode ? Math.round(value / 0.75) : value;
    handleInputChange(field, finalValue);
  };

  const handlePresetClick = (presetId: string, presetData: Partial<UserInputs>) => {
    if (activePresetId === presetId) {
      setActivePresetId(null);
    } else {
      setActivePresetId(presetId);
      setInputs(prev => ({
        ...prev,
        ...presetData
      }));
    }
  };

  const results: CostResult[] = useMemo(() => {
    // Activity Model Formula
    const totalRequests = inputs.mau * inputs.activeDays * inputs.requestsPerDay;

    return AVAILABLE_MODELS
      .filter(m => selectedModels.includes(m.id))
      .map(model => {
        const inputCost = (totalRequests * inputs.avgInputTokens * model.inputPricePerM) / 1000000;
        const outputCost = (totalRequests * inputs.avgOutputTokens * model.outputPricePerM) / 1000000;
        const totalMonthly = inputCost + outputCost;

        return {
          modelId: model.id,
          modelName: model.name,
          provider: model.provider,
          monthlyCost: totalMonthly,
          dailyCost: totalMonthly / 30, 
          costPerUser: inputs.mau > 0 ? totalMonthly / inputs.mau : 0,
          color: model.color
        };
      })
      .sort((a, b) => b.monthlyCost - a.monthlyCost);
  }, [inputs, selectedModels]);

  const getDisplayValue = (tokenValue: number) => {
    return isWordMode ? Math.round(tokenValue * 0.75) : tokenValue;
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Controls (Sticky) */}
        <div className="lg:col-span-4 lg:sticky lg:top-6 lg:flex lg:flex-col gap-6">
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex-shrink-0">
            {/* Presets Section */}
            <div className="mb-8">
               <div className="flex items-center gap-3 mb-4">
                  <div className="bg-amber-50 p-2 rounded-lg">
                    <Zap className="w-5 h-5 text-amber-500 fill-amber-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">Quick Scenarios</h3>
               </div>
               <div className="grid grid-cols-2 gap-2">
                 {SCENARIO_PRESETS.map(preset => {
                   const isActive = activePresetId === preset.id;
                   return (
                     <button
                       key={preset.id}
                       onClick={() => handlePresetClick(preset.id, preset.data)}
                       title={`${preset.name}: ${preset.description}`} 
                       className={`
                         text-left px-3 py-2 rounded-lg border transition-all group relative
                         ${isActive 
                           ? 'bg-indigo-50 border-indigo-500 shadow-sm ring-1 ring-indigo-500' 
                           : 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50'}
                       `}
                     >
                       <div className={`text-xs font-semibold ${isActive ? 'text-indigo-700' : 'text-slate-700 group-hover:text-indigo-700'}`}>
                         {preset.name}
                       </div>
                       <div className={`text-[10px] truncate ${isActive ? 'text-indigo-600/80' : 'text-slate-400'}`}>
                         {preset.description}
                       </div>
                     </button>
                   );
                 })}
               </div>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-indigo-50 p-2 rounded-lg">
                  <Settings2 className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-lg font-semibold text-slate-800">Usage Parameters</h2>
              </div>
              
              <div className="space-y-5">
                <InputField 
                  label="Monthly Active Users (MAU)" 
                  value={inputs.mau} 
                  onChange={(v) => handleInputChange('mau', v)}
                  icon={<Users className="w-4 h-4" />}
                  helpText="Total unique users per month."
                />
                
                {/* Grouped Activity Inputs with styled container */}
                <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 space-y-4">
                  <InputField 
                      label="Avg. Active Days / Month" 
                      value={inputs.activeDays} 
                      onChange={(v) => handleInputChange('activeDays', v)}
                      icon={<Calendar className="w-4 h-4" />}
                      min={1}
                      max={30}
                      helpText="How many days does a user visit? (1-30)"
                  />

                  <InputField 
                      label="Avg. Reqs / Active User / Day" 
                      value={inputs.requestsPerDay} 
                      onChange={(v) => handleInputChange('requestsPerDay', v)}
                      icon={<Activity className="w-4 h-4" />}
                      helpText="How many prompts does one user send daily?"
                  />
                </div>

                {/* Unit Toggle & Inputs */}
                <div className="space-y-3 pt-4 border-t border-slate-100 mt-4">
                  <div className="flex items-center justify-between">
                     <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Payload Size</label>
                     <button 
                       onClick={() => setIsWordMode(!isWordMode)}
                       className="text-[10px] flex items-center gap-1.5 px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors font-medium"
                     >
                       {isWordMode ? <FileText className="w-3 h-3" /> : <Hash className="w-3 h-3" />}
                       Switch to {isWordMode ? 'Tokens' : 'Words'}
                     </button>
                  </div>
                  
                  <InputField 
                    label={isWordMode ? "Avg. Input Words / Req" : "Avg. Input Tokens / Req"}
                    value={getDisplayValue(inputs.avgInputTokens)} 
                    onChange={(v) => handleTokenInputChange('avgInputTokens', v)}
                    icon={<ArrowDownToLine className="w-4 h-4" />}
                    helpText={isWordMode ? "Approx. words per prompt." : "Prompt size. (1000 tokens ≈ 750 words)"}
                  />
                  <InputField 
                    label={isWordMode ? "Avg. Output Words / Req" : "Avg. Output Tokens / Req"}
                    value={getDisplayValue(inputs.avgOutputTokens)} 
                    onChange={(v) => handleTokenInputChange('avgOutputTokens', v)}
                    icon={<ArrowUpFromLine className="w-4 h-4" />}
                    helpText={isWordMode ? "Approx. words per response." : "Response size. (1000 tokens ≈ 750 words)"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:h-[calc(100vh-32rem)] min-h-[500px]">
            <ModelSelector 
              selectedModels={selectedModels} 
              onSelectionChange={setSelectedModels}
            />
          </div>
        </div>

        {/* Right Column: Results & Charts */}
        <div className="lg:col-span-8 space-y-8">
          {/* Results Cards */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-50 p-2 rounded-lg">
                  <CircleDollarSign className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-lg font-semibold text-slate-800">Estimated Monthly Cost</h2>
              </div>
              <span className="text-sm font-normal text-slate-400 bg-slate-50 px-2 py-1 rounded">
                Sorted by Cost
              </span>
            </div>
            
            {results.length === 0 ? (
               <div className="text-center py-12 text-slate-400 border-2 border-dashed border-slate-100 rounded-xl">
                 Select models from the left to calculate costs.
               </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((res, index) => {
                  const isCheapest = index === results.length - 1;
                  const isMostExpensive = index === 0 && results.length > 1;

                  return (
                    <div key={res.modelId} className="relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all hover:shadow-md hover:border-indigo-100 group">
                      <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: res.color }}></div>
                      
                      {isCheapest && (
                        <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 shadow-sm z-10">
                          <TrendingDown className="w-3 h-3" />
                          Lowest
                        </span>
                      )}
                      {isMostExpensive && (
                        <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 rounded-full bg-rose-50 border border-rose-100 px-2 py-0.5 text-[10px] font-semibold text-rose-700 shadow-sm z-10">
                          <TrendingUp className="w-3 h-3" />
                          Highest
                        </span>
                      )}
                      
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide">{res.provider}</h3>
                      </div>
                      
                      <div className="font-medium text-slate-700 truncate mb-1" title={res.modelName}>{res.modelName}</div>
                      <div className="text-2xl font-bold text-slate-900 tracking-tight">
                        ${res.monthlyCost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                      </div>
                      
                      {/* Sub-metrics: Daily Cost & Per User */}
                      <div className="text-xs text-slate-500 mt-3 pt-2 border-t border-slate-200/60 grid grid-cols-2 gap-2">
                         <div className="flex flex-col">
                           <span className="text-[10px] text-slate-400 uppercase tracking-wide">Daily Avg</span>
                           <span className="font-mono font-medium text-slate-700">${res.dailyCost.toFixed(2)}</span>
                         </div>
                         <div className="flex flex-col text-right">
                           <span className="text-[10px] text-slate-400 uppercase tracking-wide">Cost / User</span>
                           <span className="font-mono font-medium text-slate-700">${res.costPerUser.toFixed(2)}</span>
                         </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 overflow-hidden">
             <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-50 p-2 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-lg font-semibold text-slate-800">Cost Comparison Visualizer</h2>
             </div>
             <ComparisonChart data={results} key={results.length} />
          </div>

          <PricingTable selectedModels={selectedModels} />
        </div>
      </div>
    </div>
  );
};