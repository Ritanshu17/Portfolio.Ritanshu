import projects from "../data/projects";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../animations/fadeIn";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      <motion.div
            className="project-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
        {projects.map((project, index) => (
          <motion.div
              key={index}
              className="project-card"
              variants={fadeInUp}
          >
            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="btn-group">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                GitHub Repo
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;