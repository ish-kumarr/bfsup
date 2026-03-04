"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, AlertTriangle, ShieldCheck, Lock, Award, Users } from "lucide-react"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import { landingPageData } from "@/lib/data"

const footerData = {
  column1_Brand: {
    description: "Empowering aspiring traders with knowledge, skills, and strategies to succeed in financial markets.",
    socialIcons: [
      { platform: "Instagram", url: "#", icon: Instagram },
      { platform: "Twitter", url: "#", icon: Twitter },
      { platform: "LinkedIn", url: "#", icon: Linkedin },
      { platform: "Facebook", url: "#", icon: Facebook },
    ],
  },
  column2_QuickLinks: {
    heading: "Navigation",
    links: [
      { label: "Home", url: "/" },
      { label: "About Us", url: "/#about" },
      { label: "Our Programs", url: "/#modules" },
      { label: "FAQ", url: "/#faq" },
    ],
  },
  column3_LegalPages: {
    heading: "Legal",
    links: [
      { label: "Terms & Conditions", url: "/terms" },
      { label: "Privacy Policy", url: "/privacy" },
      { label: "Disclaimer", url: "/disclaimer" },
    ],
  },
  column4_Contact: {
    heading: "Contact",
    details: {
      address: "Unit 220, 2nd floor JMD Megapolis, Sohna Road, Gurgaon, Haryana.",
      phone: "+91 92171 62001",
      email: "info@brightfoliosolutions.com",
    },
  },
  disclaimer: {
    text: "Trading involves substantial risk. Educational content only; not financial advice. Trade only with capital you can afford to lose.",
  },
}

export function FooterSection() {
  const { meta } = landingPageData

  return (
    <footer className="bg-[#020202] relative border-t border-white/10">
      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#BF953F]/[0.02] rounded-[100%] blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">

        {/* Compact Trust Banner */}
        <div className="py-8 border-b border-white/5 flex flex-wrap items-center justify-center lg:justify-between gap-6 md:gap-8">
          {[
            { icon: ShieldCheck, title: "Premium Education", sub: "Proven Strategies" },
            { icon: Lock, title: "100% Secure", sub: "256-Bit SSL Encryption" },
            { icon: Users, title: "10,000+ Students", sub: "Global Community" },
            { icon: Award, title: "Industry Experts", sub: "Trading Professionals" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.icon className="w-6 h-6 text-[#BF953F]" />
              <div>
                <h4 className="text-white text-sm font-semibold">{item.title}</h4>
                <p className="text-white/40 text-[10px] uppercase tracking-wider">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-black text-white tracking-tight">
                Brightfolio<span className="text-[#BF953F]">.</span>
              </h2>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {footerData.column1_Brand.description}
            </p>
            <div className="flex gap-3">
              {footerData.column1_Brand.socialIcons.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-black hover:bg-[#BF953F] hover:border-[#BF953F] transition-all"
                    aria-label={social.platform}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">{footerData.column2_QuickLinks.heading}</h3>
            <ul className="space-y-3">
              {footerData.column2_QuickLinks.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.url} className="text-white/50 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">{footerData.column3_LegalPages.heading}</h3>
            <ul className="space-y-3">
              {footerData.column3_LegalPages.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.url} className="text-white/50 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">{footerData.column4_Contact.heading}</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin className="w-4 h-4 text-[#BF953F] shrink-0 mt-0.5" />
                <span className="text-white/50">{footerData.column4_Contact.details.address}</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone className="w-4 h-4 text-[#BF953F] shrink-0" />
                <a href={`tel:${footerData.column4_Contact.details.phone}`} className="text-white/50 hover:text-white">
                  {footerData.column4_Contact.details.phone}
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail className="w-4 h-4 text-[#BF953F] shrink-0" />
                <a href={`mailto:${footerData.column4_Contact.details.email}`} className="text-white/50 hover:text-white">
                  {footerData.column4_Contact.details.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Compact Disclaimer Area */}


      </div> <div className="py-8 border-t border-white/5 flex flex-col items-center justify-center text-center px-4">
        <AlertTriangle className="w-6 h-6 text-[#BF953F] shrink-0 mb-3" />
        <p className="text-white/40 text-xs leading-relaxed max-w-4xl mx-auto">
          <strong className="text-white/60 tracking-widest uppercase text-[10px] block mb-2">Risk Warning</strong>
          {footerData.disclaimer.text}
        </p>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-black pt-4 pb-24 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-[11px] font-mono">
            © {new Date().getFullYear()} {meta.siteName}. All rights reserved.
          </p>
          <span className="text-[#BF953F] text-[10px] uppercase font-bold tracking-widest hidden sm:block">
            Educational Purposes Only
          </span>
        </div>
      </div>

    </footer>
  )
}
