import React from "react";

const FullStackCourse = () => {
  const styles = {
    page: {
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#ffffff", // White background as requested
      color: "#3a2a6e", // Violet text
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
    hero: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "24px",
      padding: "34px 22px",
      boxShadow: "0 4px 24px rgba(90, 60, 180, 0.2)",
      gap: "24px",
      flexWrap: "wrap",
      background: "linear-gradient(135deg, #b3a3ff, #8d7bff)", // Light violet-blue gradient
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
      transition: "transform 0.2s",
      cursor: "default",
    },
    highlightCardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 25px rgba(121, 104, 232, 0.3)",
    },
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
      transition: "transform 0.25s",
      cursor: "default",
    },
    objCardHover: {
      transform: "translateY(-7px) scale(1.03)",
    },
    objCardImg: {
      width: "90%",
      height: "90px",
      objectFit: "cover",
      borderRadius: "15px",
      marginBottom: "12px",
      boxShadow: "0 2px 12px rgba(130, 110, 255, 0.4)",
    },
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
    certBlurbUl: {
      paddingLeft: "20px",
      marginTop: "14px",
      color: "#5e4ff3",
    },
    certImage: {
      maxWidth: "250px",
      borderRadius: "18px",
      boxShadow: "0 4px 22px rgba(130, 120, 255, 0.28)",
    },
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
      fontSize: "1.02rem",
      boxShadow: "0 5px 18px rgba(140, 124, 255, 0.3)",
    },
    careerCardTitle: {
      marginBottom: "8px",
      fontWeight: 600,
      color: "#5b4afa",
    },
    faqSection: {
      backgroundColor: "#e9e7ff",
      borderRadius: "16px",
      padding: "26px 20px",
      color: "#302d65",
      marginTop: "24px",
    },
    faqDetails: {
      background: "#cbcafd",
      borderRadius: "12px",
      marginBottom: "12px",
      padding: "14px 18px",
      fontSize: "1rem",
      color: "#3a2987",
      cursor: "pointer",
      transition: "background 0.2s",
    },
    faqDetailsOpen: {
      background: "#a79fff",
    },
    faqSummary: {
      fontWeight: 700,
      outline: "none",
    },
    enquireSection: {
      textAlign: "center",
      marginTop: "40px",
      padding: "0 16px",
    },
    enquireCard: {
      background: "linear-gradient(135deg, #a29eff, #7d6dff)",
      boxShadow: "0 8px 36px rgba(102, 86, 255, 0.45)",
      borderRadius: "22px",
      padding: "38px 26px",
      display: "inline-block",
      color: "#f3f0ff",
    },
    enquireCardH3: {
      fontSize: "1.6rem",
      fontWeight: 700,
      marginBottom: "18px",
    },
    enquireCardP: {
      fontSize: "1.15rem",
      marginBottom: "26px",
    },
    animatedBtn: {
      background: "linear-gradient(270deg, #6d34e1, #45abff, #5535ff, #7e5bff)",
      backgroundSize: "400% 400%",
      animation: "gradientMove 12s ease-in-out infinite",
      padding: "16px 44px",
      borderRadius: "20px",
      color: "#f8f6ff",
      fontWeight: 700,
      textDecoration: "none",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 6px 26px rgba(81, 82, 255, 0.5)",
      userSelect: "none",
      display: "inline-block",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      marginTop: "8px",
    },
  };

  return (
    <div style={styles.page}>
      <main style={styles.container}>
        {/* Hero Section */}
        <header style={styles.hero}>
          <div style={styles.heroText}>
            <h1 style={styles.heroH1}>Best Full Stack Developer Course in Trichy</h1>
            <p style={styles.heroP}>
              Ready to launch your web development career? Join the Full Stack Developer Course at Growwake, recognized as the No. 1 training institute in Trichy. Our course provides hands-on training covering all essential front-end and back-end technologies, project development, database management, and 100% placement support.
            </p>
            <a href="#enquire" style={styles.animatedBtn}>Enquire Now</a>
          </div>
          <div style={styles.heroImageContainer}>
            <img
              style={styles.heroImage}
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Full stack developer learning with code on screen"
            />
          </div>
        </header>

        {/* Highlights Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHead}>Why Choose Growwake’s Full Stack Course?</h2>
          <div style={styles.highlightGrid}>
            {[
              "Balanced Syllabus: Industry-crafted modules covering both Front-end and Back-end equally.",
              "Expert Instructors: Over 10 years’ experience in real-world Web Development.",
              "Recognized Certification: Get job-ready credentials on completion.",
              "Reasonable Fees: Affordable, accessible high-impact training.",
              "Flexible Timings: Pick batches that fit your life; weekday/weekend options.",
              "Dedicated Placement Cell: Committed 100% to your first tech job!",
            ].map((text, idx) => (
              <div key={idx} style={styles.highlightCard}>{text}</div>
            ))}
          </div>
        </section>

        {/* Objectives Section */}
        <section style={{ ...styles.section, marginTop: "0" }}>
          <h2 style={styles.sectionHead}>Course Objectives & Core Skills</h2>
          <div style={styles.objGrid}>
            {[{
              img:"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&w=400",
              alt:"Frontend design code",
              title:"Front-End Mastery",
              desc:"Master HTML, CSS, and JavaScript to build visually stunning, interactive, and responsive web pages."
            },{
              img:"https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&w=400",
              alt:"Backend developer at server",
              title:"Back-End Essentials",
              desc:"Program with powerful server-side technologies (Python, Node.js, PHP, Dot Net, Java) and manage application logic."
            },{
              img:"https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=400",
              alt:"Database system UI",
              title:"Database Expertise",
              desc:"Learn Data Modeling, normalization, SQL & NoSQL (MySQL, PostgreSQL, MongoDB) used by top tech firms."
            },{
              img:"https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=400",
              alt:"Code team collaborating",
              title:"Full Stack Integration",
              desc:"Connect front and back end, deploy and test, and integrate entire applications the right way."
            },{
              img:"https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg?auto=compress&w=400",
              alt:"Git version control course",
              title:"Version Control",
              desc:"Use Git for professional-grade version management and team workflows."
            }].map(({img, alt, title, desc}, idx) => (
              <div key={idx} style={styles.objCard} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-7px) scale(1.03)"} onMouseLeave={e => e.currentTarget.style.transform = "none"}>
                <img src={img} alt={alt} style={styles.objCardImg} />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certification Section */}
        <section style={styles.certSection}>
          <h2 style={styles.sectionHead}>Get Certified & Secure Placement</h2>
          <div style={styles.certPlacement}>
            <div style={styles.certBlurb}>
              <p>
                Earn an industry-valued Full Stack Certification from Growwake. Get personalized placement support, resume building, mock interviews, and continuous job assistance until you get placed!
              </p>
              <ul style={styles.certBlurbUl}>
                <li>Demo project assessments</li>
                <li>Portfolio review and feedback</li>
                <li>Job guarantee support</li>
              </ul>
            </div>
            <div style={styles.certImage}>
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Developer certificate presentation"
                style={{ width: "100%", borderRadius: "15px", boxShadow: "0 4px 20px rgba(155,76,255,0.18)" }}
              />
            </div>
          </div>
        </section>

        {/* Career Section */}
        <section style={styles.careerSection}>
          <h2 style={styles.sectionHead}>Your Prospects in Full Stack Development</h2>
          <div style={styles.careerGrid}>
            {[
              {title:"Complete Creator", desc:"Master both look (front-end) and function (back-end) for end-to-end web applications."},
              {title:"Top Demand", desc:"Full Stack devs are highly sought after, offering premium salaries and job stability."},
              {title:"Anywhere Impact", desc:"Build the latest e-commerce, SaaS, and social platforms that define everyday digital life."},
              {title:"Tech Lead Ready", desc:"Become a confident contributor and grow to leadership or architect roles rapidly."},
              {title:"Growth & Learning", desc:"Stay current—the stack always evolves, so your work remains challenging and rewarding!"},
            ].map(({title, desc}, idx) => (
              <div key={idx} style={styles.careerCard}>
                <h3 style={styles.careerCardTitle}>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section style={styles.faqSection}>
          <h2 style={styles.sectionHead}>Frequently Asked Questions</h2>
          {[
            {q:"Why enroll in Growwake’s Full Stack Course?", a:"Gain practical, job-ready skills in both front-end and back-end development from industry experts through hands-on projects and real-time practice."},
            {q:"Will I get placement support after the course?", a:"Yes, Growwake offers 100% placement support and job assistance after the successful completion of training."},
            {q:"How can I get more information or register?", a:<span>Contact Growwake directly at <a href="tel:+918778612248" style={{color:"#665dff"}}>+91 8778612248</a> or visit <a href="https://www.growwake.in/" target="_blank" rel="noopener noreferrer" style={{color:"#665dff"}}>Growwake.in</a>.</span>},
            {q:"What are the payment options?", a:"Most modes: Cash, Card, Internet transfers/UPI (check current list with them)."},
            {q:"Is classroom and online available?", a:"Yes, you can join via classroom or online as per your preference and schedule."},
          ].map(({q,a}, idx) => (
            <details key={idx} style={styles.faqDetails}>
              <summary style={styles.faqSummary}>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </section>

        {/* Enquire Now */}
        <section style={styles.enquireSection}>
          <div style={styles.enquireCard}>
            <h3 style={styles.enquireCardH3}>Get Started with Growwake!</h3>
            <p style={styles.enquireCardP}>
              Enquire for brochure, batch start, schedule, and full job support. Take your first step towards a Full Stack Developer career.
            </p>
            <a href="/register" style={styles.animatedBtn}>
              Enquire Now
            </a>
          </div>
        </section>
      </main>

      {/* Gradient animation keyframes */}
      <style>
        {`
        @keyframes gradientMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .btn:focus,
        .btn:hover {
          outline: none;
          color: #dcd6ff !important;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          transform: translateY(-2px) scale(1.07) !important;
          box-shadow: 0 11px 30px rgba(123,23,245,0.28) !important;
          animation-play-state: paused !important;
        }
        `}
      </style>
    </div>
  );
};

export default FullStackCourse;
