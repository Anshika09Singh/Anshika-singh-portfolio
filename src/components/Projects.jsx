import React, { useEffect, useState } from "react";


const projects = [
  {
    title: "Diabetes Care with AI",
    description:
      "An ML-powered diabetes prediction system with a Gemini API chatbot, lifestyle suggestions, and visual health insights.",
    techStack: [
      "ML",
      "AI",
      "Gemini API",
      "Chatbot",
      "HTML",
      "Tailwindcss",
      "JavaScript",
      "Flask",
    ],
    liveDemo: "https://diabetes-care-with-ai-5-nd7x.onrender.com/",
    github: "https://github.com/Anshika09Singh/Diabetes-care-with-AI",
    image:
      "https://diabetes-care-with-ai-5-nd7x.onrender.com/static/doctor.png",
  },
  {
    title: "PitchWhiz (Startup Pitch Classifier)",
    description:
      "A web app to classify startup pitches and generate summaries using the Gemini API and Airtable.",
    techStack: ["Gemini API", "Airtable", "Classification", "Python", "Flask"],
    github: "https://github.com/Anshika09Singh/PitchWhiz",
    liveDemo: "https://github.com/Anshika09Singh/PitchWhiz",
    image:
      "https://camo.githubusercontent.com/6f09d025a63b2041e719938ac08f7426c161bfd1efa361ae396702fd35225234/68747470733a2f2f77616c70617065726163636573732e636f6d2f66756c6c2f313437383138312e6a7067",
  },
  {
    title: "NeuroFit Brain Training Hub",
    description:
      "A gamified cognitive platform with React.js and Node.js for real-time user progress feedback and tracking.",
    techStack: ["React.js", "Node.js", "Gamification", "Express.js"],
    liveDemo: "https://neurofit-1f.onrender.com/",
    github: "https://github.com/Anshika09Singh/NeuroFit",
    image: "https://neurofit-1f.onrender.com/neuro.jpg",
  },
  {
    title: "Legal System API (Golang)",
    description:
      "A RESTful API for legal case management built using the Gin framework.",
    techStack: ["Golang", "Gin", "API", "REST", "MYSQL"],
    github: "https://github.com/Anshika09Singh/Legal-System",
    liveDemo: "https://github.com/Anshika09Singh/Legal-System",
    image:
      "https://media.istockphoto.com/id/812945070/vector/modern-legal-system-round-line-concept.jpg?s=1024x1024&w=is&k=20&c=gMWU07T7jobP-zrtN0frJn2lYqIsZcZMsuQR4JTIcWc=",
  },
  {
    title: "Jovian Career Portal",
    description:
      "A responsive job platform built with HTML, CSS, JS, Tailwind CSS, Flask, and Firebase. Features job filters and applicant tracking.",
    techStack: ["Flask", "HTML", "CSS", "Firebase", "Tailwind CSS"],
    github: "https://github.com/Anshika09Singh/jovian-careers-website",
    liveDemo: "https://github.com/Anshika09Singh/jovian-careers-website",
    image: "https://host.tatiblockchain.co.za/img/careers-portal-south-africa.jpg", // ✅ fixed
  },
  {
    title: "Ai-crop-disease-detection-agent",
    description:
      "AI Crop Doctor is an AI-powered web application that helps farmers identify plant diseases from leaf images.",
    techStack: [
      "Python",
      "Flask 3.1.0",
      "TensorFlow 2.19.0",
      "Firebase",
      "Google Cloud Storage",
    ],
    github:
      "https://github.com/aayush-1709/ai-crop-disease-detection-agent",
    liveDemo: "https://ai-crop-doctor-app.onrender.com/",
    image:
      "https://media.istockphoto.com/id/1496224767/vector/vector-cute-farmer-robot-cartoon-illustration-isolated.jpg?s=1024x1024&w=is&k=20&c=Q96xOCkdNNc8-NwUVzO1Ka0CSxIfKxv7z5rKch2rAuo=",
  },
  {
    title: "Ai-summarizer",
    description:
      "A Flask-based web application that provides intelligent text summarization with NLP models.",
    techStack: ["Python", "Flask", "HTML", "CSS", "JS", "Tailwindcss"],
    github: "https://github.com/Anshika09Singh/ai-summarizer",
    liveDemo: "https://github.com/Anshika09Singh/ai-summarizer",
    image: "https://ps.w.org/ai-summarizer/assets/banner-1544x500.png?rev=3208629",
  },
  {
    title: "PM2.5-Forcasting-App",
    description:
      "The Air Quality Forecasting Dashboard is a ML-powered tool to analyze, visualize, and forecast PM2.5 levels.",
    techStack: ["React.js", "Express.js", "Data Visualization"],
    liveDemo:
      "https://anshika09singh-pm2-5-forcasting-app-app-8c57yz.streamlit.app/",
    github: "https://github.com/Anshika09Singh/PM2.5-Forcasting-App",
    image: "https://geekflare.com/wp-content/uploads/2022/12/Apps-for-Air-Quality.png",
  },
  {
    title: "GUI Devcation-2025",
    description: "Design the frontend",
    techStack: ["React.js", "Tailwind CSS", "Web Development"],
    liveDemo: "https://devcation-2025-one.vercel.app/",
    github: "https://github.com/Anshika09Singh/Devcation-2025",
    image: "https://placehold.co/600x400/A2D2FF/333?text=Frontend+Site",
  },
];

const Projects = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(true);
  }, []);

  const GithubIcon = () => (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.6-1.6 2.6-2.1.5-.2 1-.4 1.5-.4.5 0 1 .1 1.5.4 2 .5 1.6 2.2 2.6 2.1 0 0 .6-1 1.7-1.1 0 0 1.1 0 .1.7 0 0-.8.4-1.2 1.6 0 0-.7 2.1-3.9 1.4v2.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );

  const LinkIcon = () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-2">
            My Projects
          </h2>
          <span className="h-1 w-24 bg-purple-600 rounded-full"></span>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white/70 rounded-3xl shadow-xl p-6 transition-all hover:scale-105 hover:shadow-2xl opacity-0 ${
                inView ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {project.image && (
                <div className="mb-4 rounded-xl overflow-hidden shadow-md h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) =>
                      (e.target.src = "https://placehold.co/600x400?text=No+Image")
                    }
                  />
                </div>
              )}

              <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-200 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-purple-600 hover:text-purple-800 font-medium"
                  >
                    <GithubIcon /> GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-purple-600 hover:text-purple-800 font-medium"
                  >
                    <LinkIcon /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
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

export default Projects;
