import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import BackToTop from './BackToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Header - Fixed at top */}
      <Header />
      
      {/* Main Content Area */}
      <div className="flex flex-1 pt-20 min-h-0"> {/* pt-20 accounts for enhanced header height */}
        {/* Sidebar - Hidden on small screens, visible on md+ */}
        <div className="hidden md:flex w-80 flex-shrink-0 h-[calc(100vh-5rem)] overflow-y-auto">
          <Sidebar />
        </div>

        {/* Outlet Section - Scrollable main content with responsive padding */}
        <main className="flex-1 overflow-y-auto min-h-0 bg-background/40">
          <div className="p-4 sm:p-8 space-y-8">
            {children}
          </div>

          {/* Footer - Now part of the main content flow */}
          <Footer />
        </main>
      </div>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}
