import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Globe, Code2, Cpu, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- DATA SOURCE ---
const PROJECTS = [
  {
    id: "01",
    title: "Virtual Try-On & Stylist",
    category: "Generative AI",
    stack: "React, FastAPI, Gemini API", // [cite: 14]
    description: "A GenAI system allowing users to realistically swap clothing on photos. Features a 'Smart Stylist' engine that analyzes outfit choices for visual compatibility.", // [cite: 15, 16]
    gradient: "from-purple-500 to-indigo-500",
    github: "https://github.com/manishrao0312", // [cite: 3]
    demo: null,
    image: "/tryon.png" // Place this image in your public folder
  },
  {
    id: "02",
    title: "F1 Telemetry AI",
    category: "Data Science",
   stack: "TypeScript, Pandas, Scikit-learn", // [cite: 18]
    description: "Real-time analytics dashboard processing race telemetry. Uses K-Means clustering to categorize driving styles and generates race strategy reports.", // [cite: 19, 20]
    gradient: "from-red-500 to-orange-500",
    github: "https://github.com/manishrao0312/FORMULA-1",
    demo: "https://maanishrraof1.netlify.app/",
    image: "/f1.png" // Place this image in your public folder
  },
  {
    id: "03",
    title: "Skill Bartering Platform",
    category: "Full Stack",
    stack: "MERN Stack, WebRTC, Python", // [cite: 22]
    description: "Peer-to-peer learning platform with real-time video exchange. Features a Python-based matchmaking algorithm for skill compatibility.", // [cite: 23, 24]
    gradient: "from-emerald-400 to-teal-500",
    github: "https://github.com/manishrao0312", // [cite: 3]
    demo: null,
    image: "/skill-barter.jpg" // Place this image in your public folder
  }
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans selection:bg-orange-500">
      
      {/* Navigation Back */}
      <nav className="flex justify-between items-center mb-16">
        <Link to="/" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <div className="p-2 rounded-full border border-white/10 group-hover:border-white/30 group-hover:bg-white/5 transition-all">
            <ArrowLeft size={20} />
          </div>
          <span className="text-sm font-bold tracking-widest uppercase">Back to Home</span>
        </Link>
        <div className="text-right hidden md:block">
          <h1 className="text-xl font-bold">Selected Works</h1>
          <p className="text-xs text-gray-500">2024 — 2025</p>
        </div>
      </nav>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="group relative bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 min-h-[400px] flex flex-col md:flex-row"
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-r ${project.gradient}`} />

            {/* Content Section */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center z-10 relative order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 text-white/70 border border-white/10`}>
                  {project.category}
                </span>
                <span className="text-xs font-mono text-gray-500">{project.stack}</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight group-hover:translate-x-2 transition-transform duration-500">
                {project.title}
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8 group-hover:text-gray-300 transition-colors">
                {project.description}
              </p>

              {/* ACTION BUTTONS */}
              <div className="flex items-center gap-6">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-sm font-bold border-b border-transparent hover:border-orange-500 transition-colors pb-1"
                >
                  <Github size={18} /> View Code
                </a>

                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 text-sm font-bold text-orange-500 border-b border-transparent hover:border-orange-500 transition-colors pb-1"
                  >
                    <Globe size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Visual/Image Section (Right Side) */}
            <div className="w-full md:w-1/3 relative overflow-hidden order-1 md:order-2 h-[300px] md:h-auto border-b md:border-b-0 md:border-l border-white/5">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 mix-blend-overlay z-10`} />
              
              {/* IMAGE RENDERER */}
              <motion.img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                    // Fallback if image is missing: shows a colored block instead
                    e.target.style.display = 'none'; 
                    e.target.parentElement.style.backgroundColor = '#111';
                }}
                animate={{ scale: hovered === index ? 1.05 : 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />

               {/* Floating Icon Overlay */}
               <motion.div 
                 animate={{ rotate: hovered === index ? 10 : 0, scale: hovered === index ? 1.1 : 1 }}
                 transition={{ duration: 0.5 }}
                 className="absolute inset-0 flex items-center justify-center text-white/10 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
               >
                 {index === 0 ? <Sparkles size={120} /> : index === 1 ? <Cpu size={120} /> : <Code2 size={120} />}
               </motion.div>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;