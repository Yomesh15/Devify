import React from 'react';
import hero from '../assets/hero.jpg';
import "../CSS/Hero.css";
import { GiLotusFlower } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Hero = () => {

    const handleWhatsApp = () => {
        const phoneNumber = "918955764235"; // Your WhatsApp number in international format
        const message = "Hello Yomesh, I want to hire you for a project!";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank"); // Opens WhatsApp in new tab
    };

    return (
        <div className='hero'>
            <div className="flower left"><GiLotusFlower /></div>

            <div className="left">
                <span className="heading">
                    Grow your business with <br /> our digital solutions
                </span>
                <span className="desc">
                    We provide innovative tech solutions to help your business thrive in the digital age. From web development to digital marketing, we've got you covered.
                </span>

                <button className="btn" onClick={handleWhatsApp}>
                    Get Started
                </button>
                <Link to="/services">
                    <button className="btnservices">View Services</button>
                </Link>
            </div>

            <div className="right">
                <img src={hero} alt="heroimage" />
            </div>
        </div>
    );
}

export default Hero;
