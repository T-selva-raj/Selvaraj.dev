export interface PersonalInfo {
  name: string;
  firstName: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  bio: string;
  resumeUrl: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
  level?: 'expert' | 'proficient' | 'familiar';
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: SkillItem[];
}

export interface TechBadge {
  name: string;
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  context: string;
  overview: string;
  contribution: string;
  stack: TechBadge[];
  challenges: string[];
  outcomes: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  gradient: string;
}

export interface CaseStudy {
  projectId: string;
  architecture: string[];
  problemStatement: string;
  solution: string;
  technicalDecisions: string[];
  diagramDescription: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string | null;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  current: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  year?: string;
}
