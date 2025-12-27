import React, { useEffect } from "react";
import "../CSS/Projects.css";
import portfolio from "../assets/portfolio.png"
import quiz from "../assets/quiz.png"
import sdcafe from "../assets/sdcafe.png"

const Projects = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const hiddenElements = document.querySelectorAll(".project-card");
    hiddenElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">
          Some of the work I’ve built using modern web technologies
        </p>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-image">
              <img className="imgg" src={portfolio} alt="portfolio" />
            </div>
            <h3>MERN Portfolio Website</h3>
            <p>
              A responsive portfolio built with React, Node.js, Express and
              MongoDB.
            </p>
            <div className="tech-stack">
              <span>React</span>
              <span>Node</span>
              <span>MongoDB</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Yomesh15/New_Portfolio" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://new-portfolio-frontend-mu.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image">
              <img className="imgg" src={sdcafe} alt="portfolio" />
            </div>
            <h3>Business Website</h3>
            <p>
              Modern business website with clean UI and responsive layout.
            </p>
            <div className="tech-stack">
              <span>React</span>
              <span>CSS</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Yomesh15/SD-Cafe-Restaurant" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://sd-cafe-restaurant.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-image">
              <img className="imgg" src={quiz} alt="portfolio" />
            </div>
            <h3>Quiz Game</h3>
            <p>
              Quiz Game with timer and Score creditor !
            </p>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Yomesh15/Quiz-Capstone-Project" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://yomesh15.github.io/Quiz-Capstone-Project/" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
