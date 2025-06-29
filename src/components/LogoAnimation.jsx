import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import "../LogoAnimation.module.css"

const LogoAnimation = ({ onComplete }) => {
    const containerRef = useRef(null);
    const lettersRef = useRef([]);
    const logoRef = useRef(null);

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

        // Set initial state - spread out with a bigger gap
        gsap.set(container, { opacity: 1 });
        gsap.set(letters, { opacity: 0, x: (i) => initialPositions[i].x, y: 0 });
        gsap.set(logo, { opacity: 0, scale: 0 }); // Hide the logo initially

        // Create animation timeline
        const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

        // Animate letters appearing and moving closer together simultaneously
        tl.to(letters, {
            opacity: 1,
            x: (i) => finalPositions[i].x, // Move to final x position
            y: (i) => finalPositions[i].y, // Move to final y position
            duration: 1,
            stagger: 0, // No stagger, all letters move simultaneously
        });

        // Morph letters into the logo
        tl.to(letters, {
            opacity: 0, // Fade out letters
            duration: 0.5,
            ease: "power2.inOut",
        })
        .to(logo, {
            opacity: 1, // Fade in logo
            scale: 1, // Scale up logo
            duration: 0.5,
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
                src="https://www.putneyhigh.gdst.net/wp-content/uploads/2024/07/putney-high-logo-white.svg"
                alt="Putney High School Logo"
                className="absolute w-48 h-48 opacity-0" // Initially hidden
            />
        </div>
    );
};

export default LogoAnimation; 