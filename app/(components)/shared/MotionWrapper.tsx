"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps {
    children: ReactNode;
    variants?: Variants;
    className?: string;
}

const MotionWrapper = ({ children, variants, className }: MotionWrapperProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default MotionWrapper;
