import React from 'react'
import './hero.scss'
import { motion } from 'framer-motion'

const textVariants = {
   initial: {
      x: -500,
      opacity: 0
   },
   animate: {
      x: 0,
      opacity: 1,
      transition: {
         duration: 1,
         staggerChildren: 0.1 
      }
   }
};

const scrollVariants = {
   initial: { opacity: 0, y: 10 },
   animate: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 2,
         repeat: Infinity,
         repeatType: 'reverse'
      }
   }
};

const Hero = () => {
   return (
      <div className='hero'>
         <div className="wrapper">
            <motion.div variants={textVariants} initial="initial" animate="animate" className="text-container">
               <motion.h3 variants={textVariants}>Web Developer with</motion.h3>
               <motion.h1 variants={textVariants}>Frontend Expertise!!</motion.h1>
               <motion.div variants={textVariants} className="buttons">
                  <motion.button variants={textVariants}><a href="#projects">Latest Work</a></motion.button>
                  <motion.button variants={textVariants}><a href="#contact">Contact Me</a></motion.button>
               </motion.div>
            </motion.div>
            <motion.img
               variants={scrollVariants} 
               initial="initial"
               animate="animate"
               src="./scroll.png"
               alt="scroll icon"
            />
         </div>
         <div className="imageContainer">
            <img src="./self.png" alt="hero image" />
         </div>
      </div>
   )
}

export default Hero


// import "./hero.scss";
// import { motion } from "framer-motion";

// const textVariants = {
//    initial: {
//       x: -500,
//       opacity: 0,
//    },
//    animate: {
//       x: 0,
//       opacity: 1,
//       transition: {
//          duration: 1,
//          staggerChildren: 0.1,
//       },
//    },
//    scrollButton: {
//       opacity: 0,
//       y: 10,
//       transition: {
//          duration: 2,
//          repeat: Infinity,
//       },
//    },
// };

// const scrollVariants = {
//    initial: { opacity: 0, y: 10 },
//    animate: {
//       opacity: 1,
//       y: 0,
//       transition: {
//          duration: 2,
//          repeat: Infinity,
//          repeatType: 'reverse'
//       }
//    }
// };

// const Hero = () => {
//    return (
//       <div className="hero">
//          <div className="wrapper">
//             <motion.div variants={textVariants} initial="initial" animate="animate" className="text-container">
//                <motion.h3 variants={textVariants}>Web Developer with</motion.h3>
//                <motion.h1 variants={textVariants}>Frontend Expertise!!</motion.h1>
//                <motion.div variants={textVariants} className="buttons">
//                   <motion.button variants={textVariants}><a href="#projects">Latest Work</a></motion.button>
//                   <motion.button variants={textVariants}><a href="#contact">Contact Me</a></motion.button>
//                </motion.div>
//             </motion.div>
//             <motion.img
//                variants={scrollVariants}
//                initial="initial"
//                animate="animate"
//                src="./scroll.png"
//                alt="scroll icon"
//             />
//          </div>
//          <div className="imageContainer">
//             <img src="./self.png" alt="hero image" />
//          </div>
//       </div>
//    );
// };

// export default Hero;
