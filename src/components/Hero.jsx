import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-text">
        <h3>Hello, I'm</h3>

        <h1>Anupriyaravichandran</h1> <br></br>

        <h2>Full Stack Developer + UI&UX Designer</h2>

        <p>
          Final Year Computer Science Engineering student passionate about
          Full Stack Development, UI/UX Design, and building responsive web
          applications using React, Node.js, Express.js, and MongoDB.
        </p>

        <div className="buttons">
          <a href="/Anupriya R (RESUME) (1) (1).pdf" target="_blank">
            <button>Download Resume</button>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src="/MY IMG 1.jpeg" alt="Anupriya" />
      </div>
      

    </section>
  );
}

export default Hero;