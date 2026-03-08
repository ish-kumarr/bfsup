"use client"

import React, { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import Link from "next/link"
import {
  BarChart3,
  Shield,
  Clock,
  Users,
  Zap,
  ArrowRight,
  Activity,
  Crosshair,
  ArrowUpRight,
  CheckCircle2,
  Star,
  MessageCircle,
  Brain
} from "lucide-react"
import { landingPageData } from "@/lib/data"

function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className={`relative overflow-hidden group rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-700 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(191, 149, 63, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Background glow orb that responds to hover */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#BF953F]/5 rounded-full blur-[60px] group-hover:bg-[#BF953F]/15 group-hover:scale-150 transition-all duration-1000 ease-out pointer-events-none" />

      {/* Subtle top inner highlight */}
      <div className="absolute inset-0 rounded-[2.5rem] border border-white/[0.03] pointer-events-none group-hover:border-[#BF953F]/20 transition-colors duration-700 mix-blend-overlay z-10"></div>

      <div className="relative z-20 h-full">{children}</div>
    </div>
  )
}

const curriculumPillars = [
  {
    id: "01",
    title: "Market Structure",
    description: "Learn to read raw charts without relying on lagging indicators. Understand liquidity and how institutions move the market.",
    icon: BarChart3,
    span: "md:col-span-2",
  },
  {
    id: "02",
    title: "Technical Analysis",
    description: "Master the confluence of key technical tools. We teach you how to use volume, moving averages, and momentum effectively.",
    icon: Activity,
    span: "md:col-span-1",
  },
  {
    id: "03",
    title: "Risk Management",
    description: "The holy grail of trading. Learn strict position sizing, risk-to-reward ratios, and capital preservation techniques.",
    icon: Shield,
    span: "md:col-span-1",
  },
  {
    id: "04",
    title: "Trading Psychology",
    description: "Develop the mental fortitude needed to execute your edge flawlessly. Overcome FOMO, revenge trading, and emotional decisions.",
    icon: Users,
    span: "md:col-span-2",
  },
  {
    id: "05",
    title: "Live Mentorship",
    description: "Interactive real-time mentoring is coming soon. Get ready to bridge the gap between theoretical knowledge and practical application.",
    icon: Zap,
    span: "md:col-span-3",
  },
]

export function ServicesSection() {
  const { servicesSection } = landingPageData

  return (
    <section id="services" className="py-24 md:py-40 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-[1400px]">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#BF953F]/10 border border-[#BF953F]/20 mb-10 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BF953F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#BF953F]"></span>
              </span>
              <span className="text-[#BF953F] text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                {servicesSection.tagline}
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8">
              Our Trading <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F]">Mastery Program</span>
            </h2>

            <p className="text-white/50 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
              We've distilled decades of market experience into a structured 5-pillar mastery program.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {curriculumPillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: index * 0.1 }}
              className={pillar.span}
            >
              <SpotlightCard className="h-full p-8 md:p-12">
                {pillar.id === "05" ? (
                  // Custom layout for the 5th card (CTA)
                  <div className="flex flex-col xl:flex-row gap-10 xl:gap-16 h-full relative z-10 items-center xl:items-center">
                    <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#BF953F]/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none group-hover:bg-[#BF953F]/20 transition-all duration-1000" />

                    {/* Left Column: Info */}
                    <div className="flex-1 flex flex-col justify-center text-center xl:text-left w-full">
                      <div className="inline-flex items-center justify-center xl:justify-start gap-3 mb-6">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BF953F] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#BF953F]"></span>
                        </span>
                        <span className="text-[#BF953F] font-mono font-bold tracking-[0.2em] uppercase text-sm">Priority Access</span>
                      </div>

                      <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white group-hover:text-[#BF953F] transition-colors duration-500 tracking-tight leading-[1.05] mb-6">
                        {pillar.title}
                      </h3>

                      <p className="text-white/60 leading-relaxed text-lg lg:text-xl font-light max-w-xl mx-auto xl:mx-0 mb-10">
                        {pillar.description}
                      </p>

                      <div className="flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
                        <Link href="#services" onClick={(e) => e.preventDefault()} className="group/btn relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#BF953F] text-black rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] shadow-[0_0_40px_0_rgba(191,149,63,0.3)] w-full sm:w-auto">
                          <span className="relative z-10 font-bold tracking-wide text-lg whitespace-nowrap pt-1">
                            Join the Waitlist
                          </span>
                          <div className="relative z-10 w-8 h-8 shrink-0 rounded-full bg-black/10 flex items-center justify-center transition-colors duration-500">
                            <ArrowRight className="w-4 h-4 text-black group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </div>
                        </Link>

                        <div className="text-white/40 font-mono text-sm px-4">
                          Limited to 50 students / batch
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Features Display */}
                    <div className="w-full xl:w-[450px] shrink-0 mt-8 xl:mt-0">
                      <div className="h-full w-full rounded-[2rem] border border-white/10 bg-black/40 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group-hover:border-[#BF953F]/30 transition-colors duration-700 shadow-2xl text-left">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#BF953F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>

                        <div className="relative z-10">
                          <h4 className="text-white font-bold text-xl mb-8 flex items-center gap-3">
                            <Star className="w-5 h-5 text-[#BF953F]" />
                            Program Highlights
                          </h4>

                          <div className="flex flex-col gap-6">
                            {[
                              { title: "1-on-1 Portfolio Reviews", desc: "Personalized breakdown of your trades", icon: Crosshair },
                              { title: "Live Daily Trading", desc: "Watch executions in real-time", icon: Activity },
                              { title: "Direct Mentor Access", desc: "24/7 private community channel", icon: MessageCircle },
                              { title: "Mindset Conditioning", desc: "Weekly psychology workshops", icon: Brain },
                            ].map((feature, i) => {
                              const Icon = feature.icon
                              return (
                                <div key={i} className="flex items-start gap-4">
                                  <div className="w-10 h-10 rounded-full bg-[#BF953F]/10 flex items-center justify-center shrink-0 border border-[#BF953F]/20 group-hover:bg-[#BF953F]/20 transition-colors duration-500">
                                    <Icon className="w-5 h-5 text-[#BF953F]" />
                                  </div>
                                  <div className="pt-0.5 text-left">
                                    <div className="text-white font-semibold text-lg leading-tight mb-1">{feature.title}</div>
                                    <div className="text-white/40 text-sm leading-snug">{feature.desc}</div>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Standard layout for cards 1-4
                  <div className="flex flex-col h-full justify-between gap-10 md:gap-16 min-h-[300px]">
                    <div className="flex justify-between items-start">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1.2rem] md:rounded-[1.5rem] bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:bg-[#BF953F]/10 group-hover:border-[#BF953F]/40 group-hover:scale-110 transition-all duration-500 ease-[0.76,0,0.24,1] shadow-[0_0_0_0_rgba(191,149,63,0)] group-hover:shadow-[0_0_30px_0_rgba(191,149,63,0.2)]">
                        <pillar.icon className="w-7 h-7 md:w-8 md:h-8 text-white/40 group-hover:text-[#BF953F] transition-colors duration-500" />
                      </div>

                      <div className="flex items-center gap-4 md:gap-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[0.76,0,0.24,1] group-hover:bg-[#BF953F]/20 group-hover:border-[#BF953F]/50 hidden sm:flex">
                          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#BF953F]" />
                        </div>
                        <span className="text-white/20 font-mono font-bold text-2xl md:text-3xl group-hover:text-[#BF953F]/50 transition-colors duration-500">{pillar.id}</span>
                      </div>
                    </div>

                    <div className="relative z-10 mt-auto">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight group-hover:text-[#BF953F] transition-colors duration-500 leading-[1.1] text-balance">
                        {pillar.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed text-base md:text-lg lg:text-xl font-light group-hover:text-white/80 transition-colors duration-500 text-balance">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                )}
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
