import React from "react";

const BackendCourse = () => {
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

    /* HERO */
    hero: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "24px",
      padding: "34px 22px",
      boxShadow: "0 4px 24px rgba(90, 60, 180, 0.2)",
      gap: "24px",
      flexWrap: "wrap",
      background: "linear-gradient(135deg, #a4c2ff, #6b8bff)",
      color: "#21306f",
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
      color: "#1f2e7f",
    },
    heroP: {
      fontSize: "1.06rem",
      marginBottom: "18px",
      lineHeight: 1.55,
      color: "#25387a",
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
      boxShadow: "0 7px 30px rgba(90, 120, 255, 0.4)",
      objectFit: "cover",
    },

    /* SECTIONS */
    section: {
      backgroundColor: "#f2f5ff",
      borderRadius: "20px",
      padding: "30px 24px",
      boxShadow: "0 4px 20px rgba(140, 130, 230, 0.2)",
      color: "#2f3670",
    },
    sectionHead: {
      fontSize: "1.5rem",
      fontWeight: 700,
      marginBottom: "20px",
      textAlign: "center",
      color: "#3c4fcf",
    },

    /* GRID CARDS */
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: "20px",
    },
    card: {
      backgroundColor: "#d8ddff",
      borderRadius: "14px",
      padding: "16px 14px",
      fontSize: "1rem",
      fontWeight: "500",
      color: "#2f2d70",
      boxShadow: "0 3px 15px rgba(120, 110, 250, 0.15)",
    },

    /* OBJECTIVES */
    objGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(225px, 1fr))",
      gap: "22px",
    },
    objCard: {
      backgroundColor: "#dfe6ff",
      borderRadius: "16px",
      padding: "18px 16px",
      boxShadow: "0 5px 22px rgba(120, 115, 255, 0.2)",
      textAlign: "center",
      color: "#253069",
    },
    objImg: {
      width: "90%",
      height: "90px",
      objectFit: "cover",
      borderRadius: "15px",
      marginBottom: "12px",
      boxShadow: "0 2px 12px rgba(90, 110, 255, 0.4)",
    },

    /* CERTIFICATION */
    cert: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "28px",
      backgroundColor: "#e3e8ff",
      borderRadius: "18px",
      padding: "36px 28px",
      boxShadow: "0 6px 28px rgba(130, 120, 255, 0.24)",
      color: "#33307c",
    },
    certRow: {
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
    },

    /* CAREER */
    career: {
      backgroundColor: "#e8ebff",
      padding: "28px 24px",
      borderRadius: "18px",
      boxShadow: "0 4px 20px rgba(102, 90, 235, 0.18)",
      color: "#242a74",
    },
    careerGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(225px, 1fr))",
      gap: "22px",
      marginTop: "16px",
    },
    careerCard: {
      background: "#ced6ff",
      borderRadius: "14px",
      padding: "16px",
    },

    /* SERVICE SECTION */
    serviceSection: {
      backgroundColor: "#f7f8ff",
      borderRadius: "18px",
      padding: "30px 24px",
      boxShadow: "0 4px 20px rgba(120,130,250,0.15)",
    },
    toolGridContainer: {
      marginTop: "20px",
    },
    toolGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: "16px",
      marginTop: "12px",
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
      backgroundColor: "#eef0ff",
      padding: "26px 20px",
      borderRadius: "16px",
    },
    faqBox: {
      background: "#d4d8ff",
      borderRadius: "12px",
      padding: "14px 18px",
      marginBottom: "12px",
    },

    /* CTA */
    enquire: {
      textAlign: "center",
      marginTop: "40px",
    },
    enquireCard: {
      background: "linear-gradient(135deg, #7c8aff, #415aff)",
      padding: "38px 26px",
      borderRadius: "22px",
      color: "#fff",
      display: "inline-block",
      boxShadow: "0 8px 36px rgba(70, 80, 255, 0.45)",
    },
    animatedBtn: {
      background: "linear-gradient(270deg, #3547e1, #47a0ff, #2632ff)",
      padding: "16px 44px",
      marginTop: "8px",
      display: "inline-block",
      color: "#fff",
      borderRadius: "20px",
      fontWeight: "700",
      textDecoration: "none",
      animation: "gradientMove 12s infinite",
      backgroundSize: "400% 400%",
    },
    
  };

  return (
    <div style={styles.page}>
      <main style={styles.container}>

        {/* HERO */}
        <header style={styles.hero}>
          <div style={styles.heroText}>
            <h1 style={styles.heroH1}>Best Back-End Developer Course in Trichy</h1>
            <p style={styles.heroP}>
              Learn Back-End development from scratch using Node.js, Express,
              APIs, authentication, and databases with job-focused training.
            </p>
            <p style={styles.heroP}>
              Growwake ensures 100% job support, real-time projects & industry mentorship.
            </p>
            <a href="#enquire" style={styles.animatedBtn}>Enquire Now</a>
          </div>
          <div style={styles.heroImageContainer}>
      
  <img
    style={styles.heroImage}
    src="/backend.avif"
    alt="Backend developer"
  />
</div>

        </header>  

        {/* HIGHLIGHTS */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Why Choose Our Back-End Course?</h2>
          <div style={styles.grid}>
            {[
              "Pay After Placement training model.",
              "Master Node.js, Express, MongoDB, MySQL.",
              "Learn APIs, authentication, and server logic.",
              "Hands-on real world backend projects.",
              "Learn Git, GitHub, Postman, DevTools.",
              "Mock interviews + resume support.",
              "Beginner-friendly curriculum.",
              "100% Job Support in Trichy.",
            ].map((t, i) => (
              <div key={i} style={styles.card}>{t}</div>
            ))}
          </div>
        </section>

        {/* SERVICE SECTION */}
        <section style={styles.serviceSection}>
          <div>
            <h1>Backend Developer</h1>
            <p>
              A Backend Developer builds and maintains the server-side logic, databases, and APIs that power websites and apps.
              They ensure data is stored, processed, and delivered securely and efficiently.
            </p>

            <h2>Description</h2>
            <ul>
              <li>Works on the behind-the-scenes part of applications.</li>
              <li>Manages databases, servers, and APIs.</li>
              <li>Ensures performance, security, and scalability.</li>
              <li>Common languages: Java, Python, Node.js, PHP, Ruby, Go.</li>
              <li>Databases: MySQL, PostgreSQL, MongoDB.</li>
            </ul>

            <h2>Advantages</h2>
            <ul>
              <li>High Demand – Every app needs a backend.</li>
              <li>Good Salary – Strong earning potential.</li>
              <li>Scalability – Skills apply to small apps & large systems.</li>
              <li>Critical Role – Backbone of any application.</li>
              <li>Diverse Tech Stack – Wide choice of languages & tools.</li>
              <li>Career Growth – Can move into full-stack or cloud roles.</li>
            </ul>
          </div>

          <div style={styles.toolGridContainer}>
            <h3 style={styles.sectionHead}>Tools & Technologies Used</h3>
            <div style={styles.toolGrid}>
              {[
                { img: "/tools/back1.png", name: "Node.js" },
                { img: "/tools/back3.png", name: "Python" },
                { img: "/tools/back7.jpeg", name: "Java" },
                { img: "/tools/back2.png", name: "MySQL" },
                { img: "/tools/back4.png", name: "MongoDB" },
                { img: "/tools/back6.jpeg", name: "Express.js" },
              ].map((tool, i) => (
                <div key={i} style={styles.toolItem}>
                  <img src={tool.img} style={styles.toolImg} alt={tool.name} />
                  <p>{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU LEARN */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>What You Will Learn</h2>
          <div style={styles.objGrid}>
            {[
              { img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg", title: "Node.js & Express", desc: "Build powerful backend servers & REST APIs." },
              { img: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg", title: "Databases", desc: "Learn MongoDB, MySQL, schema design & queries." },
              { img: "https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg", title: "Authentication", desc: "JWT, sessions, role-based access control." },
              { img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", title: "Tools & Deployment", desc: "Git, GitHub, Postman, cloud & hosting." },
            ].map((item, i) => (
              <div key={i} style={styles.objCard}>
                <img src={item.img} style={styles.objImg} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATION */}
        <section style={styles.cert}>
          <h2 style={styles.sectionHead}>Backend Developer Certification</h2>
          <div style={styles.certRow}>
            <div style={styles.certBlurb}>
              <p>Earn an industry-recognized certificate after completing exams and live backend projects.</p>
              <ul>
                <li>Project-based assessments</li>
                <li>Portfolio-ready applications</li>
                <li>Resume & interview guidance</li>
              </ul>
            </div>
            <img src="https://images.unsplash.com/photo-1581093588401-22d79c0b02f4" alt="certificate" style={{ width: "250px", borderRadius: "15px" }} />
          </div>
        </section>

        {/* CAREER PATH */}
        <section style={styles.career}>
          <h2 style={styles.sectionHead}>Career Opportunities</h2>
          <div style={styles.careerGrid}>
            {["Backend Developer","Node.js Developer","API Developer","Database Engineer","Full Stack Developer (Optional)"].map((role,i)=>(
              <div key={i} style={styles.careerCard}>
                <h3 style={{ fontWeight: 600 }}>{role}</h3>
                <p>High-demand career path with strong growth.</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={styles.faq}>
          <h2 style={styles.sectionHead}>FAQ — Backend Course</h2>
          {[
            { q: "What can I learn?", a: "API development, databases, authentication, deployment." },
            { q: "Course duration?", a: "3–4 months including live projects." },
            { q: "Is this beginner friendly?", a: "Yes, no experience needed." },
            { q: "Do you provide placements?", a: "100% job support included." },
          ].map((f, i)=>(
            <details key={i} style={styles.faqBox}>
              <summary style={{ fontWeight: 700 }}>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>

        {/* CTA */}
        <section id="enquire" style={styles.enquire}>
          <div style={styles.enquireCard}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 700 }}>Start Your Back-End Developer Journey!</h3>
            <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>Enquire for syllabus, fee details & placement assistance.</p>
            <a href="/register" style={styles.animatedBtn}>Enquire Now</a>
          </div>
        </section>

      </main>

      <style>{`
        @keyframes gradientMove {
          0%,100%{background-position:0% 50%;}
          50%{background-position:100% 50%;}
        }
      `}</style>
    </div>
  );
};

export default BackendCourse;
