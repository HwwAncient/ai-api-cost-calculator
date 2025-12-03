import React from 'react';
import { BookOpen, Code2, Lightbulb, Target, Search, CheckCircle2, Info, X, Plus, Divide, Equal, ArrowDown } from 'lucide-react';

// Internal helper for consistent operator styling
const MathOp: React.FC<{ icon?: React.ReactNode; symbol?: string }> = ({ icon, symbol }) => (
  <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex flex-shrink-0 items-center justify-center text-slate-300 text-xs font-bold shadow-sm z-10 relative">
    {icon ? icon : symbol}
  </div>
);

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
          <div className="bg-slate-900 rounded-xl p-6 sm:p-8 shadow-xl overflow-hidden relative border border-slate-800">
            {/* Subtle background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            </div>

            <div className="relative z-10 flex flex-col">
              
              {/* Step 1: Volume */}
              <div className="flex flex-col items-center w-full mb-8">
                 {/* Step 1 Header - Pill Style */}
                 <div className="inline-flex items-center gap-2 bg-slate-800 rounded-full px-4 py-1.5 border border-slate-700 shadow-sm mb-4">
                    <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-xs font-bold shadow-lg shadow-amber-500/20">1</span>
                    <span className="text-xs text-slate-200 font-bold uppercase tracking-widest">Monthly Volume</span>
                 </div>
                 
                 {/* Step 1 Formula */}
                 <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-slate-800/30 px-6 py-4 rounded-xl border border-slate-700/50 relative z-10">
                      
                      {/* Variable: Monthly Users */}
                      <div className="bg-indigo-500/20 border border-indigo-500/40 text-indigo-100 px-3 py-2 rounded-lg shadow-sm font-mono text-xs font-bold">
                        Monthly Users
                      </div>

                      <MathOp icon={<X className="w-3 h-3" />} />

                      {/* Variable: Active Days */}
                      <div className="bg-indigo-500/20 border border-indigo-500/40 text-indigo-100 px-3 py-2 rounded-lg shadow-sm font-mono text-xs font-bold">
                        Active Days
                      </div>

                      <MathOp icon={<X className="w-3 h-3" />} />

                      {/* Variable: Daily Requests */}
                      <div className="bg-indigo-500/20 border border-indigo-500/40 text-indigo-100 px-3 py-2 rounded-lg shadow-sm font-mono text-xs font-bold">
                        Daily Requests
                      </div>

                      <MathOp icon={<Equal className="w-3 h-3" />} />

                      {/* Variable: Total Requests (Consistent Style) */}
                      <div className="bg-purple-500/20 border-2 border-dashed border-purple-400/50 text-purple-200 px-3 py-2 rounded-lg font-mono text-xs font-bold shadow-sm">
                        Total Requests
                      </div>
                 </div>
              </div>

              {/* Step 2 & 3 Combined Flow Container */}
              <div className="flex flex-col items-center w-full">
                 
                 {/* Step 2 Header - Pill Style */}
                 <div className="inline-flex items-center gap-2 bg-slate-800 rounded-full px-4 py-1.5 border border-slate-700 shadow-sm mb-4">
                    <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-xs font-bold shadow-lg shadow-amber-500/20">2</span>
                    <span className="text-xs text-slate-200 font-bold uppercase tracking-widest">Monthly Cost Calculation</span>
                 </div>

                 {/* Formula Line 1: Input Cost */}
                 <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-slate-800/30 px-3 py-2 rounded-lg border border-slate-800 relative z-20 font-mono">
                      {/* Dashed Border for Intermediate Result */}
                      <div className="bg-slate-700/50 border-2 border-dashed border-slate-600/50 text-slate-300 px-3 py-2 rounded-lg text-xs font-bold shadow-sm whitespace-nowrap">
                        $ Input Cost
                      </div>
                      <MathOp icon={<Equal className="w-3 h-3" />} />
                      
                      {/* Total Requests - Matching Step 1 */}
                      <div className="bg-purple-500/20 border-2 border-dashed border-purple-400/50 text-purple-200 px-3 py-2 rounded-lg font-bold shadow-sm text-xs whitespace-nowrap">
                        Total Requests
                      </div>
                      
                      <MathOp icon={<X className="w-3 h-3" />} />
                      <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 px-3 py-2 rounded-lg shadow-sm text-xs font-bold whitespace-nowrap">
                        Avg. Input Tokens
                      </div>
                      <MathOp icon={<X className="w-3 h-3" />} />
                      <div className="bg-amber-500/10 border border-amber-500/30 text-amber-200 px-3 py-2 rounded-lg shadow-sm text-xs font-bold whitespace-nowrap">
                        Token Price
                      </div>
                      <MathOp icon={<Divide className="w-3 h-3" />} />
                      <div className="text-slate-400 font-bold px-1 text-xs">1M</div>
                 </div>

                 {/* Connector: Plus (Continuous Line) */}
                 <div className="relative w-full flex justify-center py-2">
                    <div className="absolute inset-y-0 w-px bg-slate-700 left-1/2 -translate-x-1/2 z-0"></div>
                    <MathOp icon={<Plus className="w-3 h-3" />} />
                 </div>

                 {/* Formula Line 2: Output Cost */}
                 <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-slate-800/30 px-3 py-2 rounded-lg border border-slate-800 relative z-20 font-mono">
                      {/* Dashed Border for Intermediate Result */}
                      <div className="bg-slate-700/50 border-2 border-dashed border-slate-600/50 text-slate-300 px-3 py-2 rounded-lg text-xs font-bold shadow-sm whitespace-nowrap">
                        $ Output Cost
                      </div>
                      <MathOp icon={<Equal className="w-3 h-3" />} />
                      
                      {/* Total Requests - Matching Step 1 */}
                      <div className="bg-purple-500/20 border-2 border-dashed border-purple-400/50 text-purple-200 px-3 py-2 rounded-lg font-bold shadow-sm text-xs whitespace-nowrap">
                        Total Requests
                      </div>
                      
                      <MathOp icon={<X className="w-3 h-3" />} />
                      <div className="bg-pink-500/10 border border-pink-500/30 text-pink-200 px-3 py-2 rounded-lg shadow-sm text-xs font-bold whitespace-nowrap">
                        Avg. Output Tokens
                      </div>
                      <MathOp icon={<X className="w-3 h-3" />} />
                      <div className="bg-amber-500/10 border border-amber-500/30 text-amber-200 px-3 py-2 rounded-lg shadow-sm text-xs font-bold whitespace-nowrap">
                        Token Price
                      </div>
                      <MathOp icon={<Divide className="w-3 h-3" />} />
                      <div className="text-slate-400 font-bold px-1 text-xs">1M</div>
                 </div>

                 {/* Connector: Equal (Continuous Line) */}
                 <div className="relative w-full flex justify-center py-4">
                    <div className="absolute inset-y-0 w-px bg-slate-700 left-1/2 -translate-x-1/2 z-0"></div>
                    <MathOp icon={<Equal className="w-3 h-3" />} />
                 </div>

                 {/* Total Cost Box */}
                 <div className="relative z-20 group">
                    <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
                    {/* Dashed Border for Calculated Result */}
                    <div className="relative bg-emerald-500/10 border-2 border-dashed border-emerald-500/50 rounded-2xl p-4 sm:px-8 text-center shadow-2xl z-20">
                       <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Estimated Monthly Cost</div>
                       <div className="text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight">$ Total Cost</div>
                    </div>
                 </div>

                 {/* Connector: Down to Step 3 (Removed vertical line above pill) */}
                 <div className="relative w-full flex justify-center pt-6 pb-0">
                    
                    {/* Step 3 Header - Pill Style */}
                    <div className="z-20 inline-flex items-center gap-2 bg-slate-800 rounded-full px-4 py-1.5 border border-slate-700 shadow-sm">
                       <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-xs font-bold shadow-lg shadow-amber-500/20">3</span>
                       <span className="text-xs text-slate-200 font-bold uppercase tracking-widest">Derived Metrics</span>
                    </div>
                 </div>

                 {/* Connector: From Pill to Branch Point (Short) */}
                 <div className="h-4 w-px bg-slate-700"></div>

                 {/* The Branching Lines */}
                 <div className="relative h-4 w-full max-w-lg">
                    {/* Horizontal Branch */}
                    <div className="absolute left-0 right-0 top-0 h-px bg-slate-700"></div>
                    {/* Vertical Drops at ends */}
                    <div className="absolute left-0 top-0 h-full w-px bg-slate-700"></div>
                    <div className="absolute right-0 top-0 h-full w-px bg-slate-700"></div>
                 </div>

                 {/* The Two Cards */}
                 <div className="grid md:grid-cols-2 gap-6 md:gap-12 w-full max-w-3xl mt-2">
                    {/* Cost Per User */}
                    <div className="relative bg-slate-800/40 rounded-xl p-5 border border-slate-700 flex flex-col items-center gap-3">
                       <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 text-slate-400 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                         Unit Economics
                       </div>
                       <div className="flex flex-wrap items-center justify-center gap-2 w-full mt-2">
                          {/* Styled Total Cost Variable - Dashed Border */}
                          <div className="bg-emerald-500/20 border-2 border-dashed border-emerald-500/40 text-emerald-200 px-3 py-1.5 rounded-lg shadow-sm font-mono text-xs font-bold">
                            $ Total Cost
                          </div>
                          <MathOp icon={<Divide className="w-3 h-3" />} />
                          
                          {/* Monthly Users - Matching Step 1 Style exactly */}
                          <div className="bg-indigo-500/20 border border-indigo-500/40 text-indigo-100 px-3 py-1.5 rounded-lg shadow-sm font-mono text-xs font-bold">
                            Monthly Users
                          </div>
                       </div>
                       <div className="w-full h-px bg-slate-700/50"></div>
                       <div className="flex items-center gap-3">
                         <MathOp icon={<Equal className="w-3 h-3" />} />
                         {/* Dashed Border for Calculated Result */}
                         <div className="bg-indigo-500/20 border-2 border-dashed border-indigo-500/50 text-indigo-200 px-4 py-2 rounded-xl shadow-lg shadow-indigo-500/10 text-sm font-bold tracking-wide">
                            $ Cost Per User
                         </div>
                       </div>
                    </div>

                    {/* Daily Average */}
                    <div className="relative bg-slate-800/40 rounded-xl p-5 border border-slate-700 flex flex-col items-center gap-3">
                       <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 text-slate-400 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                         Runway Analysis
                       </div>
                       <div className="flex flex-wrap items-center justify-center gap-2 w-full mt-2">
                          {/* Styled Total Cost Variable - Dashed Border */}
                          <div className="bg-emerald-500/20 border-2 border-dashed border-emerald-500/40 text-emerald-200 px-3 py-1.5 rounded-lg shadow-sm font-mono text-xs font-bold">
                            $ Total Cost
                          </div>
                          <MathOp icon={<Divide className="w-3 h-3" />} />
                          <span className="text-slate-400 font-bold text-xs">30 Days</span>
                       </div>
                       <div className="w-full h-px bg-slate-700/50"></div>
                       <div className="flex items-center gap-3">
                         <MathOp icon={<Equal className="w-3 h-3" />} />
                         {/* Dashed Border for Calculated Result */}
                         <div className="bg-cyan-500/20 border-2 border-dashed border-cyan-500/50 text-cyan-200 px-4 py-2 rounded-xl shadow-lg shadow-cyan-500/10 text-sm font-bold tracking-wide">
                           $ Daily Average
                         </div>
                       </div>
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