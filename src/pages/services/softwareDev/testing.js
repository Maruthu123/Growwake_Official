import React from "react";

const SoftwareTestingCourse = () => {
  const styles = {
    page: {
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#ffffff",
      color: "#173a6e",
      minHeight: "100vh",
      padding: "20px 16px",
      boxSizing: "border-box",
    },
    container: {
      maxWidth: "1040px",
      margin: "0 auto",
      padding: "20px 18px 36px",
      display: "flex",
      flexDirection: "column",
      gap: "40px",
    },

    /* ---------------- HERO ---------------- */
    hero: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "24px",
      padding: "34px 22px",
      boxShadow: "0 4px 24px rgba(60,120,220,0.12)",
      gap: "24px",
      flexWrap: "wrap",
      background: "linear-gradient(135deg, #6aa9ff, #3e7bff)",
      color: "#07294e",
    },
    heroText: {
      flex: "1 1 320px",
      maxWidth: "620px",
    },
    heroH1: {
      fontSize: "2.25rem",
      fontWeight: 700,
      marginBottom: "12px",
      lineHeight: 1.08,
      color: "#031a3a",
    },
    heroP: {
      fontSize: "1.04rem",
      marginBottom: "14px",
      lineHeight: 1.55,
      color: "#072a4b",
    },
    heroImageContainer: {
      flex: "1 1 250px",
      display: "flex",
      justifyContent: "center",
      maxWidth: "360px",
    },
    heroImage: {
      width: "100%",
      maxWidth: "320px",
      borderRadius: "20px",
      boxShadow: "0 8px 36px rgba(62,123,255,0.18)",
      objectFit: "cover",
    },

    /* ---------------- SECTIONS ---------------- */
    section: {
      backgroundColor: "#f3f8ff",
      borderRadius: "20px",
      padding: "30px 24px",
      boxShadow: "0 4px 20px rgba(60,110,220,0.06)",
      color: "#173a6e",
    },
    sectionHead: {
      fontSize: "1.5rem",
      fontWeight: 700,
      marginBottom: "20px",
      textAlign: "center",
      color: "#2e63d6",
    },

    /* ---------------- GRID / CARDS ---------------- */
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: "18px",
    },
    card: {
      backgroundColor: "#e7f2ff",
      borderRadius: "14px",
      padding: "16px 14px",
      fontSize: "0.98rem",
      color: "#153a6a",
      fontWeight: 500,
      boxShadow: "0 3px 14px rgba(60,120,220,0.06)",
    },

    /* ---------------- IMAGE CARDS ---------------- */
    objGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(225px, 1fr))",
      gap: "22px",
    },
    objCard: {
      backgroundColor: "#eaf6ff",
      borderRadius: "16px",
      padding: "18px 16px",
      boxShadow: "0 5px 18px rgba(60,120,220,0.06)",
      textAlign: "left",
      color: "#13345a",
    },
    objImg: {
      width: "100%",
      height: "120px",
      objectFit: "cover",
      borderRadius: "12px",
      marginBottom: "12px",
      boxShadow: "0 2px 12px rgba(60,120,220,0.08)",
    },

    /* ---------------- CTA / CERT ---------------- */
    certSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px",
      backgroundColor: "#e9f3ff",
      borderRadius: "18px",
      padding: "32px 22px",
      boxShadow: "0 6px 26px rgba(62,123,255,0.06)",
      color: "#133d6a",
    },
    certRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "24px",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      maxWidth: "920px",
    },
    certBlurb: {
      maxWidth: "560px",
      fontSize: "1.02rem",
      fontWeight: 500,
    },

    /* ---------------- CAREER ---------------- */
    careerGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "18px",
    },
    careerCard: {
      backgroundColor: "#dfeeff",
      borderRadius: "14px",
      padding: "14px",
      color: "#0f355f",
      boxShadow: "0 3px 12px rgba(60,120,220,0.04)",
    },

    /* ---------------- FAQ ---------------- */
    faqSection: {
      backgroundColor: "#eef6ff",
      borderRadius: "16px",
      padding: "22px 18px",
      marginTop: "12px",
    },
    faqDetails: {
      background: "#dff0ff",
      borderRadius: "12px",
      marginBottom: "12px",
      padding: "12px 16px",
      fontSize: "1rem",
      color: "#103358",
    },

    /* ---------------- ENQUIRE CTA ---------------- */
    enquireSection: {
      textAlign: "center",
      marginTop: "20px",
    },
    enquireCard: {
      background: "linear-gradient(135deg, #6aa9ff, #3e7bff)",
      boxShadow: "0 10px 40px rgba(62,123,255,0.16)",
      borderRadius: "22px",
      padding: "36px 28px",
      color: "#fff",
      display: "inline-block",
    },
    animatedBtn: {
      background: "linear-gradient(270deg, #3e7bff, #6aa9ff)",
      backgroundSize: "400% 400%",
      animation: "gradientMove 12s ease-in-out infinite",
      padding: "14px 36px",
      borderRadius: "20px",
      color: "#fff",
      fontWeight: 700,
      textDecoration: "none",
      display: "inline-block",
      marginTop: "8px",
    },
  };

  return (
    <div style={styles.page}>
      <main style={styles.container}>

        {/* ---------------- HERO ---------------- */}
        <header style={styles.hero}>
          <div style={styles.heroText}>
            <h1 style={styles.heroH1}>
              Accelerate Your Career: The Growwake Advantage in Software Testing in Trichy
            </h1>

            <p style={styles.heroP}>
              No.1 Software Testing Course in Trichy — Growwake Institute offers practical,
              real-time Software Testing training covering Manual & Automation testing,
              ISTQB prep, flexible batches and focused placement support.
            </p>

            <a href="#enquire" style={styles.animatedBtn}>Enquire Now</a>
          </div>

          <div style={styles.heroImageContainer}>
            <img
              style={styles.heroImage}
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=800&q=60"
              alt="Software testing training"
            />
          </div>
        </header>

        {/* ---------------- INTRO / WHY ---------------- */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Why Learn Software Testing at Growwake?</h2>

          <div style={styles.grid}>
            {[
              "Global standard curriculum designed by industry experts.",
              "Decade-spanning expert instruction with real-time trainers.",
              "ISTQB & certification readiness built into the syllabus.",
              "Smart classroom — practical labs with regular recap sessions.",
              "Flexible batch options: Weekday / Weekend / Fast-track.",
              "Corporate network: partnerships with 30+ companies.",
              "Dedicated career cell with placement assistance.",
              "Affordable training with high learning value."
            ].map((text, i) => (
              <div key={i} style={styles.card}>{text}</div>
            ))}
          </div>
        </section>

        {/* ---------------- WHAT YOU LEARN ---------------- */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Course Coverage & Key Topics</h2>

          <div style={styles.objGrid}>
            <div style={styles.objCard}>
              <img
                src="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&w=900&q=60"
                alt="Manual testing"
                style={styles.objImg}
              />
              <h3>Manual Testing</h3>
              <p>
                Manual testing simulates a real user — ideal for assessing usability, UX and exploratory testing.
                It covers test case design, defect reporting, test execution, STLC/SDLC and hands-on practice.
              </p>
            </div>

            <div style={styles.objCard}>
              <img
                src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&w=900&q=60"
                alt="Automation testing"
                style={styles.objImg}
              />
              <h3>Automation Testing</h3>
              <p>
                Automation uses tools and scripts (e.g., Selenium) for fast, repeatable tests — perfect for regression across environments.
                Learn scripting, frameworks, CI integration, and test automation best practices.
              </p>
            </div>

            <div style={styles.objCard}>
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=900&q=60"
                alt="ISTQB certification"
                style={styles.objImg}
              />
              <h3>Certification & Tools</h3>
              <p>
                Focused ISTQB concepts, practical tool usage (Postman, JIRA, Selenium), reporting, test management and industry best practices.
              </p>
            </div>

            <div style={styles.objCard}>
              <img
                src="https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg?auto=compress&w=900&q=60"
                alt="Real time projects"
                style={styles.objImg}
              />
              <h3>Real-Time Projects</h3>
              <p>
                Build portfolio-ready projects replicating industry workflows — from requirement analysis to release testing and reporting.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- CERTIFICATION ---------------- */}
        <section style={styles.certSection}>
          <h2 style={styles.sectionHead}>Software Testing Certification Training</h2>

          <div style={styles.certRow}>
            <div style={styles.certBlurb}>
              <p>
                Growwake issues an industry-relevant Software Testing Certificate on successful completion of live projects and assessments.
                As a placement-focused program, the certificate helps you demonstrate practical testing skills to recruiters.
              </p>

              <ul style={{ marginTop: 12 }}>
                <li>Project-based assessments & code/reports</li>
                <li>Portfolio-ready deliverables for interviews</li>
                <li>Resume & mock-interview support</li>
              </ul>
            </div>

            <img
              src="https://images.pexels.com/photos/1181583/pexels-photo-1181583.jpeg?auto=compress&w=700&q=60"
              alt="certificate"
              style={{ width: 240, borderRadius: 12 }}
            />
          </div>
        </section>

        {/* ---------------- CAREER PATH ---------------- */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Your Future in Software Testing</h2>

          <p style={{ lineHeight: 1.7 }}>
            Software testing is a high-growth field across industries — QA professionals are essential across healthcare, retail, finance, manufacturing and more.
            The market demand for testing skills continues to rise, and certified testers have strong opportunities in Trichy and beyond.
          </p>

          <div style={{ marginTop: 16, ...styles.careerGrid }}>
            {[
              { title: "Software Tester", desc: "Manual & Automation testing roles." },
              { title: "Automation Engineer", desc: "Build automation frameworks and CI integrations." },
              { title: "API Tester", desc: "Test backend services and integrations." },
              { title: "Performance Tester", desc: "Load testing and performance validation." },
              { title: "QA Lead / Test Architect", desc: "Design test strategies and lead QA teams." },
            ].map((r, i) => (
              <div key={i} style={styles.careerCard}>
                <h3 style={{ marginTop: 0 }}>{r.title}</h3>
                <p style={{ margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- WHY GROWTH / MARKET ---------------- */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Why This Field is Exploding</h2>
          <p style={{ lineHeight: 1.7 }}>
            Digital transformation is everywhere — almost every industry needs reliable software. Demand for skilled QA professionals is increasing rapidly.
            Getting certified now (especially with practical experience) positions you to enter a growing $50B+ market and benefit from stable, well-paid roles.
          </p>
        </section>

        {/* ---------------- TRAINERS ---------------- */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Our Trainers: Experts Ready to Guide You</h2>

          <div style={styles.grid}>
            {[
              "Real-world experts with 8+ years of industry experience.",
              "Project masters — completed many complex testing projects.",
              "Proven mentors — trained 55+ batches with strong outcomes.",
              "Personal help — one-on-one mentorship & career advice.",
              "Placement-ready — resume and interview support included.",
            ].map((t, i) => (
              <div key={i} style={styles.card}>{t}</div>
            ))}
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section style={styles.faqSection}>
          <h2 style={styles.sectionHead}>FAQ — Software Testing Course</h2>

          {[
            {
              q: "What is software testing?",
              a: "Evaluating software to find defects and ensure it meets requirements and quality standards.",
            },
            {
              q: "Is software testing a good career choice?",
              a: "Yes — it offers stability, good pay and diverse growth paths (automation, performance, QA lead).",
            },
            {
              q: "Course duration?",
              a: "Varies by program — usually between 1 to 6 months depending on the coverage (manual/automation/full-stack testing).",
            },
            {
              q: "Do you provide placement support?",
              a: "Yes — Growwake provides placement assistance for eligible students including mock interviews and resume help.",
            },
            {
              q: "How to register?",
              a: "Contact Growwake via website, phone or visit the Trichy office to enroll.",
            },
            {
              q: "What payment methods are accepted?",
              a: "Typically cash, card and online bank/UPI; confirm current options with the institute.",
            },
          ].map((f, i) => (
            <details key={i} style={styles.faqDetails}>
              <summary style={{ fontWeight: 700 }}>{f.q}</summary>
              <p style={{ margin: "8px 0 0" }}>{f.a}</p>
            </details>
          ))}
        </section>

        {/* ---------------- ENQUIRE CTA ---------------- */}
        <section style={styles.enquireSection} id="enquire">
          <div style={styles.enquireCard}>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700 }}>
              Start Your Software Testing Career — Enquire Now
            </h3>

            <p style={{ fontSize: "1rem", marginTop: 8 }}>
              Reach out for syllabus, fee structure, batch timings and placement details.
            </p>

            <a href="/register" style={styles.animatedBtn}>Enquire Now</a>
          </div>
        </section>

      </main>

      {/* gradient animation keyframes */}
      <style>{`
        @keyframes gradientMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* small responsiveness tweak */
        @media (max-width: 760px) {
          .heroImage { display: none; }
        }
      `}</style>
    </div>
  );
};

export default SoftwareTestingCourse;
