"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Shield, TrendingUp, Users, ArrowUpRight, GraduationCap } from "lucide-react"
import { landingPageData } from "@/lib/data"

// We provide extra description/context locally to enrich the cards,
// as the original data only had short titles.
const enhancedHighlights = [
  {
    icon: TrendingUp,
    title: "Live Trading Classes",
    desc: "Watch and replicate in real-time. Theory is instantly applied in live market conditions.",
    color: "from-[#BF953F]/20 to-transparent",
  },
  {
    icon: GraduationCap,
    title: "Industry Experts as Mentors",
    desc: "Learn from market veterans with decades of combined institutional and retail experience.",
    color: "from-white/10 to-transparent",
  },
  {
    icon: Users,
    title: "Lifetime Learning Community",
    desc: "Trading can be lonely. Join an elite network of dedicated traders who grow together.",
    color: "from-[#BF953F]/10 to-[#BF953F]/5",
  },
]

export function CoreValuesSection() {
  const { coreValuesSection } = landingPageData
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-[#050505] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#BF953F]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left Column (Sticky Title & Description) */}
          <div className="w-full lg:w-5/12 lg:sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#BF953F]/10 border border-[#BF953F]/20 mb-8 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BF953F] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#BF953F]"></span>
                </span>
                <span className="text-[#BF953F] text-xs font-bold uppercase tracking-[0.2em]">
                  {coreValuesSection.tagline}
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
                {coreValuesSection.heading}
              </h2>

              <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                {coreValuesSection.description}
              </p>

            </motion.div>
          </div>

          {/* Right Column (Cards) */}
          <div className="w-full lg:w-7/12 relative">
            <motion.div style={{ y, opacity }} className="flex flex-col gap-6 md:gap-8">
              {enhancedHighlights.map((highlight, index) => {
                const Icon = highlight.icon

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.76, 0, 0.24, 1] }}
                    className="group relative overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] p-8 md:p-12 transition-all duration-700 hover:bg-white/[0.04] hover:border-[#BF953F]/30"
                  >
                    {/* Hover Glow Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                      <div className="w-20 h-20 shrink-0 rounded-[1.5rem] bg-black/40 border border-white/10 flex items-center justify-center group-hover:bg-[#BF953F]/10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-2xl backdrop-blur-md">
                        <Icon className="w-10 h-10 text-white/40 group-hover:text-[#BF953F] transition-colors duration-500" />
                      </div>

                      <div className="flex-1">
                        <div className="text-sm font-mono text-[#BF953F] mb-3 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight group-hover:text-[#BF953F] transition-colors duration-500">
                          {highlight.title}
                        </h3>
                        <p className="text-white/50 text-lg leading-relaxed font-light group-hover:text-white/80 transition-colors duration-500">
                          {highlight.desc}
                        </p>
                      </div>

                      <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full border border-white/10 items-center justify-center opacity-0 translate-x-12 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[0.76,0,0.24,1] group-hover:bg-[#BF953F] group-hover:border-[#BF953F]">
                        <ArrowUpRight className="w-8 h-8 text-black" />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
