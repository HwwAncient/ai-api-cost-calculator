export interface ModelPricing {
  id: string;
  name: string;
  provider: 'OpenAI' | 'Anthropic' | 'Google' | 'Meta/Other';
  inputPricePerM: number; // Price per 1M tokens
  outputPricePerM: number; // Price per 1M tokens
  color: string;
}

export interface UserInputs {
  mau: number;
  requestsPerDay: number;
  avgInputTokens: number;
  avgOutputTokens: number;
}

export interface CostResult {
  modelId: string;
  modelName: string;
  monthlyCost: number;
  costPerUser: number;
  color: string;
}