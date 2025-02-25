import React, { useState } from "react";
import { Link } from "react-scroll";
import { Home, List, Clock, HelpCircle, Menu, X, Briefcase, Gift, Phone } from "lucide-react"; // Add Gift and Phone icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-4 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-wide">Hack4Good</div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Menu */}
        <ul
          className={`md:flex md:space-x-8 absolute md:static left-0 w-full md:w-auto bg-black md:bg-transparent md:flex-row flex flex-col text-center items-center transition-all duration-300 ${
            isOpen ? "top-16 opacity-100" : "top-[-300px] opacity-0 md:opacity-100"
          }`}
        >
          <li className="py-3 md:py-0 flex items-center space-x-2">
            <Home className="text-blue-400" size={24} />
            <Link
              to="banner"
              smooth={true}
              duration={500}
              className="text-white text-lg hover:text-blue-400 transition"
            >
              Home
            </Link>
          </li>
          {/* Hackathon Description Link with Icon */}
          <li className="py-3 md:py-0 flex items-center space-x-2">
            <Briefcase className="text-blue-400" size={24} />
            <Link
              to="hackathon-description"
              smooth={true}
              duration={500}
              className="text-white text-lg hover:text-blue-400 transition"
            >
              Hackathon Description
            </Link>
          </li>
          <li className="py-3 md:py-0 flex items-center space-x-2">
            <List className="text-green-400" size={24} />
            <Link
              to="problem-statements"
              smooth={true}
              duration={500}
              className="text-white text-lg hover:text-green-400 transition"
            >
              Problem Statements
            </Link>
          </li>
          <li className="py-3 md:py-0 flex items-center space-x-2">
            <Clock className="text-yellow-400" size={24} />
            <Link
              to="timeline"
              smooth={true}
              duration={500}
              className="text-white text-lg hover:text-yellow-400 transition"
            >
              Timeline
            </Link>
          </li>
          {/* Prizes Link with Icon */}
          <li className="py-3 md:py-0 flex items-center space-x-2">
            <Gift className="text-pink-400" size={24} />
            <Link
              to="prizes"
              smooth={true}
              duration={500}
              className="text-white text-lg hover:text-pink-400 transition"
            >
              Prizes
            </Link>
          </li>
          <li className="py-3 md:py-0 flex items-center space-x-2">
            <HelpCircle className="text-red-400" size={24} />
            <Link
              to="faq"
              smooth={true}
              duration={500}
              className="text-white text-lg hover:text-red-400 transition"
            >
              FAQ
            </Link>
          </li>
          
          
          {/* Contact Link with Icon */}
          <li className="py-3 md:py-0 flex items-center space-x-2">
            <Phone className="text-yellow-400" size={24} />
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-white text-lg hover:text-yellow-400 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;