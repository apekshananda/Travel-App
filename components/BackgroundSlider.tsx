'use client';
import { useState, useEffect } from 'react';

const images = ['/assets/hero_image1.jpg', '/assets/hero_image2.jpg', '/assets/hero_image3.jpg', '/assets/hero_image4.jpg'];

export default function BackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}
      <div className="absolute inset-0 bg-black/50 z-0" />
    </>
  );
}