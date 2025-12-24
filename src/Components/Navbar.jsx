import Logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import Resume from "../assets/Rohit.pdf";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img style={{ width: "150px", height: "60px" }} src={Logo} alt="Logo" />
      </div>
      <div className="flex items-center gap-4 text-2xl">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/rohit-kumar-80861035b/"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
{/*           https://www.linkedin.com/in/rohit-kumar-77231821b/ */}
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/R0HITKrs" className="hover:text-cyan-400 transition-colors duration-300">
          <FaGithub />
        </a>
        <a target="_blank" href="https://www.instagram.com/rohit_krs/" className="hover:text-cyan-400 transition-colors duration-300">
          <FaInstagram />
        </a>
        <a 
          href={Resume} 
          download={"Rohit's Resume"}
          className="ml-2 group relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-sm font-semibold text-white shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <IoMdDownload className="relative z-10 text-lg" />
          <span className="relative z-10">Resume</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
