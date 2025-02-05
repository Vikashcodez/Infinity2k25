import React, { useState } from "react";
import logo from "../assets/infinity-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            INFINITY 2K25
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? "" : "hidden"}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border text-white border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/events" className="nav-link">Events</a></li>
            <li><a href="/gallery" className="nav-link">Gallery</a></li>
            <li><a href="/workshop" className="nav-link">Workshop</a></li>
            <li><a href="/sponsors" className="nav-link">Sponsors</a></li>
            <li><a href="/our-team" className="nav-link">Our Team</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
