import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-text">
        <h3>Hello, I'm</h3>

        <h1>Anupriyaravichandran</h1> 

        <h2>Full Stack Developer + UI&UX Designer</h2>

        <p>
          Final Year Computer Science Engineering student passionate about
          Full Stack Development, UI/UX Design, and building responsive web
          applications using React, Node.js, Express.js, and MongoDB.
        </p>

       <div className="buttons">
  <button
    type="button"
    onClick={() => window.open("/resume.pdf", "_blank")}
  >
    Download Resume
  </button>
</div>
      </div>

      
      

    </section>
  );
}

export default Hero;