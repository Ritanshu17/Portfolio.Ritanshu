import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);
  return (
    <header className="header">
      <a href="#" className="logo">
        <span>Ritanshu Mankar</span>
      </a>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a
            href="#about"
            className={activeSection === "about" ? "active-link" : ""}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={activeSection === "skills" ? "active-link" : ""}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className={activeSection === "experience" ? "active-link" : ""}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active-link" : ""}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#highlights"
            className={activeSection === "highlights" ? "active-link" : ""}
          >
            Highlights
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active-link" : ""}
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="header-actions">
        <ThemeToggle />

        <i
          className="fa-solid fa-bars"
          id="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>
      </div>
    </header>
  );
}

export default Header;