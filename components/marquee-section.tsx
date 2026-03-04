"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, Shield, Zap, Target } from "lucide-react"
import { landingPageData } from "@/lib/data"

export function MarqueeSection() {
    const { aboutSection } = landingPageData
    const highlightIcons = [BookOpen, Target, Shield, Users, Zap]

    return (
        <section className="py-12 bg-[#050505] border-y border-white/[0.05] relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#BF953F]/5 to-transparent pointer-events-none" />

            {/* Fade masks for smooth entry/exit */}
            <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex items-center gap-16 whitespace-nowrap min-w-max px-8"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 25
                }}
            >
                {/* Triple the list for seamless infinite effect on large screens */}
                {[...aboutSection.highlights, ...aboutSection.highlights, ...aboutSection.highlights].map((highlight, index) => {
                    const Icon = highlightIcons[index % highlightIcons.length]
                    return (
                        <div
                            key={index}
                            className="flex items-center gap-4 shrink-0 group"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-white/40 group-hover:text-[#BF953F] group-hover:border-[#BF953F]/40 group-hover:bg-[#BF953F]/10 group-hover:shadow-[0_0_20px_rgba(191,149,63,0.15)] transition-all duration-500">
                                <Icon className="w-6 h-6" />
                            </div>
                            <span className="font-bold text-white/50 text-xl md:text-2xl uppercase tracking-[0.1em] group-hover:text-white transition-colors duration-500">
                                {highlight}
                            </span>

                            {/* Separator Dot */}
                            <div className="w-2 h-2 rounded-full bg-white/10 ml-12 group-hover:bg-[#BF953F]/50 transition-colors duration-500" />
                        </div>
                    )
                })}
            </motion.div>
        </section>
    )
}
