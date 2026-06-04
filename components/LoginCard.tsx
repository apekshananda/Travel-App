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
    <div className="relative z-10 glass-card">
      {/* 1. Used 'text-[4rem]' (arbitrary value) to bypass CSS overrides.
        2. Added 'leading-tight' to ensure large text doesn't look squashed.
      */}
      <h2 className="text-[4rem] font-extrabold text-white mb-12 tracking-tight leading-tight">
        Voyago
      </h2>
      
      <form className="flex flex-col space-y-6" onSubmit={handleLogin}>
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
        
        <button type="submit" className="login-button py-4">
          Sign In
        </button>
      </form>
    </div>
  );
}