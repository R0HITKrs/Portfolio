import { RiReactjsLine } from "react-icons/ri";
import { SiDjango, SiTypescript, SiRedux, SiPostman } from "react-icons/si";
import { FaNodeJs, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { MdOutlineHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { FaPython } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 pb-2 text-center text-4xl font-thin tracking-tight"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="relative overflow-hidden py-8"
      >
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
        
        {/* First scrolling row */}
        <div className="flex animate-scroll mb-8">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-4 px-2">
              <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 border-neutral-800 p-4 bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] flex-shrink-0"
              >
                <RiReactjsLine className="text-7xl text-cyan-400" />
              </motion.div>
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 border-neutral-800 p-4 bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] flex-shrink-0"
              >
                <FaPython className="text-7xl text-yellow-400" />
              </motion.div>
              <motion.div
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 border-neutral-800 p-4 bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 hover:border-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] flex-shrink-0"
              >
                <SiTypescript className="text-7xl text-blue-600" />
              </motion.div>
              <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 border-neutral-800 p-4 bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] flex-shrink-0"
              >
                <FaNodeJs className="text-7xl text-green-500" />
              </motion.div>
              <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 border-neutral-800 p-4 bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] flex-shrink-0"
              >
                <RiNextjsLine className="text-7xl text-white" />
              </motion.div>
              <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 border-neutral-800 p-4 bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] flex-shrink-0"
              >
                <RiTailwindCssFill className="text-7xl text-cyan-400" />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Second scrolling row (reverse direction) */}
        <div className="flex animate-scroll-reverse">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-4 px-2">
              <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 border-neutral-800 p-4 bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 hover:border-orange-400 hover:shadow-[0_0_20px_rgba(251,146,60,0.4)] flex-shrink-0"
              >
                <MdOutlineHtml className="text-7xl text-orange-400" />
              </motion.div>
              <motion.div
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 border-neutral-800 p-4 bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] flex-shrink-0"
              >
                <MdCss className="text-7xl text-blue-500" />
              </motion.div>
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 border-neutral-800 p-4 bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 hover:border-green-300 hover:shadow-[0_0_20px_rgba(134,239,172,0.4)] flex-shrink-0"
              >
                <SiDjango className="text-7xl text-green-300" />
              </motion.div>
              <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 border-neutral-800 p-4 bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] flex-shrink-0"
              >
                <SiPostman className="text-7xl text-orange-500" />
              </motion.div>
              <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 border-neutral-800 p-4 bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] flex-shrink-0"
              >
                <FaGithub className="text-7xl text-white" />
              </motion.div>
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 border-neutral-800 p-4 bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] flex-shrink-0"
              >
                <SiRedux className="text-7xl text-purple-500" />
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Tech;
