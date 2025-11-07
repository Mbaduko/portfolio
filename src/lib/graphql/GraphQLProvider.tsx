'use client';

import { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client/react';
import client from '@/lib/graphql/apolloClient';
import { testGraphQLConnection } from '@/lib/graphql/serverHealth';

interface GraphQLProviderProps {
  children: React.ReactNode;
}

export default function GraphQLProvider({ children }: GraphQLProviderProps) {
  useEffect(() => {
    // Test GraphQL connection in development
    testGraphQLConnection();
  }, []);

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}