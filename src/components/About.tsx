
import { motion } from "framer-motion";
import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <section id="about" className="relative min-h-screen w-full bg-black flex flex-col md:flex-row-reverse overflow-hidden">

      <div className="absolute md:relative inset-0 md:inset-auto w-full md:w-1/2 md:self-stretch z-0 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full h-full"
        >
          <img
            src={aboutImg}
            alt="About Mahmoud"
            className="w-full h-full object-cover object-center brightness-50 md:brightness-100 opacity-40 md:opacity-100 contrast-125 saturate-[.9]"
          />
        </motion.div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-24 lg:px-[120px] md:w-1/2 py-24 md:py-0 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="mb-12 w-fit">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-2 uppercase"
            >
              ABOUT
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-1 bg-blue-500 mb-6" 
            />
            <motion.a 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mm102399@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-mono tracking-widest text-sm uppercase hover:text-blue-400 transition-colors duration-300 block"
            >
              mm102399@gmail.com
            </motion.a>
          </div>
          <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed text-soft-gray">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white font-medium italic text-2xl md:text-3xl mb-8 leading-tight"
            >
              "I build digital storefronts that don't just look good—they convert."
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              With <span className="text-white font-medium">2 years of experience</span> in 
              modern web development, I specialize in crafting <span className="text-blue-500">high-performance E-commerce stores</span>{" "}
              <span className="text-white font-medium">and high-converting landing pages</span>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Leveraging the power of <span className="text-blue-400 font-medium">React</span> and{" "}
              <span className="text-white font-medium">Next.js</span>, I blend sleek UI with seamless UX to turn 
              your visitors into loyal customers.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-10 left-10 md:left-24 lg:left-[120px] flex items-center gap-4"
        >
          {" "}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
