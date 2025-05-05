
"use client";

import { useState } from 'react';
import type { BlogPost } from '@/types';
import { BlogPostCard } from '@/components/blog-post-card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// Mock data - Updated with user's designs and related posts
const allBlogPosts: BlogPost[] = [
  { slug: 'folding-the-defect', title: 'Folding The Defect: A Complex Challenge', date: '2024-07-15', excerpt: 'Explore the intricate process behind folding The Defect from Slay the Spire, a test of patience and precision using tissue foil.', imageUrl: 'https://picsum.photos/seed/defectblog/800/450', content: '', category: 'Advanced Creations', dataAiHint: "origami character blue yellow" },
  { slug: 'designing-the-archer', title: 'Designing the Origami Archer', date: '2024-07-01', excerpt: 'A look into the creative journey of designing and folding an original origami archer character from double tissue paper.', imageUrl: 'https://picsum.photos/seed/archerblog/800/450', content: '', category: 'Original Designs', dataAiHint: "origami archer green detailed" },
  { slug: 'kingfisher-on-perch', title: 'Capturing the Crested Kingfisher in Paper', date: '2024-04-10', excerpt: 'Learn about the techniques used to fold a realistic Crested Kingfisher, focusing on posture and feather details with Washi paper.', imageUrl: 'https://picsum.photos/seed/kingfisherblog/800/450', content: '', category: 'Animals', dataAiHint: "origami kingfisher blue bird"},
  { slug: 'rooster-folding-tips', title: 'Tips for Folding a Crisp Origami Rooster', date: '2024-05-20', excerpt: 'Discover techniques to achieve sharp creases and a lively posture when folding an origami rooster.', imageUrl: 'https://picsum.photos/seed/roosterblog/800/450', content: '', category: 'Intermediate Tutorials', skillLevel: 'Intermediate', dataAiHint: "origami rooster folding"},
  { slug: 'playful-surfing-bird', title: 'Bringing the Surfing Bird to Life', date: '2024-03-25', excerpt: 'The story behind the original Surfing Bird design, combining different paper types for a unique effect.', imageUrl: 'https://picsum.photos/seed/surfingbirdblog/800/450', content: '', category: 'Original Designs', dataAiHint: "origami bird wave design" },
   { slug: 'beginner-duck-tutorial', title: 'Easy Origami Duck Tutorial', date: '2024-02-15', excerpt: 'A simple step-by-step guide to folding a cute origami duck, perfect for beginners and kids.', imageUrl: 'https://picsum.photos/seed/duckblog/800/450', content: '...', category: 'Beginner Tutorials', skillLevel: 'Beginner', dataAiHint: "origami duck tutorial easy"},
];

const categories = ['All', 'Beginner Tutorials', 'Intermediate Tutorials', 'Advanced Creations', 'Original Designs', 'Animals']; // Adjusted categories

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
        Dive into articles about origami techniques, design processes, specific model tutorials, and personal folding stories.
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

