
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Briefcase } from "lucide-react";

const HERO = {
    logoText: "M.Faisal",
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState("light");
    const [activeSection, setActiveSection] = useState("hero");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
            const current = sections.find((section) => {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    return rect.top <= 120 && rect.bottom >= 120;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (section: string) => {
        setIsOpen(false);
        setActiveSection(section);
    };

    const navItems = ["hero", "about", "skills", "projects", "experience", "contact"];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 navbar transition-all duration-500 ${scrolled ? "shadow-2xl backdrop-blur-2xl" : "backdrop-blur-lg"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href="#hero"
                            onClick={() => handleNavClick("hero")}
                            className="text-2xl md:text-3xl font-black bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600 bg-clip-text text-transparent drop-shadow-md"
                        >
                            {HERO.logoText}
                        </Link>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navItems.map((section) => (
                            <motion.div key={section} className="relative">
                                <Link
                                    href={`#${section}`}
                                    onClick={() => handleNavClick(section)}
                                    className="relative px-6 py-3 rounded-2xl text-sm font-semibold capitalize transition-all duration-300"
                                >
                                    {activeSection === section && (
                                        <motion.div
                                            layoutId="activePill"
                                            className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 rounded-2xl shadow-lg"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span
                                        className={
                                            activeSection === section
                                                ? "relative z-10 text-white"
                                                : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                                        }
                                    >
                                        {section === "hero" ? "Home" : section}
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className="p-3 rounded-2xl cursor-pointer bg-gray-100/80 dark:bg-neutral-800/80 backdrop-blur-md hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all shadow-md"
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? <Moon className="w-5 h-5 text-gray-700" /> : <Sun className="w-5 h-5 text-yellow-400" />}
                        </motion.button>

                        {/* Hire Me Button */}
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="#contact"
                                onClick={() => handleNavClick("contact")}
                                className="px-7 py-3 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl hover:shadow-purple-500/40 transition-all"
                            >
                                <Briefcase className="w-5 h-5" />
                                <span>Hire Me</span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-3">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className="p-3 rounded-xl bg-gray-100/80 dark:bg-neutral-800/80 backdrop-blur-md"
                        >
                            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-yellow-400" />}
                        </motion.button>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleMenu}
                            className="p-3 rounded-xl bg-gray-100/80 dark:bg-neutral-800/80 backdrop-blur-md"
                        >
                            {isOpen ? <X className="w-6 h-6 text-gray-700 dark:text-gray-300" /> : <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden border-t border-gray-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl"
                    >
                        <div className="px-6 py-8 space-y-4">
                            {navItems.map((section) => (
                                <Link
                                    key={section}
                                    href={`#${section}`}
                                    onClick={() => handleNavClick(section)}
                                    className={`block px-6 py-4 rounded-2xl text-lg font-semibold capitalize transition-all ${activeSection === section
                                        ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
                                        }`}
                                >
                                    {section === "hero" ? "Home" : section}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={() => handleNavClick("contact")}
                                className="block text-center px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl font-bold shadow-xl"
                            >
                                <div className="flex items-center justify-center gap-3">
                                    <Briefcase className="w-5 h-5" />
                                    <span>Hire Me</span>
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;