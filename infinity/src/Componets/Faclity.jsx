import React from 'react';
import hod from '../assets/hod.png'
import faculity from '../assets/faculty.png'
const FacultyPage = () => {
  const facultyMembers = [
    {
      name: "Prof. P.V Sudha",
      designation: "Head of the Department",
      expertise: "Professor of Computer Science",
      imageUrl: hod 
    },
    {
      name: "Dr.V.B.Narsimha",
      designation: "Faculty Convenor",
      expertise: "Associate Professor of Computer  Science",
      imageUrl: faculity
    }
  ];

  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Faculty
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Our distinguished faculty members bring years of expertise and innovation 
            to guide the next generation of technology leaders.
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {facultyMembers.map((faculty, index) => (
            <div key={index} className="group perspective">
              {/* Card Container */}
              <div className="bg-white rounded-lg transform-gpu transition-all duration-500 hover:scale-105 hover:[transform:rotateY(5deg)] hover:shadow-2xl relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card Header */}
                <div className="text-center pt-8 px-6">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 mx-auto relative">
                      <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-pulse group-hover:animate-none transition-all duration-500"></div>
                      <img
                        src={faculty.imageUrl}
                        alt={faculty.name}
                        className="w-full h-full object-cover rounded-full ring-4 ring-white shadow-xl transform transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                    {faculty.name}
                  </h2>
                  <p className="text-lg font-medium text-slate-600">
                    {faculty.designation}
                  </p>
                </div>

                {/* Card Content */}
                <div className="px-6">
                  <div className="text-center pb-8">
                    <p className="text-sm text-slate-500 italic">
                      {faculty.expertise}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-600/20 to-transparent rounded-br-full transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-600/20 to-transparent rounded-tl-full transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyPage;