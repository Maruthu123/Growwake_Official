import React from "react";

export default function SEOService() {
  const heroImg = "https://images.unsplash.com/photo-1581092795367-4b859c1aee46?auto=format&fit=crop&w=1400&q=80"; // SEO-related hero image
  const featureIcon = "https://cdn-icons-png.flaticon.com/512/1829/1829586.png"; // same icon as webdesign
  const industryImg = "https://cdn.pixabay.com/photo/2015/01/09/02/45/office-593310_1280.jpg";

  const styles = {
    root: {
      fontFamily: "'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      color: "#1e1e2a",
      background: "#f6f7ff",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      minHeight: "100vh",
    },
    heroWrap: {
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(135deg,#6f56ff 0%, #00c3ff 100%)",
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
    },
    heroSub: {
      marginTop: "16px",
      fontSize: "18px",
      maxWidth: "560px",
      color: "rgba(255,255,255,0.95)",
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
    leadPara: { textAlign: "center", maxWidth: 920, margin: "0 auto", fontSize: 17, color: "#3b3b46", lineHeight: 1.7 },
    twoCol: { display: "flex", gap: 28, flexWrap: "wrap", marginTop: 28 },
    colLeft: { flex: "1 1 420px", minWidth: 300 },
    colRight: { flex: "1 1 380px", minWidth: 300 },
    featureList: { marginTop: 18, paddingLeft: 18 },
    featureItem: { marginBottom: 12, fontSize: 17, color: "#333" },
    cardsGrid: { marginTop: 28, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 },
    card: {
      background: "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(245,245,255,0.85))",
      borderRadius: 14,
      padding: 20,
      boxShadow: "0 12px 30px rgba(18,18,36,0.06)",
      transition: "transform .28s cubic-bezier(.2,.9,.18,1), box-shadow .28s ease",
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
    faqGrid: { marginTop: 20, display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" },
    faqItem: { background: "white", padding: 18, borderRadius: 12, boxShadow: "0 10px 26px rgba(15,15,25,0.04)", fontSize: 15, color: "#333" },
    footer: { padding: "36px 6%", textAlign: "center", color: "#999", fontSize: 14 },
  };

  const onCardHover = (e, enter) => {
    if (!e || !e.currentTarget) return;
    e.currentTarget.style.transform = enter ? "translateY(-8px) scale(1.01)" : "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = enter
      ? "0 20px 48px rgba(18,18,36,0.12)"
      : "0 12px 30px rgba(18,18,36,0.06)";
  };

  return (
    <div style={styles.root}>
      <header style={styles.heroWrap}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heroTitle}>Top SEO Service Company in Trichy</h1>
          <p style={styles.heroSub}>
            Growwake offers top-notch SEO services in Trichy, helping your website rank higher, generate more traffic, and increase conversions. We specialize in on-page, off-page, and technical SEO for businesses of all sizes.
          </p>
          <div style={styles.heroBtns}>
            <button style={styles.heroButtonPrimary} onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}>
              Free SEO Audit
            </button>
            <button style={styles.heroButtonSecondary} onClick={() => window.open("https://www.growwake.in/seo-company-in-trichy", "_blank")}>
              Visit Live Page
            </button>
          </div>
        </div>
        <div style={styles.heroRight}>
          <img src={heroImg} alt="SEO Hero" style={styles.heroImage} />
        </div>
      </header>

      {/* Why SEO Section */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionH2}>Why Choose Growwake for SEO in Trichy</h2>
          <p style={styles.leadPara}>
            Our team crafts SEO strategies tailored to your business goals. From keyword research, content optimization, link building, to technical SEO fixes, we ensure maximum visibility on Google and other search engines.
          </p>
          <div style={styles.twoCol}>
            <div style={styles.colLeft}>
              <ul style={styles.featureList}>
                <li style={styles.featureItem}><strong>Keyword Research:</strong> Find profitable search terms for your business.</li>
                <li style={styles.featureItem}><strong>On-page SEO:</strong> Optimize meta tags, headings, images, and content structure.</li>
                <li style={styles.featureItem}><strong>Technical SEO:</strong> Improve site speed, indexing, and crawlability.</li>
                <li style={styles.featureItem}><strong>Off-page SEO:</strong> Build high-quality backlinks and improve domain authority.</li>
              </ul>
            </div>
            <div style={styles.colRight}>
              <img src={industryImg} alt="SEO" style={{ width: "100%", borderRadius: 12, boxShadow: "0 18px 50px rgba(20,20,40,0.08)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ ...styles.section, paddingTop: 20 }}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionH2}>Our Complete SEO Services</h2>
          <div style={styles.cardsGrid}>
            <div style={styles.card} onMouseEnter={(e) => onCardHover(e, true)} onMouseLeave={(e) => onCardHover(e, false)}>
              <img src={featureIcon} alt="SEO" style={styles.cardIcon} />
              <div style={styles.cardTitle}>On-page SEO</div>
              <div style={styles.cardText}>Optimize every page with target keywords, meta tags, and structured content for better rankings.</div>
            </div>
            <div style={styles.card} onMouseEnter={(e) => onCardHover(e, true)} onMouseLeave={(e) => onCardHover(e, false)}>
              <img src={featureIcon} alt="SEO" style={styles.cardIcon} />
              <div style={styles.cardTitle}>Off-page SEO</div>
              <div style={styles.cardText}>Link building, social signals, and authority building to boost domain strength and rankings.</div>
            </div>
            <div style={styles.card} onMouseEnter={(e) => onCardHover(e, true)} onMouseLeave={(e) => onCardHover(e, false)}>
              <img src={featureIcon} alt="SEO" style={styles.cardIcon} />
              <div style={styles.cardTitle}>Technical SEO</div>
              <div style={styles.cardText}>Improve site speed, mobile-friendliness, indexing, and schema implementation for better crawlability.</div>
            </div>
            <div style={styles.card} onMouseEnter={(e) => onCardHover(e, true)} onMouseLeave={(e) => onCardHover(e, false)}>
              <img src={featureIcon} alt="SEO" style={styles.cardIcon} />
              <div style={styles.cardTitle}>Content SEO</div>
              <div style={styles.cardText}>Create high-quality, keyword-rich content that engages visitors and drives organic traffic.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionH2}>Industries We Serve</h2>
          <div style={styles.industryList}>
            {["E-Commerce", "Healthcare", "Education", "Real Estate", "Hospitality", "Logistics"].map((ind, i) => (
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
            <div style={styles.ctaText}>Want to rank higher on Google? Contact Growwake for SEO services now!</div>
            <div>
              <button style={styles.ctaButton} onClick={() => window.location.href = "tel:+919344136610"}>Call Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ ...styles.section, paddingTop: 16 }}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionH2}>SEO FAQ</h2>
          <div style={styles.faqGrid}>
            <div style={styles.faqItem}>
              <strong>What is SEO?</strong>
              <p>SEO (Search Engine Optimization) helps your website rank higher in search engine results.</p>
            </div>
            <div style={styles.faqItem}>
              <strong>Why is SEO important?</strong>
              <p>SEO increases visibility, drives organic traffic, and boosts business growth.</p>
            </div>
            <div style={styles.faqItem}>
              <strong>Do you provide reports?</strong>
              <p>Yes, monthly detailed performance reports are provided.</p>
            </div>
            <div style={styles.faqItem}>
              <strong>How long until I see results?</strong>
              <p>SEO typically shows results in 3–6 months depending on competition and website authority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Growwake — SEO Service Company in Trichy · <a href="https://www.growwake.in/seo-company-in-trichy" style={{ color: "#5b48ff", textDecoration: "none" }} target="_blank" rel="noreferrer">growwake.in</a>
      </footer>
    </div>
  );
}
