import React from "react";

export default function WebDesign() {
  // Online images (free-to-use / CDN)   
 const heroImg = "/webdesign2.png";

  const featureIcon =
    "https://cdn-icons-png.flaticon.com/512/1829/1829586.png";
  const devImg =
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=0b1a2b7a13a6f1a6c2b7c07f5b51b6bd";
  const industryImg =
    "https://cdn.pixabay.com/photo/2015/01/09/02/45/office-593310_1280.jpg";
  const faqIcon =
    "https://cdn-icons-png.flaticon.com/512/545/545676.png";

  // Inline styles object
  const styles = {
    root: {
      fontFamily: "'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      color: "#1e1e2a",
      background: "#f6f7ff",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },

    // Hero
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
      transformOrigin: "center",
      transition: "transform .22s ease, box-shadow .22s ease",
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

    // Section
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

    // Two columns
    twoCol: { display: "flex", gap: 28, flexWrap: "wrap", marginTop: 28 },
    colLeft: { flex: "1 1 420px", minWidth: 300 },
    colRight: { flex: "1 1 380px", minWidth: 300 },

    // Feature / bullets
    featureList: { marginTop: 18, paddingLeft: 18 },
    featureItem: { marginBottom: 12, fontSize: 17, color: "#333" },

    // Cards grid
    cardsGrid: {
      marginTop: 28,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 20,
    },
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

    // Industries list
    industryList: { display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", marginTop: 18 },

    // CTA
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

    // FAQ
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

    // Footer
    footer: { padding: "36px 6%", textAlign: "center", color: "#999", fontSize: 14 },

    // Responsive tweaks (small)
    '@media': {
      small: {
        heroTitle: { fontSize: "30px" },
      },
    },
  };

  // small helper for inline hover behaviour via onMouse events (keeps file fully inline)
  const onCardHover = (e, enter) => {
    if (!e || !e.currentTarget) return;
    e.currentTarget.style.transform = enter ? "translateY(-8px) scale(1.01)" : "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = enter
      ? "0 20px 48px rgba(18,18,36,0.12)"
      : "0 12px 30px rgba(18,18,36,0.06)";
  };

  return (
    <div style={styles.root}>
      {/* Inline keyframes + small classes */}
      <style>{`
        @keyframes fadeUp { from {opacity:0; transform: translateY(18px)} to {opacity:1; transform: translateY(0)} }
        @keyframes floatImg { 0%{ transform: translateY(0) } 50%{ transform: translateY(-10px) } 100%{ transform: translateY(0) } }
        @media (max-width: 880px) {
          .hero-title { font-size: 32px !important; }
          .hero-wrap { padding: 42px 6% !important; }
        }
        .rich-underline { display:inline-block; position:relative; }
        .rich-underline::after { content:''; position:absolute; left:0; bottom: -6px; height:10px; width:100%; background: linear-gradient(90deg,#fff2ff66,#cfeeff66); border-radius:6px; z-index:-1; }
      `}</style>

      {/* HERO */}
      <header style={styles.heroWrap} className="hero-wrap">
        <div style={styles.heroLeft}>
          <h1 style={{ ...styles.heroTitle }} className="hero-title">
            <span className="rich-underline">Top Web Design Company in Trichy</span>
          </h1>
          <p style={styles.heroSub}>
            Growwake is a dedicated Web Design Company in Trichy, Tamil Nadu,
            specializing in crafting tailor-made websites that drive business results.
            We use manual coding techniques for robust, flexible solutions with excellent SEO and UX.
          </p>

          <div style={styles.heroBtns}>
            <button
              style={styles.heroButtonPrimary}
              onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
            >
              Free Consultation
            </button>
            <button
              style={styles.heroButtonSecondary}
              onClick={() => window.open("https://www.growwake.in/web-design-company-in-trichy", "_blank")}
            >
              Visit Live Page
            </button>
          </div>
        </div>

        <div style={styles.heroRight}>
          <img src={heroImg} alt="Web design hero" style={styles.heroImage} />
        </div>
      </header>

      {/* Intro / Why choose */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionH2}>Growwake: Your Best Web Design Company in Trichy</h2>
          <p style={styles.leadPara}>
            Sophisticated UI/UX Designs, Guaranteed Mobile Compatibility (Responsive Web Design),
            Expert SEO Optimization, and Attractive Web Animations — all crafted to convert visitors into customers.
          </p>

          <div style={styles.twoCol}>
            <div style={styles.colLeft}>
              <h3 style={{ marginTop: 20, marginBottom: 10, color: "#2b2b38" }}>
                Partner with the Top Web Developers in Trichy
              </h3>
              <p style={{ color: "#444", lineHeight: 1.7 }}>
                In close cooperation with your team, our web developers and design specialists design the ideal web experience
                for your company. If you're looking for a reliable and expert Web Design Service in Trichy, choose Growwake to elevate your online presence.
              </p>

              <ul style={styles.featureList}>
                <li style={styles.featureItem}><strong>Custom Development:</strong> Fresh UI and advanced coding techniques for a scalable website.</li>
                <li style={styles.featureItem}><strong>Ultimate UX:</strong> Seamless navigation and engaging user journeys.</li>
                <li style={styles.featureItem}><strong>Professional Delivery:</strong> High-performing, mobile-responsive websites.</li>
              </ul>
            </div>

            <div style={styles.colRight}>
              <img src={devImg} alt="Development" style={{ width: "100%", borderRadius: 12, boxShadow: "0 18px 50px rgba(20,20,40,0.08)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Full services */}
      <section style={{ ...styles.section, paddingTop: 20 }}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionH2}>Complete Web Design & Development Services in Trichy</h2>
          <p style={styles.leadPara}>
            As an established Web Design Company in Trichy, Growwake provides complete web design and development solutions tailored to your business needs.
            We don't just build websites—we ideate and develop a powerful digital presence from scratch.
          </p>

          <div style={styles.cardsGrid}>
            <div
              style={styles.card}
              onMouseEnter={(e) => onCardHover(e, true)}
              onMouseLeave={(e) => onCardHover(e, false)}
            >
              <img src={featureIcon} alt="UI/UX" style={styles.cardIcon} />
              <div style={styles.cardTitle}>Custom UI / UX Design</div>
              <div style={styles.cardText}>
                Sophisticated, conversion-focused interfaces created with best UX practices and pixel-perfect design.
              </div>
            </div>

            <div
              style={styles.card}
              onMouseEnter={(e) => onCardHover(e, true)}
              onMouseLeave={(e) => onCardHover(e, false)}
            >
              <img src={featureIcon} alt="Responsive" style={styles.cardIcon} />
              <div style={styles.cardTitle}>Responsive Web Design</div>
              <div style={styles.cardText}>
                Guaranteed mobile compatibility: your site will look stunning and work smoothly across devices.
              </div>
            </div>

            <div
              style={styles.card}
              onMouseEnter={(e) => onCardHover(e, true)}
              onMouseLeave={(e) => onCardHover(e, false)}
            >
              <img src={featureIcon} alt="SEO" style={styles.cardIcon} />
              <div style={styles.cardTitle}>SEO Optimization</div>
              <div style={styles.cardText}>
                Built from the ground up to rank for your target keywords — clean manual coding for faster indexation and higher rankings.
              </div>
            </div>

            <div
              style={styles.card}
              onMouseEnter={(e) => onCardHover(e, true)}
              onMouseLeave={(e) => onCardHover(e, false)}
            >
              <img src={featureIcon} alt="Animations" style={styles.cardIcon} />
              <div style={styles.cardTitle}>Attractive Animations</div>
              <div style={styles.cardText}>
                Modern, subtle animations that enhance the user experience without slowing your site.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce / Maintenance / Landing pages */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionH2}>E-commerce, Maintenance & Landing Pages</h2>
          <p style={styles.leadPara}>
            We build high-converting e-commerce stores (Shopify & WooCommerce), provide ongoing website hosting & maintenance,
            and deliver result-driven landing pages tailored for ad campaigns and conversions.
          </p>

          <div style={{ marginTop: 22, display: "flex", gap: 18, flexWrap: "wrap" }}>
            <div style={{ ...styles.card, flex: "1 1 300px" }}
                 onMouseEnter={(e) => onCardHover(e, true)}
                 onMouseLeave={(e) => onCardHover(e, false)}>
              <div style={styles.cardTitle}>E-commerce Websites</div>
              <div style={styles.cardText}>
                Expressive, secure stores focused on conversions: product discovery, checkout UX, and inventory workflows.
              </div>
            </div>

            <div style={{ ...styles.card, flex: "1 1 300px" }}
                 onMouseEnter={(e) => onCardHover(e, true)}
                 onMouseLeave={(e) => onCardHover(e, false)}>
              <div style={styles.cardTitle}>Website & Hosting Maintenance</div>
              <div style={styles.cardText}>
                Content updates, platform updates, backups, monitoring, and quick bug fixes to keep your site flawless.
              </div>
            </div>

            <div style={{ ...styles.card, flex: "1 1 300px" }}
                 onMouseEnter={(e) => onCardHover(e, true)}
                 onMouseLeave={(e) => onCardHover(e, false)}>
              <div style={styles.cardTitle}>Landing Pages for Ads</div>
              <div style={styles.cardText}>
                Conversion-first landing pages engineered for ad campaigns — fast, optimized, and A/B ready.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionH2}>Industries We Cover — Local Expertise for Trichy</h2>
          <p style={styles.leadPara}>
            We’ve created tailored websites for local Trichy schools, colleges, hospitals, sweet stores, boutiques, clothing stores and more.
            Our work targets local users and converts them.
          </p>

          <div style={styles.industryList}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <img src={industryImg} alt="industry" style={{ width: 56, borderRadius: 8 }} />
              <div style={{ fontWeight: 700 }}>E-Commerce & Retail</div>
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <img src={industryImg} alt="industry" style={{ width: 56, borderRadius: 8 }} />
              <div style={{ fontWeight: 700 }}>Healthcare & Pharmacy</div>
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <img src={industryImg} alt="industry" style={{ width: 56, borderRadius: 8 }} />
              <div style={{ fontWeight: 700 }}>Education & Institutions</div>
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <img src={industryImg} alt="industry" style={{ width: 56, borderRadius: 8 }} />
              <div style={{ fontWeight: 700 }}>Real Estate & Construction</div>
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <img src={industryImg} alt="industry" style={{ width: 56, borderRadius: 8 }} />
              <div style={{ fontWeight: 700 }}>Hospitality & Travel</div>
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <img src={industryImg} alt="industry" style={{ width: 56, borderRadius: 8 }} />
              <div style={{ fontWeight: 700 }}>Logistics & Automotive</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ ...styles.section, paddingTop: 20 }}>
        <div style={styles.sectionInner}>
          <div style={styles.ctaWrap}>
            <div style={styles.ctaText}>
              Ready to launch your website? Contact Growwake today for a free web design consultation!
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
          <h2 style={styles.sectionH2}>FAQ - Professional Web Design Company in Trichy</h2>

          <div style={styles.faqGrid}>
            <div style={styles.faqItem}>
              <strong>Why do I need a website?</strong>
              <p style={{ marginTop: 8 }}>
                A website is your 24/7 online storefront that builds trust, drives leads, and is the foundation for SEO and brand growth.
              </p>
            </div>

            <div style={styles.faqItem}>
              <strong>Which is the best Web Design Company in Trichy?</strong>
              <p style={{ marginTop: 8 }}>
                Growwake — known for customized, high-performing websites, expert manual coding, and strong UI/UX design.
              </p>
            </div>

            <div style={styles.faqItem}>
              <strong>How to choose a Web Designing Company in Trichy?</strong>
              <p style={{ marginTop: 8 }}>
                Look for SEO expertise, a strong portfolio, guaranteed responsive design, and reliable post-launch maintenance.
              </p>
            </div>

            <div style={styles.faqItem}>
              <strong>Why Should You Choose Growwake Agency?</strong>
              <p style={{ marginTop: 8 }}>
                Choose Growwake for tailored development, advanced technical skills, focus on conversion rates, and a collaborative approach to success.
              </p>
            </div>

            <div style={styles.faqItem}>
              <strong>What are the web design services we provide?</strong>
              <p style={{ marginTop: 8 }}>
                Custom Web Design, E-commerce (Shopify/WooCommerce), UI/UX, SEO Optimization, Landing Pages, and Website Maintenance.
              </p>
            </div>

            <div style={styles.faqItem}>
              <strong>How do WordPress websites help your business?</strong>
              <p style={{ marginTop: 8 }}>
                WordPress websites provide a flexible, SEO-optimized platform that is easy to manage and scale as your business grows.
              </p>
            </div>

            <div style={styles.faqItem}>
              <strong>What is your process for designing a website?</strong>
              <p style={{ marginTop: 8 }}>
                Discovery → UI/UX Planning (wireframes) → Design & Content → Development & Testing (mobile responsive) → Launch & Maintenance.
              </p>
            </div>

            <div style={styles.faqItem}>
              <strong>How can I get started with your web design services?</strong>
              <p style={{ marginTop: 8 }}>
                Contact us for an initial consultation. We'll discuss needs and craft a personalized plan for your web design in Trichy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Growwake — Web Design Company in Trichy · <a href="https://www.growwake.in/web-design-company-in-trichy" style={{ color: "#5b48ff", textDecoration: "none" }} target="_blank" rel="noreferrer">growwake.in</a>
      </footer>
    </div>
  );
}
