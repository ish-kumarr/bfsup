"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { TrendingUp, Activity, ShieldCheck, CheckCircle2 } from "lucide-react"
import { landingPageData } from "@/lib/data"

const featureIcons = [TrendingUp, Activity, ShieldCheck]

export function EducationSection() {
  const { educationSection } = landingPageData
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Parallax effect for the background image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section ref={containerRef} className="py-24 md:py-32 relative overflow-hidden bg-[#050505]">
      {/* Immersive Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 origin-top"
      >
        <div className="absolute inset-0 bg-[#050505]/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent z-10"></div>
        {/* Using a high-quality relevant stock image from Pexels */}
        <img
          src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Trading desk background"
          className="w-full h-[120%] object-cover object-center opacity-40 mix-blend-luminosity"
        />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Left Column: Context & Video Tease */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/40 border border-white/10 mb-8 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BF953F] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#BF953F]"></span>
                </span>
                <span className="text-[#BF953F] text-xs font-bold uppercase tracking-[0.2em]">
                  {educationSection.tagline}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-8">
                Understanding Cryptocurrency <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F]">Trading</span>
              </h2>

              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
                {educationSection.subheading}
              </p>
            </motion.div>
          </div>

          {/* Right Column: Glassmorphic Content Card */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="relative rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-xl p-8 md:p-12 overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#BF953F]/10 to-transparent opacity-50" />
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay" />

              <div className="relative z-10">
                <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-12">
                  {educationSection.content}
                </p>

                <div className="flex flex-col gap-6">
                  {educationSection.features.map((feature, index) => {
                    const Icon = featureIcons[index] || CheckCircle2
                    return (
                      <div key={index} className="flex items-start gap-5 group">
                        <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#BF953F]/10 border border-[#BF953F]/20 flex items-center justify-center group-hover:bg-[#BF953F] group-hover:border-[#BF953F] transition-all duration-500">
                          <Icon className="w-5 h-5 text-[#BF953F] group-hover:text-black transition-colors duration-500" />
                        </div>
                        <div className="pt-2">
                          <span className="text-white font-medium text-lg leading-snug">
                            {feature}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
