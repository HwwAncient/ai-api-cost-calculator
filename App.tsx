import React, { useState } from 'react';
import { Calculator } from './components/Calculator';
import { SeoContent } from './components/SeoContent';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AdPlaceholder } from './components/AdPlaceholder';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Estimate your <span className="text-indigo-600">LLM API Costs</span>
          </h1>
          <p className="text-lg text-slate-600">
            Stop guessing your burn rate. Calculate monthly expenses for OpenAI, Anthropic, and Google models based on your estimated traffic.
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