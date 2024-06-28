import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useLayoutEffect, useState } from "react";
import SplitType from 'split-type'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Model({ rotate, setRotate, ...props }) {

  const { nodes, materials } = useGLTF('./yuzy.glb')

  const { camera, scene } = useThree();
  const model = useRef();
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

  useEffect(() => {
    if (rotate) {
      gsap.to(model.current.rotation, {
        y: model.current.rotation.y + Math.PI * 2,
        duration: 1,
        onComplete: () => setRotate(false),
      });
    }
  }, [rotate, setRotate]);

  const tl = gsap.timeline();
  let mm = gsap.matchMedia();

  useLayoutEffect(() => {

    const cont = document.querySelector(".carousel");
    const splitTypes = document.querySelectorAll('.reveal-type')

    splitTypes.forEach((char,i) => {

      const bg = char.dataset.bgColor
      const fg = char.dataset.fgColor

      const text = new SplitType(char, { types: 'chars'})

      gsap.from(text.chars, {
              scrollTrigger: {
                  trigger: char,
                  start: 'top 80%',
                  end: 'bottom 60%',
                  scrub: true,
              },
              opacity: 0.2,
              stagger: 0.1,
      })
  })

    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      tl
        .to(" .one-border", {
          opacity: 0,
          yPercent: '-50',
          scrollTrigger: {
            trigger: ".two",
            start: "top bottom",
            end: "bottom 100%",
            scrub: true,
            immediateRender: false,
          },
        })
        .to(model.current.rotation, {
          x: Math.PI * 2,
          y: Math.PI * 2,
          scrollTrigger: {
            trigger: ".two",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })
        .to(".experience", {
          position: "absolute",
          scrollTrigger: {
            trigger: ".three",
            start: "top bottom",
            end: "bottom 100%",
            scrub: true,
            immediateRender: false,
          },
        });
    });
  }, []);

  return (
    <group ref={model} position={ [ 0, -2, 0 ] } rotation={ [ 0, Math.PI * 1, 0 ] } {...props} dispose={null}>
      <group scale={0.075}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottle001.geometry}
          material={materials['Bottle.001']}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cap001.geometry}
            material={materials['Cap.001']}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Liquid001.geometry}
            material={materials['juice.001']}
            rotation={[0, 0, Math.PI / 2]}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload('./yuzy.glb')
