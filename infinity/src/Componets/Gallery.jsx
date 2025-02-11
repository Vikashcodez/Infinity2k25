import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/Gallery/img1.jpg'
import img2 from '../assets/Gallery/img2.jpg'
import img3 from '../assets/Gallery/img3.jpg'
import img4 from '../assets/Gallery/img4.jpg'
import img5 from '../assets/Gallery/img5.jpg'
import img6 from '../assets/Gallery/img6.jpg'

const CurvedGallerySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const getPositionStyles = (index) => {
    const totalItems = images.length;
    const angleDegree = 360 / totalItems;
    const angle = ((index - activeIndex) * angleDegree) % 360;
    const radian = (angle * Math.PI) / 180;
    
    // Increased radius for larger images
    const radiusX = 400;
    const radiusY = 250;
    const centerOffsetX = 0;
    
    const x = Math.sin(radian) * radiusX + centerOffsetX;
    const z = Math.cos(radian) * radiusY;
    const y = Math.sin(radian) * 15;
    
    const scale = 0.8 + (0.2 * (z + radiusY) / (radiusY * 2));
    const opacity = 0.4 + (0.6 * (z + radiusY) / (radiusY * 2));
    
    return {
      transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`,
      opacity,
      zIndex: Math.round((z + radiusY) * 100),
    };
  };

  return (
    <div className="relative min-h-screen">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/5 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 12}s`
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative flex flex-col min-h-screen items-center justify-center">
        {/* Header section */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
            Photo Gallery
          </h1>
          <div className="w-32 h-1 bg-blue-500 mx-auto rounded-full animate-width" />
        </div>

        {/* Centered carousel section with increased height */}
        <div className="relative h-[600px] w-full max-w-7xl mx-auto">
          <div 
            className="absolute inset-0 flex items-center justify-center"
            onMouseEnter={() => {
              setIsAutoPlaying(false);
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsAutoPlaying(true);
              setIsHovered(false);
            }}
          >
            {/* Carousel container */}
            <div className="relative w-full h-full perspective-1000">
              <div className="absolute inset-0 transform-style-3d flex items-center justify-center">
                {images.map((image, index) => (
                  <div
                    key={image.id}
                    className="absolute w-[480px] h-[320px] transition-all duration-700 ease-out cursor-pointer
                             hover:scale-105"
                    style={{
                      ...getPositionStyles(index),
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) ${getPositionStyles(index).transform}`
                    }}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden 
                                  shadow-[0_8px_32px_rgba(0,0,0,0.3)] transform-style-3d
                                  hover:shadow-[0_12px_48px_rgba(59,130,246,0.4)]
                                  transition-all duration-300">
                      <img
                        src={image.src}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                                    opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation buttons with increased size and better positioning */}
          <button
            onClick={() => {
              setActiveIndex((current) => (current - 1 + images.length) % images.length);
              setIsAutoPlaying(false);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-6 rounded-full 
                       bg-white/10 hover:bg-white/20 text-white transition-all
                       backdrop-blur-sm hover:scale-110 duration-300
                       shadow-[0_0_16px_rgba(255,255,255,0.1)]
                       z-50"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={() => {
              setActiveIndex((current) => (current + 1) % images.length);
              setIsAutoPlaying(false);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-6 rounded-full 
                       bg-white/10 hover:bg-white/20 text-white transition-all
                       backdrop-blur-sm hover:scale-110 duration-300
                       shadow-[0_0_16px_rgba(255,255,255,0.1)]
                       z-50"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* View more button */}
        <div className="mt-16 mb-8">
          <a
            href="/gallery"
            className="inline-flex items-center px-8 py-4 text-lg font-medium
                       bg-blue-600 hover:bg-blue-700 text-white rounded-full
                       transition-all duration-300 transform hover:scale-105
                       shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                       hover:shadow-[0_12px_48px_rgba(59,130,246,0.4)]"
          >
            View Full Gallery
            <ChevronRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CurvedGallerySlider;