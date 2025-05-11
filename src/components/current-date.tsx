
"use client";

import { useState, useEffect } from 'react';

interface CurrentDateProps {
  formatOptions?: Intl.DateTimeFormatOptions;
}

export function CurrentDate({ formatOptions }: CurrentDateProps) {
  const [dateString, setDateString] = useState<string | null>(null);

  useEffect(() => {
    // Get the date string on the client side after hydration
    setDateString(new Date().toLocaleDateString(undefined, formatOptions));
  }, [formatOptions]); // Re-run if formatOptions change

  // Render the date string once available, or a fallback/placeholder
  return dateString !== null ? <>{dateString}</> : <span>Loading date...</span>;
}
