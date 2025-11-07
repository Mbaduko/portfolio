/**
 * Image loader utilities for handling external images
 * @module ImageLoader
 */

/**
 * Check if an image URL should be unoptimized
 */
export const shouldUnoptimizeImage = (src: string | undefined | null): boolean => {
  if (!src) return false;
  
  const unoptimizedDomains = [
    'cloudinary.com',
    'google.com',
    'imgur.com',
    'seeklogo.com'
  ];
  
  return unoptimizedDomains.some(domain => src.includes(domain));
};

/**
 * Get appropriate image props for external images
 */
export const getImageProps = (src: string | undefined | null) => {
  return {
    unoptimized: shouldUnoptimizeImage(src),
    priority: false,
    loading: 'lazy' as const
  };
};

/**
 * Custom image loader for external images that bypasses Next.js optimization
 */
export const externalImageLoader = ({ src, width, quality }: {
  src: string;
  width: number;
  quality?: number;
}) => {
  // For external images, return the original URL to avoid optimization timeouts
  if (shouldUnoptimizeImage(src)) {
    return src;
  }
  
  // For internal or trusted images, use default optimization
  return `${src}?w=${width}&q=${quality || 75}`;
};