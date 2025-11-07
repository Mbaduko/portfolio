import { ApolloClient, InMemoryCache, from, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Get GraphQL URI from environment variable
const getGraphQLUri = (): string => {
  const uri = process.env.NEXT_PUBLIC_GRAPHQL_URI;
  if (!uri) {
    console.warn('NEXT_PUBLIC_GRAPHQL_URI is not set in environment variables. Using default: http://localhost:4000/graphql');
    return 'http://localhost:4000/graphql';
  }
  return uri;
};

// HTTP Link with proper configuration
const httpLink = createHttpLink({
  uri: getGraphQLUri(),
  credentials: 'same-origin', // Include cookies for authentication if needed
});

// Auth Link - Add authentication headers if needed
const authLink = setContext((_, { headers }) => {
  // Get auth token from localStorage, cookies, or environment
  const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
  
  return {
    headers: {
      ...headers,
      ...(token && { authorization: `Bearer ${token}` }),
      'Content-Type': 'application/json',
    }
  };
});

// Apollo Client Configuration with professional setup
const client = new ApolloClient({
  link: from([
    authLink,
    httpLink,
  ]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          // Configure cache policies for backend data
          projects: {
            merge(_, incoming) {
              return incoming;
            },
          },
          technologies: {
            merge(_, incoming) {
              return incoming;
            },
          },
          experiences: {
            merge(_, incoming) {
              return incoming;
            },
          },
          skills: {
            merge(_, incoming) {
              return incoming;
            },
          },
          certificates: {
            merge(_, incoming) {
              return incoming;
            },
          },
        },
      },
      // Cache configuration for individual items
      Project: {
        fields: {
          technologies: {
            merge(_, incoming) {
              return incoming;
            },
          },
        },
      },
      Skill: {
        fields: {
          technologies: {
            merge(_, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all', // Return partial data with errors
    },
    query: {
      errorPolicy: 'all', // Return partial data with errors
    },
  },

});

export default client;

// Export utilities for error handling
export { getGraphQLUri };
