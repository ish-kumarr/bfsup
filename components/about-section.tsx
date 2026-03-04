"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, BookOpen, Users, Shield, Zap, Target, Award, PlayCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { landingPageData } from "@/lib/data"

export function AboutSection() {
  const { aboutSection } = landingPageData
  const [activeTab, setActiveTab] = useState(0)

  // Mapping highlights to specific icons
  const highlightIcons = [BookOpen, Target, Shield, Users, Zap]

  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#BF953F]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-[#BF953F]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">

        {/* Header section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BF953F]/10 border border-[#BF953F]/20 mb-6 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BF953F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#BF953F]"></span>
            </span>
            <span className="text-[#BF953F] text-sm font-bold uppercase tracking-[0.2em]">
              {aboutSection.tagline}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white text-balance leading-[1.1]"
          >
            Empowering Traders Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F]">Education</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Main Content / Interactive Left */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-6 sm:p-8 rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.05] backdrop-blur-xl group hover:border-[#BF953F]/20 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#BF953F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]" />
              <div className="w-10 h-10 rounded-full bg-[#BF953F]/20 flex items-center justify-center mb-6 border border-[#BF953F]/30">
                <PlayCircle className="w-5 h-5 text-[#BF953F]" />
              </div>
              <div className="space-y-6 relative z-10">
                {Array.isArray(aboutSection.description) ? (
                  aboutSection.description.map((para, index) => (
                    <p
                      key={index}
                      className="text-white/80 text-lg md:text-xl leading-relaxed font-light"
                    >
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light">
                    {aboutSection.description}
                  </p>
                )}
              </div>
            </motion.div>

            {/* Interactive Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {aboutSection.highlights.slice(0, 4).map((highlight, index) => {
                const Icon = highlightIcons[index % highlightIcons.length]
                const isActive = activeTab === index
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveTab(index)}
                    className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden flex items-center gap-4
                      ${isActive
                        ? "bg-[#BF953F]/10 border-[#BF953F]/40 shadow-[0_0_20px_rgba(191,149,63,0.1)] scale-[1.02]"
                        : "bg-white/[0.02] border-white/[0.05] hover:border-white/10 hover:bg-white/[0.04]"
                      }
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-glow"
                        className="absolute inset-0 bg-gradient-to-r from-[#BF953F]/10 to-transparent opacity-50"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300
                      ${isActive ? "bg-[#BF953F]/20 text-[#BF953F]" : "bg-white/5 text-white/50"}
                    `}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`relative z-10 font-medium text-base sm:text-lg transition-colors duration-300 ${isActive ? "text-white" : "text-white/70"}`}>
                      {highlight}
                    </span>
                  </div>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <Link
                href="/onboarding"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#BF953F] text-[#050505] font-bold rounded-xl overflow-hidden transition-all hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Start Trading Now</span>
                <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl transition-all hover:bg-white/5 hover:border-white/40"
              >
                {aboutSection.ctaText || "Learn Our Story"}
              </Link>
            </motion.div>
          </div>

          {/* Holographic / Interactive Right Side */}
          <div className="w-full lg:w-1/2 relative lg:h-[700px] min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-[#BF953F]/30 to-transparent p-[1px] shadow-2xl"
            >
              <div className="absolute inset-0 bg-[#050505] rounded-[2.5rem] overflow-hidden group">
                <Image
                  src="/professional-financial-trading-team-meeting-in-mod.jpg"
                  alt="Brightfolio Team"
                  fill
                  className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 mix-blend-luminosity"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
                <div className="absolute inset-0 bg-[#BF953F]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-1000" />

                {/* Floating elements inside image container */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="backdrop-blur-xl bg-black/50 border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div>
                      <p className="text-white/60 text-xs sm:text-sm font-medium uppercase tracking-wider mb-1">Student Success</p>
                      <p className="text-[#BF953F] text-3xl sm:text-4xl font-black">Growth Driven</p>
                    </div>
                    <div className="w-16 h-16 shrink-0 rounded-full border border-[#BF953F]/30 flex items-center justify-center relative">
                      <svg width="60" height="60" className="transform -rotate-90">
                        <circle cx="30" cy="30" r="26" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-white/10" />
                        <circle
                          cx="30" cy="30" r="26" stroke="currentColor" strokeWidth="3" fill="transparent"
                          strokeDasharray="163"
                          strokeDashoffset="30"
                          className="text-[#BF953F]"
                          strokeLinecap="round"
                        />
                      </svg>
                      <Award className="w-6 h-6 text-[#BF953F] absolute" />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-8 right-8 backdrop-blur-md bg-[#BF953F]/10 border border-[#BF953F]/30 p-4 rounded-xl flex items-center gap-3 z-20 shadow-[0_0_20px_rgba(191,149,63,0.1)]"
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BF953F] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#BF953F]"></span>
                  </span>
                  <span className="text-white font-medium text-sm">Live Mentorship</span>
                </motion.div>

              </div>
            </motion.div>

            {/* Corner Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#BF953F]/40 rounded-tr-[2.5rem] pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#BF953F]/40 rounded-bl-[2.5rem] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
