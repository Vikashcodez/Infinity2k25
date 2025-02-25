import React, { useEffect, useState } from 'react';
import hack from '../assets/hack.png'

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#schedule" className="text-gray-300 hover:text-white transition-colors">Schedule</a>
                <a href="#prizes" className="text-gray-300 hover:text-white transition-colors">Prizes</a>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Image */}
      <section className="relative bg-black pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
        
        {/* Hero Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={hack} 
            alt="Hackathon Poster" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Main Content */}
        <div className="min-h-screen relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="flex flex-col items-center justify-center text-center mt-12">
              {/* Title */}
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'
                }`}
              >
                Hack4Good 2025
              </h1>

              {/* Description */}
              <p
                className={`text-lg md:text-xl max-w-2xl px-6 leading-relaxed text-white mb-12 transition-all duration-1000 delay-500 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                }`}
              >
                🚀 Welcome to <span className="text-blue-400 font-semibold">Hack4Good 2025</span>, where the brightest minds unite to solve real-world challenges through technology and innovation.
                <br /><br />
                Join developers, designers, and problem-solvers in an electrifying 6-hour hackathon filled with creativity, learning, and impact!
              </p>

              {/* Refined Register Button */}
              <div
                className={`transition-all duration-1000 delay-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                <button className="relative group">
                  <div className="relative">
                    {/* Gradient border container */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    {/* Button content */}
                    <div className="relative bg-black px-6 py-3 rounded-lg">
                      <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                        Register Now
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Light Effects */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse z-10"></div>
      </section>
    </>
  );
};

export default Banner;