import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import aboutImg from '../assets/about.png';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Built' },
  { value: '100%', label: 'Client Satisfaction' },
];

const tags = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Framer Motion'];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1 },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const tagVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black flex flex-col md:flex-row-reverse overflow-hidden"
      style={{ cursor: 'none' }}
    >
      {/* Right — image panel */}
      <div className="absolute md:relative inset-0 md:inset-auto w-full md:w-[45%] md:self-stretch z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.12, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src={aboutImg}
            alt="About Mahmoud"
            className="w-full h-full object-cover object-center brightness-[0.35] md:brightness-75 opacity-60 md:opacity-100 contrast-125 saturate-[.85]"
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent md:via-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* Vertical label */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-3"
        >
          <div className="w-[1px] h-16 bg-white/20" />
          <span
            className="text-[9px] tracking-[0.4em] uppercase text-white/30 font-semibold"
            style={{ writingMode: 'vertical-rl' }}
          >
            About Me
          </span>
          <div className="w-[1px] h-16 bg-white/20" />
        </motion.div>
      </div>

      {/* Left — content */}
      <div className="relative z-10 w-full px-6 md:px-24 lg:px-[120px] md:w-[55%] py-28 md:py-0 flex items-center">
        <div className="max-w-xl w-full">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-6 h-[1px] bg-blue-500" />
            <span className="text-[9px] tracking-[0.4em] uppercase text-blue-400 font-semibold">Who I Am</span>
          </motion.div>

          {/* Heading */}
          <div className="mb-3 overflow-hidden">
            <motion.h2
              initial={{ y: 80, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none"
            >
              ABOUT
            </motion.h2>
          </div>

          {/* Blue underline */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.4 }}
            className="h-[3px] bg-blue-500 mb-8 origin-left"
            style={{ width: '72px' }}
          />

          {/* Email */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mm102399@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 font-mono tracking-wider text-xs uppercase hover:text-white transition-colors duration-300 mb-10 group"
            data-cursor="pointer"
          >
            <span className="w-4 h-[1px] bg-blue-400 group-hover:w-8 transition-all duration-300" />
            mm102399@gmail.com
          </motion.a>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white font-medium italic text-xl md:text-2xl mb-8 leading-snug border-l-2 border-blue-500 pl-5"
          >
            "I build digital storefronts that don't just look good—they&nbsp;convert."
          </motion.blockquote>

          {/* Body text */}
          <div className="space-y-4 text-base md:text-lg font-light leading-relaxed text-white/50 mb-10">
            {[
              <>With <span className="text-white font-medium">2+ years</span> of experience, I specialize in crafting <span className="text-blue-400">high-performance E-commerce stores</span> and <span className="text-white font-medium">high-converting landing pages</span>.</>,
              <>Leveraging <span className="text-blue-400 font-medium">React</span> and <span className="text-white font-medium">Next.js</span>, I blend sleek UI with seamless UX to turn visitors into loyal customers.</>,
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.45 + i * 0.15 }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="group border border-white/8 hover:border-blue-500/40 p-4 transition-colors duration-500 relative overflow-hidden"
                whileHover={{ y: -3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <p className="text-2xl md:text-3xl font-black text-white tracking-tight">{s.value}</p>
                <p className="text-[9px] tracking-[0.2em] uppercase text-white/30 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                variants={tagVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.4, delay: i * 0.07 + 0.8 }}
                whileHover={{ scale: 1.08, borderColor: 'rgba(59,130,246,0.7)', color: '#fff' }}
                className="text-[9px] tracking-widest uppercase border border-white/10 text-white/40 px-3 py-1.5 cursor-default transition-colors duration-200"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
