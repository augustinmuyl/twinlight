"use client"

import { motion } from "motion/react";

export default function Navbar() {
    return (
        <motion.div
            className="flex justify-center gap-32 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
        >
            <a href="/map" className="mt-12">
                MAP
            </a>
            <a href="/archive" className="mt-12">
                ARCHIVE
            </a>
        </motion.div>
    )
}

