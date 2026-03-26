import React, { useState, useEffect } from 'react';
import { Typography, Box, Stack, useMediaQuery } from '@mui/material';
import CAROUSEL5 from "../../assests/interview_prepare.png";
import CAROUSEL3 from "../../assests/service_24.png";
import CAROUSEL1 from "../../assests/job_portal.png";
import CAROUSEL2 from "../../assests/online_class.png";
import CAROUSEL4 from "../../assests/offline_class.png";

const ogContent = [
  { avatar: CAROUSEL1, imageText: 'Access To Job Portal', title: "AI Full Stack Course", description: "Master AI-driven full-stack development with cutting-edge technologies." },
  { avatar: CAROUSEL2, imageText: 'Virtual Classes', title: "2D Course", description: "Learn the fundamentals of 2D design and animation with expert guidance." },
  { avatar: CAROUSEL3, imageText: '24/7 support', title: "Animation Course", description: "Create stunning animations and bring your ideas to life." },
  { avatar: CAROUSEL4, imageText: 'Offline Available', title: "Graphic Design Course", description: "Enhance your creativity with professional graphic design techniques." },
  { avatar: CAROUSEL5, imageText: 'Interview Preparation', title: "Video Editing Course", description: "Master video editing skills and create professional-quality content." },
];

const content = Array(100).fill(ogContent).flat().map((item, idx) => ({
  ...item,
  id: idx
}));

function ServiceCarouselSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive breakpoints
  const isLargeScreen = useMediaQuery('(min-width: 1025px)'); // Desktop
  const isMediumScreen = useMediaQuery('(max-width: 1024px) and (min-width: 769px)'); // Tablets (1024px)
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Mobile

  // Define dynamic width based on screen size
  const carouselWidth = isLargeScreen ? "50vw" : "90vw"; // Adjust width for tablets and mobiles
  const translateWidth = isLargeScreen ? 50 : 90;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ background: 'black', width: "100%", padding: "20px", marginTop: '70px' }}>
      <Box sx={{ position: 'relative', width: carouselWidth, overflow: 'hidden', margin: 'auto' }}>
        <Box
          sx={{
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentIndex * translateWidth}vw)`,
            width: `${content.length * translateWidth}vw`,
          }}
        >
          {content.map((data, index) => (
            <Box 
              key={index} 
              sx={{
                display: 'flex',
                flexDirection: isLargeScreen ? 'row' : 'column', // Column layout for tablets and mobile
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                margin: "10px",
                width: carouselWidth,
                padding: 2,
                background: '#fefdf7',
                borderRadius: "10px"
              }}
            >
              {/* Image Section */}
              <Box sx={{ 
                flexGrow: 1, 
                padding: 2, 
                textAlign: "center",
                display: "flex",
                justifyContent: "center"
              }}>
                <img 
                  src={data.avatar} 
                  width={isLargeScreen ? "280px" : "240px"} // Adjust image size for 1024px
                  height="auto" 
                  alt={data.title} 
                />
              </Box>

              {/* Text Section */}
              <Box sx={{ 
                flexGrow: 1, 
                padding: 2, 
                width: "100%", 
                textAlign: "center" 
              }}>
                <Typography 
                  variant="subtitle1" 
                  component="h3" 
                  sx={{ 
                    fontWeight: "bold", 
                    fontSize: isLargeScreen ? "24px" : "22px", 
                    textAlign: 'center' 
                  }}
                >
                  {data.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  component="p" 
                  sx={{ 
                    mt: 1, 
                    textAlign: "center", 
                    fontSize: isLargeScreen ? "16px" : "15px" 
                  }}
                >
                  {data.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        
        {/* Pagination Dots */}
        <Stack justifyContent={"center"} direction={"row"} spacing={1} sx={{ mt: 2 }}>
          {[...Array(5)].map((_, i) => (
            <Box
              key={i}
              sx={{
                width: "8px",
                height: "8px",
                background: currentIndex % 5 === i ? "white" : "grey",
                borderRadius: "10px"
              }}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default ServiceCarouselSlider;
