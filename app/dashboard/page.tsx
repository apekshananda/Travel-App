import Navbar from '@/components/Navbar';

export default function DashboardPage() {
  return (
    <div 
      className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: "url('/assets/dashboard-mountain.jpg')" }}
    >
      <Navbar />
      
      <main className="w-full max-w-3xl px-6">
        
      </main>
    </div>
  );
}