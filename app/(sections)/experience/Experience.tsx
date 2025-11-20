"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, TrendingUp, Award } from "lucide-react";

const experiences = [
    {
        title: "Full Stack Developer",
        company: "Techon-Innovation",
        location: "Kerala, India",
        period: "2025 - Present",
        duration: "Present",
        description:
            "Working on cutting-edge software using Next.js, Node.js, and MongoDB. Currently leading the development of a modern Biometric Attendance System including device integration, user management, analytics dashboards, and real-time syncing.",
        skills: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Real-time Systems", "Redux"],
        current: true
    },
    {
        title: "Full Stack Developer",
        company: "Bridgeon Solutions",
        location: "Kerala, India",
        period: "2024 - 2025",
        duration: "1 year",
        description:
            "Developed multiple production-level applications including a real-time chat application using Socket.IO, a student learning/mentor platform (SkillMentorX), and internal tools. Worked across frontend, backend APIs, authentication, and performance optimization.",
        skills: ["Next.js", "React", "Socket.IO", "Node.js", "Express", "REST APIs", "Redux"],
        current: false
    }
];

const Experience = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1] as const 
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
                ease: [0.4, 0, 0.2, 1] as const 
            }
        }
    };

    return (
        <section
            id="experience"
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
                    className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500 dark:bg-blue-400 rounded-full blur-3xl"
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
                    className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/20 dark:bg-indigo-400/10 rounded-full blur-3xl"
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">


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
                            Career Journey
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        Work Experience
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        My professional journey and key accomplishments
                    </p>
                    <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-6"></div>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="relative"
                >

                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-indigo-500 to-purple-500 transform -translate-x-1/2"></div>


                    <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-indigo-500 to-purple-500"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >

                                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className="w-4 h-4 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
                                    >
                                        {exp.current && (
                                            <motion.div
                                                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="absolute inset-0 bg-blue-500 rounded-full"
                                            />
                                        )}
                                    </motion.div>
                                </div>


                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                                        } max-w-xl`}
                                >
                                    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">

                                        {exp.current && (
                                            <div className="absolute top-4 right-4 z-10">
                                                <div className="flex items-center space-x-1 bg-linear-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                                    <TrendingUp className="w-3 h-3" />
                                                    <span>Current</span>
                                                </div>
                                            </div>
                                        )}

                                        <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                        <div className="relative p-6 space-y-4">

                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                        {exp.title}
                                                    </h3>
                                                    <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-semibold">
                                                        <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                                        <span>{exp.company}</span>
                                                    </div>
                                                </div>

                                                <div className="p-3 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl shadow-md">
                                                    <Award className="w-6 h-6 text-white" />
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-3 text-sm">
                                                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                                                    <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                                    <span className="font-medium">{exp.period}</span>
                                                </div>
                                                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                                                    <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                                    <span className="font-medium">{exp.location}</span>
                                                </div>
                                            </div>

                                            <div className="w-full h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                {exp.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {exp.skills.map((skill, skillIndex) => (
                                                    <motion.span
                                                        key={skillIndex}
                                                        whileHover={{ scale: 1.05 }}
                                                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-800"
                                                    >
                                                        {skill}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                                    </div>
                                </motion.div>

                                <div className="hidden md:block flex-1"></div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {[
                        { label: "Years Experience", value: "1+", icon: TrendingUp },
                        { label: "Companies", value: "2", icon: Briefcase },
                        { label: "Projects Built", value: "3+", icon: Award }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-lg"
                        >
                            <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
                            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;