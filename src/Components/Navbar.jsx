import Logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import Resume from "../assets/Rohit.pdf";

const Navbar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <img style={{ width: "150px", height: "60px" }} src={Logo} alt="Logo" />
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/rohit-kumar-80861035b/"
        >
{/*           https://www.linkedin.com/in/rohit-kumar-77231821b/ */}
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/R0HITKrs">
          <FaGithub />
        </a>
        <a target="_blank" href="https://www.instagram.com/rohit_krs/">
          <FaInstagram />
        </a>
        <a href={Resume} download={"Rohit's Resume"}>
          <IoMdDownload />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
