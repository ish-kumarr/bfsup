"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { FooterSection } from "@/components/footer-section"
import { AlertTriangle, BookOpen, Shield, Scale, Users, FileText } from "lucide-react"
import { useEffect } from "react"

export default function DisclaimerPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    {
      icon: BookOpen,
      title: "Educational Purpose Only",
      content: [
        "Brightfolio Solutions is an educational platform that provides trading and investment education services. All content, courses, webinars, and materials provided on this website are for educational and informational purposes only.",
        "The information presented does not constitute financial advice, investment advice, trading advice, or any other form of professional advice. We are educators, not financial advisors or investment managers.",
        "Nothing on this website should be construed as a recommendation to buy, sell, or hold any financial instrument, security, cryptocurrency, or investment product."
      ]
    },
    {
      icon: AlertTriangle,
      title: "Risk Disclosure",
      content: [
        "Trading in stocks, cryptocurrencies, and other financial instruments involves substantial risk of loss and is not suitable for all investors. The high degree of leverage that is often obtainable in trading can work against you as well as for you.",
        "Past performance is not indicative of future results. Historical returns, expected returns, and probability projections are provided for educational purposes and may not reflect actual future performance.",
        "You should carefully consider whether trading is suitable for you in light of your financial condition. You should be aware of all the risks associated with trading and seek advice from an independent financial advisor if you have any doubts."
      ]
    },
    {
      icon: Shield,
      title: "No Guarantee of Results",
      content: [
        "Brightfolio Solutions makes no representations or warranties regarding the accuracy, completeness, or reliability of any information provided. We do not guarantee any specific trading results or profits.",
        "The trading strategies, techniques, and methods taught in our courses are based on historical data and market analysis. There is no assurance that these strategies will produce profitable results in the future.",
        "Individual results may vary significantly. Your success depends on various factors including market conditions, your skill level, risk management, discipline, and capital allocation."
      ]
    },
    {
      icon: Scale,
      title: "Regulatory Compliance",
      content: [
        "Brightfolio Solutions is a trading education company and is not registered as a broker, dealer, investment advisor, or portfolio manager with any regulatory authority including SEBI (Securities and Exchange Board of India).",
        "We do not manage client funds, provide investment management services, or execute trades on behalf of clients. Our services are limited to education and training.",
        "Users are responsible for ensuring compliance with all applicable laws and regulations in their jurisdiction when engaging in trading activities."
      ]
    },
    {
      icon: Users,
      title: "Third-Party Content",
      content: [
        "Our website may contain links to third-party websites, resources, or content. These links are provided for convenience and informational purposes only.",
        "Brightfolio Solutions does not endorse, guarantee, or assume responsibility for any third-party content, products, or services. We have no control over the content, privacy policies, or practices of any third-party sites.",
        "Any testimonials or success stories shared on our platform represent individual experiences and should not be considered typical results."
      ]
    },
    {
      icon: FileText,
      title: "Limitation of Liability",
      content: [
        "To the fullest extent permitted by law, Brightfolio Solutions, its directors, employees, partners, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our educational services.",
        "This includes, but is not limited to, any losses incurred from trading decisions made based on information obtained through our courses, webinars, or any other educational materials.",
        "By using our services, you acknowledge that trading involves substantial risk and agree to hold Brightfolio Solutions harmless from any claims arising from your trading activities."
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[#BF953F]/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* Deep Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#BF953F]/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BF953F]/10 border border-[#BF953F]/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#BF953F] animate-pulse" />
              <span className="text-[#BF953F] text-xs font-bold uppercase tracking-widest">Notice</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tighter text-white">
              Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] to-[#FCEABB]">Disclaimer</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              By accessing our website and educational materials, you acknowledge and agree to the terms outlined below.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-white/40 font-mono">
              <span>Last Updated: January 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Notice Banner */}
      <section className="py-6 bg-gradient-to-r from-[#BF953F]/0 via-[#BF953F]/5 to-[#BF953F]/0 border-y border-[#BF953F]/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-center">
            <AlertTriangle className="w-5 h-5 text-[#BF953F] shrink-0" />
            <p className="text-[#FCEABB] font-medium text-sm md:text-base tracking-wide">
              WARNING: Trading involves significant risk. Only trade with capital you can afford to lose.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-6 md:space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  variants={itemVariants}
                  className="group bg-[#0A0A0A] border border-white/5 rounded-3xl p-6 md:p-10 transition-colors duration-500 hover:border-[#BF953F]/20 hover:bg-[#0c0c0c]"
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* Icon Column */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-white/5 flex items-center justify-center group-hover:border-[#BF953F]/30 group-hover:shadow-[0_0_30px_rgba(191,149,63,0.1)] transition-all duration-500">
                        <section.icon className="w-6 h-6 text-[#BF953F]" />
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 space-y-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {section.title}
                      </h2>
                      <div className="space-y-4 pt-2">
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-white/60 text-base font-light leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#020202] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-[#BF953F]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Questions About This Disclaimer?</h2>
            <p className="text-white/50 mb-10 leading-relaxed font-light">
              We are committed to operating with complete transparency. If you have questions about the risks involved, contact us.
            </p>
            <a
              href="mailto:info@brightfoliosolutions.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-500 hover:scale-[1.02] hover:bg-[#BF953F] shadow-[0_0_40px_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_0_rgba(191,149,63,0.3)]"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
