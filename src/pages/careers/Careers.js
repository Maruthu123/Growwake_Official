import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./career.css";
import { TextField } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

const JOBS = [
  {
    id: 1,
    title: "Business Development Executive",
    summary: "Drive business growth by identifying leads, building relationships and closing sales.",
    enumContent: [
      "Identify & qualify new business opportunities.",
      "Build and maintain client relationships.",
      "Conduct sales presentations and demos.",
      "Coordinate with delivery teams to ensure client satisfaction.",
      "Report weekly progress and pipeline to management."
    ],
    details: [
      "Company: GrowWake Pvt Ltd",
      "Location: Trichy",
      "Job Type: Full-time, Permanent",
      "Experience: 1 to 2 Years",
      "Salary: INR 10,000 - 15,000 / month",
      "Vacancies: 10"
    ]
  },
  {
    id: 2,
    title: "Field Officer",
    summary: "Work on-ground to support outreach, student registrations and campus coordination.",
    enumContent: [
      "Coordinate local outreach activities and events.",
      "Visit colleges, coaching centers and local partners.",
      "Maintain local enrollment records and follow-ups.",
      "Collect feedback and provide field reports.",
      "Support placement drives and employer visits."
    ],
    details: [
      "Company: GrowWake Pvt Ltd",
      "Location: Trichy / Regional",
      "Job Type: Full-time, Permanent",
      "Experience: 1 to 3 Years ",
      "Salary: INR 10,000 - 16,000 / month + travel allowance",
      "Vacancies: 5"
    ]
  },
  {
    id: 3,
    title: "React Developer",
    summary: "Develop modern React applications, components and collaborate with backend engineers.",
    enumContent: [
      "Build and maintain React components and pages.",
      "Implement responsive UI using modern CSS and frameworks.",
      "Integrate with REST APIs and real-time data sources.",
      "Write unit tests and participate in code reviews.",
      "Optimize application performance for production."
    ],
    details: [
      "Company: GrowWake Pvt Ltd",
      "Location: Trichy (or Remote)",
      "Job Type: Full-time, Permanent",
      "Experience: 1 Years",
      "Salary: INR 10,000 - 15,000 / month",
      "Vacancies: 2"
    ]
  }
];

export default function Careers() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [openId, setOpenId] = useState(null);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    setIsContentVisible(true);
    AOS.init({ duration: 900, once: true });
    AOS.refresh();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show_scroll");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".scroll_section").forEach((el) => observer.observe(el));
  }, []);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formEl = formRef.current;
    const name = formEl.querySelector('[name="name"]').value.trim();
    const email = formEl.querySelector('[name="email"]').value.trim();
    const phone = formEl.querySelector('[name="phone"]').value.trim();
    const job_role = formEl.querySelector('[name="job_role"]').value;
    const resumeInput = formEl.querySelector('[name="attachment"]');

    if (!name || !email || !phone || !job_role) {
      setStatus("Please fill all required fields.");
      return;
    }

    if (!resumeInput || !resumeInput.files || resumeInput.files.length === 0) {
      setStatus("Please attach your resume (PDF/DOC).");
      return;
    }

    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_2ogtwbb",   // replace if your service id differs
        "template_cgeo1um",  // replace if your template id differs
        formEl,
        "nLt8rdjbooPP-J5Az"  // replace with your user ID if different
      )
      .then(
        () => {
          setStatus("✅ Application sent successfully!");
          formEl.reset();
          setTimeout(() => setStatus(""), 6000);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("❌ Failed to send. Try again later.");
        }
      );
  };

  return (
    <>
      <Navbar />

      <div className={`career_page ${isContentVisible ? "visible" : "hidden"}`}>
        {/* Banner header with Current Openings text */}
        <section
          className="careerbanner_section first_banner show_banner"
          style={{
            backgroundImage: `url('/mnt/data/Screenshot 2025-11-25 144538.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="careerbanner_left">
            <h1 className="careerbanner_h1">Current Openings</h1>
            <p className="careerbanner_p">
              If you think you have plenty to contribute to our company and wish to join our team — apply now.
            </p>
          </div>
        </section>

        {/* Main content */}
        <div className="career_container">
          <h2 className="career_h2">Open Positions</h2>

          <div className="career_main" data-aos="fade-up">
            {/* LEFT: Accordion job list */}
            <div className="career_left" style={{ width: "62%", maxWidth: 760 }}>
              <div className="accordion_wrap">
                {JOBS.map((job) => (
                  <div key={job.id} className={`accordion_item ${openId === job.id ? "open" : ""}`}>
                    <button
                      className="accordion_button"
                      onClick={() => toggleAccordion(job.id)}
                      aria-expanded={openId === job.id}
                    >
                      <span className="acc_icon">{openId === job.id ? "−" : "+"}</span>
                      <span className="acc_title">{job.title}</span>
                    </button>

                    <div
                      className="accordion_content"
                      style={{ display: openId === job.id ? "block" : "none" }}
                    >
                      <p style={{ fontWeight: 600, marginBottom: 8 }}>{job.summary}</p>

                      {/* Enumerated content */}
                      <ol className="job_enum">
                        {job.enumContent.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ol>

                      <ul className="job_details_list">
                        {job.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>

                      <p className="job_paragraph">
                        At GrowWake Pvt Ltd, we welcome curious, driven candidates who can contribute to growth and learning culture.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Application form */}
            <div className="career_right" style={{ width: "38%", maxWidth: 420 }}>
              <div className="apply_card" data-aos="fade-left">
                <h3 style={{ color: "#4b0082", marginBottom: 8 }}>Apply Now</h3>

                <form ref={formRef} onSubmit={sendEmail} className="apply_form" encType="multipart/form-data">
                  {/* Ensure the EmailJS template is set to send to this address or read this variable */}
                  <input type="hidden" name="to_email" value="growwakeofficial@gmail.com" />

                  <TextField name="name" label="Name*" variant="outlined" size="small" fullWidth required style={{ marginBottom: 12 }} />
                  <TextField name="email" label="Email*" type="email" variant="outlined" size="small" fullWidth required style={{ marginBottom: 12 }} />
                  <TextField name="phone" label="Mobile Number*" variant="outlined" size="small" fullWidth required style={{ marginBottom: 12 }} />

                  <div style={{ marginBottom: 12 }}>
                    <label style={{ display: "block", marginBottom: 6, fontWeight: 600 }}>Job Role</label>
                    <select name="job_role" required style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #ddd" }}>
                      <option value="">Select job role</option>
                      {JOBS.map((j) => <option key={j.id} value={j.title}>{j.title}</option>)}
                    </select>
                  </div>

                  <div style={{ marginBottom: 12 }}>
                    <label style={{ display: "block", marginBottom: 6, fontWeight: 600 }}>Choose File (Resume)</label>
                    {/* Name MUST be 'attachment' for EmailJS sendForm to include the file */}
                    <input name="attachment" type="file" accept=".pdf,.doc,.docx" required />
                  </div>

                  <TextField name="message" label="Message" variant="outlined" multiline rows={4} fullWidth style={{ marginBottom: 12 }} />

                  <button type="submit" className="career_btn">Submit Application</button>
                </form>

                {status && <p className="status_text" style={{ marginTop: 12 }}>{status}</p>}
              </div>
            </div>
          </div>

          {/* Why join / details */}
          <div className="career_details" data-aos="fade-up">
            <h3 className="career_det_h2">Why join GrowWake?</h3>
            <div className="career_details_container">
              <div className="career_det_left">
                <img src="/mission_img.png" alt="why join" />
              </div>
              <div className="career_det_right">
                <div className="career_det_right_content">
                  <h5 className="career_det_h5">Grow with real projects</h5>
                  <p style={{ maxWidth: 600 }}>
                    Work on live projects, get mentorship from industry experts and gain skills that directly translate to career growth.
                  </p>
                  <span>Open positions are updated regularly — apply today!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
