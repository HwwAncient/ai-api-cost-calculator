import React from 'react';
import { Calculator, Github } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <Calculator className="h-5 w-5 text-white" />
          </div>
          <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">AI API Cost Calculator</span>
        </div>
        
        {/* Product Hunt Badge - Scaled to fit Header */}
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/HwwAncient/ai-api-cost-calculator" 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:block text-slate-500 transition-colors hover:text-slate-900"
            aria-label="View source on GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.producthunt.com/products/ai-api-cost-calculator?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-ai-api-cost-calculator" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <img 
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1048172&theme=light&t=1765292513149" 
              alt="AI API Cost Calculator - Product Hunt" 
              className="w-32 h-auto sm:w-[180px] sm:h-[38px]"
              width="180" 
              height="38" 
            />
          </a>
        </div>

      </div>
    </header>
  );
};