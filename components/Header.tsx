import React from 'react';
import { Calculator } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <Calculator className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-slate-900 tracking-tight">AI API Cost Calculator</span>
        </div>
        
        {/* Product Hunt Badge - Scaled to fit Header */}
        <div className="flex items-center gap-4">
          <a 
            href="https://www.producthunt.com/products/ai-api-cost-calculator?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-ai-api-cost-calculator" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <img 
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1048172&theme=light&t=1765292513149" 
              alt="AI API Cost Calculator - Product Hunt" 
              style={{ width: '180px', height: '38px' }} 
              width="180" 
              height="38" 
            />
          </a>
        </div>

      </div>
    </header>
  );
};