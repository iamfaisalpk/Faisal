"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";

const PERSON = {
    name: "Mohammed Faisal",
    role: "Full Stack Developer / App Developer",
    experience: "1 year experience in Full-Stack & App Development",
    phone: "+91 7994010513",
    email: "iamfaizy123@gmail.com",
};

const HERO = {
    tagline: "I build scalable web & mobile apps — MERN + Next.js + Cross-platform mobile",
    ctaText: "Hire Me Now",
};

export default function Hero() {
    const nameRef = useRef<HTMLSpanElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (!nameRef.current) return;

        let cleanup: (() => void) | null = null;

        import('animejs').then((animeModule: { default: typeof import("animejs") }) => {
            const anime = animeModule.default || animeModule;

            const text = PERSON.name;
            if (!nameRef.current) return;

            nameRef.current.innerHTML = text
                .split("")
                .map((char) => `<span style="display:inline-block; transform-origin: center;">${char === " " ? "&nbsp;" : char}</span>`)
                .join("");

            const letters = nameRef.current.querySelectorAll("span");

            anime({
                targets: letters,
                translateY: ['-44px', 0],
                rotate: ['-360deg', 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 600,
                delay: anime.stagger(50),
            });

            const handleMouseEnter = () => {
                anime({
                    targets: letters,
                    translateY: [
                        { value: '-44px', duration: 600, easing: 'easeOutExpo' },
                        { value: 0, duration: 800, delay: 100, easing: 'easeOutBounce' }
                    ],
                    rotate: {
                        value: '-360deg',
                        duration: 600,
                        easing: 'easeInOutCirc'
                    },
                    delay: anime.stagger(50),
                });
            };

            const nameElement = nameRef.current;
            if (nameElement) {
                nameElement.addEventListener('mouseenter', handleMouseEnter);

                cleanup = () => {
                    nameElement.removeEventListener('mouseenter', handleMouseEnter);
                };
            }
        }).catch((err) => {
            console.error('Failed to load anime.js:', err);
        });

        return () => {
            if (cleanup) cleanup();
        };
    }, []);

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.4 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" as const },
        },
    };

    const float = {
        y: [0, -15, 0],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
        >
            {/* Floating Orbs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" as const }}
                    className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-linear-to-r from-blue-400/30 to-purple-400/30 blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" as const }}
                    className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-linear-to-r from-purple-400/30 to-pink-400/30 blur-3xl"
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={container}
                    className="space-y-10"
                >
                    <motion.p variants={item} className="text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-300">
                        Hi, I&apos;m
                    </motion.p>

                    <motion.h1
                        variants={item}
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight"
                    >
                        <span
                            ref={nameRef}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            className="block bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text  cursor-pointer transition-all duration-300"
                            style={{
                                filter: isHovering ? 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.5))' : 'none'
                            }}
                        >
                            {PERSON.name}
                        </span>
                    </motion.h1>

                    <motion.div variants={item} className="flex items-center justify-center gap-8">
                        <div className="h-px w-24 bg-linear-to-r from-transparent to-blue-500 dark:to-blue-400" />
                        <p className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
                            {PERSON.role}
                        </p>
                        <div className="h-px w-24 bg-linear-to-l from-transparent to-blue-500 dark:to-blue-400" />
                    </motion.div>

                    <motion.p variants={item} className="text-sm font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400">
                        {PERSON.experience}
                    </motion.p>

                    <motion.p variants={item} className="mx-auto max-w-4xl text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                        {HERO.tagline}
                    </motion.p>

                    <motion.div variants={item} className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="#contact"
                                className="group btn-primary inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
                            >
                                <Mail className="w-6 h-6" />
                                {HERO.ctaText}
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="#projects" className="btn-secondary inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold rounded-2xl">
                                View Projects <Sparkles className="w-6 h-6" />
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <a
                                href="/resume.pdf"
                                download
                                className="btn-outline inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold rounded-2xl"
                            >
                                <Download className="w-6 h-6" />
                                Download CV
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={item} className="flex flex-wrap justify-center gap-8 pt-8 text-gray-600 dark:text-gray-400">
                        <a href={`mailto:${PERSON.email}`} className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition">
                            <Mail className="w-5 h-5" /> {PERSON.email}
                        </a>
                        <span className="hidden sm:block">•</span>
                        <a href={`tel:${PERSON.phone}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                            {PERSON.phone}
                        </a>
                    </motion.div>

                    <motion.div variants={item} animate={float} className="pt-16">
                        <p className="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">Scroll to explore</p>
                        <div className="mx-auto w-8 h-16 rounded-full border-2 border-gray-400 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors flex justify-center">
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
                                className="w-2 h-5 mt-2 bg-linear-to-b from-blue-600 to-purple-600 rounded-full"
                            />
                        </div>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div variants={item} className="pt-8">
                        <p className="text-xs text-gray-500 dark:text-gray-500 mb-6 uppercase tracking-wider font-semibold">Tech Stack</p>
                        <div className="flex items-center justify-center gap-4 flex-wrap max-w-4xl mx-auto">
                            {["React", "Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "JavaScript", "React Native"].map((tech) => (
                                <motion.span
                                    key={tech}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="px-5 py-2.5 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-xl text-sm font-semibold text-gray-800 dark:text-gray-200 hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-sm hover:shadow-md"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg className="w-full h-24 sm:h-32 text-white dark:text-neutral-950" viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path d="M0,50 C320,100 420,0 720,50 C1020,100 1120,0 1440,50 L1440,120 L0,120 Z" fill="currentColor" />
                </svg>
            </div>
        </section>
    );
}