import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/Gallery/img1.JPG';
import img2 from '../assets/Gallery/img2.JPG';
import img3 from '../assets/Gallery/img3.JPG';
import img4 from '../assets/Gallery/img4.JPG';
import img5 from '../assets/Gallery/img5.JPG';
import img6 from '../assets/Gallery/img6.JPG';
import img7 from '../assets/Gallery/img39.jpeg';
import img8 from '../assets/Gallery/img38.jpeg';
import img9 from '../assets/Gallery/img37.jpeg';
import img10 from '../assets/Gallery/img35.jpeg';
import img11 from '../assets/Gallery/img16.JPG';
import img12 from '../assets/Gallery/img17.JPG';
import img13 from '../assets/Gallery/img18.JPG';
import img14 from '../assets/Gallery/img19.JPG';
import img15 from '../assets/Gallery/img20.JPG';
import img16 from '../assets/Gallery/img21.JPG';
import img17 from '../assets/Gallery/img22.JPG';

const CurvedGallerySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const images = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
    { id: 7, src: img7 },
    { id: 8, src: img8 },
    { id: 9, src: img9 },
    { id: 10, src: img10 },
    { id: 11, src: img11 },
    { id: 12, src: img12 },
    { id: 13, src: img13 },
    { id: 14, src: img14 },
    { id: 15, src: img15 },
    { id: 16, src: img16 },
    { id: 17, src: img17 },
  ];

  // Determine if we're on mobile
  const isMobile = windowSize.width < 640;

  // Handle window resize
  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    // Add resize event listener
    window.addEventListener('resize', handleResize);
    
    // Initial size calculation
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  // Touch handling for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      setActiveIndex((current) => (current + 1) % images.length);
    } else if (isRightSwipe) {
      setActiveIndex((current) => (current - 1 + images.length) % images.length);
    }
    
    setTouchStart(null);
    setTouchEnd(null);
    
    // Resume auto-play after a delay
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const getPositionStyles = (index) => {
    const totalItems = images.length;
    const angleDegree = 360 / totalItems;
    const angle = ((index - activeIndex) * angleDegree) % 360;
    const radian = (angle * Math.PI) / 180;
    
    // Responsive radius based on screen size
    const isTablet = windowSize.width >= 640 && windowSize.width < 1024;
    
    // Adjust these values for desktop and tablet
    let radiusX, radiusY;
    
    if (isTablet) {
      radiusX = Math.min(300, windowSize.width * 0.35);
      radiusY = Math.min(180, windowSize.width * 0.2);
    } else {
      radiusX = Math.min(400, windowSize.width * 0.35);
      radiusY = Math.min(250, windowSize.width * 0.2);
    }
    
    const centerOffsetX = 0;
    
    const x = Math.sin(radian) * radiusX + centerOffsetX;
    const z = Math.cos(radian) * radiusY;
    const y = Math.sin(radian) * 10;
    
    const scale = 0.7 + (0.3 * (z + radiusY) / (radiusY * 2));
    const opacity = 0.3 + (0.7 * (z + radiusY) / (radiusY * 2));
    
    return {
      transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`,
      opacity,
      zIndex: Math.round((z + radiusY) * 100),
    };
  };

  // Card sizes based on screen width
  const getCardSize = () => {
    if (windowSize.width < 640) {
      return {
        width: '90vw', // Use viewport width instead of fixed pixels
        height: '240px', // Slightly increased height
      };
    } else if (windowSize.width < 1024) {
      return {
        width: '320px',
        height: '220px',
      };
    } else {
      return {
        width: '480px',
        height: '320px',
      };
    }
  };

  const cardSize = getCardSize();

  // Single image mobile slider component
  const MobileSlider = () => {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          className="relative w-full h-full flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Active slide with optimized container */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
            style={{ opacity: 1 }}
          >
            <div 
              className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
              style={{ 
                width: cardSize.width,
                height: cardSize.height,
                maxWidth: '95%' // Ensure it doesn't overflow the screen width
              }}
            >
              <img
                src={images[activeIndex].src}
                alt={`Slide ${activeIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Slide indicators moved up a bit to avoid overflow */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? 'bg-blue-500' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Navigation buttons for mobile - slightly repositioned */}
        <button
          onClick={() => setActiveIndex((current) => (current - 1 + images.length) % images.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full 
                   bg-white/20 hover:bg-white/30 text-white transition-all
                   backdrop-blur-sm z-50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => setActiveIndex((current) => (current + 1) % images.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full 
                   bg-white/20 hover:bg-white/30 text-white transition-all
                   backdrop-blur-sm z-50"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    );
  };

  // Desktop/Tablet curved carousel
  const CurvedCarousel = () => {
    return (
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
                className="absolute transition-all duration-700 ease-out cursor-pointer hover:scale-105"
                style={{
                  ...getPositionStyles(index),
                  width: cardSize.width,
                  height: cardSize.height,
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) ${getPositionStyles(index).transform}`
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative w-full h-full rounded-lg sm:rounded-2xl overflow-hidden 
                              shadow-lg sm:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transform-style-3d
                              hover:shadow-[0_12px_48px_rgba(59,130,246,0.4)]
                              transition-all duration-300">
                  <img
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation buttons for desktop/tablet */}
        <button
          onClick={() => setActiveIndex((current) => (current - 1 + images.length) % images.length)}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 lg:p-6 rounded-full 
                   bg-white/10 hover:bg-white/20 text-white transition-all
                   backdrop-blur-sm hover:scale-110 duration-300
                   shadow-[0_0_16px_rgba(255,255,255,0.1)]
                   z-50"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
        </button>
        <button
          onClick={() => setActiveIndex((current) => (current + 1) % images.length)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 lg:p-6 rounded-full 
                   bg-white/10 hover:bg-white/20 text-white transition-all
                   backdrop-blur-sm hover:scale-110 duration-300
                   shadow-[0_0_16px_rgba(255,255,255,0.1)]
                   z-50"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
        </button>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen px-2 sm:px-4">
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
      <div className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden">
        {/* Header section */}
        <div className="text-center mb-2 sm:mb-8 md:mb-16 pt-4 sm:pt-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-4 animate-fade-in">
            Photo Gallery
          </h1>
          <div className="w-12 sm:w-16 md:w-32 h-0.5 sm:h-1 bg-blue-500 mx-auto rounded-full animate-width" />
        </div>

        {/* Carousel section */}
        <div className="relative h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-[95%] sm:max-w-[90%] md:max-w-7xl mx-auto">
          {isMobile ? <MobileSlider /> : <CurvedCarousel />}
        </div>

        {/* View more button */}
        <div className="mt-4 sm:mt-8 md:mt-16 mb-8">
          <a
            href="/gallery"
            className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-md md:text-lg font-medium
                     bg-blue-600 hover:bg-blue-700 text-white rounded-full
                     transition-all duration-300 transform hover:scale-105
                     shadow-md sm:shadow-lg md:shadow-[0_8px_32px_rgba(59,130,246,0.3)]"
          >
            View Full Gallery
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CurvedGallerySlider;