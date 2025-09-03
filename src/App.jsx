import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Tech from "./Components/Tech";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Certificates from "./Components/Certificates";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-aquamarine-300 selection:text-aquamarine-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="cantainer mx-auto px-8">
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
