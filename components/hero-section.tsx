"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronRight, Play, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { landingPageData } from "@/lib/data"

export function HeroSection() {
  const { heroSection } = landingPageData
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    "/professional-financial-trading-team-meeting-in-mod.jpg",
    "/modern-financial-trading-office-with-multiple-moni.jpg",
    "/stock-market-trading-floor-busy-professionals.jpg",
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }, [heroImages.length])

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentSlide] || "/placeholder.svg"}
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#050505] z-[1]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40 z-[1]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <Users className="w-3.5 h-3.5 text-[#BF953F]" />
            <span className="text-[#FCF6BA] text-xs font-semibold uppercase tracking-wider">
              {heroSection.tagline}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
          >
            <span className="text-white block mb-2">Master Trading</span>
            <span className="gold-gradient-text">with Live Mentorship</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {heroSection.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href={heroSection.ctaButton.link}
              className="group relative inline-flex items-center gap-2 px-8 py-4 gold-gradient-bg text-[#050505] font-bold rounded-full overflow-hidden transition-all duration-300 hover:gold-glow hover:scale-105"
            >
              <span>{heroSection.ctaButton.text}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href={heroSection.secondaryCta.link}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
            >
              <Play className="w-4 h-4 fill-current text-[#BF953F]" />
              <span>{heroSection.secondaryCta.text}</span>
            </Link>
          </motion.div>

          {/* Social Proof snippet (optional but SaaS-like) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex flex-col items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-[#111] overflow-hidden">
                  <Image src={`/placeholder-user.jpg`} alt="Student" width={40} height={40} />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-[#BF953F] flex items-center justify-center text-[10px] font-bold text-[#050505]">
                10k+
              </div>
            </div>
            <p className="text-white/40 text-sm">Join 10,000+ successful traders worldwide</p>
          </motion.div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="relative h-1 w-12 group overflow-hidden bg-white/20 rounded-full"
            aria-label={`Go to slide ${index + 1}`}
          >
            {currentSlide === index && (
              <motion.div
                layoutId="progress"
                className="absolute inset-0 bg-[#BF953F]"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 6, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Decorative side line */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 opacity-20">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-[#BF953F] to-transparent" />
        <span className="text-[10px] text-[#BF953F] uppercase tracking-[0.5em] rotate-90 py-8">Education</span>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-[#BF953F] to-transparent" />
      </div>
    </section>
  )
}
