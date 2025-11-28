import React from 'react';

interface AdPlaceholderProps {
  location: 'middle' | 'bottom';
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ location }) => {
  return (
    <div className="w-full flex justify-center my-8">
      <div className={`
        w-full max-w-[728px] 
        ${location === 'middle' ? 'h-[90px]' : 'h-[250px]'}
        bg-slate-100 border border-dashed border-slate-300 rounded-lg 
        flex flex-col items-center justify-center text-slate-400
      `}>
        <span className="text-sm font-semibold uppercase tracking-wider">Ad Space</span>
        <span className="text-xs mt-1">Responsive Display Ad</span>
      </div>
    </div>
  );
};