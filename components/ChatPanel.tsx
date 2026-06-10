export default function ChatPanel({ destination }: { destination: string }) {
  const suggestions = [
    "Scenic spots nearby", "Best local restaurants", 
    "Hidden photo gems", "Cozy cafés for a stop"
  ];

  return (
    <div className="dash-panel">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-lg">✨</div>
        <div>
          <h2 className="text-lg font-bold">Travel Concierge</h2>
          <p className="text-emerald-400 text-[10px] uppercase tracking-wider">● Online</p>
        </div>
      </div>
      
      {/* Content Container (Scrollable) */}
      <div className="grow overflow-y-auto space-y-6">
        <p className="text-sm text-white/90 bg-white/5 p-4 rounded-2xl border border-white/5">
          Hi! I'm your travel concierge. Tell me what kind of trip you're planning to 
          <span className="text-orange-400 font-bold px-1">{destination}</span> 
          and I'll pin spots, scenic detours, and great tables along the way.
        </p>

        {/* Try Asking - Moved Upwards */}
        <div className="space-y-2">
          <p className="text-[10px] uppercase text-white/40 font-bold ml-1">Try Asking</p>
          <div className="grid grid-cols-2 gap-2">
            {suggestions.map((item) => (
              <button key={item} className="text-[11px] text-left p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Input Area (Pinned to bottom) */}
      <div className="mt-4 pt-4 border-t border-white/5 relative">
        <input 
          className="w-full bg-black/20 p-4 rounded-xl border border-white/10 text-sm text-white placeholder-white/30 outline-none" 
          placeholder={`Ask about ${destination}...`}
        />
        <div className="absolute right-6 top-8 text-[9px] text-white/20">
          Concierge can make mistakes
        </div>
      </div>
    </div>
  );
}