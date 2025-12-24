import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Tech from "./Components/Tech";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Certificates from "./Components/Certificates";
import ScrollProgress from "./Components/ScrollProgress";
import ParticlesBackground from "./Components/ParticlesBackground";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <ScrollProgress />
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950">
          <ParticlesBackground />
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
          {/* Cyan Bottom Glow */}
          <div className="absolute bottom-0 right-0 z-[-2] h-[50%] w-[50%] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent)] blur-[100px]"></div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Profile />
        <About />
        <Tech />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </div>
    </div>
  );
};

export default App;
