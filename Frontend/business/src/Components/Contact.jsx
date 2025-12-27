import React, { useState, useEffect } from "react";
import "../CSS/Contact.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending:", formData);


    try {
      const res = await axios.post("http://localhost:2006/api/contact", formData);

      if (res.data.success) {
        alert("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to sendd message ❌");
      }

    } catch (error) {
      console.error("Axios error:", error.response || error.message);
      alert("Failed to send message ❌");
    }
  };

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const el = document.querySelector(".contact-container");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>
          Have a project or want to collaborate? Drop me a message and I’ll get
          back to you.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p>Email: yomeshnagar2006@gmail.com</p>
          <p>Phone: 8955764235</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
