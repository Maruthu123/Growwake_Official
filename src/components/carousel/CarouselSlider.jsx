import React, { useState, useEffect } from 'react';
import { Paper, Typography, Avatar, Box, Button, Stack, Container } from '@mui/material';
/* import CAROUSEL1 from "../assests/carousel-1.png";
import CAROUSEL2 from "../assests/carousel-2.png";
import CAROUSEL3 from "../assests/carousel-3.png"; */
import CAROUSEL1 from '../../assests/carousel-1.png'
import CAROUSEL2 from '../../assests/carousel-2.png'
import CAROUSEL3 from '../../assests/carousel-3.png'

const ogContent = [
  {
      avatar:CAROUSEL1 ,
      title: "Boost Your Skills, Fast!",
      description: "Level up quickly with hands-on courses designed to sharpen your expertise and confidence."
  },
  {
      avatar: CAROUSEL2,
      title: "Learn Anytime, Anywhere",
      description: "Binge-worthy video lessons from top instructors—study at your pace, on your schedule."
  },
  {
      avatar: CAROUSEL3,
      title: "Got Questions? We’ve Got Answers!",
      description: "Stuck on something? Get instant help from experts and join live Q&A sessions."
  }
];

const content = Array(100).fill(ogContent).flat().map((item, idx)=>({
  ...item,
  id: idx
}))


function CarouselSlider() {
    // content = Array(50).fill(content).flat();
    
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {

            nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex)=>{
          return (prevIndex + 1);
        });
    };

    return (
        <Box sx={{ position: 'relative', width: '100%', maxWidth: 500, overflow: 'hidden', margin: 'auto' }}>
            {/* Slides Wrapper */}
            <Box
                sx={{
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${currentIndex * 100}%)`
                }}
            >
                {content.map((data, index) => (
                    <Box
                        key={index}
                        elevation={10}
                        sx={{
                            minWidth: '100%',
                            padding: 4,
                            boxSizing: 'border-box',
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <img src={data.avatar} width={"100%"} height={"100%"}/>
                            <Typography variant="subtitle1" component="h3" sx={{ fontWeight: "bold", fontSize: "24px", textAlign: 'center' }}>
                                {data.title}
                            </Typography>
                            <Typography variant="body2" component="p" sx={{ mt: 1, textAlign: "center", fontSize: "16px" }}>
                                {data.description}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
            <Stack justifyContent={"center"} direction={"row"} spacing={1}>
              <Box sx={{width: "8px", height: "8px", background: currentIndex%3==0 ? "black": "grey", "borderRadius": "10px"}}/>
              <Box sx={{width: "8px", height: "8px", background: currentIndex%3==1 ? "black": "grey", "borderRadius": "10px"}}/>
              <Box sx={{width: "8px", height: "8px", background: currentIndex%3==2 ? "black": "grey", "borderRadius": "10px"}}/>
            </Stack>
        </Box>
    );
}

export default CarouselSlider;
