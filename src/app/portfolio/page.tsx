"use client";

import { useState } from 'react';
import { OrigamiCard } from '@/components/origami-card';
import type { OrigamiPiece } from '@/types';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data - Updated with local image paths from public/images
const allOrigamiPieces: OrigamiPiece[] = [
  { id: 'sts-defect', title: 'The Defect (Slay the Spire)', slug: 'sts-defect', description: 'A complex origami interpretation of The Defect character from the game Slay the Spire.', imageUrl: '/images/defect.jpg', category: 'Characters', dateCreated: '2024-07-10', difficulty: 'Advanced', materials: 'Tissue Foil Paper', dataAiHint: "slay the spire defect character" },
  { id: 'origami-archer', title: 'Origami Archer', slug: 'origami-archer', description: 'An original design of a hooded archer, poised with bow and arrow. Folded from double tissue paper.', imageUrl: '/images/archer.jpg', category: 'Characters', dateCreated: '2024-06-25', difficulty: 'Advanced', materials: 'Double Tissue Paper', dataAiHint: "green archer fantasy origami" },
  { id: 'paper-rooster', title: 'Paper Rooster', slug: 'paper-rooster', description: 'A proud origami rooster, capturing the bird\'s stance and plumage with crisp folds.', imageUrl: '/images/rooster.jpg', category: 'Animals', dateCreated: '2024-05-15', difficulty: 'Intermediate', materials: 'Origami Paper', dataAiHint: "origami rooster red" },
  { id: 'crested-kingfisher', title: 'Crested Kingfisher', slug: 'crested-kingfisher', description: 'A delicate origami model of a Crested Kingfisher perched elegantly, folded from Washi paper.', imageUrl: '/images/kingfisher.jpg', category: 'Animals', dateCreated: '2024-04-01', difficulty: 'Intermediate', materials: 'Washi Paper', dataAiHint: "blue bird kingfisher" },
  { id: 'surfing-bird', title: 'Surfing Bird', slug: 'surfing-bird', description: 'An original design featuring a bird confidently riding a wave, a playful concept.', imageUrl: '/images/surfing_bird.jpg', category: 'Original Designs', dateCreated: '2024-03-20', difficulty: 'Intermediate', materials: 'Kraft & Kami Paper', dataAiHint: "origami bird surfing wave" },
  { id: 'simple-duck', title: 'Simple Duck', slug: 'simple-duck', description: 'A charming and straightforward origami duck, perfect for beginners.', imageUrl: '/images/duck.jpg', category: 'Animals', dateCreated: '2024-02-10', difficulty: 'Beginner', materials: 'Construction Paper', dataAiHint: "origami duck simple paper" },
 ];

const categories = ['All', 'Animals', 'Characters', 'Original Designs']; // Adjusted categories based on new data

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>('All');

  const filteredPieces = filter === 'All'
    ? allOrigamiPieces
    : allOrigamiPieces.filter(piece => piece.category === filter);

  return (
    <div className="container max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-6">Origami Portfolio</h1>
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Browse through a collection of my paper folding creations, ranging from game characters to original designs.
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
