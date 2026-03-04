"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Is this course suitable for beginners?",
    answer: "Absolutely. Our Foundation program is designed specifically for those starting from scratch, walking you through everything from market basics to terminal setup before moving onto advanced concepts.",
  },
  {
    question: "Do you guarantee profits or returns?",
    answer: "No. Anyone guaranteeing profits in the financial markets is lying to you. Trading involves substantial risk. Our focus is strictly on providing high-quality education and teaching disciplined risk management.",
  },
  {
    question: "Are the training sessions live or recorded?",
    answer: "Both. We believe in the power of live interaction, so our core mentoring sessions are held live in real-time market conditions. However, all sessions are recorded and uploaded to your student portal for unlimited review.",
  },
  {
    question: "What markets do you teach?",
    answer: "While our core focus is on the Forex and Crypto markets due to their liquidity and structure, the price action and technical analysis strategies we teach are universally applicable to Stocks and Commodities as well.",
  },
  {
    question: "How long does it take to see results?",
    answer: "This is not a get-rich-quick scheme. Mastery takes time. Most students spend 3 to 6 months building their foundation and testing strategies on demo accounts before they feel comfortable executing live.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-40 bg-[#050505] relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#BF953F]/5 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left Column: Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md">
                <div className="w-1.5 h-1.5 rounded-full bg-[#BF953F] animate-pulse" />
                <span className="text-[#BF953F] text-xs font-bold uppercase tracking-[0.2em] pt-[1px]">
                  FAQ
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Common <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F]">
                  Questions.
                </span>
              </h2>

              <p className="text-white/50 text-lg font-light leading-relaxed mb-8">
                Everything you need to know about the Brightfolio mentorship programs and how we operate.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:w-2/3 w-full">
            <div className="flex flex-col border-t border-white/10">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} index={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const number = (index + 1).toString().padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-white/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-8 text-left group gap-6"
      >
        <div className="flex items-center gap-6 md:gap-10">
          <span className="text-sm md:text-base font-mono text-white/20 group-hover:text-[#BF953F]/60 transition-colors">
            {number}
          </span>
          <span className="text-lg md:text-2xl font-semibold text-white/90 group-hover:text-white transition-colors">
            {faq.question}
          </span>
        </div>

        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#BF953F]/10 group-hover:border-[#BF953F]/30 transition-colors">
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {isOpen ? (
              <Minus className="w-5 h-5 text-[#BF953F]" />
            ) : (
              <Plus className="w-5 h-5 text-white/50 group-hover:text-[#BF953F] transition-colors" />
            )}
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-12 md:pl-20 pr-4 md:pr-12 text-white/60 text-base md:text-lg font-light leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
