"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Loader2,
    Send,
    Download,
    FileText,
    CheckCircle,
} from "lucide-react";

const PERSON = {
    phone: "+91 7994010513",
    email: "iamfaizy123@gmail.com",
    location: "Malappuram, Kerala, India",
};

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        action: "whatsapp" as "whatsapp" | "email",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const validate = () => {
        const err: Record<string, string> = {};
        if (!formData.name.trim()) err.name = "Name ";
        if (!formData.email.trim()) err.email = "Email ";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) err.email = "Email is invalid";
        if (!formData.message.trim()) err.message = "Message ";
        return err;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        setTimeout(() => {
            if (formData.action === "whatsapp") {
                const text = encodeURIComponent(`Hi, I'm ${formData.name}.\n\n${formData.message}`);
                window.open(`https://wa.me/${PERSON.phone.replace(/\D/g, "")}?text=${text}`, "_blank");
            } else {
                const subject = encodeURIComponent(`Portfolio Contact - ${formData.name}`);
                const body = encodeURIComponent(formData.message);
                window.location.href = `mailto:${PERSON.email}?subject=${subject}&body=${body}`;
            }

            setSuccessMessage(`Opening ${formData.action === "whatsapp" ? "WhatsApp" : "Email"}...`);
            setIsSubmitting(false);

            setTimeout(() => {
                setFormData({ name: "", email: "", message: "", action: "whatsapp" });
                setSuccessMessage("");
            }, 3000);
        }, 1000);
    };

    return (
        <section
            id="contact"
            className="relative py-24 lg:py-32 overflow-hidden bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
        >

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-0 -left-20 w-96 h-96 rounded-full bg-blue-300/40 dark:bg-blue-700/20 blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 12, repeat: Infinity }}
                    className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-purple-300/40 dark:bg-purple-700/20 blur-3xl"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={stagger}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.span
                        variants={fadeIn}
                        className="inline-block px-6 py-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold mb-4"
                    >
                        ✨ LET&apos;S CONNECT
                    </motion.span>
                    <motion.h2
                        variants={fadeIn}
                        className="text-5xl md:text-6xl lg:text-7xl font-black bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.p variants={fadeIn} className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Ready to bring your ideas to life? Drop me a message — I reply fast!
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="card-glass p-8 lg:p-10 rounded-3xl cursor-pointer"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Send a Message</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">I&apos;ll get back to you within hours.</p>

                        <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Mohammed"
                                    className={`w-full px-5 py-3.5 rounded-xl border-2 ${errors.name ? "border-red-500 bg-red-50" : "border-gray-200 dark:border-neutral-700"
                                        } bg-white dark:bg-neutral-900/50 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition`}
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                            </div>


                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className={`w-full px-5 py-3.5 rounded-xl border-2 ${errors.email ? "border-red-500 bg-red-50" : "border-gray-200 dark:border-neutral-700"
                                        } bg-white dark:bg-neutral-900/50 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition`}
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                            </div>


                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Hi Faisal, I have a project idea..."
                                    className={`w-full px-5 py-3.5 rounded-xl border-2 ${errors.message ? "border-red-500 bg-red-50" : "border-gray-200 dark:border-neutral-700"
                                        } bg-white dark:bg-neutral-900/50 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none resize-none transition`}
                                />
                                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                            </div>


                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Contact via
                                </label>
                                <select
                                    name="action"
                                    value={formData.action}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900/50 focus:border-blue-500 outline-none cursor-pointer"
                                >
                                    <option value="whatsapp">WhatsApp (Fastest)</option>
                                    <option value="email">Email</option>
                                </select>
                            </div>


                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full cursor-pointer btn-primary py-4 text-lg font-bold flex items-center justify-center gap-3 disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin w-5 h-5" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" /> Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>


                        {successMessage && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl text-green-800 dark:text-green-200 text-center font-medium flex items-center justify-center gap-2"
                            >
                                <CheckCircle className="w-5 h-5" />
                                {successMessage}
                            </motion.div>
                        )}
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >

                        <div className="card-glass p-8 rounded-3xl text-center">
                            <FileText className="mx-auto w-20 h-20 text-blue-600 dark:text-blue-400 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Download Resume</h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">Latest — November 2025</p>
                            <a
                                href="/resume.pdf"
                                download="Mohammed_Faisal_Resume.pdf"
                                className="mt-6 inline-flex items-center gap-3 btn-primary px-8 py-4 text-lg"
                            >
                                <Download className="w-5 h-5" /> Download CV
                            </a>
                        </div>


                        <div className="card-glass rounded-3xl overflow-hidden border border-gray-200/50 dark:border-neutral-800">
                            <embed
                                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                type="application/pdf"
                                className="w-full h-96 md:h-[600px]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}