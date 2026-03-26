import React, { useEffect, useState } from 'react';
import './milestone.css';

import Navbar from '../../components/navbar/Navbar'
import video1 from '../../assests/video1.mp4'
import video2 from '../../assests/video2.mp4'
import certificate1 from "../../assests/certificate_1.jpeg"
import certificate2 from '../../assests/certificate_2.jpeg'
import certificate3 from '../../assests/certificate_3.jpeg'
import certificate4 from '../../assests/certificate_4.jpeg'
import certificate5 from '../../assests/certificate_5.jpeg'
import certificate9 from '../../assests/certificate_9.jpeg'  // 👈 rename: certificate6 → certificate9
import certificate7 from '../../assests/certificate_7.jpeg'
import certificate8 from '../../assests/certificate_8.jpeg'
import review_msg1 from '../../assests/review_msg1.jpeg'
import review_msg2 from '../../assests/review_msg2.jpeg'
import review_msg3 from '../../assests/review_msg3.jpeg'
import review_msg4 from '../../assests/review_msg4.jpeg'
import review_msg5 from '../../assests/review_msg5.jpeg'
import review_msg6 from '../../assests/review_msg6.jpeg'
import reviewVidoe1 from '../../../src/assests/reviewVidoe1.mp4'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

function Success() {
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic"
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setShowProjects(true), 100);
  }, []);

  return (
    <>
      <Navbar />
      <div className="success_container">

        {/* Projects Section */}
        <div className={`first_container ${showProjects ? "show_first" : ""}`}>
          <div className="success_body">
            <h2 className='success_headings'> PROJECTS </h2>
            <div className="homeright_bar_container">
              <div className="homeright_bar"></div>
              <div className="homeright_circle"></div>
            </div>
          </div>

          <div className="sucess_cards">
            <div className="success_card">
              <video className="success_card_vidoe" controls autoPlay loop muted>
                <source src={video1} type="video/mp4" />
              </video>
              <h3 className="card_title">SMART PLANT MONITORING SYSTEM</h3>
              <p className="card_para">
                An IoT-based project that monitors soil moisture, temperature, humidity, and light in real-time.
                It sends alerts, automates watering, and displays live data on a web/mobile dashboard.
              </p>
            </div>

            <div className="success_card">
              <video className="success_card_vidoe" controls autoPlay loop muted>
                <source src={video2} type="video/mp4" />
              </video>
              <h3 className="card_title">Automatic Touchless Water Tap</h3>
              <p className="card_para">
                A smart hygiene solution that uses infrared sensors to detect hand movement and automatically release water without touch.
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Certificates Section - 8 images */}
        <div className='success_certificates_section' data-aos="fade-up">
          <div className="success_body">
            <h2 className='success_headings'> CERTIFICATES </h2>
            <div className="homeright_bar_container">
              <div className="homeright_bar"></div>
              <div className="homeright_circle"></div>
            </div>
          </div>

          <div className="success_certificates">
            {[
              certificate1,
              certificate2,
              certificate3,
              certificate4,
              certificate5,
              certificate9,  // 👈 correct variable name
              certificate7,
              certificate8
            ].map((cert, idx) => (
              <div className="success_certificate" key={idx} data-aos="zoom-in" data-aos-delay={idx * 150}>
                <img className='certificate_image' src={cert} alt={`Certificate ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className='success_certificates_section' data-aos="fade-up">
          <div className="success_body">
            <h2 className='success_headings'> TESTIMONIALS </h2>
            <div className="homeright_bar_container">
              <div className="homeright_bar"></div>
              <div className="homeright_circle"></div>
            </div>
          </div>

          <div className="success_reviews_wrapper">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              observer={true}
              observeParents={true}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = ".custom-prev";
                swiper.params.navigation.nextEl = ".custom-next";
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              breakpoints={{
                769: { slidesPerView: 2 },
                1177: { slidesPerView: 3 },
              }}
              className="success_reviews"
            >
              {[review_msg1, review_msg2, review_msg3, review_msg4, review_msg5, review_msg6].map((review, idx) => (
                <SwiperSlide key={idx}>
                  <div className="success_review">
                    <img className="certificate_image" src={review} alt="reviews" />
                  </div>
                </SwiperSlide>
              ))}

              <SwiperSlide>
                <div className="success_review">
                  <video className="certificate_image" controls loop muted>
                    <source src={reviewVidoe1} type="video/mp4" />
                  </video>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="swiper-custom-buttons">
              <button className="custom-prev"><FaArrowLeft /></button>
              <button className="custom-next"><FaArrowRight /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
