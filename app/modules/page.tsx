"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Star, Check, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { FooterSection } from "@/components/footer-section"
import { ProfitSharingCalculator } from "@/components/profit-sharing-calculator"
import { FixedReturnCalculator } from "@/components/fixed-return-calculator"

export default function ModulesPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-[#020202] text-white selection:bg-[#BF953F]/30 overflow-hidden">
      <Navbar />

      {/* Fresh Awwwards-Style Hero */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Abstract Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full bg-gradient-to-b from-[#BF953F]/20 to-transparent blur-[120px] opacity-50 pointer-events-none" />

          {/* Subtle Grid overlay for technical/trading feel */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <p className="text-[#BF953F] text-xs md:text-sm uppercase tracking-[0.3em] font-bold mb-8">
              Trading Programs
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black leading-[1.05] md:leading-[0.9] tracking-tighter mb-8 uppercase">
              Module<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F]">Mastery</span>
            </h1>
            <p className="text-white/40 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed mb-12">
              Elevate your financial acumen. Select a dedicated trading module designed for absolute precision and market dominance.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <button
                onClick={() => {
                  document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group relative inline-flex items-center justify-center gap-4 px-8 py-5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 backdrop-blur-md overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#BF953F]/0 via-[#BF953F]/10 to-[#BF953F]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="text-sm uppercase tracking-widest font-semibold text-white group-hover:text-[#BF953F] transition-colors">Explore Programs</span>
                <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-[#BF953F] group-hover:translate-x-1 transition-all" />
              </button>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* 3 Paths Overview */}
      <section className="py-24 md:py-32 bg-[#020202] relative z-20 border-t border-white/5 overflow-hidden">
        {/* Abstract Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#BF953F]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase mb-4">
              Three Trading <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] to-[#FCF6BA]">Modules</span>
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto font-light leading-relaxed text-lg">
              Tap into the <strong className="text-white">massive global financial markets</strong>. Whether you want to trade yourself, have our experts manage it for <strong className="text-[#BF953F]">36%-48% annual targets</strong>, or seek consistent daily yields up to a <strong className="text-purple-400">220% max cap</strong>—we have the perfect structure for your capital.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 min-h-[500px]">
            {/* Path 1: Self Trading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-[480px] perspective-1000"
            >
              <div className={`w-full h-full relative preserve-3d transition-transform duration-1000 lg:group-hover:rotate-y-180 ${flippedCard === 1 ? 'rotate-y-180' : ''}`}>

                {/* FRONT */}
                <div className={`absolute inset-0 backface-hidden rounded-[2.5rem] overflow-hidden flex flex-col border border-white/[0.05] shadow-[0_0_40px_rgba(255,255,255,0.02)] ${flippedCard === 1 ? 'pointer-events-none lg:pointer-events-auto' : ''}`}>
                  <div className="absolute inset-0 z-0 bg-[#050505]">
                    <Image
                      src="/professional-financial-trading-team-meeting-in-mod.jpg"
                      alt="Self Trading"
                      fill
                      className="object-cover scale-100 opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/50 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />
                    <div className="absolute inset-0 bg-blue-500/5 mix-blend-color" />
                  </div>
                  <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-auto">
                      <div className="px-4 py-2 rounded-full bg-[#020202]/60 backdrop-blur-xl border border-white/10 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,247,0.8)]" />
                        <span className="text-white/90 text-[10px] uppercase tracking-widest font-black">Module 01</span>
                      </div>
                    </div>
                    <div className="mt-auto relative z-10 w-full text-center pb-4">
                      <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2 text-shadow-lg">Self Trading</h3>
                      <p className="text-white/60 text-sm tracking-widest uppercase font-bold hidden lg:block">Hover to explore</p>
                      <button onClick={() => setFlippedCard(flippedCard === 1 ? null : 1)} className="lg:hidden mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold text-white active:scale-95 transition-all">Tap to explore</button>
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-[2.5rem] overflow-hidden flex flex-col border border-blue-500/30 bg-[#050505]/90 backdrop-blur-2xl shadow-[0_0_50px_rgba(59,130,246,0.15)] ${flippedCard !== 1 ? 'pointer-events-none lg:pointer-events-auto' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-50 pointer-events-none" />
                  <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-center">
                    <h3 className="text-2xl font-black text-white mb-6 tracking-tight text-center">Self Trading Features</h3>
                    <ul className="space-y-4 text-sm text-white/80">
                      <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                        <p><strong className="text-white">Account & Ownership:</strong> Registered strictly in the client's own name.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                        <p><strong className="text-white">Control:</strong> All trades are executed solely by the client.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                        <p><strong className="text-white">Risk & Reward:</strong> Entire profit and loss borne by the client (100% earnings).</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                        <p><strong className="text-white">Support System:</strong> Education courses, counseling, copy trading, and algorithmic trading assistance provided.</p>
                      </li>
                    </ul>
                    <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setFlippedCard(null); }} className="relative z-50 lg:hidden mt-6 w-full py-3 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold text-white active:scale-95 transition-all">Go Back</button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Path 2: Profit Sharing (Highlighted) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group h-[480px] perspective-1000 md:-translate-y-8 z-10"
            >
              <div className={`w-full h-full relative preserve-3d transition-transform duration-1000 lg:group-hover:rotate-y-180 ${flippedCard === 2 ? 'rotate-y-180' : ''}`}>

                {/* FRONT */}
                <div className={`absolute inset-0 backface-hidden rounded-[2.5rem] overflow-hidden flex flex-col border border-[#BF953F]/40 shadow-[0_0_40px_rgba(191,149,63,0.15)] ${flippedCard === 2 ? 'pointer-events-none lg:pointer-events-auto' : ''}`}>
                  <div className="absolute inset-0 z-0 bg-[#020202]">
                    <Image
                      src="/professional-trading-dashboard-with-charts-and-ana.jpg"
                      alt="Profit Sharing"
                      fill
                      className="object-cover scale-100 opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/30 to-black/40" />
                    <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#BF953F]/20 to-transparent mix-blend-screen opacity-50 pointer-events-none" />
                  </div>
                  <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-auto">
                      <div className="px-4 py-2 rounded-full bg-[#BF953F]/20 backdrop-blur-xl border border-[#BF953F]/50 flex items-center gap-2 shadow-[0_0_20px_rgba(191,149,63,0.5)]">
                        <Star className="w-3 h-3 text-[#FCF6BA] fill-[#FCF6BA]" />
                        <span className="text-[#FCF6BA] text-[10px] uppercase tracking-widest font-black">Module 02</span>
                      </div>
                    </div>
                    <div className="mt-auto relative z-10 w-full text-center pb-4">
                      <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F] tracking-tight mb-2 drop-shadow-lg">Profit Sharing</h3>
                      <p className="text-[#FCF6BA]/60 text-sm tracking-widest uppercase font-bold hidden lg:block">Recommended &middot; Hover</p>
                      <button onClick={() => setFlippedCard(flippedCard === 2 ? null : 2)} className="lg:hidden mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#BF953F]/50 bg-[#BF953F]/20 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold text-[#FCF6BA] active:scale-95 transition-all">Tap to explore</button>
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-[2.5rem] overflow-hidden flex flex-col border border-[#BF953F]/80 bg-[#050505]/95 backdrop-blur-2xl shadow-[0_20px_80px_-15px_rgba(191,149,63,0.4)] ${flippedCard !== 2 ? 'pointer-events-none lg:pointer-events-auto' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#BF953F]/10 to-transparent opacity-100 pointer-events-none" />
                  <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-center">
                    <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] mb-6 tracking-tight text-center">Profit Sharing Details</h3>
                    <ul className="space-y-4 text-sm text-[#FCF6BA]/80">
                      <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#BF953F] mt-0.5 shrink-0" />
                        <p><strong className="text-white">Account Safety:</strong> Trading account and KYC remain entirely in your name. Funds stay secure.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#BF953F] mt-0.5 shrink-0" />
                        <p><strong className="text-white">Execution:</strong> Trades executed entirely by the company's expert trading team on your behalf.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#BF953F] mt-0.5 shrink-0" />
                        <p><strong className="text-white">Sharing Ratio:</strong> Profit and loss shared cleanly 50:50.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#BF953F] mt-0.5 shrink-0" />
                        <p><strong className="text-white">Expected Returns:</strong> Targeted average annual return of 36% to 48%.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#BF953F] mt-0.5 shrink-0" />
                        <p><strong className="text-white">Withdrawal:</strong> Withdraw anytime (requires minimum 40-day notice).</p>
                      </li>
                    </ul>
                    <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setFlippedCard(null); }} className="relative z-50 lg:hidden mt-6 w-full py-3 rounded-full border border-[#BF953F]/40 bg-[#BF953F]/20 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold text-[#FCF6BA] active:scale-95 transition-all">Go Back</button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Path 3: Fixed Return */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-[480px] perspective-1000"
            >
              <div className={`w-full h-full relative preserve-3d transition-transform duration-1000 lg:group-hover:rotate-y-180 ${flippedCard === 3 ? 'rotate-y-180' : ''}`}>

                {/* FRONT */}
                <div className={`absolute inset-0 backface-hidden rounded-[2.5rem] overflow-hidden flex flex-col border border-white/[0.05] shadow-[0_0_40px_rgba(255,255,255,0.02)] ${flippedCard === 3 ? 'pointer-events-none lg:pointer-events-auto' : ''}`}>
                  <div className="absolute inset-0 z-0 bg-[#050505]">
                    <Image
                      src="/modern-financial-trading-office-with-multiple-moni.jpg"
                      alt="Fixed Return"
                      fill
                      className="object-cover scale-100 opacity-50 grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/50 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />
                  </div>
                  <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-auto">
                      <div className="px-4 py-2 rounded-full bg-[#020202]/60 backdrop-blur-xl border border-white/10 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                        <span className="text-white/90 text-[10px] uppercase tracking-widest font-black">Module 03</span>
                      </div>
                    </div>
                    <div className="mt-auto relative z-10 w-full text-center pb-4">
                      <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2 text-shadow-lg">Fixed Return</h3>
                      <p className="text-white/60 text-sm tracking-widest uppercase font-bold hidden lg:block">Hover to explore</p>
                      <button onClick={() => setFlippedCard(flippedCard === 3 ? null : 3)} className="lg:hidden mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold text-white active:scale-95 transition-all">Tap to explore</button>
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-[2.5rem] overflow-hidden flex flex-col border border-purple-500/30 bg-[#050505]/95 backdrop-blur-2xl shadow-[0_0_50px_rgba(168,85,247,0.15)] ${flippedCard !== 3 ? 'pointer-events-none lg:pointer-events-auto' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-50 pointer-events-none" />
                  <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-center">
                    <h3 className="text-2xl font-black text-purple-200 mb-6 tracking-tight text-center">GreenTik Packages</h3>
                    <ul className="space-y-4 text-sm text-white/80">
                      <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                        <p><strong className="text-white">Daily Consistency:</strong> Fixed returns ranging from 0.2% to 0.5% every day (5 days a week).</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                        <p><strong className="text-white">Total Caps:</strong> Maximum returns stretch from 180% to 220% depending on your chosen tier.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                        <p><strong className="text-white">Package Range:</strong> Options from Pioneer ($100) all the way up to Apex Pro ($10,000).</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                        <p><strong className="text-white">Value Add:</strong> Includes complimentary educational course access for each package.</p>
                      </li>
                    </ul>
                    <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setFlippedCard(null); }} className="relative z-50 lg:hidden mt-6 w-full py-3 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold text-white active:scale-95 transition-all">Go Back</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Architecture - Immersive Horizontal Layout */}
      <section id="programs" className="min-h-screen py-32 relative border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-[#BF953F] text-xs uppercase tracking-[0.3em] font-bold mb-4">The Modules Architecture</p>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight uppercase">
                Trading<br />Modules
              </h2>
            </div>
            <p className="text-white/40 max-w-sm font-light leading-relaxed">
              Our modules are designed to offer you the perfect balance of control, expert execution, and consistent returns.
            </p>
          </div>

          <div className="flex flex-col">
            {/* 01: Beginner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border-t border-white/10 py-16 md:py-24 hover:border-[#BF953F]/50 transition-colors duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#BF953F]/0 to-[#BF953F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="grid lg:grid-cols-12 gap-12 relative z-10 items-start">
                <div className="lg:col-span-3">
                  <span className="text-6xl md:text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-700 select-none block mb-6">01</span>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-[10px] uppercase tracking-widest text-white/70 font-semibold">Self Trading</span>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-500">
                    Self Trading Module
                  </h3>
                  <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed mb-8">
                    Execute trades solely by yourself. Keep 100% of your profits and bear 100% of the risk. We provide education, copy trading, and algo trading support if needed.
                  </p>

                  <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/5">
                    <div>
                      <p className="text-white/30 text-[10px] uppercase tracking-wider mb-2 font-bold">Expert Support</p>
                      <p className="text-white/80 font-medium">Available</p>
                    </div>
                    <div>
                      <p className="text-white/30 text-[10px] uppercase tracking-wider mb-2 font-bold">Profit Share</p>
                      <p className="text-white/80 font-medium">100% Yours</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 flex lg:justify-end items-center lg:h-full mt-8 lg:mt-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  <Link href="#module-01" className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#BF953F] group-hover:bg-[#BF953F]/10 transition-all duration-500 group/btn">
                    <ArrowRight className="w-6 h-6 text-white group-hover:text-[#BF953F] group-hover/btn:-rotate-45 transition-all duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* 02: Advanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border-t border-white/10 py-16 md:py-24 hover:border-[#BF953F]/50 transition-colors duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#BF953F]/0 to-[#BF953F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#BF953F]/10 rounded-full blur-[120px] pb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-y-1/2 pointer-events-none" />

              <div className="grid lg:grid-cols-12 gap-12 relative z-10 items-start">
                <div className="lg:col-span-3">
                  <span className="text-6xl md:text-8xl font-black text-white/5 group-hover:text-[#BF953F]/20 transition-colors duration-700 select-none block mb-6">02</span>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#BF953F]/10 border border-[#BF953F]/30 rounded-full shadow-[0_0_15px_rgba(191,149,63,0.2)]">
                    <Star className="w-3 h-3 text-[#BF953F] fill-[#BF953F]" />
                    <span className="text-[10px] uppercase tracking-widest text-[#BF953F] font-bold">Most Popular</span>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#BF953F] group-hover:via-[#FCF6BA] group-hover:to-[#BF953F] transition-all duration-500">
                    Profit Sharing Module
                  </h3>
                  <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed mb-8">
                    Your account, your funds. Let our expert trading team execute trades on your behalf. Target an average annual return of 36% to 48%. Withdraw funds anytime with a 40-day notice.
                  </p>

                  <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/5 group-hover:border-[#BF953F]/20 transition-colors duration-500">
                    <div>
                      <p className="text-white/30 group-hover:text-[#BF953F]/60 text-[10px] uppercase tracking-wider mb-2 font-bold transition-colors">Profit Split</p>
                      <p className="text-white/80 font-medium">50:50</p>
                    </div>
                    <div>
                      <p className="text-white/30 group-hover:text-[#BF953F]/60 text-[10px] uppercase tracking-wider mb-2 font-bold transition-colors">Target Return</p>
                      <p className="text-white/80 font-medium">36%-48% Yearly</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 flex lg:justify-end items-center lg:h-full mt-8 lg:mt-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  <Link href="#module-02" className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#BF953F] group-hover:bg-[#BF953F]/10 transition-all duration-500 group/btn bg-[#BF953F]/5 shadow-[0_0_20px_rgba(191,149,63,0)] group-hover:shadow-[0_0_30px_rgba(191,149,63,0.3)]">
                    <ArrowRight className="w-6 h-6 text-[#BF953F] group-hover/btn:-rotate-45 transition-all duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* 03: Elite */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border-y border-white/10 py-16 md:py-24 hover:border-[#BF953F]/50 transition-colors duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#BF953F]/0 to-[#BF953F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="grid lg:grid-cols-12 gap-12 relative z-10 items-start">
                <div className="lg:col-span-3">
                  <span className="text-6xl md:text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-700 select-none block mb-6">03</span>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span className="text-[10px] uppercase tracking-widest text-white/70 font-semibold">GreenTik</span>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-500">
                    Fixed Return Packages
                  </h3>
                  <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed mb-8">
                    Invest in Pioneer, Elite, Titan, Zenith, Ascendant, Legend, or Apex packages. Receive daily returns from 0.2% to 0.5% up to a total of 180% to 220% maximum return.
                  </p>

                  <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/5">
                    <div>
                      <p className="text-white/30 text-[10px] uppercase tracking-wider mb-2 font-bold">Daily Return</p>
                      <p className="text-white/80 font-medium">0.2% - 0.5%</p>
                    </div>
                    <div>
                      <p className="text-white/30 text-[10px] uppercase tracking-wider mb-2 font-bold">Max Return</p>
                      <p className="text-white/80 font-medium">Up to 220%</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 flex lg:justify-end items-center lg:h-full mt-8 lg:mt-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  <Link href="#module-03" className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#BF953F] group-hover:bg-[#BF953F]/10 transition-all duration-500 group/btn">
                    <ArrowRight className="w-6 h-6 text-white group-hover:text-[#BF953F] group-hover/btn:-rotate-45 transition-all duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* DEEP DIVE SECTIONS: 3 Dedicated Module Breakdowns  */}
      {/* ---------------------------------------------------- */}

      {/* Deep Dive 01: Self Trading */}
      <section id="module-01" className="py-20 lg:py-32 relative bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span className="text-[10px] uppercase tracking-widest text-blue-300 font-bold">Module 01 Breakdown</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 lg:mb-8 leading-[0.9]">
                Self <br className="hidden lg:block" />Trading
              </h2>
              <p className="text-white/50 text-lg lg:text-xl font-light leading-relaxed mb-8 lg:mb-10 max-w-lg">
                For the independent trader. Retain absolute control over your capital and capture 100% of your gains in a completely decentralized market.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 mt-1">
                    <Check className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Total Account Ownership</h4>
                    <p className="text-white/40 text-sm leading-relaxed">Your trading account and KYC are registered strictly under your name. Your funds, your control.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 mt-1">
                    <Check className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">100% Retained Profits</h4>
                    <p className="text-white/40 text-sm leading-relaxed">Because you execute the trades, you bear the risk, and you keep 100% of the upside. No profit splits.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 mt-1">
                    <Check className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Education & Algo Support</h4>
                    <p className="text-white/40 text-sm leading-relaxed">Access educational courses, copy trading setups, and algorithmic assistance if you need an edge.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-full min-h-[300px] lg:min-h-[500px] w-full lg:order-last order-first rounded-3xl overflow-hidden border border-white/5 bg-[#020202]">
              <Image src="/professional-financial-trading-team-meeting-in-mod.jpg" alt="Self Trading" fill className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive 02: Profit Sharing */}
      <section id="module-02" className="py-20 lg:py-32 relative bg-[#020202] border-t border-white/5 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-[#BF953F]/5 rounded-full blur-[100px] lg:blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
          <div className="text-center mb-10 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#BF953F]/10 border border-[#BF953F]/30 rounded-full mb-6 relative">
              <Star className="w-3 h-3 text-[#FCF6BA] fill-[#FCF6BA]" />
              <span className="text-[10px] uppercase tracking-widest text-[#FCF6BA] font-bold">Module 02 Breakdown</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F] uppercase tracking-tighter mb-6 lg:mb-8 leading-[0.9] whitespace-nowrap">
              Profit <br className="hidden lg:block" />Sharing
            </h2>
            <p className="text-white/50 text-lg lg:text-xl font-light leading-relaxed mb-8 lg:mb-10 max-w-2xl mx-auto">
              Leverage our institutional expertise. Your funds remain in your account, while our trading team executes on your behalf targeting aggressive annual growth.
            </p>
            <ul className="grid md:grid-cols-3 gap-6 lg:gap-8 text-center max-w-4xl mx-auto">
              <li className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#BF953F]/10 flex items-center justify-center shrink-0 border border-[#BF953F]/30">
                  <Check className="w-5 h-5 text-[#BF953F]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">50:50 Clean Split</h4>
                  <p className="text-white/40 text-sm leading-relaxed">Profits generated by our expert team are shared equally.</p>
                </div>
              </li>
              <li className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#BF953F]/10 flex items-center justify-center shrink-0 border border-[#BF953F]/30">
                  <Check className="w-5 h-5 text-[#BF953F]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">36% - 48% Target Return</h4>
                  <p className="text-white/40 text-sm leading-relaxed">We aim to consistently deliver high-yield performance annually.</p>
                </div>
              </li>
              <li className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#BF953F]/10 flex items-center justify-center shrink-0 border border-[#BF953F]/30">
                  <Check className="w-5 h-5 text-[#BF953F]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">On-Demand Liquidity</h4>
                  <p className="text-white/40 text-sm leading-relaxed">Maintain access to your capital. Withdrawals require a 40-day notice.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <ProfitSharingCalculator />
          </div>
        </div>
      </section>

      {/* Deep Dive 03: Fixed Return */}
      <section id="module-03" className="py-20 lg:py-32 relative bg-[#050505] border-t border-white/5 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-emerald-600/5 rounded-full blur-[100px] lg:blur-[150px] -translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
          <div className="text-center mb-10 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] uppercase tracking-widest text-emerald-300 font-bold">Module 03 Breakdown</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 lg:mb-8 leading-[0.9] whitespace-nowrap">
              Fixed <br className="hidden lg:block" />Return
            </h2>
            <p className="text-white/50 text-lg lg:text-xl font-light leading-relaxed mb-8 lg:mb-10 max-w-2xl mx-auto">
              Predictable, daily compounding logic. GreenTik packages offer fixed daily yields up to an impressive absolute maximum return cap.
            </p>
            <ul className="grid md:grid-cols-3 gap-6 lg:gap-8 text-center max-w-4xl mx-auto">
              <li className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Check className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">0.2% to 0.5% Daily</h4>
                  <p className="text-white/40 text-sm leading-relaxed">Consistent daily returns (5 days a week) scaled to your tier level.</p>
                </div>
              </li>
              <li className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Check className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Up to 220% Max Return</h4>
                  <p className="text-white/40 text-sm leading-relaxed">Your fixed daily rate continues to accumulate until hitting the tier's hard cap.</p>
                </div>
              </li>
              <li className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Check className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Complimentary Education</h4>
                  <p className="text-white/40 text-sm leading-relaxed">GreenTik packages from Pioneer to Apex Pro include varied course access.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <FixedReturnCalculator />
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-32 relative border-t border-white/5 bg-[#020202]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-24">
            <p className="text-[#BF953F] text-xs uppercase tracking-[0.3em] font-bold mb-4">Path Comparison</p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Compare <br className="md:hidden" />Programs
            </h2>
          </div>

          <div className="overflow-x-auto pb-8">
            <div className="min-w-[800px] w-full">
              {/* Header Row */}
              <div className="grid grid-cols-4 gap-4 mb-4 pb-6 border-b border-white/10">
                <div className="col-span-1"></div>
                <div className="text-center font-bold text-white/50 uppercase tracking-widest text-xs">Self Trading</div>
                <div className="text-center font-bold text-[#BF953F] uppercase tracking-widest text-xs relative">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] bg-[#BF953F]/20 text-[#BF953F] px-2 py-0.5 rounded-full whitespace-nowrap lg:block hidden">Recommended</span>
                  Profit Sharing
                </div>
                <div className="text-center font-bold text-white/50 uppercase tracking-widest text-xs">Fixed Return</div>
              </div>

              {/* Feature Rows */}
              <div className="flex flex-col gap-2">
                {[
                  { feature: "Account & KYC in Client's Name", levels: [true, true, false] },
                  { feature: "Client Executes Trades", levels: [true, false, false] },
                  { feature: "Expert Team Execution", levels: [false, true, true] },
                  { feature: "Full Profit & Loss Ownership", levels: [true, false, false] },
                  { feature: "50:50 Profit & Loss Sharing", levels: [false, true, false] },
                  { feature: "Fixed Daily Returns (0.2% - 0.5%)", levels: [false, false, true] },
                  { feature: "Education & Mentoring Support", levels: [true, false, false] },
                  { feature: "Maximum Return Capped", levels: [false, false, true] },
                  { feature: "Algorithm/Copy Trading Options", levels: [true, false, false] },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-4 gap-4 py-4 px-4 rounded-xl hover:bg-white/[0.02] transition-colors duration-300 items-center group">
                    <div className="col-span-1 text-sm font-medium text-white/70 group-hover:text-white transition-colors">{row.feature}</div>
                    <div className="flex justify-center">
                      {row.levels[0] ? <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center"><Check className="w-3 h-3 text-blue-400" /></div> : <div className="w-5 h-1 bg-white/5 rounded-full" />}
                    </div>
                    <div className="flex justify-center">
                      {row.levels[1] ? <div className="w-5 h-5 rounded-full bg-[#BF953F]/20 flex items-center justify-center shadow-[0_0_10px_rgba(191,149,63,0.3)]"><Check className="w-3 h-3 text-[#BF953F]" /></div> : <div className="w-5 h-1 bg-white/5 rounded-full" />}
                    </div>
                    <div className="flex justify-center">
                      {row.levels[2] ? <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center"><Check className="w-3 h-3 text-purple-400" /></div> : <div className="w-5 h-1 bg-white/5 rounded-full" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative bg-[#050505]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-20">
            <p className="text-[#BF953F] text-xs uppercase tracking-[0.3em] font-bold mb-4">Support</p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              Frequent <br className="md:hidden" />Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Do I need prior experience for Self Trading?", a: "Not at all. If you lack trading knowledge, the company provides support services including education, counseling, copy trading, and algorithmic trading." },
              { q: "What is the withdrawal condition for Profit Sharing?", a: "You can withdraw funds at any time, but a minimum 40-day notice period is required for withdrawal under the Profit Sharing module." },
              { q: "What returns can I expect from Fixed Return (GreenTik)?", a: "Our packages range from $100 up to $10,000. You receive 0.2% to 0.5% daily returns (5 days a week) until you hit the maximum return of 180% to 220%." },
              { q: "Are the trading accounts in my name?", a: "Yes, for the Self Trading and Profit Sharing modules, the trading account and KYC will be registered strictly in your own name." },
            ].map((faq, i) => (
              <details key={i} className="group overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#BF953F]/30 transition-colors duration-500 open:bg-white/[0.04] open:border-[#BF953F]/20">
                <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer list-none">
                  <h3 className="text-white/90 font-bold text-lg pr-6 group-open:text-[#BF953F] transition-colors">{faq.q}</h3>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-open:rotate-45 group-open:border-[#BF953F] group-open:bg-[#BF953F]/10 transition-all duration-500 shadow-[0_0_15px_rgba(191,149,63,0)] group-open:shadow-[0_0_15px_rgba(191,149,63,0.2)]">
                    <Plus className="w-5 h-5 text-white/50 group-hover:text-white group-open:text-[#BF953F] transition-colors duration-500" />
                  </div>
                </summary>
                <div className="px-6 md:px-8 pb-8 pt-2">
                  <p className="text-white/50 text-base leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main >
  )
}
