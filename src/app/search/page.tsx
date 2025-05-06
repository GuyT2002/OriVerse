
import { Suspense } from 'react';
import SearchResults from '@/components/search/search-results'; // Import the new client component
import { Skeleton } from '@/components/ui/skeleton'; // Import Skeleton for fallback

// Fallback component for Suspense
function SearchLoadingFallback() {
  return (
    <div className="container max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">
        Searching...
      </h1>
      <div className="space-y-8">
         <Skeleton className="h-8 w-1/3" />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Skeleton className="h-64 rounded-lg" />
            <Skeleton className="h-64 rounded-lg" />
            <Skeleton className="h-64 rounded-lg" />
         </div>
         <Skeleton className="h-8 w-1/3" />
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Skeleton className="h-72 rounded-lg" />
            <Skeleton className="h-72 rounded-lg" />
             <Skeleton className="h-72 rounded-lg" />
             <Skeleton className="h-72 rounded-lg" />
         </div>
      </div>
    </div>
  );
}


// Keep this as a Server Component
export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoadingFallback />}>
      <SearchResults />
    </Suspense>
  );
}
