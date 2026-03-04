"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Globe, TrendingUp, MonitorPlay, Shield, Infinity, Target } from "lucide-react"
import { landingPageData } from "@/lib/data"

const benefitIcons = [Globe, TrendingUp, MonitorPlay, Shield, Infinity, Target]

export function BenefitsSection() {
  const { benefitsSection } = landingPageData
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#BF953F]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="w-full md:w-1/2"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#BF953F]/10 border border-[#BF953F]/20 mb-8 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BF953F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#BF953F]"></span>
              </span>
              <span className="text-[#BF953F] text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                {benefitsSection.tagline}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Why Choose Brightfolio for Trading <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F]">Education?</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="w-full md:w-1/3"
          >
            <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed">
              {benefitsSection.subheading}
            </p>
          </motion.div>
        </div>

        {/* Vertical List */}
        <div className="border-t border-white/10 group/list flex flex-col">
          {benefitsSection.list.map((benefit, index) => {
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative border-b border-white/10 py-8 md:py-12 px-4 md:px-8 cursor-default overflow-hidden transition-colors duration-500 hover:border-transparent"
              >
                {/* Background Sweep */}
                <motion.div
                  className="absolute inset-0 bg-[#BF953F]/5 origin-left z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                />

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full">
                  <span
                    className={`text-2xl md:text-4xl font-mono font-bold transition-colors duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] w-12 shrink-0 ${isHovered ? "text-[#BF953F]" : "text-white/10"
                      }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3
                    className={`text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-snug flex-1 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isHovered ? "text-white translate-x-2 md:translate-x-4" : "text-white/70"
                      }`}
                  >
                    {benefit}
                  </h3>

                  <div className="hidden md:flex w-16 h-16 rounded-full border border-white/10 items-center justify-center shrink-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:bg-[#BF953F] group-hover:border-[#BF953F] group-hover:scale-110">
                    {(() => {
                      const Icon = benefitIcons[index] || ArrowUpRight
                      return <Icon className="w-6 h-6 text-white/30 group-hover:text-black transition-colors duration-500" />
                    })()}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
