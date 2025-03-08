import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hack from '../assets/hack4.jpeg';
// You'll need to import your logo image
// Import example - update path to your actual logo file
import logoImage from '../assets/unstop.png';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fixed: Instead of using navigate for external URL, use window.open
  const handleRegister = () => {
    window.open('https://unstop.com/o/hRkj1Aa?lb=K48T4T7M&utm_medium=Share&utm_source=WhatsApp', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative container mx-auto px-4 pt-16 text-center">
        {/* Title with "powered by" logo */}
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Hack4Good 2025
          </h1>
          
          {/* Powered by with larger logo */}
          <div className="flex items-center justify-center mb-8 space-x-3">
            <span className="text-lg text-gray-300">Powered by</span>
            <img 
              src={logoImage} 
              alt="Sponsor Logo" 
              className="h-12 md:h-16 object-contain" 
            />
          </div>
        </div>

        {/* Centered Image */}
        <div className={`relative max-w-4xl mx-auto my-12 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 z-10" />
            <img 
              src={hack} 
              alt="Hackathon Poster" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Fixed Register Button - using proper anchor tag for external link */}
        <div
          className={`mb-16 transition-all duration-1000 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <a 
            href="https://unstop.com/o/hRkj1Aa?lb=K48T4T7M&utm_medium=Share&utm_source=WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative group touch-manipulation"
            role="button"
            aria-label="Register for Hack4Good"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm animate-pulse" />
              <div className="relative bg-black px-8 py-6 md:py-4 rounded-lg">
                <span className="text-xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Register Now
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="relative container mx-auto px-4 py-16 ">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            About The Event
          </h2>
          
          <div className={`space-y-6 text-lg text-gray-200 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <p>
              🚀 Welcome to <span className="text-blue-400 font-semibold">Hack4Good 2025</span>, where innovation meets social impact. Our mission is to bring together the brightest minds to solve real-world challenges through technology and creative problem-solving.
            </p>
            
            <p>
              Join us for an electrifying 6-hour hackathon that will push your boundaries and inspire breakthrough solutions. Whether you're a developer, designer, or problem-solver, this is your chance to make a difference.
            </p>

          </div>
        </div>
      </section>

      {/* Floating Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-pink-500/30 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse" />
    </div>
  );
};

export default Banner;