import { useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import myImage from "../assets/hero-me.webp";

const MagneticButton = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className: string;
  href?: string;
}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: (e.clientX - (rect.left + rect.width / 2)) * 0.25,
      y: (e.clientY - (rect.top + rect.height / 2)) * 0.25,
    });
  };

  return (
    <motion.button
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {href ? <a href={href}>{children}</a> : children}
    </motion.button>
  );
};

const FloatingOrb = ({
  x,
  y,
  size,
  delay,
  color,
}: {
  x: string;
  y: string;
  size: string;
  delay: number;
  color: string;
}) => (
  <motion.div
    className="absolute rounded-full blur-3xl pointer-events-none"
    style={{ left: x, top: y, width: size, height: size, background: color }}
    animate={{
      x: [0, 30, -20, 15, 0],
      y: [0, -25, 20, -10, 0],
      scale: [1, 1.1, 0.95, 1.05, 1],
      opacity: [0.35, 0.55, 0.4, 0.5, 0.35],
    }}
    transition={{
      duration: 12,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const Hero = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 120]);
  const textY = useTransform(scrollY, [0, 600], [0, -60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
  };
  const bigStagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.8 } },
  };
  const letterUp: Variants = {
    hidden: { opacity: 0, y: 60, rotateX: -80 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const socials = [
    { icon: faWhatsapp, href: "https://wa.me/201554054131", delay: 2.0 },
    {
      icon: faFacebook,
      href: "https://www.facebook.com/mahmoud.ibrahim72",
      delay: 2.1,
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/mcoder23/",
      delay: 2.2,
    },
    {
      icon: faDiscord,
      href: "https://discordapp.com/users/1049111227797872710",
      delay: 2.3,
    },
  ];

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center overflow-hidden"
      style={{ cursor: "none" }}
    >
      {/* Parallax BG */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          src={myImage}
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </motion.div>

      {/* Ambient orbs */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <FloatingOrb
          x="5%"
          y="20%"
          size="400px"
          delay={0}
          color="rgba(59,130,246,0.12)"
        />
        <FloatingOrb
          x="60%"
          y="60%"
          size="300px"
          delay={3}
          color="rgba(139,92,246,0.08)"
        />
        <FloatingOrb
          x="80%"
          y="10%"
          size="250px"
          delay={6}
          color="rgba(59,130,246,0.07)"
        />
      </div>

      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-6 md:px-24 lg:px-[120px] h-full flex flex-col justify-center"
        style={{ y: textY, opacity }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-[1px] bg-blue-500" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-blue-400 font-semibold">
            Portfolio 2025
          </span>
        </motion.div>

        {/* First name */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex text-xl md:text-3xl font-medium tracking-[0.25em] mb-0 text-white/60 uppercase"
          style={{ perspective: "800px" }}
        >
          {Array.from("MAHMOUD").map((l, i) => (
            <motion.span key={i} variants={letterUp} className="inline-block">
              {l}
            </motion.span>
          ))}
        </motion.div>

        {/* Last name */}
        <motion.div
          variants={bigStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap text-7xl sm:text-8xl md:text-[10rem] font-black leading-none -ml-1 tracking-tighter"
          style={{ perspective: "800px" }}
        >
          {Array.from("Ibrahim").map((l, i) => (
            <motion.span
              key={i}
              variants={letterUp}
              className="inline-block origin-bottom"
              whileHover={{
                y: -8,
                color: "#3b82f6",
                transition: { duration: 0.2 },
              }}
            >
              {l}
            </motion.span>
          ))}
        </motion.div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
          className="mt-3 mb-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.7 }}
            className="text-lg md:text-2xl font-light tracking-[0.3em] text-white/50"
          >
            Web Developer &amp; UI Craftsman
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <MagneticButton
            href="#resume"
            className="group px-8 md:px-10 py-3.5 border border-white/20 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs text-white relative overflow-hidden"
          >
            <span className="relative z-10">Resume</span>
            <motion.span
              className="absolute inset-0 bg-blue-500 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </MagneticButton>
          <MagneticButton
            href="#projects"
            className="group px-8 md:px-10 py-3.5 bg-white/5 border border-white/10 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs text-white/80 hover:text-white relative overflow-hidden"
          >
            <span className="relative z-10">View Work</span>
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 left-6 md:left-24 lg:left-[120px] flex flex-col items-center gap-2"
        >
          <div className="relative w-[1px] h-16 bg-white/10 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-blue-500"
              animate={{ y: ["0%", "100%"] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ height: "50%" }}
            />
          </div>
          <span className="text-[8px] tracking-[0.3em] uppercase text-white/30 rotate-0">
            Scroll
          </span>
        </motion.div>

        {/* Socials */}
        <div className="absolute bottom-10 right-6 md:right-24 lg:right-[120px] flex gap-5 text-white/30">
          {socials.map(({ icon, href, delay }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay, duration: 0.5 }}
              whileHover={{ y: -6, color: "#60a5fa" }}
              className="transition-colors"
            >
              <FontAwesomeIcon icon={icon} size="lg" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
