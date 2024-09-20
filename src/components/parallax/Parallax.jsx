import React, { useRef } from 'react'
import './parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

const Parallax = ({ type }) => {
   let heading
   switch (type) {
      case 'about':
         heading = 'About Me!!'
         break;
      case 'skills':
         heading = 'Skills'
         break;
      case 'projects':
         heading = 'Projects'
         break;
      case 'contact':
         heading = 'Contact Me!'
         break;
      default:
         heading = null
   }

   const ref = useRef()
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start start', 'end start']
   })

   const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
   const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

   return (
      <div className='parallax' ref={ref} style={{ background: "linear-gradient(180deg, #01011f, #2525bc)" }}>
         <motion.h1 style={{ y: yText }}>{heading}</motion.h1>
         <motion.div className="mountains"></motion.div>
         <motion.div style={{ y: ybg, backgroundImage: `url(${type === "skills" || type === "projects" ? "/planets.png" : "/sun.png"})` }} className="planets"></motion.div>
         <motion.div style={{ x: ybg }} className="stars"></motion.div>
      </div>
   )
}

export default Parallax
