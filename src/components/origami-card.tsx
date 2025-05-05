import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { OrigamiPiece } from '@/types';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface OrigamiCardProps {
  piece: OrigamiPiece;
  className?: string;
}

export function OrigamiCard({ piece, className }: OrigamiCardProps) {
  return (
    <Card className={cn("overflow-hidden transition-shadow duration-300 hover:shadow-lg group", className)}>
      <Link href={`/portfolio/${piece.slug}`} className="block">
        <CardHeader className="p-0">
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={piece.imageUrl}
              alt={piece.title}
              fill // Use fill instead of layout="fill"
              style={{ objectFit: "cover" }} // Use style prop for objectFit
              className="transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={`${piece.category} origami`}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg mb-2 line-clamp-2">{piece.title}</CardTitle>
          <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{piece.description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
           <Badge variant="secondary">{piece.category}</Badge>
           <div className="flex items-center text-xs text-primary group-hover:text-primary/80 transition-colors"> {/* Adjusted hover color for dark theme */}
             View Details <ArrowRight className="ml-1 h-3 w-3"/>
           </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
