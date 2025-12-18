export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  featured?: boolean;
  completionDate?: string;
  client?: string;
  role?: string;
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
}
