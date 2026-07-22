import photo from "../assets/image.jpg";
import resume from "../assets/Ritanshu_SDE.pdf";
import {motion} from "framer-motion"
import { fadeInUp } from "../animations/fadeIn";

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="about-container">

        <img
          src={photo}
          alt="Profile"
          loading="lazy"
          decoding="async"
        />

        <div className="info-box">

          <div className="text">
            <h3>Hi, I'm</h3>
            <h1>Ritanshu Mankar</h1>
            <span>Software Engineer specializing in Full Stack Development,
                AI applications, and scalable web solutions.</span>
          </div>

          <div className="btn-group">
            <a href={resume} download className="btn">
              Download CV
            </a>
          </div>

          <div className="socials">

            <a
              href="https://www.linkedin.com/in/ritanshu-mankar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>

            </a>

            <a
              href="https://github.com/Ritanshu17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
              
            </a>

            <a
              href="https://x.com/MankarRitanshu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>

            <a
              href="https://leetcode.com/u/ritanshumankar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="si si-leetcode"></i>
              
            </a>

          </div>

        </div>

      </div>
    </motion.section>
  );
}

export default About;