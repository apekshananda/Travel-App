import Navbar from '@/components/Navbar';

export default function DashboardPage() {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center p-6" 
      style={{ backgroundImage: "url('/assets/dashboard-mountain.jpg')" }}
    >
      {/* Navbar wrapper */}
      <div className="w-full max-w-6xl">
        <Navbar />
      </div>
      
      {/* Main Content Area */}
      <main className="w-full max-w-6xl flex-grow flex items-center justify-center">
        {/* Added !max-w-none to override the narrow LoginCard width */}
        <div className="glass-card !max-w-none w-full p-16 text-center">
          <h2 className="text-6xl font-bold text-white mb-6">Where to next, explorer?</h2>
          <p className="text-2xl text-white/70 mb-12">Your AI-curated adventures are waiting.</p>
          
          <div className="bg-black/30 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
             <input 
               className="w-full bg-transparent text-white placeholder-white/50 outline-none text-2xl text-center" 
               placeholder="Ask AI to plan a trip to..."
             />
          </div>
        </div>
      </main>
    </div>
  );
}