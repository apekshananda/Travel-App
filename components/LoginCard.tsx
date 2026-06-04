'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === '1234@gmail.com' && password === '1234') {
      router.push('/dashboard');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="relative z-10 glass-card">
      <h2 className="text-[4rem] font-extrabold text-white mb-12 tracking-tight leading-tight">
        Voyago
      </h2>
      
      <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
        <input 
          className="input-field" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          className="input-field" 
          placeholder="Password" 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
        />
        
        {/* Primary Action */}
        <button type="submit" className="login-button py-4 mt-2">
          Log In
        </button>

        {/* Visual Divider */}
        <div className="flex items-center gap-4 text-zinc-400 py-2">
          <div className="h-px bg-zinc-600 flex-1" />
          <span className="text-sm">OR</span>
          <div className="h-px bg-zinc-600 flex-1" />
        </div>

        {/* Secondary Actions using CSS classes */}
        <button type="button" className="secondary-button">
          Sign Up
        </button>
        <button type="button" className="google-button">
          Sign up with Google
        </button>
      </form>
    </div>
  );
}