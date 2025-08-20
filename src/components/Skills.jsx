import React, { useEffect, useState } from 'react';

// This component presents a comprehensive and beautifully organized list of skills
// using a modern stacked card layout, animated circular proficiency indicators,
// and categorized sections for clarity.

// --- SVG Icons for a clean, consistent look ---
const ReactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
    <path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
    <path d="M12 2v20"></path>
    <path d="M4.93 4.93l14.14 14.14"></path>
    <path d="M4.93 19.07l14.14-14.14"></path>
  </svg>
);

const TailwindIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 17a5 5 0 0 1-5 5h-10a5 5 0 0 1-5-5v-10a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10z"></path>
    <path d="M22 17l-14.142-14.142"></path>
    <path d="M19.071 19.071L4.929 4.929"></path>
    <path d="M16 4h4a2 2 0 0 1 2 2v4"></path>
    <path d="M8 20H4a2 2 0 0 1-2-2v-4"></path>
  </svg>
);

const JsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 8.78A2 2 0 0 0 19.1 7H4.9a2 2 0 0 0-1.74 1.78l-2 5A2 2 0 0 0 3.16 16H8.5l.38 2.29a2 2 0 0 0 1.95 1.71h2.32a2 2 0 0 0 1.95-1.71L15.5 16h5.34a2 2 0 0 0 1.74-2.22l-2-5z"></path>
  </svg>
);

const HtmlIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 22h19l-2-15h-15l1.5 6h9.5"></path>
    <path d="M4 14.5l-2 7.5"></path>
    <path d="M20 14.5l2 7.5"></path>
    <path d="M18.5 7L21 21"></path>
    <path d="M5.5 7l-3 14"></path>
    <path d="M12 2.5L14.5 10"></path>
    <path d="M9.5 2.5l-2.5 7.5"></path>
  </svg>
);

const CssIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 20V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v14"></path>
    <path d="M10 18v-4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4"></path>
    <path d="M18 10V6"></path>
    <path d="M6 10V6"></path>
  </svg>
);

const NodejsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M16 16v-2.5a1.5 1.5 0 0 0-1.5-1.5h-5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h2.5"></path>
    <path d="M8 8.5v-2a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-2.5"></path>
  </svg>
);

const ExpressIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h4a2 2 0 0 1 2 2v4"></path>
    <path d="M22 17v-4a2 2 0 0 0-2-2h-4"></path>
    <path d="M8 20H4a2 2 0 0 1-2-2v-4"></path>
    <path d="M2 7v-4a2 2 0 0 1 2-2h4"></path>
    <path d="M18 10v4"></path>
    <path d="M10 10v4"></path>
    <path d="M14 10v4"></path>
  </svg>
);

const FlaskIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 2v4a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2"></path>
    <path d="M20 10v-4a2 2 0 0 1-2-2h-4a2 2 0 0 0-2-2v4a2 2 0 0 0 2 2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 0-2-2v4a2 2 0 0 0 2 2h2"></path>
  </svg>
);

const PythonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
    <path d="M12 20a8 8 0 0 0 8-8V4a8 8 0 0 0-8-8z"></path>
    <path d="M12 12a8 8 0 0 0-8 8v4a8 8 0 0 0 8 8z"></path>
  </svg>
);

const DjangoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 17a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-12z"></path>
    <path d="M22 17a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12z"></path>
    <path d="M7 11v4"></path>
    <path d="M17 11v4"></path>
  </svg>
);

const MERNIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2v20"></path>
    <path d="M10 8h4"></path>
    <path d="M10 16h4"></path>
    <path d="M16 10v4"></path>
    <path d="M8 10v4"></path>
  </svg>
);

const SciKitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s-4-4-4-9 4-9 4-9 4 4 4 9-4 9-4 9z"></path>
    <path d="M12 22s-4-4-4-9c0-3 4-5 4-5s4 2 4 5c0 5-4 9-4 9z"></path>
    <path d="M12 22a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>
  </svg>
);

const TFIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4z"></path>
    <path d="M18 10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2z"></path>
    <path d="M20 18a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2z"></path>
  </svg>
);

const NlpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.24 3.97l.88.88a2 2 0 1 0 2.83-2.83l-.88-.88A5 5 0 0 0 13 10a5 5 0 0 0-3 3z"></path>
    <path d="M2 13a5 5 0 0 0 7.24 3.97l.88.88a2 2 0 1 0 2.83-2.83l-.88-.88A5 5 0 0 0 5 10a5 5 0 0 0-3 3z"></path>
    <path d="M10 10v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"></path>
    <path d="M5 10v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"></path>
  </svg>
);

const GitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M12 15v6"></path>
    <path d="M12 3v6"></path>
    <path d="M18 6l-3.5 3.5"></path>
    <path d="M18 18l-3.5-3.5"></path>
    <path d="M6 6l3.5 3.5"></path>
    <path d="M6 18l3.5-3.5"></path>
  </svg>
);

const DockerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-8a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v8"></path>
    <path d="M12 12V4"></path>
    <path d="M22 17H2"></path>
    <path d="M22 13H2"></path>
  </svg>
);

const IconMap = {
  'React.js': ReactIcon,
  'Tailwind CSS': TailwindIcon,
  'JavaScript': JsIcon,
  'HTML5': HtmlIcon,
  'CSS3': CssIcon,
  'Node.js': NodejsIcon,
  'Express.js': ExpressIcon,
  'Flask': FlaskIcon,
  'Python': PythonIcon,
  'Django': DjangoIcon,
  'MERN Stack': MERNIcon,
  'Scikit-learn': SciKitIcon,
  'TensorFlow': TFIcon,
  'NLP': NlpIcon,
  'Git & GitHub': GitIcon,
  'Docker': DockerIcon,
  'AWS': GitIcon,
};

// Define all skill data, now categorized
const categorizedSkills = {
  'Web Development': [
    { name: 'React.js', color: 'text-cyan-500', proficiency: 90 },
    { name: 'Tailwind CSS', color: 'text-teal-400', proficiency: 98 },
    { name: 'JavaScript', color: 'text-yellow-500', proficiency: 95 },
    { name: 'HTML5', color: 'text-orange-500', proficiency: 100 },
    { name: 'CSS3', color: 'text-blue-500', proficiency: 95 },
    { name: 'MERN Stack', color: 'text-emerald-500', proficiency: 85 },
  ],
  'Backend & APIs': [
    { name: 'Node.js', color: 'text-green-600', proficiency: 80 },
    { name: 'Express.js', color: 'text-gray-900', proficiency: 85 },
    { name: 'Python', color: 'text-blue-600', proficiency: 90 },
    { name: 'Django', color: 'text-lime-600', proficiency: 85 },
    { name: 'Flask', color: 'text-gray-900', proficiency: 85 },
  ],
  'AI & Machine Learning': [
    { name: 'Scikit-learn', color: 'text-orange-400', proficiency: 95 },
    { name: 'TensorFlow', color: 'text-orange-600', proficiency: 85 },
    { name: 'NLP', color: 'text-purple-600', proficiency: 80 },
    { name: 'PyTorch', color: 'text-red-500', proficiency: 75 },
    { name: 'Keras', color: 'text-indigo-600', proficiency: 78 },
    { name: 'OpenCV', color: 'text-green-600', proficiency: 80 },
  ],
  'Databases': [
    { name: 'MongoDB', color: 'text-green-700', proficiency: 70 },
    { name: 'PostgreSQL', color: 'text-blue-700', proficiency: 75 },
    { name: 'Firebase', color: 'text-yellow-600', proficiency: 90 },
  ],
  'DevOps & Tools': [
    { name: 'Git & GitHub', color: 'text-red-600', proficiency: 88 },
    { name: 'Docker', color: 'text-blue-700', proficiency: 70 },
    { name: 'AWS', color: 'text-orange-400', proficiency: 65 },
  ],
};

// Circular progress bar component using SVG
const CircularProgressBar = ({ proficiency, color }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (proficiency / 100) * circumference;
  const [animatedOffset, setAnimatedOffset] = useState(circumference);

  useEffect(() => {
    setAnimatedOffset(strokeDashoffset);
  }, [strokeDashoffset]);

  return (
    <div className="relative w-24 h-24">
      {/* Background circle */}
      <svg className="w-full h-full transform -rotate-90">
        <circle
          className="text-gray-200"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50%"
          cy="50%"
        />
      </svg>
      {/* Animated progress circle */}
      <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
        <circle
          className={`${color}`}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={animatedOffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50%"
          cy="50%"
          style={{ transition: 'stroke-dashoffset 1s ease-out' }}
        />
      </svg>
      {/* Proficiency percentage text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-gray-800 font-bold">
        <span>{proficiency}%</span>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-indigo-50 to-purple-100 font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main heading for the skills section */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-2">
            My Technical Skills
          </h2>
          {/* Decorative underline */}
          <span className="h-1 w-24 bg-purple-600 rounded-full"></span>
        </div>

        {/* Categorized Skills Sections */}
        {Object.entries(categorizedSkills).map(([category, skills], categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
              {category}
            </h3>
            <div className="relative max-w-4xl mx-auto space-y-[-2rem] md:space-y-[-3rem] lg:space-y-[-4rem]">
              {skills.map((skill, skillIndex) => {
                const IconComponent = IconMap[skill.name];
                return (
                  <div
                    key={skillIndex}
                    className={`relative z-[${skills.length - skillIndex}] w-full p-6 sm:p-8 rounded-3xl shadow-xl transition-all duration-300 transform
                      bg-white/30 backdrop-blur-lg border border-white/20
                      hover:scale-[1.02] hover:shadow-2xl
                    `}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full bg-white/50 ${skill.color}`}>
                          {IconComponent ? <IconComponent /> : <span>?</span>}
                        </div>
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-800">{skill.name}</h4>
                      </div>
                      <CircularProgressBar proficiency={skill.proficiency} color={skill.color.replace('text-', 'stroke-')} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
