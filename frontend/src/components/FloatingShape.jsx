import { motion as Motion } from "framer-motion";
import React from 'react'

const FloatingShape = ({ color, size, top, Left, delay }) => {
    return (
      <Motion.div
        className={`absolute rounded-full ${color} ${size} opacity-20 blur-xl`}
        style={{ top, Left }}
        animate={{
          y: ["0%", "100%", "0%"],
          x: ["0%", "100%", "0%"],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          delay,
        }}
        aria-hidden="true"
      />
    );
  };
  

export default FloatingShape;