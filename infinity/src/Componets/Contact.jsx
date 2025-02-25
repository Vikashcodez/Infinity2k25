import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import dept from '../assets/dept.png'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    feedback: ''
  });
  const [status, setStatus] = useState({
    message: '',
    isError: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: 'Sending...', isError: false });

    try {
      const result = await emailjs.send(
        'service_7fcwm9t',
        'template_w017kga',
        {
          from_email: formData.email,
          message: formData.feedback,
        },
        '-LHwwQdcUgiE6iZ2T'
      );

      if (result.text === 'OK') {
        setStatus({ message: 'Message sent successfully!', isError: false });
        setFormData({ email: '', feedback: '' });
      }
    } catch (error) {
      setStatus({ 
        message: 'Failed to send message. Please try again.', 
        isError: true 
      });
    }
  };

  return (
    <div className="min-h-screen  text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with enhanced neon effect */}
        <h1 className="text-5xl font-bold text-center mb-16 text-[#00E5FF] relative">
          Suggestions & Feedback
          
        </h1>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left side */}
          <div className="space-y-8">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={dept}
                alt="Contact"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#00E5FF]/10 shadow-[inset_0_0_20px_rgba(0,229,255,0.3)]"></div>
            </div>

            {/* Contact Info Box with enhanced neon effect */}
            <div className="bg-[#131320] p-8 rounded-lg relative">
              <div className="absolute inset-0 rounded-lg shadow-[0_0_15px_rgba(0,229,255,0.2)]"></div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center space-x-4 text-[#00E5FF] group">
                  <span className="text-2xl">📞</span>
                  <span className="text-lg hover:text-white transition-colors">+91 7981942704</span>
                </div>
                
                <div className="flex items-center space-x-4 text-[#00E5FF] group">
                  <span className="text-2xl">✉️</span>
                  <span className="text-lg hover:text-white transition-colors">infinity2k25.oucse@gmail.com
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 text-[#00E5FF] group">
                  <span className="text-2xl">📍</span>
                  <span className="text-lg hover:text-white transition-colors">Department of Computer scienece Engineering<br /> UCE OU</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form with enhanced styling */}
          <div className="bg-[#131320] p-8 rounded-lg relative">
            <div className="absolute inset-0 rounded-lg shadow-[0_0_15px_rgba(0,229,255,0.2)]"></div>
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div>
                <label className="block text-[#00E5FF] mb-3 text-lg">Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a2e] border border-[#00E5FF] rounded-lg p-4 focus:outline-none focus:shadow-[0_0_10px_rgba(0,229,255,0.3)] transition-shadow text-gray-100"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-[#00E5FF] mb-3 text-lg">Feedback & Suggestions</label>
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a2e] border border-[#00E5FF] rounded-lg p-4 h-48 focus:outline-none focus:shadow-[0_0_10px_rgba(0,229,255,0.3)] transition-shadow text-gray-100"
                  placeholder="Share your thoughts with us..."
                  required
                />
              </div>

              {status.message && (
                <div className={`p-4 rounded-lg ${status.isError ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#00E5FF] hover:bg-[#00E5FF]/90 text-gray-900 font-bold py-4 px-6 rounded-lg transition duration-300 ease-in-out shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_20px_rgba(0,229,255,0.5)]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;