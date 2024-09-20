import React, { useRef } from 'react'
import './project.scss'
import { useScroll, useSpring, motion, useTransform } from 'framer-motion'

let projects = [{
   id: 1,
   name: "Chat App using WebSocket.IO",
   image: "./chat app.jpg",
   url: "https://chatapp-a5v9.onrender.com/register",
   desc: "This project is a chat application built using WebSocket.IO, a JavaScript library for real-time web applications. The application allows two users to communicate with each other in real-time, sending messages back and forth instantly. Additionally, when a user is online, it reflects on their profile picture."
}, {
   id: 2,
   name: "Weather App",
   image: "./weather.jpg",
   url: "https://awdhesh-student.github.io/weather-app/",
   desc: "This is the Weather App designed with the help of HTML, CSS, JavaScript, and Weather API by Rapid Api. It shows all the information about the particular place like min and max temperatures, humidity info, etc. entered by the user."
}, {
   id: 3,
   name: "Book a Doctor",
   image: "./bookadoc.jpg",
   url: "https://drive.google.com/file/d/1wsPyhAY9dU5fAfz4hN_-gbBBmAiPY9OA/view",
   desc: "Booking a doctor appointment has never been easier. With my convenient online platform, you can quickly and effortlessly schedule your appointments from the comfort of your own home. This app is totally built on the latest MERN framework. This user-friendly interface allows you to browse through a wide range of doctors and healthcare providers, making it simple to find the perfect match for your needs."
},]

const Single = ({ item }) => {
   const ref = useRef();

   const { scrollYProgress } = useScroll({
      target: ref,
   });

   const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

   return (
      <section >
         <div className="container">
            <div className="wrapper">
               <div className="imageContainer" ref={ref}>
                  <img src={item.image} alt="" />
               </div>
               <motion.div className="textContainer" style={{ y }}>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <button><a href={item.url} target='_blank'>Use it</a></button>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

const Project = () => {
   const ref = useRef();

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
   });

   const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
   });

   return (
      <div className="portfolio" ref={ref}>
         <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
         </div>
         {projects.map((item) => (
            <Single item={item} key={item.id} />
         ))}
      </div>
   );
};

export default Project;