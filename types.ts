export type Category = 
  | 'All' 
  | 'UI/UX' 
  | 'Editorial Design' 
  | 'Illustration' 
  | 'Internship Work' 
  | 'Web Development' 
  | 'Branding' 
  | 'Digital Marketing' 
  | 'Immersive Design Studio' 
  | 'Production Design';

export interface ResearchData {
  primary?: string;
  secondary?: string;
  insights?: string[];
}

export interface CampaignIdea {
  title: string;
  description: string;
  image: string;
}

export interface IterationComparison {
  label: string;
  description: string;
  image?: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  phase?: 'The Spark' | 'Exploration' | 'The Pivot' | 'Craft' | 'Outcome' | 'Reflection';
  images?: string[];
  video?: string;
  posterImage?: string;
  description?: string;
  reflection?: string; // Personal thinking & designer reflection
  decisionNote?: string; // Why this decision was made
  research?: ResearchData;
  campaignIdeas?: CampaignIdea[];
  iterations?: IterationComparison[];
  layout?: 'default' | 'featured' | 'split' | 'gallery' | 'story-pivot';
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  coverImage: string;
  heroVideo?: string;
  shortDescription: string;
  fullDescription: string;
  problemHeadline: string;
  problemBody: string;
  postcardNote?: string; // Handwritten-style dispatch text on the postcard
  postcardRotation?: number; // Subtle tilt angle (e.g. -1.5, 1.2, etc.)
  year?: string;
  role?: string;
  duration?: string;
  tools?: string[];
  isInternship?: boolean;
  process: ProcessStep[];
}

export interface Interest {
  id: string;
  name: string;
  image: string;
  description: string;
  personalNote?: string;
  gallery?: string[];
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

