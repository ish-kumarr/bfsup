"use client";

import React, { useState, useEffect, useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming utils path

export interface ContainerTextFlipProps {
    /** Array of words to cycle through in the animation */
    words?: string[];
    /** Time in milliseconds between word transitions */
    interval?: number;
    /** Additional CSS classes to apply to the container */
    className?: string;
    /** Additional CSS classes to apply to the text */
    textClassName?: string;
    /** Duration of the transition animation in milliseconds */
    animationDuration?: number;
    /** Optional initial word index */
    initialIndex?: number;
}

export function ContainerTextFlip({
    words = ["better", "modern", "beautiful", "awesome"],
    interval = 3000,
    className,
    textClassName,
    animationDuration = 700,
    initialIndex = 0,
}: ContainerTextFlipProps) {
    const id = useId();
    const [currentWordIndex, setCurrentWordIndex] = useState(initialIndex);
    const [width, setWidth] = useState(100);
    const textRef = React.useRef<HTMLDivElement>(null);

    const updateWidthForWord = () => {
        if (textRef.current) {
            // Add some padding to the text width (30px on each side)
            const textWidth = textRef.current.scrollWidth + 30;
            setWidth(textWidth);
        }
    };

    useEffect(() => {
        // Update width whenever the word changes
        updateWidthForWord();
    }, [currentWordIndex, words]);

    // Optionally disable interval if interval is 0 or words length is 1
    useEffect(() => {
        if (interval <= 0 || words.length <= 1) return;
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, interval);

        return () => clearInterval(intervalId);
    }, [words, interval]);

    // If initialIndex changes from parent, sync it
    useEffect(() => {
        setCurrentWordIndex(initialIndex);
    }, [initialIndex]);

    return (
        <motion.div
            layout
            layoutId={`words-here-${id}`}
            animate={{ width }}
            transition={{ duration: animationDuration / 2000 }}
            className={cn(
                "relative inline-block rounded-md text-center transition-all",
                className,
            )}
            key={words[currentWordIndex]}
        >
            <motion.div
                transition={{
                    duration: animationDuration / 1000,
                    ease: "easeInOut",
                }}
                className={cn("inline-block", textClassName)}
                ref={textRef}
                layoutId={`word-div-${words[currentWordIndex]}-${id}`}
            >
                <motion.div className="inline-block">
                    {words[currentWordIndex]?.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{
                                opacity: 0,
                                filter: "blur(10px)",
                            }}
                            animate={{
                                opacity: 1,
                                filter: "blur(0px)",
                            }}
                            transition={{
                                delay: index * 0.02,
                            }}
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
