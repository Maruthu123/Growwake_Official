import React from "react";

export default function SocialMediaMarketing() {
  // Hero & feature images (online SVG/PNG)
  const heroImg = "https://cdn.pixabay.com/photo/2017/05/10/21/25/social-2307080_1280.jpg";
  const facebookIcon = "https://cdn-icons-png.flaticon.com/512/733/733547.png";
  const instagramIcon = "https://cdn-icons-png.flaticon.com/512/733/733558.png";
  const linkedinIcon = "https://cdn-icons-png.flaticon.com/512/174/174857.png";
  const youtubeIcon = "https://cdn-icons-png.flaticon.com/512/1384/1384060.png";
  const contentIcon = "https://cdn-icons-png.flaticon.com/512/2910/2910768.png";
  const analyticsIcon = "https://cdn-icons-png.flaticon.com/512/1828/1828843.png";

  // Styles
  const styles = {
    root: {
      fontFamily: "'Poppins', sans-serif",
      color: "#1e1e2a",
      background: "#f6f7ff",
      lineHeight: 1.6,
    },
    heroWrap: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "80px 6% 60px",
      background: "linear-gradient(135deg,#6f56ff,#00c3ff)",
      color: "#fff",
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
    },
    heroLeft: { flex: "1 1 400px", minWidth: 300 },
    heroTitle: { fontSize: 44, fontWeight: 800, margin: 0, lineHeight: 1.1 },
    heroSub: { marginTop: 16, fontSize: 18, maxWidth: 560, color: "rgba(255,255,255,0.95)" },
    heroBtns: { marginTop: 26, display: "flex", gap: 14 },
    heroButtonPrimary: {
      background: "#fff",
      color: "#5a3fff",
      padding: "14px 28px",
      borderRadius: 999,
      fontWeight: 700,
      border: "none",
      cursor: "pointer",
    },
    heroButtonSecondary: {
      background: "transparent",
      color: "rgba(255,255,255,0.95)",
      padding: "12px 20px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.18)",
      cursor: "pointer",
      fontWeight: 600,
    },
    heroRight: { flex: "1 1 400px", minWidth: 300, textAlign: "center" },
    heroImage: { width: "100%", maxWidth: 500, borderRadius: 20, boxShadow: "0 30px 70px rgba(0,0,0,0.25)" },

    section: { padding: "64px 6%" },
    sectionH2: { fontSize: 32, color: "#5b48ff", textAlign: "center", fontWeight: 800, marginBottom: 24 },
    leadPara: { textAlign: "center", maxWidth: 920, margin: "0 auto", fontSize: 17, color: "#3b3b46" },

    cardsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 20,
      marginTop: 28,
    },
    card: {
      background: "#fff",
      padding: 20,
      borderRadius: 16,
      boxShadow: "0 12px 30px rgba(18,18,36,0.06)",
      textAlign: "center",
      transition: "transform 0.28s, box-shadow 0.28s",
      cursor: "pointer",
    },
    cardIcon: { width: 52, height: 52, marginBottom: 12 },
    cardTitle: { fontWeight: 700, color: "#214cff", marginBottom: 8 },
    cardText: { fontSize: 14, color: "#555", lineHeight: 1.5 },

    ctaWrap: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      background: "linear-gradient(90deg,#00c3ff33,#6f56ff33)",
      padding: 28,
      borderRadius: 14,
      marginTop: 40,
    },
    ctaText: { fontWeight: 700, fontSize: 18 },
    ctaButton: {
      background: "#5b48ff",
      color: "#fff",
      borderRadius: 999,
      padding: "12px 22px",
      fontWeight: 800,
      cursor: "pointer",
      border: "none",
    },

    faqGrid: { display: "grid", gap: 16, marginTop: 20, gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" },
    faqItem: { background: "#fff", padding: 18, borderRadius: 12, boxShadow: "0 10px 26px rgba(15,15,25,0.04)" },

    footer: { padding: "36px 6%", textAlign: "center", fontSize: 14, color: "#999" },
  };

  const services = [
    { title: "Facebook Marketing", icon: facebookIcon },
    { title: "Instagram Marketing", icon: instagramIcon },
    { title: "LinkedIn Marketing", icon: linkedinIcon },
    { title: "YouTube Marketing", icon: youtubeIcon },
    { title: "Content Strategy & Creation", icon: contentIcon },
    { title: "Ad Campaigns & Management", icon: analyticsIcon },
  ];

  const faqs = [
    { q: "How does SMM help my business?", a: "Increases brand visibility, drives traffic, generates leads, and builds customer relationships." },
    { q: "Who manages my campaigns?", a: "Dedicated teams of strategists, content creators, and ad specialists." },
    { q: "Will I get reports?", a: "Yes, monthly detailed reports are provided to track performance and ROI." },
  ];

  const onCardHover = (e, enter) => {
    e.currentTarget.style.transform = enter ? "translateY(-8px) scale(1.01)" : "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = enter
      ? "0 20px 48px rgba(18,18,36,0.12)"
      : "0 12px 30px rgba(18,18,36,0.06)";
  };

  return (
    <div style={styles.root}>
      {/* Hero */}
      <header style={styles.heroWrap}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heroTitle}>Top Social Media Marketing Company in Trichy</h1>
          <p style={styles.heroSub}>
            Growwake elevates your brand presence on Facebook, Instagram, LinkedIn, and YouTube with data-driven strategies that drive leads and engagement.
          </p>
          <div style={styles.heroBtns}>
            <button style={styles.heroButtonPrimary}>Free Consultation</button>
            <button style={styles.heroButtonSecondary} onClick={() => window.open("https://www.growwake.in/social-media-marketing", "_blank")}>
              Visit Live Page
            </button>
          </div>
        </div>
        <div style={styles.heroRight}>
          <img src={heroImg} alt="SMM Hero" style={styles.heroImage} />
        </div>
      </header>

      {/* Services */}
      <section style={styles.section}>
        <h2 style={styles.sectionH2}>Our Social Media Marketing Services</h2>
        <p style={styles.leadPara}>
          Full-service SMM campaigns including content creation, ads management, engagement strategies, and analytics reporting.
        </p>
        <div style={styles.cardsGrid}>
          {services.map((s, idx) => (
            <div key={idx} style={styles.card} onMouseEnter={(e) => onCardHover(e, true)} onMouseLeave={(e) => onCardHover(e, false)}>
              <img src={s.icon} alt={s.title} style={styles.cardIcon} />
              <div style={styles.cardTitle}>{s.title}</div>
              <div style={styles.cardText}>Professional service to boost your brand on social platforms.</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={styles.section}>
        <div style={styles.ctaWrap}>
          <div style={styles.ctaText}>Ready to grow your business with social media marketing?</div>
          <button style={styles.ctaButton} onClick={() => window.location.href = "tel:+91 93441 36610"}>Call Now</button>
        </div>
      </section>

      {/* FAQ */}
      <section style={styles.section}>
        <h2 style={styles.sectionH2}>SMM FAQ</h2>
        <div style={styles.faqGrid}>
          {faqs.map((f, idx) => (
            <div key={idx} style={styles.faqItem}>
              <strong>{f.q}</strong>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Growwake Pvt Ltd · Social Media Marketing in Trichy · <a href="https://www.growwake.in" target="_blank" rel="noreferrer" style={{ color: "#5b48ff" }}>growwake.in</a>
      </footer>
    </div>
  );
}
   