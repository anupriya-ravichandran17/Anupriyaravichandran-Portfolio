import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2>Anupriya R</h2>

      <p>Full Stack Developer | UI/UX Designer</p>

      <div className="footer-links">
        <a
          href="https://github.com/YOUR_GITHUB_USERNAME"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:YOUR_EMAIL@gmail.com">
          Email
        </a>
      </div>

      <hr />

      <p>© 2026 Anupriya R. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;