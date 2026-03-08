"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion"
import {
  ArrowRight,
  Users,
  Target,
  Shield,
  Award,
  Globe,
  CheckCircle,
  Lightbulb,
  Heart,
  Zap,
  Phone,
  ArrowUpRight,
  Star,
  Activity
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { FooterSection } from "@/components/footer-section"

const timeline = [
  {
    year: "2018",
    title: "Foundation",
    description: "Brightfolio Solutions was founded with a vision to democratize trading education in India.",
  },
  {
    year: "2019",
    title: "First 100 Students",
    description: "Reached our first milestone of 100 active learners trusting us with their trading education.",
  },
  {
    year: "2020",
    title: "Crypto Integration",
    description: "Expanded our curriculum to include cryptocurrency trading and digital asset analysis.",
  },
  {
    year: "2021",
    title: "National Reach",
    description: "Serving students across 15+ states with structured trading programs.",
  },
  {
    year: "2022",
    title: "Learning Platform Launch",
    description: "Launched our proprietary education platform with real-time analytics and progress tracking.",
  },
  {
    year: "2023",
    title: "National Expansion",
    description: "Expanded operations pan-India with dedicated support teams in major cities.",
  },
  {
    year: "2024",
    title: "25K+ Students",
    description: "Proudly serving over 25,000 active learners who have completed our programs.",
  },
  {
    year: "2025",
    title: "Scaling New Heights",
    description: "Expanding our curriculum and reach, empowering even more traders nationwide.",
  },
  {
    year: "2026",
    title: "Online Learning Platform",
    description: "Upcoming launch of our next-generation comprehensive digital learning platform.",
  },
]

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Complete visibility into our educational methods with no hidden fees or surprises.",
    image: "/professional-team-meeting-discussing-investment-st.jpg",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Every strategy is tailored to your unique learning objectives and timeline.",
    image: "/financial-charts-analysis-screen-green-growth.jpg",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Leveraging cutting-edge technology and market insights for educational excellence.",
    image: "/professional-trading-dashboard-with-charts-and-ana.jpg",
  },
  {
    icon: Heart,
    title: "Student-First",
    description: "Your mastery is our success. We grow only when your skills grow.",
    image: "/happy-successful-indian-investor-looking-at-financ.jpg",
  },
  {
    icon: Zap,
    title: "Agility",
    description: "Quick adaptation to market changes while teaching robust risk management.",
    image: "/cryptocurrency-bitcoin-gold-coin-digital.jpg",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a community of informed traders who learn and grow together.",
    image: "/stock-market-trading-floor-busy-professionals.jpg",
  },
]

const team = [
  {
    name: "Shailender Mohan",
    role: "Director",
    image: "/professional-indian-businessman-in-suit-with-confi.jpg",
    description: "Visionary leader with 15+ years of market expertise.",
  },
  {
    name: "Dinesh Joshi",
    role: "Director",
    image: "/successful-indian-businessman-in-modern-office-loo.jpg",
    description: "Driving strategic growth and operational excellence.",
  },
  {
    name: "Satish Kumar",
    role: "Senior Trading Expert",
    image: "/friendly-indian-business-professional-in-office.jpg",
    description: "Master of risk management and advanced trading strategies.",
  },
]

function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className={`relative overflow-hidden group rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-700 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(191, 149, 63, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="absolute inset-0 rounded-[2.5rem] border border-white/[0.03] pointer-events-none group-hover:border-[#BF953F]/20 transition-colors duration-700 mix-blend-overlay z-10"></div>
      <div className="relative z-20 h-full">{children}</div>
    </div>
  )
}

function TimelineItem({ item, index, isLast }: { item: (typeof timeline)[0]; index: number; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1])
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className="relative">
      <div className={`flex flex-col md:flex-row items-center ${isLeft ? "" : "md:flex-row-reverse"} gap-8 md:gap-12 relative z-10`}>

        {/* Content Box */}
        <motion.div
          style={{ opacity, scale }}
          className={`flex-1 w-full ${isLeft ? "md:text-right" : "md:text-left"} text-center md:text-left mb-8 md:mb-0`}
        >
          <div className={`p-8 bg-white/[0.02] backdrop-blur-md rounded-[2rem] border border-white/[0.05] group-hover:border-[#BF953F]/30 transition-all duration-700 ${isLeft ? "md:ml-auto" : "md:mr-auto"} max-w-lg group hover:bg-white/[0.04]`}>
            <div className={`text-[#BF953F] font-mono font-bold text-lg mb-3 ${isLeft ? "md:text-right" : "md:text-left"}`}>{item.year}</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#BF953F] transition-colors duration-500 tracking-tight">{item.title}</h3>
            <p className="text-white/50 text-base md:text-lg leading-relaxed font-light">{item.description}</p>
          </div>
        </motion.div>

        {/* Center Node (Hidden on Mobile) */}
        <div className="hidden md:flex flex-col items-center justify-center relative w-12 shrink-0">
          <motion.div
            style={{ scale }}
            className="w-8 h-8 rounded-full bg-[#050505] border-4 border-[#BF953F] flex items-center justify-center shadow-[0_0_30px_rgba(191,149,63,0.5)] z-20"
          >
            <div className="w-2 h-2 rounded-full bg-[#FCF6BA] animate-pulse" />
          </motion.div>
        </div>

        {/* Empty Spacer */}
        <div className="flex-1 hidden md:block" />
      </div>

      {/* Vertical Connecting Line (Hidden on Mobile) */}
      {!isLast && (
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-10 w-px h-[calc(100%+3rem)] -z-10">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="w-full h-full bg-gradient-to-b from-[#BF953F] via-[#FCF6BA]/50 to-transparent origin-top"
          />
        </div>
      )}
    </div>
  )
}

export default function AboutPage() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[#BF953F]/30 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left Glow */}
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#BF953F]/5 rounded-[100%] blur-[120px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />
          {/* Bottom Right Glow */}
          <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-white/3 rounded-[100%] blur-[150px] translate-x-1/3 translate-y-1/3 mix-blend-screen" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md shadow-[0_0_40px_rgba(191,149,63,0.05)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BF953F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#BF953F]"></span>
              </span>
              <span className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] pt-0.5">
                About Brightfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-black text-white leading-[1.05] tracking-tight mb-8">
              Building Skills, <br className="hidden md:block" />
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F]">Trust.</span>
            </h1>

            <p className="text-white/50 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed text-balance">
              Since 2018, we have been empowering traders across India to achieve their goals through expert mentorship and structured education.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#BF953F]/10 to-transparent blur-3xl pointer-events-none" />

            {[
              { value: "6+", label: "Years of Excellence" },
              { value: "25K+", label: "Active Students" },
              { value: "10K+", label: "Traders Trained" },
              { value: "15+", label: "States Covered" },
            ].map((stat, i) => (
              <SpotlightCard key={stat.label} className="p-8 md:p-10 text-center flex flex-col justify-center">
                <p className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F] mb-3 relative z-10">{stat.value}</p>
                <p className="text-white/50 text-xs md:text-sm font-bold uppercase tracking-widest relative z-10">{stat.label}</p>
              </SpotlightCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 md:py-40 relative border-t border-white/5 bg-[#020202]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#BF953F]/[0.02] to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-10">
                From Vision to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F]">Reality.</span>
              </h2>
              <div className="space-y-6 text-white/50 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  Brightfolio Solutions was born from a simple observation: quality trading education was accessible
                  only to the few. Our founders, seasoned traders with decades of combined experience, set out
                  to change this narrative.
                </p>
                <p>
                  Starting with just a handful of students in 2018, we focused on one thing — delivering consistent,
                  transparent education while building real trading skills. Word spread, trust grew, and today we're proud to
                  serve over 25,000 learners across India.
                </p>
                <p>
                  Our journey hasn't been without challenges. Market cycles, technological shifts, and economic
                  uncertainties tested our resolve. But through it all, we remained committed to our students, adapting
                  our curriculum while never compromising on our core values.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4 md:gap-6 group">
                {/* Column 1 */}
                <div className="space-y-4 md:space-y-6">
                  <div className="rounded-[2rem] overflow-hidden border border-white/5 aspect-[4/5] relative group-hover:border-[#BF953F]/20 transition-colors duration-700 shadow-2xl bg-[#0a0a0a]">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    <Image
                      src="/professional-financial-trading-team-meeting-in-mod.jpg"
                      alt="Team meeting"
                      width={400}
                      height={500}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-[2s] ease-out saturate-50 group-hover:saturate-100"
                    />
                  </div>
                  <div className="rounded-[2rem] overflow-hidden border border-white/5 aspect-square relative group-hover:border-[#BF953F]/20 transition-colors duration-700 shadow-2xl bg-[#0a0a0a]">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    <Image
                      src="/modern-financial-trading-office-with-multiple-moni.jpg"
                      alt="Trading floor"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-[2s] ease-out saturate-50 group-hover:saturate-100"
                    />
                  </div>
                </div>
                {/* Column 2 */}
                <div className="space-y-4 md:space-y-6 pt-12 md:pt-16">
                  <div className="rounded-[2rem] overflow-hidden border border-white/5 aspect-square relative group-hover:border-[#BF953F]/20 transition-colors duration-700 shadow-2xl bg-[#0a0a0a]">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    <Image
                      src="/stock-market-trading-floor-busy-professionals.jpg"
                      alt="Market analysis"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-[2s] ease-out saturate-50 group-hover:saturate-100"
                    />
                  </div>
                  <div className="rounded-[2rem] overflow-hidden border border-white/5 aspect-[4/5] relative group-hover:border-[#BF953F]/20 transition-colors duration-700 shadow-2xl bg-[#0a0a0a]">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    <Image
                      src="/happy-successful-indian-investor-looking-at-financ.jpg"
                      alt="Success"
                      width={400}
                      height={500}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-[2s] ease-out saturate-50 group-hover:saturate-100"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#BF953F]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 md:py-40 relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-center mb-20 md:mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F]">Values</span>
            </h2>
            <p className="text-white/50 text-lg md:text-xl font-light max-w-2xl mx-auto">
              These principles guide every decision we make and every lesson we teach.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: index * 0.1 }}
              >
                <SpotlightCard className="h-full p-8 md:p-10 relative overflow-hidden">
                  {/* Background Image Container - guaranteed to not overflow parent rounded border */}
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover opacity-10 group-hover:opacity-20 transition-all duration-[1.5s] ease-out saturate-0 group-hover:saturate-100 group-hover:scale-105"
                    />
                    {/* Deep Gradient Overlay to fade the image into the dark card background from all sides */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 to-transparent" />
                  </div>

                  {/* Content (Z-index ensures it sits above the image) */}
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#BF953F]/10 group-hover:border-[#BF953F]/40 group-hover:scale-110 transition-all duration-500 shadow-[0_0_0_0_rgba(191,149,63,0)] group-hover:shadow-[0_0_30px_0_rgba(191,149,63,0.2)]">
                      <value.icon className="w-7 h-7 text-white/40 group-hover:text-[#BF953F] transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-[#BF953F] transition-colors duration-500">
                      {value.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed font-light text-base md:text-lg">
                      {value.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 md:py-40 relative bg-[#020202] border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-center mb-20 md:mb-32 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Milestones That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F]">Matter</span>
            </h2>
            <p className="text-white/50 text-lg md:text-xl font-light">
              Every step of our journey has been guided by our commitment to your educational success.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/5" />

            <div className="space-y-12 md:space-y-8">
              {timeline.map((item, index) => (
                <TimelineItem key={item.year} item={item} index={index} isLast={index === timeline.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-40 relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-center mb-20 md:mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F]">Experts</span>
            </h2>
            <p className="text-white/50 text-lg md:text-xl font-light max-w-2xl mx-auto">
              Experienced professionals dedicated to your mastery of the markets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-8 rounded-full overflow-hidden border border-white/10 p-2 group-hover:border-[#BF953F]/40 transition-colors duration-700 bg-white/[0.02]">
                  <div className="relative w-full h-full rounded-full overflow-hidden filter grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out brightness-90 group-hover:brightness-100"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(191,149,63,0)] group-hover:shadow-[inset_0_0_40px_rgba(191,149,63,0.3)] transition-all duration-700 pointer-events-none" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight transition-colors">{member.name}</h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F] font-bold uppercase tracking-widest text-sm mb-3">{member.role}</p>
                <p className="text-white/40 font-light text-sm md:text-base">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 md:py-40 relative border-t border-white/5">
        <div className="absolute inset-0 bg-[#020202]">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="flex-1 order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-8 text-balance">
                Your Mastery, Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F]">Commitment</span>
              </h2>
              <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed mb-12">
                We don't just teach trading — we build independent traders. Here's why thousands of learners trust
                Brightfolio Solutions with their education.
              </p>

              <div className="space-y-6">
                {[
                  "Professional team with 15+ years of trading experience",
                  "Transparent curriculum structure with no hidden fees",
                  "Focus on Indian and global markets with deep expertise",
                  "24/7 community support and mentorship",
                  "Personalized learning paths for every student",
                  "Proven educational methodology for skill development",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#BF953F]/20 group-hover:border-[#BF953F]/50 transition-all duration-300 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white/50 group-hover:text-[#BF953F] transition-colors" />
                    </div>
                    <span className="text-white/70 text-base md:text-lg font-light leading-snug group-hover:text-white transition-colors pt-1">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              className="flex-1 relative order-1 lg:order-2 mb-12 lg:mb-0"
            >
              <div className="relative w-full aspect-[4/5] max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(191,149,63,0.05)] bg-[#050505] group">
                  <Image
                    src="/happy-successful-indian-investor-looking-at-financ.jpg"
                    alt="Successful Learner"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out brightness-90 saturate-50 group-hover:saturate-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent pointer-events-none" />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
                  className="absolute -bottom-8 -left-4 md:-left-8 p-6 rounded-[2rem] bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#BF953F]/10 border border-[#BF953F]/30 flex items-center justify-center">
                      <Award className="w-6 h-6 text-[#BF953F]" />
                    </div>
                    <div>
                      <p className="text-white font-black text-lg md:text-xl tracking-tight">Trusted Partner</p>
                      <p className="text-white/50 text-xs md:text-sm font-medium uppercase tracking-wider">Since 2018</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.7 }}
                  className="absolute -top-8 -right-4 md:-right-8 p-6 rounded-[2rem] bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#BF953F]/10 border border-[#BF953F]/30 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-[#BF953F]" />
                    </div>
                    <div>
                      <p className="text-white font-black text-lg md:text-xl tracking-tight">Pan-India</p>
                      <p className="text-white/50 text-xs md:text-sm font-medium uppercase tracking-wider">Coverage</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-[#020202] border border-white/10 overflow-hidden relative shadow-2xl">

            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#BF953F]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid lg:grid-cols-2 lg:gap-8 items-stretch pt-8 lg:pt-0">

              {/* Text Content */}
              <div className="p-10 md:p-16 lg:p-20 relative z-20 flex flex-col justify-center text-center lg:text-left">
                <div className="inline-flex items-center justify-center lg:justify-start gap-3 mb-6 mx-auto lg:mx-0">
                  <span className="text-[#BF953F] font-bold tracking-widest uppercase text-xs pt-1">Start Your Journey</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
                  Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#BF953F]">Master</span><br className="hidden lg:block" /> the Markets?
                </h2>

                <p className="text-white/50 text-lg md:text-xl font-light mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Join over 25,000 students who trust Brightfolio Solutions with their trading education.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                  <Link
                    href="/onboarding"
                    className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#BF953F] text-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(191,149,63,0.3)] w-full sm:w-auto"
                  >
                    <span className="font-bold tracking-wide text-base whitespace-nowrap pt-0.5">Book Free Demo</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  </Link>

                  <a
                    href="tel:+919588695021"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 w-full sm:w-auto"
                  >
                    <span className="font-semibold tracking-wide text-base pt-0.5 mt-px text-white/80">Call Us</span>
                  </a>
                </div>
              </div>

              {/* Image Content */}
              <div className="relative w-full h-[400px] lg:h-auto overflow-hidden hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#020202] via-transparent to-transparent z-10" />
                <Image
                  src="/modern-financial-office-with-happy-diverse-team-ce.jpg"
                  alt="Professional Trading Setup"
                  fill
                  className="object-cover object-center saturate-50 hover:saturate-100 transition-all duration-1000 ease-out hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
