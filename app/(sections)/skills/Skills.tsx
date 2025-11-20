"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Database, Palette, Zap } from "lucide-react";

// Mock data - replace with your actual import
const SKILLS = [
    // Frontend
    "React.js",
    "Next.js",
    // "React Native",
    "JavaScript (ES6+)",
    "TypeScript",
    "TailwindCSS",
    "Redux Toolkit",
    "Framer Motion",

    // Backend
    "Express.js",
    "MongoDB",
    "RESTful APIs",
    "Node.js",
    "JWT Authentication",
    "Multer",
    "Cloudinary",

    // Realtime + Systems
    "Socket.IO (Real-time WebApps)",
    "Caching & Optimizations",

    // DevOps + Tools
    "Git & GitHub",
    "CI/CD Pipelines",
    "Vercel ",
    "Postman",

    // App Development
    "React Native",
    "Mobile UI/UX",
    "Push Notifications",

    // AI + Integrations
    "Google Gemini API",
    "AI Chat Systems",

    // Soft Skills
    "Team Collaboration",
    "Communication",
    "Leadership",
    "Problem Solving",
];

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };


    const categories = [
        {
            name: "Frontend",
            icon: Palette,
            color: "from-pink-500 to-rose-500",
            skills: SKILLS.slice(0, 4)
        },
        {
            name: "Backend",
            icon: Database,
            color: "from-purple-500 to-indigo-500",
            skills: SKILLS.slice(8, 12)
        },
        {
            name: "Styling",
            icon: Code2,
            color: "from-blue-500 to-cyan-500",
            skills: SKILLS.slice(4, 8)
        },
        {
            name: "Tools",
            icon: Zap,
            color: "from-amber-500 to-orange-500",
            skills: SKILLS.slice(12)
        }
    ];

    return (
        <section
            id="skills"
            className="relative py-20 md:py-32  overflow-hidden"
        >
            {/* Decorative Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Title */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={titleVariants}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                        <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            My Expertise
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit I use to bring ideas to life
                    </p>
                    <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-6"></div>
                </motion.div>

                {/* Skills Grid with Categories */}
                <div className="space-y-12">
                    {categories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={containerVariants}
                        >
                            {/* Category Header */}
                            <div className="flex items-center space-x-3 mb-6">
                                <div className={`p-2 rounded-lg bg-linear-to-br ${category.color}`}>
                                    <category.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {category.name}
                                </h3>
                                <div className="flex-1 h-px bg-linear-to-r from-gray-300 to-transparent dark:from-gray-700"></div>
                            </div>

                            {/* Skills Cards */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{
                                            scale: 1.05,
                                            y: -5,
                                            transition: { duration: 0.2 }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group relative"
                                    >
                                        <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-sm hover:shadow-xl">
                                            <div className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}></div>

                                            <div className="relative text-center">
                                                <span className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                                                    {skill}
                                                </span>
                                            </div>


                                            <div className={`absolute top-2 right-2 w-2 h-2 rounded-full bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>


                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="mt-20"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                        Complete Tech Stack
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {SKILLS.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, -5, 5, 0],
                                    transition: { duration: 0.3 }
                                }}
                                className="relative group"
                            >
                                <div className="bg-linear-to-br from-blue-500 to-indigo-600 p-0.5 rounded-lg">
                                    <div className="bg-white dark:bg-gray-900 px-4 py-3 rounded-lg">
                                        <span className="text-sm md:text-base font-medium text-gray-900 dark:text-white text-center block">
                                            {skill}
                                        </span>
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-lg -z-10"></div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-gray-700 dark:text-gray-400 mb-6">
                        Constantly learning and exploring new technologies
                    </p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/30 transition-all no-underline"
                    >
                        <span>Let&apos;s Work Together</span>
                        <Sparkles className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;