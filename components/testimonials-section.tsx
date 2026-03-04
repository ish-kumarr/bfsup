"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Quote, Star, MapPin } from "lucide-react"
import { landingPageData } from "@/lib/data"

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Subtle parallax for background elements
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])
  const { testimonialsSection } = landingPageData

  return (
    <section ref={containerRef} id="testimonials" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">

      {/* Immersive Glow */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#BF953F]/10 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-x-1/2" />
      </motion.div>

      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#BF953F] animate-pulse" />
            <span className="text-[#BF953F] text-xs font-bold uppercase tracking-[0.2em] pt-[1px]">
              {testimonialsSection.tagline}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6 tracking-tight"
          >
            Learn From Those Who've <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F]">
              Succeeded.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg font-light leading-relaxed max-w-2xl"
          >
            {testimonialsSection.subHeading}
          </motion.p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
          {testimonialsSection.reviews.map((review, index) => (
            <motion.div
              key={`review-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <TestimonialCard review={review} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

function TestimonialCard({ review }: { review: any }) {
  return (
    <div className="group relative rounded-[2rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] p-8 md:p-10 transition-all duration-500 hover:border-[#BF953F]/30 hover:bg-[#0a0a0a]/50 hover:shadow-[0_0_40px_rgba(191,149,63,0.05)] hover:-translate-y-1 backdrop-blur-sm overflow-hidden">

      {/* Decorative Quote mark */}
      <Quote className="absolute top-8 right-8 w-20 h-20 text-white/[0.02] group-hover:text-[#BF953F]/[0.05] transition-colors duration-500 -rotate-12" />

      <div className="relative z-10 flex flex-col">
        <div className="flex gap-1 mb-8">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-[#BF953F] fill-[#BF953F]" />
          ))}
        </div>

        <p className="text-white/80 text-base md:text-lg font-light leading-relaxed mb-10">
          "{review.feedback}"
        </p>

        <div className="flex items-center gap-4 pt-6 border-t border-white/[0.05] mt-auto">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=0a0a0a&color=BF953F&size=100&bold=true`}
            alt={review.name}
            className="w-12 h-12 rounded-full border border-white/10 group-hover:border-[#BF953F]/50 transition-colors"
          />
          <div>
            <p className="font-semibold text-white/90 text-base leading-none mb-1.5">{review.name}</p>
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-white/40 uppercase tracking-widest mt-0.5">
              <MapPin className="w-3 h-3 text-[#BF953F]" />
              {review.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
