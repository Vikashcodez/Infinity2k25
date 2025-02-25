import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaLightbulb, FaShieldAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ProblemStatement = () => {
  const [expanded, setExpanded] = useState(false);
  
  const problemStatement = {
    title: "Building a Scalable and Practical Technology Solution for Women's Safety in India",
    description: "Developing a technological solution for women's safety is a challenging task—not because building the technology is difficult, but because its implementation at scale is complex.",
    challenges: [
      {
        title: "Hardware Limitations",
        content: "A hardware-based solution, such as a wearable device (band, belt, etc.), can be built and can function effectively. However, ensuring its accessibility to every woman across the country—whether in urban, rural, or remote areas—is nearly impossible. Safety concerns are not limited to specific locations, making widespread distribution and adoption of such hardware solutions impractical."
      },
      {
        title: "Software Constraints",
        content: "A software-based solution, such as a mobile application, can achieve large-scale reach, similar to how Aarogya Setu was widely adopted during the COVID-19 pandemic. However, practical limitations exist. An app with an SOS button, requiring a person in distress to press a button multiple times, is not always feasible in real-life emergency situations. Continuous voice recording for distress detection is also not a viable option due to privacy concerns and technical limitations."
      }
    ],
    conclusion: "Given these challenges, if a practical and scalable solution can be designed that ensures implementation for every woman in the country, collaboration is encouraged. Ideas and contributions are welcome to build a technology-driven solution that genuinely enhances women's safety."
  };

  return (
    <section id="problem-statement" className="py-20 ">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Problem Statement
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto"></div>
          </div>
          
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
            whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
          >
            {/* Header with Icon */}
            <div className="bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 p-6 sm:p-8 border-b border-gray-800">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg mr-4">
                  <FaShieldAlt className="text-white text-xl" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {problemStatement.title}
                </h3>
              </div>
              <p className="text-gray-300 text-lg">
                {problemStatement.description}
              </p>
            </div>
            
            {/* Main Content */}
            <div className="p-6 sm:p-8">
              {/* Challenges */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                  <FaLightbulb className="mr-2" /> Challenges to Overcome
                </h4>
                
                <div className="space-y-6">
                  {problemStatement.challenges.map((challenge, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="bg-gray-800/50 rounded-xl p-5 border-l-4 border-purple-500"
                    >
                      <h5 className="text-lg font-semibold text-white mb-2">{challenge.title}</h5>
                      <p className="text-gray-300">{challenge.content}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Conclusion */}
              <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-96' : 'max-h-28'}`}>
                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-5 rounded-xl border border-gray-700">
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">Our Challenge to You</h4>
                  <p className="text-gray-200">{problemStatement.conclusion}</p>
                </div>
              </div>
              
              {/* Expand Button */}
              <div className="flex justify-center mt-2">
                <button 
                  onClick={() => setExpanded(!expanded)}
                  className="text-gray-400 hover:text-white flex items-center text-sm font-medium"
                >
                  {expanded ? (
                    <>Show Less <FaChevronUp className="ml-1" /></>
                  ) : (
                    <>Read More <FaChevronDown className="ml-1" /></>
                  )}
                </button>
              </div>
            </div>
            
            {/* Footer with Download Button */}
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;