
export interface ModelPricing {
  id: string;
  name: string;
  provider: string; // Changed from union type to string to be flexible
  inputPricePerM: number; // Price per 1M tokens
  outputPricePerM: number; // Price per 1M tokens
  features: string;
  lastUpdated: string;
  sourceUrl: string;
  color: string;
}

export interface UserInputs {
  mau: number;
  activeDays: number; // New: Days per month a user is active
  requestsPerDay: number;
  avgInputTokens: number;
  avgOutputTokens: number;
}

export interface CostResult {
  modelId: string;
  modelName: string;
  provider: string;
  monthlyCost: number;
  dailyCost: number; // New: Approximate daily cost
  costPerUser: number;
  color: string;
}
