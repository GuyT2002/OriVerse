"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Youtube, Facebook, Mail, Phone } from 'lucide-react'; // Added Mail, Phone
import Link from 'next/link';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormData) {
     // Simulate form submission
    console.log("Contact form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    form.reset(); // Reset form after successful submission
  }

  return (
    <div className="container max-w-screen-lg mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-6">Get In Touch</h1>
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Have questions, feedback, or interested in a custom origami piece? Send me a message or connect through social media.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
           <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Inquiry about..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
            </form>
          </Form>
        </div>

        {/* Contact Info & Social Links */}
        <div className="space-y-8">
           <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
                <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 mt-1 text-primary flex-shrink-0"/>
                    <div>
                        <h3 className="font-medium">Email</h3>
                        <a href="mailto:contact@oriverse.com" className="text-muted-foreground hover:text-primary transition-colors">contact@oriverse.com</a>
                        <p className="text-xs text-muted-foreground/80 mt-1">For inquiries and commissions.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0"/>
                     <div>
                        <h3 className="font-medium">Phone (Optional)</h3>
                        <span className="text-muted-foreground">Available upon request for collaborations.</span>
                    </div>
                </div>
            </div>


            <h2 className="text-2xl font-semibold mb-6 pt-4">Connect Online</h2>
            <p className="text-muted-foreground mb-4">Follow my origami journey and latest creations on social media:</p>
             <div className="flex space-x-5">
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-7 w-7" />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="h-7 w-7" />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                 <Facebook className="h-7 w-7" />
              </Link>
               {/* Add Pinterest/other icons */}
            </div>
        </div>
      </div>
    </div>
  );
}
