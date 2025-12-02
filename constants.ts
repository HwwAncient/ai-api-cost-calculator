
import { ModelPricing, UserInputs } from './types';

// Data derived from price_20251201.json
export const AVAILABLE_MODELS: ModelPricing[] = [
  // --- Google Models (Blue Spectrum) ---
  {
    id: 'gemini-3-pro-preview',
    name: 'Gemini 3 Pro Preview',
    provider: 'Google',
    features: 'Powerful agentic & vibe-coding, output includes thinking',
    inputPricePerM: 2.00,
    outputPricePerM: 12.00,
    lastUpdated: '2025-11',
    sourceUrl: 'https://ai.google.dev/gemini-api/docs/pricing',
    color: '#1e3a8a' // Blue 900
  },
  {
    id: 'gemini-2.5-pro',
    name: 'Gemini 2.5 Pro',
    provider: 'Google',
    features: 'Multipurpose model, excels at coding and complex reasoning',
    inputPricePerM: 1.25,
    outputPricePerM: 10.00,
    lastUpdated: '2025-06',
    sourceUrl: 'https://ai.google.dev/gemini-api/docs/pricing',
    color: '#2563eb' // Blue 600
  },
  {
    id: 'gemini-2.5-flash',
    name: 'Gemini 2.5 Flash',
    provider: 'Google',
    features: 'Hybrid reasoning model, 1M context, thinking budgets',
    inputPricePerM: 0.30,
    outputPricePerM: 2.50,
    lastUpdated: '2025-06',
    sourceUrl: 'https://ai.google.dev/gemini-api/docs/pricing',
    color: '#3b82f6' // Blue 500
  },
  {
    id: 'gemini-2.0-flash',
    name: 'Gemini 2.0 Flash',
    provider: 'Google',
    features: 'Balanced multimodal model, 1M context, built for agents',
    inputPricePerM: 0.10,
    outputPricePerM: 0.40,
    lastUpdated: '2024-12',
    sourceUrl: 'https://ai.google.dev/gemini-api/docs/pricing',
    color: '#60a5fa' // Blue 400
  },

  // --- OpenAI Models (Green/Teal Spectrum) ---
  {
    id: 'gpt-5.1',
    name: 'gpt-5.1',
    provider: 'OpenAI',
    features: 'Refined flagship, lower input cost than GPT-4o',
    inputPricePerM: 1.25,
    outputPricePerM: 10.00,
    lastUpdated: '2025-11',
    sourceUrl: 'https://platform.openai.com/docs/pricing',
    color: '#065f46' // Emerald
  },
  {
    id: 'gpt-5-pro',
    name: 'gpt-5-pro',
    provider: 'OpenAI',
    features: 'High-end reasoning flagship, most expensive output',
    inputPricePerM: 15.00,
    outputPricePerM: 120.00,
    lastUpdated: '2025-11',
    sourceUrl: 'https://platform.openai.com/docs/pricing',
    color: '#064e3b' // Dark Emerald
  },
  {
    id: 'gpt-5',
    name: 'gpt-5',
    provider: 'OpenAI',
    features: 'Standard flagship model base version',
    inputPricePerM: 1.25,
    outputPricePerM: 10.00,
    lastUpdated: '2025-10',
    sourceUrl: 'https://platform.openai.com/docs/pricing',
    color: '#059669' // Green 600
  },
  {
    id: 'gpt-5-mini',
    name: 'gpt-5-mini',
    provider: 'OpenAI',
    features: 'Efficient small model, cost-effective',
    inputPricePerM: 0.25,
    outputPricePerM: 2.00,
    lastUpdated: '2025-10',
    sourceUrl: 'https://platform.openai.com/docs/pricing',
    color: '#10b981' // Emerald 500
  },
  {
    id: 'gpt-5-nano',
    name: 'gpt-5-nano',
    provider: 'OpenAI',
    features: 'Smallest, fastest embedded-class model',
    inputPricePerM: 0.05,
    outputPricePerM: 0.40,
    lastUpdated: '2025-10',
    sourceUrl: 'https://platform.openai.com/docs/pricing',
    color: '#34d399' // Emerald 400
  },
  {
    id: 'gpt-4.1',
    name: 'gpt-4.1',
    provider: 'OpenAI',
    features: 'Updated GPT-4 generation, balanced performance',
    inputPricePerM: 2.00,
    outputPricePerM: 8.00,
    lastUpdated: '2025-06',
    sourceUrl: 'https://platform.openai.com/docs/pricing',
    color: '#0d9488' // Teal 600
  },
  {
    id: 'gpt-4.1-mini',
    name: 'gpt-4.1-mini',
    provider: 'OpenAI',
    features: 'Updated cost-efficient mini model',
    inputPricePerM: 0.40,
    outputPricePerM: 1.60,
    lastUpdated: '2025-06',
    sourceUrl: 'https://platform.openai.com/docs/pricing',
    color: '#14b8a6' // Teal 500
  },
  {
    id: 'gpt-4.1-nano',
    name: 'gpt-4.1-nano',
    provider: 'OpenAI',
    features: 'Updated nano model, ultra-low input cost',
    inputPricePerM: 0.10,
    outputPricePerM: 0.40,
    lastUpdated: '2025-06',
    sourceUrl: 'https://platform.openai.com/docs/pricing',
    color: '#2dd4bf' // Teal 400
  },
  {
    id: 'gpt-4o',
    name: 'gpt-4o',
    provider: 'OpenAI',
    features: 'Legacy flagship, multimodal, high speed',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    lastUpdated: '2024-05',
    sourceUrl: 'https://platform.openai.com/docs/pricing',
    color: '#0891b2' // Cyan 600
  },
  {
    id: 'gpt-4o-mini',
    name: 'gpt-4o-mini',
    provider: 'OpenAI',
    features: 'Legacy efficient model, extremely popular',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    lastUpdated: '2024-07',
    sourceUrl: 'https://platform.openai.com/docs/pricing',
    color: '#22d3ee' // Cyan 400
  },

  // --- Anthropic Models (Orange/Red/Clay Spectrum) ---
  {
    id: 'opus-4.5',
    name: 'Claude Opus 4.5',
    provider: 'Anthropic',
    features: 'Most intelligent model for building agents and coding',
    inputPricePerM: 5.00,
    outputPricePerM: 25.00,
    lastUpdated: '2025-11',
    sourceUrl: 'https://claude.com/pricing#api',
    color: '#7c2d12' // Orange 900
  },
  {
    id: 'sonnet-4.5',
    name: 'Claude Sonnet 4.5',
    provider: 'Anthropic',
    features: 'Optimal balance of intelligence, cost, and speed',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    lastUpdated: '2025-11',
    sourceUrl: 'https://claude.com/pricing#api',
    color: '#9a3412' // Orange 800
  },
  {
    id: 'haiku-4.5',
    name: 'Claude Haiku 4.5',
    provider: 'Anthropic',
    features: 'Fastest, most cost-efficient flagship model',
    inputPricePerM: 1.00,
    outputPricePerM: 5.00,
    lastUpdated: '2025-11',
    sourceUrl: 'https://claude.com/pricing#api',
    color: '#c2410c' // Orange 700
  },
  {
    id: 'opus-4.1',
    name: 'Claude Opus 4.1',
    provider: 'Anthropic',
    features: 'Previous high-end model version',
    inputPricePerM: 15.00,
    outputPricePerM: 75.00,
    lastUpdated: '2025-06',
    sourceUrl: 'https://claude.com/pricing#api',
    color: '#ea580c' // Orange 600
  },
  {
    id: 'opus-4',
    name: 'Claude Opus 4',
    provider: 'Anthropic',
    features: 'Previous high-end model version',
    inputPricePerM: 15.00,
    outputPricePerM: 75.00,
    lastUpdated: '2025-05',
    sourceUrl: 'https://claude.com/pricing#api',
    color: '#f97316' // Orange 500
  },
  {
    id: 'sonnet-4',
    name: 'Claude Sonnet 4',
    provider: 'Anthropic',
    features: 'Previous balanced model version',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    lastUpdated: '2025-05',
    sourceUrl: 'https://claude.com/pricing#api',
    color: '#fb923c' // Orange 400
  },
  {
    id: 'sonnet-3.7',
    name: 'Claude Sonnet 3.7',
    provider: 'Anthropic',
    features: 'Intermediate balanced model version',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    lastUpdated: '2025-02',
    sourceUrl: 'https://claude.com/pricing#api',
    color: '#fdba74' // Orange 300
  },
  {
    id: 'haiku-3.5',
    name: 'Claude Haiku 3.5',
    provider: 'Anthropic',
    features: 'Previous efficient model version',
    inputPricePerM: 0.80,
    outputPricePerM: 4.00,
    lastUpdated: '2024-10',
    sourceUrl: 'https://claude.com/pricing#api',
    color: '#fda4af' // Rose 300
  },
  {
    id: 'opus-3',
    name: 'Claude Opus 3',
    provider: 'Anthropic',
    features: 'Legacy high-capability model',
    inputPricePerM: 15.00,
    outputPricePerM: 75.00,
    lastUpdated: '2024-03',
    sourceUrl: 'https://claude.com/pricing#api',
    color: '#e11d48' // Rose 600
  },
  {
    id: 'haiku-3',
    name: 'Claude Haiku 3',
    provider: 'Anthropic',
    features: 'Legacy fast model',
    inputPricePerM: 0.25,
    outputPricePerM: 1.25,
    lastUpdated: '2024-03',
    sourceUrl: 'https://claude.com/pricing#api',
    color: '#f43f5e' // Rose 500
  }
];

export const DEFAULT_INPUTS: UserInputs = {
  mau: 1000,
  activeDays: 10,
  requestsPerDay: 5,
  avgInputTokens: 1000,
  avgOutputTokens: 500,
};

export interface ScenarioPreset {
  id: string;
  name: string;
  description: string;
  data: Partial<UserInputs>;
}

export const SCENARIO_PRESETS: ScenarioPreset[] = [
  {
    id: 'support-bot',
    name: 'Support Bot',
    description: 'RAG w/ KB context, short replies',
    data: {
      activeDays: 4,
      requestsPerDay: 5,
      avgInputTokens: 1500, // Increased for RAG context
      avgOutputTokens: 300
    }
  },
  {
    id: 'coding-agent',
    name: 'Coding Agent',
    description: 'High freq, heavy repo context',
    data: {
      activeDays: 20,
      requestsPerDay: 40,
      avgInputTokens: 6000, // Increased for 2025 repo sizes
      avgOutputTokens: 1000
    }
  },
  {
    id: 'companion',
    name: 'AI Companion',
    description: 'Daily usage, chatty',
    data: {
      activeDays: 25,
      requestsPerDay: 20,
      avgInputTokens: 1500,
      avgOutputTokens: 800
    }
  },
  {
    id: 'rag-search',
    name: 'RAG Search',
    description: 'Medium usage, large context',
    data: {
      activeDays: 8,
      requestsPerDay: 5,
      avgInputTokens: 4000, // Increased context
      avgOutputTokens: 500
    }
  }
];
