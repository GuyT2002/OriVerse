
"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BlogPostCard } from '@/components/blog-post-card';
import { OrigamiCard } from '@/components/origami-card';
import type { BlogPost, OrigamiPiece } from '@/types';
import { Skeleton } from '@/components/ui/skeleton';

// Mock data - replace with actual data fetching/search API call
// Updated with local image paths from public/images
const allBlogPosts: BlogPost[] = [
   { slug: 'beginner-duck-tutorial', title: 'Easy Origami Duck Tutorial', date: '2024-02-15', excerpt: 'Learn the classic duck fold. A perfect start!', imageUrl: '/images/duck.jpg', content: '', category: 'Beginner Tutorials', skillLevel: 'Beginner' },
   { slug: 'rooster-folding-tips', title: 'Tips for Folding a Crisp Origami Rooster', date: '2024-05-20', excerpt: 'Discover techniques for sharp creases...', imageUrl: '/images/rooster.jpg', content: '', category: 'Intermediate Tutorials', skillLevel: 'Intermediate'},
   { slug: 'designing-the-archer', title: 'Designing the Origami Archer', date: '2024-07-01', excerpt: 'A look into the creative journey...', imageUrl: '/images/archer.jpg', content: '', category: 'Original Designs' },
   { slug: 'folding-the-defect', title: 'Folding The Defect: A Complex Challenge', date: '2024-07-15', excerpt: 'Explore the intricate process...', imageUrl: '/images/the_defect.jpg', content: '', category: 'Advanced Creations'},
];
const allOrigamiPieces: OrigamiPiece[] = [
  { id: 'sts-defect', title: 'The Defect (Slay the Spire)', slug: 'sts-defect', description: 'A complex origami interpretation...', imageUrl: '/images/the_defect.jpg', category: 'Characters', dateCreated: '2024-07-10', difficulty: 'Advanced' },
  { id: 'origami-archer', title: 'Origami Archer', slug: 'origami-archer', description: 'An original design of a hooded archer...', imageUrl: '/images/archer.jpg', category: 'Characters', dateCreated: '2024-06-25', difficulty: 'Advanced' },
  { id: 'paper-rooster', title: 'Paper Rooster', slug: 'paper-rooster', description: 'A proud origami rooster...', imageUrl: '/images/rooster.jpg', category: 'Animals', dateCreated: '2024-05-15', difficulty: 'Intermediate' },
  { id: 'crested-kingfisher', title: 'Crested Kingfisher', slug: 'crested-kingfisher', description: 'A delicate origami model...', imageUrl: '/images/crested_kingfisher.jpg', category: 'Animals', dateCreated: '2024-04-01', difficulty: 'Intermediate' },
  { id: 'surfing-bird', title: 'Surfing Bird', slug: 'surfing-bird', description: 'An original design featuring a bird...', imageUrl: '/images/surfing_bird.jpg', category: 'Original Designs', dateCreated: '2024-03-20', difficulty: 'Intermediate' },
  { id: 'simple-duck', title: 'Simple Duck', slug: 'simple-duck', description: 'A charming and straightforward duck...', imageUrl: '/images/duck.jpg', category: 'Animals', dateCreated: '2024-02-10', difficulty: 'Beginner' },
];

// Very basic mock search function
const searchContent = (query: string): { posts: BlogPost[], pieces: OrigamiPiece[] } => {
  const lowerQuery = query.toLowerCase();
  const posts = allBlogPosts.filter(p =>
    p.title.toLowerCase().includes(lowerQuery) ||
    p.excerpt.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery)
  );
  const pieces = allOrigamiPieces.filter(p =>
    p.title.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery)
  );
  return { posts, pieces };
};


export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState<{ posts: BlogPost[], pieces: OrigamiPiece[] } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setLoading(true);
      // Simulate API call delay
      const timer = setTimeout(() => {
        const searchResults = searchContent(query);
        setResults(searchResults);
        setLoading(false);
      }, 500); // Simulate network delay
       return () => clearTimeout(timer);
    } else {
      setResults({ posts: [], pieces: [] });
      setLoading(false);
    }
  }, [query]);

  return (
    <div className="container max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">
        Search Results {query ? `for "${query}"` : ''}
      </h1>

      {loading && (
        <div className="space-y-8">
           <Skeleton className="h-8 w-1/3" />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Skeleton className="h-64 rounded-lg" />
              <Skeleton className="h-64 rounded-lg" />
              <Skeleton className="h-64 rounded-lg" />
           </div>
           <Skeleton className="h-8 w-1/3" />
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Skeleton className="h-72 rounded-lg" />
              <Skeleton className="h-72 rounded-lg" />
               <Skeleton className="h-72 rounded-lg" />
               <Skeleton className="h-72 rounded-lg" />
           </div>
        </div>
      )}

      {!loading && !query && (
        <p className="text-muted-foreground">Please enter a search term in the header.</p>
      )}

      {!loading && query && results && (results.posts.length > 0 || results.pieces.length > 0) && (
        <div className="space-y-12">
          {/* Blog Post Results */}
          {results.posts.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-6">Blog Posts & Tutorials ({results.posts.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {results.posts.map((post) => (
                  <BlogPostCard key={`post-${post.slug}`} post={post} className="h-full" />
                ))}
              </div>
            </section>
          )}

          {/* Origami Piece Results */}
          {results.pieces.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-6">Portfolio Pieces ({results.pieces.length})</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                {results.pieces.map((piece) => (
                  <OrigamiCard key={`piece-${piece.id}`} piece={piece} />
                ))}
              </div>
            </section>
          )}
        </div>
      )}

       {!loading && query && results && results.posts.length === 0 && results.pieces.length === 0 && (
         <p className="text-center text-xl text-muted-foreground py-16">
            No results found for "{query}". Try searching for something else.
         </p>
       )}
    </div>
  );
}
