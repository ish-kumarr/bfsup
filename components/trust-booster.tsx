"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export function TrustBooster() {
  const boosters = [
    "Structured Curriculum",
    "Live Mentorship",
    "Risk Management Focus",
    "Community Support",
    "Practical Market Execution",
  ]

  return (
    <section className="py-12 bg-[#050505] border-y border-yellow-500/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {boosters.map((booster, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <CheckCircle className="w-5 h-5 text-[#BF953F]" />
              <span className="text-white font-medium tracking-wide">✔ {booster}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
