import React from 'react';
import { motion } from "framer-motion";

import './AnimatedToggle.css';

function AnimatedToggle() {
  return (
    <div className="AnimatedToggle">
      <div className="AT-Description">
	This is moving square, animated like a loading dot.
      </div>
      <div className="AT-Object">
        <motion.button
	  animate={{
	    scale: [1, 1.5, 1],
	    opacity: [0, 1, 0]
	  }}
	  transition={{
	    ease: "easeInOut",
	    duration: 2,
	    times: [0, .5, 1],
	    loop: Infinity,
	    repeatDelay: 2
	  }}
	  className="AT-Object-1"/>
	<motion.button
	  animate={{
	    scale: [1, 1.5, 1],
	    opacity: [0, 1, 0]
	  }}
	  transition={{
	    ease: "easeInOut",
	    duration: 2,
	    times: [0, .5, 1],
	    delay: 1,
	    loop: Infinity,
	    repeatDelay: 2
	  }}
	  className="AT-Object-1"/>
	<motion.button
	  animate={{
	    scale: [1, 1.5, 1],
	    opacity: [0, 1, 0]
	  }}
	  transition={{
	    ease: "easeInOut",
	    duration: 2,
	    times: [0, .5, 1],
	    delay: 2,
	    loop: Infinity,
	    repeatDelay: 2
	  }}
	  className="AT-Object-1"/>
      </div>
    </div>
  );
}

export default AnimatedToggle;
