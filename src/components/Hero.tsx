
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import myImage from '../assets/hero-me.png';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={myImage}
                    alt="Background"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-dark-main/30" />
            </div>

            <div className="relative z-10 w-full px-6 md:px-24 lg:px-[120px] h-full flex flex-col justify-center">
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-xl md:text-3xl font-medium tracking-widest mb-2 text-white/80"
                    >
                        MAHMOUD
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, x: -150 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
                        className="text-6xl sm:text-7xl md:text-9xl font-bold leading-none mb-1 -ml-1 tracking-tighter"
                    >
                        Ibrahim
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 10, 
                            delay: 0.6 
                        }}
                        className="text-lg md:text-2xl font-light tracking-widest text-soft-gray mb-10"
                    >
                        Web Developer
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <button className="px-8 md:px-10 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                            Resume
                        </button>
                        <button className="px-8 md:px-10 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                            Portfolio
                        </button>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-6 md:left-24 lg:left-[120px] flex gap-5 text-white/40">
                    <a href="https://wa.me/201554054131" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                    </a>
                    <a href="https://www.facebook.com/mahmoud.ibrahim72" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                    <a href="https://www.linkedin.com/in/mcoder23/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                    <a href="https://discordapp.com/users/1049111227797872710" target="_blank" rel="noopener noreferrer" title="Discord: 7odaa5757" className="hover:text-white transition-colors">
                        <FontAwesomeIcon icon={faDiscord} size="lg" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;