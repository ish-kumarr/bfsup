"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { landingPageData } from "@/lib/data"

export function StatsSection() {
  const { statsSection } = landingPageData
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Subtle parallax effect for the whole section
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={containerRef} className="py-24 md:py-40 relative overflow-hidden bg-[#050505]">
      {/* Background Ambience & Professional Texture */}
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]) }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505]/80 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10"></div>
        <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-[#BF953F]/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 z-10"></div>
        <img
          src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Abstract dark background texture"
          className="w-full h-[110%] object-cover opacity-30 mix-blend-luminosity"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-10"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#BF953F]/5 border border-[#BF953F]/20 mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BF953F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BF953F]"></span>
            </span>
            <span className="text-[#BF953F] text-xs font-bold uppercase tracking-[0.2em]">
              {statsSection.tagline}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight"
          >
            {statsSection.heading}
          </motion.h2>
        </div>

        <motion.div style={{ y }} className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6 lg:gap-8 max-w-6xl mx-auto">
          {statsSection.items.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.76, 0, 0.24, 1] }}
              className="group relative flex-1 w-full max-w-sm rounded-[2.5rem] p-[1px] overflow-hidden"
            >
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#BF953F]/50 to-transparent group-hover:via-[#BF953F] translate-x-[-100%] group-hover:translate-x-0 transition-all duration-[1000ms] ease-out" />
              <div className="absolute inset-0 bg-white/5" />

              <div className="relative h-full bg-[#050505]/90 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-12 flex flex-col items-center text-center transition-transform duration-500 group-hover:scale-[0.98]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#BF953F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem]" />

                <div className="relative z-10 font-bold mb-4 tracking-tighter flex items-baseline">
                  <span className="text-6xl lg:text-7xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50 group-hover:from-white group-hover:via-[#BF953F] group-hover:to-[#BF953F]/50 transition-all duration-700">
                    {stat.value}
                  </span>
                  <span className="text-3xl lg:text-4xl xl:text-5xl text-[#BF953F] ml-1">{stat.unit}</span>
                </div>

                <h3 className="relative z-10 text-white font-semibold text-xl mb-3 tracking-wide drop-shadow-lg">
                  {stat.label}
                </h3>

                <p className="relative z-10 text-white/50 text-sm md:text-base font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
