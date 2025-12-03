import React, { useState } from 'react';
import { AVAILABLE_MODELS } from '../constants';
import { ExternalLink, ArrowUpDown, Database } from 'lucide-react';
import { ModelPricing } from '../types';

interface PricingTableProps {
  selectedModels?: string[];
}

export const PricingTable: React.FC<PricingTableProps> = ({ selectedModels = [] }) => {
  const [sortField, setSortField] = useState<keyof ModelPricing | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: keyof ModelPricing) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedData = [...AVAILABLE_MODELS].sort((a, b) => {
    if (!sortField) return 0;
    
    const valA = a[sortField];
    const valB = b[sortField];

    if (typeof valA === 'number' && typeof valB === 'number') {
      return sortDirection === 'asc' ? valA - valB : valB - valA;
    }
    
    return sortDirection === 'asc' 
      ? String(valA).localeCompare(String(valB)) 
      : String(valB).localeCompare(String(valA));
  });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 bg-white">
        <div className="flex items-center gap-3">
           <div className="bg-indigo-50 p-2 rounded-lg">
             <Database className="w-5 h-5 text-indigo-600" />
           </div>
           <div>
             <h2 className="text-lg font-semibold text-slate-800 leading-tight">Raw Pricing Data (Live 2025)</h2>
             <p className="text-[11px] text-slate-400 font-medium mt-0.5">Official pricing per 1 million tokens for all supported models.</p>
           </div>
        </div>
      </div>
      
      {/* 
        Container config:
        1. overflow-x-auto: Enables horizontal scrolling.
        2. touch-pan-x REMOVED: It was preventing vertical page scrolling on mobile.
           We rely on default browser behavior to handle vertical vs horizontal intent.
      */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-slate-50 text-slate-500 font-medium">
            <tr>
              {/* Provider: Removed border-l-4 to align with new pill design */}
              <th 
                className="px-4 py-3 cursor-pointer hover:bg-slate-100 transition-colors whitespace-nowrap w-[1%]" 
                onClick={() => handleSort('provider')}
              >
                <div className="flex items-center gap-1">Provider <ArrowUpDown className="w-3 h-3 text-slate-400" /></div>
              </th>
              
              {/* Model Name */}
              <th 
                className="px-4 py-3 cursor-pointer hover:bg-slate-100 transition-colors whitespace-nowrap w-[1%]" 
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center gap-1">Model Name <ArrowUpDown className="w-3 h-3 text-slate-400" /></div>
              </th>

              {/* Input: LEFT ALIGNED */}
              <th 
                className="px-4 py-3 cursor-pointer hover:bg-slate-100 transition-colors whitespace-nowrap w-[1%]" 
                onClick={() => handleSort('inputPricePerM')}
              >
                <div className="flex flex-col items-start leading-tight group">
                  <div className="flex items-center gap-1">Input <ArrowUpDown className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" /></div>
                  <span className="text-[10px] text-slate-400 font-normal">($/1M Tokens)</span>
                </div>
              </th>

              {/* Output: LEFT ALIGNED */}
              <th 
                className="px-4 py-3 cursor-pointer hover:bg-slate-100 transition-colors whitespace-nowrap w-[1%]" 
                onClick={() => handleSort('outputPricePerM')}
              >
                <div className="flex flex-col items-start leading-tight group">
                  <div className="flex items-center gap-1">Output <ArrowUpDown className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" /></div>
                   <span className="text-[10px] text-slate-400 font-normal">($/1M Tokens)</span>
                </div>
              </th>

              {/* Updated */}
              <th 
                className="px-4 py-3 cursor-pointer hover:bg-slate-100 transition-colors whitespace-nowrap w-[1%]" 
                onClick={() => handleSort('lastUpdated')}
              >
                <div className="flex items-center gap-1">Updated <ArrowUpDown className="w-3 h-3 text-slate-400" /></div>
              </th>

              {/* Features */}
              <th className="px-4 py-3 text-left whitespace-nowrap w-auto">Features</th> 
              
              {/* Source */}
              <th className="px-4 py-3 text-center whitespace-nowrap w-[1%]">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {sortedData.map((model) => {
              const isSelected = selectedModels.includes(model.id);
              return (
                <tr 
                  key={model.id} 
                  className={`
                    transition-colors relative
                    ${isSelected 
                      ? 'bg-indigo-50/60' 
                      : 'hover:bg-slate-50/50'}
                  `}
                >
                  {/* First cell with Inset Full-Height Bar */}
                  <td className="relative px-4 py-3 font-medium text-slate-900 whitespace-nowrap">
                    {/* The Bar: Inset, full height (almost), rounded */}
                    <div 
                      className={`
                        absolute left-1 top-0.5 bottom-0.5 w-1.5 rounded-full bg-indigo-600 transition-all duration-300 ease-out origin-center
                        ${isSelected ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-50'}
                      `}
                    />
                    
                    <span className="flex items-center gap-2 pl-1">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: model.color }}></span>
                      {model.provider}
                    </span>
                  </td>

                  <td className="px-4 py-3 font-mono text-slate-600 whitespace-nowrap font-medium">{model.name}</td>
                  
                  <td className="px-4 py-3 text-left text-slate-700 whitespace-nowrap">
                    ${model.inputPricePerM.toFixed(2)}
                  </td>
                  
                  <td className="px-4 py-3 text-left text-slate-700 whitespace-nowrap">
                    ${model.outputPricePerM.toFixed(2)}
                  </td>
                  
                  <td className="px-4 py-3 text-slate-500 whitespace-nowrap text-[13px]">{model.lastUpdated}</td>
                  
                  <td className="px-4 py-3 text-slate-500 max-w-xs sm:max-w-md lg:max-w-none truncate text-sm" title={model.features}>
                    {model.features}
                  </td>
                  
                  <td className="px-4 py-3 text-center whitespace-nowrap">
                    <a 
                      href={model.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center text-indigo-600 hover:text-indigo-800"
                      title="View Official Pricing"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};