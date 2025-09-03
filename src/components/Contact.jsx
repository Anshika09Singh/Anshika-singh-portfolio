import React, { useState, useEffect } from "react";

// ====== Social Media Icons (SVG) ======
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 0 0-3.16 19.47c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34a2.65 2.65 0 0 0-1.1-1.45c-.9-.62.07-.61.07-.61a2.1 2.1 0 0 1 1.53 1.03 2.15 2.15 0 0 0 2.92.84 2.15 2.15 0 0 1 .64-1.34c-2.22-.25-4.56-1.12-4.56-5a3.92 3.92 0 0 1 1.05-2.7 3.64 3.64 0 0 1 .1-2.66s.84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03a3.64 3.64 0 0 1 .1 2.66A3.92 3.92 0 0 1 19 11.5c0 3.9-2.34 4.74-4.57 5a2.4 2.4 0 0 1 .68 1.85v2.75c0 .27.18.59.69.48A10 10 0 0 0 12 2z"/>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

// ====== Social Links ======
const socialLinks = [
  { icon: LinkedInIcon, url: "https://www.linkedin.com/in/anshika-singh-031b132a5/" },
  { icon: GitHubIcon, url: "https://github.com/Anshika09Singh" },
];

const Contact = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
  }, []);

  const handleHireMeClick = () => {
    window.location.href =
      "mailto:anshika1104singh@gmail.com?subject=Job%20Opportunity%20-%20Hiring%20Inquiry";
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 
      font-sans min-h-screen flex items-center justify-center"
    >
      <div
        className={`container mx-auto px-4 max-w-6xl transition-opacity duration-1000 
        ${isInView ? "opacity-100" : "opacity-0"}`}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 animate-fade-in-down">
          Let's Work Together
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 lg:p-12 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Info</h3>
            <p className="text-gray-600 mb-6">
              I am actively seeking new opportunities and would love to hear from you.
            </p>

            {/* Email */}
            <div className="flex items-center gap-4 text-gray-700 mb-6">
              <EmailIcon />
              <a
                href="mailto:anshika1104singh@gmail.com"
                className="text-lg hover:text-purple-600 transition-colors"
              >
                anshika1104singh@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-purple-600 transition transform hover:scale-110"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Hire Me */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 lg:p-12 text-center animate-slide-in-right">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Are You a Recruiter?</h3>
            <p className="text-gray-600 mb-8">
              Click the button below to get in touch with me directly about a new role.
            </p>
            <button
              onClick={handleHireMeClick}
              className="w-full py-4 px-8 bg-gradient-to-r from-pink-500 to-purple-500 
              text-white font-bold text-xl rounded-xl shadow-lg 
              hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 
              transition-all duration-300"
            >
              Click Here to Hire Me!
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slide-in-left {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slide-in-right {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
          .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
          .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
        `}
      </style>
    </section>
  );
};

export default Contact;
