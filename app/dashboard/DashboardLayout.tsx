// app/dashboard/layout.tsx
import Navbar from '@/components/Navbar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full">
      {/* Container with high z-index to ensure it sits on top */}
      <div className="relative z-50">
        <Navbar />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}