export type ProjectCategory = 'todos' | 'residencial' | 'interiores' | 'corporativo' | 'paisagismo';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'residencial' | 'interiores' | 'corporativo' | 'paisagismo';
  categoryLabel: string;
  year: number;
  area: string;
  location: string;
  clientType: string;
  coverImage: string;
  gallery: string[];
  description: string;
  concept: string;
  highlights: string[];
  materials: string[];
  leadArchitect: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  coverImage: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  projectTitle: string;
  projectYear: string;
  rating: number;
  location: string;
}

export type MeetingType = 'presencial' | 'online' | 'visita_tecnica';

export interface MeetingBooking {
  id: string;
  protocol: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  meetingType: MeetingType;
  meetingTypeLabel: string;
  date: string;
  time: string;
  projectType: string;
  projectStage: string;
  estimatedArea: string;
  budgetRange: string;
  notes?: string;
  createdAt: string;
  status: 'confirmada' | 'pendente';
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  serviceInterest: string;
  message: string;
  date: string;
}
