import React from "react";
import { Link } from "react-router-dom";

export default function InternshipPage() {
  return (
    <div className="internship-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');

        .internship-root {
          font-family: 'Poppins', sans-serif;
          color: #112233;
          background: linear-gradient(180deg, #f7f9ff 0%, #ffffff 60%);
          padding: 20px;
          box-sizing: border-box;
          width: 100%;
          overflow-x: hidden;
        }

        .container {
          width: 100%;
          max-width: 1250px;
          margin: 0 auto;
          background: linear-gradient(180deg, rgba(108,92,231,0.06), rgba(54,68,172,0.02));
          border-radius: 16px;
          box-shadow: 0 12px 40px rgba(20,30,70,0.08);
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 450px;
        }

        /* Left */
        .hero {
          padding: 40px;
        }

        .eyebrow {
          background: rgba(108,92,231,0.10);
          color: #4636b7;
          padding: 8px 14px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 14px;
          width: fit-content;
          margin-bottom: 16px;
        }

        .title {
          font-size: 34px;
          line-height: 1.15;
          font-weight: 800;
          color: #1b2b4a;
        }

        .title .highlight {
          color: #3644AC;
        }

        .subtitle {
          margin-top: 10px;
          margin-bottom: 20px;
          color: #3b4b66;
          font-size: 15px;
          line-height: 1.5;
        }

        .hero-cta-row {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .btn-primary {
          background: linear-gradient(90deg,#3644AC,#6C5CE7);
          color: white;
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(54,68,172,0.25);
        }

        .btn-ghost {
          background: transparent;
          border: 2px solid rgba(54,68,172,0.20);
          color: #3644AC;
          padding: 12px 18px;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
        }

        .kicker {
          display: flex;
          gap: 10px;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .stat {
          background: rgba(54,68,172,0.07);
          padding: 12px 14px;
          border-radius: 12px;
          font-weight: 700;
          color: #223153;
        }

        /* Right image panel */
        .image-panel {
          background: rgba(18,22,40,0.03);
          padding: 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .hero-image {
          width: 100%;
          border-radius: 12px;
          background: white;
          border: 6px solid white;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .badge {
          background: rgba(54,68,172,0.15);
          padding: 10px 16px;
          border-radius: 50px;
          font-size: 13px;
          margin-bottom: 16px;
          font-weight: 700;
          color: #2a3b72;
        }

        /* Details Section */
        .content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          padding: 40px;
          background: rgba(255,255,255,0.6);
        }

        .card {
          padding: 18px;
          border-radius: 12px;
          background: white;
          box-shadow: 0 8px 30px rgba(20,30,60,0.03);
          border: 1px solid rgba(18,24,40,0.05);
        }

        .card h3 {
          margin-bottom: 10px;
          color: #1b2b4a;
          font-size: 17px;
          font-weight: 700;
        }

        .card p, .card li {
          font-size: 14px;
          line-height: 1.45;
          color: #445266;
        }

        /* Full CTA */
        .full-cta {
          grid-column: 1 / -1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
          padding-top: 10px;
        }

        /* Footer */
        .footer-note {
          grid-column: 1 / -1;
          padding: 14px 0;
          font-size: 13px;
          color: #344155;
          text-align: center;
        }

        /* RESPONSIVE FIXES */
        @media (max-width: 1100px) {
          .container {
            grid-template-columns: 1fr;
          }
          .image-panel {
            order: -1;
          }
          .content {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .hero-cta-row {
            flex-direction: column;
          }
          .title {
            font-size: 25px;
          }
          .full-cta {
            flex-direction: column;
            gap: 14px;
            text-align: center;
          }
        }
      `}</style>

      <div className="container">

        {/* LEFT SECTION */}
        <div className="hero">
          <div className="eyebrow">Grow Your Future — Trichy</div>

          <h1 className="title">
            Grow Your Career with <span className="highlight">Growwake</span> — Internship Opportunities in Trichy
          </h1>

          <p className="subtitle">
            An internship is your definitive launchpad to a thriving career. At Growwake, get practical experience, live project exposure, and placement support.
          </p>

          <div className="hero-cta-row">
            <Link to="/register" className="btn-primary">Apply Now →</Link>
            <Link to="/placement" className="btn-ghost">Placement Support</Link>
          </div>

          <div className="kicker">
            <div className="stat">82% Employers look for internships</div>
            <div className="stat">70% prefer prior interns</div>
            <div className="stat">High job-offer rate</div>
          </div>

          <div className="card" style={{ marginTop: 20 }}>
            <h3>How Growwake Internships Help You Succeed</h3>
            <p>Practical application, real experience, certifications, and placement support.</p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <aside className="image-panel">
          <div className="badge">Live Projects • Placement Support</div>

          <img
            className="hero-image"
            src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
            alt="Internship illustration"
          />

          <h4 style={{ marginTop: 12, fontWeight: 700 }}>Hands-on Experience • Real Impact</h4>
          <p style={{ fontSize: 13, color: '#445', marginTop: 4 }}>
            Work with industry professionals and gain confidence.
          </p>
        </aside>

        {/* DETAILS SECTION */}
        <section className="content">

          <div className="card">
            <h3>Grow Your Future: Internship Opportunities in Trichy</h3>
            <p>
              Internships are the single best investment in your early career development. 
              82% of employers want internship experience & 70% prefer previous interns.
            </p>
          </div>

          <div className="card">
            <h3>How Growwake Helps You Succeed</h3>
            <ul>
              <li>Real-world job opportunities & practical exposure</li>
              <li>Workplace culture & ethics understanding</li>
              <li>Live project experience & certifications</li>
              <li>Placement readiness & communication training</li>
            </ul>
          </div>

          <div className="card">
            <h3>Why Choose Growwake — Trichy?</h3>
            <p>
              • Industry immersion  
              • Future-ready tools  
              • Real-time project impact  
              • Professional networking  
              • Dedicated placement support  
              • Multiple certifications  
            </p>
          </div>

          <div className="full-cta">
            <div>
              <strong>Ready to Launch?</strong>
              <p style={{ fontSize: 13 }}>Apply now and build a job-ready profile</p>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <Link to="/services/software/internship" className="btn-primary">View Details</Link>
              <Link to="/register" className="btn-ghost">Register</Link>
            </div>
          </div>

        </section>

        <div className="footer-note">Growwake — Internship programs in Trichy.</div>
      </div>
    </div>
  );
}
