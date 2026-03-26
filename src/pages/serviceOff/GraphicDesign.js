import React from "react";

export default function GraphicDesign() {
 const heroImg = "/dev.jpg";

  const featureIcons = [
    "https://cdn-icons-png.flaticon.com/512/1829/1829586.png", // Logo & Branding
    
    "https://cdn-icons-png.flaticon.com/512/1829/1829549.png", // Print Design
    "https://cdn-icons-png.flaticon.com/512/1829/1829590.png", // Digital Assets
    "https://cdn-icons-png.flaticon.com/512/1829/1829582.png", // Packaging
  ];
  const industryImg = "https://cdn-icons-png.flaticon.com/512/3595/3595450.png"; // Industry icon
  const styles = {
    root: { fontFamily: "'Poppins', sans-serif", color: "#1e1e2a", background: "#f6f7ff" },
    heroWrap: { position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#6f56ff 0%, #00c3ff 100%)", color: "white", padding: "80px 6% 60px", display: "flex", gap: "32px", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", borderBottomLeftRadius: "40px", borderBottomRightRadius: "40px" },
    heroLeft: { flex: "1 1 420px", minWidth: 300, zIndex: 2 },
    heroTitle: { fontSize: "44px", lineHeight: 1.06, margin: 0, fontWeight: 800 },
    heroSub: { marginTop: "16px", fontSize: "18px", maxWidth: "560px", color: "rgba(255,255,255,0.95)" },
    heroBtns: { marginTop: 26, display: "flex", gap: 14 },
    heroButtonPrimary: { background: "white", color: "#5a3fff", padding: "14px 28px", borderRadius: "999px", fontWeight: 700, border: "none", cursor: "pointer" },
    heroButtonSecondary: { background: "transparent", color: "rgba(255,255,255,0.95)", padding: "12px 20px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.18)", cursor: "pointer", fontWeight: 600 },
    heroRight: { flex: "1 1 420px", minWidth: 300, textAlign: "center", zIndex: 2 },
    heroImage: { width: "100%", maxWidth: 520, borderRadius: 18 },
    section: { padding: "64px 6%" },
    sectionInner: { maxWidth: 1180, margin: "0 auto" },
    sectionH2: { fontSize: "32px", color: "#5b48ff", marginBottom: 14, fontWeight: 800, textAlign: "center" },
    leadPara: { textAlign: "center", maxWidth: 920, margin: "0 auto", fontSize: 17, color: "#3b3b46", lineHeight: 1.7 },
    cardsGrid: { marginTop: 28, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 },
    card: { background: "#fff", borderRadius: 14, padding: 20, boxShadow: "0 12px 30px rgba(18,18,36,0.06)" },
    cardIcon: { width: 52, height: 52, objectFit: "contain", display: "block", marginBottom: 12 },
    cardTitle: { fontSize: 18, fontWeight: 700, marginBottom: 8, color: "#214cff" },
    cardText: { fontSize: 15, color: "#444", lineHeight: 1.6 },
    industryList: { display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", marginTop: 18 },
    ctaWrap: { marginTop: 40, background: "#e0e0ff33", borderRadius: 14, padding: 28, display: "flex", gap: 18, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" },
    ctaText: { fontSize: 18, color: "#0e0e16", fontWeight: 700 },
    ctaButton: { background: "#5b48ff", color: "white", padding: "12px 22px", borderRadius: 999, border: "none", cursor: "pointer", fontWeight: 800 },
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
      {/* HERO */}
      <header style={styles.heroWrap}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heroTitle}>Professional Graphic Designing Company in Trichy</h1>
          <p style={styles.heroSub}>
            Growwake is your premier, professional Graphic Design Agency in Trichy, specializing in integrated creative and digital marketing solutions.
          </p>
          <div style={styles.heroBtns}>
            <button style={styles.heroButtonPrimary} onClick={()=>window.scrollTo({top:800, behavior:'smooth'})}>Free Consultation</button>
            <button style={styles.heroButtonSecondary} onClick={()=>window.open("https://www.growwake.in/graphic-designing-company-in-trichy","_blank")}>Visit Live Page</button>
          </div>
        </div>
        <div style={styles.heroRight}>
          <img src={heroImg} alt="Graphic Design Hero" style={styles.heroImage} />
        </div>
      </header>

      {/* Services */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionH2}>Our Core Graphic Design Services</h2>
          <p style={styles.leadPara}>
            Our team creates high-quality, meaningful visuals including logos, branding, brochures, banners, social media graphics, and packaging that align with modern trends and effective marketing strategies.
          </p>
          <div style={styles.cardsGrid}>
            {[
              { title: "Logo & Branding", text: "Unique logos, corporate identity, and consistent brand visuals." },
              { title: "Print Design", text: "Brochures, flyers, media kits, and business stationery." },
              { title: "Digital Assets", text: "Social media posts, infographics, banners, and marketing visuals." },
              { title: "Product Graphics", text: "Eye-catching packaging and product visuals." },
            ].map((item, idx) => (
              <div key={idx} style={styles.card} onMouseEnter={(e)=>onCardHover(e,true)} onMouseLeave={(e)=>onCardHover(e,false)}>
                <img src={featureIcons[idx]} alt={item.title} style={styles.cardIcon} />
                <div style={styles.cardTitle}>{item.title}</div>
                <div style={styles.cardText}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionH2}>Industries We Serve</h2>
          <p style={styles.leadPara}>
            We provide graphic design solutions for diverse businesses including retail, healthcare, education, hospitality, real estate, and more.
          </p>
          <div style={styles.industryList}>
            {["Retail", "Healthcare", "Education", "Hospitality", "Real Estate"].map((name, idx) => (
              <div key={idx} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <img src={industryImg} alt={name} style={{ width: 56, borderRadius: 8 }} />
                <div style={{ fontWeight: 700 }}>{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <div style={styles.ctaWrap}>
            <div style={styles.ctaText}>Need stunning graphic design? Contact Growwake today!</div>
            <button style={styles.ctaButton} onClick={()=>window.location.href="tel:+919344136610"}>Call Now</button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionH2}>FAQ</h2>
          <div style={styles.faqGrid}>
            {[
              { q: "What is a professional graphic design service?", a: "It involves creating visual content like logos, brochures, and web graphics to communicate messages effectively." },
              { q: "Does Growwake provide specialized logo design?", a: "Yes, our designers craft unique, memorable logos and complete corporate branding identities." },
              { q: "Can Growwake design all marketing materials?", a: "Absolutely. We design brochures, flyers, banners, social media graphics, ensuring brand consistency." },
              { q: "How long does a project take?", a: "Timeline varies by complexity. Logos take a few days; full branding requires collaboration with our team." },
              { q: "Are revisions included?", a: "Yes, a set number of revisions ensure your final design matches your vision." },
            ].map((faq, idx) => (
              <div key={idx} style={styles.faqItem}>
                <strong>{faq.q}</strong>
                <p style={{ marginTop: 8 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Growwake — Graphic Design Company in Trichy · <a href="https://www.growwake.in/graphic-designing-company-in-trichy" target="_blank" rel="noreferrer" style={{color:"#5b48ff", textDecoration:"none"}}>growwake.in</a>
      </footer>
    </div>
  );
}
