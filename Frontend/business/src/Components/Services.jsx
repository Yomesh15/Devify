import React, { useEffect } from "react";
import "../CSS/Services.css";
import { FaCode, FaLaptopCode, FaServer, FaPaintBrush } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

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

    document.querySelectorAll(".service-card").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleServiceClick = (service) => {
    navigate(`/services/${service}`);
  };

  return (
    <section className="services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          We provide modern, scalable, and high-quality digital solutions
        </p>

        <div className="services-grid">

          <div className="service-card" onClick={() => handleServiceClick("web-development")}>
            <FaLaptopCode className="service-icon" />
            <h3>Web Development</h3>
            <p>Modern, responsive websites using latest web technologies.</p>
          </div>

          <div className="service-card" onClick={() => handleServiceClick("mern-stack")}>
            <FaCode className="service-icon" />
            <h3>MERN Stack</h3>
            <p>Full-stack apps with React, Node, Express & MongoDB.</p>
          </div>

          <div className="service-card" onClick={() => handleServiceClick("backend-api")}>
            <FaServer className="service-icon" />
            <h3>Backend APIs</h3>
            <p>Secure, scalable REST APIs with authentication.</p>
          </div>

          <div className="service-card" onClick={() => handleServiceClick("ui-ux-design")}>
            <FaPaintBrush className="service-icon" />
            <h3>UI / UX Design</h3>
            <p>Clean, user-friendly designs focused on conversion.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
