import React, { useState } from 'react';
import { Calendar, Users, IndianRupee, Sparkles, Code, BookOpen, X, ExternalLink } from 'lucide-react';
import work from '../assets/work.jpg'

const EventShowcase = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      type: 'workshop',
      name: 'Generative AI Workshop',
      shortDesc: 'Explore the power of Generative AI in this hands-on workshop! Learn to create AI-driven content, images, and applications effortlessly.',
      fullDesc: 'Join our Generative AI Workshop to explore the future of AI-driven creativity! Learn how AI generates text, images, and code using advanced models like GPT and Stable Diffusion. Gain hands-on experience in building AI-powered applications and discover how to leverage AI for innovation in various industries. No prior experience needed!',
      image: work,
      date: 'March 15, 2025',
      teamSize: 'Individual',
      registrationFee: 'RS 600',
      registrationLink: '/work1',
      seats: 100,
      venue: 'Seminar Hall, Cse Dept',
    },
  ];

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedEvent(null);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-white animate-pulse">
        Upcoming Events
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => setSelectedEvent(event)}
            className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 group cursor-pointer relative"
          >
            <div className="relative h-48">
              <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-cyan-500/90 text-white px-3 py-1 rounded-full text-sm">
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                {event.type === 'hackathon' ? <Code className="text-cyan-400" /> : <BookOpen className="text-cyan-400" />}
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {event.name}
                </h3>
              </div>
              <p className="text-gray-400 mb-4 h-12 line-clamp-2">{event.shortDesc}</p>
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
                  <IndianRupee className="w-4 h-4 text-cyan-400" />
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
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={handleBackdropClick}>
          <div className="bg-gray-800 text-white max-w-2xl w-full rounded-lg relative overflow-y-auto max-h-[90vh] modal-content">
            <button onClick={() => setSelectedEvent(null)} className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors">
              <X className="h-6 w-6" />
            </button>
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-cyan-400">{selectedEvent.name}</h2>
              </div>
              <img src={selectedEvent.image} alt={selectedEvent.name} className="w-full h-64 object-cover rounded-lg" />
              <p className="text-gray-300 mt-4">{selectedEvent.fullDesc}</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="text-cyan-400" />
                  <span>{selectedEvent.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-cyan-400" />
                  <span>Team Size: {selectedEvent.teamSize}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee className="text-cyan-400" />
                  <span>Fee: {selectedEvent.registrationFee}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="text-cyan-400" />
                  <span>{selectedEvent.venue}</span>
                </div>
              </div>
              <a href={selectedEvent.registrationLink} target="_blank" rel="noopener noreferrer" className="mt-6 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors flex items-center justify-center gap-2 w-full">
                Register for {selectedEvent.name}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventShowcase;
