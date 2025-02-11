import React, { useState } from "react";
import { X, Calendar, DollarSign, Book, Users } from "lucide-react";

const EventCard = ({ event, onClick, index }) => {
  const isLeft = index % 2 === 0;
  
  return (
    <div className="flex w-full items-center justify-center mb-8">
      {/* Content wrapper */}
      <div className={`w-full md:w-[45%] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
        <div
          onClick={() => onClick(event)}
          className="group cursor-pointer relative mx-4"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-800">
            {/* Image section */}
            <div className="relative h-48">
              <img
                src={event.image || "/api/placeholder/400/300"}
                alt={event.name}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm mb-2">
                  {event.type}
                </span>
              </div>
            </div>

            {/* Content section */}
            <div className="p-4">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                {event.name}
              </h3>
              
              <div className="flex flex-wrap gap-3 mb-3">
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Calendar className="h-4 w-4 text-blue-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <DollarSign className="h-4 w-4 text-green-400" />
                  <span>{event.fee}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Users className="h-4 w-4 text-purple-400" />
                  <span>{event.capacity} seats</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm line-clamp-2">{event.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-gray-900 p-6 text-left shadow-xl transition-all border border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-500/10"></div>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-800 text-gray-400 hover:text-gray-200 transition-colors z-10"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative z-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

const EventModal = ({ event, isOpen, onClose }) => {
  if (!event) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          {event.name}
        </h2>

        <div className="rounded-xl overflow-hidden mb-6 relative">
          <img
            src={event.image || "/api/placeholder/400/300"}
            alt={event.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-800/50 border border-gray-700">
            <Calendar className="text-blue-400" />
            <div>
              <div className="text-sm text-gray-400">Date</div>
              <div className="text-gray-200">{event.date}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-800/50 border border-gray-700">
            <DollarSign className="text-green-400" />
            <div>
              <div className="text-sm text-gray-400">Fee</div>
              <div className="text-gray-200">{event.fee}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-800/50 border border-gray-700">
            <Users className="text-purple-400" />
            <div>
              <div className="text-sm text-gray-400">Capacity</div>
              <div className="text-gray-200">{event.capacity} participants</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-800/50 border border-gray-700">
            <Book className="text-pink-400" />
            <div>
              <div className="text-sm text-gray-400">Type</div>
              <div className="text-gray-200">{event.type}</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-4 rounded-lg bg-gray-800/30 border border-gray-700">
            <h4 className="text-lg font-semibold mb-2 text-gray-200">About Event</h4>
            <p className="text-gray-400">{event.description}</p>
          </div>

          <div className="p-4 rounded-lg bg-gray-800/30 border border-gray-700">
            <h4 className="text-lg font-semibold mb-2 text-gray-200">Event Rules</h4>
            <ul className="space-y-2 text-gray-400">
              {event.rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
  onClick={() => window.open(event.registrationLink, "_blank")}
  className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
>
  Register Now
</button>

      </div>
    </Modal>
  );
};

const EventPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events = [
    {
      id: 1,
      name: "Event1",
      date: "March 21, 2025",
      fee: "$20",
      capacity: 100,
      type: "Competition",
      description: "Join us for an exciting 24-hour coding challenge where you'll build innovative solutions!",
      rules: ["Max team size: 4", "No external libraries allowed"],
      image: "/api/placeholder/800/600",
      registrationLink: "https://example.com/hackathon-registration"
    },
    {
      id: 2,
      name: "Event2",
      date: "March 15, 2025",
      fee: "Free",
      capacity: 50,
      type: "Competition",
      description: "Learn the fundamentals of AI with industry experts in this hands-on workshop.",
      rules: ["Bring a laptop", "Basic Python knowledge recommended"],
      image: "/api/placeholder/800/600",
      registrationLink: "https://example.com/ai-workshop-registration"
    },
    {
      id: 3,
      name: "Event3",
      date: "March 15, 2025",
      fee: "Free",
      capacity: 50,
      type: "Competition",
      description: "Learn the fundamentals of AI with industry experts in this hands-on workshop.",
      rules: ["Bring a laptop", "Basic Python knowledge recommended"],
      image: "/api/placeholder/800/600",
      registrationLink: "https://example.com/ai-workshop-registration"
    },
    {
      id: 4,
      name: "Event4",
      date: "March 15, 2025",
      fee: "Free",
      capacity: 50,
      type: "Competition",
      description: "Learn the fundamentals of AI with industry experts in this hands-on workshop.",
      rules: ["Bring a laptop", "Basic Python knowledge recommended"],
      image: "/api/placeholder/800/600",
      registrationLink: "https://example.com/ai-workshop-registration"
    },
    {
      id: 5,
      name: "Event5",
      date: "March 15, 2025",
      fee: "Free",
      capacity: 50,
      type: "Competition",
      description: "Learn the fundamentals of AI with industry experts in this hands-on workshop.",
      rules: ["Bring a laptop", "Basic Python knowledge recommended"],
      image: "/api/placeholder/800/600",
      registrationLink: "https://example.com/ai-workshop-registration"
    },
    {
      id: 6,
      name: "Event6",
      date: "March 15, 2025",
      fee: "Free",
      capacity: 50,
      type: "Competition",
      description: "Learn the fundamentals of AI with industry experts in this hands-on workshop.",
      rules: ["Bring a laptop", "Basic Python knowledge recommended"],
      image: "/api/placeholder/800/600",
      registrationLink: "https://example.com/ai-workshop-registration"
    },
    {
      id: 7,
      name: "Event7",
      date: "March 15, 2025",
      fee: "Free",
      capacity: 50,
      type: "Competition",
      description: "Learn the fundamentals of AI with industry experts in this hands-on workshop.",
      rules: ["Bring a laptop", "Basic Python knowledge recommended"],
      image: "/api/placeholder/800/600",
      registrationLink: "https://example.com/ai-workshop-registration"
    },
    {
      id: 8,
      name: "Event8",
      date: "March 15, 2025",
      fee: "Free",
      capacity: 50,
      type: "Competition",
      description: "Learn the fundamentals of AI with industry experts in this hands-on workshop.",
      rules: ["Bring a laptop", "Basic Python knowledge recommended"],
      image: "/api/placeholder/800/600",
      registrationLink: "https://example.com/ai-workshop-registration"
    },
    {
      id: 9,
      name: "Event9",
      date: "March 15, 2025",
      fee: "Free",
      capacity: 50,
      type: "Competition",
      description: "Learn the fundamentals of AI with industry experts in this hands-on workshop.",
      rules: ["Bring a laptop", "Basic Python knowledge recommended"],
      image: "/api/placeholder/800/600",
      registrationLink: "https://example.com/ai-workshop-registration"
    },
    {
      id: 10,
      name: "Event10",
      date: "March 15, 2025",
      fee: "Free",
      capacity: 50,
      type: "Competition",
      description: "Learn the fundamentals of AI with industry experts in this hands-on workshop.",
      rules: ["Bring a laptop", "Basic Python knowledge recommended"],
      image: "/api/placeholder/800/600",
      registrationLink: "https://example.com/ai-workshop-registration"
    },
  ];
  

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Upcoming Events
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our community events and enhance your skills with hands-on workshops,
            competitions, and learning sessions.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          {/* Timeline dots */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
          
          {/* Events */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={(event) => {
                  setSelectedEvent(event);
                  setIsModalOpen(true);
                }}
                index={index}
              />
            ))}
          </div>
          
          {/* Bottom timeline dot */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-0 w-4 h-4 rounded-full bg-purple-500"></div>
        </div>
      </div>

      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedEvent(null);
        }}
      />
    </div>
  );
};

export default EventPage;