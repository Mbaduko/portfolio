import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import BackToTop from './BackToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen bg-gradient-to-br from-background via-background to-background/95 flex flex-col overflow-hidden">
      {/* Header - Fixed at top */}
      <Header />
      
      {/* Main Content Area */}
      <div className="flex flex-1 pt-20 min-h-0"> {/* pt-20 accounts for enhanced header height, flex-1 takes remaining space, min-h-0 allows flex child to shrink */}
        {/* Sidebar - Fixed width, with its own scrollable area */}
        <div className="w-80 flex-shrink-0 h-[calc(100vh-5rem)] overflow-y-auto">
          <Sidebar />
        </div>
        
        {/* Outlet Section - Scrollable main content with proper height constraints */}
        <main className="flex-1 overflow-y-auto min-h-0 bg-gradient-to-br from-background/50 to-background/30">
          <div className="p-8 space-y-8">
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
