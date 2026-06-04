export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-6 z-50">
      <div className="text-2xl font-bold text-white tracking-tighter">Voyago</div>
      <div className="flex gap-8 text-white/80 font-medium">
        <a href="#" className="hover:text-white">Destinations</a>
        <a href="#" className="hover:text-white">On the way</a>
        <a href="#" className="hover:text-white">Tables</a>
      </div>
      <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-zinc-200 transition-colors">
        Plan a trip
      </button>
    </nav>
  );
}