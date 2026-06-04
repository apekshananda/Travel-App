'use client';
import { useState, useEffect } from 'react';

const images = [
  '/assets/hero_image1.jpg', 
  '/assets/hero_image2.jpg', 
  '/assets/hero_image3.jpg', 
  '/assets/hero_image4.jpg'
];

export default function BackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Added 'border-4 border-red-500' to see if the container renders
    <div className="fixed inset-0 w-full h-full -z-10 border-4 border-red-500">
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          alt="background"
        />
      ))}
      <div className="absolute inset-0 bg-black/50 z-0" />
    </div>
  );
}