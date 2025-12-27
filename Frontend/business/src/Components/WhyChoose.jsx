import React, { useEffect } from "react";
import "../CSS/WhyChoose.css";
import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
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

    const hiddenElements = document.querySelectorAll(".why-left, .why-right, .stat-card");
    hiddenElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why">
      <div className="why-container">
        
        {/* Left Content */}
        <div className="why-left">
          <h2>Why Choose Us</h2>
          <p>
            We help businesses grow with high-quality, scalable and modern web
            solutions tailored to their needs.
          </p>

          <ul className="why-list">
            <li><FaCheckCircle /> Clean & Scalable Code</li>
            <li><FaCheckCircle /> Fully Responsive Design</li>
            <li><FaCheckCircle /> Modern MERN Stack</li>
            <li><FaCheckCircle /> Fast Delivery</li>
            <li><FaCheckCircle /> SEO Friendly Websites</li>
            <li><FaCheckCircle /> Long-Term Support</li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="why-right">
          <div className="stat-card">
            <h3>10+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-card">
            <h3>1+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
