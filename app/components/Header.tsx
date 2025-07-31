'use client';

import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { AnimatedLink } from './AnimatedLink';

interface HeaderProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

export default function Header({ isDarkMode, toggleTheme }: HeaderProps) {
    const [selectedItem, setSelectedItem] = useState<'home' | 'workshop' | 'agency' | 'store'>('home');
    const circleRef = useRef<HTMLDivElement>(null);

    const navItems = [
        { id: 'home' as const, label: 'home' },
        { id: 'workshop' as const, label: 'workshop' },
        { id: 'agency' as const, label: 'agency' },
        { id: 'store' as const, label: 'store' },
    ];

    const handleThemeToggle = () => {
        if (!circleRef.current) return;

        const circle = circleRef.current;
        const rect = circle.getBoundingClientRect();

        // Create overlay element positioned at the circle
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = `${rect.top + rect.height / 2}px`;
        overlay.style.left = `${rect.left + rect.width / 2}px`;
        overlay.style.width = `${rect.width}px`;
        overlay.style.height = `${rect.height}px`;
        overlay.style.backgroundColor = isDarkMode ? '#ffffff' : '#000000';
        overlay.style.borderRadius = '50%';
        overlay.style.zIndex = '9999';
        overlay.style.pointerEvents = 'none';
        overlay.style.transform = 'translate(-50%, -50%)';

        document.body.appendChild(overlay);

        // Calculate scale needed to cover entire screen
        const maxDimension = Math.max(window.innerWidth, window.innerHeight);
        const scale = (maxDimension * 3) / rect.width;

        // Fluid GSAP animation
        gsap.timeline()
            .to(overlay, {
                scale: scale,
                duration: 2.4,
                ease: "power4.inOut"
            })
            .call(() => {
                // Toggle theme in the middle of animation
                toggleTheme();
            }, [], 1.2)
            .to(overlay, {
                opacity: 0,
                duration: 0.8,
                ease: "power4.inOut",
                onComplete: () => {
                    document.body.removeChild(overlay);
                }
            }, 1.6);
    };

    return (
        <header className="flex items-center justify-between px-6 md:px-24 py-8">
            <div className="flex items-center space-x-1.5">
                <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                <span className="font-bold text-lg">priya<span className="font-light">ranjan</span></span>
            </div>

            <div className="hidden md:flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-6">
                    {navItems.map((item) => (
                        <div key={item.id} className="flex flex-col items-center">
                            <div onClick={() => setSelectedItem(item.id)}>
                                <AnimatedLink
                                    href={`/${item.id}`}
                                    className={`text-sm font-medium transition-colors ${isDarkMode ? 'text-white/60' : 'text-black/60'}`}
                                >
                                    {item.label}
                                </AnimatedLink>
                            </div>
                            <div
                                className={`w-1 h-1 rounded-full transition-opacity ${selectedItem === item.id
                                    ? isDarkMode ? 'bg-white opacity-100' : 'bg-black opacity-100'
                                    : 'opacity-0'
                                    }`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right side - Theme toggle with background circle and 4 circles */}
            <div className="flex items-center space-x-4">
                {/* Theme toggle button with background circle */}
                <div className="relative">
                    {/* Background circle - same height as button */}
                    <div
                        ref={circleRef}
                        className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`}
                        style={{ aspectRatio: '1', left: '0', right: 'auto', width: '40px' }}
                    ></div>

                    <button
                        onClick={handleThemeToggle}
                        className={`relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${isDarkMode
                            ? 'bg-white text-black'
                            : 'bg-black text-white'
                            }`}
                    >
                        {isDarkMode ? 'light mode' : 'dark mode'}
                    </button>
                </div>

                {/* 2x2 circle grid */}
                <button className="p-2">
                    <div className="grid grid-cols-2 gap-1">
                        <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                        <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                        <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                        <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                    </div>
                </button>
            </div>
        </header>
    );
}