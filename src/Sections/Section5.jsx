import React, { useEffect, useLayoutEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Section5 = () => {
  const tl = gsap.timeline();
  let mm = gsap.matchMedia();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      const images = document.querySelectorAll(".five-content img");

      if (isDesktop) {
        // Initial positions for desktop
        gsap.set(images[0], { x: "-30%", y: "-10%" });
        gsap.set(images[1], { x: "30%", y: "-10%" });
        gsap.set(images[2], { x: "-30%", y: "10%" });
        gsap.set(images[3], { x: "30%", y: "10%" });

        // Animation sequence for desktop
        gsap.timeline({
          scrollTrigger: {
            trigger: ".five-content",
            start: "top center",
            end: "top top",
            scrub: 1, // Smooth animation
          }
        })
        .to(images[0], { x: "-150%", y: "-65%" })
        .to(images[1], { x: "150%", y: "-65%" }, 0)
        .to(images[2], { x: "-150%", y: "65%" }, 0)
        .to(images[3], { x: "150%", y: "65%" }, 0);

      } else if (isMobile) {
        // Initial positions for mobile
        gsap.set(images[0], { x: "-30%", y: "-20%" });
        gsap.set(images[1], { x: "30%", y: "-20%" });
        gsap.set(images[2], { x: "-30%", y: "20%" });
        gsap.set(images[3], { x: "30%", y: "20%" });

        // Animation sequence for mobile
        gsap.timeline({
          scrollTrigger: {
            trigger: ".five-content",
            start: "top center",
            end: "top top",
            scrub: 1, // Smooth animation
          }
        })
        .to(images[0], { x: "-50%", y: "-90%" })
        .to(images[1], { x: "50%", y: "-90%" }, 0)
        .to(images[2], { x: "-50%", y: "90%" }, 0)
        .to(images[3], { x: "50%", y: "90%" }, 0);
      }
    });

    return () => {
      mm.revert(); // Revert matchMedia settings on cleanup
    };
  }, []);
    
      return (
        <section className="five">
          <div className="five-content">
            <img src="/y1.png" className="soda-small soda-z2" alt="soda1" />
            <img src="/y2.png" className="soda-small" alt="soda2" />
            <img src="/y3.png" className="soda-small" alt="soda3" />
            <img src="/y4.png" className="soda-small soda-z2" alt="soda4" />
            <img src="/y5.png" className="soda-big" alt="soda5" />
          </div>
        </section>
      );
    };