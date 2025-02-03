import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl font-thin tracking-tight"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((projects, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opactity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={projects.image}
                width={250}
                height={200}
                className="mb-6 rounded"
                alt={projects.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-cyan-500 tracking-tight">
                <a target="blank" href={projects.link}>
                  {projects.title}
                </a>
              </h6>
              <p className="mb-4 text-purple-200 tracking-tight">
                {projects.description}
              </p>
              {projects.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm text-yellow-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
