import React from "react";

const CloudAndAWSPage = () => {
  const styles = {
    page: {
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#ffffff",
      color: "#2e1d6f",
      minHeight: "100vh",
      padding: "20px 16px",
      boxSizing: "border-box",
    },
    container: {
      maxWidth: "1080px",
      margin: "0 auto",
      padding: "20px 18px 36px",
      display: "flex",
      flexDirection: "column",
      gap: "40px",
    },

    /* -------------------------------- HERO -------------------------------- */
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
    },
    heroP: {
      fontSize: "1.06rem",
      marginBottom: "18px",
      lineHeight: 1.55,
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

    /* -------------------------------- SECTION -------------------------------- */
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
      marginBottom: "22px",
      textAlign: "center",
      color: "#5a4fcf",
    },

    /* ---------------------------- GRID CARDS ---------------------------- */
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: "20px",
    },
    card: {
      backgroundColor: "#dedcff",
      borderRadius: "14px",
      padding: "16px 14px",
      fontSize: "1rem",
      fontWeight: 500,
      color: "#3a2e70",
      boxShadow: "0 3px 15px rgba(120, 110, 250, 0.15)",
    },

    /* ------------------------------ TOOL GRID ------------------------------ */
    toolGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
      gap: "22px",
      marginTop: "20px",
    },
    toolItem: {
      textAlign: "center",
      background: "#dedcff",
      padding: "16px",
      borderRadius: "14px",
      boxShadow: "0 3px 14px rgba(120,110,255,0.2)",
    },
    toolImg: {
      width: "70px",
      height: "70px",
      objectFit: "contain",
      marginBottom: "8px",
    },

    /* -------------------------------- CAREER -------------------------------- */
    careerGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(225px, 1fr))",
      gap: "24px",
    },
    careerCard: {
      backgroundColor: "#cdc9fd",
      borderRadius: "14px",
      padding: "16px 14px",
      color: "#3a277f",
    },

    /* -------------------------------- FAQ -------------------------------- */
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

    /* -------------------------------- CTA -------------------------------- */
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
      marginTop: "12px",
    },
  };

  return (
    <div style={styles.page}>
      <main style={styles.container}>

        {/* ------------------------------ HERO SECTION ------------------------------ */}
        <section style={styles.hero}>
          <div style={styles.heroText}>
            <h1 style={styles.heroH1}>Cloud Computing & AWS Training in Trichy</h1>
            <p style={styles.heroP}>
              Learn Cloud Engineering + AWS from industry experts. 100% practical training,
              hands-on projects, multi-cloud exposure, and complete placement support.
            </p>
            <a href="#enquire" style={styles.animatedBtn}>Enquire Now</a>
          </div>

          <div style={styles.heroImageContainer}>
            <img
              style={styles.heroImage}
              src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg"
              alt="Cloud Computing Developer"
            />
          </div>
        </section>

        {/* ------------------------------ CLOUD ENGINEER OVERVIEW ------------------------------ */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Cloud Computing Engineer</h2>
          <p>Cloud engineers design and manage cloud-based systems.</p>

          <h3>Description</h3>
          <p>They use AWS, Azure, and Google Cloud for deployment.</p>

          <h3>Advantages</h3>
          <div style={styles.grid}>
            {[
              "High salary",
              "Secure workloads",
              "Fast deployment",
              "Scalable systems",
              "Modern architecture",
            ].map((item, i) => (
              <div key={i} style={styles.card}>{item}</div>
            ))}
          </div>

          <h3 style={{ marginTop: "20px", textAlign: "center" }}>Tools & Technologies</h3>
          <div style={styles.toolGrid}>
            {[
              { img: "/tools/iot3.png", name: "AWS" },
              { img: "/tools/dev1.png", name: "Git Lab" },
              { img: "/tools/aws.jpeg", name: "Google Cloud" },
              { img: "/tools/dev2.png", name: "Docker" },
              { img: "/tools/dev4.png", name: "Jenkins" },
              { img: "/tools/dev6.png", name: "Ansible" },
            ].map((t, i) => (
              <div key={i} style={styles.toolItem}>
                <img src={t.img} style={styles.toolImg} alt="" />
                <p>{t.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------ AWS COURSE ------------------------------ */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Best AWS Course in Trichy</h2>
          <p>
            Growwake Institute provides No.1 AWS training in Trichy with real-time projects,
            cloud architecture, deployments, networking, security, DevOps tools & certification guidance.
          </p>

          <h3>Course Highlights</h3>
          <div style={styles.grid}>
            {[
              "World-Class AWS Course Modules",
              "Learn from Expert AWS Trainers",
              "Instructor-led Classroom Training",
              "Flexible Weekday / Weekend Classes",
              "Placement Network with 30+ Companies",
              "Azure Cloud Fundamentals Included",
              "Affordable Fees + Certification",
              "100% Placement Assistance",
            ].map((m, i) => (
              <div key={i} style={styles.card}>{m}</div>
            ))}
          </div>

          <h3 style={{ marginTop: "20px" }}>AWS Trainer Profile</h3>
          <ul>
            <li>10+ Years Real-Time Industry Experience</li>
            <li>Experts in AWS + Azure</li>
            <li>Hands-on Practical Training</li>
            <li>Resume Building + Interview Prep</li>
          </ul>

          <h3>AWS Certification Advantages</h3>
          <ul>
            <li>Hands-On Cloud Projects</li>
            <li>Boosts Career & Job Opportunities</li>
            <li>High-Demand Cloud Certification</li>
          </ul>

          <h3>Job Opportunities After AWS</h3>

          <div style={styles.careerGrid}>
            {[
              "AWS Cloud Engineer",
              "AWS Solutions Architect",
              "AWS DevOps Engineer",
              "Cloud Operations Specialist",
              "AWS Data Engineer",
              "Cloud Security Engineer",
              "Full Stack Developer (AWS Deployments)",
            ].map((job, i) => (
              <div key={i} style={styles.careerCard}>{job}</div>
            ))}
          </div>

          <h3 style={{ marginTop: "20px" }}>AWS FAQ</h3>
          <section style={styles.faqSection}>
            {[
              { q: "Why Learn AWS at Growwake?", a: "Expert trainers + practical projects." },
              { q: "Placement Support?", a: "Yes, 100% placement assistance." },
              { q: "How to Register?", a: "Contact the Growwake team." },
              { q: "Trainer Experience?", a: "10+ years real-time cloud experience." },
              { q: "Job Titles?", a: "Cloud Engineer, Architect, DevOps Engineer." },
            ].map((f, i) => (
              <details key={i} style={styles.faqDetails}>
                <summary style={{ fontWeight: 700 }}>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </section>
        </section>

        {/* ------------------------------ CTA ------------------------------ */}
        <section style={styles.enquireSection} id="enquire">
          <div style={styles.enquireCard}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700 }}>
              Start Your Cloud & AWS Journey Today!
            </h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
              Get details about fees, syllabus, batches & placement.
            </p>
            <a href="/register" style={styles.animatedBtn}>
              Enquire Now
            </a>
          </div>
        </section>

      </main>

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

export default CloudAndAWSPage;
