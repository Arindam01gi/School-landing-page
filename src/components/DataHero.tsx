import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DataHero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!textRef.current || !subTextRef.current) return;
    
    const chars = charsRef.current;
    const totalChars = chars.length;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(chars, {
        opacity: 0.2,
      }, {
        opacity: 1,
        stagger: {
          each: 0.02,
        },
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        }
      });

      gsap.fromTo(subTextRef.current, {
        opacity: 0.2,
      }, {
        opacity: 1,
        stagger: {
          each: 0.02,
        },
        scrollTrigger: {
          trigger: subTextRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        }
      });
    }, textRef);
    
    return () => ctx.revert();
  }, []);

  // Split text into characters
  const text = "Academic with a very modern edge";
  const characters = text.split('').map((char, i) => (
    <span 
      key={i} 
      ref={el => { if (el) charsRef.current[i] = el }}
      className="inline-block opacity-20"
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <div className=" bg-background flex flex-col items-center pt-12 md:pt-48">
      <div ref={textRef} className="text-5xl text-[#470A68] font-source-serif px-4 text-center">
        {characters}
      </div>
      <p ref={subTextRef} className='text-3xl text-[#470A68] pt-10 opacity-20'>
        - Tatler Schools Guide
      </p>
    </div>
  );
};

export default DataHero;