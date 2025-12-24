import { PROFILE_CONTENT } from "../constants";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../assets/RohitProfile.png";
import { delay, motion } from "framer-motion";

const Container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Profile = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={Container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Rohit Kumar
            </motion.h1>
            <TypeAnimation
              sequence={[
                "Front-End Developer",
                1000,
                "Web Designer",
                1000,
                "FULL STACK DEVELOPER",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r font-medium from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            />
            <motion.p
              variants={Container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-white leading-relaxed font-light"
            >
              {PROFILE_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              className="rounded-2xl h-auto max-w-sm shadow-[0_0_25px_rgba(168,85,247,0.4)]"
              initial={{ x: 100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                y: [0, -20, 0],
              }}
              transition={{
                x: { duration: 1, delay: 1.2 },
                opacity: { duration: 1, delay: 1.2 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              src={profilePic}
              alt="Rohit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
