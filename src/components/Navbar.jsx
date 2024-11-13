import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white fixed top-0 left-0 w-full z-10 shadow-md m-0">
      {/* Logo Section */}
      <div>
        <a href="/">
          <img src={Logo} alt="Reflective Logo" className="w-20 p-1.5 ml-12" />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <Link
          to="/"
          className="text-gray-600 hover:text-indigo-400 transition-colors duration-300"
        >
          Home
        </Link>
        <a
          href="#about"
          className="text-gray-600 hover:text-indigo-400 transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#skills"
          className="text-gray-600 hover:text-indigo-400 transition-colors duration-300"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="text-gray-600 hover:text-indigo-400 transition-colors duration-300"
        >
          Portfolio
        </a>
      </div>

      {/* Button Section */}
      <div>
        <button className="bg-transparent hover:bg-indigo-300 text-indigo-600 font-semibold hover:text-white py-2 px-4 mx-4 border border-indigo-500 hover:border-transparent rounded-full transition-all duration-300">
          Let's Talk
        </button>
      </div>
    </nav>
  );
}
