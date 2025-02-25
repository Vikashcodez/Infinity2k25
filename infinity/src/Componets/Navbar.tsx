import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/infinity-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("userToken"));
  const navigate = useNavigate();

  // Listen for localStorage changes (login/logout)
  useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(!!localStorage.getItem("userToken"));
    };

    window.addEventListener("authChange", handleAuthChange);
    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("authChange")); // Notify Navbar to update UI
    navigate("/login");
  };

  const handleAuth = () => {
    if (isLoggedIn) {
      handleLogout();
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-8" alt="Logo" />
          <span className="text-2xl font-semibold">INFINITY 2K25</span>
        </Link>

        {/* Auth Button & Hamburger */}
        <div className="flex items-center md:order-2">
          <button
            onClick={handleAuth}
            className={`px-6 py-2 text-sm font-medium text-white rounded-full transition-colors duration-200 ease-in-out mr-4 md:mr-0 ${
              isLoggedIn
                ? "bg-red-600 hover:bg-red-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg text-white focus:outline-none"
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
          className={`w-full md:flex md:w-auto md:static md:bg-transparent ${
            isOpen ? "block absolute bg-gray-800 top-16 left-0 right-0 p-4 shadow-lg" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 text-white">
            {[
              { path: "/", label: "Home" },
              { path: "/hack", label: "Hackathon" },
              { path: "/events", label: "Events" },
              { path: "/gallery", label: "Gallery" },
              { path: "/workshop", label: "Live Event" },
              { path: "/sponsors", label: "Sponsors" },
              { path: "/our-team", label: "Our Team" },
            ].map((item) => (
              <li key={item.path}>
                <button onClick={() => { navigate(item.path); closeMenu(); }} className="block py-2 px-4 rounded-md hover:bg-gray-700 md:hover:bg-transparent">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
