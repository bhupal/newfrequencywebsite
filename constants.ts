import { NavItem, FAQItem, RoadmapPhase, TokenomicItem, UtilityFeature, SmartContract, VestingStage } from './types';
import { Gamepad2, Signal, TrendingUp, Globe, ShieldCheck, Smartphone, Users, Lock, Rocket, Radio, Gem, Eye, CheckCircle2 } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'What is Freequency', href: '#about' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Networks', href: '#networks' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
  
];

export const CRYPTO_NAV_ITEMS: NavItem[] = [
  { label: 'A2D Engine', href: '#ecosystem' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Staking', href: '#staking' },
  { label: 'Contact', href: '#contact' },
];

export const FEATURES = [
  {
    title: 'Utility-First Rewards',
    description: 'Earnings aren’t just coupons — they directly offset real-world costs like wireless service.',
    icon: Gem,
  },
  {
    title: 'Earn-to-Pay Model',
    description: 'Play, engage, and earn your way toward free or reduced mobile service.',
    icon: TrendingUp,
  },
  {
    title: 'Built for Scale',
    description: 'Designed for everyday users. Simple, transparent, and economically fair.',
    icon: Users,
  },
  {
    title: 'Mobile-Native',
    description: 'Built specifically for smartphones to maximize your time-to-value ratio.',
    icon: Smartphone,
  },
];

export const NETWORK_PROVIDERS = [
  {
    id: 'tmobile',
    name: 'Pink Towers',
    description: 'America\'s largest and fastest 5G network.',
    color: 'bg-pink-600',
    ringColor: 'border-pink-500',
  },
  {
    id: 'att',
    name: 'Blue Towers',
    description: 'The nation\'s most reliable 5G network.',
    color: 'bg-blue-600',
    ringColor: 'border-blue-500',
  },
  {
    id: 'verizon',
    name: 'Red Towers',
    description: 'Most awarded for network quality.',
    color: 'bg-red-600',
    ringColor: 'border-red-500',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Is this really free?",
    answer: "Yes! There is a one-time $10 activation fee. After that, your monthly bill is $0 as long as you meet the daily engagement milestones. If you miss them, you can pay a small $10 fee for the next month or accept a 5GB data cap."
  },
  {
    question: "How do I earn rewards?",
    answer: "Engage with games, offers, videos, surveys, and daily activities directly inside the Freequency app. Your engagement translates to mobile credits."
  },
  {
    question: "Which networks do you use?",
    answer: "We partner with major US networks (Pink, Blue, and Red Towers). You choose which coverage works best for your area during sign-up."
  },
  {
    question: "What happens to my current number?",
    answer: "You can keep your current phone number and bring your own device. We make the switching process seamless."
  }
];

// CRYPTO DATA - MATCHES WHITE PAPER
export const TOKEN_STATS = {
  totalSupply: '75,000,000',
  circulating: '13,500,000',
  ticker: 'FREEC',
  network: 'Ethereum (ERC-20)',
  type: 'Utility Token'
};

export const TOKEN_UTILITIES: UtilityFeature[] = [
  { 
    title: 'Attention-to-Data (A2D)', 
    description: 'Transform verified digital attention into billable real-world wireless connectivity.', 
    icon: Eye 
  },
  { 
    title: 'Proof of Attention', 
    description: 'Verifies engagement originates from real users, resisting fraud and automation.', 
    icon: ShieldCheck 
  },
  { 
    title: 'Staking Rewards', 
    description: 'Stake FREEC to unlock tiered connectivity benefits and weekly rewards.', 
    icon: TrendingUp 
  },
  { 
    title: 'Governance', 
    description: 'Time-weighted governance allows the community to guide market expansion.', 
    icon: Globe 
  }
];

export const TOKENOMICS_DATA: TokenomicItem[] = [
  { label: 'Staking Rewards', percentage: 20.0, color: 'bg-[#8b5cf6]', value: '15,000,000 FREEC', description: 'Weekly distribution for protocol alignment.' },
  { label: 'App Rewards (User Earn)', percentage: 20.0, color: 'bg-[#06b6d4]', value: '15,000,000 FREEC', description: 'Pre-minted for A2D engine conversions.' },
  { label: 'Liquidity Pools', percentage: 18.0, color: 'bg-[#475569]', value: '13,500,000 FREEC', description: 'Initial DEX/CEX liquidity support.' },
  { label: 'Marketing & Influencers', percentage: 10.0, color: 'bg-[#d946ef]', value: '7,500,000 FREEC', description: 'User acquisition and growth.' },
  { label: 'Team Allocation', percentage: 10.0, color: 'bg-[#2563eb]', value: '7,500,000 FREEC', description: 'Vested over 24 months with 6mo cliff.' },
  { label: 'Ecosystem & Telecom', percentage: 22.0, color: 'bg-[#10b981]', value: '16,500,000 FREEC', description: 'Scaling, Partners, and Strategic expansion.' },
];

export const ROADMAP_DATA: RoadmapPhase[] = [
  {
    phase: '✅ FOUNDATION & CORE',
    title: 'Platform Infrastructure',
    status: 'completed',
    items: [
      'iOS & Android Mobile Apps',
      'Reward-powered engagement engine',
      'Daily activities: games, offers, tasks',
      'Secure user wallet architecture',
      'Real-time earning & redemption tracking',
      'Fixed supply FREEC token live'
    ]
  },
  {
    phase: '✅ MARKETPLACE',
    title: 'Ecosystem Commerce',
    status: 'completed',
    items: [
      'Smartphones & Accessories catalog',
      'Apparel & Lifestyle (20,000+ items)',
      'Designer bags, shoes, and watches',
      'Full token-based checkout & fulfillment',
      'Exclusive token-holder offers live'
    ]
  },
  {
    phase: '✅ CONNECTIVITY',
    title: 'Wireless Utility',
    status: 'completed',
    items: [
      'Earn-to-Pay Wireless Model',
      'Pay bills with FREEC utility',
      'eSIM Activation infrastructure',
      'Carrier-agnostic billing logic',
      'Real-time bill offset calculator'
    ]
  },
  {
    phase: '✅ SECURITY & GLOBAL',
    title: 'Production Readiness',
    status: 'completed',
    items: [
      'Multi-region infrastructure support',
      'Biometric-ready authentication',
      'Fraud prevention layers',
      'Daily streaks & engagement multipliers',
      'Scalable transaction throughput'
    ]
  },
  {
    phase: '🚀 EXPANSION 2026',
    title: 'Future Dominance',
    status: 'upcoming',
    items: [
      'Enterprise In-store FREEC redemption',
      'AI-Powered personalized earning paths',
      'Brand & Creator curated marketplaces',
      'Mobility: Transport & Travel use cases',
      'Community Governance & Voting'
    ]
  }
];

export const SMART_CONTRACTS: SmartContract[] = [
  { name: 'FREEC Token', type: 'ERC-20', address: '0x7a2...3b91', description: 'Permanently fixed supply of 75,000,000.' },
  { name: 'A2D Engine', type: 'Middleware', address: '0x8f3...9c22', description: 'Bridges engagement to telecom billing.' },
  { name: 'Staking Pool', type: 'Vault', address: '0x2c1...5a44', description: 'Manages reward emissions and lockups.' },
];

export const VESTING_SCHEDULE: VestingStage[] = [
  { group: 'Team', schedule: '24 Mo. Linear', cliff: '6 Month Cliff', icon: Users },
  { group: 'Strategic Partners', schedule: '36 Mo. Linear', cliff: '12 Month Cliff', icon: Radio },
  { group: 'Ecosystem', schedule: '12 Mo. Linear', cliff: '3 Month Cliff', icon: Rocket },
  { group: 'Liquidity', schedule: 'Unlocked', cliff: 'No Cliff', icon: Lock }
];