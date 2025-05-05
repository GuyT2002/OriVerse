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
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={`origami blog ${post.category}`}
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
           <div className="flex items-center text-accent-foreground group-hover:text-primary transition-colors">
             Read More <ArrowRight className="ml-1 h-3 w-3"/>
           </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
