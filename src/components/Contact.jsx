import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-card">
        <p><strong>Name:</strong> Anupriya R</p>
        <p><strong>Email:</strong> anupriyaravichandran1704@gmail.com</p>
        <p><strong>Phone:</strong> +91 9344938268</p>
        <p><strong>Location:</strong> Madurai, Tamil Nadu</p>

        <div className="contact-links">
          <a href="https://github.com/anupriya-ravichandran17" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/anupriya-ravichandran-62787b34a/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;