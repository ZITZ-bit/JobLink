"use client";

import { useEffect } from 'react';

export default function Particles() {
useEffect(() => {
    const container = document.querySelector('.particles-container');

    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${4 + Math.random() * 6}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particle.style.top = `${Math.random() * 100}%`;
            container.appendChild(particle);
        }
    }, []);

    return <div className="particles-container"></div>;
}
