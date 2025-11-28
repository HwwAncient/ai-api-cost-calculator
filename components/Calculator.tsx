import React, { useState, useMemo } from 'react';
import { Users, Activity, ArrowDownToLine, ArrowUpFromLine, Settings2 } from 'lucide-react';
import { AVAILABLE_MODELS, DEFAULT_INPUTS } from '../constants';
import { UserInputs, CostResult } from '../types';
import { ComparisonChart } from './ComparisonChart';
import { InputField } from './InputField';
import { ModelSelector } from './ModelSelector';

export const Calculator: React.FC = () => {
  const [inputs, setInputs] = useState<UserInputs>(DEFAULT_INPUTS);
  const [selectedModels, setSelectedModels] = useState<string[]>(['gpt-4o', 'claude-3-5-sonnet', 'gemini-1-5-flash']);

  const handleInputChange = (field: keyof UserInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleModelToggle = (modelId: string) => {
    setSelectedModels(prev => 
      prev.includes(modelId) 
        ? prev.filter(id => id !== modelId)
        : [...prev, modelId]
    );
  };

  const results: CostResult[] = useMemo(() => {
    // Calculation Logic
    // 1. Total Requests per Month = MAU * Requests/Day * 30
    const totalRequests = inputs.mau * inputs.requestsPerDay * 30;

    // 2. Input Token Cost = (Total Req * Input Tokens * Price) / 1,000,000
    // 3. Output Token Cost = (Total Req * Output Tokens * Price) / 1,000,000
    
    return AVAILABLE_MODELS
      .filter(m => selectedModels.includes(m.id))
      .map(model => {
        const inputCost = (totalRequests * inputs.avgInputTokens * model.inputPricePerM) / 1000000;
        const outputCost = (totalRequests * inputs.avgOutputTokens * model.outputPricePerM) / 1000000;
        const totalMonthly = inputCost + outputCost;

        return {
          modelId: model.id,
          modelName: model.name,
          monthlyCost: totalMonthly,
          costPerUser: inputs.mau > 0 ? totalMonthly / inputs.mau : 0,
          color: model.color
        };
      })
      .sort((a, b) => b.monthlyCost - a.monthlyCost); // Sort by most expensive
  }, [inputs, selectedModels]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Column: Controls */}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
            <Settings2 className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-semibold text-slate-800">Usage Parameters</h2>
          </div>
          
          <div className="space-y-5">
            <InputField 
              label="Monthly Active Users (MAU)" 
              value={inputs.mau} 
              onChange={(v) => handleInputChange('mau', v)}
              icon={<Users className="w-4 h-4" />}
              helpText="Number of active users per month."
            />
            <InputField 
              label="Avg. Requests per User / Day" 
              value={inputs.requestsPerDay} 
              onChange={(v) => handleInputChange('requestsPerDay', v)}
              icon={<Activity className="w-4 h-4" />}
              helpText="How often does a user interact with the AI?"
            />
            <InputField 
              label="Avg. Input Tokens / Request" 
              value={inputs.avgInputTokens} 
              onChange={(v) => handleInputChange('avgInputTokens', v)}
              icon={<ArrowDownToLine className="w-4 h-4" />}
              helpText="Prompt length. (1k tokens ≈ 750 words)"
            />
            <InputField 
              label="Avg. Output Tokens / Request" 
              value={inputs.avgOutputTokens} 
              onChange={(v) => handleInputChange('avgOutputTokens', v)}
              icon={<ArrowUpFromLine className="w-4 h-4" />}
              helpText="Response length. (1k tokens ≈ 750 words)"
            />
          </div>
        </div>

        <ModelSelector 
          selectedModels={selectedModels} 
          onToggle={handleModelToggle} 
        />
      </div>

      {/* Right Column: Results & Charts */}
      <div className="lg:col-span-8 space-y-6">
        {/* Results Cards */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-6">Estimated Monthly Cost</h2>
          
          {results.length === 0 ? (
             <div className="text-center py-10 text-slate-500">Please select at least one model to see results.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {results.map((res) => (
                <div key={res.modelId} className="relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-5 transition-all hover:shadow-md hover:border-indigo-100 group">
                  <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: res.color }}></div>
                  <h3 className="text-sm font-medium text-slate-500 mb-1">{res.modelName}</h3>
                  <div className="text-2xl font-bold text-slate-900">
                    ${res.monthlyCost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </div>
                  <div className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                     <span className="font-medium text-slate-600">${res.costPerUser.toFixed(2)}</span> / user / mo
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Chart */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 h-[500px]">
           <h2 className="text-lg font-semibold text-slate-800 mb-4">Cost Comparison</h2>
           <ComparisonChart data={results} />
        </div>
      </div>
    </div>
  );
};