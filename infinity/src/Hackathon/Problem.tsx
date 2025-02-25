import React, { useState } from 'react';
import { FaShieldAlt, FaLightbulb, FaTrophy, FaAngleDown, FaAngleUp, FaGraduationCap, FaFemale } from 'react-icons/fa';

const ProblemStatement = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  
  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  
  const selectChallenge = (challenge) => {
    setSelectedChallenge(challenge);
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl border border-gray-800">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Hack4Good Hackathon 2025
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-4"></div>
        <p className="text-gray-300 text-lg">
          Innovative Technological Solutions for Social Impact
        </p>
      </div>
      
      {/* Problem Statement Section */}
      <div className="mb-6">
        <button 
          onClick={() => toggleSection('problem')}
          className="w-full flex justify-between items-center bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 p-4 rounded-lg border border-gray-700 text-left"
        >
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg mr-4">
              <FaShieldAlt className="text-white text-xl" />
            </div>
            <h2 className="text-2xl font-bold text-white">Problem Statement</h2>
          </div>
          {expandedSection === 'problem' ? 
            <FaAngleUp className="text-gray-400 text-2xl" /> : 
            <FaAngleDown className="text-gray-400 text-2xl" />
          }
        </button>
        
        {expandedSection === 'problem' && (
          <div className="bg-gray-800/30 rounded-b-lg p-6 border-x border-b border-gray-700 mt-1 animate-fadeIn">
            <p className="text-gray-300 mb-6">
              Choose one of the following challenge tracks for your project submission:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Women's Safety Card */}
              <div 
                className={`bg-gradient-to-br ${selectedChallenge === 'women-safety' ? 'from-pink-900/50 to-purple-900/50 border-pink-500' : 'from-gray-800/50 to-gray-900/50 border-gray-700'} rounded-xl p-5 border-2 cursor-pointer transition-all duration-300 transform hover:scale-102 hover:shadow-lg`}
                onClick={() => selectChallenge('women-safety')}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-lg mr-3">
                    <FaFemale className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Women's Safety</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Develop technological solutions to enhance women's safety in public and private spaces through prevention, detection, or response mechanisms.
                </p>
                <ul className="text-gray-300 space-y-2 list-disc pl-6">
                  <li>Real-time threat detection systems</li>
                  <li>Emergency response solutions</li>
                  <li>Prevention-focused applications</li>
                  <li>Post-incident support tools</li>
                </ul>
              </div>
              
              {/* Student Innovation Card */}
              <div 
                className={`bg-gradient-to-br ${selectedChallenge === 'student-innovation' ? 'from-blue-900/50 to-cyan-900/50 border-blue-500' : 'from-gray-800/50 to-gray-900/50 border-gray-700'} rounded-xl p-5 border-2 cursor-pointer transition-all duration-300 transform hover:scale-102 hover:shadow-lg`}
                onClick={() => selectChallenge('student-innovation')}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg mr-3">
                    <FaGraduationCap className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Student Innovation</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Create innovative solutions to address educational challenges, improve campus life, or solve student-specific problems through technology.
                </p>
                <ul className="text-gray-300 space-y-2 list-disc pl-6">
                  <li>Smart campus initiatives</li>
                  <li>Education technology solutions</li>
                  <li>Student mental health support</li>
                  <li>Resource accessibility tools</li>
                </ul>
              </div>
            </div>
            
            {/* Selected Challenge Details */}
            {selectedChallenge === 'women-safety' && (
              <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 p-6 rounded-xl border border-pink-800/50 animate-fadeIn">
                <h3 className="text-xl font-semibold text-pink-400 mb-4">Women's Safety Challenge Details</h3>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Background</h4>
                  <p className="text-gray-300">
                    Women's safety remains a critical concern worldwide. Many incidents of harassment and assault go unreported due to fear, lack of evidence, or ineffective emergency response mechanisms. Technology has the potential to empower women by providing real-time assistance, prevention, and reporting solutions.
                  </p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                  <p className="text-gray-300">
                    Develop a hardware or software-based solution that enhances women's safety in public or private spaces. The solution can focus on prevention, real-time threat detection, emergency response, or post-incident support. Participants are encouraged to explore cutting-edge technologies such as IoT, AI, mobile applications, wearables, or any innovative approach of their choice.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Key Considerations</h4>
                  <ul className="text-gray-300 space-y-2 list-disc pl-6">
                    <li><span className="font-medium">Effectiveness:</span> How does your solution detect or prevent danger?</li>
                    <li><span className="font-medium">Real-time Response:</span> Does it provide immediate alerts or emergency response features?</li>
                    <li><span className="font-medium">Privacy:</span> How does it ensure user privacy and security?</li>
                    <li><span className="font-medium">Accessibility:</span> How user-friendly is it for women of all age groups and backgrounds?</li>
                    <li><span className="font-medium">Scalability:</span> Can your solution be deployed at scale across urban and rural areas?</li>
                  </ul>
                </div>
              </div>
            )}
            
            {selectedChallenge === 'student-innovation' && (
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-6 rounded-xl border border-blue-800/50 animate-fadeIn">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Student Innovation Challenge Details</h3>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Background</h4>
                  <p className="text-gray-300">
                    Educational institutions face unique challenges in the digital age. From resource management to student engagement, there are numerous opportunities for technological innovations to improve the academic experience. Students themselves often have the best insights into the problems that need solving.
                  </p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                  <p className="text-gray-300">
                    Create a technological solution that addresses a specific challenge in the educational ecosystem. This could involve improving campus security, enhancing distance learning, simplifying administrative processes, facilitating resource sharing, or any other area where technology can make a significant impact on student life and learning.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Key Considerations</h4>
                  <ul className="text-gray-300 space-y-2 list-disc pl-6">
                    <li><span className="font-medium">Innovation:</span> How does your solution address the problem in a novel way?</li>
                    <li><span className="font-medium">Feasibility:</span> Can it be implemented with existing infrastructure?</li>
                    <li><span className="font-medium">User Experience:</span> Is it intuitive and accessible to all students?</li>
                    <li><span className="font-medium">Impact:</span> What quantifiable benefits does it bring to the educational community?</li>
                    <li><span className="font-medium">Sustainability:</span> How will your solution be maintained and developed over time?</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Implementation Challenges Section */}
      <div className="mb-6">
        <button 
          onClick={() => toggleSection('challenges')}
          className="w-full flex justify-between items-center bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 p-4 rounded-lg border border-gray-700 text-left"
        >
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg mr-4">
              <FaLightbulb className="text-white text-xl" />
            </div>
            <h2 className="text-2xl font-bold text-white">Implementation Challenges</h2>
          </div>
          {expandedSection === 'challenges' ? 
            <FaAngleUp className="text-gray-400 text-2xl" /> : 
            <FaAngleDown className="text-gray-400 text-2xl" />
          }
        </button>
        
        {expandedSection === 'challenges' && (
          <div className="bg-gray-800/30 rounded-b-lg p-6 border-x border-b border-gray-700 mt-1 animate-fadeIn">
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-xl p-5 border-l-4 border-purple-500">
                <h3 className="text-lg font-semibold text-white mb-2">Hardware Limitations</h3>
                <p className="text-gray-300">
                  A hardware-based solution, such as a wearable device (band, belt, etc.), can be built and can function effectively. However, ensuring its accessibility to every woman across the country—whether in urban, rural, or remote areas—is nearly impossible. Safety concerns are not limited to specific locations, making widespread distribution and adoption of such hardware solutions impractical.
                </p>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-5 border-l-4 border-purple-500">
                <h3 className="text-lg font-semibold text-white mb-2">Software Constraints</h3>
                <p className="text-gray-300">
                  A software-based solution, such as a mobile application, can achieve large-scale reach, similar to how Aarogya Setu was widely adopted during the COVID-19 pandemic. However, practical limitations exist. An app with an SOS button, requiring a person in distress to press a button multiple times, is not always feasible in real-life emergency situations. Continuous voice recording for distress detection is also not a viable option due to privacy concerns and technical limitations.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-5 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Our Challenge to You</h3>
                <p className="text-gray-200">
                  Given these challenges, we're looking for innovative solutions that balance technical feasibility with practical implementation. Your approach should consider real-world constraints while providing genuine value to users. Think beyond conventional approaches and consider how emerging technologies might be applied in novel ways to solve these problems.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Hackathon Structure Section */}
      <div className="mb-6">
        <button 
          onClick={() => toggleSection('structure')}
          className="w-full flex justify-between items-center bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 p-4 rounded-lg border border-gray-700 text-left"
        >
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg mr-4">
              <FaTrophy className="text-white text-xl" />
            </div>
            <h2 className="text-2xl font-bold text-white">Hackathon Structure</h2>
          </div>
          {expandedSection === 'structure' ? 
            <FaAngleUp className="text-gray-400 text-2xl" /> : 
            <FaAngleDown className="text-gray-400 text-2xl" />
          }
        </button>
        
        {expandedSection === 'structure' && (
          <div className="bg-gray-800/30 rounded-b-lg p-6 border-x border-b border-gray-700 mt-1 animate-fadeIn">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">⚡ Rounds</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-5 border border-blue-800/50">
                    <h4 className="text-lg font-semibold text-white mb-2">🔷 Round 1: Idea Submission 📑</h4>
                    <ul className="text-gray-300 space-y-2 list-disc pl-6">
                      <li>Submit a 1-2 slide PPT explaining your idea, including its purpose, functionality, and potential impact.</li>
                      <li>Only the most promising ideas will move forward!</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-5 border border-blue-800/50">
                    <h4 className="text-lg font-semibold text-white mb-2">🔷 Round 2: Prototype Submission 🎥</h4>
                    <ul className="text-gray-300 space-y-2 list-disc pl-6">
                      <li>Develop a working prototype and submit a video demo showcasing its key features and real-world impact.</li>
                      <li>Show us how your solution can make a difference!</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-5 border border-blue-800/50">
                    <h4 className="text-lg font-semibold text-white mb-2">🔷 Round 3: Grand Finale – Live Presentation 🎤</h4>
                    <ul className="text-gray-300 space-y-2 list-disc pl-6">
                      <li>Shortlisted teams will present their project live in front of an expert panel.</li>
                      <li>Your presentation should cover the problem statement, solution approach, technical implementation, challenges faced, and future scope.</li>
                      <li>Impress the judges and claim your prize!</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">🏆 Prizes at Stake!</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-b from-yellow-900/30 to-yellow-800/10 rounded-xl p-5 border border-yellow-700/30 text-center">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2">🥇 1st Place</h4>
                    <p className="text-yellow-300 text-2xl font-bold">₹25,000</p>
                  </div>
                  
                  <div className="bg-gradient-to-b from-gray-700/30 to-gray-600/10 rounded-xl p-5 border border-gray-500/30 text-center">
                    <h4 className="text-lg font-semibold text-gray-300 mb-2">🥈 2nd Place</h4>
                    <p className="text-gray-200 text-2xl font-bold">₹15,000</p>
                  </div>
                  
                  <div className="bg-gradient-to-b from-amber-800/30 to-amber-700/10 rounded-xl p-5 border border-amber-600/30 text-center">
                    <h4 className="text-lg font-semibold text-amber-400 mb-2">🥉 3rd Place</h4>
                    <p className="text-amber-300 text-2xl font-bold">₹10,000</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
                💡 Join Hack4Good and be the change! 🚀✨
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemStatement;