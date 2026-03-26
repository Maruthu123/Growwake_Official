import React from "react";

const FullCoursePage = () => {
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
    heroText: {
      flex: "1 1 320px",
      maxWidth: "520px",
    },
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

    /* GRID / HIGHLIGHTS */
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: "20px",
    },
    card: {
      backgroundColor: "#d8deff",
      borderRadius: "14px",
      padding: "16px 14px",
      fontSize: "1rem",
      color: "#15205c",
      fontWeight: "500",
      boxShadow: "0 3px 15px rgba(140,160,255,0.25)",
      textAlign: "center",
    },
    cardImg: {
      width: "90%",
      height: "90px",
      objectFit: "cover",
      borderRadius: "15px",
      marginBottom: "12px",
      boxShadow: "0 2px 12px rgba(150,170,255,0.4)",
    },

    /* OBJECTIVES / WHAT YOU LEARN */
    objGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(225px, 1fr))",
      gap: "22px",
    },
    objCard: {
      backgroundColor: "#d1ffef",
      borderRadius: "16px",
      padding: "18px 16px",
      boxShadow: "0 5px 22px rgba(0, 160, 120, 0.2)",
      textAlign: "center",
      color: "#003c33",
    },
    objImg: {
      width: "90%",
      height: "90px",
      objectFit: "cover",
      borderRadius: "15px",
      marginBottom: "12px",
      boxShadow: "0 2px 12px rgba(0, 150, 120, 0.4)",
    },

    /* CERTIFICATION */
    cert: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "28px",
      backgroundColor: "#d9fff3",
      borderRadius: "18px",
      padding: "36px 28px",
      boxShadow: "0 6px 28px rgba(0, 160, 120, 0.24)",
      color: "#004d40",
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
      backgroundColor: "#dbfff7",
      padding: "28px 24px",
      borderRadius: "18px",
      boxShadow: "0 4px 20px rgba(0, 120, 90, 0.25)",
      color: "#004941",
    },
    careerGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(225px, 1fr))",
      gap: "22px",
      marginTop: "16px",
    },
    careerCard: {
      background: "#baffec",
      borderRadius: "14px",
      padding: "16px",
    },

    /* TOOLS */
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
            <h1 style={styles.heroH1}>
              Master IoT & Digital Creation Courses in Trichy
            </h1>
            <p style={styles.heroP}>
              Learn IoT hardware, cloud, automation, sensors, embedded systems, content creation, branding, and digital monetization.
            </p>
            <a href="#enquire" style={styles.animatedBtn}>Enquire Now</a>
          </div>

          <img
            style={styles.heroImage}
            alt="IoT and Graphy"
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
          />
        </header>

        {/* HIGHLIGHTS */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Why Choose Our Courses?</h2>
          <div style={styles.grid}>
            {[
              "Master IoT devices: Arduino, Raspberry Pi",
              "Learn sensors, automation & embedded C",
              "Networking, MQTT, IoT cloud platforms",
              "Hands-on smart IoT projects",
              "Learn AI + IoT (optional)",
              "Video & content creation mastery",
              "Digital product creation & monetization",
              "100% Job Support in Trichy",
            ].map((t, i) => (
              <div key={i} style={styles.card}>{t}</div>
            ))}
          </div>
        </section>

        {/* WHAT YOU LEARN */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>What You Will Learn</h2>
          <div style={styles.objGrid}>
            {[
              {
                img: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
                title: "IoT Hardware",
                desc: "Arduino, Raspberry Pi, Sensors & Embedded Systems.",
              },
              {
                img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
                title: "Networking",
                desc: "Protocols like MQTT, HTTP, CoAP & device communication.",
              },
              {
                img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
                title: "Cloud Integration",
                desc: "AWS IoT, Azure IoT, Google IoT Core & dashboards.",
              },
              {
                img: "https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg",
                title: "Automation",
                desc: "Smart systems development with real-time IoT projects.",
              },
              {
                img: "https://images.pexels.com/photos/3182764/pexels-photo-3182764.jpeg",
                title: "Content Creation",
                desc: "Video production, editing, digital design skills.",
              },
              {
                img: "https://images.pexels.com/photos/4065158/pexels-photo-4065158.jpeg",
                title: "Digital Products",
                desc: "Create eBooks, templates, courses & more.",
              },
            ].map((item, i) => (
              <div key={i} style={styles.objCard}>
                <img src={item.img} style={styles.objImg} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TOOLS & TECHNOLOGIES */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Tools & Technologies Used</h2>
          <div style={styles.toolGrid}>
            {[
              { img: "/tools/iot1.png", name: "Arduino" },
              { img: "/tools/iot2.png", name: "Raspberry Pi" },
              { img: "/tools/iot3.png", name: "AWS IoT" },
              { img: "/tools/lot4.png", name: "Azure IoT" },
              { img: "/tools/iot5.png", name: "Node-RED" },
              { img: "/tools/me2.png", name: "Photoshop" },
              { img: "/tools/gra1.jpeg", name: "Illustrator" },
              { img: "/tools/gra2.jpeg", name: "Canva" },
              { img: "/tools/me4.png", name: "Figma" },
            ].map((tool, i) => (
              <div key={i} style={styles.toolItem}>
                <img src={tool.img} style={styles.toolImg} alt={tool.name} />
                <p>{tool.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATION */}
        <section style={styles.cert}>
          <h2 style={styles.sectionHead}>Certification</h2>
          <div style={styles.certRow}>
            <div style={styles.certBlurb}>
              <p>
                Earn globally recognized certificates after completing hands-on IoT & Digital content projects.
              </p>
              <ul>
                <li>Portfolio-ready IoT applications</li>
                <li>Content creation & digital products</li>
                <li>Resume & interview support</li>
              </ul>
            </div>
            <img
              src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg"
              alt="certificate"
              style={{ width: "250px", borderRadius: "15px" }}
            />
          </div>
        </section>

        {/* CAREER */}
        <section style={styles.career}>
          <h2 style={styles.sectionHead}>Career Opportunities</h2>
          <div style={styles.careerGrid}>
            {[
              "IoT Developer",
              "Embedded Engineer",
              "Automation Developer",
              "IoT Cloud Engineer",
              "IoT Architect",
              "Digital Content Creator",
              "Social Media Manager",
              "Digital Product Seller",
            ].map((role, i) => (
              <div key={i} style={styles.careerCard}>
                <h3 style={{ fontWeight: 600 }}>{role}</h3>
                <p>High-demand career path with rapid growth.</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={styles.faq}>
          <h2 style={styles.sectionHead}>FAQ</h2>
          {[
            { q: "Do I need experience?", a: "No! Beginners can join." },
            { q: "Course duration?", a: "2.5 – 3.5 months including projects." },
            { q: "Is it practical?", a: "100% hands-on with real projects." },
            { q: "Placement support?", a: "Yes! 100% placement support." },
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
              Start Your Career Journey Today!
            </h3>
            <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
              Enquire for syllabus, fee details & placement assistance.
            </p>
            <a href="/register" style={styles.animatedBtn}>Enquire Now</a>
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

export default FullCoursePage;
