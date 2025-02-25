import React from 'react';

const HackathonDescription = () => {
  return (
    <section id="hackathon-description" className="py-16 text-white">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Main Title */}
        <h2 className="text-4xl font-bold mb-8 text-white">Hack4Good 2025: Hackathon Description</h2>
        
        {/* Short Introduction */}
        <p className="text-lg mb-6">
          Hack4Good 2025 is an exciting 6-hour coding marathon that brings together developers, designers, and innovators 
          from around the world to create impactful solutions for real-world challenges. Get ready to challenge your skills, 
          collaborate with brilliant minds, and make a positive impact in sectors like healthcare, education, and the environment.
        </p>

        {/* Rounds Overview */}
        <div className="space-y-8 mb-12">
          <h3 className="text-2xl font-semibold text-blue-200">Hackathon Rounds</h3>
          
          {/* Round 1 - Online Mode */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h4 className="text-xl font-semibold text-yellow-300 mb-4">Round 1: Online Mode</h4>
            <p className="text-lg">
              In this round, participants will work remotely to develop their ideas and submit a solution presentation (PPT) 
              that outlines the project concept, objectives, and how it addresses the problem statement.
            </p>
          </div>

          {/* Round 2 - Hybrid Mode */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h4 className="text-xl font-semibold text-green-300 mb-4">Round 2: Online Mode</h4>
            <p className="text-lg">
              After successful selection in Round 1, participants will move to Round 2, which will be conducted in a online mode. 
              This round involves both virtual and in-person collaboration to finalize your projects and present them and make video and submit it.
            </p>
          </div>
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h4 className="text-xl font-semibold text-green-300 mb-4">Round 3: Hybrid Mode</h4>
            <p className="text-lg">
              After successful selection in Round 2, participants will move to Round 3, which will be conducted in a hybrid mode. 
              This round involves both virtual and in-person collaboration to finalize your projects and present them to a live panel.
            </p>
          </div>
        </div>
        
        

        {/* Key Information Section */}
       

        {/* Closing Statement */}
        <p className="text-lg">
          Whether you're a beginner or a seasoned hacker, Hack4Good 2025 is designed to push your boundaries, spark creativity, 
          and make a real-world impact. Don't miss out on the chance to be part of something meaningful and fun!
        </p>
      </div>
    </section>
  );
};

export default HackathonDescription;