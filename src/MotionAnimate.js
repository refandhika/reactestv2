import React from 'react';
import { motion } from "framer-motion";

import './MotionAnimate.css';

function MotionAnimate() {
  return (
    <div className="MotionAnimate">
      <div className="MA-Description">
	This is spinning and transforming square.
      </div>
      <div className="MA-Object">
        <motion.div 
	  animate={{ 
	    scale: [1, 2, 2, 1, 1],
	    rotate: [0, 0, 270, 270, 0],
	    borderRadius: ["20%", "20%", "50%", "50%", "20%"]
	  }}
	  transition={{
	    duration: 2.5,
	    ease: "easeInOut",
	    times: [0, .2, .5, .8, 1],
	    loop: Infinity,
	    repeatDelay: 1
	  }}
	  className="MA-Object-1"/>
      </div>
    </div>
  );
}

export default MotionAnimate;
