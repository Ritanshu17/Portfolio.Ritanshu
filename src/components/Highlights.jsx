import highlights from "../data/highlights";
import { motion } from "framer-motion";
function Highlights() {
  return (
    <section id="highlights" className="highlights">

      <h2 className="section-title">
        Engineering Highlights
      </h2>

      <div className="highlights-grid">

        {highlights.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div className="highlight-card" key={index}>

              <Icon className="highlight-icon"/>

              <h2>{item.number}</h2>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}

export default Highlights;