import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project0 from "../assets/projects/project-0.png";
import project4 from "../assets/projects/project-4.png";

export const PROFILE_CONTENT = `I'm Rohit Kumar, a diligent engineering graduate from Chandigarh University. With a strong foundation in programming languages such as NextJS, ReactJS, HTML, and CSS, I'm on the lookout for a software engineering internship to apply my academic knowledge and gain real-world experience. Equipped with expertise in data structures and object-oriented programming, I am confident in my ability to contribute effectively to a dynamic software engineering team. Excited to utilize my analytical, technical, and programming skills to thrive as an entry-level software engineer and make a positive impact.`;

export const ABOUT_TEXT = `I am a dedicated and adaptable frontend developer passionate about building efficient, user-friendly web applications. With a solid foundation in software principles and methodologies, I am eager to contribute to a dynamic software engineering team and gain hands-on experience in the field. My background in data structures and object-oriented programming empowers me to tackle challenges with confidence and add value through my technical, analytical, and problem-solving skills. Motivated to make a meaningful impact as an entry-level software engineer, I bring a proactive approach to every project. Beyond coding, I stay active and enjoy exploring emerging technologies.`;

export const EXPERIENCES = [
  {
    year: "Oct 2025 - Present",
    role: "FullStack Developer",
    company: "FlocCare AI",
    description: `Built and deployed AI-driven multimedia applications using Python, Flask, and OpenAI, reducing content generation time by 20%. Optimized backend pipelines and caching to handle concurrent AI requests, cutting latency by 25%. Implemented an automated nurse roster system with rule-based shift assignment and an AI copilot supporting natural-language scheduling queries. Created 100+ reusable image templates for automated content generation.`,
    technologies: [
      "HTML",
      "JavaScript",
      "NextJs",
      "Python(Flask/Tornado)",
      "TailwindCSS",
      "OpenAI",
      "ComfyUI",
      "APIs",
    ],
    certificate: "",
  },
  {
    year: "Jan 2025 - Mar 2025",
    role: "Web Developement Internship",
    company: "Zidio Development",
    description: `Built a responsive web interface using React.js and TailwindCSS, reducing page load time by 30% and improving mobile usability across devices. Worked closely with cross-functional teams to design, test, and launch two full-stack features, gaining practical experience in Git-based version control and collaborative development`,
    technologies: [
      "HTML",
      "JavaScript",
      "ReactJs",
      "MongoDB",
      "NodeJs/ExpressJs",
      "TailwindCSS",
    ],
    certificate:
      "https://drive.google.com/file/d/164zdBDvZVTcWwHIHnDvSFMVcXjECwnED/view?usp=sharing",
  },
  {
    year: "Sept 2024 - Dec 2024",
    role: "Software Engineering Internship",
    company: "Clipwise AI",
    description: `Recreated and optimized the login page for Clipwise.ai, aligning with modern UI/UX standards to improve usability and aesthetics. Leveraged Django for secure backend functionality and integrated Alpine.js to add lightweight interactive elements.`,
    technologies: [
      "Django",
      "Ubuntu",
      "HTMX",
      "AlplineJS",
      "HTML",
      "CSS",
      "Javascript",
    ],
    certificate:
      "https://drive.google.com/file/d/1TMq0fzi4mUo5JWo7tf5TD92pgW7QDCVM/view?usp=sharing",
  },
  {
    year: "Aug 2024 - Sept 2024",
    role: "SDE Intern",
    company: "Bluestock Fintech",
    description: `Led a team in developing and maintaining web applications using JavaScript, HTML, and CSS. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "HTML", "CSS"],
    certificate:
      "https://drive.google.com/file/d/1Ncx3lC_iQ2LgsGwVt7LSJC26r881jUhq/view?usp=sharing",
  },
];

export const PROJECTS = [
  {
    title: "Interview Genie",
    image: project0,
    description:
      "Interview Genie is an advanced AI-driven platform that utilizes the Google Gemini API to conduct realistic mock interviews, analyze responses, and provide personalized feedback. The website creates a simulated interview environment with dynamic questioning, evaluates performance using AI insights, and offers detailed feedback to help users refine their skills and prepare for real-world interviews.",
    technologies: [
      "NextJs",
      "ReactJs",
      "NodeJs",
      "postgreSQL",
      "Tailwind",
      "Shadcn",
    ],
    link: "https://iiterviiew-genie.netlify.app/",
  },
  {
    title: "Animated Landing Page Website",
    image: project4,
    description:
      "Designed and developed a visually engaging and responsive landing page to showcase creative front-end development skills.Optimized for cross-device compatibility and fast load times, improving user engagement and reducing bounce rate.Demonstrated expertise in responsive layout design, component-based architecture, and web performance optimization",
    technologies: ["ReactJs", "TailwindCSS", "JavaScript", "GSAP"],
    link: "https://inspiring-beignet-ee1651.netlify.app/",
  },
  {
    title: "E-Commerce Website - Vegikart",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "PHP", "MySQL"],
    link: "https://github.com/R0HITKrs/VeGiKart",
  },
  {
    title: "PG-Life Internshala Training",
    image: project2,
    description:
      "This is a website using which students can easily get information about available PGs and PG owners will also benefit from it since now they can reach a large amount of customers",
    technologies: ["HTML", "CSS", "PHP", "React", "MySQL"],
    link: "https://drive.google.com/file/d/1JHz65b8iTvs94nT5ZKLH_dQJ0dY2Dt6N/view?usp=sharing",
  },
];

export const CONTACT = {
  address: "New Delhi",
  phoneNo: "+91 7397568325",
  email: "rohitkrs1234@gmail.com",
};
