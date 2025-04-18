"use client"

import { motion } from "motion/react";

export default function Navbar() {
    return (
        <motion.div
            className="flex justify-center md:gap-2 lg:gap-4 text-white text-sm lg:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
        >
            <a href="/map" className="mt-12 hover:bg-white/5 py-2 px-6 rounded-full backdrop-blur-sm transition-all">
                MAP
            </a>
            <a href="/archive" className="mt-12 hover:bg-white/5 py-2 px-6 rounded-full backdrop-blur-sm transition-all">
                ARCHIVE
            </a>
        </motion.div>
    )
}

