
"use client";

import { useState } from 'react';
import type { BlogPost } from '@/types';
import { BlogPostCard } from '@/components/blog-post-card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// Mock data - replace with actual data fetching
const allBlogPosts: BlogPost[] = [
  { slug: 'beginner-crane-tutorial', title: 'Easy Origami Crane Tutorial for Beginners', date: '2024-05-01', excerpt: 'Learn to fold the iconic origami crane with our simple step-by-step guide. Perfect for starting your origami journey!', imageUrl: 'https://picsum.photos/seed/craneblog/800/450', content: '', category: 'Beginner Tutorials', skillLevel: 'Beginner' },
  { slug: 'my-origami-journey', title: 'Finding Calm in Creases: My Origami Story', date: '2024-04-15', excerpt: 'Discover how the delicate art of paper folding became a source of mindfulness and creativity in my life.', imageUrl: 'https://picsum.photos/seed/journey/800/450', content: '', category: 'My Origami Journey' },
  { slug: 'choosing-paper', title: 'The Best Paper for Your Origami Projects', date: '2024-03-28', excerpt: 'Unlock the secrets to selecting the perfect paper for different origami models, from simple folds to complex creations.', imageUrl: 'https://picsum.photos/seed/paper/800/450', content: '', category: 'Materials' },
  { slug: 'advanced-rose-story', title: 'The Challenge of Folding the Kawasaki Rose', date: '2024-06-10', excerpt: 'A personal account of the trials and triumphs involved in mastering this notoriously difficult origami model.', imageUrl: 'https://picsum.photos/seed/rosestory/800/450', content: '', category: 'Advanced Creations' },
  { slug: 'inspiration-nature', title: 'Origami Inspiration from the Natural World', date: '2024-06-25', excerpt: 'How observing nature sparks ideas for new origami designs and techniques.', imageUrl: 'https://picsum.photos/seed/natureinsp/800/450', content: '', category: 'Inspiration' },
   { slug: 'simple-box-how-to', title: 'How to Fold a Simple Origami Box', date: '2024-07-01', excerpt: 'A practical tutorial for creating a small, sturdy box perfect for gifts or storage.', imageUrl: 'https://picsum.photos/seed/boxblog/800/450', content: '', category: 'Beginner Tutorials', skillLevel: 'Beginner'},
];

const categories = ['All', 'Beginner Tutorials', 'Advanced Creations', 'My Origami Journey', 'Materials', 'Inspiration'];

export default function BlogPage() {
  const [filter, setFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredPosts = allBlogPosts
    .filter(post => filter === 'All' || post.category === filter)
    .filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="container max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-6">OriVerse Blog</h1>
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Dive into articles about origami techniques, personal stories, material guides, and sources of inspiration.
      </p>

      {/* Filtering and Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
         <Tabs value={filter} onValueChange={setFilter} className="w-full md:w-auto overflow-x-auto">
          <TabsList className="w-max">
             {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
         <div className="relative w-full md:w-64">
            <Input
              type="search"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
      </div>


      {/* Blog Posts Grid */}
       {filteredPosts.length > 0 ? (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} className="h-full" />
          ))}
        </div>
       ) : (
         <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No blog posts found matching your criteria.
            </p>
            { (filter !== 'All' || searchTerm) &&
              <Button variant="link" onClick={() => { setFilter('All'); setSearchTerm(''); }} className="mt-4">
                Clear Filters & Search
              </Button>
            }
         </div>
       )}

        {/* TODO: Add Pagination if many posts */}
    </div>
  );
}

