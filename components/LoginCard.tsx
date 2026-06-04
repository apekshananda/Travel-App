'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === '1234@' && password === '21234') {
      router.push('/dashboard');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    // Replaced .glass-card with its classes
    <div className="relative z-10 w-full max-w-sm p-8 rounded-2xl bg-zinc-900/80 backdrop-blur-md border border-white/10 shadow-2xl text-center">
      <h1 className="text-3xl font-semibold text-white mb-6">Voyago</h1>
      
      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        {/* Replaced .input-field with its classes */}
        <input 
          className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-zinc-500" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-zinc-500" 
          placeholder="Password" 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
        />
        
        {/* Replaced .login-button with its classes */}
        <button 
          type="submit" 
          className="w-full py-3 rounded-lg bg-white text-black font-bold hover:bg-zinc-200 transition-colors"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}