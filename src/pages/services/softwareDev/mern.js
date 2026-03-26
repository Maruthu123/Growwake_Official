import React from "react";

const Mern = () => {
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

    /* TOOL GRID */
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
            <h1 style={styles.heroH1}>MERN Stack Developer Course</h1>
            <p style={styles.heroP}>
              Become a job-ready MERN Stack Developer. Learn MongoDB, Express.js, React.js,
              and Node.js with hands-on projects and full-stack applications.
            </p>
            <a href="#enquire" style={styles.animatedBtn}>Join Now</a>
          </div>

          <img
            style={styles.heroImage}
            alt="MERN Developer"
            src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg"
          />
        </header>

        {/* WHY MERN */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Why Choose MERN Stack?</h2>

          <div style={styles.highlightGrid}>
            {[
              "Master Full-Stack Development.",
              "Learn React, Node, Express & MongoDB.",
              "Build real-world full-stack apps.",
              "High-demand tech stack worldwide.",
              "Create dynamic & scalable web apps.",
              "API development & integration.",
              "Authentication & CRUD operations.",
              "100% practical hands-on training.",
              "Best stack for modern web development.",
              "Used by top companies like Netflix & Uber.",
            ].map((t, i) => (
              <div key={i} style={styles.highlightCard}>{t}</div>
            ))}
          </div>
        </section>

        
        {/* EXTRA CONTENT — JOB ROLES */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Job Roles After MERN Stack</h2>
          <ul style={{ lineHeight: "1.7", fontSize: "1.05rem" }}>
            <li>Full-Stack Developer</li>
            <li>MERN Stack Developer</li>
            <li>Frontend React Developer</li>
            <li>Backend Node.js Developer</li>
            <li>JavaScript Developer</li>
            <li>API Developer</li>
            <li>Web Application Developer</li>
          </ul>
        </section>

        {/* EXTRA CONTENT — PROJECTS */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Projects You Will Build</h2>
          <ul style={{ lineHeight: "1.7", fontSize: "1.05rem" }}>
            <li>Authentication System (JWT + MERN)</li>
            <li>E-Commerce Website (Full-Stack)</li>
            <li>Social Media Style App</li>
            <li>Real-Time Chat Application</li>
            <li>Admin Dashboard with Analytics</li>
          </ul>
        </section>

        {/* DESCRIPTION */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>MERN Stack Developer</h2>

          <p>
            A MERN Stack Developer builds full-stack applications using MongoDB, Express.js,
            React.js, and Node.js. They handle both backend & frontend development with
            modern JavaScript.
          </p>

          <h3 style={{ marginTop: "16px", color: "#415eff" }}>Description</h3>
          <ul>
            <li>Develops frontend interfaces using React.js.</li>
            <li>Builds backend APIs using Node.js & Express.js.</li>
            <li>Manages databases using MongoDB.</li>
            <li>Works on JWT Authentication & Security.</li>
            <li>Implements routing & state management.</li>
            <li>Creates scalable full-stack solutions.</li>
          </ul>

          <h3 style={{ marginTop: "20px", color: "#415eff" }}>
            Tools & Technologies Used
          </h3>

          <div style={styles.toolGrid}>
            {[
              { img: "/tools/back4.png", name: "MongoDB" },
              { img: "/tools/men1.jpeg", name: "Express.js" },
              { img: "/tools/front5.png", name: "React.js" },
              { img: "/tools/back4.png", name: "Node.js" },
              { img: "/tools/py5.jpeg", name: "Git" },
              { img: "/tools/postman3.png", name: "Postman" },
            ].map((tool, i) => (
              <div key={i} style={styles.toolItem}>
                <img src={tool.img} style={styles.toolImg} alt={tool.name} />
                <p>{tool.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXTRA CONTENT — DURATION & FEES */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Course Duration & Fees</h2>
          <ul style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
            <li><strong>Duration:</strong> 3 to 5 Months</li>
            <li><strong>Mode:</strong> Offline / Online</li>
            <li><strong>Training Type:</strong> 100% Practical</li>
            <li><strong>Fees:</strong> Contact us for latest fee details</li>
          </ul>
        </section>

        {/* FAQ */}
        <section style={styles.faq}>
          <h2 style={styles.sectionHead}>FAQ – MERN Stack Course</h2>

          {[
            { q: "Do I need coding experience?", a: "No! This course starts from basics." },
            { q: "Will I build real projects?", a: "Yes! You will build 4+ full-stack applications." },
            { q: "Is MERN good for jobs?", a: "MERN developers are in high demand worldwide." },
            { q: "Is this practical training?", a: "100% practical with hands-on tasks." },
            { q: "Will I get placement support?", a: "Yes, resume prep + interview training included." },
            { q: "Will I learn Git & Deployment?", a: "Yes, GitHub, Netlify & Render deployment covered." }
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
              Start Your MERN Stack Journey Today!
            </h3>
            <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
              Become a professional full-stack developer with real-world skills.
            </p>
            <a href="/register" style={styles.animatedBtn}>Enquire Now</a>
          </div>
        </section>

      </main>

      {/* Animation */}
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

export default Mern;
