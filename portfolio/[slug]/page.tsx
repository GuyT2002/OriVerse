
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { OrigamiPiece } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, Tag, Layers, Scissors } from 'lucide-react'; // Layers for Difficulty, Scissors for Materials
import { format } from 'date-fns';

// Updated Mock data with local image paths from public/images
const allPieces: OrigamiPiece[] = [
    { id: 'sts-defect', title: 'The Defect (Slay the Spire)', slug: 'sts-defect', description: 'A complex origami interpretation of The Defect character from the game Slay the Spire, focusing on its unique robotic and orb-like features. Folded from vibrant tissue foil paper.', imageUrl: '/images/the_defect.jpg', category: 'Characters', dateCreated: '2024-07-10', difficulty: 'Advanced', materials: 'Tissue Foil Paper (30cm x 30cm)', dataAiHint: "slay the spire defect character" },
    { id: 'origami-archer', title: 'Origami Archer', slug: 'origami-archer', description: 'An original design of a hooded archer, poised with bow and arrow. The double tissue paper allows for fine details in the clothing and weapon.', imageUrl: '/images/archer.jpg', category: 'Characters', dateCreated: '2024-06-25', difficulty: 'Advanced', materials: 'Double Tissue Paper (35cm x 35cm)', dataAiHint: "green archer fantasy origami" },
    { id: 'paper-rooster', title: 'Paper Rooster', slug: 'paper-rooster', description: 'A proud origami rooster, capturing the bird\'s confident stance and detailed tail plumage. The red paper highlights its characteristic features.', imageUrl: '/images/rooster.jpg', category: 'Animals', dateCreated: '2024-05-15', difficulty: 'Intermediate', materials: 'Origami Paper (20cm x 20cm)', dataAiHint: "origami rooster red" },
    { id: 'crested-kingfisher', title: 'Crested Kingfisher', slug: 'crested-kingfisher', description: 'A delicate origami model of a Crested Kingfisher perched elegantly. The Washi paper adds texture and suits the bird\'s form.', imageUrl: '/images/crested_kingfisher.jpg', category: 'Animals', dateCreated: '2024-04-01', difficulty: 'Intermediate', materials: 'Washi Paper (18cm x 18cm)', dataAiHint: "blue bird kingfisher" },
    { id: 'surfing-bird', title: 'Surfing Bird', slug: 'surfing-bird', description: 'An original design featuring a bird confidently riding a wave. A playful concept combining kraft paper for the bird and kami for the wave.', imageUrl: '/images/surfing_bird.jpg', category: 'Original Designs', dateCreated: '2024-03-20', difficulty: 'Intermediate', materials: 'Kraft & Kami Paper (15cm & 20cm squares)', dataAiHint: "origami bird surfing wave" },
    { id: 'simple-duck', title: 'Simple Duck', slug: 'simple-duck', description: 'A charming and straightforward origami duck with distinct yellow beak and feet. An accessible model great for beginners.', imageUrl: '/images/duck.jpg', category: 'Animals', dateCreated: '2024-02-10', difficulty: 'Beginner', materials: 'Construction Paper (15cm x 15cm)', dataAiHint: "origami duck simple paper" },
];

// Mock data fetching function - replace with actual data source access
async function getOrigamiPieceBySlug(slug: string): Promise<OrigamiPiece | null> {
  return allPieces.find(p => p.slug === slug) || null;
}

// Generate static paths if using SSG
export async function generateStaticParams() {
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
               src={piece.imageUrl} // Uses the URL from the piece prop, updated to use public/images paths
               alt={piece.title}
               fill // Use fill instead of layout="fill"
               style={{ objectFit: "contain" }} // Use style prop for objectFit
               className="mix-blend-luminosity" // Helps blend image better on dark bg
               data-ai-hint={piece.dataAiHint || `${piece.category} origami`}
               priority // Load image sooner as it's the main content
               sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 768px" // Provide sizes prop
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
