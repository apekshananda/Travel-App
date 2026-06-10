'use client';
import { useRouter } from 'next/navigation';

export default function Navbar({ destination, setDestination }: { destination: string, setDestination: (val: string) => void }) {
  const router = useRouter();
  const userEmail = "user@example.com";

  return (
    <nav className="nav-container">
      <div className="font-bold text-lg tracking-tight">Voyago</div>
      
      <div className="nav-search-wrapper">
        <span className="text-white/50">🔍</span>
        <input 
          type="text" 
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Banff, Canada" 
          className="nav-search-input"
        />
        <div className="flex items-center gap-1.5 pl-3 text-white/40">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span className="text-xs">Destination</span>
        </div>
      </div>

      <div className="nav-actions">
        <button className="nav-btn" onClick={() => alert(`Logged in as: ${userEmail}`)}>
          {userEmail.charAt(0).toUpperCase()}
        </button>
        <button className="nav-btn" onClick={() => router.push('/')}>Log out</button>
      </div>
    </nav>
  );
}