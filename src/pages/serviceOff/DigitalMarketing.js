import React from "react";

export default function DigitalMarketing() {
  // Online images/icons
  const heroImg =
    "https://cdn.pixabay.com/photo/2017/06/10/07/00/seo-2394154_1280.jpg"; // Hero image
  const seoIcon =
    "https://cdn-icons-png.flaticon.com/512/1055/1055646.png"; // SEO
  const ppcIcon =
    "https://cdn-icons-png.flaticon.com/512/1055/1055683.png"; // PPC/Ads
  const smmIcon =
    "https://cdn-icons-png.flaticon.com/512/3128/3128254.png"; // Social Media
  const emailIcon =
    "https://cdn-icons-png.flaticon.com/512/561/561127.png"; // Email Marketing
  const ecommerceIcon =
    "https://cdn-icons-png.flaticon.com/512/2983/2983644.png"; // E-commerce
  const contentIcon =
    "https://cdn-icons-png.flaticon.com/512/2921/2921222.png"; // Content Marketing
  const reputationIcon =
    "https://cdn-icons-png.flaticon.com/512/1828/1828774.png"; // Reputation
  const videoIcon =
    "https://cdn-icons-png.flaticon.com/512/732/732200.png"; // Video
  const analyticsIcon =
    "https://cdn-icons-png.flaticon.com/512/1828/1828843.png"; // Analytics

  const services = [
    { title: "SEO Optimization (Local SEO)", icon: seoIcon },
    { title: "Google Ads (PPC) Campaigns", icon: ppcIcon },
    { title: "Social Media Marketing", icon: smmIcon },
    { title: "Email & WhatsApp Marketing Automation", icon: emailIcon },
    { title: "E-commerce Marketing Strategies", icon: ecommerceIcon },
    { title: "Content Marketing & Storytelling", icon: contentIcon },
    { title: "Online Reputation Management", icon: reputationIcon },
    { title: "Video Marketing (YouTube & Instagram)", icon: videoIcon },
    { title: "Analytics & Conversion Optimization", icon: analyticsIcon },
  ];

  const faqs = [
    { q: "How does Growwake support local businesses?", a: "We optimize Google Business Profiles & implement Local SEO strategies to increase visibility." },
    { q: "What services are included?", a: "SEO, PPC, Social Media Marketing, Email Automation, Content Marketing, Video Marketing, Analytics." },
    { q: "How to get started?", a: "Contact Growwake for a free consultation and personalized marketing plan." },
  ];

  const styles = {
    root: {
      fontFamily: "'Poppins', sans-serif",
      color: "#1e1e2a",
      background: "#f6f7ff",
    },
    heroWrap: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      background: "linear-gradient(135deg,#6f56ff,#00c3ff)",
      color: "#fff",
      padding: "80px 6% 60px",
      borderBottomLeftRadius: "40px",
      borderBottomRightRadius: "40px",
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
    heroRight: { flex: "1 1 400px", textAlign: "center", minWidth: 300 },
    heroImage: { width: "100%", maxWidth: 500, borderRadius: 20 },
    section: { padding: "64px 6%" },
    sectionH2: { fontSize: 32, color: "#5b48ff", textAlign: "center", fontWeight: 800, marginBottom: 24 },
    cardsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
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

  const onCardHover = (e, enter) => {
    e.currentTarget.style.transform = enter ? "translateY(-8px) scale(1.01)" : "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = enter
      ? "0 20px 48px rgba(18,18,36,0.12)"
      : "0 12px 30px rgba(18,18,36,0.06)";
  };

  return (
    <div style={styles.root}>
      <header style={styles.heroWrap}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heroTitle}>Best Digital Marketing Company in Trichy</h1>
          <p style={styles.heroSub}>Growwake provides data-driven digital marketing strategies to increase brand visibility and drive measurable growth.</p>
          <div style={styles.heroBtns}>
            <button style={styles.heroButtonPrimary}>Free Consultation</button>
            <button style={styles.heroButtonSecondary}>Contact Us</button>
          </div>
        </div>
        <div style={styles.heroRight}>
          <img src={heroImg} alt="Hero" style={styles.heroImage} />
        </div>
      </header>

      {/* Services */}
      <section style={styles.section}>
        <h2 style={styles.sectionH2}>Our Digital Marketing Services</h2>
        <div style={styles.cardsGrid}>
          {services.map((s, idx) => (
            <div key={idx} style={styles.card} onMouseEnter={(e) => onCardHover(e, true)} onMouseLeave={(e) => onCardHover(e, false)}>
              <img src={s.icon} alt={s.title} style={styles.cardIcon} />
              <div style={styles.cardTitle}>{s.title}</div>
              <div style={styles.cardText}>Professional service to help your business grow online.</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={styles.section}>
        <div style={styles.ctaWrap}>
          <div style={styles.ctaText}>Ready to boost your business online? Contact Growwake today!</div>
          <button style={styles.ctaButton}>Call Now</button>
        </div>
      </section>

      {/* FAQ */}
      <section style={styles.section}>
        <h2 style={styles.sectionH2}>FAQ - Digital Marketing</h2>
        <div style={styles.faqGrid}>
          {faqs.map((f, idx) => (
            <div key={idx} style={styles.faqItem}>
              <strong>{f.q}</strong>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} Growwake Pvt Ltd · Digital Marketing in Trichy · <a href="https://www.growwake.in" target="_blank" rel="noreferrer" style={{ color: "#5b48ff" }}>growwake.in</a>
      </footer>
    </div>
  );
}
