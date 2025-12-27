import React, { useEffect } from "react";
import "../CSS/Aboutus.css";
import { GiCheckMark } from "react-icons/gi";
import aboutImage from "../assets/about.jpg";

const About = () => {

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

    const hiddenElements = document.querySelectorAll(".about-left, .about-right");
    hiddenElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about">
      <div className="about-container">
        
        {/* Left: Image */}
        <div className="about-left">
          <img src={aboutImage} alt="About Us" />
        </div>

        {/* Right: Text Content */}
        <div className="about-right">
          <h2>About Us</h2>
          <p>
            At Devify, we are passionate about building modern, scalable, and innovative web solutions. Our mission is to help businesses grow in the digital era with creative and efficient technology.
          </p>

          <ul className="about-list">
            <li><GiCheckMark /> Clean & Scalable Code</li>
            <li><GiCheckMark /> Modern UI/UX Design</li>
            <li><GiCheckMark /> Full-Stack MERN Development</li>
            <li><GiCheckMark /> SEO Optimized Websites</li>
            <li><GiCheckMark /> Dedicated Support</li>
          </ul>

          <button className="btn">Contact Us</button>
        </div>

      </div>
    </section>
  );
};

export default About;
