/**
 * GraphQL Server Health Check Utility
 * 
 * This utility helps check if the GraphQL backend is available
 * and provides debugging information for development.
 * @module ServerHealth
 */

interface ServerHealthResult {
  isAvailable: boolean;
  endpoint: string;
  error?: string;
}

/**
 * Checks if GraphQL server is available and responsive
 * @returns Promise with server health status, endpoint, and optional error message
 */
export const checkGraphQLServerHealth = async (): Promise<ServerHealthResult> => {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_URI || 'http://localhost:4000/graphql';
  
  try {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Checking GraphQL server health at: ${endpoint}`);
    }
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{ __schema { types { name } } }',
      }),
    });
    
    if (response.ok) {
      if (process.env.NODE_ENV === 'development') {
        console.log('✅ GraphQL server is healthy and responding');
      }
      return { isAvailable: true, endpoint };
    } else {
      const errorText = await response.text();
      if (process.env.NODE_ENV === 'development') {
        console.error(`❌ GraphQL server responded with error: ${response.status} ${response.statusText}`);
      }
      return { 
        isAvailable: false, 
        endpoint, 
        error: `HTTP ${response.status}: ${errorText}` 
      };
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    if (process.env.NODE_ENV === 'development') {
      console.error(`❌ Failed to connect to GraphQL server: ${errorMessage}`);
    }
    return { 
      isAvailable: false, 
      endpoint, 
      error: `Connection failed: ${errorMessage}` 
    };
  }
};

/**
 * Development helper to test GraphQL connectivity
 * Only runs in development mode to avoid production console output
 */
export const testGraphQLConnection = async (): Promise<void> => {
  if (process.env.NODE_ENV === 'development') {
    const health = await checkGraphQLServerHealth();
    
    if (health.isAvailable) {
      console.log('🚀 GraphQL backend integration is ready!');
    } else {
      console.warn(
        '⚠️  GraphQL server is not available. Please ensure your backend is running.\n' +
        `   Endpoint: ${health.endpoint}\n` +
        `   Error: ${health.error || 'Unknown'}\n` +
        '   Start your GraphQL server and refresh the page.'
      );
    }
  }
};