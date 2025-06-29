import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import "../LogoAnimation.module.css"

const LogoAnimation = ({ onComplete }) => {
    const containerRef = useRef(null);
    const lettersRef = useRef([]);
    const logoRef = useRef(null);
    const highSchoolTextRef = useRef(null);

    // The letters in order of appearance
    const letters = ['P', 'U', 'T', 'N', 'E', 'Y'];

    // Initial spread-out positions with a bigger gap
    const initialPositions = [
        { x: -500, y: 0 }, // P
        { x: -300, y: 0 }, // U
        { x: -100, y: 0 }, // T
        { x: 100, y: 0 },  // N
        { x: 300, y: 0 },  // E
        { x: 500, y: 0 }   // Y
    ];

    // Final positions to form "PUTNEY" (even closer together)
    const finalPositions = [
        { x: -60, y: 0 }, // P
        { x: -36, y: 0 }, // U
        { x: -12, y: 0 }, // T
        { x: 12, y: 0 },  // N
        { x: 36, y: 0 },  // E
        { x: 60, y: 0 }   // Y
    ];

    useEffect(() => {
        const container = containerRef.current;
        const letters = lettersRef.current;
        const logo = logoRef.current;
        const highSchoolText = highSchoolTextRef.current;

        // Set initial state - spread out with a bigger gap
        gsap.set(container, { opacity: 1 });
        gsap.set(letters, { opacity: 0, x: (i) => initialPositions[i].x, y: 0 });
        gsap.set(logo, { opacity: 0, y: -100 }); // Hide logo initially, slightly above
        gsap.set(highSchoolText, { opacity: 0, y: 100 }); // Hide "HIGH SCHOOL" initially, slightly below

        // Create animation timeline
        const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

        // Animate letters appearing and moving closer together simultaneously
        tl.to(letters, {
            opacity: 1,
            x: (i) => finalPositions[i].x, // Move to final x position
            y: (i) => finalPositions[i].y, // Move to final y position
            duration: 2, // Slower duration
            stagger: 0, // No stagger, all letters move simultaneously
        });

        // Add logo and "HIGH SCHOOL" text
        tl.to(logo, {
            opacity: 1,
            y: 0, // Move to final y position
            duration: 1, // Slower duration
            ease: "power2.inOut",
        }, "-=0.5") // Overlap slightly with the letters animation
        .to(highSchoolText, {
            opacity: 1,
            y: 0, // Move to final y position
            duration: 1, // Slower duration
            ease: "power2.inOut",
        }, "-=0.5") // Overlap slightly with the logo animation
        .to([logo, letters, highSchoolText], {
            y: -window.innerHeight / 2 + 50, // Move to the center of the top navbar
            scale: 0.3, // Gradually reduce size to make it much smaller
            duration: 1.5, // Slower duration for smoother transition
            ease: "power2.inOut",
            onComplete: () => {
                if (onComplete) {
                    onComplete();
                }
                console.log("Animation complete - show main content");
            }
        });

        // Clean up animation on unmount
        return () => tl.kill();
    }, [onComplete]);

    return (
        <div className="logo-container bg-primary text-white h-screen flex justify-center items-center text-5xl " ref={containerRef}>
            {letters.map((letter, index) => (
                <span
                    key={index}
                    className="logo-letter"
                    ref={el => lettersRef.current[index] = el}
                >
                    {letter}
                </span>
            ))}
            <img
                ref={logoRef}
                src="https://www.putneyhigh.gdst.net/wp-content/uploads/2024/07/putney-high-mark-white.svg"
                alt="Putney High School Logo"
                className="absolute top-[33%] w-24 h-24 opacity-0" 
            />
            <div ref={highSchoolTextRef} className="absolute bottom-[42%] text-4xl opacity-0">
                HIGH SCHOOL
            </div>
        </div>
    );
};

export default LogoAnimation; 