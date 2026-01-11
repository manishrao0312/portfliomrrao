// --- FILE: src/App.jsx ---
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Cpu,
  Database,
  Terminal,
  ArrowRight,
  Sparkles,
  Globe,
  X,
  Menu,
  Award,
  MapPin,
  GraduationCap,
  FileText,
} from "lucide-react";

// --- PORTFOLIO DATA ---
const PORTFOLIO_DATA = {
  name: "Manish M",
  role: "Full Stack & AI Engineer",
  location: "Udupi / Bangalore",
  education: "SMVITM (CS)",
  certifications: [
    {
      name: "Get Started with Databricks for Machine Learning",
      provider: "Databricks",
    },
  ],
  bio: "I build intelligent systems that bridge the gap between complex backend logic and seamless user experiences. I'm passionate about leveraging Generative AI to solve real-world problems and creating intuitive digital products.",
  contact: {
    email: "manishmahesh456@gmail.com",
    linkedin: "https://www.linkedin.com/in/manish-m-5b7949258/",
    github: "https://github.com/manishrao0312",
    resumeFile: "/resume.pdf" 
  },
  skills: [
    { name: "Python", icon: <Terminal size={18} />, color: "text-yellow-400" },
    { name: "React.js", icon: <Code2 size={18} />, color: "text-cyan-400" },
    { name: "Node.js", icon: <Database size={18} />, color: "text-green-500" },
    { name: "FastAPI", icon: <Globe size={18} />, color: "text-teal-400" },
    { name: "Generative AI", icon: <Sparkles size={18} />, color: "text-purple-400" },
    { name: "Machine Learning", icon: <Cpu size={18} />, color: "text-orange-400" },
  ],
};

const App = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-100 relative">
      
      {/* --- MASSIVE BACKGROUND TEXT --- */}
      <motion.div 
        style={{ y: yBg }}
        className="fixed top-[10vh] left-0 w-full select-none pointer-events-none z-0 flex justify-center"
        initial={{ opacity: 0 }} animate={{ opacity: 0.04 }} transition={{ duration: 2 }}
      >
        <h1 className="text-[20vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent leading-none tracking-tighter">
          ENGINEER
        </h1>
      </motion.div>

      {/* --- DYNAMIC GRID & NOISE BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-orange-600/10 rounded-full blur-[150px] animate-pulse-slow mix-blend-screen" />
          <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[150px] animate-pulse-slower mix-blend-screen" />
      </div>


      {/* --- NAVBAR --- */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050505]/80 backdrop-blur-md py-4 border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-end items-center relative">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
            <Link to="/Projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            
            <motion.a
              href={PORTFOLIO_DATA.contact.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all hover:bg-orange-500 hover:text-white"
            >
              Resume <FileText size={14} />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50 p-2 text-gray-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-0 bg-[#050505] flex flex-col items-center justify-center gap-10 md:hidden z-40"
              >
                <Link to="/projects" className="text-3xl font-bold tracking-tight">Projects</Link>
                <a href="#about" className="text-3xl font-bold tracking-tight" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                <a href={PORTFOLIO_DATA.contact.resumeFile} target="_blank" rel="noopener noreferrer" className="text-xl font-medium text-orange-500 flex items-center gap-2">
                  Resume <FileText size={18} />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-24 px-6 max-w-[90rem] mx-auto min-h-[95vh] flex flex-col lg:flex-row items-center z-10">
        
        {/* Left Content - Typography Focus */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 lg:max-w-3xl z-20 lg:-mr-20"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider mb-8 border border-orange-500/20">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Available for work
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter mb-8"
          >
            FULL STACK <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              AI ENGINEER.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-xl"
          >
            I'm <b>{PORTFOLIO_DATA.name}</b>, a specialized engineer based in {PORTFOLIO_DATA.location}. I fuse scalable backend systems with cutting-edge generative AI to build intelligent digital products.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6">
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.02, gap: "12px" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all hover:bg-orange-500 hover:text-white group"
              >
                  See My Work <ArrowRight size={18} />
              </motion.button>
            </Link>

            <div className="flex gap-4 items-center">
              <SocialLink href={PORTFOLIO_DATA.contact.github} icon={<Github size={20} />} label="Github" />
              <SocialLink href={PORTFOLIO_DATA.contact.linkedin} icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialLink href={`mailto:${PORTFOLIO_DATA.contact.email}`} icon={<Mail size={20} />} label="Email" />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Image (Asymmetrical placement) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex-1 relative w-full max-w-xl mt-16 lg:mt-0"
        >
           <div className="aspect-[4/5] relative z-10 rounded-3xl overflow-hidden border-[3px] border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out group">
              <img
                src="/manish.jpg"
                alt="Manish M"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-1000"></div>
           </div>
           {/* Abstract graphic behind image */}
           <div className="absolute top-10 -right-10 w-full h-full border-2 border-orange-500/30 rounded-3xl -z-10 animate-pulse-slow"></div>
        </motion.div>
      </section>

      {/* --- SKILLS TICKER (Transition element) --- */}
      <div className="py-8 bg-white/5 border-y border-white/5 relative overflow-hidden z-20">
        <div className="flex overflow-hidden gap-16 select-none mask-linear-gradient">
          <div className="flex flex-shrink-0 items-center justify-around gap-16 animate-marquee-slow font-mono font-bold text-lg uppercase tracking-widest text-gray-500">
            {[...PORTFOLIO_DATA.skills, ...PORTFOLIO_DATA.skills].map((skill, i) => (
               <span key={i} className="flex items-center gap-3">
                  <span className={skill.color}>{skill.icon}</span>
                  {skill.name}
               </span>
            ))}
          </div>
        </div>
      </div>


      {/* --- ABOUT SECTION (Rethought Structure) --- */}
      <section id="about" className="py-32 px-6 relative z-20">
        <div className="max-w-6xl mx-auto">
           <div className="grid lg:grid-cols-[1.5fr_1fr] gap-20 items-start">
              {/* Narrative Side */}
              <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, margin: "-100px" }}
                 variants={staggerContainer}
              >
                  <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-10 tracking-tight leading-tight">
                    I bridge the gap between <span className="text-gray-500">complex backend logic</span> and <span className="text-orange-500">seamless user experiences.</span>
                  </motion.h2>
                  <motion.div variants={fadeInUp} className="text-gray-300 text-lg leading-relaxed space-y-6">
                    <p>
                      My journey started with a curiosity about how things work under the hood. Today, that curiosity drives me to architect scalable full-stack applications.
                    </p>
                    <p>
                      I don't just write code; I solve problems. My current focus is pushing the boundaries of what's possible by integrating Large Language Models (LLMs) into practical applications, turning cutting-edge AI research into usable features.
                    </p>
                  </motion.div>
              </motion.div>

              {/* Specifics Side (Clean Sidebar) */}
              <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.6, delay: 0.4 }}
                 className="lg:pl-12 lg:border-l border-white/10 space-y-12"
              >
                  <InfoBlock icon={<MapPin />} title="Location">
                    {PORTFOLIO_DATA.location}
                  </InfoBlock>
                  
                  <InfoBlock icon={<GraduationCap />} title="Education">
                    {PORTFOLIO_DATA.education}
                  </InfoBlock>

                  <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm uppercase tracking-wider font-bold text-gray-400">
                        <Award size={16} className="text-orange-500" /> Certifications
                      </div>
                      <ul className="space-y-4">
                          {PORTFOLIO_DATA.certifications.map((cert, index) => (
                          <li key={index} className="group">
                              <span className="text-white font-medium block text-lg leading-tight group-hover:text-orange-400 transition-colors">{cert.name}</span>
                              <span className="block text-sm font-mono text-gray-500 mt-1">{cert.provider}</span>
                          </li>
                          ))}
                      </ul>
                  </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="py-40 px-6 relative z-20">
          <div className="max-w-5xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-8xl font-black tracking-tighter mb-12 leading-[0.9]"
              >
                LET'S BUILD <br /> THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">NEXT BIG THING.</span>
              </motion.h2>
              
              <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
              >
                <a 
                  href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                  className="inline-block text-2xl md:text-4xl font-bold text-white hover:text-orange-500 transition-colors border-b-4 border-white/10 hover:border-orange-500 pb-2"
                >
                  {PORTFOLIO_DATA.contact.email}
                </a>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4 }}
                 className="flex justify-center gap-10 mt-20"
              >
                 <BigSocialLink href={PORTFOLIO_DATA.contact.github} label="Github" />
                 <BigSocialLink href={PORTFOLIO_DATA.contact.linkedin} label="LinkedIn" />
                 <BigSocialLink href={PORTFOLIO_DATA.contact.resumeFile} label="Resume" />
              </motion.div>

              <p className="text-gray-600 mt-32 text-sm font-mono uppercase tracking-widest">
                  © {new Date().getFullYear()} Manish M.
              </p>
          </div>
      </section>
    </div>
  );
};

// --- Helper Components ---

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:bg-white hover:text-black transition-all hover:scale-110"
  >
    {icon}
  </a>
);

const BigSocialLink = ({ href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-lg font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
  >
    {label}
  </a>
);

const InfoBlock = ({ icon, title, children }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-3 text-sm uppercase tracking-wider font-bold text-gray-400">
      <span className="text-orange-500">{icon}</span> {title}
    </div>
    <div className="text-xl font-medium text-white">
      {children}
    </div>
  </div>
);

export default App;