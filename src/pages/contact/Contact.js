import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { contact_data } from "../../components/data/contact_data";
import "./contact.css";
import { TextField } from "@mui/material";
import Footer from "../../components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    setIsContentVisible(true);
    AOS.init({ duration: 1200, once: true });
    AOS.refreshHard();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2ogtwbb",
        "template_cgeo1um",
        form.current,
        "nLt8rdjbooPP-J5Az"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <>
      <Navbar />

      <div className={`contact_page fade-in ${isContentVisible ? "visible" : "hidden"}`}>
        
        <h1>We look forward to collaborating with you.</h1>

        <div className="contact_container">
          <h1 className="contact_heading" data-aos="fade-down">
            Contact Us
          </h1>

          <div className="contact_bar_container" data-aos="fade-up">
            <div className="contact_bar"></div>
            <div className="contact_circle"></div>
          </div>

          <div className="contact_main">
            {contact_data.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact_card"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="contact_icon">
                    <div className="contact_border_icon">
                      <IconComponent size={28} color="#4813ceff" />
                    </div>
                  </div>
                  <h2 className="contact_title">{contact.title}</h2>
                  <p className="contact_description">{contact.desc}</p>
                </a>
              );
            })}
          </div>
        </div>

        {/* ====== Newly added H2 section (correctly placed) ====== */}
        <div className="contact_det">
          <h2 className="contact_h2" data-aos="fade-down">
            Get In Touch With Us
          </h2>
          <div className="contact_bar_container" data-aos="fade-up">
            <div className="contact_bar"></div>
            <div className="contact_circle"></div>
          </div>
        </div>

        <div className="contactform_det">
          <div className="contact_form_left" data-aos="fade-down">
            <img src="contact_img.png" alt="contact" />
          </div>

          <div className="contact_form_right" data-aos="fade-up">
            <form ref={form} onSubmit={sendEmail}>
              <TextField
                name="name"
                label="Name*"
                variant="outlined"
                size="small"
                style={{ width: "450px", marginTop: "15px" }}
                required
              />

              <TextField
                name="email"
                label="Email*"
                type="email"
                variant="outlined"
                size="small"
                style={{ width: "450px", marginTop: "15px" }}
                required
              />

              <TextField
                name="phone"
                label="Phone*"
                variant="outlined"
                size="small"
                style={{ width: "450px", marginTop: "15px" }}
                required
              />

              <TextField
                name="job_role"
                label="Job Role*"
                variant="outlined"
                size="small"
                style={{ width: "450px", marginTop: "15px" }}
                required
              />

              <TextField
                name="message"
                label="Enter Your Message"
                variant="outlined"
                multiline
                rows={4}
                style={{ width: "450px", marginTop: "15px" }}
                required
              />

              <button type="submit" className="contact_btn">
                Send Message
              </button>
            </form>

            {status && <p className="status_text">{status}</p>}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
 