import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./appbar.css";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`nav_container ${scrolling ? "scrolled" : ""}`}>

        {/* LOGO */}
        <div className="logo_container">
          <img src="/bluegrowwake.png" alt="logo" width={150} />
        </div>

        {/* DESKTOP MENU */}
        <ul className="navbar_ul desktop_only">
          <li><Link to="/home" className="nav_list_link">Home</Link></li>
          <li><Link to="/about" className="nav_list_link">About</Link></li>

          {/* SERVICES DROPDOWN */}
          <li className="service_parent">
            <span className="nav_list_link">Services</span>

            <ul className="dropdown_menu">
              <li><Link to="/serviceOff/web-design">Web Design</Link></li>
              <li><Link to="/serviceOff/web-dev">Website Development</Link></li>
              <li><Link to="/serviceOff/SEOService">SEO Service</Link></li>
              <li><Link to="/serviceOff/SocialMediaMarketing">Social Media Marketing</Link></li>
              <li><Link to="/serviceOff/GraphicDesign">Graphic Design</Link></li>
              <li><Link to="/serviceOff/DigitalMarketing">Digital Marketing</Link></li>
            </ul>
          </li>

          {/* COURSES */}
          <li className="service_parent">
            <span className="nav_list_link">Courses</span>

            <ul className="dropdown_menu">
              <li><Link to="/services/inter/inter">Internship</Link></li>

              <li className="submenu">
                <span>Software Development</span>
                <ul className="submenu_list">
                  <li><Link to="/services/software/frontend">Frontend</Link></li>
                  <li><Link to="/services/software/backend">Backend</Link></li>
                  <li><Link to="/services/software/fullstack">Fullstack</Link></li>
                  <li><Link to="/services/software/testing">Software Testing</Link></li>
                  <li><Link to="/services/software/python">Python</Link></li>
                  <li><Link to="/services/software/mern">Mernstack</Link></li>
                </ul>
              </li>

              <li className="submenu">
                <span>Marketing</span>
                <ul className="submenu_list">
                  <li><Link to="/ui-ux">UI/UX</Link></li>
                  <li><Link to="/graphic-design">Graphic Design</Link></li>
                  <li><Link to="/multimedia">Multimedia</Link></li>
                </ul>
              </li>

              <li className="submenu">
                <span>Cloud</span>
                <ul className="submenu_list">
                  <li><Link to="/services/cloud/devs">DevOps</Link></li>
                  <li><Link to="/services/cloud/aws">AWS</Link></li>
                </ul>
              </li>

            </ul>
          </li>

          <li><Link to="/careers" className="nav_list_link">Careers</Link></li>
          <li><Link to="/milestone" className="nav_list_link">Milestone</Link></li>
          <li><Link to="/contact" className="nav_list_link">Contact</Link></li>
        </ul>

        {/* DESKTOP BUTTONS */}
        <div className="nav_right_cont desktop_only">
          <button className="button_text">
            <Link to="/register" className="nav_btn_link">Register</Link>
          </button>
          <button className="button_filled">
            <Link to="/placement" className="nav_btn_link">Placement</Link>
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <div
          className="hamburger_menu"
          onClick={() => {
            setMenuOpen(true);
            setSubmenuOpen(false);
          }}
        >
          <div className="hamburger"><span></span><span></span><span></span></div>
        </div>

      </nav>

      {/* MOBILE LEFT PANEL */}
      <div className={`mobile_left_panel ${menuOpen ? "show" : ""}`}>
        <ul>
          <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>

          {/* SERVICES MOBILE */}
          <li className="mobile_parent" onClick={() => setSubmenuOpen("services")}>
            Services ➜
          </li>

          {/* COURSES MOBILE */}
          <li className="mobile_parent" onClick={() => setSubmenuOpen("courses")}>
            Courses ➜
          </li>

          <li><Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link></li>
          <li><Link to="/milestone" onClick={() => setMenuOpen(false)}>Milestone</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link></li>
          <li><Link to="/placement" onClick={() => setMenuOpen(false)}>Placement</Link></li>
        </ul>
      </div>

      {/* MOBILE RIGHT PANEL */}
      <div className={`mobile_right_panel ${submenuOpen ? "show" : ""}`}>
        <div className="close_btn" onClick={() => setSubmenuOpen(false)}>← Back</div>

        <ul>
          {/* SERVICES SUBMENU */}
          {submenuOpen === "services" && (
            <>
              <li><Link to="/serviceOff/web-design">Web Design</Link></li>
              <li><Link to="/serviceOff/web-dev">Website Development</Link></li>
              <li><Link to="/serviceOff/SEOService">SEO Service</Link></li>
              <li><Link to="/serviceOff/SocialMediaMarketing">Social Media Marketing</Link></li>
              <li><Link to="/serviceOff/GraphicDesign">Graphic Design</Link></li>
              <li><Link to="/serviceOff/DigitalMarketing">Digital Marketing</Link></li>
            </>
          )}

          {/* COURSES SUBMENU */}
          {submenuOpen === "courses" && (
            <>
              <li><Link to="/services/inter/inter">Internship</Link></li>

              <li className="submenu_title">Software Development</li>
              <li><Link to="/services/software/frontend">Frontend</Link></li>
              <li><Link to="/services/software/backend">Backend</Link></li>
              <li><Link to="/services/software/fullstack">Fullstack</Link></li>
              <li><Link to="/services/software/testing">Software Testing</Link></li>
              <li><Link to="/services/software/python">Python</Link></li>
              <li><Link to="/services/software/mern">Mernstack</Link></li>

              <li className="submenu_title">Marketing</li>
              <li><Link to="/ui-ux">UI/UX</Link></li>
              <li><Link to="/graphic-design">Graphic Designing</Link></li>
              <li><Link to="/multimedia">Multimedia</Link></li>

              <li className="submenu_title">Cloud</li>
              <li><Link to="/services/cloud/devs">DevOps</Link></li>
              <li><Link to="/services/cloud/aws">AWS</Link></li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}
