"use client"

import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"

export function RiskDisclaimerSection() {
  return (
    <section className="py-16 bg-[#050505] border-t border-yellow-500/10">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] border border-[#BF953F]/20 rounded-2xl p-8 md:p-12 text-center shadow-2xl"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center">
              <AlertCircle className="w-10 h-10 text-[#BF953F]" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-[#BF953F] mb-6 tracking-wide uppercase">Risk Disclaimer:</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Financial markets involve a high level of risk and may not be suitable for all investors.
            Brightfolio Solutions provides educational services only. We do not manage funds or provide
            investment advisory services. Past performance does not guarantee future results.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
