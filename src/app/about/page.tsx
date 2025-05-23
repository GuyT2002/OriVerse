
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container max-w-screen-lg mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-center">
          <div className="md:col-span-1">
             <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/archer.jpg" // Updated to use local image
                alt="Photo of the origami artist"
                fill // Use fill instead of layout="fill"
                style={{ objectFit: "cover" }} // Use style prop for objectFit
                 data-ai-hint="person portrait artist"
                 priority // Prioritize loading the main author image
                 sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 300px" // Adjust sizes based on grid layout
              />
             </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold mb-4">Folding Dreams into Reality</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Hello! I'm the creator behind OriVerse, a space dedicated to the mesmerizing art of origami. What started as a childhood fascination with transforming a simple square of paper into something magical has blossomed into a lifelong passion.
            </p>
            <p className="text-muted-foreground">
              Through this blog, I aim to share not just the techniques and tutorials, but also the stories, inspirations, and the meditative joy that comes with paper folding. Whether you're a complete beginner or a seasoned folder, I hope you find something here that sparks your creativity.
            </p>
          </div>
        </div>

        <Separator className="my-12 border-border/50" />

        <div className="text-center mb-12">
             <h2 className="text-3xl font-semibold mb-4">My Journey</h2>
             <p className="text-muted-foreground max-w-2xl mx-auto">
                From simple cranes to complex modular structures, every fold has taught me patience, precision, and the beauty of transformation.
             </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
           <Card className="overflow-hidden">
                <CardHeader className="p-0">
                   <div className="aspect-video relative">
                       <Image
                           src="/images/the_defect.jpg" // Updated to use local image
                           alt="Origami workspace with paper and tools"
                           fill // Use fill instead of layout="fill"
                           style={{ objectFit: "cover" }} // Use style prop for objectFit
                           data-ai-hint="artist workspace desk paper tools"
                           sizes="(max-width: 768px) 100vw, 50vw" // Sizes for two-column layout
                           loading="lazy" // Lazy load secondary images
                        />
                   </div>
                </CardHeader>
               <CardContent className="p-6">
                   <CardTitle className="mb-2 text-xl">The Creative Space</CardTitle>
                   <p className="text-muted-foreground">My little corner where paper comes alive. It's often messy but always full of potential.</p>
               </CardContent>
           </Card>
           <Card className="overflow-hidden">
                <CardHeader className="p-0">
                   <div className="aspect-video relative">
                       <Image
                           src="/images/crested_kingfisher.jpg" // Updated to use local image
                           alt="Collection of finished origami pieces"
                           fill // Use fill instead of layout="fill"
                           style={{ objectFit: "cover" }} // Use style prop for objectFit
                            data-ai-hint="origami collection display shelf"
                            sizes="(max-width: 768px) 100vw, 50vw" // Sizes for two-column layout
                            loading="lazy" // Lazy load secondary images
                        />
                   </div>
                </CardHeader>
               <CardContent className="p-6">
                    <CardTitle className="mb-2 text-xl">Moments of Creation</CardTitle>
                   <p className="text-muted-foreground">Some of my favorite finished pieces, each holding a memory of the folding process.</p>
               </CardContent>
           </Card>
        </div>

         <Separator className="my-12 border-border/50" />

         <div className="text-center">
             <h2 className="text-3xl font-semibold mb-4">Philosophy</h2>
             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                I believe origami is more than just a craft; it's a form of meditation, a mathematical puzzle, and a way to connect with a rich cultural history. It teaches us that with focus and care, simple things can become extraordinary. Join me in exploring this wonderful art form!
             </p>
        </div>


      </div>
    </div>
  );
}
