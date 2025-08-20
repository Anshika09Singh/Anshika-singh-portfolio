import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const roles = [
    "Web Developer crafting intelligent AI-powered web solutions",
    "Problem Solver",
    "AI/ML Enthusiast"
  ];

  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 75 : 150;

    const handleType = () => {
      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );
    };

    const timer = setTimeout(handleType, typingSpeed);

    if (!isDeleting && displayText === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50 p-6 md:p-12 font-sans overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">

        {/* Left side: Text content */}
        <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in-down">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-700 mb-4">
            Anshika Singh
          </h1>
          <p className="text-xl sm:text-2xl lg:text-4xl text-gray-700 font-mono mb-6">
            I am a <span className="text-blue-600 font-semibold">{displayText}</span>
          </p>
          <p className="max-w-xl mx-auto md:mx-0 text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
            Full Stack Developer & AI/ML enthusiast skilled in React.js, Tailwind
            CSS, Flask, Node.js, and Transformers. Crafting intelligent web
            applications, dashboards, and APIs with a passion for innovation.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/about"
              className="inline-block px-8 py-4 text-lg font-bold text-white bg-pink-600 rounded-full shadow-lg transition-all duration-300 ease-out transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Get Started
            </Link>

            <a
              href="https://drive.google.com/file/d/1Q91tfANOFQZ9ntuHNvG2WdwW9jP8Yhi1/view?usp=drive_link" // replace with your actual resume link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-lg font-bold text-white bg-green-600 rounded-full shadow-lg transition-all duration-300 ease-out transform hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
            >
              View Resume
            </a>

            <a
              href="https://github.com/Anshika09Singh" // replace with your actual resume link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-lg font-bold text-white bg-purple-600 rounded-full shadow-lg transition-all duration-300 ease-out transform hover:scale-105 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Github
            </a>
          </div>
        </div>

        

        {/* Right side: Image */}
        <div className=" md:w-1/3 flex justify-center md:justify-end animate-fade-in-right">
          <img
            src="https://acehacker.com/img/codess.png"
            alt="A placeholder illustration of a developer"
            className="w-full max-w-lg rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Tailwind CSS keyframes */}
      <style>
        {`
          @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-right {
            0% { opacity: 0; transform: translateX(20px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          .animate-fade-in-right {
            animation: fade-in-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            animation-delay: 0.2s;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
