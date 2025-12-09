import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} AI API Cost Calculator. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="mailto:wanweihe2019@gmail.com" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          Disclaimer: This tool provides estimates based on public pricing data. Actual costs may vary depending on bulk discounts, enterprise agreements, and specific provider rounding rules. Prices are subject to change by providers.
        </div>
      </div>
    </footer>
  );
};