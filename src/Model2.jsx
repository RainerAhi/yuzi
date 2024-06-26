import React, { useEffect, useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useThree } from "@react-three/fiber";
import { useLayoutEffect, useState } from "react";

export default function Model2({props }) {
  const { camera, scene } = useThree();
  const model2 = useRef();
  const controlsRef = useRef()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const tl = gsap.timeline();
  let mm = gsap.matchMedia();

  useLayoutEffect(() => {
    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      tl

      .to(controlsRef.current.target, {
        x: 0,
        z: 0,
        y: -0.5,
        scrollTrigger: {
          trigger: ".container-one",
          start: "top bottom",
          end: "bottom 90%",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(model2.current.scale, {
        x: 0.6,
        y: 0.6,
        z: 0.6,
        scrollTrigger: {
          trigger: ".container-one",
          start: "top bottom",
          end: "bottom 90%",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(model2.current.rotation, {
        y: Math.PI * 2,
        scrollTrigger: {
          trigger: ".container-one",
          start: "top bottom",
          end: "bottom 90%",
          scrub: true,
          immediateRender: false,
        },
      })
      

      


    });
  }, []);

  const { nodes, materials } = useGLTF('/mangocan.glb')
  return (
    <>
    <OrbitControls target={ [ 5, 0, 0 ] } ref={controlsRef} minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 1} enableZoom={ false } enableRotate={ false } enablePan={ false } />

    <group {...props} dispose={null}>
      <mesh ref={model2} scale={0.4} castShadow receiveShadow geometry={nodes.can.geometry} material={materials.can} />
    </group>
    </>
  )
}


useGLTF.preload('/mangocan.glb')