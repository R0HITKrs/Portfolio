import { EXPERIENCES } from "../constants";
import { TbCertificate } from "react-icons/tb";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 font-thin text-center text-4xl tracking-tight"
      >
        Experience
      </motion.h2>
      <div className="flex flex-col items-center">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center w-full max-w-5xl bg-neutral-900/30 p-8 rounded-2xl border border-neutral-800 hover:border-white/30 transition-all duration-300 hover:bg-neutral-900/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-auto lg:min-w-[140px] lg:max-w-[160px] mb-4 lg:mb-0 lg:mr-6"
            >
              <p className="mb-2 text-sm font-bold text-cyan-400 tracking-wide uppercase">
                {experience.year}
              </p>
              {experience.certificate && (
                <div className="text-sm text-neutral-300 flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer">
                  <span>Certificate</span>
                  <a
                    target="_blank"
                    href={experience.certificate}
                    className="text-lg"
                  >
                    <TbCertificate />
                  </a>
                </div>
              )}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:flex-1"
            >
              <h6 className="mb-2 font-bold text-xl text-white">
                {experience.role}
                <span className="block mt-1 text-sm bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-6 text-neutral-400 leading-relaxed text-justify">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-purple-900/20 border border-purple-700/30 px-3 py-1 text-xs font-medium text-purple-300 hover:bg-purple-900/40 hover:text-purple-100 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
