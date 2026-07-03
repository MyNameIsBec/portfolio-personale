export interface Profile {
  id: number;
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string | null;
  avatarUrl: string | null;
  summary: string;
  githubUrl: string | null;
  linkedinUrl: string | null;
  websiteUrl: string | null;
  experiences: Experience[];
  educations: Education[];
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  description: string | null;
  startDate: string;
  endDate: string | null;
  current: boolean;
  order: number;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string | null;
  startDate: string;
  endDate: string | null;
  current: boolean;
  grade: string | null;
  order: number;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  description: string | null;
  level: number;
  order: number;
}

export type SkillGroup = Record<string, Skill[]>;

export interface Project {
  id: number;
  title: string;
  description: string | null;
  techStack: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  imageUrl: string | null;
  featured: boolean;
  order: number;
}
