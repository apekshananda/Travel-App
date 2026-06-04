import Navbar from '@/components/Navbar';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      
      {/* Hero Section of Dashboard */}
      <section className="h-[70vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-6xl font-bold mb-6">Find the road less taken.</h1>
        <p className="text-xl text-zinc-400 mb-10">Tell us where you're going. We&apos;ll plan the spots.</p>
        
        {/* Placeholder for Search Bar */}
        <div className="w-full max-w-4xl bg-zinc-900/50 p-6 rounded-2xl border border-white/10 backdrop-blur-lg">
          <p className="text-zinc-500 italic">Search bar components go here...</p>
        </div>
      </section>
    </main>
  );
}