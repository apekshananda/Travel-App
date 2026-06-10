import Navbar from '@/components/Navbar';

export default function DashboardPage() {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center p-4 flex flex-col font-serif" 
      style={{ backgroundImage: "url('/assets/dashboard-mountain.jpg')" }}
    >
      <Navbar />
      
      {/* Main Container: Centered Chatbot */}
      <main className="flex-grow w-full max-w-2xl mx-auto mt-6 flex flex-col">
        
        {/* Chatbot Panel */}
        <aside className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col shadow-2xl h-[80vh]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">✨</div>
            <div>
              <h2 className="text-xl font-bold text-white">Travel Concierge</h2>
              <p className="text-emerald-400 text-sm">● Online</p>
            </div>
          </div>
          
          {/* Chat History Area */}
          <div className="flex-grow text-white/90 leading-relaxed space-y-4 overflow-y-auto pr-2">
            <p className="bg-white/10 p-4 rounded-2xl">
              Hi! I'm your travel concierge. Tell me what kind of trip you're planning to Calgary, Canada and I'll help you get started.
            </p>
          </div>

          {/* Input Area */}
          <div className="mt-4">
            <input 
              className="w-full bg-white/10 p-4 rounded-xl border border-white/10 text-white placeholder-white/50 outline-none" 
              placeholder="Ask about Calgary, Canada..."
            />
          </div>
        </aside>

      </main>
    </div>
  );
}