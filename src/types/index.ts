
export interface OrigamiPiece {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'Animals' | 'Flowers' | 'Abstract Art' | 'Tutorials' | 'Geometric' | 'Characters' | 'Original Designs'; // Added Characters & Original Designs
  dateCreated: string; // ISO 8601 format
  materials?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  slug: string; // For URL generation
  dataAiHint?: string; // Optional hint for image generation/search
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO 8601 format
  excerpt: string;
  imageUrl: string;
  content: string; // Markdown or HTML content
  category: 'Beginner Tutorials' | 'Intermediate Tutorials' | 'Advanced Creations' | 'My Origami Journey' | 'Materials' | 'Inspiration' | 'Original Designs' | 'Animals'; // Added new categories
  skillLevel?: 'Beginner' | 'Intermediate' | 'Advanced'; // Keep optional skillLevel for tutorials
  dataAiHint?: string; // Optional hint for image generation/search
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
