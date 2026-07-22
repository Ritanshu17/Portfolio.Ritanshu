import skills from "../data/skills";
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "../animations/fadeIn";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Tech Stack</h2>

      <motion.div
          className="skills-container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
        {skills.map((group, index) => (
          <motion.div
              className="skill-category"
              key={index}
              variants={fadeInUp}
            >
            <h3>{group.category}</h3>

            <div className="skill-list">
              {group.items.map((skill, i) => {
                const Icon = skill.icon;

                return (
                  <span className="skill-pill" key={i}>
                    <Icon className="skill-icon" />
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;