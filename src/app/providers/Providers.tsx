'use client';

import { ReactNode, useEffect } from 'react';
import GraphQLProvider from '@/lib/graphql/GraphQLProvider';
import { ThemeProvider } from '@/contexts/ThemeContext';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  // Add a short-lived `scrolling` class to the root element while the user scrolls.
  // This is used by global CSS to reveal scrollbars only when scrolling.
  useEffect(() => {
    let timeoutId: number | undefined;

    const onScroll = () => {
      // add class on html element
      const el = document.documentElement;
      el.classList.add('scrolling');

      // reset timer
      if (timeoutId) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        el.classList.remove('scrolling');
      }, 900);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <ThemeProvider>
      <GraphQLProvider>
        {children}
      </GraphQLProvider>
    </ThemeProvider>
  );
}
