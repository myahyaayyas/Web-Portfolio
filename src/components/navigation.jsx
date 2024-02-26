// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    window.addEventListener("scroll", headerShadow);
    return () => {
      window.removeEventListener("scroll", headerShadow);
    };
  }, []);

  function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Portfolio</p>
        <span>.</span>
      </div>
      <div className={`nav-menu ${isMenuOpen ? "responsive" : ""}`} id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active-link" : ""}`}>
              Home
            </Link>
          </li>
          <li className="nav_list">
            <Link
              to="/profile"
              className={`nav-link ${location.pathname === "/profile" ? "active-link" : ""}`}
            >
              About Me
            </Link>
          </li>
          <li className="nav_list">
            <Link
              to="/projects"
              className={`nav-link ${location.pathname === "/projects" ? "active-link" : ""}`}
            >
              Projects
            </Link>
          </li>
          <li className="nav_list">
            <Link
              to="/contact"
              className={`nav-link ${location.pathname === "/contact" ? "active-link" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-button">
        <button className="btn">
          <Link to="https://www.cakeresume.com/yahya-ayyas-a8345f">Download CV</Link>
        </button>
      </div>
      <div className="nav-menu-btn" onClick={handleMenuClick}>
        ☰
      </div>
    </nav>
  );
}

export default Navigation;
