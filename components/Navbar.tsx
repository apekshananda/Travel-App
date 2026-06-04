export default function Navbar() {
  return (
    <nav className="flex justify-between items-center glass-card py-4 px-8 mx-6 mt-6 mb-10">
      <h1 className="text-2xl font-bold text-white cursor-pointer">Voyago</h1>
      
      <div className="flex gap-8 text-white/80">
        <a href="/dashboard" className="hover:text-white transition">Dashboard</a>
        <a href="/trips" className="hover:text-white transition">My Trips</a>
        <a href="/plan" className="px-6 py-2 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition text-white">
          Plan New Trip
        </a>
      </div>
      
      <a href="/" className="text-sm text-white/50 hover:text-white transition">Logout</a>
    </nav>
  );
}