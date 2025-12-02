
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CostResult } from '../types';

interface ComparisonChartProps {
  data: CostResult[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-800 text-white text-xs p-3 rounded shadow-lg border border-slate-700 z-50 min-w-[140px]">
        <p className="font-semibold mb-1 text-sm text-white">{label}</p>
        <p className="text-slate-400 text-[10px] mb-2 uppercase tracking-wider">{data.provider}</p>
        
        <div className="space-y-1">
          <div className="flex justify-between items-center gap-4">
            <span className="text-slate-300">Monthly:</span>
            <span className="text-indigo-200 font-mono font-medium">
              ${payload[0].value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
          
          <div className="flex justify-between items-center gap-4 border-t border-slate-600/50 pt-1 mt-1">
             <span className="text-slate-400">Daily Avg:</span>
             <span className="text-slate-200 font-mono">
               ${data.dailyCost.toFixed(2)}
             </span>
          </div>

          <div className="flex justify-between items-center gap-4">
            <span className="text-slate-400">Cost / User:</span>
            <span className="text-slate-200 font-mono">
               ${data.costPerUser.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export const ComparisonChart: React.FC<ComparisonChartProps> = ({ data }) => {
  if (!data || data.length === 0) {
    // Fixed height for empty state to prevent layout shift/collapse
    return (
      <div className="h-[400px] w-full flex items-center justify-center text-slate-400 text-sm">
        No data to display
      </div>
    );
  }

  // Dynamic height calculation: Base padding + (Item height * count)
  // Ensures that if user selects 24 models, the chart grows tall enough
  const itemHeight = 45;
  const minHeight = 400;
  const calculatedHeight = Math.max(minHeight, data.length * itemHeight + 50);

  return (
    <div style={{ height: `${calculatedHeight}px`, width: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
          <XAxis type="number" hide />
          <YAxis 
            type="category" 
            dataKey="modelName" 
            width={150} 
            tick={{ fontSize: 11, fill: '#64748b' }}
            interval={0}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f1f5f9' }} />
          <Bar dataKey="monthlyCost" radius={[0, 4, 4, 0]} barSize={24}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
