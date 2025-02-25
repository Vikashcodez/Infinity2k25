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
    { id: 1, name: "Brochure Launch", date: "2025-02-20", time: "15:00", location: "Conference Hall CSE Dept" },
    { id: 2, name: "WorkShop", date: "2025-02-25", time: "10:00", location: "Conference Hall CSE Dept" },
    { id: 3, name: "FlashMob", date: "2025-03-20", time: "14:00", location: "Arts College" },
    { id: 4, name: "Opening Ceremony", date: "2025-03-22", time: "09:00", location: "Conference Hall CSE Dept" },
    { id: 5, name: "Technical Events", date: "2025-03-22", time: "11:00", location: "Conference Hall CSE Dept" }
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
    <div className="min-h-screen p-4 md:p-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-6 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Event Timeline</h1>
          <p className="text-gray-200 text-sm md:text-base">Track your upcoming and past events</p>
        </div>

        {/* Next Upcoming Event Card */}
        <Card className="mb-6 md:mb-8 transform hover:scale-[1.02] transition-transform duration-300 bg-gradient-to-br from-blue-50 to-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              Next Upcoming Event
            </CardTitle>
          </CardHeader>
          <CardContent>
            {upcomingEvent ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4">
                  <h2 className="text-lg md:text-2xl font-bold text-gray-900">{upcomingEvent.name}</h2>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
                    <span className="text-sm md:text-base">{upcomingEvent.location}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                      <span className="text-sm md:text-base">
                        {new Date(upcomingEvent.date).toLocaleDateString('en-US', { 
                          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                      <span className="text-sm md:text-base">
                        {new Date(`2000-01-01T${upcomingEvent.time}`).toLocaleTimeString('en-US', {
                          hour: 'numeric', minute: 'numeric'
                        })}
                      </span>
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

        {/* Timeline Section */}
        <Card className="transform hover:scale-[1.02] transition-transform duration-300 overflow-x-auto">
          <CardHeader>
            <CardTitle>Events Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex md:flex-wrap min-w-max md:min-w-full overflow-x-auto space-x-6 md:space-x-0 px-4">
              {events.map((event, index) => (
                <div key={event.id} className="relative flex flex-col items-center w-40 md:w-64 text-center">
                  {/* Connector Line */}
                  {index !== events.length - 1 && (
                    <div className="absolute hidden md:block w-full h-0.5 bg-gray-200 top-6 left-1/2 -z-10" />
                  )}

                  {/* Icon */}
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-4
                    ${isEventPassed(event.date, event.time) ? 'bg-green-100' : 'bg-blue-100'}
                    shadow-lg transform transition-transform duration-300 hover:scale-110
                  `}>
                    {isEventPassed(event.date, event.time) ? (
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                    ) : (
                      <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1">{event.name}</h3>
                  <p className="text-xs md:text-sm text-gray-600">{event.date} | {event.time}</p>
                  <p className="text-xs md:text-sm text-gray-500">{event.location}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EventTracking;
