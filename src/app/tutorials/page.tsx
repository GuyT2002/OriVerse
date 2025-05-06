
"use client";

import { useState } from 'react';
import type { Tutorial } from '@/types';
import { BlogPostCard } from '@/components/blog-post-card'; // Reuse BlogPostCard for tutorials
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

// Mock data - replace with actual data fetching, updated with local paths from public/images
const allTutorials: Tutorial[] = [
  { slug: 'beginner-duck-tutorial', title: 'Easy Origami Duck Tutorial', date: '2024-02-15', excerpt: 'A simple step-by-step guide to folding a cute origami duck...', imageUrl: '/images/duck.jpg', content: '...', category: 'Beginner Tutorials', skillLevel: 'Beginner', dataAiHint: "origami duck tutorial easy"},
  { slug: 'simple-boat', title: 'Fold a Simple Paper Boat', date: '2024-05-05', excerpt: 'A fun and easy model that actually floats (for a while!).', imageUrl: '/images/the_defect.jpg', content: '...', category: 'Beginner Tutorials', skillLevel: 'Beginner', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', dataAiHint: "origami paper boat tutorial"}, // Placeholder image (the_defect)
  { slug: 'rooster-folding-tips', title: 'Tips for Folding a Crisp Origami Rooster', date: '2024-05-20', excerpt: 'Discover techniques to achieve sharp creases and a lively posture when folding an origami rooster.', imageUrl: '/images/rooster.jpg', content: '...', category: 'Intermediate Tutorials', skillLevel: 'Intermediate', dataAiHint: "origami rooster folding"},
  { slug: 'intermediate-box', title: 'Origami Box with Lid', date: '2024-05-10', excerpt: 'Create a useful and decorative box from two sheets of paper.', imageUrl: '/images/archer.jpg', content: '...', category: 'Intermediate Tutorials', skillLevel: 'Intermediate', dataAiHint: "origami box tutorial" }, // Placeholder image (archer)
  { slug: 'jumping-frog', title: 'How to Fold a Jumping Frog', date: '2024-05-15', excerpt: 'Fold a frog that really jumps! Hours of fun included.', imageUrl: '/images/crested_kingfisher.jpg', content: '...', category: 'Intermediate Tutorials', skillLevel: 'Intermediate', dataAiHint: "origami frog tutorial" }, // Placeholder image (kingfisher)
  { slug: 'advanced-rose', title: 'Folding the Kawasaki Rose', date: '2024-05-20', excerpt: 'Challenge yourself with this beautiful and intricate rose model.', imageUrl: '/images/surfing_bird.jpg', content: '...', category: 'Advanced Creations', skillLevel: 'Advanced', dataAiHint: "origami rose tutorial advanced" }, // Placeholder image (surfing_bird)
  { slug: 'modular-star-detail', title: 'Advanced Modular Star Folding', date: '2024-05-25', excerpt: 'Combine multiple units to create a stunning geometric star.', imageUrl: '/images/rooster.jpg', content: '...', category: 'Advanced Creations', skillLevel: 'Advanced', dataAiHint: "origami modular star tutorial" }, // Placeholder image (rooster - reused)
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
