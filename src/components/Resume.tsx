import { motion } from 'framer-motion';
import {
  Gamepad2,
  Cpu,
  Code2,
  Palette,
  Globe,
  Layers,
  ShoppingCart,
  Monitor,
  Zap,
} from 'lucide-react';


const softwareSkills = [
  { name: 'React & Next.js', level: 90 },
  { name: 'Tailwind CSS v4', level: 95 },
  { name: 'TypeScript', level: 80 },
  { name: 'Figma / UI Design', level: 60 },
];

const languages = [
  { name: 'Arabic', level: 100 },
  { name: 'English', level: 75 },
];

const experience = [
  {
    year: '2025–Now',
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    desc: 'Building high-performance E-commerce stores and service-based platforms using React, Next.js, and Tailwind CSS v4.',
  },
  {
    year: '2025',
    title: 'Frontend Developer',
    company: 'Personal Projects',
    desc: 'Developed full-stack landing pages and E-commerce prototypes, mastering responsive design and modern UI frameworks.',
  },
  {
    year: '2024',
    title: 'Learning & Foundation',
    company: 'Self-Study',
    desc: 'Deep-dived into HTML, CSS and JavaScript fundamentals through structured online learning.',
  },
];


const capabilities = [
  { icon: ShoppingCart, text: 'High-Performance E-commerce Stores' },
  { icon: Layers, text: 'High-Converting Landing Pages' },
  { icon: Globe, text: 'Service-Based Business Platforms' },
  { icon: Monitor, text: 'Responsive Web Design' },
  { icon: Zap, text: 'Performance Optimization' },
];

const designSkills = ['Figma', 'Responsive Layouts', 'UI/UX Principles', 'Color Theory', 'Component Systems'];

const hobbies = [
  { icon: Gamepad2, label: 'Gaming' },
  { icon: Cpu, label: 'HW Customization' },
  { icon: Code2, label: 'Open Source' },
  { icon: Palette, label: 'UI Experiments' },
];


const SectionHeader = ({ title }: { title: string }) => (
  <div className="mb-8 w-fit">
    <h3 className="text-xs font-bold tracking-[0.35em] uppercase text-white mb-2">{title}</h3>
    <div className="h-[2px] w-full bg-blue-500" />
  </div>
);

const SkillSlider = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="mb-5">
    <div className="flex justify-between mb-2">
      <span className="text-[10px] tracking-widest uppercase text-white/70">{name}</span>
      <span className="text-[10px] tracking-widest text-blue-500">{level}%</span>
    </div>
    <div className="relative h-[2px] bg-white/10 w-full rounded-full">
      <motion.div
        className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        viewport={{ once: true }}
      />
      
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
        initial={{ left: 0 }}
        whileInView={{ left: `calc(${level}% - 6px)` }}
        transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.4 }}
      />
    </div>
  </div>
);

const TimelineItem = ({
  year,
  title,
  company,
  desc,
  index,
}: {
  year: string;
  title: string;
  company: string;
  desc: string;
  index: number;
}) => (
  <motion.div
    className="flex gap-4 mb-8 last:mb-0"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    viewport={{ once: true }}
  >
    
    <div className="flex flex-col items-center">
      <motion.div
        className="w-3 h-3 rounded-full border-2 border-blue-500 bg-black flex-shrink-0 mt-1 cursor-pointer"
        whileHover={{ scale: 1.6, backgroundColor: '#3b82f6', boxShadow: '0 0 12px rgba(59,130,246,0.9)' }}
        transition={{ duration: 0.2 }}
      />
      <div className="w-[1px] flex-1 bg-blue-500/30 mt-1" />
    </div>
    
    <div className="pb-2">
      <span className="text-[9px] tracking-[0.3em] text-blue-500 uppercase font-bold">{year}</span>
      <h4 className="text-sm font-bold text-white uppercase tracking-wider mt-0.5">{title}</h4>
      <p className="text-[10px] text-white/40 tracking-widest uppercase mb-1">{company}</p>
      <p className="text-xs text-white/50 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);


const Resume = () => {
  return (
    <section
      id="resume"
      className="relative w-full min-h-screen bg-black flex items-center py-24 overflow-hidden"
    >
      
      <div
        className="absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px)',
        }}
      />

      <div className="relative z-10 w-full px-6 md:px-24 lg:px-[120px]">
        
        <motion.div
          className="mb-16 w-fit"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white uppercase">
            Resume
          </h2>
          <motion.div
            className="h-1 bg-blue-500 mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </motion.div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <SectionHeader title="Software Skills" />
            {softwareSkills.map((skill, i) => (
              <SkillSlider key={skill.name} {...skill} delay={i * 0.1 + 0.2} />
            ))}

            <div className="mt-10">
              <SectionHeader title="Languages" />
              {languages.map((lang, i) => (
                <SkillSlider key={lang.name} {...lang} delay={i * 0.15 + 0.6} />
              ))}
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SectionHeader title="Experience" />
            <div>
              {experience.map((item, i) => (
                <TimelineItem key={item.year} {...item} index={i} />
              ))}
            </div>

          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <SectionHeader title="What Can I Do?" />
            <ul className="space-y-3 mb-10">
              {capabilities.map((cap, i) => (
                <motion.li
                  key={cap.text}
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <cap.icon
                    size={14}
                    className="text-blue-500 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"
                  />
                  <span className="text-xs text-white/60 tracking-wide group-hover:text-white transition-colors duration-200">
                    {cap.text}
                  </span>
                </motion.li>
              ))}
            </ul>

            <SectionHeader title="Design Skills" />
            <div className="flex flex-wrap gap-2 mb-10">
              {designSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="text-[9px] tracking-widest uppercase border border-white/10 text-white/50 px-3 py-1.5 hover:border-blue-500 hover:text-white transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <SectionHeader title="Hobbies & Interests" />
            <div className="flex flex-wrap gap-4">
              {hobbies.map((hobby, i) => (
                <motion.div
                  key={hobby.label}
                  className="flex flex-col items-center gap-2 group cursor-default"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center group-hover:border-blue-500 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-300">
                    <hobby.icon size={18} className="text-white/40 group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                  <span className="text-[8px] tracking-widest uppercase text-white/30 group-hover:text-white/70 transition-colors duration-300 text-center">
                    {hobby.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
