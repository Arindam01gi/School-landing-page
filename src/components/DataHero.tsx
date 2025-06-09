import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';

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
    <div className="bg-background flex flex-col items-center pt-12 md:pt-48 ">
      <div ref={textRef} className="text-5xl text-[#470A68] font-source-serif px-4 text-center">
        {characters}
      </div>
      <p ref={subTextRef} className='text-3xl text-[#470A68] pt-10 opacity-20'>
        - Tatler Schools Guide
      </p>

      <div className=' w-full h-[44.69rem] my-48 xl:my-64 flex xl:justify-center justify-end px-10 xl:px-0 items-center '>
        <div className='bg-white xl:w-3/5 w-11/12 h-full flex'>

          <div className='w-3/5 h-full relative '>
            <img
              src="https://www.putneyhigh.gdst.net/wp-content/uploads/2024/08/WEB-Version_PHS_Jo-Sharrock_SW-1-e1722848356843-2048x1536-c-center.webp"
              alt="Putney High School"
              className="absolute left-[-10%] top-1/2 transform -translate-y-1/2 min-w-[110%] max-w-[110%] h-[85%] object-cover"
            />
          </div>
          <div className='w-2/5  h-full flex flex-col justify-center items-center'>
            <div className='  flex flex-col'>

              <div className='w-full text-4xl text-black  flex justify-center text-wrap text-center items-left '>
                Welcome to Putney
              </div>

              <div className='my-16 flex flex-col gap-8 justify-center items-left w-full '>
                <Button text={"Find out more"} />
                <Button text={"Meet the Head"} />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default DataHero;