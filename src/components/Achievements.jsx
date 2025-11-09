import React, { useEffect, useState } from "react";

// ===== ICONS =====
const icons = {
  Trophy: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 9v14l6-4 6 4V9M10 11V5a2 2 0 1 1 4 0v6"></path>
    </svg>
  ),
  User: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  ),
  Certificate: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  ),
  Medal: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21 13.89 7 23 12 18 17 23 15.79 13.88"></polyline>
    </svg>
  ),
  Briefcase: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  ),
};

// ===== DATA =====
const achievements = [
  { id: 1, title: "Machine Learning Coordinator", org: "GDG", date: "Jan 2024 – Present", type: "Leadership", icon: "Trophy" },
  { id: 2, title: "Mentor", org: "GirlScript Summer of Code", date: "2025", type: "Mentorship", icon: "User" },
  { id: 3, title: "Postman API Expert", org: "Postman", date: "Mar 2024", type: "Certificate", icon: "Certificate" },
  { id: 4, title: "Flipkart Grid 7.0", org: "Flipkart", date: "Oct 2024", type: "Competition", icon: "Medal" },
  { id: 5, title: "Generative AI Certificate", org: "Hack2Skill", date: "Dec 2024", type: "AI/ML", icon: "Certificate" },
  { id: 6, title: "Tradofile Bootcamp Contributor", org: "Tradofile", date: "Apr 2024", type: "Project", icon: "Briefcase" },
];

const Achievements = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => setAnimate(true), []);

  return (
    <section id="achievements" className="relative py-20 bg-gradient-to-b from-[#f9f9ff] via-[#f3f1ff] to-[#e9e7ff] overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.15),transparent_50%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Achievements
          </h2>
          <p className="text-gray-600 text-lg mt-4 font-medium">
            My journey through innovation, leadership & learning 🚀
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, i) => (
            <div
              key={item.id}
              className={`relative group backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl p-6 transition-all duration-700 hover:bg-white/60 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] transform hover:-translate-y-2 opacity-0 ${
                animate ? "animate-fade-up" : ""
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-md transition duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3 text-indigo-600">
                    <div className="p-3 bg-indigo-100 rounded-xl">{icons[item.icon]}</div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.org}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-sm">
                    {item.type}
                  </span>
                </div>

                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Date:</span> {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://www.linkedin.com/in/anshika-singh-031b132a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300 font-semibold"
          >
            🌟 View Full Journey on LinkedIn
          </a>
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fade-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up { animation: fade-up 0.8s ease forwards; }
        `}
      </style>
    </section>
  );
};

export default Achievements;
