"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SOCIALS, PERSON } from "@/lib/data";
import { Mail, MapPin, ArrowUp } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-gray-50 dark:bg-neutral-950 overflow-hidden border-t border-gray-200 dark:border-neutral-800">
            {/* Animated background elements - same as before */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 dark:bg-blue-600 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 dark:bg-purple-600 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
                >
                    {/* Brand Section - 100% same */}
                    <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="inline-block group">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-3 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                                {PERSON.name}
                            </h3>
                        </Link>
                        <p className="font-medium mb-2 text-gray-800 dark:text-gray-200">{PERSON.role}</p>
                        <p className="text-sm leading-relaxed max-w-xs text-gray-600 dark:text-gray-400">
                            Building digital experiences that make a difference. Let&apos;s create something amazing together.
                        </p>

                        <div className="mt-6 space-y-3">
                            {PERSON.email && (
                                <a
                                    href={`mailto:${PERSON.email}`}
                                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors group"
                                >
                                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    <span>{PERSON.email}</span>
                                </a>
                            )}
                            {PERSON.location && (
                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                    <MapPin className="w-4 h-4" />
                                    <span>{PERSON.location}</span>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Quick Links - same */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold mb-6 relative inline-block text-gray-900 dark:text-white">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-linear-to-r from-blue-400 to-purple-400 rounded-full"></span>
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/#about", label: "About" },
                                { href: "/#skills", label: "Skills" },
                                { href: "/#projects", label: "Projects" },
                                { href: "/#contact", label: "Contact" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:translate-x-1 inline-block transition-all duration-300 group"
                                    >
                                        <span className="relative">
                                            {link.label}
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links - same */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold mb-6 relative inline-block text-gray-900 dark:text-white">
                            Connect
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-linear-to-r from-blue-400 to-purple-400 rounded-full"></span>
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {Object.entries(SOCIALS).map(([platform, url]) => (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                                >
                                    <span className="capitalize">{platform}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom bar - same animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="border-t border-gray-200 dark:border-neutral-800 mt-12 pt-8"
                >
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                            © {new Date().getFullYear()} {PERSON.name}. A digital experience handcrafted by <span className="underline decoration-blue-500/50 underline-offset-4">Faisal.Faizy</span>
                        </p>


                        <button
                            onClick={scrollToTop}
                            className="flex gap-2 cursor-pointer px-4 py-2 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                            aria-label="Scroll to top"
                        >
                            Back to Top
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform " />
                        </button>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;