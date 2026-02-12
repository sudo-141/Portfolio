import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

const Tech = () => {
    // Removed showHeader state since it's handled in Navbar
    // const [showHeader, setShowHeader] = useState(true);
    // const lastScrollY = useRef(0);

    useEffect(() => {
        // Custom Cursor Logic
        const cursorContainer = document.getElementById('custom-cursor');
        if (!cursorContainer) return;

        const cursorImg = cursorContainer.querySelector('img');
        let mouseX = -100;
        let mouseY = -100;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        document.addEventListener('mousemove', onMouseMove);

        let animationFrameId;
        const updateCursor = () => {
            cursorContainer.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            animationFrameId = requestAnimationFrame(updateCursor);
        };
        updateCursor();

        const onMouseDown = () => {
            if (cursorImg) cursorImg.classList.add('cursor-click');
        };
        const onMouseUp = () => {
            if (cursorImg) cursorImg.classList.remove('cursor-click');
        };

        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Removed local scroll logic
    /*
    useEffect(() => {
        // Header Scroll Logic
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    */

    return (
        <div className="bg-background-dark font-display text-white min-h-screen relative overflow-x-hidden">
            <Navbar />
            <style>{`
            /* Base & Typography */
            body {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            /* Glassmorphism Effects */
            .glass {
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.1);
            }

            .glass-pill {
                background: rgba(255, 255, 255, 0.03);
                backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px);
                border: 1px solid rgba(255, 255, 255, 0.1);
            }

            .glass-card {
                background: rgba(34, 27, 39, 0.4);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(158, 31, 249, 0.2);
                transition: all 0.3s ease;
            }

            .glass-card:hover {
                border-color: rgba(158, 31, 249, 0.6);
                box-shadow: 0 0 20px rgba(158, 31, 249, 0.15);
            }

            /* Neon & Glow Effects */
            .pulse-neon {
                box-shadow: 0 0 0 0 rgba(37, 106, 244, 0.7);
                animation: pulse 2s infinite;
            }

            .pulse-green {
                box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
                animation: pulse 2s infinite;
            }

            .neon-ring {
                position: relative;
            }

            .neon-ring::before {
                content: "";
                position: absolute;
                inset: -4px;
                border-radius: 50%;
                background: linear-gradient(#256af4, #09ba3b, #256af4);
                z-index: -1;
                animation: spin-neon 2s linear infinite;
                filter: blur(10px);
                opacity: 0.5;
            }

            .neon-glow {
                text-shadow: 0 0 10px rgba(158, 31, 249, 0.5);
            }

            .neon-glow-purple {
                box-shadow: 0 0 15px rgba(168, 85, 247, 0.4);
            }

            /* Animations */
            @keyframes spin-neon {
                0% {
                    transform: rotate(0deg);
                }

                100% {
                    transform: rotate(360deg);
                }
            }

            @keyframes pulse {
                0% {
                    transform: scale(0.95);
                    box-shadow: 0 0 0 0 rgba(37, 106, 244, 0.7);
                }

                70% {
                    transform: scale(1);
                    box-shadow: 0 0 0 10px rgba(37, 106, 244, 0);
                }

                100% {
                    transform: scale(0.95);
                    box-shadow: 0 0 0 0 rgba(37, 106, 244, 0);
                }
            }

            .reveal-container {
                position: relative;
                overflow: hidden;
                display: inline-flex;
                line-height: 1.2;
            }

            .reveal-text {
                display: block;
                transform: translateY(100%);
                animation: slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                animation-delay: 0.2s;
            }

            @keyframes slide-up {
                from {
                    transform: translateY(100%);
                    opacity: 0;
                }

                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            /* Custom Cursor */
            body,
            a,
            button,
            input,
            select,
            textarea,
            .glass-card {
                cursor: auto;
                /* Default to normal cursor */
            }

            @media (min-width: 768px) and (pointer: fine) {

                body,
                a,
                button,
                input,
                select,
                textarea,
                .glass-card {
                    cursor: none !important;
                    /* Hide default cursor only on desktop/mouse */
                }

                #custom-cursor {
                    display: block !important;
                }
            }

            @media (pointer: coarse) {
                #custom-cursor {
                    display: none !important;
                }
            }

            @keyframes cyber-glow {
                0% {
                    filter: drop-shadow(0 0 2px rgba(37, 106, 244, 0.9)) drop-shadow(0 0 4px rgba(37, 106, 244, 0.5));
                    transform: scale(1);
                }

                50% {
                    filter: drop-shadow(0 0 6px rgba(168, 85, 247, 0.9)) drop-shadow(0 0 12px rgba(168, 85, 247, 0.5));
                    transform: scale(1.05);
                }

                100% {
                    filter: drop-shadow(0 0 2px rgba(37, 106, 244, 0.9)) drop-shadow(0 0 4px rgba(37, 106, 244, 0.5));
                    transform: scale(1);
                }
            }

            .cursor-cyber {
                animation: cyber-glow 3s ease-in-out infinite;
            }

            .cursor-click {
                transform: scale(0.85) rotate(-10deg) !important;
                filter: drop-shadow(0 0 10px rgba(59, 130, 246, 1)) !important;
            }

            /* Contact Page Specific Interactions */
            .mt-6>div:last-child {
                transition: all 0.50s cubic-bezier(0.22, 1, 0.36, 1);
                border: 1px solid rgba(255, 255, 255, 0.05);
                cursor: pointer;
            }

            .mt-6>div:last-child:hover {
                transform: translateY(-8px);
                background-color: rgba(255, 255, 255, 0.1);
                border-color: rgba(255, 255, 255, 0.2);
                box-shadow: 0 25px 50px -12px rgba(168, 85, 247, 0.1);
            }

            .mt-6>div:last-child:hover .size-14 {
                transform: scale(1.1) rotate(6deg);
                background-color: rgba(168, 85, 247, 0.2);
                transition: all 0.50s ease-out;
            }

            .mt-6>div:last-child .size-14 {
                transition: all 0.50s ease-out;
            }

            .mt-6>div:last-child:hover .text-slate-500 {
                color: #a855f7;
                transition: color 0.50s ease;
            }

            @keyframes subtle-float {

                0%,
                100% {
                    transform: translateY(0) scale(1);
                }

                50% {
                    transform: translateY(-10px) scale(1.02);
                }
            }

            @keyframes typing-bounce {

                0%,
                100% {
                    transform: translateY(0);
                }

                50% {
                    transform: translateY(4px);
                }
            }

            @keyframes code-slide {
                from {
                    transform: translateY(0);
                }

                to {
                    transform: translateY(-44px);
                }
            }

            @keyframes screen-flicker {

                0%,
                100% {
                    opacity: 1;
                }

                50% {
                    opacity: 0.95;
                }
            }

            .anim-float-pro {
                animation: subtle-float 5s ease-in-out infinite;
            }

            .anim-type-left {
                animation: typing-bounce 0.2s ease-in-out infinite;
            }

            .anim-type-right {
                animation: typing-bounce 0.2s ease-in-out infinite 0.1s;
            }

            .anim-code {
                animation: code-slide 2.5s linear infinite;
            }

            .anim-glow {
                animation: screen-flicker 2s ease-in-out infinite;
            }
            `}</style>
            <div id="custom-cursor" className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
                style={{ transform: 'translate(-100px, -100px)' }}>
                <img src="https://img.icons8.com/?size=100&id=DzDNJborQlTB&format=png&color=ffffff"
                    className="w-8 h-8 cursor-cyber relative z-10 drop-shadow-[0_0_10px_rgba(37,106,244,0.8)]"
                    alt="custom cursor" />
            </div>
            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 mix-blend-screen">
                </div>
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] opacity-50 mix-blend-screen">
                </div>
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-900/40 rounded-full blur-3xl">
                </div>
            </div>

            {/* Navbar Replaced Here */}
            <main className="max-w-[1200px] mx-auto pt-32 pb-20 px-6">
                <header className="mb-12">
                    <h1
                        className="text-5xl md:text-6xl font-black tracking-tighter mb-4 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Tech Stack &amp; Tools.</h1>
                    <p className="text-slate-400 text-lg max-w-2xl">A curated list of my specialized technologies, design tools, and
                        the professional environment I use to craft digital experiences.</p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    <div
                        className="md:col-span-4 glass-card rounded-2xl p-8 relative overflow-hidden group border border-white/10 bg-gray-900/40 backdrop-blur-xl">

                        <div
                            className="absolute -top-24 -left-24 size-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none">
                        </div>

                        <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">

                            <div className="flex-1 w-full">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <span
                                            className="text-accent-purple text-xs font-bold tracking-[0.2em] uppercase text-indigo-400">Core
                                            Capabilities</span>
                                        <h2 className="text-3xl font-black text-white mt-1">Frontend Development</h2>
                                    </div>
                                    <img src="https://img.icons8.com/?size=50&id=19294&format=png&color=FFFFFF" alt="code"
                                        className="w-10 h-10 opacity-20" />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                    <div
                                        className="glass-pill px-5 py-3 rounded-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer group/pill hover:-translate-y-1">
                                        <img src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
                                            className="w-6 h-6 transition-transform duration-300 group-hover/pill:scale-110 group-hover/pill:rotate-6" />
                                        <span
                                            className="font-semibold text-sm text-gray-300 group-hover/pill:text-indigo-400 transition-colors">Python</span>
                                    </div>

                                    <div
                                        className="glass-pill px-5 py-3 rounded-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer group/pill hover:-translate-y-1">
                                        <img src="https://img.icons8.com/?size=100&id=TpULddJc4gTh&format=png&color=000000"
                                            className="w-6 h-6 transition-transform duration-300 group-hover/pill:scale-110 group-hover/pill:rotate-6" />
                                        <span
                                            className="font-semibold text-sm text-gray-300 group-hover/pill:text-indigo-400 transition-colors">C++</span>
                                    </div>

                                    <div
                                        className="glass-pill px-5 py-3 rounded-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer group/pill hover:-translate-y-1">
                                        <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
                                            className="w-6 h-6 transition-transform duration-300 group-hover/pill:scale-110 group-hover/pill:rotate-6" />
                                        <span
                                            className="font-semibold text-sm text-gray-300 group-hover/pill:text-indigo-400 transition-colors">HTML</span>
                                    </div>

                                    <div
                                        className="glass-pill px-5 py-3 rounded-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer group/pill hover:-translate-y-1">
                                        <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
                                            className="w-6 h-6 transition-transform duration-300 group-hover/pill:scale-110 group-hover/pill:rotate-6" />
                                        <span
                                            className="font-semibold text-sm text-gray-300 group-hover/pill:text-indigo-400 transition-colors">CSS</span>
                                    </div>

                                    <div
                                        className="glass-pill px-5 py-3 rounded-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer group/pill hover:-translate-y-1">
                                        <img src="https://api.iconify.design/logos:react.svg"
                                            className="w-6 h-6 transition-transform duration-300 group-hover/pill:scale-110 group-hover/pill:rotate-6" />
                                        <span
                                            className="font-semibold text-sm text-gray-300 group-hover/pill:text-indigo-400 transition-colors">React</span>
                                    </div>

                                    <div
                                        className="glass-pill px-5 py-3 rounded-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer group/pill hover:-translate-y-1">
                                        <img src="https://api.iconify.design/logos:tailwindcss-icon.svg"
                                            className="w-6 h-6 transition-transform duration-300 group-hover/pill:scale-110 group-hover/pill:rotate-6" />
                                        <span
                                            className="font-semibold text-sm text-gray-300 group-hover/pill:text-indigo-400 transition-colors">Tailwind
                                            CSS</span>
                                    </div>

                                    <div
                                        className="glass-pill px-5 py-3 rounded-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer group/pill hover:-translate-y-1">
                                        <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
                                            className="w-6 h-6 transition-transform duration-300 group-hover/pill:scale-110 group-hover/pill:rotate-6" />
                                        <span
                                            className="font-semibold text-sm text-gray-300 group-hover/pill:text-indigo-400 transition-colors">JavaScript</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
                                <svg viewBox="0 0 320 260"
                                    className="w-72 h-auto anim-float-pro drop-shadow-[0_20px_50px_rgba(99,102,241,0.3)]"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="monitorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#374151' }} />
                                            <stop offset="100%" style={{ stopColor: '#111827' }} />
                                        </linearGradient>
                                        <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
                                            <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 0.2 }} />
                                            <stop offset="100%" style={{ stopColor: '#6366f1', stopOpacity: 0 }} />
                                        </radialGradient>
                                        <clipPath id="screenClip">
                                            <rect x="70" y="90" width="160" height="90" rx="4" />
                                        </clipPath>
                                    </defs>

                                    <path d="M20 210 L300 210 L285 235 L35 235 Z" fill="#1f2937" opacity="0.8" />

                                    <rect x="142" y="185" width="16" height="25" fill="#374151" />
                                    <ellipse cx="150" cy="210" rx="35" ry="5" fill="#111827" />

                                    <rect x="60" y="80" width="180" height="110" rx="10" fill="url(#monitorGrad)"
                                        stroke="#4b5563" strokeWidth="1.5" />

                                    <g clipPath="url(#screenClip)">
                                        <rect x="70" y="90" width="160" height="90" fill="#030712" />

                                        <g className="anim-code" transform="translate(85, 110)">
                                            <rect width="40" height="4" rx="2" fill="#818cf8" />
                                            <rect x="45" width="20" height="4" rx="2" fill="#c084fc" />

                                            <rect y="12" x="10" width="60" height="4" rx="2" fill="#34d399" opacity="0.8" />
                                            <rect y="24" x="10" width="30" height="4" rx="2" fill="#fbbf24" opacity="0.8" />

                                            <rect y="36" width="50" height="4" rx="2" fill="#818cf8" />

                                            <rect y="48" width="40" height="4" rx="2" fill="#818cf8" />
                                            <rect y="60" x="10" width="60" height="4" rx="2" fill="#34d399" />
                                        </g>

                                        <rect x="70" y="90" width="160" height="15" fill="#1f2937" />
                                        <circle cx="80" cy="97" r="2.5" fill="#f87171" />
                                        <circle cx="90" cy="97" r="2.5" fill="#fbbf24" />
                                        <circle cx="100" cy="97" r="2.5" fill="#4ade80" />

                                        <rect x="70" y="90" width="160" height="90" fill="url(#screenGlow)" className="anim-glow" />
                                    </g>

                                    <path d="M95 205 L205 205 L210 218 L90 218 Z" fill="#374151" stroke="#4b5563" />

                                    <path d="M110 260 C110 200 190 200 190 260" fill="#312e81" opacity="0.5"
                                        transform="translate(2, 2)" />

                                    <path d="M110 260 C110 200 190 200 190 260" fill="#4f46e5" />

                                    <circle cx="150" cy="185" r="28" fill="#a5b4fc" />
                                    <path
                                        d="M125 175 C125 150 175 150 175 175 C175 195 160 195 150 195 C140 195 125 195 125 175"
                                        fill="#1e1b4b" />

                                    <g className="anim-type-left">
                                        <circle cx="115" cy="220" r="10" fill="#c7d2fe" />
                                    </g>
                                    <g className="anim-type-right">
                                        <circle cx="185" cy="220" r="10" fill="#c7d2fe" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div
                        className="md:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute -bottom-24 -right-24 size-64 bg-accent-purple/10 blur-[100px] rounded-full"></div>
                        <div className="relative z-10">
                            <div className="mb-8">
                                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Personal
                                    Interests</span>
                                <h2 className="text-3xl font-black text-white mt-1">My Hobbies</h2>
                            </div>
                            <div className="space-y-4">

                                {/* Drawing */}
                                <div
                                    className="glass-pill p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                                    <div
                                        className="size-10 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                        <img src="https://img.icons8.com/?size=100&id=46724&format=png&color=ffffff"
                                            alt="drawing" className="w-6 h-6 object-contain" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-white group-hover:text-primary transition-colors">
                                            Drawing</p>
                                        <p className="text-xs text-slate-400">Sketching & digital art since childhood</p>
                                    </div>
                                </div>

                                {/* Gaming */}
                                <div
                                    className="glass-pill p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                                    <div
                                        className="size-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                        <img src="https://img.icons8.com/?size=100&id=cdTzm4ndoVu4&format=png&color=ffffff"
                                            alt="gaming" className="w-6 h-6 object-contain" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-white group-hover:text-primary transition-colors">
                                            Gaming</p>
                                        <p className="text-xs text-slate-400">Strategic & immersive gaming</p>
                                    </div>
                                </div>

                                {/* Sports */}
                                <div
                                    className="glass-pill p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                                    <div
                                        className="size-10 bg-gradient-to-br from-yellow-400 to-red-500 rounded-lg flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                        <img src="https://img.icons8.com/?size=100&id=ji3xzFh88wAe&format=png&color=ffffff"
                                            alt="sports" className="w-6 h-6 object-contain" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-white group-hover:text-primary transition-colors">
                                            Sports</p>
                                        <p className="text-xs text-slate-400">Active in Football & Badminton</p>
                                    </div>
                                </div>

                                {/* UI/UX Designing */}
                                <div
                                    className="glass-pill p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                                    <div
                                        className="size-10 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-lg flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                        <img src="https://img.icons8.com/?size=100&id=y9OsIxmZTFWI&format=png&color=ffffff"
                                            alt="ui/ux" className="w-6 h-6 object-contain" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-white group-hover:text-primary transition-colors">UI/UX
                                            Design</p>
                                        <p className="text-xs text-slate-400">Creating Responsive Designs for Applications</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="mb-6">
                                <span className="text-slate-500 text-xs font-bold tracking-[0.2em] uppercase">Environment</span>
                                <h2 className="text-2xl font-black text-white mt-1">Tools</h2>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                <div
                                    className="flex items-center justify-between glass-pill px-4 py-3 rounded-full hover:bg-white/10 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <img src="https://img.icons8.com/?size=48&id=9OGIyU8hrxW5&format=png&color=000000"
                                            alt="VS Code"
                                            className="w-5 h-5 object-contain transition-all duration-500 ease-out 
                    group-hover:-translate-y-2 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-purple-500/20 shadow-xl" />
                                        <span className="text-sm font-medium">VS Code</span>
                                    </div>

                                </div>
                                <div
                                    className="flex items-center justify-between glass-pill px-4 py-3 rounded-full hover:bg-white/10 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <img src="https://img.icons8.com/?size=48&id=3tC9EQumUAuq&format=png&color=ffffff"
                                            alt="Git"
                                            className="w-5 h-5 object-contain transition-all duration-500 ease-out 
                    group-hover:-translate-y-2 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-purple-500/20 shadow-xl" />
                                        <span className="text-sm font-medium">Git / GitHub</span>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between glass-pill px-4 py-3 rounded-full hover:bg-white/10 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <img src="https://img.icons8.com/?size=48&id=Kwms9QBiZhG2&format=png&color=000000"
                                            alt="Cursor"
                                            className="w-5 h-5 object-contain transition-all duration-500 ease-out 
                    group-hover:-translate-y-2 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-purple-500/20 shadow-xl" />
                                        <span className="text-sm font-medium">Cursor</span>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between glass-pill px-4 py-3 rounded-full hover:bg-white/10 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <img src="https://img.icons8.com/?size=100&id=eoxMN35Z6JKg&format=png&color=000000"
                                            alt="Gemini"
                                            className="w-5 h-5 object-contain transition-all duration-500 ease-out 
                    group-hover:-translate-y-2 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-purple-500/20 shadow-xl" />
                                        <span className="text-sm font-medium">Gemini</span>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between glass-pill px-4 py-3 rounded-full hover:bg-white/10 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <img src="https://img.icons8.com/?size=48&id=Yl9ip6CjqAEI&format=png&color=000000"
                                            alt="Co-Pilot"
                                            className="w-5 h-5 object-contain transition-all duration-500 ease-out 
                    group-hover:-translate-y-2 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-purple-500/20 shadow-xl" />
                                        <span className="text-sm font-medium">Co-Pilot</span>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between glass-pill px-4 py-3 rounded-full hover:bg-white/10 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <img src="https://img.icons8.com/?size=100&id=1LAX3PYMg2iA&format=png&color=000000"
                                            alt="Co-Pilot"
                                            className="w-5 h-5 object-contain transition-all duration-500 ease-out 
                    group-hover:-translate-y-2 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-purple-500/20 shadow-xl" />
                                        <span className="text-sm font-medium">Android Studio</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="md:col-span-4 glass-card bg-gradient-to-br from-card-dark to-primary/5 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 hover:bg-white/5 transition-all duration-300 group cursor-pointer hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                        <div className="flex-1">
                            <h3 className="text-2xl font-black text-white mb-2">Learning Next</h3>
                            <p className="text-slate-400 text-sm mb-6">Always evolving the stack. Currently diving deep into
                                Node.js, Express.js and
                                Prompt Engineering.</p>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="size-2 bg-accent-purple rounded-full neon-glow-purple"></div>
                                    <span className="text-xs font-bold text-slate-300">Node.js</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="size-2 bg-accent-purple rounded-full neon-glow-purple"></div>
                                    <span className="text-xs font-bold text-slate-300">Express.js</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="size-2 bg-accent-purple rounded-full neon-glow-purple"></div>
                                    <span className="text-xs font-bold text-slate-300">React Framework</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="size-32 rounded-2xl glass flex items-center justify-center border border-white/10 bg-white/5 transition-all duration-500 ease-out 
                    group-hover:-translate-y-2 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-purple-500/20 shadow-xl">
                            <img src="https://img.icons8.com/?size=100&id=32628&format=png&color=000000"
                                alt="Collaboration Icon" className="size-16 object-contain" />
                        </div>
                    </div>

                    {/* Backend & Cloud */}
                    <div className="md:col-span-3 glass-card rounded-2xl p-6 relative overflow-hidden group">
                        <div
                            className="absolute -right-10 -bottom-10 size-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors duration-500">
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-slate-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">Backend &amp; Cloud
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

                                <div
                                    className="glass-pill px-5 py-3 rounded-full flex items-center gap-3 hover:bg-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                                    <img src="https://img.icons8.com/?size=48&id=hsPbhkOH4FMe&format=png&color=000000"
                                        alt="Node.js"
                                        className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                                    <span
                                        className="font-semibold text-sm group-hover:text-primary transition-colors">Node.js</span>
                                </div>

                                <div
                                    className="glass-pill px-5 py-3 rounded-full flex items-center gap-3 hover:bg-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                                    <img src="https://img.icons8.com/?size=48&id=PZQVBAxaueDJ&format=png&color=0000FF"
                                        alt="Express.js"
                                        className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                                    <span
                                        className="font-semibold text-sm group-hover:text-primary transition-colors">Express.js</span>
                                </div>

                                <div
                                    className="glass-pill px-5 py-3 rounded-full flex items-center gap-3 hover:bg-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                                    <img src="https://img.icons8.com/?size=48&id=8rKdRqZFLurS&format=png&color=000000"
                                        alt="MongoDB"
                                        className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                                    <span
                                        className="font-semibold text-sm group-hover:text-primary transition-colors">MongoDB</span>
                                </div>

                                <div
                                    className="glass-pill px-5 py-3 rounded-full flex items-center gap-3 hover:bg-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                                    <img src="https://img.icons8.com/?size=48&id=3tC9EQumUAuq&format=png&color=ffffff"
                                        alt="GitHub"
                                        className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                                    <span className="font-semibold text-sm group-hover:text-primary transition-colors">GitHub</span>
                                </div>

                                <div
                                    className="glass-pill px-5 py-3 rounded-full flex items-center gap-3 hover:bg-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                                    <img src="https://img.icons8.com/?size=48&id=g8StgjcrqpfY&format=png&color=ffffff"
                                        alt="Vercel"
                                        className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                                    <span className="font-semibold text-sm group-hover:text-primary transition-colors">Vercel</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Collaboration */}
                    <div
                        className="md:col-span-3 glass-card rounded-2xl p-8 flex items-center justify-between hover:bg-white/10 transition-all duration-300 group cursor-pointer hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 relative overflow-hidden">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                        <div className="relative z-10 max-w-[70%]">
                            <h3 className="text-slate-400 text-xs font-bold tracking-[0.2em] uppercase mb-2">Collaboration</h3>
                            <p className="text-lg font-bold text-white group-hover:text-primary transition-colors leading-tight">Us,
                                Together, As a Team</p>
                        </div>
                        <div
                            className="relative z-10 size-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-all duration-300">
                            <img src="https://img.icons8.com/?size=50&id=LRA7sc7gTMQu&format=png&color=000000" alt="groups"
                                className="w-8 h-8 object-contain opacity-70 transition-all duration-500 ease-out 
                        group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-6" />
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-white/5">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm text-center md:text-left">© 2024 Prasad Portfolio. Designed for the web. All Rights Reserved.</p>
                    <div className="flex gap-6 text-slate-500 text-sm">
                        <a className="hover:text-white transition-colors"
                            href="https://www.linkedin.com/in/prasad-mahamuni-8ab9a1286/">LinkedIn</a>
                        <a className="hover:text-white transition-colors" href="https://github.com/sudo-141/">GitHub</a>
                        <a className="hover:text-white transition-colors"
                            href="https://www.instagram.com/its_jetra?igsh=MWkwOGE2eWxxNXVxZg==">Instagram</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Tech;
