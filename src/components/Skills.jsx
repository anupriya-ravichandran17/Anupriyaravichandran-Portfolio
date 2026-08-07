import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2>Technical Skills</h2>

      <div className="skills-container">

        <div className="skill-card">
          <h3>Programming</h3>
          <p>Python</p>
          <p>Java</p>
          <p>JavaScript</p>
        </div>

        <div className="skill-card">
          <h3>Frontend</h3>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>React.js</p>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>Flask</p>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <p>MongoDB</p>
          <p>MySQL</p>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <p>Git</p>
          <p>GitHub</p>
          <p>VS Code</p>
          <p>Postman</p>
          <p>Figma</p>
        </div>

        <div className="skill-card">
          <h3>Soft Skills</h3>
          <p>Communication</p>
          <p>Teamwork</p>
          <p>Problem Solving</p>
          <p>Quick Learning</p>
        </div>

      </div>

    </section>
  );
}

export default Skills;