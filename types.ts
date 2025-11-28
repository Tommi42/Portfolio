export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  year: string;
  details?: string;
  skills?: string[];
  image?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  details?: string;
  skills?: string[];
  image?: string;
}
