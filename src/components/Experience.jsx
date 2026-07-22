import photo from "../assets/photo.jpeg";
import experience from "../data/experience";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/fadeIn";

function Experience() {
  return (
    <motion.section
      id="experience"
      className="experience"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="section-title">Experience</h2>

      <div className="experience-info">
        <div className="grid">
          {experience.map((item, index) => (
            <div className="grid-card" key={index}>
              <i className={`fa-solid ${item.icon}`}></i>

              <span>
                {item.role} ({item.period})
              </span>

              <h3>{item.duration}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <img src={photo} alt="Experience" />
      </div>
    </motion.section>
  );
}

export default Experience;