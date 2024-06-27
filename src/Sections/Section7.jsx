import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Section7 = () => {

  const handleClick = (linkUrl) => {
    // Open the specified webpage link in a new tab when carousel-content is clicked
    window.open(linkUrl, '_blank');
  };
    
      return (
        <section className="seven">
          <div className="seven-content">
            <h1 className="seven-text" >GET YOURS NOW</h1>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className='wave-button glowing-button'
                onClick={() => handleClick('https://drinkyuzy.com/')}
              >
                <h1 className='button-text white'>ORDER NOW</h1>
                <div className='wave' />
              </motion.button>
              <div className="seven-footer">
                <div className="footer-icon-box">
                <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        onClick={() => handleClick('')}
                    >
                        <i className="fa-brands footer-icons fa-instagram"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        onClick={() => handleClick('https://www.youtube.com/channel/UC8-bljvEXqCTOF1-xdwFYtg')}
                    >
                        <i className="fa-brands footer-icons fa-youtube"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        onClick={() => handleClick('')}
                    >
                        <i className="fa-brands footer-icons fa-tiktok"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        onClick={() => handleClick('mailto:support@dialedworldwide.com')}
                    >
                        <i className="fa-solid footer-icons fa-envelope"></i>
                    </motion.div>
                    </div>
                    <h1 className="footer-text" >© DIALED LLC. All Rights Reserved</h1>
              </div>
          </div>
        </section>
      );
    };