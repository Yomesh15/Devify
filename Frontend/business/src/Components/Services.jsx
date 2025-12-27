import React, { useEffect } from "react";
import "../CSS/Services.css";
import { FaCode, FaLaptopCode, FaServer, FaPaintBrush } from "react-icons/fa";

const Services = () => {

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

    const hiddenElements = document.querySelectorAll(".service-card");
    hiddenElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          We provide modern, scalable, and high-quality digital solutions
        </p>

        <div className="services-grid">
          <div className="service-card">
            <FaLaptopCode className="service-icon" />
            <h3>Web Development</h3>
            <p>
              Modern, responsive websites using latest web technologies.
            </p>
          </div>

          <div className="service-card">
            <FaCode className="service-icon" />
            <h3>MERN Stack</h3>
            <p>
              Full-stack applications with React, Node, Express & MongoDB.
            </p>
          </div>

          <div className="service-card">
            <FaServer className="service-icon" />
            <h3>Backend APIs</h3>
            <p>
              Secure, scalable REST APIs with authentication & databases.
            </p>
          </div>

          <div className="service-card">
            <FaPaintBrush className="service-icon" />
            <h3>UI / UX Design</h3>
            <p>
              Clean, user-friendly designs focused on conversion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
