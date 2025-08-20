import React from "react";
import { FaLightbulb, FaGraduationCap, FaProjectDiagram, FaTrophy, FaLaptopCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodingninjas } from "react-icons/si";

const About = () => {
  const milestones = [
    {
      title: "Electrical Engineering Foundation",
      description:
        "Started my academic career in Electrical Engineering, building a strong foundation in problem-solving, circuits, and logical thinking.",
      icon: <FaGraduationCap className="text-white w-5 h-5" />,
    },
    {
      title: "Curiosity for Data & AI",
      description:
        "Discovered my passion for Data Science, AI, and ML. Started experimenting with Python, data analysis, and predictive models.",
      icon: <FaLightbulb className="text-white w-5 h-5" />,
    },
    {
      title: "Transition to AI/ML",
      description:
        "Pursued B.Tech in AI & ML, gaining expertise in building intelligent systems, ML pipelines, and full-stack applications.",
      icon: <FaLaptopCode className="text-white w-5 h-5" />,
    },
    {
      title: "Internships & Projects",
      description:
        "AI Intern at Prodigal AI, Data Science Intern at IBM SkillBuild, Web Developer Intern at Bluestock Fintech. Built AI-powered applications, dashboards, and APIs.",
      icon: <FaProjectDiagram className="text-white w-5 h-5" />,
    },
    {
      title: "Competitions & Achievements",
      description:
        "Participated in hackathons, coding competitions, and published projects on GitHub. Selected as mentor in GirlScript Summer of Code 2025.",
      icon: <FaTrophy className="text-white w-5 h-5" />,
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900">
          About Me
          <span className="block mt-2 h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
        </h2>

        {/* Profile + About Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-72 h-72 overflow-hidden shadow-xl ring-4 ring-white backdrop-blur-lg transform hover:scale-105 transition-transform duration-500">
              <img
                src="/Anshika.jpg"
                alt="Anshika Singh"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-300/30 to-blue-300/30 opacity-0 hover:opacity-100 transition duration-500"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="w-full md:w-2/3">
            <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                I am a <strong>Full Stack Developer</strong> and{" "}
                <strong>AI/ML enthusiast</strong> skilled in{" "}
                <strong>React.js, Tailwind CSS, Flask, Node.js, and Transformers</strong>.
                I have proven experience in building intelligent web applications,
                dashboards, and APIs. I hold a{" "}
                <strong>B.Tech in Artificial Intelligence and Machine Learning</strong>{" "}
                from GGSIPU-USAR, Delhi.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                My experience includes roles as an{" "}
                <strong>AI Intern at Prodigal AI</strong>, a{" "}
                <strong>Data Science Intern with IBM SkillBuild</strong>, and a{" "}
                <strong>Web Developer Intern at Bluestock Fintech</strong>.  
                I am open to opportunities in software development, data engineering,
                or AI research.
              </p>
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div className="mt-20 relative">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12 relative inline-block">
            My Journey
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
          </h3>

          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full border-l-4 border-purple-500"></div>

          {milestones.map((step, index) => (
            <div
              key={index}
              className={`mb-16 flex flex-col md:flex-row items-center transition-opacity duration-700 ease-in-out opacity-0 animate-fadeIn ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-purple-500 rounded-full shadow-lg z-10">
                {step.icon}
              </div>

              {/* Content */}
              <div
                className={`md:w-1/2 bg-white p-6 rounded-3xl shadow-lg border border-gray-100 ${
                  index % 2 === 0 ? "ml-8 md:ml-12" : "ml-0 md:mr-12"
                }`}
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Thought / Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl italic font-medium text-gray-800">
            "Technology is not just about coding — it's about creating solutions that make life better."
          </blockquote>
        </div>

        {/* Social / Profile Buttons */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/Anshika09singh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://leetcode.com/u/Anshika09singh/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <SiLeetcode /> LeetCode
          </a>
          <a
            href="https://www.linkedin.com/in/anshika-singh-031b132a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://www.naukri.com/code360/profile/949637a7-0c6d-4028-bcd4-9f1b9fbbc93d"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <SiCodingninjas /> Coding 360
          </a>
        </div>
      </div>

      {/* Decorative Background Blobs */}
      <div className="absolute w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 top-20 left-10 animate-blob"></div>
      <div className="absolute w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 bottom-10 right-10 animate-blob animation-delay-2000"></div>

      {/* Animations */}
      <style>
        {`
          .animate-blob {
            animation: blob 8s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s forwards;
          }
        `}
      </style>
    </section>
  );
};

export default About;
