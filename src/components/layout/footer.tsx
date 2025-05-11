
"use client"; // Mark as client component because it uses state/effects for the year

import Link from 'next/link';
import { Instagram, Youtube, Facebook, Send } from 'lucide-react'; // Assuming Pinterest not available in lucide-react, replaced with Facebook
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useState, useEffect } from 'react';

// Create a simple client component to render the dynamic year
function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return year !== null ? <>{year}</> : <>{new Date().getFullYear()}</>; // Fallback for SSR/initial render
}


export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     // Add newsletter submission logic here
     console.log("Newsletter submitted");
     // Example: Show toast message (ensure useToast is imported and used if needed)
   };


  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto max-w-screen-2xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">OriVerse</h3>
            <p className="text-sm text-muted-foreground">
              Discover the art of paper folding. Explore tutorials, admire creations, and share the joy of origami.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/tutorials" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tutorials</Link></li>
              <li><Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
               <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
               <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
               <li><Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="h-6 w-6" />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                 <Facebook className="h-6 w-6" />
              </Link>
               {/* Add Pinterest SVG or find alternative if needed */}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-3">Get updates on new posts and tutorials.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="flex-1 bg-background" aria-label="Newsletter email input" />
              <Button type="submit" size="icon" aria-label="Subscribe to newsletter">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="text-center text-sm text-muted-foreground">
          © <CurrentYear /> OriVerse. All rights reserved. Website crafted with passion.
        </div>
      </div>
    </footer>
  );
}
