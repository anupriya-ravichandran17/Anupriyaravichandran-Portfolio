import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />

      <button
        className="back-to-top"
        onClick={scrollToTop}
        style={{
          position: "fixed",
          left: "50%",
          bottom: "12px",
          transform: "translateX(-50%)",

          width: "36px",
          height: "36px",

          padding: "0",
          margin: "0",

          border: "none",
          borderRadius: "50%",

          backgroundColor: "#38bdf8",
          color: "white",

          fontSize: "20px",
          fontWeight: "bold",

          cursor: "pointer",
          zIndex: 99999,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          boxSizing: "border-box",

          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)"
        }}
      >
        ↑
      </button>
    </>
  );
}

export default App;