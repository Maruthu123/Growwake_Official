import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import registerSVG from "../../assests/Login-amico.svg";
import "./register.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    qualification: "",
    Phone: "",
    yearOfPassout: "",
    course: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username" || name === "qualification") {
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    }
    if (name === "Phone") {
      if (!/^\d*$/.test(value) || value.length > 10) return;
    }
    if (name === "yearOfPassout") {
      if (!/^\d*$/.test(value) || value.length > 4) return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2ogtwbb",
        "template_x47os2j",
        {
          username: formData.username,
          email: formData.email,
          qualification: formData.qualification,
          phone: formData.Phone,
          yearOfPassout: formData.yearOfPassout,
          course: formData.course
        },
        "nLt8rdjbooPP-J5Az"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
        },
        (error) => {
          console.error("Email sending failed:", error.text);
        }
      );

    setSubmitted(true);

    setTimeout(() => {
      navigate("/");
    }, 10000);
  };

  return (
    <div className="container">
      {/* Left panel with SVG */}
      <div className="left-panel" data-aos="fade-right">
        <img src={registerSVG} alt="Register" className="side-svg" />
      </div>

      <div className="right-panel" data-aos="fade-left">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="form-box" data-aos="zoom-in">
            <h2>Register</h2>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="User Name"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="qualification"
              name="qualification"
              placeholder="Enter Qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="phone"
              name="Phone"
              placeholder="Enter Phone"
              value={formData.Phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="yearOfPassout"
              name="yearOfPassout"
              placeholder="Year of Passout"
              value={formData.yearOfPassout}
              onChange={handleChange}
              required
            />

            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Selected Course</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="AWS Cloud Computing">AWS Cloud Computing</option>
              <option value="Multimedia">Multimedia</option>
              <option value="Devops Engineer">Devops Engineer</option>
              <option value="Graphic Designer">Graphic Designer</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Back End Development">Back End Development</option>
              <option value="Front End Development">Front End Development</option>
              <option value="Full Stack Development">Full Stack Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Data Scientist">Data Scientist</option>
              <option value="Python Developer">Python Developer</option>
              <option value="Ethical Hacking">Ethical Hacking</option>
              <option value="Mern Stack">Mern Stack</option>
              <option value="IOT">IOT</option>
            </select>
            <button type="submit" data-aos="flip-up">Submit</button>
          </form>
        ) : (
          <div className="thank-you-box" data-aos="fade-up">
            <h3>Thank you for registering!</h3>
            <p>We will contact you soon.</p>
            <p>Redirecting to home page in 10 seconds...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
