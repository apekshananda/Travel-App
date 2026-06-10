import Navbar from '@/components/Navbar';

export default function DashboardPage() {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center p-6 flex flex-col font-serif" 
      style={{ backgroundImage: "url('/assets/dashboard-mountain.jpg')" }}
    >
      {/* Container to align Navbar with the main content */}
      <div className="max-w-4xl mx-auto w-full">
        <Navbar />
      </div>
      
      {/* Centered Main Layout */}
      <main className="flex-grow w-full max-w-4xl mx-auto mt-6 h-[80vh]">
        
        {/* Chatbot Panel: Now nicely constrained */}
        <aside className="dashboard-panel flex flex-col h-full shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-xl">✨</div>
            <div>
              <h2 className="text-2xl font-bold text-white">Travel Concierge</h2>
              <p className="text-emerald-400 text-sm tracking-wide">● Online</p>
            </div>
          </div>
          
          <div className="flex-grow text-white/90 leading-relaxed overflow-y-auto space-y-4">
            <p className="bg-white/5 p-6 rounded-3xl border border-white/5 backdrop-blur-sm">
              Hi! I'm your travel concierge. Tell me what kind of trip you're planning to Banff, Canada and I'll pin spots, scenic detours, and great tables along the way.
            </p>
          </div>

          <div className="mt-6">
            <input 
              className="w-full bg-black/20 p-6 rounded-2xl border border-white/10 text-white placeholder-white/40 outline-none focus:border-white/20 transition-all" 
              placeholder="Ask about Banff, Canada..."
            />
          </div>
        </aside>

      </main>
    </div>
  );
}