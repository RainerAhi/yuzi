import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Section6 = () => {
    return (
        <section className="six">
            <div className="six-content">
                <h1 className="six-text" >LET'S GET READY FOR SUMMER</h1>
                <div className="six-videos">
                    <video src="/vid1.mov" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto" className="background-video" loop ></video>
                    <video src="/vid2.mov" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto" className="background-video" loop ></video>
                    <video src="/vid3.mov" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto" className="background-video" loop ></video>
                </div>
            </div>
        </section>
    );
};