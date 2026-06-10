'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ChatPanel from '@/components/ChatPanel';

export default function DashboardPage() {
  const [destination, setDestination] = useState("Banff, Canada");

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center p-6 flex flex-col font-serif" 
      style={{ backgroundImage: "url('/assets/dashboard-mountain.jpg')" }}
    >
      <div className="max-w-md mx-auto w-full">
        <Navbar destination={destination} setDestination={setDestination} />
      </div>
      
      {/* Centered Chatbot Layout */}
      <main className="grow w-full max-w-md mx-auto mt-6 h-[75vh]">
        <ChatPanel destination={destination} />
      </main>
    </div>
  );
}