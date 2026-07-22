import Header from "./components/Header";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <>
      <ScrollProgress/>
      <Header />
      <About />
      <Skills/>
      <Experience />
      <Projects />
      <Highlights/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;