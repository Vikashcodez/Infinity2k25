import React from 'react';
import { Calendar, Clock, AlertCircle, CheckCircle, MapPin } from 'lucide-react';

// Card Components
const Card = ({ className = "", children, ...props }) => (
  <div
    className={`rounded-lg border bg-white text-gray-900 shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ className = "", children, ...props }) => (
  <div
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardTitle = ({ className = "", children, ...props }) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
);

const CardContent = ({ className = "", children, ...props }) => (
  <div
    className={`p-6 pt-0 ${className}`}
    {...props}
  >
    {children}
  </div>
);

// Main Event Tracking Component
const EventTracking = () => {
  const events = [
    {
      id: 1,
      name: "Brochure Launch",
      date: "2025-02-17",
      time: "15:00",
      location: "Conference Hall CSE Dept"
    },
    {
      id: 2,
      name: "WorkShop",
      date: "2025-02-25",
      time: "10:00",
      location: "Conference Hall CSE Dept"
    },
    {
      id: 3,
      name: "FlashMob",
      date: "2025-03-20",
      time: "14:00",
      location: "Arts College"
    },
    {
      id: 4,
      name: "Opening Cermony",
      date: "2025-03-22",
      time: "09:00",
      location: "Conference Hall CSE Dept"
    },
    {
      id: 5,
      name: "Technical Events",
      date: "2025-03-22",
      time: "11:00",
      location: "Conference Hall CSE Dept"
    }
  ];

  const isEventPassed = (date, time) => {
    const eventDateTime = new Date(`${date}T${time}`);
    return eventDateTime < new Date();
  };

  const getNextUpcomingEvent = () => {
    const now = new Date();
    return events
      .filter(event => {
        const eventDate = new Date(`${event.date}T${event.time}`);
        return eventDate > now;
      })
      .sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time}`);
        const dateB = new Date(`${b.date}T${b.time}`);
        return dateA - dateB;
      })[0];
  };

  const upcomingEvent = getNextUpcomingEvent();

  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Event Timeline</h1>
          <p className="text-gray-200">Track your upcoming and past events</p>
        </div>

        {/* Next Upcoming Event Card */}
        <Card className="mb-8 transform hover:scale-[1.02] transition-transform duration-300 bg-gradient-to-br from-blue-50 to-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              Next Upcoming Event
            </CardTitle>
          </CardHeader>
          <CardContent>
            {upcomingEvent ? (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{upcomingEvent.name}</h2>
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-600">{upcomingEvent.location}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">
                        {new Date(upcomingEvent.date).toLocaleDateString('en-US', { 
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">
                        {new Date(`2000-01-01T${upcomingEvent.time}`).toLocaleTimeString('en-US', {
                          hour: 'numeric',
                          minute: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center shadow-xl">
                    <Clock className="w-16 h-16 text-blue-600" />
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
            <div className="flex min-w-max px-4">
              {events.map((event, index) => (
                <div key={event.id} className="relative flex flex-col items-center w-64">
                  {/* Connector Line */}
                  {index !== events.length - 1 && (
                    <div className="absolute w-full h-0.5 bg-gray-200 top-6 left-1/2 -z-10" />
                  )}
                  
                  {/* Icon */}
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center mb-4
                    ${isEventPassed(event.date, event.time) ? 'bg-green-100' : 'bg-blue-100'}
                    shadow-lg transform transition-transform duration-300 hover:scale-110
                  `}>
                    {isEventPassed(event.date, event.time) ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-blue-600" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="text-center px-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{event.name}</h3>
                    <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <p className="text-sm text-gray-500">{event.location}</p>
                  </div>
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