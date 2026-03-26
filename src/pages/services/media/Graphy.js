import React from "react";

const Graphy = () => {
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

    /* ---------------- HERO ---------------- */
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

    /* ------------ SECTIONS ------------- */
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

    /* ------------ HIGHLIGHTS ----------- */
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

    /* ------------ SYLLABUS ------------- */
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

    /* ------------ GRAPHIC DESIGN SECTION ------------- */
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

    /* ------------ FAQ ------------ */
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

    /* ------------ CTA ------------ */
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
            <h1 style={styles.heroH1}>Graphy Course – Learn & Build Your Digital Skills</h1>
            <p style={styles.heroP}>
              Become a top creator, educator, or digital content designer with our complete Graphy Mastery Course.
              Learn content creation, digital product building, community growth, branding, and monetization.
            </p>
            <a href="#enquire" style={styles.animatedBtn}>Join Now</a>
          </div>

          <img
            style={styles.heroImage}
            alt="Graphy Creator"
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
          />
        </header>

        {/* HIGHLIGHTS */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Why Choose Graphy Course?</h2>
          <div style={styles.highlightGrid}>
            {[
              "Learn video creation & editing.",
              "Master digital product creation.",
              "Grow your online community.",
              "Learn content strategy + branding.",
              "AI tools for creators included.",
              "Sell courses & content online.",
              "Learn marketing & funnels.",
              "100% practical training.",
            ].map((t, i) => (
              <div key={i} style={styles.highlightCard}>{t}</div>
            ))}
          </div>
        </section>

        {/* SYLLABUS */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>What You Will Learn</h2>

          <div style={styles.grid}>
            {[
              {
                img: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg",
                title: "Content Creation",
                desc: "Learn scripting, recording & editing.",
              },
              {
                img: "https://images.pexels.com/photos/3182764/pexels-photo-3182764.jpeg",
                title: "Brand Identity",
                desc: "Build your brand, colors, fonts, theme.",
              },
              {
                img: "https://images.pexels.com/photos/4065158/pexels-photo-4065158.jpeg",
                title: "Digital Products",
                desc: "Create eBooks, templates, courses & more.",
              },
              {
                img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
                title: "Marketing Strategy",
                desc: "Learn funnels, ads & conversion strategy.",
              },
            ].map((s, i) => (
              <div key={i} style={styles.card}>
                <img src={s.img} style={styles.cardImg} alt="" />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GRAPHIC DESIGN SECTION */}
        <section style={styles.graphicSection}>
          <h2 style={styles.sectionHead}>Graphic Designer</h2>

          <p>
            A Graphic Designer creates visual concepts to communicate ideas that inspire, inform, and captivate audiences.
            They design logos, branding, advertisements, social media creatives, and graphic assets.
          </p>

          <h3 style={{ marginTop: "16px", color: "#415eff" }}>Description</h3>
          <p>
            They design promotional creatives, posters, ads, banners, and marketing assets.
            They work with typography, color theory, UI/UX basics, illustration, and motion graphics.
          </p>

          <ul>
            <li>Works with typography, color theory & composition.</li>
            <li>Designs logos, posters, banners & brand identity.</li>
            <li>Collaborates with marketing teams for campaigns.</li>
            <li>Ensures consistency in brand communication.</li>
            <li>Design areas: UI/UX, advertising, illustration, social media</li>
          </ul>

          <h3 style={{ marginTop: "20px", color: "#415eff" }}>
            Tools & Technologies Used
          </h3>

          <div style={styles.toolGrid}>
            {[
              { img: "/tools/me2.png", name: "Photoshop" },
              { img: "/tools/gra1.jpeg", name: "Illustrator" },
              { img: "/tools/gra2.jpeg", name: "Canva" },
              { img: "/tools/me4.png", name: "Figma" },
              { img: "/tools/gra3.jpeg", name: "CorelDRAW" },
              { img: "/tools/gra4.jpeg", name: "Adobe XD" },
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
          <h2 style={styles.sectionHead}>FAQ – Graphy Course</h2>

          {[
            {
              q: "Do I need experience?",
              a: "No! Beginners can join and learn everything step by step.",
            },
            {
              q: "Will I learn video editing?",
              a: "Yes! You will learn full content production workflow.",
            },
            {
              q: "Is it practical training?",
              a: "100% practical with real-world projects.",
            },
            {
              q: "Can I earn using Graphy?",
              a: "Yes! You learn monetization, marketing & product selling.",
            },
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
              Start Your Graphy Journey Today!
            </h3>

            <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
              Learn content creation, branding & digital monetization.
            </p>

            <a href="/register" style={styles.animatedBtn}>
              Enquire Now
            </a>
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

export default Graphy;
