import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { OrigamiCard } from '@/components/origami-card';
import { BlogPostCard } from '@/components/blog-post-card';
import { NewsletterSignup } from '@/components/newsletter-signup';
import type { OrigamiPiece, BlogPost } from '@/types';

// Mock data - replace with actual data fetching later
const featuredOrigami: OrigamiPiece[] = [
  { id: '1', title: 'Graceful Crane', slug: 'graceful-crane', description: 'A classic symbol of peace and longevity, folded with intricate detail.', imageUrl: 'https://picsum.photos/seed/crane/600/600', category: 'Animals', dateCreated: '2024-01-15', difficulty: 'Intermediate' },
  { id: '2', title: 'Blooming Lotus', slug: 'blooming-lotus', description: 'An elegant lotus flower, perfect as a centerpiece or gift.', imageUrl: 'https://picsum.photos/seed/lotus/600/600', category: 'Flowers', dateCreated: '2024-02-10', difficulty: 'Intermediate' },
  { id: '3', title: 'Geometric Star', slug: 'geometric-star', description: 'A modular origami star showcasing mesmerizing symmetry.', imageUrl: 'https://picsum.photos/seed/star/600/600', category: 'Geometric', dateCreated: '2024-03-05', difficulty: 'Advanced' },
   { id: '4', title: 'Playful Fox', slug: 'playful-fox', description: 'A charming little fox character folded from a single sheet.', imageUrl: 'https://picsum.photos/seed/fox/600/600', category: 'Animals', dateCreated: '2024-04-20', difficulty: 'Beginner' },
];

const featuredPosts: BlogPost[] = [
  { slug: 'beginner-crane-tutorial', title: 'Easy Origami Crane Tutorial for Beginners', date: '2024-05-01', excerpt: 'Learn to fold the iconic origami crane with our simple step-by-step guide. Perfect for starting your origami journey!', imageUrl: 'https://picsum.photos/seed/craneblog/800/450', content: '', category: 'Beginner Tutorials', skillLevel: 'Beginner' },
  { slug: 'my-origami-journey', title: 'Finding Calm in Creases: My Origami Story', date: '2024-04-15', excerpt: 'Discover how the delicate art of paper folding became a source of mindfulness and creativity in my life.', imageUrl: 'https://picsum.photos/seed/journey/800/450', content: '', category: 'My Origami Journey' },
  { slug: 'choosing-paper', title: 'The Best Paper for Your Origami Projects', date: '2024-03-28', excerpt: 'Unlock the secrets to selecting the perfect paper for different origami models, from simple folds to complex creations.', imageUrl: 'https://picsum.photos/seed/paper/800/450', content: '', category: 'Materials' },
];


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="https://picsum.photos/seed/hero/1600/900"
          alt="Stunning Origami Piece Hero Image"
          layout="fill"
          objectFit="cover"
          quality={85}
          className="absolute inset-0 z-0"
          priority // Load hero image faster
          data-ai-hint="origami abstract art"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {/* Content */}
        <div className="relative z-20 container max-w-screen-lg px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight shadow-text">
            Welcome to OriVerse
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto shadow-text">
            Explore the intricate beauty of origami. Discover tutorials, browse stunning creations, and unfold your creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/portfolio">
                View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
             <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/tutorials">
                Start Folding
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Origami Pieces Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-screen-xl px-4">
          <h2 className="text-3xl font-semibold text-center mb-4">Featured Creations</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            A glimpse into the world of possibilities folded from paper.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredOrigami.map((piece) => (
              <OrigamiCard key={piece.id} piece={piece} />
            ))}
          </div>
           <div className="text-center mt-12">
             <Button asChild variant="outline">
              <Link href="/portfolio">
                Explore Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </Button>
           </div>
        </div>
      </section>

       {/* Featured Blog Posts Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container max-w-screen-xl px-4">
          <h2 className="text-3xl font-semibold text-center mb-4">From the Blog</h2>
           <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
             Insights, tutorials, and stories from my paper folding adventures.
           </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="text-center mt-12">
             <Button asChild>
              <Link href="/blog">
                Read More Posts <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </Button>
           </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <NewsletterSignup />
    </div>
  );
}

// Add a simple text shadow utility if needed, or use Tailwind's text-shadow plugin if installed
// In globals.css or a utility CSS file:
// .shadow-text { text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); }
