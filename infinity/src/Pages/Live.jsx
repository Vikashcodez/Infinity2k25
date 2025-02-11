import React, { useState } from 'react';
import { Calendar, Users, DollarSign, Sparkles, Code, BookOpen, X, ExternalLink } from 'lucide-react';

const EventShowcase = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      type: 'workshop',
      name: 'Web3 Development Workshop',
      shortDesc: 'Learn to build decentralized applications',
      fullDesc: 'Deep dive into Web3 development. Learn about smart contracts, blockchain integration, and building decentralized applications from industry experts.',
      image: '/api/placeholder/400/250',
      date: 'March 15, 2025',
      teamSize: '2-3',
      registrationFee: '$50',
      registrationLink: 'https://workshop.dev/web3',
      seats: 50,
      venue: 'Tech Hub, Floor 3',
      rules: [
        'Basic JavaScript knowledge required',
        'Bring your own laptop',
        'Install MetaMask before workshop',
        'Active participation mandatory'
      ]
    },
    {
      id: 2,
      type: 'workshop',
      name: 'AI/ML Workshop Series',
      shortDesc: 'Practical machine learning implementation',
      fullDesc: 'Hands-on workshop covering machine learning fundamentals, neural networks, and practical implementation of AI models using popular frameworks.',
      image: '/api/placeholder/400/250',
      date: 'March 20, 2025',
      teamSize: '1-2',
      registrationFee: '$75',
      registrationLink: 'https://workshop.dev/aiml',
      seats: 40,
      venue: 'Innovation Lab',
      rules: [
        'Python programming knowledge required',
        'Laptop with minimum 8GB RAM',
        'Pre-install Python and Jupyter',
        'Complete pre-workshop assignments'
      ]
    },
    {
      id: 3,
      type: 'hackathon',
      name: 'CodeFusion Hackathon',
      shortDesc: '48-hour coding challenge',
      fullDesc: 'A 48-hour hackathon challenging participants to build innovative solutions for real-world problems. Multiple tracks available including Web3, AI/ML, and Mobile Development.',
      image: '/api/placeholder/400/250',
      date: 'April 5-7, 2025',
      teamSize: '3-4',
      registrationFee: '$100',
      registrationLink: 'https://codefusion.dev/register',
      seats: 200,
      venue: 'Grand Convention Center',
      rules: [
        'Original work only',
        'All code must be written during hackathon',
        'Regular commits required',
        'Demo presentation mandatory',
        'Follow code of conduct'
      ]
    }
  ];

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedEvent(null);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <style>{`
        @keyframes neonPulse {
          0% { box-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff; }
          50% { box-shadow: 0 0 10px #f0f, 0 0 20px #f0f, 0 0 40px #f0f; }
          100% { box-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff; }
        }
        .modal-content::-webkit-scrollbar {
          display: none;
        }
        .modal-content {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <h1 className="text-4xl font-bold text-center mb-12 text-white animate-pulse">
        Upcoming Events
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => setSelectedEvent(event)}
            className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] 
                     transition-all duration-300 group cursor-pointer relative
                     before:content-[''] before:absolute before:inset-0 
                     before:rounded-xl before:animate-[neonPulse_3s_infinite]
                     before:opacity-0 hover:before:opacity-100 before:transition-opacity"
          >
            {/* Image Container */}
            <div className="relative h-48">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-cyan-500/90 text-white px-3 py-1 rounded-full text-sm">
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                {event.type === 'hackathon' ? (
                  <Code className="text-cyan-400" />
                ) : (
                  <BookOpen className="text-cyan-400" />
                )}
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {event.name}
                </h3>
              </div>

              <p className="text-gray-400 mb-4 h-12 line-clamp-2">{event.shortDesc}</p>

              {/* Event Details */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">Team: {event.teamSize}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <DollarSign className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{event.registrationFee}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{event.seats} seats</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={handleBackdropClick}
        >
          <div className="bg-gray-800 text-white max-w-2xl w-full rounded-lg relative overflow-y-auto max-h-[90vh] modal-content">
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-cyan-400">
                  {selectedEvent.name}
                </h2>
              </div>

              <div className="space-y-6">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <p className="text-gray-300">{selectedEvent.fullDesc}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-cyan-400" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="text-cyan-400" />
                    <span>Team Size: {selectedEvent.teamSize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="text-cyan-400" />
                    <span>Fee: {selectedEvent.registrationFee}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="text-cyan-400" />
                    <span>{selectedEvent.venue}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Rules</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    {selectedEvent.rules.map((rule, index) => (
                      <li key={index}>{rule}</li>
                    ))}
                  </ul>
                </div>

                <a
                  href={selectedEvent.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors flex items-center justify-center gap-2 w-full"
                >
                  Register for {selectedEvent.name}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventShowcase;