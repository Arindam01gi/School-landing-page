import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Quote = () => {
  const quoteTextRef = useRef<HTMLDivElement>(null); // Ref for the main quote container
  const attributionTextRef = useRef<HTMLParagraphElement>(null); // Ref for the attribution container
  const quoteCharsRef = useRef<HTMLSpanElement[]>([]); // Ref for individual characters of the main quote
  const attributionCharsRef = useRef<HTMLSpanElement[]>([]); // Ref for individual characters of the attribution

  useEffect(() => {
    if (!quoteTextRef.current || !attributionTextRef.current) return;

    // Use gsap.context for proper cleanup
    const ctx = gsap.context(() => {
      // Animate the main quote characters
      gsap.fromTo(quoteCharsRef.current, {
        opacity: 0.2, 
      }, {
        opacity: 1,
        stagger: {
          each: 0.02, 
        },
        scrollTrigger: {
          trigger: quoteTextRef.current,
          start: 'top 80%', 
          end: 'bottom 20%',
          scrub: 1, 
          markers: false 
        }
      });

      // Animate the attribution characters
      gsap.fromTo(attributionCharsRef.current, {
        opacity: 0.2, 
      }, {
        opacity: 1, 
        stagger: {
          each: 0.02, 
        },
        scrollTrigger: {
          trigger: attributionTextRef.current,
          start: 'top 80%', 
          end: 'bottom 20%', 
          scrub: 1, 
          markers: false
        }
      });
    }, quoteTextRef); 

    return () => ctx.revert(); 
  }, []);

  // Split main quote text into characters for the first line
  const quoteLine1 = "Girls are given the confidence to be who";
  const quoteCharactersLine1 = quoteLine1.split('').map((char, i) => (
    <span
      key={`quote1-${i}`}
      ref={el => { if (el) quoteCharsRef.current[i] = el; }}
      className="inline-block opacity-20" 
    >
      {char === ' ' ? '\u00A0' : char} 
    </span>
  ));

  // Split main quote text into characters for the second line
  const quoteLine2 = "they want to be";
  const offset = quoteLine1.length; 
  const quoteCharactersLine2 = quoteLine2.split('').map((char, i) => (
    <span
      key={`quote2-${i}`}
      ref={el => { if (el) quoteCharsRef.current[offset + i] = el; }} 
      className="inline-block opacity-20" 
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  // Split attribution text into characters
  const attributionText = "- The Good Schools Guide";
  const attributionCharacters = attributionText.split('').map((char, i) => (
    <span
      key={`attribution-${i}`}
      ref={el => { if (el) attributionCharsRef.current[i] = el; }} 
      className="inline-block opacity-20" 
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <div className='bg-white w-full h-96 mb-24 flex flex-col justify-center items-center'>
      <div ref={quoteTextRef} className="text-5xl text-[#470A68] font-source-serif px-4 text-center leading-[120%] ">
        {quoteCharactersLine1}
        <br /> {/* Retain the line break */}
        {quoteCharactersLine2}
      </div>
      <p ref={attributionTextRef} className='text-2xl text-[#470A68] pt-10'>
        {attributionCharacters}
      </p>
    </div>
  );
};

export default Quote;
    