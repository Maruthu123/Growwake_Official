import React, { useState } from 'react';
import './footer.css';
import {
  FaFacebook, FaXTwitter, FaInstagram, FaLinkedin,
  FaLocationDot, FaSquarePhone, FaWhatsapp
} from 'react-icons/fa6';
import { IoMdMail } from "react-icons/io";
import { Grid } from '@mui/material';

function Footer() {
  const [activeLink, setActiveLink] = useState(''); // holds currently active nav
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <div className='footer_wrapper'>
      <div className='footer_content'>
        <Grid container rowSpacing={4} columnSpacing={5.5} justifyContent={"center"}>
          {/* LOGO SECTION */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className='footer_contact'>
              <img src='bluegrowwake.png' width={200} alt="Logo" />
            </div>
          </Grid>

          {/* CONTACT US SECTION */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className='footer_contact'>
              <h2>Contact Us</h2>
              <p>
                <a href="https://www.google.com/maps/place/GROWWAKE+PVT+LTD/@10.7679076,78.6829815,19z/data=!4m6!3m5!1s0x3baaf5001d01ee47:0x9ebe4eb9ff229b5a!8m2!3d10.7679073!4d78.6835439!16s%2Fg%2F11m5gpsyzy?entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer_link"
                >
                  <FaLocationDot className='footer_icon' style={{ marginRight: "6px" }} />
                  KK Nagar Trichy - 620008
                </a>
              </p>
              <p>
                <a href="tel:+918778612248" className="footer_link">
                  <FaSquarePhone style={{ marginRight: "6px" }} />
                  +91 93441 36610
                </a>
              </p>
              <p>
                <a href="mailto:growwakeofficial@gmail.com?subject=Enquiry&body=Hello%20Growwake%20Team,"
                  className="footer_link"
                >
                  <IoMdMail style={{ marginRight: "6px" }} />
                  growwakeofficial@gmail.com
                </a>
              </p>
            </div>
          </Grid>

          {/* QUICK LINKS SECTION */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className='footer_contact'>
              <h2>QUICK NAVIGATION</h2>
              <p>
                <a
                  href="/"
                  className={`footer_link nav-link ${activeLink === 'home' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('home')}
                >
                  Home
                </a>
              </p>
              <p>
                <a
                  href="/about"
                  className={`footer_link nav-link ${activeLink === 'about' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('about')}
                >
                  About Us
                </a>
              </p>
              <p>
                <a
                  href="/services"
                  className={`footer_link nav-link ${activeLink === 'services' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('services')}
                >
                  Services
                </a>
              </p>
              <p><a href="/careers" className="footer_link">Careers</a></p>
              <p><a href="/contact" className="footer_link">Contact Us</a></p>
              <p><a href="/terms" className="footer_link">Terms and Conditions</a></p>
              <p><a href="/privacy" className="footer_link">Privacy Policy</a></p>
            </div>
          </Grid>

          {/* FEEDBACK SECTION */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className='footer_contact'>
              <h2>FEEDBACK</h2>
              <p>
                <a
                  href="https://wa.me/919344136610?text=Hello%20Growwake%20Team%2C%20I%20have%20a%20question..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer_link whatsapp-link"
                  onClick={(e) => e.currentTarget.classList.add('clicked')}
                >
                  <FaWhatsapp className="whatsapp-icon" />
                  <span className="whatsapp-text">+91 93441 36610</span>
                </a>
              </p>

              <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center' }}>
                <a href="https://www.facebook.com/share/16cR8SteXR/" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaFacebook className="social-icon" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaXTwitter className="social-icon" />
                </a>
                <a href="https://www.instagram.com/growwake_official?igsh=MWduY3F2dmF1djNlMw==" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaInstagram className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/company/growwake-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaLinkedin className="social-icon" />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <p className='copy'>© 2025 Grow wake Pvt Ltd. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
