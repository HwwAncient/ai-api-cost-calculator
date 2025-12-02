import React, { useMemo } from 'react';
import { AVAILABLE_MODELS } from '../constants';
import { Check, Scale } from 'lucide-react';

interface ModelSelectorProps {
  selectedModels: string[];
  onSelectionChange: (models: string[]) => void;
}

export const ModelSelector: React.FC<ModelSelectorProps> = ({ 
  selectedModels, 
  onSelectionChange
}) => {
  
  // Group models by provider
  const groupedModels = useMemo(() => {
    const groups: Record<string, typeof AVAILABLE_MODELS> = {};
    AVAILABLE_MODELS.forEach(model => {
      if (!groups[model.provider]) {
        groups[model.provider] = [];
      }
      groups[model.provider].push(model);
    });
    return groups;
  }, []);

  // --- Logic for Global Toggles ---
  const allModelIds = useMemo(() => AVAILABLE_MODELS.map(m => m.id), []);
  const isGlobalAllSelected = allModelIds.every(id => selectedModels.includes(id));
  
  const handleGlobalToggle = () => {
    if (isGlobalAllSelected) {
      onSelectionChange([]);
    } else {
      onSelectionChange(allModelIds);
    }
  };

  // --- Logic for Single Model Toggle ---
  const handleSingleToggle = (id: string) => {
    if (selectedModels.includes(id)) {
      onSelectionChange(selectedModels.filter(m => m !== id));
    } else {
      onSelectionChange([...selectedModels, id]);
    }
  };

  // --- Logic for Group/Provider Toggle ---
  const handleGroupToggle = (providerModels: typeof AVAILABLE_MODELS) => {
    const groupIds = providerModels.map(m => m.id);
    const isGroupSelected = groupIds.every(id => selectedModels.includes(id));

    if (isGroupSelected) {
      // Uncheck all in this group
      onSelectionChange(selectedModels.filter(id => !groupIds.includes(id)));
    } else {
      // Check all in this group (merging with existing selection to avoid dupes)
      const newSelection = [...new Set([...selectedModels, ...groupIds])];
      onSelectionChange(newSelection);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full overflow-hidden">
      {/* Header - Comfortable padding */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white flex-shrink-0 z-20">
        <div className="flex items-center gap-3">
           <div className="bg-indigo-50 p-2 rounded-lg">
             <Scale className="w-5 h-5 text-indigo-600" />
           </div>
           <div>
             <h2 className="text-lg font-semibold text-slate-800 leading-tight">Compare Models</h2>
             <p className="text-[11px] text-slate-400 font-medium">Prices per 1M tokens</p>
           </div>
        </div>
        
        {/* Global Toggle: 'Select All' / 'Clear' */}
        <button 
          onClick={handleGlobalToggle}
          className={`
            text-xs font-medium px-3 py-1.5 rounded-lg transition-colors
            ${isGlobalAllSelected 
              ? 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700' 
              : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 hover:text-indigo-700'}
          `}
        >
          {isGlobalAllSelected ? 'Clear' : 'Select All'}
        </button>
      </div>
      
      {/* Scrollable Area - Full width to keep scrollbar at the edge */}
      <div className="overflow-y-auto custom-scrollbar flex-1 min-h-0 relative">
        {/* Content Wrapper - Comfortable padding */}
        <div className="px-6 pb-6 pt-2 space-y-6">
          {Object.entries(groupedModels).map(([provider, models]) => {
            // Determine group state for the header button
            const isGroupSelected = models.every(m => selectedModels.includes(m.id));

            return (
              <div key={provider}>
                {/* Per-provider Header */}
                <div className="sticky top-0 bg-white z-10 flex items-center justify-between py-2 mb-1">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {provider}
                  </h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGroupToggle(models);
                    }}
                    className={`
                      text-[10px] font-medium px-2 py-0.5 rounded transition-colors
                      ${isGroupSelected
                        ? 'text-slate-400 bg-slate-50 hover:bg-slate-100 hover:text-slate-600'
                        : 'text-indigo-600 bg-indigo-50/50 hover:bg-indigo-100 hover:text-indigo-700'}
                    `}
                  >
                    {isGroupSelected ? 'Clear' : 'Select All'}
                  </button>
                </div>

                <div className="space-y-2">
                  {models.map((model) => {
                    const isSelected = selectedModels.includes(model.id);
                    return (
                      <div 
                        key={model.id}
                        className={`
                          group relative cursor-pointer flex items-center justify-between p-2.5 rounded-lg border transition-all select-none
                          ${isSelected 
                            ? 'bg-indigo-50/50 border-indigo-200' 
                            : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200'}
                        `}
                        onClick={() => handleSingleToggle(model.id)}
                        title={`${model.features} (Updated: ${model.lastUpdated})`}
                      >
                        <div className="flex items-center gap-3 w-full">
                          <div 
                            className={`
                              w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-colors 
                              ${isSelected ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300'}
                            `}
                          >
                            {isSelected && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="flex items-center justify-between">
                              <span className={`text-sm font-medium truncate ${isSelected ? 'text-indigo-900' : 'text-slate-700'}`}>
                                {model.name}
                              </span>
                            </div>
                            <div className="text-[10px] flex justify-between gap-3 mt-0.5">
                              <span className="flex items-center gap-1">
                                <span className="text-slate-400 font-medium">In:</span> 
                                <span className="text-slate-600">${model.inputPricePerM}</span>
                              </span>
                              <span className="flex items-center gap-1">
                                <span className="text-slate-400 font-medium">Out:</span> 
                                <span className="text-slate-600">${model.outputPricePerM}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};