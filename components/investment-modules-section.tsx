"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { landingPageData } from "@/lib/data"
import Link from "next/link"

export function InvestmentModulesSection() {
  const { investmentModules } = landingPageData
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Subtle background shift for depth
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <section id="modules" ref={containerRef} className="py-24 md:py-40 bg-[#050505] relative overflow-hidden">
      {/* Background Decor matching previous sections */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-[#BF953F]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" />
      </motion.div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 md:mb-32">
          {/* Header Left */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/40 border border-white/10 mb-8 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BF953F] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BF953F]"></span>
                </span>
                <span className="text-[#BF953F] text-xs font-bold uppercase tracking-[0.2em]">
                  {investmentModules.tagline}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
                {investmentModules.heading}
              </h2>
            </motion.div>
          </div>

          {/* Header Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="md:max-w-sm lg:max-w-md"
          >
            <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed">
              {investmentModules.subheading}
            </p>
          </motion.div>
        </div>

        {/* Premium Horizontal Rows Layout */}
        <div className="flex flex-col border-t border-white/10 mt-12">
          {investmentModules.plans.map((plan, index) => {
            const number = (index + 1).toString().padStart(2, '0')

            // Specific images aligned with the learning topics (Beginner, Advanced, Mentorship)
            const bgImages = [
              "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1920", // Beginner: Notepad, study, clean desk
              "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=1920", // Advanced: Finance, charts, numbers
              "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920"  // Mentorship: Discussion, teaching, mentoring
            ]
            const bgImage = bgImages[index % bgImages.length]

            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="group relative border-b border-white/10 overflow-hidden"
              >
                {/* Subtle Hidden Background Image that reveals visibly on hover */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  {/* The actual image */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                    <img
                      src={bgImage}
                      alt=""
                      className="w-full h-full object-cover opacity-0 group-hover:opacity-40 scale-[1.03] group-hover:scale-100 transition-all duration-1000 ease-[0.76,0,0.24,1]"
                    />
                  </div>
                  {/* Gradient overlays to ensure text readability */}
                  <div className="absolute inset-0 bg-[#050505]/95 group-hover:bg-[#050505]/50 transition-colors duration-700 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10" />
                </div>

                {/* Hover Fill Accent Line */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-700 ease-[0.76,0,0.24,1] z-10 pointer-events-none" />

                <div className="relative z-20 py-10 md:py-16 px-4 md:px-8 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">

                  {/* Order Number & Title Area */}
                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 lg:w-5/12 shrink-0">
                    <span className="text-5xl md:text-6xl lg:text-7xl font-black text-white/10 group-hover:text-[#BF953F]/40 transition-colors duration-500 tracking-tighter">
                      /{number}
                    </span>
                    <div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight group-hover:-translate-y-1 transition-transform duration-500">
                        {plan.title}
                      </h3>
                      <span className="inline-block text-[#BF953F] text-xs md:text-sm font-mono tracking-[0.2em] border border-[#BF953F]/30 px-3 py-1 rounded-full group-hover:bg-[#BF953F]/20 group-hover:border-[#BF953F]/50 transition-colors duration-500 backdrop-blur-sm">
                        {plan.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Description Area */}
                  <div className="lg:w-5/12">
                    <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                      {plan.description}
                    </p>
                  </div>

                  {/* Action Area */}
                  <div className="lg:w-2/12 flex justify-start lg:justify-end mt-4 lg:mt-0">
                    <Link
                      href="/modules"
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center relative overflow-hidden bg-white/5 group-hover:border-[#BF953F] transition-all duration-500"
                    >
                      <div className="absolute inset-0 bg-[#BF953F] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
                      <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-white relative z-10 group-hover:text-black group-hover:rotate-45 transition-all duration-500" />
                    </Link>
                  </div>

                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 md:mt-32 flex justify-center"
        >
          <Link
            href="/modules"
            className="group relative inline-flex items-center justify-center gap-6 px-10 py-6 bg-transparent border border-[#BF953F]/30 text-white rounded-full overflow-hidden transition-all duration-700 hover:border-[#BF953F]"
          >
            <div className="absolute inset-0 bg-[#BF953F] translate-y-full transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:translate-y-0" />
            <span className="relative z-10 font-bold tracking-wide transition-colors duration-500 text-lg uppercase group-hover:text-black">
              View All Learning Paths
            </span>
            <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-500">
              <ArrowRight className="w-6 h-6 text-[#BF953F] group-hover:text-black transition-colors duration-500" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
