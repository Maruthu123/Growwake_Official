import React from "react";

const PythonDeveloper = () => {
  const styles = {
    page: {
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#f4f6ff",
      color: "#1f2559",
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

    /* HERO */
    hero: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "24px",
      padding: "34px 22px",
      boxShadow: "0 4px 24px rgba(60, 80, 200, 0.2)",
      gap: "24px",
      flexWrap: "wrap",
      background: "linear-gradient(135deg, #c4d4ff, #91a6ff)",
      color: "#0f1b52",
    },
    heroText: { flex: "1 1 320px", maxWidth: "520px" },
    heroH1: {
      fontSize: "2.25rem",
      fontWeight: 700,
      marginBottom: "16px",
      lineHeight: 1.1,
      color: "#0f1b52",
    },
    heroP: {
      fontSize: "1.06rem",
      marginBottom: "18px",
      lineHeight: 1.55,
      color: "#1f2c68",
    },
    heroImage: {
      width: "100%",
      maxWidth: "330px",
      borderRadius: "20px",
      boxShadow: "0 7px 30px rgba(120,140,255,0.4)",
    },

    /* SECTIONS */
    section: {
      backgroundColor: "#e9edff",
      borderRadius: "20px",
      padding: "30px 24px",
      boxShadow: "0 4px 20px rgba(120,140,255,0.2)",
      color: "#1d275f",
    },
    sectionHead: {
      fontSize: "1.5rem",
      fontWeight: 700,
      marginBottom: "20px",
      textAlign: "center",
      color: "#415eff",
    },

    highlightGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: "20px",
    },
    highlightCard: {
      backgroundColor: "#d8deff",
      borderRadius: "14px",
      padding: "16px 14px",
      fontSize: "1rem",
      color: "#15205c",
      fontWeight: "500",
      boxShadow: "0 3px 15px rgba(140,160,255,0.25)",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "22px",
    },
    card: {
      backgroundColor: "#dbe3ff",
      borderRadius: "16px",
      padding: "18px 16px",
      boxShadow: "0 5px 22px rgba(130,150,255,0.24)",
      textAlign: "center",
      color: "#16215a",
    },
    cardImg: {
      width: "90%",
      height: "90px",
      objectFit: "cover",
      borderRadius: "15px",
      marginBottom: "12px",
      boxShadow: "0 2px 12px rgba(150,170,255,0.4)",
    },

    /* TOOLS SECTION */
    graphicSection: {
      backgroundColor: "#eef1ff",
      borderRadius: "22px",
      padding: "32px 26px",
      boxShadow: "0 4px 20px rgba(140,150,255,0.25)",
    },
    toolGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
      gap: "20px",
      marginTop: "18px",
    },
    toolItem: {
      textAlign: "center",
      background: "#d4dbff",
      padding: "14px",
      borderRadius: "14px",
      boxShadow: "0 3px 14px rgba(140,150,255,0.3)",
    },
    toolImg: {
      width: "70px",
      height: "70px",
      objectFit: "cover",
      borderRadius: "10px",
      marginBottom: "8px",
    },

    /* FAQ */
    faq: {
      backgroundColor: "#dee4ff",
      borderRadius: "16px",
      padding: "26px 20px",
    },
    faqItem: {
      background: "#ccd6ff",
      borderRadius: "12px",
      marginBottom: "12px",
      padding: "14px 18px",
    },

    /* CTA */
    enquireCard: {
      background: "linear-gradient(135deg, #5a6dff, #3746ff)",
      boxShadow: "0 8px 36px rgba(70,90,255,0.45)",
      borderRadius: "22px",
      padding: "38px 26px",
      color: "#ffffff",
      display: "inline-block",
      textAlign: "center",
    },
    animatedBtn: {
      background: "linear-gradient(270deg, #2b44ff, #5f7aff, #2b44ff)",
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

        {/* HERO */}
        <header style={styles.hero}>
          <div style={styles.heroText}>
            <h1 style={styles.heroH1}>Python Developer Course – Become a Backend Expert</h1>
            <p style={styles.heroP}>
              Learn Python programming, backend development, Django, Flask, APIs,
              automation, and data handling—with 100% practical projects.
            </p>
            <a href="#enquire" style={styles.animatedBtn}>Join Now</a>
          </div>

          <img
            style={styles.heroImage}
            alt="Python Developer"
            src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
          />
        </header>

        {/* HIGHLIGHTS */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Why Become a Python Developer?</h2>

          <div style={styles.highlightGrid}>
            {[
              "Easy to learn & beginner friendly.",
              "High demand in IT, AI & Data fields.",
              "Used in Web Dev, AI, ML & Automation.",
              "Huge community & library support.",
              "Excellent salary & global careers.",
              "Build APIs, automation, dashboards.",
              "Works with Django, Flask, FastAPI.",
              "Industry-level backend training.",
            ].map((t, i) => (
              <div key={i} style={styles.highlightCard}>{t}</div>
            ))}
          </div>
        </section>

        {/* ADDITIONAL DESCRIPTION SECTION */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>What Does a Python Developer Do?</h2>

          <ul>
            <li>Build backend logic, APIs & authentication systems.</li>
            <li>Develop full web applications using Django / Flask.</li>
            <li>Work with databases like MySQL, MongoDB, PostgreSQL.</li>
            <li>Create automation scripts for business tasks.</li>
            <li>Implement data processing & analysis pipelines.</li>
            <li>Integrate third-party services like payment, email, SMS.</li>
            <li>Deploy apps to cloud platforms (AWS, DigitalOcean, Render).</li>
          </ul>

          <h3 style={{ marginTop: "22px", color: "#415eff" }}>Career Opportunities</h3>
          <ul>
            <li>Python Backend Developer</li>
            <li>Django Developer</li>
            <li>Flask / FastAPI Developer</li>
            <li>Automation Engineer</li>
            <li>API Developer</li>
            <li>Data Analyst (Python Based)</li>
            <li>Machine Learning Beginner Roles</li>
          </ul>

          <h3 style={{ marginTop: "22px", color: "#415eff" }}>Projects You Will Build</h3>
          <ul>
            <li>User Authentication System</li>
            <li>E-Commerce Backend (Django/Flask)</li>
            <li>REST API with CRUD Operations</li>
            <li>Automation Script (File/Email Automation)</li>
            <li>Dashboard with Data Visualization</li>
          </ul>
        </section>

        {/* TOOLS SECTION */}
        <section style={styles.graphicSection}>
          <h2 style={styles.sectionHead}>Tools & Technologies Used</h2>

          <p>Learn essential frameworks & tools used by real Python developers.</p>

          <div style={styles.toolGrid}>
            {[
              { img: "/tools/back3.png", name: "Python" },
              { img: "/tools/py1.jpeg", name: "Django" },
              { img: "/tools/py2.jpeg", name: "Flask" },
              { img: "/tools/py3.jpeg", name: "NumPy" },
              { img: "/tools/py4.jpeg", name: "Pandas" },
              { img: "/tools/py5.jpeg", name: "Git" },
            ].map((tool, i) => (
              <div key={i} style={styles.toolItem}>
                <img src={tool.img} style={styles.toolImg} alt="" />
                <p>{tool.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={styles.faq}>
          <h2 style={styles.sectionHead}>FAQ – Python Developer Course</h2>

          {[
            { q: "Do I need programming knowledge?", a: "No! We start completely from basics." },
            { q: "Will I learn Django?", a: "Yes! Django + Flask + API development included." },
            { q: "Is it practical?", a: "100% practical with 5+ real backend projects." },
            { q: "Can I get a job?", a: "Yes! This course is designed for job placement." },
            { q: "Will you teach databases?", a: "Yes, MySQL, SQLite & MongoDB covered." },
          ].map((f, i) => (
            <details key={i} style={styles.faqItem}>
              <summary style={{ fontWeight: 700 }}>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>

        {/* CTA */}
        <section id="enquire" style={{ textAlign: "center" }}>
          <div style={styles.enquireCard}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 700 }}>
              Start Your Python Developer Journey Today!
            </h3>

            <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
              Learn backend development, APIs, automation & real projects.
            </p>

            <a href="/register" style={styles.animatedBtn}>
              Enquire Now
            </a>
          </div>
        </section>

      </main>

      <style>{`
        @keyframes gradientMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

export default PythonDeveloper;
