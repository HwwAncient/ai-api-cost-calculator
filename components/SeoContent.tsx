import React from 'react';
import { BookOpen, Code2, Lightbulb, Target, Search, CheckCircle2, Info } from 'lucide-react';

export const SeoContent: React.FC = () => {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Header Section */}
      <div className="bg-slate-50/50 p-8 border-b border-slate-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-indigo-50 p-2 rounded-lg">
            <BookOpen className="w-6 h-6 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Documentation & Methodology</h2>
        </div>
        {/* Removed max-w-4xl to allow text to fill the container width for better visual balance */}
        <p className="text-slate-600 text-lg leading-relaxed">
          The <strong>AI API Cost Calculator</strong> is a professional forecasting tool designed for <strong>SaaS Founders, CTOs, and Product Managers</strong>. Unlike simple token multipliers, this tool models user behavior patterns to calculate the true <em>Unit Economics</em> of building with LLMs.
        </p>
      </div>

      <div className="p-8 space-y-12">
        
        {/* Section 1: Core Algorithm (Visualized) */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-50 p-2 rounded-lg">
              <Code2 className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">The Pricing Algorithm</h3>
          </div>
          
          <div className="prose prose-slate max-w-none text-slate-600 mb-6">
            <p>
              We believe in radical transparency. Instead of a black box, here is the exact logic used to generate these estimates.
            </p>
          </div>

          {/* New Compact Formula Design */}
          <div className="bg-slate-900 rounded-xl p-6 sm:p-8 shadow-xl overflow-hidden relative">
            {/* Subtle background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            </div>

            <div className="relative z-10 space-y-8">
              
              {/* Step 1: Volume */}
              <div className="space-y-3">
                 <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-slate-700 text-white flex items-center justify-center text-[10px]">1</span>
                    Monthly Volume
                 </h4>
                 
                 <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm font-medium">
                    {/* Variable: MAU */}
                    <div className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-200 px-3 py-1.5 rounded-md shadow-sm">
                      Monthly Users
                    </div>

                    <span className="text-slate-500 text-lg font-light">×</span>

                    {/* Variable: Active Days */}
                    <div className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-200 px-3 py-1.5 rounded-md shadow-sm">
                      Active Days
                    </div>

                    <span className="text-slate-500 text-lg font-light">×</span>

                    {/* Variable: Daily Requests */}
                    <div className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-200 px-3 py-1.5 rounded-md shadow-sm">
                      Daily Requests
                    </div>

                    <span className="text-slate-500 text-lg font-light">=</span>

                    {/* Result: Total Requests (Key Visual Anchor) */}
                    <div className="bg-purple-500/20 border-2 border-dashed border-purple-400/50 text-purple-200 px-4 py-1.5 rounded-md font-bold shadow-sm">
                      Total Requests
                    </div>
                 </div>
              </div>

              {/* Connector Line */}
              <div className="h-px bg-slate-800 w-full"></div>

              {/* Step 2: Cost */}
              <div className="space-y-3">
                 <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-slate-700 text-white flex items-center justify-center text-[10px]">2</span>
                    Monthly Cost Calculation
                 </h4>

                 {/* Formula Lines */}
                 <div className="flex flex-col gap-3 font-mono text-xs sm:text-sm">
                    
                    {/* Line 1: Input */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="text-slate-500 font-sans w-12 text-right text-xs uppercase font-bold mr-1">Input</span>
                        <span className="text-slate-600 text-lg font-light">(</span>
                        
                        {/* REUSED: Total Requests */}
                        <div className="bg-purple-500/20 border-2 border-dashed border-purple-400/50 text-purple-200 px-3 py-1 rounded shadow-sm opacity-80">
                          Total Requests
                        </div>

                        <span className="text-slate-500">×</span>

                        <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 px-3 py-1 rounded shadow-sm">
                          Avg Input Tokens
                        </div>

                        <span className="text-slate-500">×</span>

                        <div className="bg-amber-500/10 border border-amber-500/30 text-amber-200 px-3 py-1 rounded shadow-sm">
                          Price
                        </div>

                        <span className="text-slate-500">÷</span>

                        <div className="text-slate-400 font-bold">1M</div>

                        <span className="text-slate-600 text-lg font-light">)</span>
                        <span className="text-slate-500 text-lg font-light">+</span>
                    </div>

                    {/* Line 2: Output */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="text-slate-500 font-sans w-12 text-right text-xs uppercase font-bold mr-1">Output</span>
                        <span className="text-slate-600 text-lg font-light">(</span>
                        
                        {/* REUSED: Total Requests */}
                        <div className="bg-purple-500/20 border-2 border-dashed border-purple-400/50 text-purple-200 px-3 py-1 rounded shadow-sm opacity-80">
                          Total Requests
                        </div>

                        <span className="text-slate-500">×</span>

                        <div className="bg-pink-500/10 border border-pink-500/30 text-pink-200 px-3 py-1 rounded shadow-sm">
                          Avg Output Tokens
                        </div>

                        <span className="text-slate-500">×</span>

                        <div className="bg-amber-500/10 border border-amber-500/30 text-amber-200 px-3 py-1 rounded shadow-sm">
                          Price
                        </div>

                        <span className="text-slate-500">÷</span>

                        <div className="text-slate-400 font-bold">1M</div>

                        <span className="text-slate-600 text-lg font-light">)</span>
                    </div>

                 </div>
              </div>

              {/* Final Result */}
              <div className="flex items-center justify-end pt-4 border-t border-slate-800">
                <div className="flex items-center gap-4">
                    <span className="text-lg text-slate-400">=</span>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Estimated Monthly Cost</span>
                        <span className="text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight">$ Total Cost</span>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* Section 2: Inputs Guide */}
        <section className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-indigo-50 p-2 rounded-lg">
                <Target className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Understanding Inputs</h3>
            </div>
            <ul className="space-y-6">
              <li className="relative pl-6 border-l-2 border-indigo-100">
                <h4 className="font-semibold text-slate-900 text-sm">Monthly Active Users (MAU)</h4>
                <p className="text-sm text-slate-500 mt-1">
                  The number of unique users who log in and interact with your AI feature at least once a month.
                </p>
              </li>
              <li className="relative pl-6 border-l-2 border-indigo-100">
                <h4 className="font-semibold text-slate-900 text-sm">Active Days per Month</h4>
                <p className="text-sm text-slate-500 mt-1">
                  Most users don't use a tool everyday. A productivity tool might see 20 days; a tax tool might only see 1.
                </p>
              </li>
              <li className="relative pl-6 border-l-2 border-indigo-100">
                <h4 className="font-semibold text-slate-900 text-sm">Avg. Reqs / Active User / Day</h4>
                <p className="text-sm text-slate-500 mt-1">
                  The usage intensity on an active day. A simple generator might be 1 request; a conversational agent might be 20+.
                </p>
              </li>
              <li className="relative pl-6 border-l-2 border-indigo-100">
                <h4 className="font-semibold text-slate-900 text-sm">Avg. Input Tokens / Req</h4>
                <p className="text-sm text-slate-500 mt-1">
                  Your prompt size. Heavily impacted by System Instructions and RAG (retrieved context) injected into the prompt.
                </p>
              </li>
              <li className="relative pl-6 border-l-2 border-indigo-100">
                <h4 className="font-semibold text-slate-900 text-sm">Avg. Output Tokens / Req</h4>
                <p className="text-sm text-slate-500 mt-1">
                  The model's response size. Watch out for 'verbose' models or Chain-of-Thought reasoning tokens that increase this count.
                </p>
              </li>
              <li className="relative pl-6 border-l-2 border-indigo-100">
                <h4 className="font-semibold text-slate-900 text-sm">Token / Word Ratio</h4>
                <p className="text-sm text-slate-500 mt-1">
                  We adhere to the industry standard approximation: <strong>1,000 tokens ≈ 750 words</strong>.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-amber-50 p-2 rounded-lg">
                <Lightbulb className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Interpreting Outputs</h3>
            </div>
            <ul className="space-y-6">
              <li className="relative pl-6 border-l-2 border-amber-100">
                <h4 className="font-semibold text-slate-900 text-sm">Estimated Monthly Cost</h4>
                <p className="text-sm text-slate-500 mt-1">
                  Your total projected infrastructure bill. Use this to determine if your current subscription pricing covers your AI costs.
                </p>
              </li>
              <li className="relative pl-6 border-l-2 border-amber-100">
                <h4 className="font-semibold text-slate-900 text-sm">Cost Per User (Unit Economics)</h4>
                <p className="text-sm text-slate-500 mt-1">
                  <span className="text-emerald-600 font-medium">The most critical metric.</span> This tells you exactly how much margin you lose per active user.
                </p>
              </li>
              <li className="relative pl-6 border-l-2 border-amber-100">
                <h4 className="font-semibold text-slate-900 text-sm">Daily Average</h4>
                <p className="text-sm text-slate-500 mt-1">
                  Useful for monitoring daily API dashboards. If your actual daily spend exceeds this number, you may be growing faster than predicted.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* Section 3: Strategic Overview */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-50 p-2 rounded-lg">
               <Search className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">Model Selection Strategy (2025 Outlook)</h3>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <p className="text-slate-600 mb-4">
              The AI landscape in late 2025 demands a multi-model strategy. Don't just pick one model; mix and match based on task complexity.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Efficiency Models
                </h4>
                <p className="text-sm text-slate-500 mb-3">
                  <strong>Examples:</strong> GPT-5 Nano, Gemini 2.5 Flash, Haiku 3.5
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    <span className="text-xs text-slate-600">Perfect for RAG (retrieval) summarizing large documents.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    <span className="text-xs text-slate-600">Ideal for chatbots requiring sub-200ms latency.</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  Reasoning Flagships
                </h4>
                <p className="text-sm text-slate-500 mb-3">
                  <strong>Examples:</strong> GPT-5 Pro, Gemini 3 Pro, Claude Opus 4.5
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5" />
                    <span className="text-xs text-slate-600">Use for complex coding, math, or multi-step agent planning.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5" />
                    <span className="text-xs text-slate-600">Warning: Often 10x-50x more expensive than nano models.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Disclaimer */}
        <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 flex gap-4 items-start">
          <div className="bg-amber-100 p-2 rounded-full flex-shrink-0">
             <Info className="w-4 h-4 text-amber-700" />
          </div>
          <div>
            <h5 className="font-semibold text-amber-900 text-sm">Accuracy Disclaimer</h5>
            <p className="text-xs text-amber-800/80 mt-1 leading-relaxed">
              Calculations are estimates based on public API pricing tables (Pay-As-You-Go). Actual costs may differ due to enterprise volume discounts, nuanced token counting, and rounding.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};