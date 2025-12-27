import React, { useEffect } from "react";
import "../CSS/HowWork.css";

const HowWeWork = () => {

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

    const hiddenElements = document.querySelectorAll(".process-card");
    hiddenElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="process">
      <div className="process-container">
        <h2 className="process-title">How We Work</h2>
        <p className="process-subtitle">
          A simple and transparent process to bring your ideas to life
        </p>

        <div className="process-steps">
          <div className="process-card">
            <span className="step-number">01</span>
            <h3>Requirement Analysis</h3>
            <p>We understand your goals and project requirements.</p>
          </div>

          <div className="process-card">
            <span className="step-number">02</span>
            <h3>Planning & Design</h3>
            <p>We design user-friendly layouts and plan the architecture.</p>
          </div>

          <div className="process-card">
            <span className="step-number">03</span>
            <h3>Development</h3>
            <p>We build scalable and high-performance web solutions.</p>
          </div>

          <div className="process-card">
            <span className="step-number">04</span>
            <h3>Launch & Support</h3>
            <p>We deploy, test, and provide long-term support.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
