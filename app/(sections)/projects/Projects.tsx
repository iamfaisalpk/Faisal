"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, Sparkles, ArrowRight, Code2 } from "lucide-react";

const PROJECTS = [
    {
        id: "skillmentorx",
        title: "SkillMentorX — Learning & Mentorship Platform",
        short: "AI-assisted learning platform for students & mentors. Multi-role dashboards, scheduling and gamification.",
        tools: ["Next.js", "Node.js", "Express.js","MongoDB", "Socket.IO","gemini api key", "Cloudinary"],
        link: "https://skill-mento-x-frontend.vercel.app/",
        github: "https://github.com/iamfaisalpk/SkillMentoX-Frontend",
        featured: true 
    },
    {
        id: "chat-app",
        title: "Real-time Chat App",
        short: "Socket.IO based real-time messaging with presence and media support.",
        tools: ["React", "Node.js","Express.js", "Socket.IO", "MongoDB","Cloudinary"],
        link: "https://whats-app-frontend-nu.vercel.app/",
        github: "https://github.com/iamfaisalpk/WhatsApp-Frontend",
        featured: false
    },
    {
        id: "biometric-system",
        title: "Biometric System Software",
        short: "Attendance & access control integrated with biometric devices.",
        tools: ["Next.js", "Node.js", "Express.js","Socket.IO", "MongoDB", "Cloudinary"],
        link: "https://github.com/iamfaisalpk/Tec-Metric",
        github: "https://github.com/iamfaisalpk/Tec-Metric",
        featured: true
    },
];

const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
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

    return (
        <section
            id="projects"
            className="relative py-20 md:py-32 overflow-hidden"
        >
            {/* Decorative Background */}
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
                    className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-500 dark:bg-blue-400 rounded-full blur-3xl"
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
                    className="absolute bottom-1/4 -right-40 w-96 h-96 bg-indigo-500/20 dark:bg-indigo-400/10 rounded-full blur-3xl"
                />
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
                            Portfolio
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A showcase of my recent work and side projects
                    </p>
                    <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-6"></div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {PROJECTS.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute -top-3 -right-3 z-10">
                                    <div className="bg-linear-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                                        <Sparkles className="w-3 h-3" />
                                        <span>Featured</span>
                                    </div>
                                </div>
                            )}
                            {/* Card */}
                            <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
                            
                                {/* linear Overlay */}
                                <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                {/* Content */}
                                <div className="relative p-6 space-y-4">
                                
                                    {/* Project Icon */}
                                    <div className="flex items-center justify-between">
                                        <div className="p-3 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl shadow-md">
                                            <Code2 className="w-6 h-6 text-white" />
                                        </div>
                                    
                                        {/* Links */}
                                        <div className="flex items-center space-x-2">
                                            {project.github && (
                                                <motion.a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                                >
                                                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                                </motion.a>
                                            )}
                                            <motion.a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                            >
                                                <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                            </motion.a>
                                        </div>
                                    </div>
                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                                        {project.short}
                                    </p>
                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tools.map((tool) => (
                                            <motion.span
                                                key={tool}
                                                whileHover={{ scale: 1.05 }}
                                                className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs md:text-sm font-medium border border-blue-200 dark:border-blue-800"
                                            >
                                                {tool}
                                            </motion.span>
                                        ))}
                                    </div>
                                    {/* View Project Link */}
                                    <div className="pt-4">
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold group/link no-underline"
                                        >
                                            <span>View Project</span>
                                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                                {/* Bottom Border Accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Projects CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        Want to see more of my work?
                    </p>
                    <motion.a
                        href="https://github.com/iamfaisalpk"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/30 transition-all no-underline"
                    >
                        <Github className="w-5 h-5" />
                        <span>View All on GitHub</span>
                        <ExternalLink className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;