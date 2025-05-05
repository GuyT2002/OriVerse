"use client";

import { useState } from 'react';
import { OrigamiCard } from '@/components/origami-card';
import type { OrigamiPiece } from '@/types';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data - replace with actual data fetching
const allOrigamiPieces: OrigamiPiece[] = [
  { id: '1', title: 'Graceful Crane', slug: 'graceful-crane', description: 'A classic symbol of peace and longevity, folded with intricate detail.', imageUrl: 'https://picsum.photos/seed/crane/600/600', category: 'Animals', dateCreated: '2024-01-15', difficulty: 'Intermediate', materials: 'Kami Paper' },
  { id: '2', title: 'Blooming Lotus', slug: 'blooming-lotus', description: 'An elegant lotus flower, perfect as a centerpiece or gift.', imageUrl: 'https://picsum.photos/seed/lotus/600/600', category: 'Flowers', dateCreated: '2024-02-10', difficulty: 'Intermediate', materials: 'Washi Paper' },
  { id: '3', title: 'Geometric Star', slug: 'geometric-star', description: 'A modular origami star showcasing mesmerizing symmetry.', imageUrl: 'https://picsum.photos/seed/star/600/600', category: 'Geometric', dateCreated: '2024-03-05', difficulty: 'Advanced', materials: 'Tant Paper' },
  { id: '4', title: 'Playful Fox', slug: 'playful-fox', description: 'A charming little fox character folded from a single sheet.', imageUrl: 'https://picsum.photos/seed/fox/600/600', category: 'Animals', dateCreated: '2024-04-20', difficulty: 'Beginner', materials: 'Kraft Paper' },
  { id: '5', title: 'Abstract Sculpture', slug: 'abstract-sculpture', description: 'Exploring form and texture through complex folds.', imageUrl: 'https://picsum.photos/seed/abstract1/600/600', category: 'Abstract Art', dateCreated: '2024-05-12', difficulty: 'Advanced', materials: 'Elephant Hide Paper' },
  { id: '6', title: 'Delicate Butterfly', slug: 'delicate-butterfly', description: 'A beautiful butterfly with detailed wing patterns.', imageUrl: 'https://picsum.photos/seed/butterfly/600/600', category: 'Animals', dateCreated: '2024-06-01', difficulty: 'Intermediate', materials: 'Chiyogami Paper' },
  { id: '7', title: 'Origami Rose', slug: 'origami-rose', description: 'A classic Kawasaki rose, known for its realistic appearance.', imageUrl: 'https://picsum.photos/seed/rose/600/600', category: 'Flowers', dateCreated: '2024-06-15', difficulty: 'Advanced', materials: 'Origami Paper' },
  { id: '8', title: 'Modular Cube', slug: 'modular-cube', description: 'A simple yet satisfying modular origami project.', imageUrl: 'https://picsum.photos/seed/cube/600/600', category: 'Geometric', dateCreated: '2024-07-01', difficulty: 'Beginner', materials: 'Construction Paper' },
];

const categories = ['All', 'Animals', 'Flowers', 'Geometric', 'Abstract Art'];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>('All');

  const filteredPieces = filter === 'All'
    ? allOrigamiPieces
    : allOrigamiPieces.filter(piece => piece.category === filter);

  return (
    <div className="container max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-6">Origami Portfolio</h1>
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Browse through a collection of my paper folding creations, ranging from traditional designs to modern interpretations.
      </p>

      {/* Filtering Tabs */}
      <div className="flex justify-center mb-12">
        <Tabs value={filter} onValueChange={setFilter} className="w-auto">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Origami Grid */}
      {filteredPieces.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredPieces.map((piece) => (
            <OrigamiCard key={piece.id} piece={piece} />
          ))}
        </div>
      ) : (
         <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No origami pieces found for the category "{filter}".</p>
            <Button variant="link" onClick={() => setFilter('All')} className="mt-4">
              Show All Pieces
            </Button>
         </div>
      )}
    </div>
  );
}
