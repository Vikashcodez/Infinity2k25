import React from 'react';
import { Calendar, Clock, AlertCircle, CheckCircle, MapPin } from 'lucide-react';

// Card Components
const Card = ({ className = "", children, ...props }) => (
  <div className={`rounded-lg border bg-white text-gray-900 shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ className = "", children, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-4 md:p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ className = "", children, ...props }) => (
  <h3 className={`text-xl md:text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>
    {children}
  </h3>
);

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`p-4 md:p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

// Main Event Tracking Component
const EventTracking = () => {
  const events = [
    { id: 1, name: "Brochure Launch", date: "2025-02-22", time: "15:00", location: "Conference Hall CSE Dept" },
    { id: 2, name: "WorkShop", date: "2025-03-15", time: "10:00", location: "Seminar Hall CSE Dept" },
    { id: 3, name: "FlashMob", date: "2025-03-20", time: "14:00", location: "Engg/Arts College" },
    { id: 4, name: "Opening Ceremony", date: "2025-03-21", time: "09:00", location: "Seminar Hall CSE Dept" },
    { id: 5, name: "Technical Events", date: "2025-03-21", time: "11:00", location: "Seminar Hall CSE Dept" }
  ];

  const isEventPassed = (date, time) => {
    const eventDateTime = new Date(`${date}T${time}`);
    return eventDateTime < new Date();
  };

  const getNextUpcomingEvent = () => {
    const now = new Date();
    return events
      .filter(event => new Date(`${event.date}T${event.time}`) > now)
      .sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`))[0];
  };

  const upcomingEvent = getNextUpcomingEvent();

  return (
    <div className="min-h-screen p-4 md:p-8 ">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">Event Timeline</h1>
          <p className="text-gray-200 text-sm md:text-base">Track your upcoming and past events</p>
        </div>

        {/* Next Upcoming Event Card */}
        <Card className="mb-8 transform hover:scale-[1.02] transition-transform duration-300 bg-gradient-to-br from-blue-50 to-white">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="flex items-center gap-2 text-blue-600">
              <AlertCircle className="w-5 h-5 md:w-6 md:h-6" />
              Next Upcoming Event
            </CardTitle>
          </CardHeader>
          <CardContent>
            {upcomingEvent ? (
              <div className="space-y-4">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900">{upcomingEvent.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="text-sm md:text-base">
                        {new Date(upcomingEvent.date).toLocaleDateString('en-US', { 
                          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="text-sm md:text-base">
                        {new Date(`2000-01-01T${upcomingEvent.time}`).toLocaleTimeString('en-US', {
                          hour: 'numeric', minute: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-gray-500" />
                      <span className="text-sm md:text-base">{upcomingEvent.location}</span>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                      <AlertCircle className="w-12 h-12 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-gray-600">No upcoming events scheduled</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Vertical Timeline Section */}
        <Card className="transform hover:scale-[1.02] transition-transform duration-300">
          <CardHeader className="border-b border-gray-100">
            <CardTitle>Events Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              {/* Events */}
              <div className="space-y-8">
                {events.map((event) => (
                  <div key={event.id} className="relative pl-12 md:pl-16">
                    {/* Timeline Dot */}
                    <div className={`absolute left-0 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center
                      ${isEventPassed(event.date, event.time) ? 'bg-green-100' : 'bg-blue-100'}
                      shadow-md transform transition-transform duration-300 hover:scale-110
                    `}>
                      {isEventPassed(event.date, event.time) ? (
                        <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
                      ) : (
                        <AlertCircle className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
                      )}
                    </div>

                    {/* Event Card */}
                    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{event.name}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span>{new Date(event.date).toLocaleDateString('en-US', { 
                            month: 'short', day: 'numeric', year: 'numeric'
                          })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span>{new Date(`2000-01-01T${event.time}`).toLocaleTimeString('en-US', {
                            hour: 'numeric', minute: 'numeric'
                          })}</span>
                        </div>
                        <div className="flex items-center gap-2 md:col-span-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EventTracking;