import React from 'react';
import { FaTrophy, FaMoneyBillWave, FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Prizes = () => {
  const prizes = [
    {
      rank: '1st Prize',
      description: '₹25,000 + Certificate ',
      icon: <FaTrophy className="text-yellow-500 text-4xl" />,
    },
    {
      rank: '2nd Prize',
      description: '₹10,000 + Certificate',
      icon: <FaMoneyBillWave className="text-green-500 text-4xl" />,
    },
    {
      rank: '3rd Prize',
      description: '₹5,000 + Certificate',
      icon: <FaMoneyBillWave className="text-blue-500 text-4xl" />,
    },
    {
      rank: 'Special Mentions',
      description: 'Certificate of Appreciation',
      icon: <FaCertificate className="text-gray-400 text-4xl" />,
    },
  ];

  return (
    <section id="prizes" className="py-16  text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Prizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:rotate-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-4">
                {/* Prize Icon */}
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  {prize.icon}
                </motion.div>
                {/* Prize Rank */}
                <h3 className="text-xl font-semibold mb-2">{prize.rank}</h3>
                {/* Prize Description */}
                <p className="text-lg">{prize.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;