"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      // Simulate API call
      console.log('Subscribing email:', email);
      toast({
        title: "Subscription Successful!",
        description: `Thank you for subscribing, ${email}.`,
      });
      setEmail('');
    } else {
       toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="bg-muted py-12">
      <div className="container max-w-screen-md text-center px-4 mx-auto"> {/* Added mx-auto and px-4 */}
        <h2 className="text-2xl font-semibold mb-3">Stay Inspired</h2>
        <p className="text-muted-foreground mb-6">
          Subscribe to our newsletter for the latest origami tutorials, creations, and stories delivered straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-background text-base md:text-sm" // Adjusted input size
            aria-label="Email for newsletter"
          />
          <Button type="submit" className="flex items-center gap-2">
            Subscribe
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}
