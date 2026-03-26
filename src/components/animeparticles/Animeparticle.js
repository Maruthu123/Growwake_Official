import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Animeparticle() {
      const particlesInit = async (engine) => {
        try {
          console.log("Initializing Particles:", engine);
          await loadFull(engine);
        } catch (error) {
          console.error("Error loading particles:", error);
        }
      };
  return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" }, 
          
          particles: {
            number: { value: 7 },
            color: { value: ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFD700"] },
            shape: { type: ["circle", "square", "triangle"] },
            size: { value: 5 },
            move: {
              enable: true,
              speed: 1.5,
              direction: "up",
              random: false,
              straight: false,
              outModes: { default: "bounce" },
              path: { enable: true },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
          },
        }}
      />
  )
}

export default Animeparticle