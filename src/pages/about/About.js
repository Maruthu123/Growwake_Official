import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './about.css';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    // Page mount fade & slide animation
    const page = document.querySelector('.about_page');
    if (page) page.classList.add('show_page');

    // Scroll reveal for each section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('show_scroll');
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.scroll_section').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const goToServices = () => navigate('/services');

  return (
    <>
      <Navbar />
      <main className="about_page">

        {/* ======================= HERO: WHO WE ARE ======================= */}
        <section className="hero_section scroll_section">
          <Grid container spacing={2} alignItems="center">
            
            {/* Left Image with original border design */}
            <Grid item md={4} sm={12} xs={12} className="hero_left">
              <div className="left_container_borders">
                <div className="left_img_wrap_1" />
                <div className="left_img_wrap_2" />

                {/* Your original about_man.png insert */}
                <img 
                  src="about_man.png"
                  width={265}
                  alt="About Grow Wake"
                  className="about_img"
                  style={{ position: "absolute", top: "10px", marginLeft: "35px" }}
                />
              </div>
            </Grid>

            {/* Right Content */}
            <Grid item md={8} sm={12} xs={12} className="hero_right">
              <h1 className="about_right_h1">WHO WE ARE?</h1>

              <div className="about_bar_container">
                <div className="about_bar" />
                <div className="about_circle" />
              </div>

              <p className="about_right_p">
                Grow Wake is a dynamic training and placement startup, dedicated to equipping students
                with the skills needed to succeed in the IT industry. We are renowned for our practical
                approach to training, offering students real-time exposure to cutting-edge technologies.
                Our courses are led by industry professionals from top companies, providing authentic
                corporate insights and hands-on experience. Join us to develop the skills and knowledge
                that will help you thrive in the fast-growing IT world.
              </p>

              <button className="about_btn" onClick={goToServices}>Our Services</button>
            </Grid>

          </Grid>
        </section>

        {/* ======================= MISSION ======================= */}
        <section className="about_mis_vis scroll_section">
          <div className="about_mission">
            <img src="mission_img.png" alt="Mission" />
          </div>

          <div className="about_mis_content">
            <h2 className="about_mis_h1">Our Mission</h2>
            <p className="about_mis_p">
              Growwake Private Limited is dedicated to closing the skill gap in the technology sector.
              Our mission is to empower individuals with practical, job-ready skills and personalized
              guidance to help them build sustainable careers in the IT field.
            </p>
          </div>
        </section>

        {/* ======================= VISION ======================= */}
        <section className="about_mis_vis about_mis_vis_right scroll_section">
          <div className="about_mis_content">
            <h2 className="about_mis_h1">Our Vision</h2>
            <p className="about_mis_p">
              Our vision is to be the best IT training institute in Trichy, known for excellence,
              innovation, and strong placement results. We aim to bridge education with real-world
              software industry needs through impactful training.
            </p>
          </div>

          <div className="about_mission">
            <img src="vision_img.png" alt="Vision" />
          </div>
        </section>

        {/* ======================= UNIQUE ADVANTAGE ======================= */}
        <section className="advantage_section scroll_section">
          <div className="advantage_inner">
            <h2 className="section_title">Our Unique Advantage</h2>
            <p className="section_sub">
              GrowWake is both a training institute and a real IT software development company —
              delivering real-time curriculum, live projects, and industry-level mentorship.
            </p>

            <div className="cards_row">
              <div className="feature_card">
                <div className="card_icon">🧭</div>
                <h3>Real-Time Curriculum</h3>
                <p>Learn modern tools & technologies used in real IT projects.</p>
              </div>

              <div className="feature_card">
                <div className="card_icon">👩‍🏫</div>
                <h3>Expert Instructors</h3>
                <p>Guidance from actual IT professionals with years of experience.</p>
              </div>

              <div className="feature_card">
                <div className="card_icon">🛠️</div>
                <h3>Hands-On Mastery</h3>
                <p>Build real projects & develop interview-ready technical skills.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================= COMMITMENT ======================= */}
        <section className="commitment_section scroll_section">
          <div className="commitment_inner">
            <h2 className="section_title">Our Commitment to Your Success</h2>

            <div className="commitment_grid">
              
              <div className="commit_card">
                <h4>Job-Ready Skills</h4>
                <p>Training aligned with latest IT hiring trends.</p>
              </div>

              <div className="commit_card">
                <h4>Aptitude Preparation</h4>
                <p>Strengthen problem-solving & interview performance.</p>
              </div>

              <div className="commit_card">
                <h4>Employability Enhancement</h4>
                <p>Professional grooming, communication & typewriting.</p>
              </div>

              <div className="commit_card">
                <h4>Placement Assurance</h4>
                <p>Placement support, mock interviews & hiring connections.</p>
              </div>

            </div>
          </div>
        </section>

        {/* ======================= CTA SECTION ======================= */}
        <section className="cta_section scroll_section">
          <div className="cta_inner">
            <div className="cta_texts">
              <h2>Ready to grow your career?</h2>
              <p>
                Book a personal consultation. Let’s build a roadmap that transforms your future.
              </p>
            </div>

            <div className="cta_actions">
              <button className="primary_cta" onClick={() => navigate('/contact')}>
                Book Consultation
              </button>

              <button className="secondary_cta" onClick={() => navigate('/services')}>
                Explore Courses
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
