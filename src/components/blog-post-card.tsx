
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/types';
import { cn } from '@/lib/utils';
import { ArrowRight, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface BlogPostCardProps {
  post: BlogPost;
  className?: string;
}

export function BlogPostCard({ post, className }: BlogPostCardProps) {
  return (
    <Card className={cn("overflow-hidden transition-shadow duration-300 hover:shadow-lg group flex flex-col", className)}>
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        <CardHeader className="p-0">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={post.imageUrl} // Uses the URL from the post prop, updated to use public/images paths
              alt={post.title}
              fill // Use fill instead of layout="fill"
              style={{ objectFit: "cover" }} // Use style prop for objectFit
              className="transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={post.dataAiHint || `origami blog ${post.category}`} // Use provided hint or generate default
              // Sizes optimized for common grid layouts (1, 2, or 3 columns)
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
              loading="lazy" // Cards are usually below the fold
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <Badge variant="outline" className="mb-2 text-xs">{post.category}</Badge>
          <CardTitle className="text-lg mb-2 line-clamp-2">{post.title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground line-clamp-3 mb-3">
            {post.excerpt}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center text-xs text-muted-foreground">
           <div className="flex items-center">
             <Calendar className="mr-1 h-3 w-3" />
             {format(new Date(post.date), 'MMM d, yyyy')}
           </div>
           <div className="flex items-center text-primary group-hover:text-primary/80 transition-colors"> {/* Adjusted hover color for dark theme */}
             Read More <ArrowRight className="ml-1 h-3 w-3"/>
           </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
