import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative py-10 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 text-center space-y-6 animate-fade-in">
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-lg font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/Anshika09Singh" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/anshika-singh-031b132a5/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/your_instagram_username" }, // ✅ add your Instagram handle here
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-full shadow-md backdrop-blur-lg hover:scale-110 hover:shadow-lg hover:bg-purple-100 dark:hover:bg-purple-800/40 transition duration-300 text-xl"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-purple-400 mx-auto rounded-full opacity-50"></div>

        {/* Copyright */}
        <p className="text-sm opacity-80">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Anshika Singh</span>. All rights reserved.
        </p>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-in-out forwards;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
