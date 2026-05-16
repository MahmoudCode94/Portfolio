import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useScroll } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    const sections = ['home', 'about', 'resume', 'projects'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Update gliding indicator position
  useEffect(() => {
    const links = ['home', 'about', 'resume', 'projects'];
    const idx = links.indexOf(activeSection);
    const el = linkRefs.current[idx];
    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeSection]);

  const links = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Resume', href: '#resume', id: 'resume' },
    { name: 'Projects', href: '#projects', id: 'projects' },
  ];

  const menuVariants = {
    closed: { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
    open: { clipPath: 'inset(0 0 0% 0)', opacity: 1 },
  };

  // Gliding progress bar at the top
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 120 });

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-blue-500 z-[100] w-full origin-left"
        style={{ scaleX: smoothProgress }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-black/90 backdrop-blur-2xl border-b border-white/[0.04]'
            : 'py-7 bg-transparent'
        }`}
      >
        <div className="w-full px-6 md:px-24 lg:px-[120px] flex justify-between items-center">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-50 text-xl font-black tracking-tighter text-white"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            M<span className="text-blue-500">.</span>IBRAHIM
          </motion.a>

          <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.3em] uppercase relative">
            <motion.span
              className="absolute -bottom-1 h-[1px] bg-blue-500"
              animate={{ left: indicatorStyle.left, width: indicatorStyle.width }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />

            {links.map((link, index) => {
              const isActive = activeSection === link.id;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  ref={(el) => { linkRefs.current[index] = el; }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 + 0.3 }}
                  className={`relative transition-colors duration-300 pb-1 ${
                    isActive ? 'text-white' : 'text-white/40 hover:text-white/80'
                  }`}
                  whileHover={{ y: -1 }}
                >
                  {link.name}
                </motion.a>
              );
            })}
          </div>

          {/* CTA button desktop */}
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mm102399@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden md:inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase border border-white/20 px-5 py-2.5 text-white/70 hover:text-white hover:border-blue-500/60 hover:bg-blue-500/10 transition-all duration-300"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            Hire Me
          </motion.a>

          {/* Hamburger */}
          <button
            className="relative z-50 md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-[2px] bg-white transition-all duration-300 ${i === 1 ? 'w-4' : 'w-6'}`}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {/* Menu top bar */}
            <div className={`absolute top-0 left-0 w-full px-6 flex justify-between items-center ${isScrolled ? 'py-4' : 'py-7'}`}>
              <div className="text-xl font-black tracking-tighter text-white">
                M<span className="text-blue-500">.</span>IBRAHIM
              </div>
              <button
                className="flex flex-col gap-[5px]"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <div className="w-6 h-[2px] bg-white rotate-45 translate-y-[7px]" />
                <div className="w-6 h-[2px] bg-white opacity-0" />
                <div className="w-6 h-[2px] bg-white -rotate-45 -translate-y-[7px]" />
              </button>
            </div>

            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.09 + 0.1 }}
                className={`text-3xl font-black tracking-widest uppercase transition-colors duration-200 ${
                  activeSection === link.id ? 'text-blue-400' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
              </motion.a>
            ))}

            {/* Mobile hire me */}
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mm102399@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-[10px] font-bold tracking-[0.3em] uppercase border border-white/20 px-8 py-3.5 text-white/60"
            >
              Hire Me
            </motion.a>

            {/* Decorative number labels */}
            <div className="absolute bottom-10 left-8 flex flex-col gap-1">
              {links.map((link, i) => (
                <span key={link.id} className="text-[8px] tracking-widest text-white/15 font-mono">
                  0{i + 1} — {link.name}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;