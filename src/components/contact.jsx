import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import resume from "../assets/Ritanshu_SDE.pdf"; // Update if your filename differs

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Let's Connect</h2>

      <div className="contact-container">
        <p className="contact-description">
          I'm currently seeking <strong>Software Engineer</strong>,
          <strong> Full-Stack</strong>, and
          <strong> AI/ML</strong> opportunities.
          <br />
          Whether you're hiring, have a project in mind, or simply want to
          connect, I'd love to hear from you.
        </p>

        <div className="contact-links">

          {/* <a href="mailto:yourmail@gmail.com">
            <FaEnvelope />
            <span>yourmail@gmail.com</span>
          </a> */}

          <a
            href="https://linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/YOUR-GITHUB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          {/* <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFileAlt />
            <span>Resume</span>
          </a> */}

        </div>

        

        <div className="contact-buttons">

          <a
            href="mailto:yourmail@gmail.com"
            className="contact-btn"
          >
            <FaEnvelope />
            <span>Email Me</span>
          </a>

          <a
            href={resume}
            download
            className="contact-btn"
          >
            <FaDownload />
            <span>Download Resume</span>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;