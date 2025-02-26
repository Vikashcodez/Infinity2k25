import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/infinity-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Navigation items
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/hack", label: "Hackathon" },
    { path: "/events", label: "Events" },
    { path: "/gallery", label: "Gallery" },
    { path: "/workshop", label: "Workshop" },
    { path: "/sponsors", label: "Sponsors" },
    { path: "/our-team", label: "Our Team" },
  ];

  // Handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="text-white relative z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 z-50">
          <img src={logo} className="h-8" alt="Logo" />
          <span className="text-2xl font-semibold">INFINITY 2K25</span>
        </Link>

        {/* Auth Button & Hamburger */}
        <div className="flex items-center md:order-2 z-50">
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 text-sm font-medium text-white rounded-full transition-colors duration-200 ease-in-out mr-4 md:mr-0 bg-blue-600 hover:bg-blue-700"
          >
            Login
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg text-white focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`w-full md:flex md:w-auto md:order-1 transition-all duration-300 ${
            isOpen 
              ? "block fixed top-16 left-0 right-0 bg-gray-800 p-4 shadow-lg z-40 max-h-screen overflow-y-auto" 
              : "hidden"
          }`}
        >
          <ul className="flex flex-col w-full md:flex-row md:space-x-8 text-white">
            {navItems.map((item) => (
              <li key={item.path} className="w-full">
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.path);
                  }}
                  className="block py-3 px-4 w-full text-left rounded-md hover:bg-gray-700 md:hover:bg-transparent md:p-0 md:hover:text-blue-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;