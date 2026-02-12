import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import emailjs from '@emailjs/browser';

const Contact = () => {
    // Removed showHeader state since it's handled in Navbar
    // const [showHeader, setShowHeader] = useState(true);
    // const lastScrollY = useRef(0);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // NOTE: Replace 'YOUR_TEMPLATE_ID' and 'YOUR_PUBLIC_KEY' with your actual EmailJS values
        emailjs
            .sendForm('service_4nylyiv', 'template_uuvhteo', form.current, {
                publicKey: '7YSozCCF9X615Y6LR',
            })
            .then(
                () => {
                    alert('Message Sent Successfully!');
                    e.target.reset();
                },
                (error) => {
                    alert('Failed to send message. Please try again.');
                    console.error('FAILED...', error.text);
                },
            );
    };

    useEffect(() => {
        // Custom Cursor Logic
        const cursorContainer = document.getElementById('custom-cursor');
        const cursorImg = cursorContainer ? cursorContainer.querySelector('img') : null;
        let animationFrameId;

        if (cursorContainer) {
            let mouseX = -100;
            let mouseY = -100;

            const handleMouseMove = (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            };

            const updateCursor = () => {
                cursorContainer.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
                animationFrameId = requestAnimationFrame(updateCursor);
            };

            document.addEventListener('mousemove', handleMouseMove);
            updateCursor();

            const handleMouseDown = () => {
                if (cursorImg) cursorImg.classList.add('cursor-click');
            };
            const handleMouseUp = () => {
                if (cursorImg) cursorImg.classList.remove('cursor-click');
            };

            document.addEventListener('mousedown', handleMouseDown);
            document.addEventListener('mouseup', handleMouseUp);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mousedown', handleMouseDown);
                document.removeEventListener('mouseup', handleMouseUp);
                cancelAnimationFrame(animationFrameId);
            };
        }
    }, []);

    // Scroll logic removed (handled in Navbar)

    useEffect(() => {
        // Analog Clock Logic
        const updateAnalogClock = () => {
            const now = new Date();
            // Convert to IST
            const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

            const seconds = istTime.getSeconds();
            const minutes = istTime.getMinutes();
            const hours = istTime.getHours();

            const secDeg = (seconds / 60) * 360;
            const minDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
            const hourDeg = (hours % 12 / 12) * 360 + (minutes / 60) * 30;

            const secHand = document.getElementById('sec-hand');
            const minHand = document.getElementById('min-hand');
            const hourHand = document.getElementById('hour-hand');
            const digitalClock = document.getElementById('digital-clock');

            if (secHand) secHand.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
            if (minHand) minHand.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
            if (hourHand) hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;

            // Update Digital Text for clarity
            const digitalOptions = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true };
            if (digitalClock) digitalClock.innerText = new Intl.DateTimeFormat('en-US', digitalOptions).format(now);
        };

        const intervalId = setInterval(updateAnalogClock, 1000);
        updateAnalogClock();

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
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
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
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
                body, a, button, input, select, textarea, .glass-card {
                    cursor: auto; /* Default to normal cursor */
                }
                
                @media (min-width: 768px) and (pointer: fine) {
                    body, a, button, input, select, textarea, .glass-card {
                        cursor: none !important; /* Hide default cursor only on desktop/mouse */
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
                    0% { filter: drop-shadow(0 0 2px rgba(37, 106, 244, 0.9)) drop-shadow(0 0 4px rgba(37, 106, 244, 0.5)); transform: scale(1); }
                    50% { filter: drop-shadow(0 0 6px rgba(168, 85, 247, 0.9)) drop-shadow(0 0 12px rgba(168, 85, 247, 0.5)); transform: scale(1.05); }
                    100% { filter: drop-shadow(0 0 2px rgba(37, 106, 244, 0.9)) drop-shadow(0 0 4px rgba(37, 106, 244, 0.5)); transform: scale(1); }
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
            `}</style>

            <div className="bg-background-dark font-display text-white min-h-screen relative overflow-x-hidden">
                <Navbar />
                <div id="custom-cursor" className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
                    style={{ transform: 'translate(-100px, -100px)' }}>
                    <img src="https://img.icons8.com/?size=100&id=DzDNJborQlTB&format=png&color=ffffff"
                        className="w-8 h-8 cursor-cyber relative z-10 drop-shadow-[0_0_10px_rgba(37,106,244,0.8)]"
                        alt="custom cursor" />
                </div>
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

                <main className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Get in touch</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">Let's <span
                            className="text-primary">Communicate</span>.</h1>
                        <p className="text-slate-400 text-lg max-w-xl">Currently open to selective freelance projects and technical
                            partnerships for 2024.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 grid-rows-none md:grid-rows-2 gap-6">
                        <div className="md:col-span-4 lg:col-span-3 lg:row-span-2 glass-card rounded-2xl p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Send a message</h2>
                                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label
                                                className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Name</label>
                                            <input
                                                name="user_name"
                                                className="w-full bg-input-bg border-white/5 rounded-xl px-4 py-3 focus:border-primary focus:ring-0 transition-colors text-white"
                                                placeholder="John Doe" type="text" required />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label
                                                className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email</label>
                                            <input
                                                name="user_email"
                                                className="w-full bg-input-bg border-white/5 rounded-xl px-4 py-3 focus:border-primary focus:ring-0 transition-colors text-white placeholder:text-slate-600"
                                                placeholder="john@example.com" type="email" required />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label
                                            className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Subject</label>
                                        <select
                                            name="subject"
                                            className="w-full bg-input-bg border-white/5 rounded-xl px-4 py-3 focus:border-primary focus:ring-0 transition-colors text-white">
                                            <option className="bg-zinc-900" value="Project Inquiry">Project Inquiry</option>
                                            <option className="bg-zinc-900" value="General Discussion">General Discussion</option>
                                            <option className="bg-zinc-900" value="Job Opportunity">Job Opportunity</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label
                                            className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Message</label>
                                        <textarea
                                            name="message"
                                            className="w-full bg-input-bg border-white/5 rounded-xl px-4 py-3 focus:border-primary focus:ring-0 transition-colors text-white placeholder:text-slate-600 resize-none"
                                            placeholder="Tell me about your idea..." rows="4" required></textarea>
                                    </div>
                                    <button
                                        className="w-full bg-primary py-4 rounded-xl font-bold glow-button text-white flex items-center justify-center gap-2 mt-4 transition-all duration-300 hover:bg-[#1a5ce6] hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/40 active:scale-95"
                                        type="submit">
                                        SEND MESSAGE
                                        <img src="https://img.icons8.com/?size=25&id=0prg0S64vdOO&format=png&color=000000" alt="send"
                                            className="material-symbols-outlined text-sm" />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="md:col-span-2 lg:col-span-3 glass-card rounded-2xl p-6 flex flex-col group">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-lg font-bold transition-colors duration-500 group-hover:text-purple-400">Socials</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-4 flex-1">
                                <a className="group relative flex flex-col items-center justify-center gap-3 bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                                    href="https://www.linkedin.com/in/prasad-mahamuni-8ab9a1286/">
                                    <div
                                        className="size-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                                        <svg className="size-7" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                                            </path>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-slate-300 group-hover:text-primary transition-colors">LinkedIn</span>
                                </a>
                                <a className="group relative flex flex-col items-center justify-center gap-3 bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                                    href="https://github.com/sudo-141/">
                                    <div
                                        className="size-14 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                                        <svg className="size-7" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
                                            </path>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-slate-300 group-hover:text-primary transition-colors">GitHub</span>
                                </a>
                            </div>
                        </div>

                        <div
                            className="md:col-span-2 lg:col-span-3 glass-card rounded-2xl p-6 flex flex-col justify-center items-center text-center group">
                            <div className="size-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4 ">
                                <div className="size-4 bg-green-500 rounded-full pulse-green"></div>
                            </div>
                            <h3 className="font-bold text-xl mb-1 transition-colors duration-500 group-hover:text-purple-400">Availability</h3>
                            <p className="text-slate-400 text-sm">Available for work</p>
                        </div>
                    </div>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <a href="mailto:prasadmahamuni2305@gmail.com"
                            className="group block glass-card rounded-2xl p-6 transition-all duration-500 ease-out border border-white/5 
          hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer text-decoration-none">

                            <div className="flex items-center gap-6">
                                <div
                                    className="size-14 shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center 
                    transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-purple-500/20">

                                    <img src="https://img.icons8.com/?size=100&id=nQ4dZIRCI0nW&format=png&color=FFFFFF" alt="mail"
                                        className="w-6 h-6 object-contain transition-transform duration-500 group-hover:scale-110" />
                                </div>

                                <div>
                                    <div
                                        className="text-xs font-bold text-slate-500 uppercase tracking-widest transition-colors duration-500 group-hover:text-purple-400">
                                        Email Me
                                    </div>
                                    <div className="text-xl font-bold break-all text-white">
                                        prasadmahamuni2305@gmail.com
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className="glass-card rounded-2xl p-6 flex items-center gap-6 group">
                            <div className="size-14 shrink-0 rounded-full border-2 border-white/20 relative bg-black/20">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="size-1 rounded-full bg-white z-40"></div>
                                </div>
                                <div id="hour-hand"
                                    className="absolute bottom-1/2 left-1/2 w-0.5 h-3 bg-white origin-bottom -translate-x-1/2 rounded-full transition-transform duration-1000">
                                </div>
                                <div id="min-hand"
                                    className="absolute bottom-1/2 left-1/2 w-0.5 h-5 bg-white/70 origin-bottom -translate-x-1/2 rounded-full transition-transform duration-1000">
                                </div>
                                <div id="sec-hand"
                                    className="absolute bottom-1/2 left-1/2 w-px h-6 bg-purple-500 origin-bottom -translate-x-1/2 z-50">
                                </div>
                            </div>

                            <div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest text-nowrap transition-colors duration-500 group-hover:text-purple-400">India (IST)
                                </div>
                                <div id="digital-clock" className="text-xl font-bold tracking-tight text-white">00:00 AM</div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="py-12 px-6 border-t border-white/5">
                    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-slate-500 text-sm text-center md:text-left">© 2024 Prasad Portfolio. Designed for the web. All Rights Reserved.</p>
                        <div className="flex gap-6 text-slate-500 text-sm">
                            <a className="hover:text-white transition-colors" href="https://www.linkedin.com/in/prasad-mahamuni-8ab9a1286/">LinkedIn</a>
                            <a className="hover:text-white transition-colors" href="https://github.com/sudo-141/">GitHub</a>
                            <a className="hover:text-white transition-colors" href="https://www.instagram.com/its_jetra?igsh=MWkwOGE2eWxxNXVxZg==">Instagram</a>

                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Contact;
