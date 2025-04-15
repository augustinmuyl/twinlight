"use client"

import {useEffect} from "react";
import {motion} from "motion/react";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"], // Add whatever weights you need
    variable: "--font-poppins",
});

export default function Hero() {
    useEffect(() => {
        // Lock scrolling globally
        document.body.style.overflow = "hidden";
        
        return () => {
            // Restore scroll when the component is unmounted
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className={`overflow-hidden flex flex-col w-full h-screen items-center justify-center gap-8 ${poppins.variable} font-poppins`}>
        <motion.h1
            className="text-7xl font-bold bg-linear-to-r from-white to-yellow-200 bg-clip-text text-transparent [-webkit-text-stroke:2px_black]"
            animate={{
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"], // Animate background gradient position
            }}
            transition={{
                duration: 4, // Animation duration
                ease: "easeInOut",
                repeat: Infinity, // Loop infinitely
            }}
            style={{
                backgroundSize: "200% 200%", // To allow smooth scrolling of the gradient
            }}
        >
                WELCOME TO TWINLIGHT
        </motion.h1>
            <a
                className="bg-[#D9D9D9] rounded-full p-2 px-12 text-xl"
                href="/"
            >
                Try it now!
            </a>
        </div>
    )
}

