import React, { useEffect, useRef, useState } from "react";

export const Section3 = () => {

    const [isVisibleOne, setIsVisibleOne] = useState(false);
    const [isVisibleTwo, setIsVisibleTwo] = useState(false);
    const [isVisibleThree, setIsVisibleThree] = useState(false);
  
    const oneRef = useRef(null);
    const twoRef = useRef(null);
    const threeRef = useRef(null);
  
    useEffect(() => {
  
      const observerOne = new IntersectionObserver(([entry]) => {
        setIsVisibleOne(entry.isIntersecting);
      });
  
      const observerTwo = new IntersectionObserver(([entry]) => {
        setIsVisibleTwo(entry.isIntersecting);
      });
  
      const observerThree = new IntersectionObserver(([entry]) => {
        setIsVisibleThree(entry.isIntersecting);
      });
  
  
      observerOne.observe(oneRef.current);
      observerTwo.observe(twoRef.current);
      observerThree.observe(threeRef.current);
  
      return () => {
        observerOne.unobserve(oneRef.current);
        observerTwo.unobserve(twoRef.current);
        observerThree.unobserve(threeRef.current);
      };
    }, []);

    return (
        <section className="three" >
            <div className="three-content">
                <h1 className={`three-description ${isVisibleOne ? 'visible' : ''}`} ref={oneRef}></h1>
                <h1 className={`three-title reveal-type ${isVisibleTwo ? 'visible' : ''}`} ref={twoRef}>NOTHING SAYS JUICY<br />LIKE YUZY</h1>
                <div className={`three-bottom-texts ${isVisibleThree ? 'visible' : ''}`} ref={threeRef}>
                    <div className="three-bottom-left">
                        <h1 className="three-small-description" >YUZY PACKS MORE FLAVOR THAN ANY OTHER RTD MARGARITA. IT'S AN AUTHENTICALLY CRAFTED MARGARITA THAT BLENDS PREMIUM AGAVE TEQUILA, NATURAL FRUIT JUICES, AND A TOUCH OF SPICES FOR SUPERIOR TASTE. YUZY IS BALANCED TO EVERY SIP.</h1>
                    </div>
                    <div className="three-bottom-right">
                        <h1 className="three-small-description" >USING A REFINED TECHNIQUE BASED ON THE BEST AGAVE, NATURAL INGREDIENTS, AND PROPRIETARY MIXOLOGY, YUZY HAS A DEEP UNDERSTANDING OF THE HEART, SOUL, AND FLAVORS OF THE MEXICAN CULTURE.</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}