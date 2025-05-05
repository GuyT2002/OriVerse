
"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BlogPostCard } from '@/components/blog-post-card';
import { OrigamiCard } from '@/components/origami-card';
import type { BlogPost, OrigamiPiece } from '@/types';
import { Skeleton } from '@/components/ui/skeleton';

// Mock data - replace with actual data fetching/search API call
const allBlogPosts: BlogPost[] = [
   { slug: 'beginner-crane-tutorial', title: 'Easy Origami Crane Tutorial', date: '2024-05-01', excerpt: 'Learn the classic crane fold. A perfect start!', imageUrl: 'https://picsum.photos/seed/craneblog/800/450', content: '', category: 'Beginner Tutorials', skillLevel: 'Beginner' },
  { slug: 'my-origami-journey', title: 'Finding Calm in Creases: My Origami Story', date: '2024-04-15', excerpt: 'Discover how paper folding became...', imageUrl: 'https://picsum.photos/seed/journey/800/450', content: '', category: 'My Origami Journey' },
  { slug: 'choosing-paper', title: 'The Best Paper for Your Origami Projects', date: '2024-03-28', excerpt: 'Unlock the secrets to selecting the perfect paper...', imageUrl: 'https://picsum.photos/seed/paper/800/450', content: '', category: 'Materials' },
   { slug: 'simple-boat', title: 'Fold a Simple Paper Boat', date: '2024-05-05', excerpt: 'A fun and easy model that actually floats (for a while!).', imageUrl: 'https://picsum.photos/seed/boat/800/450', content: '...', category: 'Beginner Tutorials', skillLevel: 'Beginner'},
];
const allOrigamiPieces: OrigamiPiece[] = [
  { id: '1', title: 'Graceful Crane', slug: 'graceful-crane', description: 'A classic symbol of peace...', imageUrl: 'https://picsum.photos/seed/crane/600/600', category: 'Animals', dateCreated: '2024-01-15', difficulty: 'Intermediate' },
  { id: '2', title: 'Blooming Lotus', slug: 'blooming-lotus', description: 'An elegant lotus flower...', imageUrl: 'https://picsum.photos/seed/lotus/600/600', category: 'Flowers', dateCreated: '2024-02-10', difficulty: 'Intermediate' },
  { id: '4', title: 'Playful Fox', slug: 'playful-fox', description: 'A charming little fox character...', imageUrl: 'https://picsum.photos/seed/fox/600/600', category: 'Animals', dateCreated: '2024-04-20', difficulty: 'Beginner' },
   { id: '7', title: 'Origami Rose', slug: 'origami-rose', description: 'A classic Kawasaki rose...', imageUrl: 'https://picsum.photos/seed/rose/600/600', category: 'Flowers', dateCreated: '2024-06-15', difficulty: 'Advanced' },
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
