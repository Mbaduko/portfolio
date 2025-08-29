import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-secondary-bg/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-foreground">
              Mbaduko
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-foreground hover:text-accent-text transition-colors">
              Home
            </Link>
            <Link href="/skills" className="text-foreground hover:text-accent-text transition-colors">
              Skills
            </Link>
            <Link href="/projects" className="text-foreground hover:text-accent-text transition-colors">
              Projects
            </Link>
            <Link href="/technologies" className="text-foreground hover:text-accent-text transition-colors">
              Technologies
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent-text transition-colors">
              Contact
            </Link>
          </nav>

          {/* Resume Button */}
          <div className="flex-shrink-0">
            <button className="bg-primary-button text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-button/90 transition-colors">
              Resume
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
