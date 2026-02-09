
export type Category = 'All' | 'UI/UX' | 'Editorial Design' | 'Web Development' | 'Branding' | 'Digital Marketing' | 'Illustration';

export interface ProcessStep {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  coverImage: string;
  shortDescription: string;
  fullDescription: string;
  process: ProcessStep[];
}

export interface Interest {
  id: string;
  name: string;
  image: string;
  description: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
