"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Code, Sparkles, Award, Coffee, Github, Linkedin, Mail } from "lucide-react";

export const PERSON = {
    name: "Mohammed Faisal",
    role: "Full Stack Developer / App Developer",
    experience: "1 year experience in Full-Stack & App Development",
    // location: "Dubai, UAE (Open to relocation / remote)",
    phone: "+91 7994010513",
    email: "iamfaizy123@gmail.com",
};

const SOCIALS = {
    github: "https://github.com/iamfaisalpk",
    linkedin: "https://www.linkedin.com/in/mohammed-faisal-a779bb2b6/",
    instagram: "https://www.instagram.com/iam._faisal",
};

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    };

    const stats = [
        { icon: Code, label: "Projects Built", value: "3+" },
        { icon: Coffee, label: "Coffee Consumed", value: "∞" },
        { icon: Award, label: "Years Experience", value: "1+" }
    ];

    const socialIcons = {
        github: Github,
        linkedin: Linkedin,
        email: Mail
    };

    return (
        <section 
            id="about" 
            className="relative py-20 md:py-32 overflow-hidden"
        >

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 dark:bg-blue-400 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 dark:bg-indigo-400/10 rounded-full blur-3xl"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >


                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                Get to know me
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                            About Me
                        </h2>
                        <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        
                        {/* LEFT SIDE - Content */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            {/* Intro */}
                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                    Hi! I&apos;m{" "}
                                    <span className="bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                                        {PERSON.name}
                                    </span>
                                </h3>
                                
                                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                                    <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    <span className="text-lg font-semibold">{PERSON.role}</span>
                                </div>

                                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    <span>Kerala, India</span>
                                </div>
                            </div>


                            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                                <p>
                                    I&apos;m a dedicated and passionate developer with hands-on experience 
                                    building <span className="font-semibold text-gray-900 dark:text-white">real-world applications</span>. 
                                    I focus on crafting clean, scalable, and modern digital solutions.
                                </p>

                                <p>
                                    I&apos;ve worked on multiple production-level projects including{" "}
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        real-time chat applications
                                    </span>,{" "}
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        AI-powered learning systems
                                    </span>, and complete MERN stack platforms. 
                                    I enjoy turning complex problems into simple, fast, and intuitive experiences.
                                </p>

                                <p>
                                    My expertise includes full-stack development using the{" "}
                                    <span className="font-semibold text-gray-900 dark:text-white">MERN stack</span>,{" "}
                                    <span className="font-semibold text-gray-900 dark:text-white">Next.js</span>, 
                                    REST APIs, authentication systems, and responsive UI with modern tools 
                                    like Tailwind, Cloudinary, and Socket.IO.
                                </p>
                            </div>


                            <div className="grid grid-cols-3 gap-4 pt-6">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="text-center p-4 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-blue-100 dark:border-gray-700"
                                    >
                                        <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>


                            <div className="flex flex-wrap gap-4 pt-6">
                                {Object.entries(SOCIALS).map(([key, value]) => {
                                    const Icon = socialIcons[key as keyof typeof socialIcons];
                                    return (
                                        <motion.a
                                            key={key}
                                            href={value}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center space-x-2 px-5 py-3 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                                        >
                                            {Icon && <Icon className="w-5 h-5" />}
                                            <span className="font-medium capitalize">{key}</span>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>


                        <motion.div 
                            variants={imageVariants}
                            className="relative"
                        >
                            <div className="relative group">

                                <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-indigo-600 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                                
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="relative w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
                                >
                                    <Image
                                        src="/Faisal1.png"
                                        alt={PERSON.name}
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                    

                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </motion.div>


                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 border-4 border-blue-600 dark:border-blue-400"
                                >
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="font-semibold text-gray-900 dark:text-white text-sm">
                                            Available for work
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;