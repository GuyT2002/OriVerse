"use client";

import { useState } from 'react';
import type { Tutorial } from '@/types';
import { BlogPostCard } from '@/components/blog-post-card'; // Reuse BlogPostCard for tutorials
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

// Mock data - replace with actual data fetching
const allTutorials: Tutorial[] = [
  { slug: 'beginner-crane-tutorial', title: 'Easy Origami Crane Tutorial', date: '2024-05-01', excerpt: 'Learn the classic crane fold. A perfect start!', imageUrl: 'https://picsum.photos/seed/craneblog/800/450', content: '...', category: 'Beginner Tutorials', skillLevel: 'Beginner' },
  { slug: 'simple-boat', title: 'Fold a Simple Paper Boat', date: '2024-05-05', excerpt: 'A fun and easy model that actually floats (for a while!).', imageUrl: 'https://picsum.photos/seed/boat/800/450', content: '...', category: 'Beginner Tutorials', skillLevel: 'Beginner', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }, // Example video link
  { slug: 'intermediate-box', title: 'Origami Box with Lid', date: '2024-05-10', excerpt: 'Create a useful and decorative box from two sheets of paper.', imageUrl: 'https://picsum.photos/seed/box/800/450', content: '...', category: 'Intermediate Tutorials', skillLevel: 'Intermediate' },
  { slug: 'jumping-frog', title: 'How to Fold a Jumping Frog', date: '2024-05-15', excerpt: 'Fold a frog that really jumps! Hours of fun included.', imageUrl: 'https://picsum.photos/seed/frog/800/450', content: '...', category: 'Intermediate Tutorials', skillLevel: 'Intermediate' },
  { slug: 'advanced-rose', title: 'Folding the Kawasaki Rose', date: '2024-05-20', excerpt: 'Challenge yourself with this beautiful and intricate rose model.', imageUrl: 'https://picsum.photos/seed/roseblog/800/450', content: '...', category: 'Advanced Creations', skillLevel: 'Advanced' },
  { slug: 'modular-star-detail', title: 'Advanced Modular Star Folding', date: '2024-05-25', excerpt: 'Combine multiple units to create a stunning geometric star.', imageUrl: 'https://picsum.photos/seed/starblog/800/450', content: '...', category: 'Advanced Creations', skillLevel: 'Advanced' },
];

const skillLevels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function TutorialsPage() {
  const [filter, setFilter] = useState<string>('All');

  const filteredTutorials = filter === 'All'
    ? allTutorials
    : allTutorials.filter(tutorial => tutorial.skillLevel === filter);

  return (
    <div className="container max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-6">Origami Tutorials</h1>
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Learn the art of paper folding step-by-step. Choose a tutorial based on your skill level and start creating!
      </p>

      {/* Skill Level Filtering Tabs */}
      <div className="flex justify-center mb-12">
        <Tabs value={filter} onValueChange={setFilter} className="w-auto">
          <TabsList>
            {skillLevels.map((level) => (
              <TabsTrigger key={level} value={level}>
                {level}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Tutorials Grid */}
      {filteredTutorials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTutorials.map((tutorial) => (
            // Reusing BlogPostCard - might need a dedicated TutorialCard later if structure differs significantly
            <BlogPostCard key={tutorial.slug} post={tutorial} className="h-full" />
          ))}
        </div>
        ) : (
         <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No tutorials found for the "{filter}" skill level.</p>
            <Button variant="link" onClick={() => setFilter('All')} className="mt-4">
              Show All Tutorials
            </Button>
         </div>
       )}
    </div>
  );
}
