import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">

      <h2>Experience</h2>

      <div className="experience-container">

        <div className="experience-card">
          <h3>UI/UX Design Intern</h3>

          <h4>Dot Com Infoway, Madurai</h4>

          <p><strong>Duration:</strong> June 2025 – July 2025</p>

          <ul>
            <li>Designed responsive website interfaces using Figma.</li>
            <li>Created wireframes, prototypes, and user-friendly layouts.</li>
            <li>Developed the Casa Core Furniture Website UI.</li>
            <li>Improved user experience with modern design principles.</li>
          </ul>

        </div>

        <div className="experience-card">
          <h3>Full Stack Developer Intern</h3>

          <h4>Hitasoft Technology Solutions Pvt. Ltd.</h4>

          <p><strong>Duration:</strong> June 2026 – July 2026</p>

          <ul>
            <li>Built a MERN Stack E-Commerce application.</li>
            <li>Developed REST APIs using Node.js and Express.js.</li>
            <li>Integrated MongoDB Atlas database.</li>
            <li>Implemented Login, Signup, Product Management, and Cart features.</li>
          </ul>

        </div>
        <div className="experience-card">
  <h3>Mini Project</h3>

  <h4>User and Entity Behaviour Analytics (UEBA)</h4>

  <p><strong>Technologies:</strong> Python, Flask, SQLite</p>

  <ul>
    <li>Developed an insider threat detection system.</li>
    <li>Monitored user activities and generated security alerts.</li>
    <li>Implemented risk analysis using machine learning.</li>
    <li>Created Admin and User dashboards.</li>
  </ul>

</div>

      </div>

    </section>
  );
}

export default Experience;