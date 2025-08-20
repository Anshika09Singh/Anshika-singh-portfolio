import React, { useEffect, useState } from 'react';

// This component is a responsive, light-themed section for displaying
// a list of achievements, certificates, and awards with a new
// innovative horizontal scrolling design and filters.

// SVG icons to replace emojis
const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 9v14l6-4 6 4V9"></path>
    <path d="M10 11V5a2 2 0 1 1 4 0v6"></path>
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12c2.21 0 4-1.343 4-3s-1.79-3-4-3-4 1.343-4 3 1.79 3 4 3z"></path>
    <path d="M12 12c-2.21 0-4 1.343-4 3s1.79 3 4 3 4-1.343 4-3-1.79-3-4-3z"></path>
    <path d="M12 12c-2.21 0-4-1.343-4 3s1.79 3 4 3 4-1.343 4-3-1.79-3-4-3z"></path>
    <path d="M12 12c2.21 0 4 1.343 4-3s-1.79-3-4-3-4 1.343-4 3 1.79 3 4 3z"></path>
    <path d="M21.5 10c.5 1 1 2 1 3s-1 2-1 3"></path>
    <path d="M19.5 7c1 1.5 1.5 3.5 1.5 5s-.5 3.5-1.5 5"></path>
    <path d="M4.5 10c-.5 1-1 2-1 3s1 2 1 3"></path>
    <path d="M2.5 7c-1 1.5-1.5 3.5-1.5 5s.5 3.5 1.5 5"></path>
  </svg>
);

const CertificateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <line x1="10" y1="9" x2="8" y2="9"></line>
  </svg>
);

const MedalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 18 17 23 15.79 13.88"></polyline>
  </svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const IconMap = {
  'TrophyIcon': TrophyIcon,
  'UserIcon': UserIcon,
  'BrainIcon': BrainIcon,
  'CertificateIcon': CertificateIcon,
  'MedalIcon': MedalIcon,
  'BriefcaseIcon': BriefcaseIcon,
};


const achievementData = [
  {
    id: 1,
    title: 'Machine Learning Coordinator',
    organization: 'GDG',
    date: 'Jan 2024 - Present',
    type: 'Leadership',
    link: 'https://linkedin.com/in/your-profile-url',
    icon: 'TrophyIcon',
  },
  {
    id: 2,
    title: 'Mentor',
    organization: 'GirlScript Summer of Code',
    date: '2025',
    type: 'Leadership',
    link: 'https://gssoc.org/mentors/your-profile-url',
    icon: 'UserIcon',
  },
  {
    id: 3,
    title: 'Mentee (ML Track)',
    organization: 'Girls Leading Tech',
    date: 'June 2024 - Aug 2024',
    type: 'Learning',
    link: 'https://girlsleadingtech.com/mentees/your-profile-url',
    icon: 'BrainIcon',
  },
  {
    id: 4,
    title: 'Postman API Fundamentals Student Expert',
    organization: 'Postman',
    date: 'March 2024',
    type: 'Certificate',
    link: 'https://badgr.com/your-badge-url',
    icon: 'CertificateIcon',
  },
  {
    id: 5,
    title: 'Generative AI Certificate',
    organization: 'Hack2Skill',
    date: 'Dec 2024',
    type: 'Certificate',
    link: 'https://certificate.hack2skill.com/your-cert-id',
    icon: 'CertificateIcon',
  },
  {
    id: 6,
    title: 'Project Management',
    organization: 'IBM CSRBOX',
    date: 'Feb 2023',
    type: 'Certificate',
    link: 'https://coursera.org/your-certificate-url',
    icon: 'CertificateIcon',
  },
  {
    id: 7,
    title: 'Data Analysis with Python',
    organization: 'IBM SkillBuild',
    date: 'Nov 2022',
    type: 'Certificate',
    link: 'https://www.credly.com/badges/your-badge-id',
    icon: 'CertificateIcon',
  },
  {
    id: 8,
    title: 'Flipkart Grid 7.0',
    organization: 'Flipkart',
    date: 'Round 1 Qualified (Oct 2024)',
    type: 'Award',
    link: 'https://flipkartgrid.com/leaderboard/your-rank',
    icon: 'MedalIcon',
  },
  {
    id: 9,
    title: 'Unstop Talent Park',
    organization: 'Unstop',
    date: 'Round 1 Cleared (Sept 2024)',
    type: 'Award',
    link: 'https://unstop.com/contest/your-id',
    icon: 'MedalIcon',
  },
  {
    id: 10,
    title: 'GWEP Medalist',
    organization: 'Gagan Winning Edge Program',
    date: 'May 2023',
    type: 'Award',
    link: '#',
    icon: 'MedalIcon',
  },
  {
    id: 11,
    title: 'Tradofile Bootcamp Contributor',
    organization: 'Tradofile',
    date: 'April 2024',
    type: 'Leadership',
    link: 'https://tradofile.com/contributors/your-profile',
    icon: 'BriefcaseIcon',
  },
];

const Achievements = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Trigger animation when the component mounts
    setInView(true);
  }, []);

  const filterButtons = ['All', 'Certificate', 'Award', 'Leadership', 'Learning'];

  const filteredAchievements = achievementData.filter(item =>
    activeFilter === 'All' ? true : item.type === activeFilter
  );

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-900 font-sans min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section heading */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-2">
            My Achievements
          </h2>
          <span className="h-1 w-24 bg-indigo-600 rounded-full"></span>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {filterButtons.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300
                ${activeFilter === filter
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-indigo-100'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 space-x-6 lg:space-x-8 lg:pb-8">
          {filteredAchievements.map((item, index) => {
            const IconComponent = IconMap[item.icon];
            return (
              <div
                key={item.id}
                className={`flex-shrink-0 w-80 snap-center opacity-0 transition-opacity duration-500
                ${inView ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start gap-4 text-indigo-600 mb-4">
                      <span className="text-4xl">
                        <IconComponent />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.organization}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold">Date:</span> {item.date}
                    </p>
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-300 font-medium text-sm self-start"
                    >
                      View Certificate
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Tailwind CSS keyframes for fade-in animation */}
      <style>
        {`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Achievements;
