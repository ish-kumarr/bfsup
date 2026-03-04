"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* Sleek Horizontal CTA Banner with Image */}
        <div
          className="group max-w-6xl mx-auto relative rounded-[1.5rem] md:rounded-[2rem] bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 overflow-hidden shadow-[0_0_80px_rgba(191,149,63,0.03)] flex flex-col lg:flex-row items-center"
        >
          {/* Main Content Side (Left) */}
          <div className="relative z-20 flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-center lg:text-left bg-gradient-to-b lg:bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-[#BF953F]/10 border border-[#BF953F]/20 mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] w-fit mx-auto lg:mx-0"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#BF953F] animate-pulse" />
              <span className="text-[#BF953F] text-[10px] font-bold uppercase tracking-[0.2em] leading-none pt-[1px]">
                Your Future Starts Here
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5"
            >
              Ready to Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F]">Trading?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/60 text-base md:text-lg font-light leading-relaxed mb-8 max-w-md mx-auto lg:mx-0"
            >
              Join thousands of successful traders transforming their financial futures through curated education.
            </motion.p>

            {/* Banner Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mx-auto lg:mx-0"
            >
              <Link
                href="/onboarding"
                className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F] bg-[length:200%_auto] hover:bg-[center_right_1rem] text-[#050505] rounded-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(191,149,63,0.3)] overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-white/40" />
                <span className="relative z-10 font-bold tracking-wide text-base">
                  Start Learning
                </span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:+919588695021"
                className="group/link w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/[0.03] border border-white/10 text-white hover:bg-white/[0.08] hover:border-[#BF953F]/40 rounded-xl transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-white/50 group-hover/link:text-[#BF953F] transition-colors" />
                <span className="font-semibold tracking-wide text-base">
                  Schedule Call
                </span>
              </a>
            </motion.div>
          </div>

          {/* Image Side (Right) */}
          <div className="relative w-full lg:w-1/2 min-h-[250px] sm:min-h-[350px] lg:min-h-full lg:absolute lg:top-0 lg:right-0 lg:bottom-0 overflow-hidden shrink-0">
            {/* Soft dark gradient fading into the image edge */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[#BF953F]/5 mix-blend-color z-10 pointer-events-none" />
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1920"
              alt="Professional Trading Setup"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out brightness-90 contrast-125"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
