import React, { useState, useEffect } from 'react';

// This is a simplified contact component for a personal portfolio,
// designed to focus on a single call to action for recruiters.
// It features a clean, responsive design with subtle animations.

// Social media icons as inline SVGs
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-2h-.6a5 5 0 0 0-2-2.5v-.5a1 1 0 0 0-1-1h-.2a1 1 0 0 0-1-1a3.5 3.5 0 0 0-3.5 3.5a1 1 0 0 0 1 1h.2a1 1 0 0 0 1 1v.5a5 5 0 0 0 2.5 2 4.8 4.8 0 0 0 2 1v4" />
    <path d="M9 18a6 6 0 0 1-6-6c0-3.4 2.1-6.4 5-7.5a6 6 0 0 1 7 1.5 6 6 0 0 1 1.5 7 6 6 0 0 1-6 6z" />
    <path d="M16 22a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4v4h4z" />
    <path d="M12 2a10 10 0 0 0-4 18.2V22h4l4-4h2a10 10 0 0 0 0-20z" />
    <path d="M8 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
    <path d="M22 4s-1.1-1.2-2.5-1.5c-.8-.2-1.6 0-2.4.4-1.5.8-2.6 2.1-3 3.7-.4 1.6-.2 3.3.4 4.8 1.5 3.7 4.7 6.4 8.5 7.5l-.2-.2c-3.1 1.4-6.4 2.1-9.8 2.1-3 0-5.8-.8-8.2-2.2l-.2-.1c-.9-.6-1.8-.8-2.8-.7s-1.9.4-2.8 1.2c-.6.6-1.1 1.3-1.6 2l.1-.1c-.7.9-1.2 2-1.5 3.1-.4 1.2-.4 2.4-.2 3.6.2 1.2.7 2.4 1.5 3.4l.1.1c.9 1.1 2 2.1 3.2 2.9l.2.1c1.2.6 2.5 1.1 3.8 1.3h.2c1.2.1 2.5 0 3.7-.3l.3-.1c1.2-.4 2.3-.9 3.4-1.6l.3-.2c1.3-.9 2.5-2 3.5-3.3.6-.8 1.1-1.7 1.5-2.6.4-1.1.7-2.2.8-3.3.1-1.1 0-2.2-.3-3.3l-.1-.2c-.3-.9-.6-1.8-1-2.7z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);


const socialLinks = [
  { icon: LinkedInIcon, url: 'https://linkedin.com/in/anshika-singh' },
  { icon: GitHubIcon, url: 'https://github.com/your-username' },
  { icon: TwitterIcon, url: 'https://twitter.com/your-username' },
  { icon: InstagramIcon, url: 'https://instagram.com/your-username' },
];

const Contact = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Trigger animation when the component mounts
    setIsInView(true);
  }, []);

  const handleHireMeClick = () => {
    // This will open the user's default email client
    window.location.href = 'mailto:anshika1104singh@gmail.com?subject=Job%20Opportunity%20-%20Hiring%20Inquiry';
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 font-sans min-h-screen flex items-center justify-center">
      <div className={`container mx-auto px-4 max-w-6xl opacity-0 transition-opacity duration-1000 ${isInView ? 'opacity-100' : ''}`}>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 animate-fade-in-down">
          Let's Work Together
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contact Information & Social Links */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 lg:p-12 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Info</h3>
            <p className="text-gray-600 mb-6">
              I am actively seeking new opportunities and would love to hear from you.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-gray-700">
                <EmailIcon />
                <a href="mailto:anshika1104singh@gmail.com" className="text-lg hover:text-purple-600 transition-colors">
                  anshika1104singh@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex gap-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-purple-600 transition-colors transform hover:scale-110"
                    aria-label={`Link to my ${link.url.split('/')[2]}`}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Hire Me Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 lg:p-12 text-center animate-slide-in-right">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Are You a Recruiter?</h3>
            <p className="text-gray-600 mb-8">
              Click the button below to get in touch with me directly about a new role.
            </p>
            <button
              type="button"
              onClick={handleHireMeClick}
              className="w-full py-4 px-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-xl rounded-xl shadow-lg hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
            >
              Click Here to Hire Me!
            </button>
          </div>
        </div>
      </div>
      {/* Tailwind CSS keyframes for animations */}
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
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
          .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
          .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
          .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        `}
      </style>
    </section>
  );
};

export default Contact;
