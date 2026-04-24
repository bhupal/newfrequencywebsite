
export enum NetworkProvider {
  TMOBILE = 'T-Mobile',
  ATT = 'AT&T',
  VERIZON = 'Verizon'
}

export interface EarningEstimate {
  hoursPlayed: number;
  earnings: number;
  planLevel: string;
  dataAmount: string;
}

export interface NavItem {
  label: string;
  href: string;
  action?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// Crypto Types
export interface RoadmapPhase {
  phase: string;
  title: string;
  items: string[];
  status: 'completed' | 'current' | 'upcoming';
}

export interface TokenomicItem {
  label: string;
  percentage: number;
  color: string;
  value: string;
  description?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
  }
}

export interface SmartContract {
  name: string;
  type: string;
  address: string;
  description: string;
}

export interface VestingStage {
  group: string;
  schedule: string;
  cliff: string;
  icon?: any;
}

export interface UtilityFeature {
  title: string;
  description: string;
  icon: any;
}