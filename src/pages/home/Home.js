import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import TypeWriter from 'typewriter-effect'
import { lists } from '../../components/data/data'
import { Link, useNavigate } from 'react-router-dom'
import { FaComments } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { FaKeyboard } from "react-icons/fa";
import './home.css'
import { service_data } from '../../components/data/servicedata'
import Footer from '../../components/footer/Footer'
import CounterupPage from '../../components/counter/CounterupPage'
import Marquee from '../../components/marquee/Marquee'
import Appbar from '../../components/appbar/appbar'
import homeImg from '../../assests/home_img-cropped.svg'
import teamMetting from '../../assests/team_metting.png'
import { Button } from 'antd'
import { motion } from "framer-motion"
function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const handleOpenServices = (id) => {
    navigate("/services", { state: { sectionId: id } });
  };
  // Animations
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };
  const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  };
  return (
    <>
      <Appbar />
      <div className='wrapper'>
        <div className='home_container'>
          <motion.h1 
            className='home_heading' 
            initial="hidden" whileInView="visible" variants={fadeUp}
          >
            “EMPOWER STUDENTS, Elevate Their Future”
          </motion.h1>
          <div className='home_contents'>
            {/* Left Side */}
            <motion.div className='left_cont' initial="hidden" whileInView="visible" variants={fadeLeft}>
              <h2 className='left_h2'>Software Training & <br />Development</h2>
              {lists.map((val, i) => (
                <p className='type_para' key={i}>
                  <span className='type_span'>
                    <TypeWriter
                      options={{
                        strings: [
                          val.data1, val.data2, val.data3, val.data4,
                          val.data5, val.data6, val.data7, val.data8,
                          val.data9, val.data10
                        ],
                        autoStart: true,
                        loop: true
                      }}
                    />
                  </span>
                </p>
              ))}
              <p className='left_para'>
               Grow Wake is a leading IT software training and placement firm in Trichy, excelling in planning, control, and coordination.
               To help students succeed, our knowledgeable coordinators ensure organized instruction, impactful lectures, and effective problem-solving techniques.
              </p>
              <motion.button 
                className='button_style' 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Link to={'/register'} className='nav_btn_link' style={{ color: "white" }}>
                  Register
                </Link>
              </motion.button>
            </motion.div>
            {/* Right Side */}
            <motion.div className='right_cont' initial="hidden" whileInView="visible" variants={fadeRight}>
              <img src={homeImg} alt="home_img" className='home_img' />
            </motion.div>
          </div>
        </div>
      </div>
      {/* Who we are */}
      <div className='home_container_2'>
        <div className='home_left'>
          <ul className="misvis_items">
            <li style={{ display: "flex", justifyContent: "end", width: "100%" }}>
              <motion.div className="misvis_item" initial="hidden" whileInView="visible" variants={fadeLeft}>
                <div className="misvis_text">
                  <h1 className="misvis_h1">Our Mission</h1>
                  <p className="misvis_p">
                   We are dedicated to shaping the careers of our learners through high-quality training, focused guidance, 
                   and guaranteed placement support, ensuring their successful transition into the professional world.
                  </p>
                </div>
              </motion.div>
            </li>
            <li style={{ display: "flex", justifyContent: "start", width: "100%" }}>
              <motion.div className="misvis_item" initial="hidden" whileInView="visible" variants={fadeRight}>
                <div className="misvis_text">
                  <h1 className="misvis_h1">Our Vision</h1>
                  <p className="misvis_p">
                    Growwake's core focus is to equip individuals for high-growth careers in a top-tier IT company in Trichy. 
                    We achieve this through expert skill development and professional mentorship, while simultaneously enriching our organizational knowledge through strategic industry projects.
                  </p>
                </div>
              </motion.div>
            </li>
          </ul>
        </div>
        <motion.div className='home_right' initial="hidden" whileInView="visible" variants={zoomIn}>
          <h1 className='right_text'>WHO WE ARE</h1>
          <div className="homeright_bar_container">
            <div className="homeright_bar"></div>
            <div className="homeright_circle"></div>
          </div>
          <p className='right_para'>
            Growwake serves as a dedicated partner in career development, equipping students with the high-demand skills essential 
            for success in the competitive IT sector. Our training methodology emphasizes real-world application and engagement with current technologies. 
            We leverage the expertise of industry leaders from major IT firms to deliver a curriculum rich with corporate insights and practical experience.
             Our commitment is to cultivate skilled professionals prepared not only to enter the IT workforce but to excel and drive innovation within it.
          </p>
        </motion.div>
      </div>
      {/* Company intro */}
      <div className='company_intro_container'>
        <motion.div className='company_intro_left' initial="hidden" whileInView="visible" variants={fadeLeft}>
          <h1 className='comp_intro_h1'>Welcome to Grow Wake Pvt. Ltd.</h1>
          <div className="comp_bar_container">
            <div className="comp_bar"></div>
            <div className="comp_circle"></div>
          </div>
          <p className='comp_intro_p'>           
        Growwake is a leading training and placement accelerator that operates as a full-fledged IT software development company in Trichy. This unique dual structure ensures that our curriculum is
         consistently informed by real-time industry demands, offering students unparalleled exposure to cutting-edge technologies and authentic corporate projects.          </p>
          <p className='comp_intro_p2'>
           Our programs are exclusively led by seasoned
          professionals who are actively contributing to the software industry, guaranteeing that the skills you acquire are immediately job-ready and relevant to the evolving tech landscape.
            At Grow Wake, we are committed to making software skill acquisition both accessible and enriching. 
           </p>
        </motion.div>
         <motion.div className='company_intro_right' initial="hidden" whileInView="visible" variants={fadeRight}>
          <img src={teamMetting} className='comp_intro_img' alt="team meeting" />
        </motion.div>
      </div>
      {/* Skills */}
      <div className='skill_wrapper'>
        <motion.h1 className='skill_wrapper_h1' initial="hidden" whileInView="visible" variants={fadeUp}>
          Additional skills
        </motion.h1>
        <motion.p className='skill_wrapper_p' initial="hidden" whileInView="visible" variants={fadeUp}>
         To meet the demands of corporate hiring, which relies heavily on evaluating IQ and problem-solving skills via aptitude testing, we provide specialized Aptitude Classes. 
         This focused preparation is designed to maximize candidate performance and secure your entry into a high-growth career.
        </motion.p>  
        <div className='skill_main'>
          <div className='skill_container'>
            <motion.div className='skill_card' initial="hidden" whileInView="visible" variants={zoomIn}>
              <div className='skill_box'>
                <div className='skill_content'>
                  <h1><FaComments /></h1>
                  <h3>Communication</h3>
                  <p>
                    Communication is essential to thrive and work in a global environment. 
                    Thats why we provide English Communication Skills Training to help you excel.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div className='skill_card' initial="hidden" whileInView="visible" variants={zoomIn} transition={{ delay: 0.2 }}>
              <div className='skill_box'>
                <div className='skill_content'>
                  <h1><FaLightbulb size={100} /></h1>
                  <h3>Aptitude</h3>
                  <p>
                    Many companies assess candidates’ IQ and problem-solving abilities through aptitude tests. 
                    We prepare you for success with Aptitude Classes, paving the way for a bright future.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div className='skill_card' initial="hidden" whileInView="visible" variants={zoomIn} transition={{ delay: 0.4 }}>
              <div className='skill_box'>
                <div className='skill_content'>
                  <h1><FaKeyboard size={100} /></h1>
                  <h3>Typing Skills</h3>
                  <p>
                    Recruiters consistently prioritize typing proficiency as a foundational skill for efficiency.
                     We are prepared to enhance your marketability through specialized Typewriting training. Join us now to acquire this essential competency and unlock the exclusive professional advantages we offer.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <CounterupPage/>
      <Marquee/>
      <Footer/>
    </>
  )
}
export default Home
