import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Main Pages
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Placement from './pages/placement/Placement';
import About from './pages/about/About';
import Careers from './pages/careers/Careers';
import Contact from './pages/contact/Contact';
import Milestone from './pages/milestone/Milestone';
import Success from './pages/milestone/Milestone';

// SOFTWARE DEVELOPMENT
import Frontend from './pages/services/softwareDev/frontend';
import Backend from './pages/services/softwareDev/backend';
import Fullstack from './pages/services/softwareDev/fullstack.js';
import Testing from './pages/services/softwareDev/testing.js';
import Python from './pages/services/softwareDev/python.js';
import Mernstack from './pages/services/softwareDev/mern.js';

// MEDIA
import Multimedia from './pages/services/media/multimedia.js';
import UiUx from './pages/services/media/UiUx.js';
import Graphy from './pages/services/media/Graphy.js';

// CLOUD
import DevOps from './pages/services/cloud/devs.js';
import Aws from './pages/services/cloud/aws.js';

// AI / IoT
import IOT from './pages/services/Ai/iot.js';

// INTERNSHIP
import Internship from './pages/services/inter/inter.js';

// COURSE
import Webdesign from './pages/serviceOff/webdesgin.js';
import WebDevelopment from './pages/serviceOff/webdev.js';

// MARKETING SERVICES (under serviceOff)
import SEOService from './pages/serviceOff/SEOService';
import SocialMediaMarketing from './pages/serviceOff/SocialMediaMarketing';
import GraphicDesign from './pages/serviceOff/GraphicDesign';
import DigitalMarketing from './pages/serviceOff/DigitalMarketing';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* CORE */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />

        {/* SPECIAL */}
        <Route path="/placement" element={<Placement />} />
        <Route path="/milestone" element={<Milestone />} />
        <Route path="/success" element={<Success />} />

        {/* SOFTWARE DEVELOPMENT */}
        <Route path="/services/software/frontend" element={<Frontend />} />
        <Route path="/services/software/backend" element={<Backend />} />
        <Route path="/services/software/iot" element={<IOT />} />
        <Route path="/services/software/fullstack" element={<Fullstack />} />
        <Route path="/services/software/testing" element={<Testing />} />
        <Route path="/services/software/python" element={<Python />} />
        <Route path="/services/software/mern" element={<Mernstack />} />

        {/* MEDIA */}
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/ui-ux" element={<UiUx />} />
        <Route path="/graphic-design" element={<Graphy />} />

        {/* CLOUD */}
        <Route path="/services/cloud/devs" element={<DevOps />} />
        <Route path="/services/cloud/aws" element={<Aws />} />

        {/* INTERNSHIP */}
        <Route path="/services/inter/inter" element={<Internship />} />

        {/* COURSE */}
        <Route path="/serviceOff/web-design" element={<Webdesign />} />
        <Route path="/serviceOff/web-dev" element={<WebDevelopment />} />

        {/* MARKETING SERVICES */}
        <Route path="/serviceOff/SEOService" element={<SEOService />} />
        <Route path="/serviceOff/SocialMediaMarketing" element={<SocialMediaMarketing />} />
        <Route path="/serviceOff/GraphicDesign" element={<GraphicDesign />} />
        <Route path="/serviceOff/DigitalMarketing" element={<DigitalMarketing />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
