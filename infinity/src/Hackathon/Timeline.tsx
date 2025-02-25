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
      date: 'Feb 26, 2025', 
      event: 'Round 1: Idea Submission Begins',
      description: 'Submit a 1-2 slide PPT explaining your idea, including its purpose, functionality, and potential impact.',
      badge: 'Round 1',
      period: 'Feb 26 - Mar 08, 2025'
    },
    { 
      date: 'Mar 08, 2025', 
      event: 'Round 1 Submission Deadline',
      description: 'Last day to submit your project proposal. Only the most promising ideas will move forward!',
      badge: 'Round 1',
      period: 'Feb 26 - Mar 08, 2025'
    },
    { 
      date: 'Mar 10, 2025', 
      event: 'Round 1 Results Announced',
      description: 'Selected teams will be notified to proceed to the prototype development phase.',
      badge: 'Results',
      period: 'Mar 10, 2025'
    },
    { 
      date: 'Mar 11, 2025',   
      event: 'Round 2: Prototype Development Begins',
      description: 'Develop a working prototype showcasing your idea\'s key features and real-world impact.',
      badge: 'Round 2',
      period: 'Mar 11 - Mar 17, 2025'
    },
    { 
      date: 'Mar 17, 2025',   
      event: 'Round 2 Submission Deadline',
      description: 'Submit a video demo of your working prototype by the end of the day.',
      badge: 'Round 2',
      period: 'Mar 11 - Mar 17, 2025'
    },
    { 
      date: 'Mar 19, 2025',   
      event: 'Round 2 Results Announced',
      description: 'Top 30 teams will be selected to present at the Grand Finale.',
      badge: 'Results',
      period: 'Mar 19, 2025'
    },
    { 
      date: 'Mar 21, 2025',   
      event: 'Round 3: Grand Finale - Day 1',
      description: 'Live presentations begin in front of an expert panel. Cover your problem statement, solution approach, and technical implementation.',
      badge: 'Finals',
      period: 'Mar 21 - Mar 22, 2025'
    },
    { 
      date: 'Mar 22, 2025',   
      event: 'Round 3: Grand Finale - Day 2 & Winners Announced',
      description: 'Final presentations conclude and winners are announced at the closing ceremony.',
      badge: 'Finals',
      period: 'Mar 21 - Mar 22, 2025'
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

  const getBadgeColor = (badge) => {
    switch(badge) {
      case 'Round 1':
        return 'from-blue-600 to-cyan-500';
      case 'Round 2':
        return 'from-purple-600 to-pink-500';
      case 'Results':
        return 'from-amber-500 to-yellow-400';
      case 'Finals':
        return 'from-red-500 to-rose-600';
      default:
        return 'from-gray-600 to-gray-500';
    }
  };

  return (
    <section id="timeline" className="py-20  text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Hackathon Timeline
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Track the journey from idea submission to grand finale
        </p>
        
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
                    className={`relative z-10 p-4 rounded-xl shadow-lg w-56 text-center ${
                      event.isLive 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-2 border-blue-300' 
                        : event.isPast 
                          ? 'bg-gray-800/90 border border-gray-700' 
                          : 'bg-black/90 border border-gray-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`text-xs font-semibold mb-1 py-1 px-2 rounded-full inline-block bg-gradient-to-r ${getBadgeColor(event.badge)} text-white`}>
                      {event.badge}
                    </div>
                    <p className="font-bold text-lg mb-1">{event.date}</p>
                    <p className="text-xs text-gray-400">{event.period}</p>
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
                    className={`w-full max-w-md p-6 rounded-xl shadow-xl backdrop-blur-sm ${
                      event.isLive 
                        ? 'bg-gradient-to-r from-blue-900/80 to-purple-900/80 border border-blue-600/50' 
                        : event.isPast 
                          ? 'bg-gray-800/80 border border-gray-700/50' 
                          : 'bg-gray-900/80 border border-gray-800/50'
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
                      <div className="mt-4 text-blue-300 text-sm font-semibold flex items-center">
                        <svg className="w-4 h-4 mr-1 animate-pulse" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                        </svg>
                        In progress
                      </div>
                    ) : (
                      <div className="mt-4 text-gray-400 text-sm flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                        </svg>
                        Coming soon
                      </div>
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