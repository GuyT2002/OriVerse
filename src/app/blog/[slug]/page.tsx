
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { BlogPost, Tutorial } from '@/types'; // Import Tutorial type
import { Badge } from '@/components/ui/badge';
import { Calendar, Tag, User, PlayCircle } from 'lucide-react'; // User for author, PlayCircle for video
import { format } from 'date-fns';
import { Separator } from '@/components/ui/separator';
import ReactMarkdown from 'react-markdown'; // Example: Use react-markdown if content is Markdown
import { cn } from '@/lib/utils';
import Link from 'next/link'; // Import Link for video link

// Mock data fetching function - replace with actual data source access
// Updated with local image paths from public/images
async function getBlogPostBySlug(slug: string): Promise<BlogPost | Tutorial | null> {
  const allPosts: Array<BlogPost | Tutorial> = [ // Combine BlogPost and Tutorial types
    { slug: 'folding-the-defect', title: 'Folding The Defect: A Complex Challenge', date: '2024-07-15', excerpt: 'Explore the intricate process behind folding The Defect from Slay the Spire...', imageUrl: '/images/the_defect.jpg', content: `
Folding 'The Defect' from Slay the Spire was a journey into complex geometry and character interpretation. Using tissue foil paper allowed for both sharp creases and the necessary shaping for its robotic form.

**Key Challenges:**
*   **The Core:** Forming the central orb required precise pre-creasing and careful collapse.
*   **Limbs:** Achieving the thin, jointed limbs while maintaining stability.
*   **Color Change:** Managing the blue and yellow sections effectively from a single sheet.

This model pushes the boundaries of single-sheet origami, demanding patience and a deep understanding of paper manipulation. The final result, though challenging, captures the essence of this unique game character.
    `, category: 'Advanced Creations', dataAiHint: "origami character blue yellow" },

    { slug: 'designing-the-archer', title: 'Designing the Origami Archer', date: '2024-07-01', excerpt: 'A look into the creative journey of designing and folding an original origami archer...', imageUrl: '/images/archer.jpg', content: `
Creating the Origami Archer began with a simple sketch and the desire to capture a dynamic pose. Double tissue paper was chosen for its strength and ability to hold fine details.

**Design Process:**
1.  **Base Selection:** Started with a modified bird base to establish the main body and limbs.
2.  **Hood & Cape:** Developed specific folding sequences to create the flowing hood and cape.
3.  **Bow & Arrow:** Integrated the bow as part of the arm structure, adding a separate small arrow.
4.  **Refinement:** Numerous iterations were needed to refine the proportions, posture, and details like the quiver.

Designing original models is a rewarding process of trial, error, and discovery.
    `, category: 'Original Designs', dataAiHint: "green archer fantasy origami detailed" },

     { slug: 'kingfisher-on-perch', title: 'Capturing the Crested Kingfisher in Paper', date: '2024-04-10', excerpt: 'Learn about the techniques used to fold a realistic Crested Kingfisher...', imageUrl: '/images/crested_kingfisher.jpg', content: `
The Crested Kingfisher presents a beautiful challenge with its distinctive crest and elegant shape. Washi paper provided the right texture and color.

**Folding Techniques:**
*   **Head & Crest:** Careful sink folds and point splitting were used to form the prominent crest.
*   **Body Shaping:** Wet-folding techniques helped to achieve a rounded, natural body shape.
*   **Color Integration:** Planning the folds to ensure the blue back and lighter underbelly were correctly positioned.
*   **Perch:** The wooden block provides a simple yet effective display base.

Focusing on these details helps bring the paper bird to life.
    `, category: 'Animals', dataAiHint: "origami kingfisher blue bird"},

    { slug: 'rooster-folding-tips', title: 'Tips for Folding a Crisp Origami Rooster', date: '2024-05-20', excerpt: 'Discover techniques to achieve sharp creases...', imageUrl: '/images/rooster.jpg', content: `
Folding a convincing rooster relies on sharp creases and confident shaping. Standard origami paper works well.

**Key Tips:**
1.  **Sharp Creases:** Use a bone folder for precise, sharp creases, especially on the tail feathers.
2.  **Head Details:** Pay attention to the comb and wattle – small reverse folds add realism.
3.  **Legs & Stance:** Ensure the legs are sturdy and positioned for a stable, proud stance. Reinforce if needed.
4.  **Tail Shaping:** Gently curve and separate the tail feathers for a more dynamic look.

Practice these elements to elevate your origami rooster.
    `, category: 'Intermediate Tutorials', skillLevel: 'Intermediate', dataAiHint: "origami rooster folding" },

     { slug: 'playful-surfing-bird', title: 'Bringing the Surfing Bird to Life', date: '2024-03-25', excerpt: 'The story behind the original Surfing Bird design...', imageUrl: '/images/surfing_bird.jpg', content: `
The Surfing Bird was a fun, spontaneous idea. How could origami capture that playful motion?

**Concept & Materials:**
*   **The Bird:** A simple, traditional crane form was chosen for familiarity, folded from brown kraft paper for a rustic feel.
*   **The Wave:** A separate sheet of blue Kami paper was folded into a basic wave/boat shape to act as the surfboard.
*   **Assembly:** The bird is simply placed onto the wave – no complex connection needed, keeping it lighthearted.

Sometimes the simplest combinations create the most charming results!
    `, category: 'Original Designs', dataAiHint: "origami bird wave design" },

    { slug: 'beginner-duck-tutorial', title: 'Easy Origami Duck Tutorial', date: '2024-02-15', excerpt: 'A simple step-by-step guide to folding a cute origami duck...', imageUrl: '/images/duck.jpg', content: `
Let's fold a simple duck! You'll need one square sheet of paper (e.g., white with yellow on the back, or color one side yellow).

1.  **Start White Side Up:** Fold the paper in half diagonally to make a triangle. Unfold.
2.  **Fold Corners to Center:** Fold the left and right corners to meet at the center crease. You'll have a kite shape.
3.  **Fold Tip Down:** Fold the top point (the narrow one) down along the top edge of the flaps you just made.
4.  **Fold Small Tip Up:** Fold the very tip you just folded down back up slightly to form the beak.
5.  **Fold in Half:** Fold the entire model in half along the original center crease, bringing the two halves together with the colored side out.
6.  **Form the Neck:** Hold the main body. Pull the pointed (beak) section upwards and outwards, creating a crease to form the neck. Adjust the angle as you like.
7.  **Tail (Optional):** You can make a small inside reverse fold at the back end to create a little tail.

You've folded a duck! Color in an eye if you wish.
    `, category: 'Beginner Tutorials', skillLevel: 'Beginner', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', dataAiHint: "origami duck tutorial easy" }, // Example video link added
  ];
  return allPosts.find(p => p.slug === slug) || null;
}

// Generate static paths if using SSG
export async function generateStaticParams() {
 // Use the same data source as getBlogPostBySlug for consistency
 // Updated with local image paths from public/images
 const allPosts: Array<BlogPost | Tutorial> = [
     { slug: 'folding-the-defect', title: '...', date: '...', excerpt: '...', imageUrl: '/images/the_defect.jpg', content: '...', category: 'Advanced Creations' },
     { slug: 'designing-the-archer', title: '...', date: '...', excerpt: '...', imageUrl: '/images/archer.jpg', content: '...', category: 'Original Designs' },
     { slug: 'kingfisher-on-perch', title: '...', date: '...', excerpt: '...', imageUrl: '/images/crested_kingfisher.jpg', content: '...', category: 'Animals'},
     { slug: 'rooster-folding-tips', title: '...', date: '...', excerpt: '...', imageUrl: '/images/rooster.jpg', content: '...', category: 'Intermediate Tutorials', skillLevel: 'Intermediate'},
     { slug: 'playful-surfing-bird', title: '...', date: '...', excerpt: '...', imageUrl: '/images/surfing_bird.jpg', content: '...', category: 'Original Designs'},
     { slug: 'beginner-duck-tutorial', title: '...', date: '...', excerpt: '...', imageUrl: '/images/duck.jpg', content: '...', category: 'Beginner Tutorials', skillLevel: 'Beginner'},
 ];
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

  // Type guard to check if the post is a Tutorial
  const isTutorial = (p: BlogPost | Tutorial): p is Tutorial => {
    return (p as Tutorial).skillLevel !== undefined;
  }

  return (
    <div className="container max-w-screen-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Use Tailwind Typography plugin and adjust for dark mode */}
      <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
        <header className="mb-8">
           {/* Featured Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md mb-6">
            <Image
              src={post.imageUrl} // Uses the URL from the post prop, updated to use public/images paths
              alt={post.title}
              fill // Use fill instead of layout="fill"
              style={{ objectFit: "cover" }} // Use style prop for objectFit
              priority // Prioritize loading the main post image
              data-ai-hint={post.dataAiHint || `origami blog ${post.category}`} // Use provided hint
              sizes="(max-width: 768px) 100vw, 768px" // More specific sizes for the layout
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
             { isTutorial(post) && post.skillLevel && ( // Check if it's a tutorial with skill level
               <div className="flex items-center">
                 <Badge variant={
                    post.skillLevel === 'Beginner' ? 'default' :
                    post.skillLevel === 'Intermediate' ? 'secondary' : 'destructive'
                 } className="capitalize">{post.skillLevel}</Badge>
               </div>
             )}
             { isTutorial(post) && post.videoUrl && ( // Check for video URL
                <div className="flex items-center">
                    <Link href={post.videoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                        <PlayCircle className="mr-1.5 h-4 w-4" />
                        <span>Watch Video</span>
                    </Link>
                </div>
             )}
          </div>
           <Separator className="!my-6 border-border/50"/> {/* Use ! to override prose styles if needed */}
        </header>

        {/* Post Content */}
        {/* Render Markdown or HTML content. */}
        <ReactMarkdown
            components={{
                // Customize rendering of elements if needed
                img: ({node, ...props}) => (
                    <Image
                        {...props}
                        src={props.src || ""} // Uses the src from Markdown, assumes it's correct path
                        width={800} // Example width
                        height={450} // Example height
                        className="rounded-md shadow-sm mx-auto my-6" // Added my-6 for margin
                        style={{ objectFit: 'contain', width: '100%', height: 'auto' }} // Ensure responsive image
                        alt={props.alt || ""}
                        // Add sizes prop if image widths vary significantly
                        sizes="(max-width: 768px) 100vw, 768px"
                        loading="lazy" // Lazy load images within the content
                     />
                ),
                a: ({node, ...props}) => <a {...props} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer"/>,
                h2: ({node, ...props}) => <h2 {...props} className="!mt-10 !mb-4" />, // Adjust heading margins
                ul: ({node, ...props}) => <ul {...props} className="!my-4 list-disc !pl-6" />, // Ensure list styling
                ol: ({node, ...props}) => <ol {...props} className="!my-4 list-decimal !pl-6" />, // Ensure list styling
                p: ({node, ...props}) => <p {...props} className="!my-4" />,
                strong: ({node, ...props}) => <strong {...props} className="font-semibold text-foreground" />, // Style bold text
            }}
         >
            {post.content}
        </ReactMarkdown>


        {/* Optional: Add Comment Section */}
        {/* <Separator className="!my-10 border-border/50"/>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          {/* Placeholder for comment system implementation */}
          {/*<p className="text-muted-foreground">Comments are coming soon!</p>
        </section> */}
      </article>
    </div>
  );
}
