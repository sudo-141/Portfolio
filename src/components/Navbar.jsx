import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [showHeader, setShowHeader] = useState(true);
    const lastScrollY = useRef(0);
    const location = useLocation();

    // Smart Scroll Logic
    useEffect(() => {
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

    // Helper for link styles - Matches original design with active state support
    const getLinkClasses = (path) => {
        const base = "text-sm font-medium hover:text-primary active:text-primary transition-colors";
        return location.pathname === path ? `${base} text-primary` : base;
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
            <nav className="glass bg-white/10 dark:bg-black/20 flex items-center gap-4 md:gap-8 px-4 md:px-8 py-3 rounded-full border border-white/10 relative overflow-x-auto max-w-full scrollbar-hide">
                <div className="flex items-center gap-2 flex-shrink-0">
                    <Link to="/" className="size-6 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                                fill="currentColor"></path>
                        </svg>
                    </Link>
                </div>

                {/* Desktop Menu - Always Visible */}
                <div className="flex items-center gap-4 md:gap-8 flex-shrink-0">
                    <Link className={getLinkClasses("/")} to="/">Home</Link>
                    <Link className={getLinkClasses("/work")} to="/work">Work</Link>
                    <Link className={getLinkClasses("/tech")} to="/tech">Tech</Link>
                    <Link className={getLinkClasses("/contact")} to="/contact">Contact</Link>
                    <Link className={getLinkClasses("/education")} to="/education">Education</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;