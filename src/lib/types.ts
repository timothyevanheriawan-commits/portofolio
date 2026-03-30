export interface Project {
  slug: string;
  title: string;
  description: string;
  objective: string;
  year: string;
  role: string;
  stack: string[];
  repository?: string;
  liveUrl?: string;
  screenshots?: { src: string; alt: string }[];
  context: string;
  architecture: string;
  tradeoffs: string;
  outcome: string;
  reflection: string;
  featured: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}
