export default function ChatPanel({ destination }: { destination: string }) {
  // Define the suggestions array here, inside the component function
  const suggestions = [
    { label: "Scenic spots nearby", icon: "🏔️" },
    { label: "Best local restaurants", icon: "🍴" },
    { label: "Hidden photo gems", icon: "📸" },
    { label: "Cozy cafés for a stop", icon: "☕" },
  ];

  return (
    <div className="dash-panel h-full flex flex-col gap-6 p-8">
      {/* Header */}
      <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-2xl">✨</div>
          <div>
            <h2 className="text-2xl font-bold">Travel Concierge</h2>
            <div className="text-emerald-400 text-sm mt-1 font-medium flex items-center">
              <span className="status-online"></span> Online
            </div>
          </div>
        </div>
      </div>
      
      {/* Introduction Text */}
      <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md text-white/90 leading-relaxed">
        Hi! I'm your travel concierge. Tell me what kind of trip you're planning to 
        <span className="text-orange-400 font-bold px-1">{destination}</span> 
        and I'll pin spots, scenic detours, and great tables along the way.
      </div>

      {/* Try Asking Section */}
      <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md space-y-4">
        <p className="text-xs uppercase tracking-widest text-white/40 font-bold">Try Asking</p>
        <div className="grid grid-cols-2 gap-3">
          {suggestions.map((item) => (
            <button 
              key={item.label} 
              className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/20 transition-all text-sm font-medium"
            >
              <span>{item.icon}</span> {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="mt-auto bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
        <input 
          className="w-full bg-black/40 p-5 rounded-2xl border border-white/10 text-white placeholder-white/40 outline-none focus:border-white/20 transition-all" 
          placeholder={`Ask about ${destination}...`}
        />
        <p className="text-[10px] text-white/30 mt-3 ml-2">Concierge can make mistakes — verify hours & directions before you go.</p>
      </div>
    </div>
  );
}