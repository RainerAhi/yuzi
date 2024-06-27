import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Section1 = () => {
    const [hideScrollText, setHideScrollText] = useState(false);
    const [navScrolled, setNavScrolled] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 10;
            if (window.scrollY > scrollThreshold) {
                setHideScrollText(true);
                setNavScrolled(true);
            } else {
                setHideScrollText(false);
                setNavScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
    };

    const handleClick = (linkUrl) => {
        // Open the specified webpage link in a new tab when carousel-content is clicked
        window.open(linkUrl, '_blank');
      };

      const [isMobile, setIsMobile] = useState(false);

      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };
    
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <section className="one">
            <div className="mobile-scroll"/>
            <div className={`navigation ${navScrolled ? "scrolled" : ""}`}>
                {isMobile && (
                <motion.div
                    className="buy"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <i className="fa-solid fa-cart-shopping"></i>
                </motion.div>
                )}
                <div className="navigation-right">
                    <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        onClick={() => handleClick('')}
                    >
                        <i className="fa-brands navigation-icons fa-instagram"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        onClick={() => handleClick('https://www.youtube.com/channel/UC8-bljvEXqCTOF1-xdwFYtg')}
                    >
                        <i className="fa-brands navigation-icons fa-youtube"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        onClick={() => handleClick('')}
                    >
                        <i className="fa-brands navigation-icons fa-tiktok"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        onClick={() => handleClick('mailto:support@dialedworldwide.com')}
                    >
                        <i className="fa-solid navigation-icons fa-envelope"></i>
                    </motion.div>
                </div>
                <img src="./yuzilogo.png" className="navigation-logo" />
                <div className="navigation-left">
                    <motion.div
                        className="buy buy-desktop"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <i className="fa-solid fa-cart-shopping"></i>
                    </motion.div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="wave-button" 
                        onClick={toggleOverlay}
                    >
                        <h1 className="button-text white" >CONTACT</h1>
                        <div className='wave' />
                    </motion.button>
                </div>
            </div>
            <div className="navigation-bottom" >
              <div className="navigation-bottom-left">
                <i className="fa-solid fa-bolt bolt-two"></i>
              </div>
              <div className="navigation-bottom-right">
                <i className="fa-solid fa-bolt"></i>
              </div>
            </div>
            <div className="one-content">
                <div className="one-text-contents">
                    {/* <div className="one-title">
                        <h1 className="title-back">CLASSIC DIALED SELTZERS,<br />MADE TO CONQUER</h1>
                    </div> */}
                    <div class="headline-container" >
                        <h1 className="text-behind" >FOR THE FLAVORFUL</h1>
                        <h1 className="text-behind-blur">FOR THE FLAVORFUL</h1>
                        <h1 className="text-front">FOR THE FLAVORFUL</h1>
                    </div>
                    <div className="dottedLine" style={{ opacity: hideScrollText ? 0 : 1, transition: "opacity 0.3s ease-in-out", pointerEvents: hideScrollText ? "none" : "auto", }}>
                        <svg viewBox="0 0 800 1">
                            <line className="cls-1" y1=".5" x2="800" y2=".5" />
                        </svg>
                    </div>
                    <h1
                        style={{
                            opacity: hideScrollText ? 0 : 1,
                            transition: "opacity 0.3s ease-in-out",
                            pointerEvents: hideScrollText ? "none" : "auto",
                        }}
                        className="title-description"
                    >
                        CRAFTED. JUICY. PREMIUM.
                    </h1>
                </div>
                <div className="scroll-container">
                    <div
                        className="scroll"
                        style={{
                            opacity: hideScrollText ? 0 : 1,
                            transition: "opacity 0.3s ease-in-out",
                            pointerEvents: hideScrollText ? "none" : "auto",
                        }}
                    >
                        <h1 className="scroll-text">PLEASE <br /> SCROLL</h1>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {showOverlay && (
                    <motion.div
                        initial={{ y: "-100vh" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100vh" }}
                        transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                        className="overlay"
                    >
                        <div className="overlay-content">
                            <h1 className="title-back black">CONTACT</h1>
                            <form className="contact-form">
                                <div className="form-group">
                                    <input type="text" name="firstName" placeholder="First Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="lastName" placeholder="Last Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <textarea name="message" placeholder="Message"></textarea>
                                </div>
                                <div className="form-actions">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        type="button"
                                        onClick={toggleOverlay}
                                    >
                                        <h1 className="button-text" >CLOSE</h1>
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        type="submit"
                                        onClick={toggleOverlay}
                                    >
                                        <h1 className="button-text" >SUBMIT</h1>
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

