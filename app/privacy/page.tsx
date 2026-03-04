"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { FooterSection } from "@/components/footer-section"
import { Shield, Database, Eye, Lock, Bell, UserCheck, Globe, Mail } from "lucide-react"
import { useEffect } from "react"

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you register for our courses or services, we may collect your name, email address, phone number, billing address, and payment information. This information is necessary to provide you with our educational services."
        },
        {
          subtitle: "Usage Data",
          text: "We automatically collect information about how you interact with our website, including pages visited, time spent on pages, click patterns, and device information such as browser type, operating system, and IP address."
        },
        {
          subtitle: "Communication Data",
          text: "We retain records of communications between you and Brightfolio Solutions, including emails, support tickets, and feedback submissions."
        }
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "To provide, maintain, and improve our educational services, process transactions, send course materials, and provide customer support."
        },
        {
          subtitle: "Communication",
          text: "To send you updates about your courses, respond to inquiries, provide technical support, and send promotional materials (with your consent)."
        },
        {
          subtitle: "Analytics & Improvement",
          text: "To analyze usage patterns, understand user preferences, and improve our website, courses, and overall user experience."
        },
        {
          subtitle: "Legal Compliance",
          text: "To comply with legal obligations, resolve disputes, and enforce our terms of service."
        }
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures including SSL encryption, secure servers, and access controls to protect your personal information from unauthorized access, alteration, or destruction."
        },
        {
          subtitle: "Payment Security",
          text: "All payment transactions are processed through secure, PCI-compliant payment gateways. We do not store complete credit card information on our servers."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law."
        }
      ]
    },
    {
      icon: Globe,
      title: "Cookies & Tracking",
      content: [
        {
          subtitle: "Essential Cookies",
          text: "We use essential cookies to enable basic website functionality, remember your preferences, and maintain your session security."
        },
        {
          subtitle: "Analytics Cookies",
          text: "We use analytics tools like Google Analytics to understand how visitors use our website. This helps us improve our content and user experience."
        },
        {
          subtitle: "Marketing Cookies",
          text: "With your consent, we may use marketing cookies to deliver relevant advertisements and track the effectiveness of our marketing campaigns."
        }
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        {
          subtitle: "Access & Correction",
          text: "You have the right to access your personal data and request corrections if the information is inaccurate or incomplete."
        },
        {
          subtitle: "Data Deletion",
          text: "You may request deletion of your personal data, subject to legal retention requirements and legitimate business needs."
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly."
        },
        {
          subtitle: "Data Portability",
          text: "You have the right to receive a copy of your personal data in a structured, commonly used format."
        }
      ]
    },
    {
      icon: Bell,
      title: "Third-Party Sharing",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you (e.g., payment processors, email service providers)."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, regulation, legal process, or governmental request."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your personal information may be transferred to the acquiring entity."
        }
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
              <span className="text-[#BF953F] text-xs font-bold uppercase tracking-widest">Data & Security</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tighter text-white">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] to-[#FCEABB]">Policy</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-white/40 font-mono">
              <span>Effective Date: January 2026</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Version 1.2</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-6 bg-gradient-to-r from-transparent via-[#BF953F]/5 to-transparent border-y border-[#BF953F]/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-center">
            <Lock className="w-5 h-5 text-[#BF953F] shrink-0" />
            <p className="text-white/70 font-medium text-sm md:text-base">
              Your data is encrypted and securely stored. We never sell your personal information.
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
                  className="group bg-[#0A0A0A] bg-opacity-80 backdrop-blur-sm border border-white/5 rounded-3xl p-6 md:p-10 transition-colors duration-500 hover:border-[#BF953F]/20 hover:bg-[#0c0c0c]"
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* Icon Column */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-white/5 flex items-center justify-center group-hover:border-[#BF953F]/30 group-hover:shadow-[0_0_30px_rgba(191,149,63,0.1)] transition-all duration-500">
                        <section.icon className="w-6 h-6 text-[#BF953F]" />
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 space-y-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{section.title}</h2>

                      <div className="space-y-8 pt-2">
                        {section.content.map((item, iIndex) => (
                          <div key={iIndex} className="relative pl-4 border-l-2 border-white/5 group-hover:border-[#BF953F]/30 transition-colors duration-500">
                            <h3 className="text-white font-medium mb-2">{item.subtitle}</h3>
                            <p className="text-white/50 text-base font-light leading-relaxed">{item.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Special Sections Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {/* Children's Privacy */}
                <motion.div
                  variants={itemVariants}
                  className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 hover:border-[#BF953F]/20 transition-colors h-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#111] border border-white/5 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-[#BF953F]" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Children's Privacy</h2>
                  </div>
                  <p className="text-white/50 text-sm font-light leading-relaxed">
                    Our services are not intended for individuals under 18. We do not knowingly collect personal info from children. If you believe a child has provided us data, please contact us immediately.
                  </p>
                </motion.div>

                {/* Policy Updates */}
                <motion.div
                  variants={itemVariants}
                  className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 hover:border-[#BF953F]/20 transition-colors h-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#111] border border-white/5 flex items-center justify-center">
                      <Bell className="w-5 h-5 text-[#BF953F]" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Policy Updates</h2>
                  </div>
                  <p className="text-white/50 text-sm font-light leading-relaxed">
                    We may update this policy to reflect practice changes. Material changes will be posted here with an updated effective date. Continued use constitutes acceptance.
                  </p>
                </motion.div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-24 bg-[#020202] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-[#BF953F]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#111] to-[#050505] border border-white/5 rounded-full flex items-center justify-center mb-8 shadow-xl">
              <Mail className="w-8 h-8 text-[#BF953F]" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Data Rights & Requests</h2>
            <p className="text-white/50 mb-10 leading-relaxed font-light">
              Wish to exercise your data rights or have a question about our privacy protocols? Our dedicated team is here to help.
            </p>

            <a
              href="mailto:info@brightfoliosolutions.com"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-500 hover:scale-[1.02] hover:bg-[#BF953F] shadow-[0_0_40px_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_0_rgba(191,149,63,0.3)]"
            >
              Contact Privacy Team
              <Globe className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
