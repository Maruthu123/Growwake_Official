// src/pages/services/cloud/devs.jsx
import React from "react";

const DevOps = () => {
  const styles = {
    page: {
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#ffffff",
      color: "#2b3a66",
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
      gap: "36px",
    },
    hero: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "20px",
      padding: "28px 20px",
      gap: "20px",
      flexWrap: "wrap",
      background: "linear-gradient(135deg, #cfe6ff, #9fb8ff)",
      color: "#07204a",
      boxShadow: "0 6px 30px rgba(120,140,255,0.08)",
    },
    heroText: {
      flex: "1 1 320px",
      maxWidth: "640px",
    },
    heroH1: {
      fontSize: "2.05rem",
      marginBottom: "10px",
      color: "#07204a",
      lineHeight: 1.1,
      fontWeight: 700,
    },
    heroP: {
      marginBottom: "12px",
      lineHeight: 1.45,
      color: "#14325a",
    },
    heroImageContainer: {
      flex: "0 0 320px",
      display: "flex",
      justifyContent: "center",
    },
    heroImage: {
      width: "100%",
      maxWidth: "320px",
      borderRadius: "14px",
      objectFit: "cover",
      boxShadow: "0 8px 36px rgba(120,140,255,0.14)",
    },

    section: {
      backgroundColor: "#f7f9ff",
      borderRadius: "16px",
      padding: "22px",
      boxShadow: "0 4px 20px rgba(120,140,255,0.06)",
    },
    sectionHead: {
      fontSize: "1.35rem",
      fontWeight: 700,
      marginBottom: "14px",
      color: "#2f5adf",
      textAlign: "center",
    },

    twoCol: {
      display: "grid",
      gridTemplateColumns: "1fr 340px",
      gap: "20px",
      alignItems: "start",
    },

    mainContent: {
      // className 'mainContent' used for ordering in mobile
    },

    toolGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: "12px",
      marginTop: "8px",
      alignItems: "center",
    },
    toolItem: {
      textAlign: "center",
      background: "#e8f0ff",
      padding: "12px",
      borderRadius: "10px",
      boxShadow: "0 3px 10px rgba(120,130,255,0.06)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
    },
    toolImg: {
      width: "68px",
      height: "68px",
      objectFit: "cover",
      borderRadius: "10px",
    },

    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "14px",
    },

    faqItem: {
      background: "#e9f1ff",
      borderRadius: "10px",
      padding: "12px",
      marginBottom: "10px",
    },

    enquireCard: {
      background: "linear-gradient(135deg, #526bff, #2f47ff)",
      color: "#fff",
      borderRadius: "14px",
      padding: "20px",
      textAlign: "center",
      boxShadow: "0 10px 30px rgba(50,80,255,0.12)",
    },
    btn: {
      display: "inline-block",
      marginTop: "10px",
      padding: "10px 22px",
      borderRadius: "12px",
      textDecoration: "none",
      color: "#fff",
      fontWeight: 700,
      background: "linear-gradient(270deg,#2b44ff,#5f7aff)",
    },
  };

  const highlights = [
    "Real-World Project Focus: Hands-on experience with live projects.",
    "Industry Expert Trainers bringing corporate insights.",
    "Essential Tool Mastery: Git, Jenkins, Docker, Kubernetes, Ansible.",
    "Job-Ready Skills: CI/CD, automation, monitoring & deployment.",
    "Placement Assistance: Resume prep, interview coaching & company connects.",
    "Cloud + DevOps expertise: AWS, Azure, GCP basics included.",
    "Career support and mentorship throughout the course.",
    "Completion certificate to validate your skills.",
  ];

  const syllabus = [
    { title: "Introduction to DevOps & CI/CD", desc: "Principles, culture & toolchain overview." },
    { title: "Linux & Shell Basics", desc: "Shell scripting, permissions, networking basics." },
    { title: "Git & Version Control", desc: "Branching, merging, workflows & GitHub/GitLab." },
    { title: "Docker & Containerization", desc: "Images, containers, registries & best practices." },
    { title: "Jenkins & CI Pipelines", desc: "Automating builds, tests & deployments." },
    { title: "Kubernetes", desc: "Clusters, pods, services, deployments & scaling." },
    { title: "Terraform (IAC)", desc: "Provisioning cloud resources with Terraform." },
    { title: "Ansible (Config Mgmt)", desc: "Playbooks, roles & automation." },
    { title: "Monitoring & Logging", desc: "Prometheus, Grafana & ELK stack overview." },
  ];

  const tools = [
    { img: "/tools/dev2.png", name: "Docker" },
    { img: "/tools/dev3.jpeg", name: "Kubernetes" },
    { img: "/tools/dev4.png", name: "Jenkins" },
    { img: "/tools/dev1.png", name: "GitLab CI/CD" },
    { img: "/tools/dev5.png", name: "AWS" },
    { img: "/tools/dev6.png", name: "Terraform" },
  ];

  const faqs = [
    { q: "Is this course beginner-friendly?", a: "Yes — starts from basics and moves to advanced with practical projects." },
    { q: "Will I get placement support?", a: "Yes — resume prep, interview mockups and placement connections." },
    { q: "What is the duration?", a: "Typically 2.5 to 3 months with hands-on labs and projects." },
    { q: "Do you provide certification?", a: "Yes — completion certificate on successful course completion." },
  ];

  return (
    <div style={styles.page}>
      <main style={styles.container}>
        {/* HERO */}
        <header style={styles.hero} className="devops-hero">
          <div style={styles.heroText}>
            <h1 style={styles.heroH1}>Master DevOps Program Training in Trichy</h1>
            <p style={styles.heroP}>
              Time to Level Up Your Career! DevOps is booming — learn CI/CD, automation, Docker, Kubernetes,
              and cloud deployment with live industry projects and expert mentors.
            </p>
            <a href="#enquire" style={styles.btn}>Enquire Now</a>
          </div>

          <div style={styles.heroImageContainer}>
            {/* developer instruction: use uploaded screenshot path */}
            <img
              style={styles.heroImage}
              src={"/mnt/data/Screenshot 2025-11-22 134628.png"}
              alt="DevOps Training"
            />
          </div>
        </header>

        {/* HIGHLIGHTS */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Course Highlights</h2>
          <div style={styles.cardGrid}>
            {highlights.map((h, i) => (
              <div key={i} style={{ ...styles.highlightCard, padding: 14 }}>{h}</div>
            ))}
          </div>
        </section>

        {/* TWO-COLUMN: description (main) + tools (aside) */}
        <section style={styles.section}>
          <div className="twoCol" style={styles.twoCol}>
            <div className="mainContent" style={styles.mainContent}>
              <h2 style={{ color: "#2f5adf" }}>DevOps Engineer</h2>
              <p>
                A DevOps Engineer bridges the gap between development and operations by automating workflows,
                managing infrastructure, and ensuring smooth software delivery. They focus on continuous integration,
                deployment, monitoring, and scaling of applications.
              </p>

              <h3 style={{ color: "#2f5adf" }}>Description</h3>
              <p>DevOps engineers manage CI/CD pipelines, cloud, and automation.</p>

              <ul>
                <li>Works on automating software development and deployment processes.</li>
                <li>Manages servers, cloud infrastructure, and CI/CD pipelines.</li>
                <li>Ensures reliability, scalability, and high availability of systems.</li>
                <li>Collaborates with developers, QA, and IT teams for faster releases.</li>
                <li>Common technologies: Linux, Docker, Kubernetes, Jenkins, Terraform, Ansible.</li>
                <li>Cloud platforms: AWS, Azure, Google Cloud.</li>
              </ul>

              <h3 style={{ color: "#2f5adf" }}>Advantages</h3>
              <ul>
                <li>High Demand – Every modern company needs DevOps for automation.</li>
                <li>Good Salary – Strong earning potential due to specialized skills.</li>
                <li>Efficiency – Reduces manual work, increases deployment speed.</li>
                <li>Scalability – Skills apply to startups and large enterprises.</li>
                <li>Career Growth – Path into Cloud Architect, SRE, or Platform Engineer roles.</li>
                <li>Critical Role – Backbone of modern software delivery pipelines.</li>
              </ul>
            </div>

            <aside className="toolsAside" style={{ width: 340 }}>
              <h3 style={{ marginTop: 0, color: "#2f5adf" }}>Tools & Technologies Used</h3>
              <div className="toolGrid" style={styles.toolGrid}>
                {tools.map((t, i) => (
                  <div key={i} style={styles.toolItem}>
                    <img src={t.img} style={styles.toolImg} alt={t.name} />
                    <p style={{ margin: 0, fontWeight: 700 }}>{t.name}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* SYLLABUS */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Syllabus Snapshot</h2>
          <div style={styles.cardGrid}>
            {syllabus.map((s, i) => (
              <div key={i} style={styles.card}>
                <h3 style={{ marginTop: 0 }}>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>DevOps Course FAQ</h2>
          {faqs.map((f, i) => (
            <details key={i} style={styles.faqItem}>
              <summary style={{ fontWeight: 700 }}>{f.q}</summary>
              <p style={{ marginTop: 8 }}>{f.a}</p>
            </details>
          ))}
        </section>

        {/* CTA */}
        <section id="enquire" style={{ textAlign: "center" }}>
          <div style={styles.enquireCard}>
            <h3 style={{ margin: 0, fontWeight: 700 }}>DevOps Certification Training in Trichy</h3>
            <p style={{ marginTop: 10 }}>At Growwake, once you complete the DevOps Course, you receive a highly valued completion certificate.</p>
            <a href="/register" style={styles.btn}>Enquire Now</a>
          </div>
        </section>
      </main>

      {/* responsive ordering + small tweaks */}
      <style>{`
        /* ensure tool images don't overflow and are centered */
        .toolGrid img { max-width: 100%; height: auto; display:block; margin: 0 auto; }

        /* Two-column -> single column on small screens and ensure tools come after main content */
        @media (max-width: 880px) {
          .twoCol {
            display: block !important;
          }
          .twoCol .mainContent {
            order: 1;
            width: 100%;
            margin-bottom: 18px;
          }
          .twoCol .toolsAside {
            order: 2;
            width: 100% !important;
          }

          /* make hero image smaller and stack */
          .devops-hero { flex-direction: column; gap: 16px; }
          .devops-hero img { max-width: 85%; }

          /* adjust container padding on small screens */
          main { padding: 14px; }
        }

        /* minor tablet tweaks */
        @media (min-width: 881px) and (max-width: 1100px) {
          .twoCol { grid-template-columns: 1fr 300px !important; }
        }
      `}</style>
    </div>
  );
};

export default DevOps;
