import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
        <p className="text-accent-text mb-8">
          Sorry, the page you are looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="bg-primary-button text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-button/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}