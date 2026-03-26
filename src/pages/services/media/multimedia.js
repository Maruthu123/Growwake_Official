import React from "react";

const MultimediaCourse = () => {
  const styles = {
    page: {
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#ffffff",
      color: "#0f2b66",
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

    /* HERO - BLUE THEME */
    hero: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "24px",
      padding: "34px 22px",
      boxShadow: "0 6px 28px rgba(30, 64, 175, 0.12)",
      gap: "24px",
      flexWrap: "wrap",
      background: "linear-gradient(135deg, #cfe9ff, #3b82f6)",
      color: "#03224c",
    },
    heroText: {
      flex: "1 1 320px",
      maxWidth: "620px",
    },
    heroH1: {
      fontSize: "2.1rem",
      fontWeight: 800,
      marginBottom: "12px",
      lineHeight: 1.08,
      color: "#011a43",
    },
    heroLead: {
      fontSize: "1.05rem",
      marginBottom: "14px",
      lineHeight: 1.5,
      color: "#06284f",
    },
    heroImageContainer: {
      flex: "1 1 260px",
      display: "flex",
      justifyContent: "center",
      maxWidth: "360px",
    },
    heroImage: {
      width: "100%",
      maxWidth: "340px",
      borderRadius: "18px",
      boxShadow: "0 10px 40px rgba(59,130,246,0.18)",
      objectFit: "cover",
    },

    /* SECTIONS */
    section: {
      backgroundColor: "#f2f7ff",
      borderRadius: "18px",
      padding: "28px 22px",
      boxShadow: "0 4px 18px rgba(30,64,175,0.06)",
      color: "#063064",
    },
    sectionHead: {
      fontSize: "1.4rem",
      fontWeight: 700,
      marginBottom: "18px",
      textAlign: "center",
      color: "#214a9b",
    },

    /* HIGHLIGHT GRID */
    highlightGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "18px",
    },
    highlightCard: {
      backgroundColor: "#dbeeff",
      borderRadius: "12px",
      padding: "16px",
      fontSize: "0.98rem",
      color: "#08306a",
      boxShadow: "0 3px 10px rgba(30,64,175,0.06)",
      fontWeight: 600,
    },

    /* TRAINERS */
    trainersRow: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "18px",
    },
    trainerCard: {
      background: "#eaf4ff",
      borderRadius: "12px",
      padding: "16px",
      textAlign: "center",
      boxShadow: "0 4px 16px rgba(30,64,175,0.06)",
    },
    trainerImg: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
      borderRadius: "10px",
      marginBottom: "12px",
    },

    /* CERT */
    certRow: {
      display: "flex",
      gap: "24px",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
    },
    certBlurb: {
      maxWidth: "560px",
      fontSize: "1rem",
      fontWeight: 500,
      color: "#08306a",
    },

    /* CAREER */
    careerGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "16px",
    },
    careerCard: {
      background: "#e6f0ff",
      borderRadius: "12px",
      padding: "14px 12px",
      color: "#062e5b",
      boxShadow: "0 3px 12px rgba(30,64,175,0.05)",
    },

    /* FAQ */
    faqBox: {
      background: "#dfeeff",
      borderRadius: "10px",
      padding: "12px 14px",
      marginBottom: "12px",
      color: "#07315f",
    },

    /* CTA */
    ctaWrap: {
      textAlign: "center",
      marginTop: "20px",
    },
    ctaCard: {
      display: "inline-block",
      padding: "30px 28px",
      borderRadius: "16px",
      background: "linear-gradient(135deg, #2b6df6, #1b4fd8)",
      color: "#ffffff",
      boxShadow: "0 12px 36px rgba(27,79,216,0.22)",
    },
    ctaBtn: {
      display: "inline-block",
      padding: "12px 36px",
      borderRadius: "26px",
      background: "linear-gradient(90deg,#60a5fa,#1e3a8a)",
      color: "#fff",
      fontWeight: 700,
      textDecoration: "none",
      marginTop: "12px",
    },

    /* Multimedia Developer Tools Section */
    toolGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: "16px",
      marginTop: "16px",
    },
    toolItem: {
      textAlign: "center",
      backgroundColor: "#dbeeff",
      padding: "12px",
      borderRadius: "12px",
      boxShadow: "0 3px 12px rgba(30,64,175,0.06)",
    },
    toolImg: {
      width: "60px",
      height: "60px",
      objectFit: "cover",
      borderRadius: "8px",
      marginBottom: "8px",
    },

    /* small helpers */
    ulList: { paddingLeft: "18px", marginTop: "8px", color: "#063064" },
    smallNote: { fontSize: "0.95rem", color: "#08306a" },
  };

  const multimediaTools = [
    { img: "/tools/me2.png", name: "Photoshop" },
    { img: "/tools/me1.png", name: "After Effects" },
    { img: "/tools/me3.png", name: "Premiere Pro" },
    { img: "/tools/me4.png", name: "Figma" },
    { img: "/tools/me5.jpeg", name: "Blender" },
    { img: "/tools/me6.jpeg", name: "Unity" },
  ];

  return (
    <div style={styles.page}>
      <main style={styles.container}>
        {/* HERO */}
        <header style={styles.hero}>
          <div style={styles.heroText}>
            <h1 style={styles.heroH1}>Best Multimedia & Animation Course in Trichy</h1>

            <p style={styles.heroLead}>
              Looking to launch a creative career in Trichy? Growwake is a leading Gen AI Animation
              Training Institute and a certified NSDC & MESC partner. Part-time & short-term courses
              in Animation, VFX, Game Art, and New Media — designed to make you job-ready.
            </p>

            <p style={styles.smallNote}>
              Real-time projects, Gen AI-powered curriculum, portfolio focus, and strong placement support.
            </p>

            <div style={{ marginTop: 14 }}>
              <a href="#enquire" style={styles.ctaBtn}>Enquire Now</a>
            </div>
          </div>

          <div style={styles.heroImageContainer}>
            <img
              style={styles.heroImage}
              src="https://images.pexels.com/photos/4145198/pexels-photo-4145198.jpeg?auto=compress&w=900&q=60"
              alt="Multimedia and animation training"
            />
          </div>
        </header>

        {/* INTRO / HIGHLIGHTS */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Course Highlights: Master the Future of Creative Tech</h2>
          <div style={styles.highlightGrid}>
            <div style={styles.highlightCard}>
              Gen AI-Powered Curriculum — integrate Generative AI into concept art, asset creation & animation.
            </div>
            <div style={styles.highlightCard}>
              Flexible Learning Options — part-time and short-term batches for students & working professionals.
            </div>
            <div style={styles.highlightCard}>
              Comprehensive Skill Sets — Animation, VFX, Game Art & New Media (UX/UI).
            </div>
            <div style={styles.highlightCard}>
              Certified Quality — NSDC & MESC training partner; certification employers trust.
            </div>
            <div style={styles.highlightCard}>
              Job-Ready Guarantee — portfolio-first training aligned with studio expectations.
            </div>
            <div style={styles.highlightCard}>
              Real-World Focus — project-based learning that simulates industry challenges.
            </div>
          </div>
        </section>

        {/* MULTIMEDIA DEVELOPER SECTION */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Multimedia Developer</h2>

          <p>
            A Multimedia Developer designs and builds interactive digital content by combining text, images, audio, video, and animations.
            They work on websites, apps, games, e-learning platforms, and digital marketing materials to create engaging user experiences.
          </p>

          <h3>Description</h3>
          <ul style={styles.ulList}>
            <li>Creates interactive applications using graphics, sound, and animation.</li>
            <li>Works with 2D/3D graphics, video editing, and motion design.</li>
            <li>Develops multimedia content for web, mobile, and desktop platforms.</li>
            <li>Ensures optimized performance, compatibility, and creativity.</li>
            <li>Common technologies: HTML5, CSS3, JavaScript, WebGL, Unity, Unreal Engine.</li>
            <li>Media formats: MP4, MP3, SVG, GIF, PNG, JPEG</li>
          </ul>

          <h3>Advantages</h3>
          <ul style={styles.ulList}>
            <li>Creative Field – Combines technology with art and design.</li>
            <li>High Demand– Needed in gaming, advertising, education, and entertainment.</li>
            <li>Diverse Opportunities – Work in web design, AR/VR, e-learning, or media production.</li>
            <li>Global Reach – Multimedia content is used worldwide across industries.</li>
            <li>Career Growth – Can specialize in animation, VFX, game development, or UI/UX.</li>
            <li>Freelance Potential – Great demand for multimedia projects in digital marketing.</li>
          </ul>

          <h3>Tools & Technologies Used</h3>
          <div style={styles.toolGrid}>
            {multimediaTools.map((tool, i) => (
              <div key={i} style={styles.toolItem}>
                <img src={tool.img} style={styles.toolImg} alt={tool.name} />
                <p>{tool.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CAREER PATHS */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Launch Your Dream Job: Career Paths</h2>

          <div style={styles.careerGrid}>
            <div style={styles.careerCard}>
              <h3 style={{ marginTop: 0 }}>Animator / Storyboard Artist</h3>
              <p>Bring characters and narratives to life for films, OTT and commercials.</p>
            </div>

            <div style={styles.careerCard}>
              <h3 style={{ marginTop: 0 }}>Motion Graphics / Graphic Designer</h3>
              <p>Create brand visuals, motion ads and digital experiences for companies.</p>
            </div>

            <div style={styles.careerCard}>
              <h3 style={{ marginTop: 0 }}>Creative AI Designer / Prompt Engineer</h3>
              <p>Leverage Gen AI tools to produce content faster and innovate workflows.</p>
            </div>

            <div style={styles.careerCard}>
              <h3 style={{ marginTop: 0 }}>Game Art / 3D Modeler</h3>
              <p>Design game characters, environments, and 3D assets for the gaming industry.</p>
            </div>

            <div style={styles.careerCard}>
              <h3 style={{ marginTop: 0 }}>Freelancer / Studio Owner</h3>
              <p>Build a portfolio-based freelance practice or start your own creative studio.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>💡 Growwake 2D & 3D Animation FAQs</h2>

          <div>
            <details style={styles.faqBox}>
              <summary style={{ fontWeight: 700 }}>Why enroll at Growwake for Animation training?</summary>
              <p>
                Placement-focused, practical training by industry experts with project-driven syllabus and portfolio guidance.
              </p>
            </details>

            <details style={styles.faqBox}>
              <summary style={{ fontWeight: 700 }}>Do you help with placements?</summary>
              <p>
                Yes — resume building, interview prep, and direct company referrals to help you start your career.
              </p>
            </details>

            <details style={styles.faqBox}>
              <summary style={{ fontWeight: 700 }}>How to enroll?</summary>
              <p>
                Contact the institute for the latest enrollment steps and batch availability (phone/website/visit).
              </p>
            </details>

            <details style={styles.faqBox}>
              <summary style={{ fontWeight: 700 }}>Course duration & payment?</summary>
              <p>
                Duration varies by program (short-term & part-time options available). Contact admissions for current payment methods.
              </p>
            </details>

            <details style={styles.faqBox}>
              <summary style={{ fontWeight: 700 }}>Trainer experience?</summary>
              <p>
                Trainers are industry experts with real studio experience and Gen AI tool fluency to guide practical learning.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section id="enquire" style={styles.ctaWrap}>
          <div style={styles.ctaCard}>
            <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 800 }}>
              Ready to start your Multimedia & Gen AI Animation journey?
            </h3>

            <p style={{ marginTop: 10, maxWidth: 640 }}>
              Enquire now for syllabus, fees, batch timings, and personalized career guidance.
            </p>

            <a href="/register" style={styles.ctaBtn}>Enquire Now</a>
          </div>
        </section>
      </main>

      {/* gradient animation (used if you add animated background/buttons later) */}
      <style>{`
        @keyframes gradientMove {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

export default MultimediaCourse;
