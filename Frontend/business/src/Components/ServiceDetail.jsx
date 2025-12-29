import React from "react";
import { useParams } from "react-router-dom";
import "../CSS/ServiceDetail.css";

const serviceData = {
    "web-development": {
        title: "Web Development",
        description: "We build fast, responsive, SEO-friendly websites.",
        points: ["React / HTML / CSS", "Mobile Responsive", "SEO Ready"],
    },
    "mern-stack": {
        title: "MERN Stack Development",
        description: "End-to-end full-stack applications.",
        points: ["React Frontend", "Node & Express Backend", "MongoDB Database"],
    },
    "backend-api": {
        title: "Backend API Development",
        description: "Secure and scalable REST APIs.",
        points: ["JWT Auth", "Role Based Access", "Cloud Ready"],
    },
    "ui-ux-design": {
        title: "UI / UX Design",
        description: "Clean designs focused on usability and conversions.",
        points: ["Figma Design", "User-Centered", "Modern UI"],
    },
};

const ServiceDetails = () => {
    const { serviceName } = useParams();
    const service = serviceData[serviceName];

    if (!service) return <h2>Service Not Found</h2>;

    return (
        <div className="service-details">
            <div className="service-details-content">
                <h1>{service.title}</h1>
                <p>{service.description}</p>

                <ul>
                    {service.points.map((item, index) => (
                        <li key={index}>✔ {item}</li>
                    ))}
                </ul>

                <button
                    className="cta-btn"
                    onClick={() =>
                        window.open(
                            `https://wa.me/918955764235?text=Hi%2C%20I%20am%20interested%20in%20${service.title}%20service.`,
                            "_blank"
                        )
                    }
                >
                    Get Free Consultation
                </button>

            </div>
        </div>

    );
};

export default ServiceDetails;
