'use client';

import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const userEmail = "user@example.com";

  const handleLogout = () => router.push('/');
  const handleProfile = () => alert(`Logged in as: ${userEmail}`);

  return (
    <nav className="nav-container">
      
        Voyago
   
      
      {/* Center: Search Bar */}
      <div className="nav-search-wrapper">
        <span className="text-white/50m px-10">🔍</span>
        <input 
          type="text" 
          placeholder="Banff, Canada" 
          className="nav-search-input"
        />
       
        <div className="flex items-center gap-1.5 px-3 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span className="text-xs">Destination</span>
        </div>
      </div>
      

      {/* Right: Actions */}
      <div className="nav-actions">
        <button className="nav-btn" onClick={handleProfile}>
          {userEmail.charAt(0).toUpperCase()}
        </button>
        <button className="nav-btn" onClick={handleLogout}>Log out</button>
      </div>
    </nav>
  );
}