"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { TrendingUp, Layers } from "lucide-react"
import NumberFlow from "@number-flow/react"

export function ProfitSharingCalculator() {
    const [investment, setInvestment] = useState<number>(5000)

    const minInvestment = 100
    const maxInvestment = 20000

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInvestment(Number(e.target.value))
    }

    const psGrossAnnual = investment * 0.42
    const psClientAnnual = psGrossAnnual * 0.5
    const psClientMonthly = psClientAnnual / 12

    return (
        <div className="bg-[#050505] rounded-3xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-500 hover:border-[#BF953F]/40 w-full mb-16">
            <div className="grid md:grid-cols-2">
                {/* Left Column: Controls & Details */}
                <div className="p-6 sm:p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 flex flex-col space-y-8 md:space-y-10">

                    {/* Slider Section */}
                    <div className="space-y-6">
                        <div className="flex justify-between items-end">
                            <h3 className="text-white/80 text-xs font-bold uppercase tracking-widest">
                                Investment Amount
                            </h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-xl md:text-2xl font-medium text-white/50">$</span>
                                <NumberFlow
                                    value={investment}
                                    className="text-3xl md:text-4xl font-black text-white"
                                />
                            </div>
                        </div>

                        <div className="relative pt-2 pb-2">
                            <input
                                type="range"
                                min={minInvestment}
                                max={maxInvestment}
                                step={100}
                                value={investment}
                                onChange={handleSliderChange}
                                className="w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#BF953F] focus:outline-none hover:bg-white/20 transition-all relative z-10 shadow-inner"
                            />
                        </div>

                        <div className="flex justify-between text-white/30 text-[10px] font-mono font-bold tracking-widest uppercase">
                            <span>${minInvestment.toLocaleString()}</span>
                            <span>${maxInvestment.toLocaleString()}</span>
                        </div>
                    </div>

                    {/* Details Box */}
                    <div className="bg-[#0A0A0A] rounded-2xl border border-white/5 p-6 space-y-5">
                        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                            <Layers className="w-5 h-5 text-[#BF953F]" />
                            <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">Split Details</h4>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-white/50 text-xs tracking-wide">Client/Company Split</span>
                                <span className="text-[#BF953F] font-bold text-sm tracking-wider uppercase bg-[#BF953F]/10 px-3 py-1 rounded-md border border-[#BF953F]/20">50:50</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-white/50 text-xs tracking-wide">Target Return</span>
                                <span className="text-white font-black text-sm">42% / Year</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Results */}
                <div className="p-6 sm:p-8 md:p-12 relative flex flex-col justify-center bg-gradient-to-b from-transparent to-[#BF953F]/[0.03]">

                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none mix-blend-overlay" />

                    {/* Faint upward arrow backdrop similar to the picture */}
                    <div className="absolute top-10 right-10 text-white/[0.03] pointer-events-none">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </div>

                    <div className="relative z-10 space-y-10 w-full">
                        {/* Big Number */}
                        <div className="text-center w-full">
                            <p className="text-[#BF953F] text-[10px] uppercase tracking-widest font-bold mb-4">
                                Est. Annual Profit
                            </p>
                            <div className="flex items-baseline justify-center gap-1 w-full overflow-hidden">
                                <span className="text-3xl md:text-5xl font-light text-[#BF953F] shrink-0">$</span>
                                <NumberFlow
                                    value={psClientAnnual}
                                    format={{ maximumFractionDigits: 0 }}
                                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter truncate"
                                />
                            </div>
                        </div>

                        {/* Sub Results */}
                        <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                            <div className="text-center">
                                <p className="text-white/40 text-[9px] uppercase tracking-widest font-bold mb-3">
                                    Est. Daily Profit
                                </p>
                                <div className="flex items-baseline justify-center gap-1 overflow-hidden">
                                    <span className="text-base md:text-lg font-light text-[#BF953F] shrink-0">$</span>
                                    <NumberFlow
                                        value={psClientAnnual / 365}
                                        format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
                                        className="text-xl md:text-2xl font-black text-white tracking-tighter truncate"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-white/40 text-[9px] uppercase tracking-widest font-bold mb-3">
                                    Est. Monthly Profit
                                </p>
                                <div className="flex items-baseline justify-center gap-1 overflow-hidden">
                                    <span className="text-base md:text-lg font-light text-[#BF953F] shrink-0">$</span>
                                    <NumberFlow
                                        value={psClientMonthly}
                                        format={{ maximumFractionDigits: 0 }}
                                        className="text-xl md:text-2xl font-black text-white tracking-tighter truncate"
                                    />
                                </div>
                            </div>
                        </div>

                        <p className="text-[9px] text-white/30 leading-relaxed text-center mt-6">
                            *Projections based on historical targets of 36%-48% gross return. Actual returns may vary.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
