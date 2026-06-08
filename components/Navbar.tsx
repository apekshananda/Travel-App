export default function Navbar() {
  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-50 flex w-[90%] max-w-6xl items-center justify-between rounded-full border border-white/20 bg-black/30 px-8 py-4 backdrop-blur-md text-white shadow-xl">
      
      <h1 className="text-xl font-bold whitespace-nowrap">Voyago</h1>
      
      {/* Hidden on mobile, visible on medium screens */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-white/90">
        <a href="/dashboard" className="hover:text-white transition">Dashboard</a>
        <a href="/trips" className="hover:text-white transition">My Trips</a>
        <a href="/about" className="hover:text-white transition">About</a>
      </div>
      
      <div className="flex items-center gap-4">
        <a href="/" className="text-sm text-white/60 hover:text-white transition whitespace-nowrap">Logout</a>
        <a 
          href="/plan" 
          className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200 whitespace-nowrap"
        >
          Plan New Trip
        </a>
      </div>
    </nav>
  );
}