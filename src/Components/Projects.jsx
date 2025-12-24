import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-thin tracking-tight"
      >
        Projects
      </motion.h2>
      <div className="flex flex-col items-center gap-8">
        {PROJECTS.map((projects, index) => (
          <div key={index} className="mb-8 flex flex-wrap justify-center items-center lg:justify-center w-full max-w-5xl gap-8">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex justify-center lg:justify-start"
            >
              <Tilt
                className="w-full"
                options={{
                  max: 25,
                  scale: 1.05,
                  speed: 400,
                  glare: true,
                  "max-glare": 0.3,
                }}
              >
                <img
                  src={projects.image}
                  className="mb-6 rounded-lg shadow-lg shadow-purple-500/20 w-full h-auto cursor-pointer"
                  alt={projects.title}
                />
              </Tilt>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-bold text-xl">
                <a
                  href={projects.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 transition-colors duration-300 font-bold text-xl"
                >
                  {projects.title}
                </a>
              </h6>
              <p className="mb-4 text-neutral-400 leading-relaxed text-justify font-light">
                {projects.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 cursor-pointer rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-yellow-200"
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

export default Projects;
