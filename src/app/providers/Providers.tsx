'use client';

import { ReactNode } from 'react';
import GraphQLProvider from '@/lib/graphql/GraphQLProvider';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <GraphQLProvider>
      {children}
    </GraphQLProvider>
  );
}
