import React from 'react'
import { GiPoliceBadge } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";

import './about.scss'
import { motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    x: 500,
    y: -100
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 1.5,

    }
  }
}

const About = () => {
  return (
    <motion.div className='about' variants={variants} initial="initial" animate="animate">
      <motion.div className="left">
        <h1><motion.span whileHover={{ color: "orange" }}>Self</motion.span> Introductory</h1>
        {/* <p>A frontend developer who believes the magic is in the details—delivering clean code and bold designs.</p> */}
      </motion.div>
      <motion.div className="right">
        <div className="badgeContainer">
          <div className="function">
            <i><GiPoliceBadge /></i>
            <span>1.5 year as MERN stack developer</span>

          </div>
          <div className="function">
            <i><AiFillProject /></i>
            <span>have dynamics projects</span>
          </div>
        </div>
        <div className="textContainer">
          <p>Had a well experienced and knowledge about solving the real life problems and very enthusiastic to learn and explore new things which would encourage me to bring my best and can be helpful for me as well as for an organization to whom I would work.</p>
        </div>
      </motion.div>
    </motion.div>

  )
}

export default About
