import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 ShelaWidiya.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://www.instagram.com/shelawdya/"
            target="_blank" 
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/shelawd"
            target="_blank"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/shelawidiya/"
            target="_blank"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
