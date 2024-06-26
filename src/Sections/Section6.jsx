import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Section6 = () => {
    return (
        <section className="six">
            <div className="six-content">
                <h1 className="six-text" >LET'S GET READY FOR SUMMER</h1>
                <video src="/sodavideo.mp4" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto" className="background-video" loop ></video>
            </div>
        </section>
    );
};