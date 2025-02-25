import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Update the current date every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Convert string date to Date object for comparison
  const parseDate = (dateStr) => {
    const [month, day, year] = dateStr.split(' ');
    const monthMap = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    return new Date(parseInt(year), monthMap[month], parseInt(day.replace(',', '')));
  };

  const events = [
    { 
      date: 'Feb 21, 2025', 
      event: 'Registration Opens',
      description: 'Sign up to participate in the hackathon and start forming your team.'
    },
    { 
      date: 'Mar 15, 2025', 
      event: 'Submission Deadline',
      description: 'Last day to register and submit your project proposal.'
    },
    { 
      date: 'Mar 21, 2025', 
      event: 'Hackathon Begins',
      description: '6 hours of intense coding, innovation, and problem-solving.'
    },
    { 
      date: 'Mar 22, 2025', 
      event: 'Winners Announced',
      description: 'Celebration and awards ceremony for the top projects.'
    },
  ];

  // Determine the status of each event
  const eventsWithStatus = events.map(event => {
    const eventDate = parseDate(event.date);
    const isUpcoming = eventDate > currentDate;
    const isLive = eventDate.toDateString() === currentDate.toDateString();
    const isPast = eventDate < currentDate && !isLive;
    
    return {
      ...event,
      isUpcoming,
      isLive,
      isPast
    };
  });

  return (
    <section id="timeline" className="py-20  text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Event Timeline</h2>
        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">Track our journey from registration to the grand finale</p>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>
          
          <div className="space-y-16">
            {eventsWithStatus.map((event, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Date circle */}
                <div className="md:w-1/2 flex flex-col items-center md:items-end pb-8 md:pb-0 md:pr-8">
                  <motion.div
                    className={`relative z-10 p-4 rounded-xl shadow-lg w-48 text-center border-2 ${
                      event.isLive ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-300' : 
                      event.isPast ? 'bg-gray-800 border-gray-700' : 'bg-black border-gray-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-bold text-lg">{event.date}</p>
                    {event.isLive && (
                      <div className="absolute -top-2 -right-2 flex items-center justify-center">
                        <span className="relative flex h-4 w-4">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                        </span>
                        <span className="ml-1 text-xs font-bold text-red-400">LIVE</span>
                      </div>
                    )}
                  </motion.div>
                </div>
                
                {/* Circle in the middle */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-purple-500 z-10"></div>
                
                {/* Event content */}
                <div className="md:w-1/2 flex flex-col items-center md:items-start md:pl-8">
                  <motion.div
                    className={`w-full max-w-md p-6 rounded-xl shadow-lg ${
                      event.isLive ? 'bg-gradient-to-r from-blue-900/80 to-purple-900/80' : 
                      event.isPast ? 'bg-gray-800/80' : 'bg-black/80'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className={`text-2xl font-bold mb-2 ${
                      event.isLive ? 'text-blue-300' : 
                      event.isPast ? 'text-gray-400' : 'text-white'
                    }`}>
                      {event.event}
                      {event.isLive && (
                        <span className="ml-2 inline-flex items-center">
                          <span className="relative flex h-3 w-3 mr-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                          </span>
                          <span className="text-sm font-bold text-red-400">HAPPENING NOW</span>
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-300">{event.description}</p>
                    {event.isPast ? (
                      <div className="mt-4 text-gray-400 text-sm flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Completed
                      </div>
                    ) : event.isLive ? (
                      <div className="mt-4 text-blue-300 text-sm font-semibold">In progress</div>
                    ) : (
                      <div className="mt-4 text-gray-400 text-sm">Coming soon</div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;