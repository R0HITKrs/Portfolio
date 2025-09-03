import { motion } from "framer-motion";
import AWS from "../assets/aws-color.png";
import Forage from "../assets/forage.png";
import FreeCodeCamp from "../assets/FreeCodeCamp.png";

const certifications = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "Sept 2025",
    logo: AWS,
    credentialUrl:
      "https://drive.google.com/file/d/17yyyFOLGVm8LX8SI_zibJHiYoE9M3ISE/view?usp=drive_link",
  },
  {
    title: "Accenture Developer & Technology Job Simulation",
    issuer: "Forage",
    date: "Jan 2025",
    logo: Forage,
    credentialUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ovyvuqqNRQKBjNxbj/3xnZEj9kfpoQKW885_ovyvuqqNRQKBjNxbj_ar3ksScvRB7enwBpW_1737959999049_completion_certificate.pdf",
  },
  {
    title: "Front-End Development Libraries",
    issuer: "FreeCodeCamp",
    date: "May 2024",
    logo: FreeCodeCamp,
    credentialUrl:
      "https://drive.google.com/file/d/1gDA2xap_V-YlqzhZTA5cxz5A8bBdMyqa/view?usp=sharing",
  },
];
function Certificates() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl font-thin tracking-tight"
      >
        Certificates
      </motion.h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="p-6 h-full flex flex-col items-center text-center border rounded-xl">
              <img
                src={cert.logo}
                alt={cert.issuer}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
              <p className="text-sm text-neutral-500">{cert.issuer}</p>
              <p className="text-xs text-neutral-400 mb-4">{cert.date}</p>
              <button
                asChild
                className="mt-auto flex items-center gap-2"
                variant="outline"
              >
                <a href={cert.credentialUrl} target="_blank" rel="noreferrer">
                  View Credential
                </a>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
