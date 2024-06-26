import { Loader } from "@react-three/drei";
import Lenis from "@studio-freight/lenis";

import { useProgress } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { Section1 } from "./Sections/Section1";
import { Section3 } from "./Sections/Section3";
import { Section2 } from "./Sections/Section2";
import { Section4 } from "./Sections/Section4";
import { Section5 } from "./Sections/Section5";
import { motion, AnimatePresence } from 'framer-motion';
import { Section6 } from "./Sections/Section6";
import { Section7 } from "./Sections/Section7";

const LoadingScreen = ({ onLoaded }) => {
  const { progress, active } = useProgress();

  // State to keep track of the current liquid height
  const [currentLiquidHeight, setCurrentLiquidHeight] = useState(0);

  // Calculate the target liquid height based on progress
  const targetLiquidHeight = 77.2854233 * (progress / 100);

  // Smoothly interpolate between current and target liquid height
  useEffect(() => {
    const animationDuration = 500; // Duration of the liquid filling animation in milliseconds
    const startTime = Date.now();

    const animateLiquid = () => {
      const now = Date.now();
      const elapsedTime = now - startTime;
      const progress = elapsedTime / animationDuration;

      if (progress >= 1) {
        setCurrentLiquidHeight(targetLiquidHeight);
        return;
      }

      const easedProgress = 1 - Math.pow(1 - progress, 2); // Apply easing
      const interpolatedLiquidHeight = currentLiquidHeight + (targetLiquidHeight - currentLiquidHeight) * easedProgress;

      setCurrentLiquidHeight(interpolatedLiquidHeight);
      requestAnimationFrame(animateLiquid);
    };

    animateLiquid();
  }, [currentLiquidHeight, targetLiquidHeight]);

  // Calculate the Y position of the liquid based on the current liquid height
  const liquidYPosition = 91.4621386 - currentLiquidHeight;

  useEffect(() => {
    if (progress === 100) {
      onLoaded();
    }
  }, [progress, onLoaded]);

  return (
    <div className={`loading-screen ${active ? '' : 'loading-screen--hidden'}`}>
      <div className="loading-screen-container">
        <div className="soda-can">
          <svg
            width="20vw" // Set a fixed width
            height="fit-content" // Set a fixed height
            viewBox="0 0 100 125"
            xmlns="http://www.w3.org/2000/svg"
            className="soda-can-svg"
          >
            <g>
              {/* Can shape */}
              <rect x="25.0010262" y="14.1777153" width="49.9979477" height="77.2854233" />
              <polygon points="71.4807892,5.4894919 28.5233154,5.4894919 25.4465981,12.4964085 74.5534058,12.4964085" />
              <path d="M28.2292099,3.8081849h43.5415802c0.0589066,0,0.100975-0.0462811,0.100975-0.1050816V0.1050817 C71.8717651,0.0462811,71.8296967,0,71.7707901,0H28.2292099c-0.054594,0-0.1009769,0.0462811-0.1009769,0.1050817v3.5980215 C28.128233,3.7619038,28.1746159,3.8081849,28.2292099,3.8081849z" />
              <polygon points="28.5192108,100 71.4850998,100 74.5449905,93.1444473 25.4550114,93.1444473" />
              {/* Liquid filling */}
              <rect x="25.0010262" y={liquidYPosition} width="49.9979477" height={currentLiquidHeight} fill="#f9f6e5" />
            </g>
          </svg>
        </div>
        <div className="loading-text">
          {Math.round(progress)}%
        </div>
        <img src="./logonew.png" className="loading-logo" />
      </div>
    </div>
  );
};




function App() {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 0.5,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setLenis(lenisInstance);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  const handleLoaded = () => {
    setTimeout(() => {
      if (lenis) {
        lenis.start();
      }
      document.body.style.overflow = 'auto';
    }, 1000); // Delay for 1 second
  };

  useEffect(() => {
    if (lenis) {
      lenis.stop();
    }
    document.body.style.overflow = 'hidden';
  }, [lenis]);

  return (
    <>
      <LoadingScreen onLoaded={handleLoaded} />
      <div className="background-container">
        <Section1 />
        <Section2 />
      </div>
      <Section3 />
      <div className="background-container">
        <Section4 />
        <Section5 />
      </div>
      <div className="background-container">
        <Section6 />
        <Section7 />
      </div>
    </>
  );
}

export default App;