import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { OrigamiPiece } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, Tag, Layers, Scissors } from 'lucide-react'; // Layers for Difficulty, Scissors for Materials
import { format } from 'date-fns';

// Mock data fetching function - replace with actual data source access
async function getOrigamiPieceBySlug(slug: string): Promise<OrigamiPiece | null> {
  const allPieces: OrigamiPiece[] = [ // Same mock data as portfolio page for consistency
    { id: '1', title: 'Graceful Crane', slug: 'graceful-crane', description: 'A classic symbol of peace and longevity, folded with intricate detail. The crane is one of the most recognized origami models worldwide.', imageUrl: 'https://picsum.photos/seed/crane/800/800', category: 'Animals', dateCreated: '2024-01-15', difficulty: 'Intermediate', materials: 'Kami Paper (15cm x 15cm)' },
    { id: '2', title: 'Blooming Lotus', slug: 'blooming-lotus', description: 'An elegant lotus flower, perfect as a centerpiece or gift. This model uses multiple folds to create petal layers.', imageUrl: 'https://picsum.photos/seed/lotus/800/800', category: 'Flowers', dateCreated: '2024-02-10', difficulty: 'Intermediate', materials: 'Washi Paper (20cm x 20cm)' },
    { id: '3', title: 'Geometric Star', slug: 'geometric-star', description: 'A modular origami star showcasing mesmerizing symmetry. Requires assembling multiple identical units.', imageUrl: 'https://picsum.photos/seed/star/800/800', category: 'Geometric', dateCreated: '2024-03-05', difficulty: 'Advanced', materials: 'Tant Paper (6 units, 7.5cm x 7.5cm each)' },
    { id: '4', title: 'Playful Fox', slug: 'playful-fox', description: 'A charming little fox character folded from a single sheet. Features simple, expressive folds.', imageUrl: 'https://picsum.photos/seed/fox/800/800', category: 'Animals', dateCreated: '2024-04-20', difficulty: 'Beginner', materials: 'Kraft Paper (10cm x 10cm)' },
    { id: '5', title: 'Abstract Sculpture', slug: 'abstract-sculpture', description: 'Exploring form and texture through complex folds and crumpling techniques. Inspired by natural rock formations.', imageUrl: 'https://picsum.photos/seed/abstract1/800/800', category: 'Abstract Art', dateCreated: '2024-05-12', difficulty: 'Advanced', materials: 'Elephant Hide Paper (30cm x 30cm)' },
    { id: '6', title: 'Delicate Butterfly', slug: 'delicate-butterfly', description: 'A beautiful butterfly with detailed wing patterns achieved through careful thinning and shaping.', imageUrl: 'https://picsum.photos/seed/butterfly/800/800', category: 'Animals', dateCreated: '2024-06-01', difficulty: 'Intermediate', materials: 'Chiyogami Paper (12cm x 12cm)' },
    { id: '7', title: 'Origami Rose', slug: 'origami-rose', description: 'A classic Kawasaki rose, known for its realistic appearance and challenging twist folds.', imageUrl: 'https://picsum.photos/seed/rose/800/800', category: 'Flowers', dateCreated: '2024-06-15', difficulty: 'Advanced', materials: 'Origami Paper (Special Rose Paper, 20cm x 20cm)' },
    { id: '8', title: 'Modular Cube', slug: 'modular-cube', description: 'A simple yet satisfying modular origami project using the Sonobe unit. Great introduction to modular folding.', imageUrl: 'https://picsum.photos/seed/cube/800/800', category: 'Geometric', dateCreated: '2024-07-01', difficulty: 'Beginner', materials: 'Construction Paper (6 units, 10cm x 10cm each)' },
  ];
  return allPieces.find(p => p.slug === slug) || null;
}

// Generate static paths if using SSG
export async function generateStaticParams() {
 const allPieces: OrigamiPiece[] = [ /* Copy mock data here */
    { id: '1', title: 'Graceful Crane', slug: 'graceful-crane', description: 'A classic symbol of peace...', imageUrl: 'https://picsum.photos/seed/crane/800/800', category: 'Animals', dateCreated: '2024-01-15', difficulty: 'Intermediate', materials: 'Kami Paper' },
    { id: '2', title: 'Blooming Lotus', slug: 'blooming-lotus', description: 'An elegant lotus flower...', imageUrl: 'https://picsum.photos/seed/lotus/800/800', category: 'Flowers', dateCreated: '2024-02-10', difficulty: 'Intermediate', materials: 'Washi Paper' },
    { id: '3', title: 'Geometric Star', slug: 'geometric-star', description: 'A modular origami star...', imageUrl: 'https://picsum.photos/seed/star/800/800', category: 'Geometric', dateCreated: '2024-03-05', difficulty: 'Advanced', materials: 'Tant Paper' },
    { id: '4', title: 'Playful Fox', slug: 'playful-fox', description: 'A charming little fox character...', imageUrl: 'https://picsum.photos/seed/fox/800/800', category: 'Animals', dateCreated: '2024-04-20', difficulty: 'Beginner', materials: 'Kraft Paper' },
    { id: '5', title: 'Abstract Sculpture', slug: 'abstract-sculpture', description: 'Exploring form and texture...', imageUrl: 'https://picsum.photos/seed/abstract1/800/800', category: 'Abstract Art', dateCreated: '2024-05-12', difficulty: 'Advanced', materials: 'Elephant Hide Paper' },
    { id: '6', title: 'Delicate Butterfly', slug: 'delicate-butterfly', description: 'A beautiful butterfly...', imageUrl: 'https://picsum.photos/seed/butterfly/800/800', category: 'Animals', dateCreated: '2024-06-01', difficulty: 'Intermediate', materials: 'Chiyogami Paper' },
    { id: '7', title: 'Origami Rose', slug: 'origami-rose', description: 'A classic Kawasaki rose...', imageUrl: 'https://picsum.photos/seed/rose/800/800', category: 'Flowers', dateCreated: '2024-06-15', difficulty: 'Advanced', materials: 'Origami Paper' },
    { id: '8', title: 'Modular Cube', slug: 'modular-cube', description: 'A simple yet satisfying...', imageUrl: 'https://picsum.photos/seed/cube/800/800', category: 'Geometric', dateCreated: '2024-07-01', difficulty: 'Beginner', materials: 'Construction Paper' },
 ];
 return allPieces.map((piece) => ({
    slug: piece.slug,
  }));
}


interface OrigamiPiecePageProps {
  params: { slug: string };
}

export default async function OrigamiPiecePage({ params }: OrigamiPiecePageProps) {
  const piece = await getOrigamiPieceBySlug(params.slug);

  if (!piece) {
    notFound();
  }

  return (
    <div className="container max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <article>
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{piece.title}</h1>
           <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-1.5 h-4 w-4" />
              <span>Created: {format(new Date(piece.dateCreated), 'MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center">
               <Tag className="mr-1.5 h-4 w-4" />
               <Badge variant="secondary">{piece.category}</Badge>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
           {/* Image */}
           <div className="md:col-span-3 aspect-square relative rounded-lg overflow-hidden shadow-md bg-muted/30">
             <Image
               src={piece.imageUrl}
               alt={piece.title}
               fill // Use fill instead of layout="fill"
               style={{ objectFit: "contain" }} // Use style prop for objectFit
               className="mix-blend-luminosity" // Helps blend image better on dark bg
               data-ai-hint={`${piece.category} origami`}
             />
           </div>

            {/* Details */}
           <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-3 border-b border-border/50 pb-2">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{piece.description}</p>
            </div>

             <Separator className="border-border/50"/>

            <div className="space-y-3">
                 <h3 className="text-lg font-medium">Details</h3>
                 {piece.difficulty && (
                    <div className="flex items-center text-sm">
                        <Layers className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                        <span className="font-medium mr-2">Difficulty:</span>
                        <Badge variant={
                            piece.difficulty === 'Beginner' ? 'default' :
                            piece.difficulty === 'Intermediate' ? 'secondary' : 'destructive'
                        } className="capitalize">{piece.difficulty}</Badge>
                    </div>
                 )}
                 {piece.materials && (
                     <div className="flex items-center text-sm">
                        <Scissors className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                        <span className="font-medium mr-2">Materials:</span>
                        <span className="text-muted-foreground">{piece.materials}</span>
                    </div>
                 )}
            </div>

             {/* Add sections for Design Process, Folding Techniques if available in data */}

           </div>
        </div>

         {/* Optional: Add related pieces section */}
      </article>
    </div>
  );
}
