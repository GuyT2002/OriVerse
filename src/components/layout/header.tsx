"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Search, Paperclip } from 'lucide-react'; // Using Paperclip as a placeholder logo icon
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useRouter, usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Implement search functionality, e.g., redirect to a search results page
      console.log('Searching for:', searchTerm);
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setIsSearchOpen(false);
      setSearchTerm('');
    }
  };

  const closeSheet = () => setIsSheetOpen(false);
  const closeSearch = () => setIsSearchOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   useEffect(() => {
    // Close sheet and search on route change
    closeSheet();
    closeSearch();
  }, [pathname]);


  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow duration-300',
        isScrolled ? 'shadow-md' : ''
      )}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center space-x-2" onClick={closeSheet}>
          <Paperclip className="h-6 w-6 text-primary" aria-hidden="true" />
          <span className="font-bold text-lg">OriVerse</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === item.href ? 'text-primary font-semibold' : 'text-foreground/60'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Toggle search"
          >
            <Search className="h-5 w-5" />
          </Button>
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center md:hidden">
           <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Toggle search"
            className="mr-2"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex h-full flex-col py-6">
                 <Link href="/" className="mb-6 flex items-center space-x-2" onClick={closeSheet}>
                    <Paperclip className="h-6 w-6 text-primary" aria-hidden="true" />
                    <span className="font-bold text-lg">OriVerse</span>
                 </Link>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeSheet}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                         pathname === item.href ? 'text-primary' : 'text-foreground/70'
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Search Bar */}
      {isSearchOpen && (
         <div className="absolute top-full left-0 w-full bg-background border-b border-border/40 shadow-md md:hidden">
           <div className="container py-2">
              <form onSubmit={handleSearchSubmit} className="relative">
                <Input
                  type="search"
                  placeholder="Search origami..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-10"
                />
                 <Button type="submit" variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8">
                   <Search className="h-4 w-4" />
                 </Button>
              </form>
           </div>
         </div>
      )}
       {isSearchOpen && (
         <div className="hidden md:block absolute top-full right-0 mt-1 mr-4 w-64 bg-background border border-border/40 rounded-md shadow-lg p-2">
            <form onSubmit={handleSearchSubmit} className="relative">
                <Input
                  type="search"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-8 h-9"
                  autoFocus
                />
                <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8">
                   <Search className="h-4 w-4" />
                 </Button>
            </form>
         </div>
      )}
    </header>
  );
}
