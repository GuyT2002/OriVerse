
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { OrigamiCard } from '@/components/origami-card';
import { BlogPostCard } from '@/components/blog-post-card';
import { NewsletterSignup } from '@/components/newsletter-signup';
import type { OrigamiPiece, BlogPost } from '@/types';

// Mock data - Updated with local image paths from public/images
const featuredOrigami: OrigamiPiece[] = [
  { id: 'sts-defect', title: 'The Defect (Slay the Spire)', slug: 'sts-defect', description: 'A complex origami interpretation of The Defect character from the game Slay the Spire.', imageUrl: '/images/the_defect.jpg', category: 'Characters', dateCreated: '2024-07-10', difficulty: 'Advanced', materials: 'Tissue Foil Paper', dataAiHint: "slay the spire defect character" },
  { id: 'origami-archer', title: 'Origami Archer', slug: 'origami-archer', description: 'An original design of a hooded archer, poised with bow and arrow.', imageUrl: '/images/archer.jpg', category: 'Characters', dateCreated: '2024-06-25', difficulty: 'Advanced', materials: 'Double Tissue Paper', dataAiHint: "green archer fantasy origami" },
  { id: 'paper-rooster', title: 'Paper Rooster', slug: 'paper-rooster', description: 'A proud origami rooster, capturing the bird\'s stance and plumage.', imageUrl: '/images/rooster.jpg', category: 'Animals', dateCreated: '2024-05-15', difficulty: 'Intermediate', materials: 'Origami Paper', dataAiHint: "origami rooster red" },
  { id: 'crested-kingfisher', title: 'Crested Kingfisher', slug: 'crested-kingfisher', description: 'A delicate origami model of a Crested Kingfisher perched elegantly.', imageUrl: '/images/crested_kingfisher.jpg', category: 'Animals', dateCreated: '2024-04-01', difficulty: 'Intermediate', materials: 'Washi Paper', dataAiHint: "blue bird kingfisher" },
];

const featuredPosts: BlogPost[] = [
  { slug: 'folding-the-defect', title: 'Folding The Defect: A Complex Challenge', date: '2024-07-15', excerpt: 'Explore the intricate process behind folding The Defect from Slay the Spire, a test of patience and precision.', imageUrl: '/images/the_defect.jpg', content: '', category: 'Advanced Creations', dataAiHint: "origami character blue yellow" },
  { slug: 'designing-the-archer', title: 'Designing the Origami Archer', date: '2024-07-01', excerpt: 'A look into the creative journey of designing and folding an original origami archer character.', imageUrl: '/images/archer.jpg', content: '', category: 'Original Designs', dataAiHint: "green archer fantasy origami detailed" },
  { slug: 'kingfisher-on-perch', title: 'Capturing the Crested Kingfisher in Paper', date: '2024-04-10', excerpt: 'Learn about the techniques used to fold a realistic Crested Kingfisher, focusing on posture and feather details.', imageUrl: '/images/crested_kingfisher.jpg', content: '', category: 'Animals', dataAiHint: "origami kingfisher blue bird"},
];


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/images/the_defect.jpg" // Updated hero image
          alt="Stunning Origami Piece Hero Image - The Defect"
          fill
          style={{ objectFit: "cover" }}
          quality={85}
          className="absolute inset-0 z-0"
          priority // Load hero image faster
          data-ai-hint="origami character blue yellow" // Update AI hint
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Increased overlay darkness */}
        {/* Content */}
        <div className="relative z-20 container max-w-screen-lg px-4 mx-auto"> {/* Added mx-auto */}
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
             <Button asChild size="lg" variant="outline" className="border-foreground/80 text-foreground hover:bg-foreground/10">
              <Link href="/tutorials">
                Start Folding
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Origami Pieces Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-screen-xl px-4 mx-auto"> {/* Added mx-auto */}
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

      {/* Image Section - Example Surfing Bird */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-screen-xl px-4 mx-auto text-center">
          <div className="relative inline-block mx-auto max-w-lg w-full aspect-[5/3]"> {/* Adjust aspect ratio if needed */}
            <Image
              src="/images/surfing_bird.jpg" // Updated to use local image
              alt="Surfing Bird origami"
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, 500px"
              className="rounded-lg shadow-md"
              data-ai-hint="origami bird surfing wave"
            />
          </div>
          <p className="mt-4 text-muted-foreground">An example of an original design: The Surfing Bird.</p>
        </div>
      </section>


       {/* Featured Blog Posts Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container max-w-screen-xl px-4 mx-auto"> {/* Added mx-auto */}
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
