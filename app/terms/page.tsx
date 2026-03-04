"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { FooterSection } from "@/components/footer-section"
import { FileText, Users, CreditCard, Ban, Scale, RefreshCw, MessageSquare, Gavel } from "lucide-react"
import { useEffect } from "react"

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing or using the Brightfolio Solutions website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.",
        "We reserve the right to modify these terms at any time. Continued use of our services after any changes constitutes acceptance of the new terms.",
        "These terms apply to all users of the website, including students, visitors, and any other individuals who access our platform."
      ]
    },
    {
      icon: Users,
      title: "User Accounts & Registration",
      content: [
        "To access certain features of our platform, you must create an account. You agree to provide accurate, current, and complete information during registration and keep your account information updated.",
        "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use.",
        "We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent, abusive, or illegal activities."
      ]
    },
    {
      icon: CreditCard,
      title: "Payments & Refunds",
      content: [
        "All course fees must be paid in full before accessing premium content. Prices are subject to change without notice, but changes will not affect existing enrollments.",
        "Refund requests must be submitted within 7 days of purchase. Refunds are subject to our refund policy and may be prorated based on course completion.",
        "We accept payments through secure third-party payment processors. By making a payment, you agree to the terms of the respective payment provider."
      ]
    },
    {
      icon: Ban,
      title: "Prohibited Activities",
      content: [
        "You may not share, distribute, or resell course materials without written permission. All content is protected by copyright and intellectual property laws.",
        "You may not use our services for any illegal purpose, to harass others, or to distribute malware, spam, or harmful content.",
        "Attempting to gain unauthorized access to our systems, other user accounts, or any part of our infrastructure is strictly prohibited."
      ]
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: [
        "All content on the Brightfolio Solutions platform, including courses, videos, text, graphics, logos, and software, is owned by us or our licensors and protected by intellectual property laws.",
        "You are granted a limited, non-exclusive, non-transferable license to access and use course materials for personal, non-commercial educational purposes only.",
        "You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any of our content without express written permission."
      ]
    },
    {
      icon: RefreshCw,
      title: "Service Availability",
      content: [
        "We strive to maintain continuous service availability but do not guarantee uninterrupted access. Scheduled maintenance and unforeseen technical issues may cause temporary disruptions.",
        "We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice or liability.",
        "We are not responsible for any loss or damage resulting from service interruptions, technical failures, or circumstances beyond our reasonable control."
      ]
    },
    {
      icon: MessageSquare,
      title: "User Content & Conduct",
      content: [
        "You may have opportunities to submit content such as comments, reviews, or forum posts. You retain ownership of your content but grant us a license to use, display, and distribute it on our platform.",
        "You are solely responsible for content you submit. Content must not be defamatory, obscene, illegal, or infringe on others' rights.",
        "We reserve the right to remove any user content that violates these terms or is otherwise objectionable, without prior notice."
      ]
    },
    {
      icon: Gavel,
      title: "Dispute Resolution",
      content: [
        "These terms are governed by the laws of India. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of courts in Gurgaon, Haryana.",
        "Before initiating legal proceedings, you agree to attempt to resolve disputes informally by contacting us. We will work in good faith to resolve any issues.",
        "Any claim must be brought within one year of the date the cause of action arose, or be permanently barred."
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
              <span className="text-[#BF953F] text-xs font-bold uppercase tracking-widest">Legal Agreement</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tighter text-white">
              Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] to-[#FCEABB]">Conditions</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              Please read these terms carefully. They govern your access to and use of the Brightfolio Solutions platform.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-white/40 font-mono">
              <span>Last Updated: January 2026</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Version 2.0</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            {/* Table of Contents style indicator */}
            <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

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
                      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-4">
                        <span className="text-white/10 text-xl font-mono block md:hidden">0{index + 1}</span>
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

                    {/* Visual Number Indicator Desktop */}
                    <div className="hidden md:block flex-shrink-0">
                      <span className="text-white/5 font-black text-6xl leading-none tracking-tighter group-hover:text-white/10 transition-colors duration-500">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Contact Card */}
              <motion.div
                variants={itemVariants}
                className="mt-12 bg-gradient-to-br from-[#0A0A0A] to-[#050505] border border-[#BF953F]/20 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(191,149,63,0.05)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#BF953F]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  <div className="space-y-4 max-w-xl">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5 text-[#BF953F]" />
                      <h2 className="text-2xl font-bold text-white tracking-tight">Need Clarification?</h2>
                    </div>
                    <p className="text-white/60 font-light leading-relaxed">
                      If you have any questions regarding these terms, our legal team is available to help.
                    </p>
                  </div>

                  <div className="w-full md:w-auto flex flex-col gap-3 bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-white/5 shrink-0">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-white/40 font-mono w-16">Email</span>
                      <a href="mailto:info@brightfoliosolutions.com" className="text-white hover:text-[#BF953F] transition-colors">info@brightfoliosolutions.com</a>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-white/40 font-mono w-16">Phone</span>
                      <a href="tel:+919217162001" className="text-white hover:text-[#BF953F] transition-colors">+91 92171 62001</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
