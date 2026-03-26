import React from "react";

const UiUx = () => {
  const styles = {
    page: {
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#ffffff",
      color: "#3a2a6e",
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

    /* ---------------- HERO SECTION ---------------- */
    hero: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "24px",
      padding: "34px 22px",
      boxShadow: "0 4px 24px rgba(90, 60, 180, 0.2)",
      gap: "24px",
      flexWrap: "wrap",
      background: "linear-gradient(135deg, #b3a3ff, #8d7bff)",
      color: "#2c1f6f",
    },
    heroText: {
      flex: "1 1 320px",
      maxWidth: "520px",
    },
    heroH1: {
      fontSize: "2.25rem",
      fontWeight: 700,
      marginBottom: "16px",
      lineHeight: 1.1,
      color: "#2f277f",
    },
    heroP: {
      fontSize: "1.06rem",
      marginBottom: "18px",
      lineHeight: 1.55,
      color: "#3a307a",
    },
    heroImageContainer: {
      flex: "1 1 250px",
      display: "flex",
      justifyContent: "center",
      maxWidth: "350px",
    },
    heroImage: {
      width: "100%",
      maxWidth: "320px",
      borderRadius: "20px",
      boxShadow: "0 7px 30px rgba(141, 119, 255, 0.5)",
      objectFit: "cover",
    },

    /* ---------------- SECTIONS ---------------- */
    section: {
      backgroundColor: "#f7f8ff",
      borderRadius: "20px",
      padding: "30px 24px",
      boxShadow: "0 4px 20px rgba(140, 130, 230, 0.2)",
      color: "#362e70",
    },
    sectionHead: {
      fontSize: "1.5rem",
      fontWeight: 700,
      marginBottom: "20px",
      textAlign: "center",
      color: "#5a4fcf",
    },

    /* ---------------- HIGHLIGHTS ---------------- */
    highlightGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: "20px",
    },
    highlightCard: {
      backgroundColor: "#dedcff",
      borderRadius: "14px",
      padding: "16px 14px",
      fontSize: "1rem",
      color: "#3a2e70",
      fontWeight: "500",
      boxShadow: "0 3px 15px rgba(120, 110, 250, 0.15)",
    },

    /* ---------------- OBJECTIVES ---------------- */
    objGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(225px, 1fr))",
      gap: "22px",
    },
    objCard: {
      backgroundColor: "#e5e3ff",
      borderRadius: "16px",
      padding: "18px 16px",
      boxShadow: "0 5px 22px rgba(120, 115, 255, 0.2)",
      textAlign: "center",
      color: "#322d69",
    },
    objCardImg: {
      width: "90%",
      height: "90px",
      objectFit: "cover",
      borderRadius: "15px",
      marginBottom: "12px",
      boxShadow: "0 2px 12px rgba(130, 110, 255, 0.4)",
    },

    /* ---------------- CERTIFICATION ---------------- */
    certSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "28px",
      backgroundColor: "#e7e6ff",
      borderRadius: "18px",
      padding: "36px 28px",
      boxShadow: "0 6px 28px rgba(130, 120, 255, 0.24)",
      color: "#3c327a",
    },
    certPlacement: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "32px",
      width: "100%",
      maxWidth: "900px",
    },
    certBlurb: {
      maxWidth: "480px",
      fontSize: "1.04rem",
      fontWeight: "500",
      color: "#312e6f",
    },

    /* ---------------- CAREER PATH ---------------- */
    careerSection: {
      backgroundColor: "#e3e2ff",
      color: "#311f74",
      borderRadius: "18px",
      padding: "28px 24px",
      boxShadow: "0 4px 20px rgba(102, 90, 235, 0.18)",
    },
    careerGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(225px, 1fr))",
      gap: "24px",
      marginTop: "16px",
    },
    careerCard: {
      backgroundColor: "#cdc9fd",
      borderRadius: "14px",
      padding: "16px 14px",
      color: "#3a277f",
    },

    /* ---------------- FAQ ---------------- */
    faqSection: {
      backgroundColor: "#e9e7ff",
      borderRadius: "16px",
      padding: "26px 20px",
      marginTop: "24px",
    },
    faqDetails: {
      background: "#cbcafd",
      borderRadius: "12px",
      marginBottom: "12px",
      padding: "14px 18px",
      fontSize: "1rem",
      color: "#3a2987",
    },

    /* ---------------- ENQUIRE CTA ---------------- */
    enquireSection: {
      textAlign: "center",
      marginTop: "40px",
    },
    enquireCard: {
      background: "linear-gradient(135deg, #a29eff, #7d6dff)",
      boxShadow: "0 8px 36px rgba(102, 86, 255, 0.45)",
      borderRadius: "22px",
      padding: "38px 26px",
      color: "#f3f0ff",
      display: "inline-block",
    },
    animatedBtn: {
      background: "linear-gradient(270deg, #6d34e1, #45abff, #5535ff, #7e5bff)",
      backgroundSize: "400% 400%",
      animation: "gradientMove 12s ease-in-out infinite",
      padding: "16px 44px",
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

        {/* ---------------- HERO SECTION ---------------- */}
        <header style={styles.hero}>
          <div style={styles.heroText}>
            <h1 style={styles.heroH1}>Best UI/UX Designing Course in Trichy</h1>

            <p style={styles.heroP}>
              Become a professional UI/UX Designer with Growwake’s industry-oriented
              training. Learn user research, wireframing, prototyping, design thinking,
              mobile & web UI design, and get placement support with real design projects.
            </p>

            <a href="#enquire" style={styles.animatedBtn}>Enquire Now</a>
          </div>

          <div style={styles.heroImageContainer}>
            <img
              style={styles.heroImage}
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="UI UX Designer working"
            />
          </div>
        </header>

        {/* ---------------- HIGHLIGHTS ---------------- */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>
            Why Choose UI/UX Designing at Growwake?
          </h2>

          <div style={styles.highlightGrid}>
            {[
              "Learn Figma, Adobe XD, Photoshop & Illustrator.",
              "Master Wireframes, User Flows & Design Systems.",
              "Design Thinking Process + Real-Time Industry Projects.",
              "Mobile App UI & Web UI Expertise.",
              "User Research, Persona Creation, Usability Testing.",
              "Portfolio Building Support.",
              "1-to-1 Mentorship With UI/UX Experts.",
              "100% Placement Assistance + Resume & Interview Prep.",
            ].map((text, i) => (
              <div key={i} style={styles.highlightCard}>{text}</div>
            ))}
          </div>
        </section>

        {/* ---------------- OBJECTIVES ---------------- */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>What You Will Learn</h2>

          <div style={styles.objGrid}>
            {[
              {
                img: "https://images.pexels.com/photos/4348400/pexels-photo-4348400.jpeg",
                title: "Figma & Adobe XD",
                desc: "Master modern UI design tools used by top companies."
              },
              {
                img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
                title: "User Research",
                desc: "Learn personas, user journey mapping & behavioral insights."
              },
              {
                img: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg",
                title: "Wireframing & Prototyping",
                desc: "Create interactive prototypes & low-fidelity structures."
              },
              {
                img: "https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg",
                title: "Mobile & Web UI Design",
                desc: "Design responsive screens using grids, spacing & components."
              },
              {
                img: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
                title: "Usability Testing",
                desc: "Test UI with real users & optimize the visual experience."
              },
            ].map((item, idx) => (
              <div key={idx} style={styles.objCard}>
                <img src={item.img} style={styles.objCardImg} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- CERTIFICATION ---------------- */} 
        <section style={styles.certSection}>
          <h2 style={styles.sectionHead}>UI/UX Designer Certification</h2>

          <div style={styles.certPlacement}>
            <div style={styles.certBlurb}>
              <p>
                Growwake offers a professional UI/UX Designer Certification after
                completing assessments, projects, and app/web UI design tasks.
                This certification boosts your career and builds trust with employers.
              </p>

              <ul>
                <li>Live UI/UX Projects</li>
                <li>Portfolio & Case Study Guidance</li>
                <li>Placement Training & Career Coaching</li>
              </ul>
            </div>

            <img
              src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
              alt="Certification"
              style={{ width: "250px", borderRadius: "16px" }}
            />
          </div>
        </section>

        {/* ---------------- CAREER OPPORTUNITIES ---------------- */}
        <section style={styles.careerSection}>
          <h2 style={styles.sectionHead}>Career Opportunities in UI/UX</h2>

          <div style={styles.careerGrid}>
            {[
              { title: "UI Designer", desc: "Design beautiful and modern user interfaces." },
              { title: "UX Designer", desc: "Improve usability and user experience." },
              { title: "Product Designer", desc: "Work on end-to-end digital product design." },
              { title: "Interaction Designer", desc: "Focus on user-interaction patterns." },
              { title: "Visual Designer", desc: "Create visually stunning digital products." },
            ].map((item, i) => (
              <div key={i} style={styles.careerCard}>
                <h3 style={{ fontWeight: 600 }}>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section style={styles.faqSection}>
          <h2 style={styles.sectionHead}>FAQ – UI/UX Design Course</h2>

          {[
            {
              q: "Is this course suitable for beginners?",
              a: "Yes! No design or coding experience required."
            },
            {
              q: "What tools will I learn?",
              a: "Figma, Adobe XD, Photoshop, Illustrator & Prototyping tools."
            },
            {
              q: "Duration of the course?",
              a: "Typically 2–3 months with complete hands-on practice."
            },
            {
              q: "Will I get placement support?",
              a: "Yes! 100% placement support with portfolio help."
            },
            {
              q: "Do I need coding knowledge?",
              a: "No. UI/UX is a design-first domain."
            },
          ].map((f, i) => (
            <details key={i} style={styles.faqDetails}>
              <summary style={{ fontWeight: 700 }}>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>

        {/* ---------------- ENQUIRE NOW ---------------- */}
        <section style={styles.enquireSection} id="enquire">
          <div style={styles.enquireCard}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 700 }}>
              Start Your UI/UX Designing Journey!
            </h3>

            <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
              Enquire for syllabus, project details, fees & placement support.
            </p>

            <a href="/register" style={styles.animatedBtn}>
              Enquire Now
            </a>
          </div>
        </section>

      </main>

      {/* Gradient animation */}
      <style>
        {`
          @keyframes gradientMove {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default UiUx;
