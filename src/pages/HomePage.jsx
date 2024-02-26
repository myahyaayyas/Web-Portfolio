/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import profile from "../../public/images/ayyas.jpg";

function HomePage() {
  React.useEffect(() => {
    let typingEffect = new Typed(".typedText", {
      strings: ["BackEnd Developer", "FrontEnd Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });

    return () => {
      typingEffect.destroy();
    };
  }, []);

  return (
    <section className="featured-box">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Muhammad Yahya Ayyas</span>
        </div>
        <div className="featured-name">
          <p>
            I{"'"}m <span className="typedText"></span>
          </p>
        </div>
        <div className="featured-text-info">
          <p>
            Experienced frontend developer with a passion for creating visually stunning and
            user-friendly websites.
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            <Link to="https://www.cakeresume.com/yahya-ayyas-a8345f">Download CV</Link>
          </button>
        </div>
        <div className="social_icons">
          <div className="icon">
            <Link to="https://www.instagram.com/yahya.ays/?hl=id">
              <FaInstagram />
            </Link>
          </div>
          <div className="icon">
            <Link to="https://www.linkedin.com/in/muhammad-yahya-ayyas-6b71a6276/">
              <FaLinkedin />
            </Link>
          </div>
          <div className="icon">
            <Link to="https://github.com/myahyaayyas">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={profile} alt="avatar" />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
