import React from "react";

const Frontend = () => {
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

    /* ---------------- SERVICE DESCRIPTION ---------------- */
    serviceSection: {
      backgroundColor: "#eef0ff",
      borderRadius: "20px",
      padding: "28px 24px",
      boxShadow: "0 4px 20px rgba(140,130,255,0.2)",
    },
    toolGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: "20px",
      marginTop: "18px",
    },
    toolItem: {
      textAlign: "center",
      background: "#dedcff",
      padding: "14px",
      borderRadius: "14px",
      boxShadow: "0 3px 14px rgba(120,110,255,0.2)",
    },
    toolImg: {
      width: "70px",
      height: "70px",
      objectFit: "cover",
      borderRadius: "10px",
      marginBottom: "8px",
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

        {/* HERO */}
        <header style={styles.hero}>
          <div style={styles.heroText}>
            <h1 style={styles.heroH1}>Best Front-End Developer Course in Trichy</h1>
            <p style={styles.heroP}>
              Learn how to build beautiful, responsive and interactive websites!
              Growwake’s Front-End Developer Training in Trichy is the perfect
              choice to start your career in UI/UX and modern front-end development.
            </p>
            <a href="#enquire" style={styles.animatedBtn}>Enquire Now</a>
          </div>
          <div style={styles.heroImageContainer}>
            <img
              style={styles.heroImage}
              src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=600"
              alt="Frontend developer working on UI"
            />
          </div>
        </header>

        {/* HIGHLIGHTS */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Why Learn Front-End Development?</h2>
          <div style={styles.highlightGrid}>
            {[
              "Master HTML5, CSS3, JavaScript, Bootstrap & Responsive Design.",
              "Learn Modern Frameworks: React.js / Angular / Vue.js.",
              "Hands-on training with real-world projects.",
              "Learn Git, GitHub, DevTools & developer workflows.",
              "Strong communication & aptitude training included.",
              "Expert trainers from top IT companies.",
              "Project-based learning + portfolio building.",
              "100% placement support & mock interviews.",
            ].map((text, i) => (
              <div key={i} style={styles.highlightCard}>{text}</div>
            ))}
          </div>
        </section>

        {/* OBJECTIVES */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>What You Will Learn</h2>
          <div style={styles.objGrid}>
            {[
              {
                img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
                title: "HTML5 & CSS3 Mastery",
                desc: "Create beautiful layouts using modern HTML semantics and CSS styling."
              },
              {
                img: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
                title: "JavaScript (ES6+)",
                desc: "Build interactive UI components and dynamic web features."
              },
              {
                img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
                title: "React / Angular / Vue",
                desc: "Master modern frameworks used by top IT companies."
              },
              {
                img: "https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg",
                title: "UI/UX & Responsive Design",
                desc: "Create visually appealing layouts suitable for all screen sizes."
              },
              {
                img: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
                title: "Git & Developer Tools",
                desc: "Learn Git, GitHub, NPM, Chrome DevTools & coding best practices."
              },
            ].map((item, idx) => (
              <div key={idx} style={styles.objCard}>
                <img src={item.img} style={styles.objCardImg} alt="" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICE DESCRIPTION + TOOLS */}
        <section style={styles.serviceSection}>
          <h2 style={styles.sectionHead}>Frontend Developer Overview</h2>
          <p>
            A Frontend Developer builds the user-facing part of websites and apps — everything you see and interact with in a browser. 
            They turn designs into responsive, interactive, and functional web pages using HTML, CSS, and JavaScript.
          </p>

          <h3>Description</h3>
          <ul>
            <li>Languages & Core Tech: HTML5, CSS3, JavaScript (ES6+)</li>
            <li>Frameworks & Libraries: React.js, Angular, Vue.js, Next.js</li>
            <li>CSS Frameworks & Tools: Bootstrap, Tailwind CSS, Sass/SCSS</li>
            <li>Testing Tools: Jest, Cypress, Playwright</li>
            <li>Version Control & Collaboration: Git & GitHub/GitLab/Bitbucket, Figma / Adobe XD</li>
          </ul>

          <h3>Advantages</h3>
          <ul>
            <li>High Demand – Skills needed by every business.</li>
            <li>Good Salary – Attractive pay worldwide.</li> 
            <li>Creative Work – Blend of design and coding.</li>
            <li>Instant Results – See changes live in the browser.</li>
            <li>Remote Friendly – Easy to work from anywhere.</li>
            <li>Career Growth – Path to full-stack or UI/UX roles.</li>
          </ul>

          <h3 style={{ marginTop: "20px" }}>Tools & Technologies Used</h3>
          <div style={styles.toolGrid}>
            {[
              { img: "/tools/front1.png", name: "HTML" },
              { img: "/tools/front2.png", name: "CSS" },
              { img: "/tools/front3.png", name: "JavaScript" },
              { img: "/tools/front5.png", name: "React" },
              { img: "/tools/front4.png", name: "Angular" },
              { img: "/tools/front6.jpeg", name: "Vue.js" },
            ].map((tool, i) => (
              <div key={i} style={styles.toolItem}>
                <img src={tool.img} style={styles.toolImg} alt="" />
                <p>{tool.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CAREER PATH */}
        <section style={styles.careerSection}>
          <h2 style={styles.sectionHead}>Career Paths After Front-End Course</h2>
          <div style={styles.careerGrid}>
            {[
              { title: "UI Developer", desc: "Build user-friendly visual interfaces." },
              { title: "Front-End Developer", desc: "Create interactive, responsive websites." },
              { title: "React Developer", desc: "Work with modern component-based UI." },
              { title: "UI/UX Engineer", desc: "Blend design + coding to craft seamless UX." },
              { title: "Full Stack Developer (Optional)", desc: "Add backend later to expand career." },
            ].map((item, i) => (
              <div key={i} style={styles.careerCard}>
                <h3 style={{ fontWeight: 600 }}>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={styles.faqSection}>
          <h2 style={styles.sectionHead}>FAQ – Front-End Developer Course</h2>
          {[
            {
              q: "Who is this course for?",
              a: "Anyone – beginners, students, career switchers. No coding experience required.",
            },
            {
              q: "What technologies will I learn?",
              a: "HTML5, CSS3, JavaScript (ES6+), Bootstrap, React / Angular / Vue.",
            },
            {
              q: "Course duration?",
              a: "Typically 3–4 months with 160+ hours of practical training.",
            },
            {
              q: "Will I get placement support?",
              a: "Yes! 100% placement support, mock interviews, resume help, and job referrals.",
            },
            {
              q: "Is classroom + online available?",
              a: "Yes. Growwake supports both online and offline training modes.",
            },
          ].map((f, i) => (
            <details key={i} style={styles.faqDetails}>
              <summary style={{ fontWeight: 700 }}>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>

        {/* ENQUIRE NOW */}
        <section style={styles.enquireSection} id="enquire">
          <div style={styles.enquireCard}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 700 }}>
              Start Your Front-End Developer Journey!
            </h3>
            <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
              Enquire for batch details, fee structure, syllabus, and placement support.
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

export default Frontend;
