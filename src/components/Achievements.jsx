import React, { useEffect, useState } from "react";

// Icons
const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 9v14l6-4 6 4V9"></path>
    <path d="M10 11V5a2 2 0 1 1 4 0v6"></path>
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const CertificateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
  </svg>
);

const MedalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 18 17 23 15.79 13.88"></polyline>
  </svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const IconMap = {
  TrophyIcon,
  UserIcon,
  CertificateIcon,
  MedalIcon,
  BriefcaseIcon,
};

// Achievements Data
const achievementData = [
  { id: 1, title: "Machine Learning Coordinator", organization: "GDG", date: "Jan 2024 - Present", icon: "TrophyIcon" },
  { id: 2, title: "Mentor", organization: "GirlScript Summer of Code", date: "2025", icon: "UserIcon" },
  { id: 3, title: "Mentee (ML Track)", organization: "Girls Leading Tech", date: "Jun 2024 - Aug 2024", icon: "UserIcon" },
  { id: 4, title: "Postman API Fundamentals Student Expert", organization: "Postman", date: "Mar 2024", icon: "CertificateIcon" },
  { id: 5, title: "Generative AI Certificate", organization: "Hack2Skill", date: "Dec 2024", icon: "CertificateIcon" },
  { id: 6, title: "Project Management", organization: "IBM CSRBOX", date: "Feb 2023", icon: "CertificateIcon" },
  { id: 7, title: "Data Analysis with Python", organization: "IBM SkillBuild", date: "Nov 2022", icon: "CertificateIcon" },
  { id: 8, title: "Flipkart Grid 7.0", organization: "Flipkart", date: "Round 1 Qualified (Oct 2024)", icon: "MedalIcon" },
  { id: 9, title: "Unstop Talent Park", organization: "Unstop", date: "Round 1 Cleared (Sept 2024)", icon: "MedalIcon" },
  { id: 10, title: "GWEP Medalist", organization: "Gagan Winning Edge Program", date: "May 2023", icon: "MedalIcon" },
  { id: 11, title: "Tradofile Bootcamp Contributor", organization: "Tradofile", date: "Apr 2024", icon: "BriefcaseIcon" },
];

const Achievements = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(true);
  }, []);

  return (
    <section id="achievements" className="py-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 text-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold">My Achievements</h2>
          <span className="mt-3 h-1 w-28 mx-auto bg-indigo-600 rounded-full block"></span>
          <p className="mt-4 text-gray-600 text-lg">A journey filled with learning, leadership & innovation 🚀</p>
        </div>

        {/* Horizontal Scroll Slider */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-6">
          {achievementData.map((item, index) => {
            const IconComponent = IconMap[item.icon];
            return (
              <div
                key={item.id}
                className={`flex-shrink-0 w-80 snap-center bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl opacity-0 ${inView ? "animate-fade-in-up" : ""}`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-center gap-4 mb-4 text-indigo-600">
                  <span className="p-3 rounded-full bg-indigo-100">{<IconComponent />}</span>
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.organization}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600"><span className="font-semibold">Date:</span> {item.date}</p>
              </div>
            );
          })}
        </div>

        {/* LinkedIn CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.linkedin.com/in/anshika-singh-031b132a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300 font-semibold"
          >
            🌟 See Full Journey & Experience on LinkedIn
          </a>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Achievements;
