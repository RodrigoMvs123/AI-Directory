export type CategoryType = 
  | 'All' 
  | 'CLI Agent' 
  | 'IDE Extension' 
  | 'Web App' 
  | 'API Service' 
  | 'Desktop App' 
  | 'Code Review' 
  | 'AI Chat' 
  | 'Specialized' 
  | 'Creative'
  | 'Enterprise';

export type PricingType = 'Free' | 'Paid' | 'Freemium' | 'Enterprise' | 'TBA' | 'Contact';

export interface Installation {
  command: string;
  platform?: string;
}

export interface Service {
  id: string;
  name: string;
  categories: CategoryType[];
  url: string;
  description: string;
  features?: string[];
  installation?: Installation;
  pricing: {
    type: PricingType;
    details?: string;
  };
  documentation?: string;
  tags?: string[];
  lastUpdated?: string;
  icon?: string; // URL to icon or placeholder
}
