'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [destination, setDestination] = useState("Banff, Canada");

  return (
    <div className="relative min-h-screen w-full">
      {/* Container with high z-index */}
      <div className="relative z-50">
        {/* Pass the required props here */}
        <Navbar destination={destination} setDestination={setDestination} />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}