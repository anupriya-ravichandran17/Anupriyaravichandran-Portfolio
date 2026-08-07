import "./projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-card">
          <img src="/project1.jpeg" alt="Trendzo" />

          <div className="project-content">
            <h3>Trendzo - E-Commerce Website</h3>

            <p>
              Developed a full-stack e-commerce application using React.js,
              Node.js, Express.js, and MongoDB with authentication,
              cart and Buy Now features.
            </p>

            <h4>MERN STACK - Frontend and Backend</h4>

            <p className="tech-stack">
              • React • Node.js • Express.js • MongoDB
            </p>

            
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src="/project2.jpeg" alt="Casa Core" />

          <div className="project-content">
            <h3>Casa Core - Furniture UI</h3>

            <p>
              Designed a modern furniture website prototype with responsive
              layouts and intuitive user experience using Figma.
            </p>

            <h4>Casa core - Furniture website</h4>

            <p className="Casa core">
              • Figma • UI/UX Design
            </p>

            
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src="/project3.jpeg" alt="UEBA" />

          <div className="project-content">
            <h3>UEBA - Insider Threat Detection</h3>

            <p>
              Developed a cybersecurity web application to detect insider
              threats using user behaviour analytics and machine learning.
            </p>

            <h4>Domain:Cybersecurity</h4>

            <p className="Cybersecurity">
              • Python • Flask • SQLite
            </p>

            
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;