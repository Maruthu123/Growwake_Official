import React from "react";

export default function WebDevelopment() {
  // Updated online images
  const heroImg =
    "https://images.unsplash.com/photo-1581090700227-6d6f3a2b6c24?auto=format&fit=crop&w=1400&q=80"; // Professional web dev hero
  const featureIcon =
    "https://cdn-icons-png.flaticon.com/512/2910/2910762.png"; // keep same as suitable for features
  const devImg =
    "https://images.unsplash.com/photo-1591696205602-4b89b9023513?auto=format&fit=crop&w=1400&q=80"; // dev image
  const industryImg =
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80"; // office / industry image

  const styles = {
    root: {
      fontFamily:
        "'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      color: "#1e1e2a",
      background: "#f6f7ff",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
    heroWrap: {
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(135deg,#00c3ff 0%, #6f56ff 100%)",
      color: "white",
      padding: "80px 6% 60px",
      display: "flex",
      gap: "32px",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      borderBottomLeftRadius: "40px",
      borderBottomRightRadius: "40px",
    },
    heroLeft: { flex: "1 1 420px", minWidth: 300, zIndex: 2 },
    heroTitle: {
      fontSize: "44px",
      lineHeight: 1.06,
      margin: 0,
      fontWeight: 800,
      letterSpacing: "-0.4px",
      textShadow: "0 6px 25px rgba(0,0,0,0.15)",
      animation: "fadeUp .9s ease both",
    },
    heroSub: {
      marginTop: "16px",
      fontSize: "18px",
      maxWidth: "560px",
      color: "rgba(255,255,255,0.95)",
      animation: "fadeUp 1.1s ease both",
    },
    heroBtns: { marginTop: 26, display: "flex", gap: 14, alignItems: "center" },
    heroButtonPrimary: {
      background: "linear-gradient(90deg,#ffffff,#f2f2ff)",
      color: "#5a3fff",
      padding: "14px 28px",
      borderRadius: "999px",
      fontWeight: 700,
      border: "none",
      cursor: "pointer",
      boxShadow: "0 10px 30px rgba(90,63,255,0.18)",
    },
    heroButtonSecondary: {
      background: "transparent",
      color: "rgba(255,255,255,0.95)",
      padding: "12px 20px",
      borderRadius: "999px",
      border: "1px solid rgba(255,255,255,0.18)",
      cursor: "pointer",
      fontWeight: 600,
    },
    heroRight: {
      flex: "1 1 420px",
      minWidth: 300,
      textAlign: "center",
      zIndex: 2,
    },
    heroImage: {
      width: "92%",
      maxWidth: 520,
      borderRadius: 18,
      boxShadow: "0 30px 70px rgba(0,0,0,0.25)",
      transform: "translateY(6px)",
      animation: "floatImg 6s ease-in-out infinite",
    },
    section: { padding: "64px 6%" },
    sectionInner: { maxWidth: 1180, margin: "0 auto" },
    sectionH2: {
      fontSize: "32px",
      color: "#5b48ff",
      marginBottom: 14,
      fontWeight: 800,
      textAlign: "center",
    },
    leadPara: {
      textAlign: "center",
      maxWidth: 920,
      margin: "0 auto",
      fontSize: 17,
      color: "#3b3b46",
      lineHeight: 1.7,
    },
    twoCol: { display: "flex", gap: 28, flexWrap: "wrap", marginTop: 28 },
    colLeft: { flex: "1 1 420px", minWidth: 300 },
    colRight: { flex: "1 1 380px", minWidth: 300 },
    featureList: { marginTop: 18, paddingLeft: 18 },
    featureItem: { marginBottom: 12, fontSize: 17, color: "#333" },
    cardsGrid: {
      marginTop: 28,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 20,
    },
    card: {
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(245,245,255,0.85))",
      borderRadius: 14,
      padding: 20,
      boxShadow: "0 12px 30px rgba(18,18,36,0.06)",
      transition:
        "transform .28s cubic-bezier(.2,.9,.18,1), box-shadow .28s ease",
      backdropFilter: "saturate(1.1) blur(6px)",
    },
    cardIcon: { width: 52, height: 52, objectFit: "contain", display: "block", marginBottom: 12 },
    cardTitle: { fontSize: 18, fontWeight: 700, marginBottom: 8, color: "#214cff" },
    cardText: { fontSize: 15, color: "#444", lineHeight: 1.6 },
    industryList: { display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", marginTop: 18 },
    ctaWrap: {
      marginTop: 40,
      background: "linear-gradient(90deg,#00c3ff33,#6f56ff33)",
      borderRadius: 14,
      padding: 28,
      display: "flex",
      gap: 18,
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    ctaText: { fontSize: 18, color: "#0e0e16", fontWeight: 700 },
    ctaButton: {
      background: "#5b48ff",
      color: "white",
      padding: "12px 22px",
      borderRadius: 999,
      border: "none",
      cursor: "pointer",
      fontWeight: 800,
      boxShadow: "0 12px 36px rgba(91,72,255,0.18)",
    },
    faqGrid: {
      marginTop: 20,
      display: "grid",
      gap: 16,
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    },
    faqItem: {
      background: "white",
      padding: 18,
      borderRadius: 12,
      boxShadow: "0 10px 26px rgba(15,15,25,0.04)",
      fontSize: 15,
      color: "#333",
    },
    footer: { padding: "36px 6%", textAlign: "center", color: "#999", fontSize: 14 },
  };

  const onCardHover = (e, enter) => {
    if (!e || !e.currentTarget) return;
    e.currentTarget.style.transform = enter
      ? "translateY(-8px) scale(1.01)"
      : "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = enter
      ? "0 20px 48px rgba(18,18,36,0.12)"
      : "0 12px 30px rgba(18,18,36,0.06)";
  };

  return (
    <div style={styles.root}>
      <style>{`
        @keyframes fadeUp { from {opacity:0; transform: translateY(18px)} to {opacity:1; transform: translateY(0)} }
        @keyframes floatImg { 0%{ transform: translateY(0) } 50%{ transform: translateY(-10px) } 100%{ transform: translateY(0) } }
      `}</style>

      {/* HERO */}
      <header style={styles.heroWrap}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heroTitle}>Professional Website Development Company in Trichy</h1>
          <p style={styles.heroSub}>
            Growwake Software Company provides high-quality, bespoke web development and professional UI/UX design in Trichy, Tamil Nadu.
            We deliver SEO-friendly, scalable websites that drive business growth.
          </p>
          <div style={styles.heroBtns}>
            <button style={styles.heroButtonPrimary} onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}>
              Free Consultation
            </button>
            <button style={styles.heroButtonSecondary} onClick={() => window.open("https://www.growwake.in/web-development-company-in-trichy/", "_blank")}>
              Visit Live Page
            </button>
          </div>
        </div>
        <div style={styles.heroRight}>
          <img src={heroImg} alt="Web development hero" style={styles.heroImage} />
        </div>
      </header>

      {/* Intro / Why choose */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionH2}>Why Growwake Web Development Services?</h2>
          <p style={styles.leadPara}>
            Partner with a reliable Website Development Company in Trichy. We specialize in mobile-responsive, SEO-optimized, and conversion-focused web development that elevates your online presence and grows your business.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionH2}>Our Web Development Services</h2>
          <div style={styles.cardsGrid}>
            <div style={styles.card} onMouseEnter={(e) => onCardHover(e, true)} onMouseLeave={(e) => onCardHover(e, false)}>
              <img src={featureIcon} alt="Custom Development" style={styles.cardIcon} />
              <div style={styles.cardTitle}>Custom Web Development</div>
              <div style={styles.cardText}>Tailored websites built with manual coding for flexibility, speed, and scalability.</div>
            </div>
            <div style={styles.card} onMouseEnter={(e) => onCardHover(e, true)} onMouseLeave={(e) => onCardHover(e, false)}>
              <img src={featureIcon} alt="Responsive" style={styles.cardIcon} />
              <div style={styles.cardTitle}>Responsive Design</div>
              <div style={styles.cardText}>Websites that adapt seamlessly to all screen sizes and devices.</div>
            </div>
            <div style={styles.card} onMouseEnter={(e) => onCardHover(e, true)} onMouseLeave={(e) => onCardHover(e, false)}>
              <img src={featureIcon} alt="SEO" style={styles.cardIcon} />
              <div style={styles.cardTitle}>SEO Optimized</div>
              <div style={styles.cardText}>Websites structured to rank better on search engines and drive traffic.</div>
            </div>
            <div style={styles.card} onMouseEnter={(e) => onCardHover(e, true)} onMouseLeave={(e) => onCardHover(e, false)}>
              <img src={featureIcon} alt="Maintenance" style={styles.cardIcon} />
              <div style={styles.cardTitle}>Maintenance & Support</div>
              <div style={styles.cardText}>Regular updates, backups, and bug fixes to keep your website running smoothly.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionH2}>Industries We Serve in Trichy</h2>
          <div style={styles.industryList}>
            {["E-commerce & Retail","Healthcare & Pharmacy","Education & Institutions","Real Estate & Construction","Hospitality & Travel","Logistics & Automotive"].map((ind, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <img src={industryImg} alt={ind} style={{ width: 56, borderRadius: 8 }} />
                <div style={{ fontWeight: 700 }}>{ind}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ ...styles.section, paddingTop: 20 }}>
        <div style={styles.sectionInner}>
          <div style={styles.ctaWrap}>
            <div style={styles.ctaText}>
              Ready to grow your business online? Contact Growwake for a free web development consultation!
            </div>
            <div>
              <button style={styles.ctaButton} onClick={() => window.location.href = "tel:+91 93441 36610"}>
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ ...styles.section, paddingTop: 16 }}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionH2}>FAQ - Website Development in Trichy</h2>
          <div style={styles.faqGrid}>
            {[  
              { q: "Why hire a professional web development company?", a: "Professional developers ensure responsive, SEO-friendly, and secure websites with excellent UX." },
              { q: "Does Growwake create e-commerce websites?", a: "Yes, we provide Shopify & WooCommerce solutions, along with custom backend development." },
              { q: "Do you provide maintenance services?", a: "Absolutely, our packages include backups, updates, bug fixes, and security checks." },
              { q: "Is your development mobile-friendly?", a: "All websites are fully responsive, ensuring seamless experience across devices." },
              { q: "Can you improve my website's SEO?", a: "Yes, manual coding and optimization are applied to improve search engine rankings." },
              { q: "How long does it take to build a website?", a: "Typically 3–8 weeks depending on complexity, design, and features." },
            ].map((faq, i) => (
              <div key={i} style={styles.faqItem}>
                <strong>{faq.q}</strong>
                <p style={{ marginTop: 8 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Growwake — Website Development Company in Trichy · <a href="https://www.growwake.in/web-development-company-in-trichy/" style={{ color: "#5b48ff", textDecoration: "none" }} target="_blank" rel="noreferrer">growwake.in</a>
      </footer>
    </div>
  );
}
