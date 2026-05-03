import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitBranch, ArrowUpRight } from 'lucide-react';
import freshCartImg from '../assets/freshCart.png';
import devFolioImg from '../assets/DevFolio.png';
import mealifyImg from '../assets/Mealify.png';
import yummyImg from '../assets/yummy.png';
import weatherAppImg from '../assets/weatherApp.png';
import bookmarkerImg from '../assets/Bookmarker.png';


type Category = 'All' | 'E-commerce' | 'Landing Page' | 'Platform';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: 'E-commerce' | 'Landing Page' | 'Platform';
  tech: string[];
  gradient: string;
  accent: string;
  image?: string;
  live?: string;
  github?: string;
  featured?: boolean;
  comingSoon?: boolean;
}


const projects: Project[] = [
  {
    id: 1,
    title: 'FreshCart',
    subtitle: 'Full-Stack E-commerce Store',
    description:
      'High-performance E-commerce platform built with React, Next.js, and Tailwind. Features a full product catalogue, cart management, and a seamless checkout experience.',
    category: 'E-commerce',
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    gradient: 'from-blue-900/80 via-blue-950/60 to-black',
    accent: 'blue',
    image: freshCartImg,
    live: 'https://my-e-commerce-ecru.vercel.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'DevFolio',
    subtitle: 'Developer Portfolio',
    description:
      'Professional React developer portfolio showcasing modern, responsive, and high-performance web solutions. Built with clean HTML, CSS, JS, and Bootstrap.',
    category: 'Landing Page',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    gradient: 'from-violet-900/80 via-violet-950/60 to-black',
    accent: 'violet',
    image: devFolioImg,
    live: 'https://mahmoudcode94.github.io/Dev-Folio/',
  },
  {
    id: 3,
    title: 'Mealify',
    subtitle: 'Food-Themed Landing Page',
    description:
      'Modern, responsive food-themed landing page featuring interactive menus and smooth animations. Crafted with clean HTML, CSS, JS, and Bootstrap.',
    category: 'Landing Page',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    gradient: 'from-emerald-900/80 via-emerald-950/60 to-black',
    accent: 'emerald',
    image: mealifyImg,
    live: 'https://mahmoudcode94.github.io/Mealify-responsive-landing-page/',
  },
  {
    id: 4,
    title: 'Yummy',
    subtitle: 'Food Discovery Application',
    description:
      'Interactive food discovery application featuring API-driven recipe search and category filtering. Built with clean HTML, CSS, JS, and Bootstrap.',
    category: 'Landing Page',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    gradient: 'from-rose-900/80 via-rose-950/60 to-black',
    accent: 'rose',
    image: yummyImg,
    live: 'https://mahmoudcode94.github.io/yummy/index.html',
  },
  {
    id: 5,
    title: 'Weather App',
    subtitle: 'Real-Time Weather Dashboard',
    description:
      'Dynamic weather dashboard providing real-time local forecasts and atmospheric data. Built with clean HTML, CSS, JS, and Bootstrap.',
    category: 'Platform',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    gradient: 'from-amber-900/80 via-amber-950/60 to-black',
    accent: 'amber',
    image: weatherAppImg,
    live: 'https://mahmoudcode94.github.io/weather-app/',
  },
  {
    id: 6,
    title: 'Bookmarker',
    subtitle: 'Bookmark Management System',
    description:
      'Clean, functional bookmark management system for organizing and saving links. Built with clean HTML, CSS, JS, and Bootstrap.',
    category: 'Platform',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    gradient: 'from-cyan-900/80 via-cyan-950/60 to-black',
    accent: 'cyan',
    image: bookmarkerImg,
    live: 'https://mahmoudcode94.github.io/bookmarks/',
  },
];

const categories: Category[] = ['All', 'E-commerce', 'Landing Page', 'Platform'];


const accentMap: Record<string, string> = {
  blue:    'text-blue-400 border-blue-500/40 bg-blue-500/10',
  violet:  'text-violet-400 border-violet-500/40 bg-violet-500/10',
  emerald: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
  rose:    'text-rose-400 border-rose-500/40 bg-rose-500/10',
  amber:   'text-amber-400 border-amber-500/40 bg-amber-500/10',
  cyan:    'text-cyan-400 border-cyan-500/40 bg-cyan-500/10',
};

const accentBorder: Record<string, string> = {
  blue:    'hover:border-blue-500/60',
  violet:  'hover:border-violet-500/60',
  emerald: 'hover:border-emerald-500/60',
  rose:    'hover:border-rose-500/60',
  amber:   'hover:border-amber-500/60',
  cyan:    'hover:border-cyan-500/60',
};

const accentGlow: Record<string, string> = {
  blue:    'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
  violet:  'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
  emerald: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
  rose:    'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]',
  amber:   'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
  cyan:    'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
};


const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const chip   = accentMap[project.accent]    ?? accentMap.blue;
  const border = accentBorder[project.accent] ?? '';
  const glow   = accentGlow[project.accent]   ?? '';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.97 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative bg-white/[0.02] border border-white/[0.06] ${border} ${glow}
        transition-colors duration-500 overflow-hidden
        ${project.featured ? 'md:col-span-2' : ''}
        ${project.comingSoon ? 'opacity-50' : ''}`}
    >
      
      <div className="relative w-full h-48 overflow-hidden bg-black">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
          </>
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.gradient} relative`}>
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg,transparent,transparent 19px,rgba(255,255,255,1) 19px,rgba(255,255,255,1) 20px),repeating-linear-gradient(90deg,transparent,transparent 19px,rgba(255,255,255,1) 19px,rgba(255,255,255,1) 20px)',
              }}
            />
          </div>
        )}

        
        <span className={`absolute top-3 left-3 text-[9px] tracking-[0.25em] font-bold uppercase border px-2.5 py-1 backdrop-blur-sm ${chip}`}>
          {project.category}
        </span>

        
        {project.featured && (
          <span className="absolute top-3 right-3 text-[8px] tracking-widest font-bold uppercase border border-white/20 text-white/60 px-2.5 py-1 bg-black/40 backdrop-blur-sm">
            Featured
          </span>
        )}

        
        {!project.comingSoon && project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm p-1.5 rounded-sm hover:bg-white/20"
          >
            <ArrowUpRight size={16} className="text-white" />
          </a>
        )}
      </div>

      
      <div className="p-6">
        <h3 className="text-lg font-bold text-white tracking-tight mb-0.5">{project.title}</h3>
        <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">{project.subtitle}</p>
        <p className="text-sm text-white/50 leading-relaxed mb-5">{project.description}</p>

        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[9px] tracking-widest uppercase border border-white/10 text-white/30 px-2.5 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        
        {project.comingSoon ? (
          <span className="text-[9px] tracking-widest uppercase text-white/20 italic">Coming Soon</span>
        ) : (
          <div className="flex gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-200"
              >
                <ExternalLink size={12} />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-200"
              >
                <GitBranch size={12} />
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
};


const Projects = () => {
  const [active, setActive] = useState<Category>('All');

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-black py-24 overflow-hidden"
    >
      <div className="relative z-10 w-full px-6 md:px-24 lg:px-[120px]">
        
        <motion.div
          className="mb-16 w-fit"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white uppercase">
            Projects
          </h2>
          <motion.div
            className="h-1 bg-blue-500 mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
          <p className="mt-4 text-white/40 text-sm tracking-wide max-w-lg">
            A curated selection of E-commerce stores, landing pages, and platforms I've built.
          </p>
        </motion.div>

        
        <motion.div
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[10px] tracking-[0.25em] uppercase font-bold px-5 py-2.5 border transition-all duration-300 ${
                active === cat
                  ? 'border-blue-500 text-white bg-blue-500/10'
                  : 'border-white/10 text-white/40 hover:border-white/30 hover:text-white/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
