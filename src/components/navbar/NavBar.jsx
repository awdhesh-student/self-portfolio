// import React from 'react'
// import './navbar.scss'
// import { motion } from 'framer-motion'
// import SideBar from '../sidebar/SideBar'
// const NavBar = () => {
//    return (
//       <div className='navbar'>
//          <SideBar />
//          <div className="wrapper">
//             <motion.span
//                initial={{ opacity: 0, scale: 0.5 }}
//                animate={{ opacity: 1, scale: 1 }}
//                transition={{ duration: 0.5 }}>
//                Awdhesh Prasad
//             </motion.span>
//             <motion.div
//                initial={{ opacity: 0, scale: 0.5 }}
//                animate={{ opacity: 1, scale: 1 }}
//                transition={{ duration: 0.5 }}
//                className="socials">
//                <a href={import.meta.env.VITE_APP_X_LINKEDIN_URL} target='_blank'><img src="./linkedin.png" alt="" /></a>
//                <a href={import.meta.env.VITE_APP_X_GITHUB_URL} target='_blank'><img src="./github.png" alt="" /></a>
//                <a href={import.meta.env.VITE_APP_X_RESUME_URL} target='_blank'><img style={{width: 24, height: 24, marginTop: 7}} src="./document.png" alt="" /></a>
//             </motion.div>
//          </div>
//       </div>
//    )
// }

// export default NavBar


import React from 'react';
import './navbar.scss';
import { motion } from 'framer-motion';
import SideBar from '../sidebar/SideBar';

const NavBar = () => {
   return (
      <div className='navbar'>
         <SideBar />
         <div className="wrapper">
            <motion.span
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
            >
               Awdhesh Prasad
            </motion.span>
            <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
               className="socials"
            >
               <a href={import.meta.env.VITE_APP_X_LINKEDIN_URL} target='_blank' className="tooltip" data-title="LinkedIn">
                  <img src="./linkedin.png" alt="LinkedIn" />
               </a>
               <a href={import.meta.env.VITE_APP_X_GITHUB_URL} target='_blank' className="tooltip" data-title="GitHub">
                  <img src="./github.png" alt="GitHub" />
               </a>
               <a href={import.meta.env.VITE_APP_X_RESUME_URL} target='_blank' className="tooltip" data-title="Resume">
                  <img src="./document.png" alt="Resume" style={{ width: 24, height: 24, marginTop: 7 }} />
               </a>
            </motion.div>
         </div>
      </div>
   );
}

export default NavBar;
