import { FaCode } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa6";
import { FaCodepen } from "react-icons/fa";
import { FaCompactDisc } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { FaArrowRotateRight } from "react-icons/fa6";
import { BsDatabaseGear } from "react-icons/bs";
import { FaDigitalOcean } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

export const service_data = [
  {
    id: "software-testing",
    icon: FaCode,
    title: "SoftWare Testing",
    para: "Software testing ensures that a software application functions correctly and is free of bugs, using both manual and automated testing methods.",
    details:
      "Software Testing is the process of evaluating and verifying that a software application or system does what it is supposed to do. It includes Manual Testing (executed by humans) and Automated Testing (executed using tools like Selenium, JUnit, TestNG, Cypress, etc.). It helps identify bugs, performance issues, and ensures quality. Types include Unit Testing, Integration Testing, System Testing, and User Acceptance Testing."
  },
  {
    id:"iot_section",
    icon: FaGlobe,
    title: "IOT (Internet Of Things)",
    para: "IOT connects devices to collect and exchange data using sensors, cloud platforms, and IoT frameworks.",
    details:
      "The Internet of Things (IoT) is a system of interrelated devices connected via the Internet that can collect and share data. Devices range from smart home gadgets like Alexa and smart bulbs to industrial machines. Technologies used include MQTT, Arduino, Raspberry Pi, cloud platforms (AWS IoT, Azure IoT Hub), and protocols like Bluetooth, Zigbee, and Wi-Fi."
  },
  {
    id:"frontend_developer",
    icon: FaSlack,
    title: "Front End Developer",
    para: "A front-end developer creates and designs the user interface of websites and applications.",
    details:
      "Front-end development focuses on the part of the website users interact with directly. It involves HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue. A front-end developer ensures responsive design, accessibility, and user experience."
  },
  {
    icon: FaSpinner,
    title: "Back End Developer",
    para: "A back-end developer builds and manages the server, database, and application logic.",
    details:
      "Back-end development involves writing server-side code that connects databases, APIs, and business logic. Common technologies include Node.js, Express.js, Django, Java Spring, and databases like MySQL, MongoDB, and PostgreSQL. Security, scalability, and performance are crucial responsibilities."
  },
  {
    icon: FaCodepen,
    title: "Full Stack Developer",
    para: "A full-stack developer works on both the front-end and back-end of applications.",
    details:
      "A Full Stack Developer has expertise in both front-end (React, Angular, Vue) and back-end (Node.js, Django, Ruby on Rails) technologies. They can design user interfaces, build APIs, and manage databases. MERN (MongoDB, Express, React, Node) and MEAN (MongoDB, Express, Angular, Node) are popular stacks."
  },
  {
    icon: FaCompactDisc,
    title: "Multi Media",
    para: "A simple multimedia intro uses text, images, audio, and video.",
    details:
      "Multimedia development involves creating engaging digital content using tools like Adobe Photoshop, Illustrator, Premiere Pro, After Effects, and Blender. It includes animations, video editing, graphic design, audio engineering, and interactive content for marketing, learning, and entertainment."
  },
  {
    icon: FaDev,
    title: "DevOps",
    para: "DevOps combines development and operations to improve software delivery.",
    details:
      "DevOps practices focus on automation, collaboration, and monitoring. Tools like Git, Jenkins, Docker, Kubernetes, Ansible, and Terraform help achieve CI/CD pipelines, infrastructure as code, and cloud deployment. DevOps reduces time-to-market and improves reliability."
  },
  {
    icon: FaChartSimple,
    title: "Graphic Designer",
    para: "A graphic designer creates visual content like logos and posters.",
    details:
      "Graphic Design is about communicating visually using typography, imagery, and layout. Designers work with tools like Adobe Illustrator, Photoshop, and Canva to create logos, posters, banners, social media content, and branding materials."
  },
  {
    icon: FaDatabase,
    title: "Data Analyst",
    para: "A data analyst collects and processes data to support decision-making.",
    details:
      "Data Analysts use tools like Excel, SQL, Python, R, Tableau, and Power BI to analyze and visualize data. They identify trends, patterns, and insights to help businesses make informed decisions. Knowledge of statistics and data cleaning is essential."
  },
  {
    icon: BsRobot,
    title: "AI",
    para: "AI simulates human intelligence in machines.",
    details:
      "Artificial Intelligence enables machines to mimic human intelligence. Applications include natural language processing (ChatGPT, Siri, Alexa), computer vision (face recognition), and robotics. AI relies on algorithms, machine learning, and neural networks."
  },
  {
    icon: FaArrowRotateRight,
    title: "ML",
    para: "Machine Learning helps computers learn from data.",
    details:
      "Machine Learning (a subset of AI) allows systems to improve automatically through experience. Algorithms like regression, decision trees, and neural networks are used. Applications include recommendation systems (Netflix, Amazon), fraud detection, and predictive analytics."
  },
  {
    icon: BsDatabaseGear,
    title: "AWS & Cloud computing",
    para: "Cloud computing lets you use servers online, AWS is a leading provider.",
    details:
      "Cloud computing provides on-demand IT resources like servers, databases, and networking over the internet. AWS (Amazon Web Services) is the most popular cloud provider, offering services like EC2, S3, Lambda, and RDS. Benefits include scalability, cost savings, and flexibility."
  },
  {
    icon: FaDigitalOcean,
    title: "Digital Marketing",
    para: "Digital marketing delivers innovative multimedia solutions online.",
    details:
      "Digital Marketing involves promoting products or services online via SEO, social media marketing, content marketing, email campaigns, and paid ads. Tools include Google Analytics, Facebook Ads, and HubSpot."
  },
  {
    icon: FaPython,
    title: "Python",
    para: "A Python developer writes code in Python to build software or tools.",
    details:
      "Python is a versatile programming language used for web development (Django, Flask), data science (Pandas, NumPy, Scikit-learn), automation, and scripting. Its simplicity and powerful libraries make it popular for beginners and professionals alike."
  },
  {
    icon: FaReact,
    title: "MERN Stack",
    para: "We build modern, responsive, and scalable web applications with MERN.",
    details:
      "MERN stack stands for MongoDB, Express.js, React, and Node.js. It's a popular full-stack development framework. MongoDB handles data, Express and Node provide backend APIs, while React manages the frontend. Suitable for scalable, modern web apps."
  }
];
