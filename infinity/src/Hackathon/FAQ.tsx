import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "Who can participate?", answer: "Anyone above 18 years old, including students and professionals." },
    { question: "Is there a registration fee?", answer: "No, participation is completely free!" },
    { question: "Can I participate alone?", answer: "Yes, but teams of 2-4 members are recommended for better collaboration." },
    { question: "What is the duration of the hackathon?", answer: "Hack4Good 2025 is a 48-hour non-stop coding marathon." },
    { question: "Will I receive a certificate?", answer: "Yes, all participants will receive certificates, and winners get additional prizes!" },
    { question: "Are there any prerequisites?", answer: "Basic programming knowledge is recommended but not mandatory." },
    { question: "Can I use open-source libraries?", answer: "Yes, but your project should be original and adhere to ethical standards." },
    { question: "How do I submit my project?", answer: "You will be given a submission portal where you can upload your project before the deadline." },
    { question: "Are there mentors available?", answer: "Yes, experienced mentors will be available to guide and help you throughout the hackathon." },
    { question: "What technologies can I use?", answer: "You can use any technology stack, including Python, JavaScript, AI/ML frameworks, and more!" },
  ];

  return (
    <section id="faq" className="py-16 bg-black text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-700">
            {/* Question */}
            <div
              className="bg-gray-800 p-5 rounded-lg shadow-md cursor-pointer flex justify-between items-center transition hover:bg-gray-700"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {openIndex === index ? (
                <FaChevronUp className="text-blue-400 transition-transform duration-300" />
              ) : (
                <FaChevronDown className="text-gray-400 transition-transform duration-300" />
              )}
            </div>

            {/* Answer with Animation */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-2 p-5 bg-gray-800 rounded-b-lg text-gray-300">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;