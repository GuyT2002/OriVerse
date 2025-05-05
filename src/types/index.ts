
export interface OrigamiPiece {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'Animals' | 'Flowers' | 'Abstract Art' | 'Tutorials' | 'Geometric';
  dateCreated: string; // ISO 8601 format
  materials?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  slug: string; // For URL generation
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO 8601 format
  excerpt: string;
  imageUrl: string;
  content: string; // Markdown or HTML content
  category: 'Beginner Tutorials' | 'Advanced Creations' | 'My Origami Journey' | 'Materials' | 'Inspiration';
}

export interface Tutorial extends BlogPost {
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  videoUrl?: string; // Optional video link
}

export interface NewsletterSubscription {
  email: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
