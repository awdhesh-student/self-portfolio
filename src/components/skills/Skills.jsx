import React from 'react'
import './skills.scss'

import { animate, color, motion, stagger } from 'framer-motion'

const variants = {
   initial: {
      opacity: 0,
      x: -500,
      y: 100
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

const frontendSkills = ["HTML & CSS",
   "ReactJS",
   "Material UI",
   " Bootstarp",
   "Motion-Framer"
]

const backendSkills = ["NodeJS",
   "Express",
   "MongoDB",
   "Git and Github", "RESTFul APIs", "MySQL",
]

const programmingLanguages = ["JavaScript",
   "Python",
   "C++",
]

const Skills = () => {
   return (
      <motion.div className='skills' variants={variants} initial="initial" whileInView={"animate"}>
         <motion.div className="textContainer" variants={variants}>
            <p>Breaking down complex problems into simple,<br /> elegant code</p>
            <hr />
         </motion.div>
         <motion.div className="titleContainer">
            <div className="title">
               <img src="./people.webp" alt="" />
               <h1><motion.b whileHover={{color: "crimson"}}>Sharpening</motion.b> skills,</h1>
            </div>
            <div className="title">
               <h1><motion.b whileHover={{color: "crimson"}}>building</motion.b> futures.</h1>
            </div>
         </motion.div>
         <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{ background: "grey", color: "black" }} variants={variants}>
               <h2>Frontend Skills</h2>
               <ul>
                  {frontendSkills.map((skills, index) => <motion.li whileHover={{color: "black"}} key={index}>{skills}</motion.li>)}
               </ul>
            </motion.div>
            <motion.div className="box" whileHover={{ background: "grey", color: "black" }} variants={variants}>
               <h2>Backend Skills</h2>
               <ul>{backendSkills.map((skills, index) => <motion.li whileHover={{color: "black"}} key={index}>{skills}</motion.li>)}</ul>
            </motion.div>
            <motion.div className="box" whileHover={{ background: "grey", color: "black" }} variants={variants}>
               <h2>Programming Languages</h2>
               <ul>{programmingLanguages.map((language, index) => <motion.li whileHover={{color: "black"}} key={index}>{language}</motion.li>)}</ul>
            </motion.div>
         </motion.div>
      </motion.div>
   )
}

export default Skills
