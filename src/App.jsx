import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  return (
    <div className="md:max-w-3xl lg:max-w-5xl xl:max-w-5xl mx-auto">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Services />  
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
