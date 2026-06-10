export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-white/5 backdrop-blur-md border-b border-white/10 text-white">
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold">Voyago</h1>
        {/* Search bar inside the header */}
        <div className="relative w-96">
          <input 
            className="w-full bg-white/10 py-2 px-4 rounded-full border border-white/10 text-sm" 
            placeholder="Search destination..." 
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-sm">
        <button className="bg-white/10 px-4 py-2 rounded-full">Upgrade</button>
        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">A</div>
        <button className="border border-white/20 px-4 py-2 rounded-full">Logout</button>
      </div>
    </header>
  );
}