import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useNavigate } from 'react-router-dom';

const events = [
  'Event1', 'Event10', 'Event11', 'Event2', 'Event3',
  'Event4', 'Event5', 'Event6', 'Event7', 'Event8', 'Event9'
];

const AdminDashboard = () => {
  const [counts, setCounts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCounts = async () => {
      setLoading(true);
      setError(null);
      let newCounts = {};

      for (const event of events) {
        try {
          const { data, count, error } = await supabase
            .from(event)
            .select('*', { count: 'exact' });

          if (error) {
            console.error(`Error fetching count for ${event}:`, error);
            newCounts[event] = 0;
          } else {
            newCounts[event] = count ?? 0;
          }
        } catch (err) {
          console.error(`Error fetching ${event}:`, err);
          newCounts[event] = 0;
        }
      }

      setCounts(newCounts);
      setLoading(false);
    };

    fetchCounts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-xl font-semibold text-gray-700 animate-pulse">
          Loading event counts...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-red-500 font-semibold text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-7xl font-bold mb-8 text-gray-800 text-center">
          Events Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event}
              onClick={() => navigate(`/admin/${event}`)}
              className="group relative cursor-pointer"
            >
              {/* 3D Card Container */}
              <div className="transform transition-all duration-300 group-hover:-translate-y-2 group-hover:rotate-1">
                {/* Main Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform-gpu perspective-1000">
                  {/* Card Content */}
                  <div className="p-6 relative bg-gradient-to-br from-white to-gray-50">
                    {/* Count Display */}
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-blue-600 mb-2 transform transition-transform group-hover:scale-110">
                        {counts[event] ?? 0}
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider">
                        Registrations
                      </div>
                    </div>
                    
                    {/* Event Name */}
                    <h2 className="text-xl font-semibold text-center text-gray-800 mb-3">
                      {event}
                    </h2>
                    
                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></div>
                  </div>
                </div>
                
                {/* Card Shadow Effect */}
                <div className="absolute -bottom-1 left-1 right-1 h-full rounded-2xl bg-black/5 -z-10 transition-all duration-300 group-hover:bottom-0"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;