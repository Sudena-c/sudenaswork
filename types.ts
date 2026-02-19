export type Category = 'All' | 'UI/UX' | 'Editorial Design' | 'Web Development' | 'Branding' | 'Digital Marketing' | 'Illustration';

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

export interface ProcessStep {
  id: string;
  title: string;
  images?: string[];
  video?: string;
  description?: string;
  research?: ResearchData;
  campaignIdeas?: CampaignIdea[];
  layout?: 'default' | 'featured';
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  coverImage: string;
  shortDescription: string;
  fullDescription: string;
  problemHeadline: string;
  problemBody: string;
  process: ProcessStep[];
}

export interface Interest {
  id: string;
  name: string;
  image: string;
  description: string;
  gallery?: string[];
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
