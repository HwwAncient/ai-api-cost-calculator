import React, { useState } from 'react';
import { Calculator } from './components/Calculator';
import { SeoContent } from './components/SeoContent';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AdPlaceholder } from './components/AdPlaceholder';
import { Sparkles } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        {/* Hero Section with subtle background context */}
        <section className="relative text-center space-y-5 max-w-4xl mx-auto pt-4 pb-2">
          {/* Decorative background elements to reduce 'empty' feel */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          
          {/* Badge - Eyebrow Position */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-indigo-100 shadow-sm text-indigo-900 text-[11px] font-bold uppercase tracking-wider mb-2 transition-transform hover:scale-105 cursor-default">
            {/* Changed to Amber/Gold for visual pop and 'star' semantics */}
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Updated for 2025 Models</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Forecast your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">LLM API Costs</span>
          </h1>
          
          {/* Subtitle: Widened to max-w-3xl to ensure a nice 2-line structure (Long top, short bottom) */}
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Don't just count tokens. Translate <strong className="text-slate-900 font-semibold">Monthly Active Users (MAU)</strong> into accurate infrastructure forecasts and unit economics for OpenAI, Anthropic, and Gemini.
          </p>
        </section>

        <Calculator />

        <AdPlaceholder location="middle" />

        <SeoContent />

        <AdPlaceholder location="bottom" />
      </main>

      <Footer />
    </div>
  );
};

export default App;