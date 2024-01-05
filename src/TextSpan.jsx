import React, { useState } from "react";
import { motion, transform, useAnimationControls } from "framer-motion";

const TextSpan = ({ children }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const rubberBand = () => {
    controls.start({
      scale: [1, 1.4, 0.75, 1.25, 0.9, 1],
    });
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        rubberBand();
      }}
    >
      {children}
    </motion.span>
  );
};

export default TextSpan;
