import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

const Education = () => {
    // Removed showHeader state (logic moved to Navbar)
    // const [showHeader, setShowHeader] = useState(true);
    // const lastScrollY = useRef(0);

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

    // Removed local Header Scroll Logic (handled in Navbar)
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
            `}</style>

            <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-300">
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

                {/* Main Content Area */}
                <main className="flex flex-1 justify-center pt-32 pb-10 px-4 md:px-10 lg:px-40">
                    <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                        {/* Page Heading */}
                        <div className="flex flex-col gap-3 p-4 mb-8">
                            <h1 className="text-slate-900 dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]">
                                Academic Journey</h1>
                            <p className="text-slate-500 dark:text-[#ae9bbb] text-lg font-normal max-w-2xl">A curated timeline
                                of my educational milestones, specialized certifications, and key academic achievements.</p>
                        </div>

                        {/* Portfolio Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 grid-flow-dense">

                            {/* 1. Primary Education Card (Small) */}
                            <div
                                className="md:col-span-2 glass-card rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group">
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-symbols-outlined text-9xl">school</span>
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 shadow-lg">
                                            <img alt="University Logo" className="w-full h-full object-contain"
                                                data-alt="Official university crest logo"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8x5cFI8Jcl80ZYKWZyGoXD60PKhvc_nmww&s" />
                                        </div>
                                        <div>
                                            <p className="text-primary font-bold tracking-widest uppercase text-xs">Primary
                                                Education</p>
                                            <h3 className="text-2xl font-black dark:text-white">Creative Science Academy, Baramati.</h3>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">SSC</h4>
                                            <p className="text-slate-500 dark:text-[#ae9bbb]">Completed Secondary Education with a focus
                                                on Mathematics and Science.</p>
                                        </div>
                                        <div className="flex flex-wrap gap-4 text-sm font-medium">
                                            <span className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full">
                                                <span className="material-symbols-outlined text-sm">calendar_today</span> 2019 - 2021
                                            </span>
                                            <span className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full">
                                                <span className="material-symbols-outlined text-sm">grade</span> Marks Obtained 85%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Secondary Education Card (Small) */}
                            <div
                                className="md:col-span-2 glass-card rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group">
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-symbols-outlined text-9xl">school</span>
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div
                                            className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 shadow-lg shrink-0">
                                            <img alt="University Logo" className="w-full h-full object-contain"
                                                data-alt="Official university crest logo"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABd1BMVEX////89/X79fT8+PX99/b79fL8+Pf59fT99vX9+fb79PT69vL58/H99fP79vf++fniVSn84dP4yr7tZTLtXi7oVSfy8eviVSr0dUP85t75k13rWyjxcjz7t436vqH4uqnzoorwajz3qoDz9Of92sCTvIzB2b33rYiMtILs7tz18en5g1DqXzL5i1Xh6Nj0k2RwqGKsy530lnz0lHHyfVX4oXbYUCfvc0fB2LH61sz71cP8z7P7wZ375dX1n4H3h1r9yKv+w5r7s5juhV//zbXqaUDyj3Lqelj0mHP6pnb2wrf0tZ7yoYH50s/907Orx4XW5cHE2arq8dnU5NKBt3Wcxoa41JmozaGKu3HM3rRvplqRw4TD362xz62bvYB0pm7J3clknVZXi03N1rZ+pYGavpXF2cpsnmJinU/vgmbqqZzSXzTucVKQs3bfv5vpupG0wpTS0qzqlF6okVV/pGLAdDrWlGChZTWxXzOMfleqgUjbZjSBfkrXd4Q1AAAQQUlEQVRogeVaCXfaWJbmoQ3QwqKHkCw2GbPLAhkwS4xxgbExTlJgwEtSYNMelytuU1Xdk5npmZ4fP1c4lUqMXOV0p87pc+YeJ3GMpO/u97tPdjj+1cTfaPj98OX/AzHqLc2SsCzLefjz4g8BCWha2ZKqJbpv548B0QtNxRJwmH9X3PtqD95vbf4Koq2ztOClaZ5lhPgnIPV/Cs9f0TD+5leQCEsitxu5EE1/ClIS1zb+YYy2jLsd/aMpAXGdJRkKgbCuuP4RJKrpanj9H4PY7wR9rRfKlhj58IN+OEIJAo2QgCjnlvgxu8piOt5VN/fsH/Nb4u+JuBX15wSlE/7gi5gYySEaETSDkOcAv/5w5a5ayAmBQ/zlPmtXsZxukiRpPe7oAyyOsE6EnDRyI+cW/mBgQJM3kNOpgDFy5DeeuCLRFg5HNppe0kl4vQEtvNOI9lqyqq7nGIZw0wTBcFtqeG3d8lhLXM8hnkdkvaSrcvTZGHUZtzYokvd6SYRoMCUcxqqmVXsvWPAUciKWY/rlroixXCjo8gZN8ZTTSfOxFtaenwBxfMTS4Co3Iggn3dex1ko32o1sgkokkJRgWIbyKPXjl4e66tMjOZcbiodBbq+yK4rPDsyrbvi1myTdXtCaYbm7dkNha9+e1L7N1gZ06jTHSMPhSYJmlNhueQ286nZ7GYanXJ6XYuXZljjieiFHIsLtdhMkkTjJmsPcaHyaKg7NgTQ7z9LG+HwCWAzjUfwUBAm8SnsoR0wPf0mG3Ys7UHUkpBHhTU1OkudZ4ezcvD0/TaTGxQt6NDZT5ycMK2VzNAMQ8OX2epVWPv0FGBCVtdxSQeNskCoOpm+uaePtea14apyaxYmUOh+cvRk4hdHkNAtxg2xgILXb4aMvwbBMee2mCKb2XdJMjCe1y5lET2dS5jp1ypqT794WU5fnJxx7cz6ZJGgvTbCAUc/nv3DGbMlrTQE8lWUTibPiKPnmgpCyXEKScqyUGJmz2WLAolGxWJxkjVGCINyIP8DPyd944WPY7rR8xBh5p++zAitdzU8vBlmWIRmBcQoeQRCYXCJHsUamOKwNzs7PT7MU64jl88+o+EDXV/2gS1zHFSVlJqZ/+jk3Mo1UlvEwDA3aKg/CMwxJIWMyyXlT80l2dJpw0lAk4b1fntUvPJECB6Huti//eokhpq9r12eno3+7XZhZt9clMJzSOH7ZaZXz1Wp+s5Deb+SQAL5DZ+cn3tr5iZQDFJx/QKn3RHHTNpn70Olih75w4UXbJ+4YmR/mxT+ZidFVgmQJr7K/WxZVVRU1GbiEbn1TSEOP5rjUJJE6nyRqpzma38KiNfn3qqqoq7YBKmMYF9BMsaiJkSxjJM1pZnHiEhBDK9GyGPTJnZfH+w1/vR7ox3tlDfvyRxsskmrJ4niUggRAJL/lk3f2WqLYih5vFmxMiWsFxUkJrvoBKFF7O0BGLStJEgUQ+wUfljvRz+lW/fgwFAxXGixjXBmp4sIgKBetlLAo4nJUIfheuLAa9Wr4tZenKA6aabppZOZm7myW8yKGb5R8uLresLE9VhKD+R1FoGvFRdaLjAFHKGVVTisIUUJf+zUNfpF3MCwQ4XJSLCWMajnpZj6rZZGL5uIaFitNO/86rBGNcafBG5malPBO35x4Ub3tJ6CBQ+/fxY9Nien5psA5aRpJLHOVnF1JN+9PaAZiJIprr20BPsBUg1qUksy3A2mySHihUdIkTSKKEup5sf35tYfiHrQfZLUrZpT4fj7P1LJOVlAOVRiRv4EBsemEtLQijYzpPJkyc9DGSK+ThZ5JH4v5z8Jo9UPBaXVTwju6nX2XgvbnpZh6B1dXHLsiuyJezwnT+aVZu8o5rY4MTwIiUK+qn06XQBV/4/bwDAINvMb09s1wNGI5WukE5VUzGiskuK1D9htmgiWkYdZj8TKggCRPH+NPb4/79NYLinTCFBJSw8T3lz+cIhh1PWxH3durwy+uh/cIa4QRZyYL80UAEIi+cog/bS5b3VB4vckAimTWEl4jeeJEHrjVrnWXbCZsHOiEwDLZ6bh4AuyPJsFhXrpexvKnedk/1HH+dY4UpgOvIF0nOIoOaKLtdlBdLTKogOBm0zBvbzOZoRtZvIym/WlZ1R61yeNuMBxpMlCBpGQmOJZ7Zz8e+rodSL0Kwb+5uZKuagQDeezlo3lVLK2U8KstXfwGXc0XZtJkOc+xvmaH4YgH83Y5HQOHsZxAstkBgWhqv4Bxa9/u/nfqDivdFOezBEUo909sOfc+bDubtsRCkzNS5tv3WQQLADQw29vr3XyT4ZjRSPJQTMzWK5bGTzTxuhbeMBbF+eXlNaLrXZvcX8rd9lHOmoAkxTKQfd/YXnSAQ099oqYTSXNsziD9lfJTBOzdn/dS5sCwpjdQ0037i+51/Qk/BqD91YaDRG2AYHypT8z7+/DGFOjH+QXiPE9dFNNDuvhEwyyroKSRYElotLGgPV/tgyaSdDUdX5BIqYbtH3Sg69vVDXtT4rANGW+LswHlpAN667PP2p1Sr9Sr7B7io8TVdY4xTxAdE+3z91U3tO0rNOwmqxV62Q9c1nx7QrtBy8868H0Iqw8Subot3iQXWQ5WHHvCeRcKhXAlKtsfFLzDPy5GCLof4eZhkdw/3tvf328sG8u9lo6128fteNo/rU2Li2sJcits7/fDkI71yPETKmzhn8wcg2pD4OolFYtBEQhOeBnc+3ATdhiBJmj6ZpGZjy8oot61z62Yvr0dEnfiQXsd4rhyPfBItWuWIgIlkF6nU8bLDLiXm04KFjKW4a4ymcv5KU/HVsbzgxwElyAHPvss7ou9nGQJC0TCyfM8xfOxh8HV3Wx6AIIiCGA3CWl0zdJ32NYf9S6ExBd+0QnaFz30zp/Hs8XCZGH6OUk3DRtYbGnJq+5aDn4GexVBjzKzhABzIf5EewpaIN1o1xfM2/GXgNb6eZa5XJxKLgpWQWSttR8KBkBI0tpjEHMzuxwaJ9Zxg6077oOh7e2guK5h/YlRk/+LkbowLmCKI9rpJJHL8RGkaW3NboJjzsa38zffEp4DW5C+7guFtkN6Af4N2vkT8mVxWyyCu7zW5BJAc3CX5dlXWqEJNAmCwjA340zyrMYCiJ2icR3ECgqA+Gwnl7aWySQzlxnWbXEJ0rKnvzya6etHOR5xHEsQjCExjDHMcVvYDuQAzABbfD5fUMd2rbyuFQYJlpEMayF2gh0uko6rD5as5Sje5QGC6jWuU5lbWK5sA/+qq0NP0S2MoM9nVykB7a/mcJAdZZ0U4QYuAaYI8WVMAvpmk3QRgsUvR7c/FM1p1j6F+7AsbG+Dp0I+dTuk2mxSAQ06ZG0MvBARTtJioy7ogumlu/Lr0b30TiS6kZPOMklzeELfBW1cHg9iH3gLEswHYHadJSb+BJ4YD3MexILOtCDQ3lh4ZwniU1Xd6o+bTQYBm58MCBhZq3UAVWKBbINYFtnQiTj+9zfzxXWWtI6mrPPjRsPfe6jbeGl3t9Trdbria0JKzmcDM6tUbc5hDiwDfgHx+WwiXwj/OEqZswHpdPJbuiyHNVHWP59+B3jHPbp9PxxcZD3vbAbjO5+VuksJ2YLU5f+YTQ3JSFAUMAldbsEKW350SA3JxkrXsK6PzNxdqPX4EY5DS/9g0AIAGBuQPv7P5G1xbOYoBoLwy+efL4F9vdVEkvH9TfHN4FV3lW28WybWslZEqyRXLtjFPxmQXEMSNpS4+sSZlHWcYlzOx+Ygy71b7bNbQQwx2d6GRIbgrLbIeve/3heHlJEF2g5s5YlT9gM1wnJTgPCwibvQykPuQj5oXBB1bPlrtXnF//bf08V8SHoo6jd4Vzz41wTHXBVnJ6nT5ruVoq93fVZqLSOv+8QVhlf9249eKTNjnQwvxIKrMV1KoIyhUoRUMTl+82YQwysT+MBneSsElkBIVk41SuJfcx7v1IReywBtaz++e6lnSQuK6RxLjsbF4myUUA7Fx1Gp329bQYHob2+vGHKMxRdOozY0oKM7lTIurL7Jqe9WsVjYh62EY24W1yxJMXehlaES031Wq4eKDK4YUlZ7FJkwrz0Uiwg+rqutx5HfrYaCcrpJIwJmWiJBswzFKQda/rE2MFEsh0GRPMYvqa0mA8yBA06CXIiPlTEufLaf3AV1reKneOATBEF4PBzhRrBfF1YcBqWAdYhK+LGz2ji8QfMc5XJSDAF14hSUl90g3v3kkkC1utYkQQWLssCo5yjY5ykmIIsr/bxd1n1487EnYrBeQsApJ4eWJ+BOBOY0OhpufeKLY23T4l4IsRZpYQkEY42jyDtsM4YDx9HHFbQvh9dz4CuC55ant4QLdKQEpaNrn4auKkZYUIQAU5HFXAiGpTjCWrKf8XospuF13km4eMKahRYKCc2ep+ua+FnFwlrZpCnKTSAvSyEYlMSSU1ooR0+dEP3qBlxRgC8iioAdzYJBJAfP8Lbxo8zp5NfZh1NkxHhcEByLWnC8Zws/tTL9Im0R9xQPRyHGwgEQCggXx1HeelV8dGtMDm8goK5ALnkF7qBISAROgAs3f+f9aOBePGrCjTzoxbhIwQWRh/DSfE9caS33+IjirGjtdzb9jJUqHEfXy+qa3ZHd5yhVsZIjXWCGxyXwCjAfqBPkbWirhyYxWd7gXJ5ARw+CizkOXMVAN2s94y1CvytGci4IIu9R2vkdv8fFUy6lYzdRdsXNprILDazcVWHthzti8M3vQ1gomhgB06GYd/Wg2nqhuDweqzxtrJblUllV83swOIJrTcHT1vFz37jEMKDAPhLXRdh6xNYGr5TtE+ZAC6nyssTvdLXQePn3P//PX0Yn8N/rAfxVczhGDuMpFKtseb6tqz1wiR7U1ks4b2+0rvU+ZBI0wi7++/9mZuZsmDIXk2FyNnM4Mubs2nE2mVx8Nxhc1GbDwaRmXtzMZknzAoolHElrD2GA5qjq9hsOfPhrIm3pITF9UyyamdpofFkc3szBJHOaGTi+X4xPa6eSOZlkzPejs2+TpmmO30O5hEX9Y6jjGpaf8ZsB8XLEMVosalOzNlmMzcs5WLIYnp07HJfF2XRmvB3PF6PkDBBqpjmbWncEP2mn/ZLtMdRTkho4zNSNWUteOJJD03Q4prWaA/5/Y4INk5mZMZMZ88F624n7/1TqgUAs2m63X7bb6Wi08ZV/4cPfTvd6paqsVeV8udyqlsvVfDWf3yyUeunnv07+balXw/l8q9cr9CqVQqWy07BeaQXW99KlUqeqtVqFrxHumLzX3lHqhaP9uBzt7EUjVMMvBDb3K0d7L17st9ulJ074vkj6a8345kajtdYMFJTSRmxT8SsothZt5cNgWaTZ+KIX/U+BFJrH+Z2NaDkSaNVbe+09j7/pja0pu2KlIG6ur38VkFi+Gc9HK0fRvf3KTqGyHolUInvtSDO97t/NF3Yr+/ZHfF8K0jgIr7XyeTksazKsaHJZFsNWdkGYoq1o7GvE5FiURVEu99qxfr1ef/hZIBaPHxx2xbAcjvTsW/qXSaDaO+7bl14/1u7IqvwVQH5H6sfHfzzIv478H8fVniH9sw+rAAAAAElFTkSuQmCC" />
                                        </div>
                                        <div>
                                            <p className="text-primary font-bold tracking-widest uppercase text-xs">Higher Education </p>
                                            <h3 className="text-2xl font-black dark:text-white">Pimpri Chinchwad Educations Trust,
                                                Pimpri Chinchwad Polytechnic, Nigdi, Pune.</h3>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">Diploma in Computer
                                                Engineering</h4>
                                            <p className="text-slate-500 dark:text-[#ae9bbb]">Successfully completed a 3-year Diploma in
                                                Computer Engineering</p>
                                        </div>
                                        <div className="flex flex-wrap gap-4 text-sm font-medium">
                                            <span className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full">
                                                <span className="material-symbols-outlined text-sm">calendar_today</span> 2021 - 2024
                                            </span>
                                            <span className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full">
                                                <span className="material-symbols-outlined text-sm">grade</span> Aggregate Marks 86.91%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Higher Education Card (Small) */}
                            <div
                                className="md:col-span-2 glass-card rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group">
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-symbols-outlined text-9xl">school</span>
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 shadow-lg">
                                            <img alt="University Logo" className="w-full h-full object-contain"
                                                data-alt="Official university crest logo"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2Vj1LeBUIw7U6TReXL-MtEQkQXX2pMKQoQ&s" />
                                        </div>
                                        <div>
                                            <p className="text-primary font-bold tracking-widest uppercase text-xs">Higher Secondary Education</p>
                                            <h3 className="text-2xl font-black dark:text-white">Indira College of Engineering <br />&
                                                Management, Pune.</h3>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">Currently Pursuing a
                                                Bachelor Degree in Engineering <br /> B.E Computer Engineering</h4>
                                            <p className="text-slate-500 dark:text-[#ae9bbb]">Trying to Gain More Knowledge by Improving
                                                the Knowledge and Honing My Skills</p>
                                        </div>
                                        <div className="flex flex-wrap gap-4 text-sm font-medium">
                                            <span className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full">
                                                <span className="material-symbols-outlined text-sm">calendar_today</span> 2024 - 2027
                                            </span>
                                            <span className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full">
                                                <span className="material-symbols-outlined text-sm">grade</span> Current GPA 7.50%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Decorative 3D Tile (Small) */}
                            <div
                                className="md:col-span-1 md:row-span-1 glass-card rounded-xl p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
                                <div
                                    className="w-24 h-24 mb-4 flex items-center justify-center bg-primary/20 rounded-full shadow-[0_0_30px_rgba(158,31,249,0.3)] border border-primary/40 pulse-neon mb-2">
                                    <img src="https://img.icons8.com/?size=100&id=wogrNmTvt9qn&format=png&color=000000" alt="history_edu" className="w-14 h-14 object-contain" />
                                </div>
                                <h4 className="text-lg font-bold dark:text-white">Lifelong Learning</h4>
                                <p className="text-xs text-[#ae9bbb] mt-2">Continuously upgrading my knowledge and skills.
                                </p>
                            </div>
                            {/* 3. Relevant Coursework Tile (Medium) */}
                            <div className="md:col-span-1 md:row-span-2 glass-card rounded-xl p-6 flex flex-col">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="material-symbols-outlined text-primary">menu_book</span>
                                    <h4 className="text-lg font-bold dark:text-white">Relevant Courses</h4>
                                </div>
                                <div className="grid grid-cols-1 gap-3 overflow-y-auto pr-2 custom-scrollbar">
                                    <div
                                        className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-[#4a3a55] bg-slate-50 dark:bg-[#221b27]">
                                        <span className="text-sm font-medium">Python</span>
                                    </div>
                                    <div
                                        className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-[#4a3a55] bg-slate-50 dark:bg-[#221b27]">
                                        <span className="text-sm font-medium">HTML</span>
                                    </div>
                                    <div
                                        className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-[#4a3a55] bg-slate-50 dark:bg-[#221b27]">
                                        <span className="text-sm font-medium">JavaScript</span>
                                    </div>
                                    <div
                                        className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-[#4a3a55] bg-slate-50 dark:bg-[#221b27]">
                                        <span className="text-sm font-medium">React</span>
                                        <span className="text-xs font-bold text-primary">Currently Learning</span>
                                    </div>
                                    <div
                                        className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-[#4a3a55] bg-slate-50 dark:bg-[#221b27]">
                                        <span className="text-sm font-medium">MongoDB</span>
                                    </div>
                                    <div
                                        className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-[#4a3a55] bg-slate-50 dark:bg-[#221b27]">
                                        <span className="text-sm font-medium">Prompt Engineering</span>
                                    </div>
                                    <div
                                        className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-[#4a3a55] bg-slate-50 dark:bg-[#221b27]">
                                        <span className="text-sm font-medium">Node.js</span>
                                        <span className="text-xs font-bold text-primary">Currently Learning</span>
                                    </div>
                                    <div
                                        className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-[#4a3a55] bg-slate-50 dark:bg-[#221b27]">
                                        <span className="text-sm font-medium">Express.js</span>
                                        <span className="text-xs font-bold text-primary">Currently Learning</span>
                                    </div>
                                </div>
                            </div>
                            {/* 4. Certifications Card (Medium) */}
                            <div
                                className="md:col-span-2 md:row-span-2 glass-card rounded-xl p-8 flex flex-col justify-between group overflow-hidden">
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                                            <h4 className="text-2xl font-bold dark:text-white">Professional Certifications</h4>
                                        </div>
                                        <span className="text-sm text-[#ae9bbb]">4 Total Verified</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* Certification Badge 1 */}
                                        <div
                                            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1 hover:border-primary/50">
                                            <div
                                                className="w-12 h-12 flex-shrink-0 bg-white rounded-md flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                                <img alt="Coursera" data-alt="Coursera professional learning logo"
                                                    src="https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/learning-partners/greatlearning-brand.svg" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold">HTML Certification</p>
                                                <p className="text-xs text-[#ae9bbb]">Great Learning • 2023</p>
                                            </div>
                                        </div>
                                        {/* Certification Badge 2 */}
                                        <div
                                            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1 hover:border-primary/50">
                                            <div
                                                className="w-12 h-12 flex-shrink-0 bg-white rounded-md flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                                <img alt="AWS" data-alt="Amazon Web Services cloud logo"
                                                    src="https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/learning-partners/greatlearning-brand.svg" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold">CSS Certification</p>
                                                <p className="text-xs text-[#ae9bbb]">Great Learning • 2023</p>
                                            </div>
                                        </div>
                                        {/* Certification Badge 3 */}
                                        <div
                                            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1 hover:border-primary/50">
                                            <div
                                                className="w-12 h-12 flex-shrink-0 bg-white rounded-md flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                                <img alt="Meta" data-alt="Meta technology company logo"
                                                    src="https://www.acmegrade.com/images/logo.svg" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold">Machine Learning</p>
                                                <p className="text-xs text-[#ae9bbb]">AcmeGrade • 2023</p>
                                            </div>
                                        </div>
                                        {/* Certification Badge 4 */}
                                        <div
                                            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1 hover:border-primary/50">
                                            <div
                                                className="w-12 h-12 flex-shrink-0 bg-white rounded-md flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                                <img alt="Udemy" data-alt="Udemy online course platform logo"
                                                    src="https://maincrafts.com/assets/Main_Craft_Technology-mj1y2jO3.png" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold">MERN Stack Certification</p>
                                                <p className="text-xs text-[#ae9bbb]">MainCrafts Technology • 2026</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 5. CV Card */}
                            <a href="https://github.com/sudo-141/Resume/blob/main/Prasad%20CV.pdf"
                                className="md:col-span-1 md:row-span-2 glass-card rounded-xl p-8 flex flex-col items-center justify-center text-center group relative overflow-hidden transition-all hover:-translate-y-1">
                                <div
                                    className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity">
                                </div>

                                <div
                                    className="w-20 h-20 mb-6 flex items-center justify-center bg-primary/10 rounded-2xl group-hover:rotate-6 transition-transform duration-300 border border-primary/20">
                                    <img src="https://img.icons8.com/?size=100&id=23883&format=png&color=000000" alt="Resume" className="w-8 h-8" />

                                </div>

                                <h3 className="text-2xl font-bold dark:text-white mb-2">Read my CV</h3>
                                <p className="text-sm text-slate-500 dark:text-[#ae9bbb] mb-6">View detailed professional experience and
                                    skills.</p>

                                <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                                    <span>View Resume</span>
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </main >

                {/* Footer Section */}
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

export default Education;
