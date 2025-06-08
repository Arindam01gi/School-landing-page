import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const DataHero = () => {
  const textRef1 = useRef<HTMLDivElement>(null); // Ref for the first text
  const textRef2 = useRef<HTMLParagraphElement>(null); // Ref for the second text

  useEffect(() => {
    // Animate the first text
    if (textRef1.current) {
      gsap.fromTo(
        textRef1.current,
        { opacity: 0.2, clipPath: 'inset(0 100% 0 0)' }, // Start with opacity 0.2 and fully clipped from the right
        {
          opacity: 1, // Transition to full opacity
          clipPath: 'inset(0 0% 0 0)', // Fully reveal the text
          scrollTrigger: {
            trigger: textRef1.current,
            start: 'top 80%', // Animation starts when the element enters the viewport
            end: 'top 20%', // Animation ends when the element is near the top of the viewport
            scrub: true, // Smoothly animates as you scroll
          },
        }
      );
    }

    // Animate the second text
    if (textRef2.current) {
      gsap.fromTo(
        textRef2.current,
        { opacity: 0.2, clipPath: 'inset(0 100% 0 0)' }, // Start with opacity 0.2 and fully clipped from the right
        {
          opacity: 1, // Transition to full opacity
          clipPath: 'inset(0 0% 0 0)', // Fully reveal the text
          scrollTrigger: {
            trigger: textRef2.current,
            start: 'top 80%', // Animation starts when the element enters the viewport
            end: 'top 20%', // Animation ends when the element is near the top of the viewport
            scrub: true, // Smoothly animates as you scroll
          },
        }
      );
    }
  }, []);

  return (
    <div className="h-screen bg-background flex flex-col items-center pt-12 md:pt-48">
      <div ref={textRef1} className="text-5xl text-[#470A68] font-source-serif opacity-20">
        Academic with a very modern edge
      </div>
      <p ref={textRef2} className='text-3xl text-[#470A68] pt-10 opacity-20'>
        - Tatler Schools Guide
      </p>


      <div>
        
      </div>



      
    </div>
  );
};

export default DataHero;