import { ModelPricing, UserInputs } from './types';

// Pricing data updated as of late 2024 / early 2025 knowledge
export const AVAILABLE_MODELS: ModelPricing[] = [
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    color: '#10a37f' // OpenAI Green
  },
  {
    id: 'gpt-4o-mini',
    name: 'GPT-4o Mini',
    provider: 'OpenAI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    color: '#55efc4' 
  },
  {
    id: 'claude-3-5-sonnet',
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    color: '#da7756' // Anthropic Orange
  },
  {
    id: 'claude-3-haiku',
    name: 'Claude 3 Haiku',
    provider: 'Anthropic',
    inputPricePerM: 0.25,
    outputPricePerM: 1.25,
    color: '#f3bca5'
  },
  {
    id: 'gemini-1-5-pro',
    name: 'Gemini 1.5 Pro',
    provider: 'Google',
    inputPricePerM: 3.50,
    outputPricePerM: 10.50,
    color: '#4285f4' // Google Blue
  },
  {
    id: 'gemini-1-5-flash',
    name: 'Gemini 1.5 Flash',
    provider: 'Google',
    inputPricePerM: 0.075,
    outputPricePerM: 0.30,
    color: '#8ab4f8'
  },
  {
    id: 'llama-3-70b',
    name: 'Llama 3.1 70B (Groq)',
    provider: 'Meta/Other',
    inputPricePerM: 0.59,
    outputPricePerM: 0.79,
    color: '#6c5ce7' // Indigo
  }
];

export const DEFAULT_INPUTS: UserInputs = {
  mau: 1000,
  requestsPerDay: 5,
  avgInputTokens: 500,
  avgOutputTokens: 1000,
};