import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import "../LogoAnimation.module.css"

const LogoAnimation = ({ onComplete }) => {
    const containerRef = useRef(null);
    const lettersRef = useRef([]);

    // The letters in order of appearance
    const letters = ['P', 'U', 'T', 'N', 'E', 'Y'];

    useEffect(() => {
        const container = containerRef.current;
        const letters = lettersRef.current;

        // Set initial state - hidden and scattered
        gsap.set(container, { opacity: 1 });
        gsap.set(letters, { opacity: 0, scale: 0.8 });

        // Create animation timeline
        const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

        // Animate letters appearing from random positions
        tl.fromTo(letters, {
            x: (i) => gsap.utils.random(-200, 200),
            y: (i) => gsap.utils.random(-200, 200),
            opacity: 0,
            scale: 0.8,
        }, {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            duration: 1,
            stagger: 0.1,
        });

        // Morph letters into final positions
        tl.to(letters, {
            scale: 0.8,
            duration: 0.5,
            ease: "power2.inOut",
            stagger: 0.05,
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
        <div className="logo-container bg-primary text-white h-screen flex justify-center items-center text-6xl font-bold" ref={containerRef}>
            {letters.map((letter, index) => (
                <span
                    key={index}
                    className="logo-letter"
                    ref={el => lettersRef.current[index] = el}
                >
                    {letter}
                </span>
            ))}
        </div>
    );
};

export default LogoAnimation; 