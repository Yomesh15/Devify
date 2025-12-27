import React, { useEffect } from "react";
import "../CSS/CTA.css";
import { Link } from "react-router-dom";

const CTA = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const hiddenElements = document.querySelectorAll(".cta-container");
    hiddenElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta">
      <div className="cta-container">
        <h2>Let’s Build Something Great Together</h2>
        <p>
          Have a project in mind or looking for a skilled web developer?
          I’m ready to help you turn your ideas into reality.
        </p>

        <div className="cta-buttons">
          <Link to="/contact" className="btn primary">
            Contact Me
          </Link>
          
          <a href="https://github.com/Yomesh15" target="_blank" rel="noreferrer" className="btn secondary">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
