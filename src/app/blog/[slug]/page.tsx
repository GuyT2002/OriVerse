import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { BlogPost } from '@/types'; // Assuming Tutorial might inherit or be similar for content
import { Badge } from '@/components/ui/badge';
import { Calendar, Tag, User } from 'lucide-react'; // User for author
import { format } from 'date-fns';
import { Separator } from '@/components/ui/separator';
import ReactMarkdown from 'react-markdown'; // Example: Use react-markdown if content is Markdown

// Mock data fetching function - replace with actual data source access
async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const allPosts: BlogPost[] = [ // Same mock data as blog page for consistency
    { slug: 'beginner-crane-tutorial', title: 'Easy Origami Crane Tutorial for Beginners', date: '2024-05-01', excerpt: 'Learn to fold the iconic origami crane...', imageUrl: 'https://picsum.photos/seed/craneblog/1200/600', content: `
Folding the origami crane is a wonderful starting point. Here's how:

1.  **Start with a square sheet of paper.** Color side up if using colored paper.
2.  **Fold in half diagonally both ways.** Crease well and unfold.
3.  **Fold in half horizontally and vertically.** Crease well and unfold.
4.  **Bring the four corners together** to form a preliminary base (a smaller square).
5.  **Fold the open edges** towards the center line on both sides.
6.  **Fold the top point down** and crease well. Unfold these last three steps.
7.  **Lift the bottom point up**, reversing the creases to form a petal fold.
8.  **Repeat on the other side.**
9.  **Fold the narrow points** towards the center line.
10. **Inside reverse fold** these narrow points to create the head and tail.
11. **Fold the wings down.**

You've folded a crane! Practice makes perfect.
    `, category: 'Beginner Tutorials' },
    { slug: 'my-origami-journey', title: 'Finding Calm in Creases: My Origami Story', date: '2024-04-15', excerpt: 'Discover how paper folding became...', imageUrl: 'https://picsum.photos/seed/journey/1200/600', content: `
It started unexpectedly. A simple paper airplane, then a boat, then a crane gifted by a friend. I found a quiet focus in the precise movements, a calm in the rustle of paper. Each successful fold felt like a small victory, a moment of creation from nothing but a flat sheet.

Origami became my escape during stressful times, a way to channel anxiety into something beautiful and tangible. The challenge of complex models pushed me, taught me patience, and showed me the rewards of persistence. It's more than a hobby; it's a form of mindfulness, a connection to an ancient art, and a constant source of wonder.
    `, category: 'My Origami Journey' },
     { slug: 'choosing-paper', title: 'The Best Paper for Your Origami Projects', date: '2024-03-28', excerpt: 'Unlock the secrets to selecting the perfect paper...', imageUrl: 'https://picsum.photos/seed/paper/1200/600', content: `
The paper you choose can dramatically affect the final look and foldability of your origami model. Here's a quick guide:

*   **Kami:** Standard, affordable origami paper. Thin, crisp, usually colored on one side. Great for beginners and simple models.
*   **Washi:** Traditional Japanese paper, often beautifully patterned. Stronger and more textured than kami. Excellent for decorative pieces.
*   **Tant:** Slightly thicker and textured, holds creases very well. Good for complex models and geometric shapes.
*   **Kraft:** Sturdy, brown paper. Gives a rustic look, good for animal models or practice.
*   **Elephant Hide/Lokta:** Very strong, textured papers. Ideal for tessellations, wet-folding, and sculptural pieces.

Experiment to find what works best for you and the specific model!
    `, category: 'Materials' },
    // Add more posts with content...
  ];
  return allPosts.find(p => p.slug === slug) || null;
}

// Generate static paths if using SSG
export async function generateStaticParams() {
 const allPosts: BlogPost[] = [ /* Copy mock data here */ ]; // Need data access here too
 return allPosts.map((post) => ({
    slug: post.slug,
  }));
}


interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container max-w-screen-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <article className="prose prose-lg dark:prose-invert max-w-none"> {/* Use Tailwind Typography plugin */}
        <header className="mb-8">
           {/* Featured Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md mb-6">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              priority
              data-ai-hint={`origami blog ${post.category}`}
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold !mb-3">{post.title}</h1> {/* Use ! to override prose styles if needed */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <div className="flex items-center">
              <User className="mr-1.5 h-4 w-4" />
              <span>By OriVerse Creator</span> {/* Replace with actual author name */}
            </div>
            <div className="flex items-center">
              <Calendar className="mr-1.5 h-4 w-4" />
              <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
            </div>
             <div className="flex items-center">
               <Tag className="mr-1.5 h-4 w-4" />
               <Badge variant="outline">{post.category}</Badge>
            </div>
             { 'skillLevel' in post && post.skillLevel && ( // Check if it's a tutorial with skill level
               <div className="flex items-center">
                 <Badge variant="secondary">{post.skillLevel}</Badge>
               </div>
             )}
          </div>
           <Separator className="!my-6"/> {/* Use ! to override prose styles if needed */}
        </header>

        {/* Post Content */}
        {/* Render Markdown or HTML content. Example with react-markdown */}
        <ReactMarkdown
            components={{
                // Customize rendering of elements if needed
                // e.g., add styling to images, links, etc.
                img: ({node, ...props}) => <Image {...props} width={800} height={450} className="rounded-md shadow-sm mx-auto" layout="responsive" alt={props.alt || ""} />,
                a: ({node, ...props}) => <a {...props} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer"/>,
                // Add more custom components for headings, lists, etc.
            }}
         >
            {post.content}
        </ReactMarkdown>


        {/* Optional: Add Comment Section */}
        {/* <Separator className="!my-10"/>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          {/* Placeholder for comment system implementation */}
          {/*<p className="text-muted-foreground">Comments are coming soon!</p>
        </section> */}
      </article>
    </div>
  );
}
