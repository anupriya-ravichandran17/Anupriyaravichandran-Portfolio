import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">

      <h2>Education</h2>

      <div className="education-container">

        <div className="education-card">
          <h3>B.E. Computer Science and Engineering</h3>
          <h4>NPR College of Engineering and Technology</h4>
          <p>2023 - 2027</p>
          <p><strong>CGPA:</strong> 9.0</p>

          <p>
            Focused on Full Stack Development, Database Management Systems,
            Cloud Computing, Software Engineering, and Web Development.
          </p>
        </div> 

        <div className="education-card">
          <h3>Higher Secondary (HSC)</h3>
          <h4>St. Michael Matriculation Higher Secondary School, Madurai</h4>
          <p>Passed Out - 2023</p>
        </div>

        

      </div>

    </section>
  );
}

export default Education;