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
        
        {/* Removed placeholder links to keep the interface professional and production-ready */}
        <div className="flex items-center gap-4">
           {/* Future auth or real links can go here */}
        </div>
      </div>
    </header>
  );
};