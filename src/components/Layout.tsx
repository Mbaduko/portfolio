import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen bg-background overflow-hidden flex flex-col">
      {/* Header - Fixed at top */}
      <Header />
      
      {/* Main Content Area */}
      <div className="flex flex-1 pt-16"> {/* pt-16 accounts for fixed header height, flex-1 takes remaining space */}
        {/* Sidebar - Fixed width, static */}
        <Sidebar />
        
        {/* Outlet Section - Scrollable main content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
      
      {/* Footer - At bottom */}
      <Footer />
    </div>
  );
}
