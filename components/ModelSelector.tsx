import React from 'react';
import { AVAILABLE_MODELS } from '../constants';
import { Check } from 'lucide-react';

interface ModelSelectorProps {
  selectedModels: string[];
  onToggle: (id: string) => void;
}

export const ModelSelector: React.FC<ModelSelectorProps> = ({ selectedModels, onToggle }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-4">
        <h2 className="text-lg font-semibold text-slate-800">Compare Models</h2>
      </div>
      <div className="space-y-3">
        {AVAILABLE_MODELS.map((model) => {
          const isSelected = selectedModels.includes(model.id);
          return (
            <div 
              key={model.id}
              onClick={() => onToggle(model.id)}
              className={`
                cursor-pointer flex items-center justify-between p-3 rounded-lg border transition-all
                ${isSelected 
                  ? 'bg-indigo-50 border-indigo-200 shadow-sm' 
                  : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200'}
              `}
            >
              <div className="flex items-center gap-3">
                <div 
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${isSelected ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300'}`}
                >
                  {isSelected && <Check className="w-3 h-3 text-white" />}
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-800">{model.name}</div>
                  <div className="text-xs text-slate-500">
                    In: ${model.inputPricePerM} / Out: ${model.outputPricePerM}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};