"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  BarChart3,
  Shield,
  Clock,
  Users,
  Target,
  CheckCircle,
  ChevronDown,
  Phone,
  Award,
  BookOpen,
  Lightbulb,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { FooterSection } from "@/components/footer-section"

const services = [
  {
    id: "stock-trading",
    icon: BookOpen,
    title: "Stock Trading Mastery",
    subtitle: "NSE & BSE Trading Course",
    shortDesc: "Master Indian stock market trading with professional strategies.",
    fullDesc:
      "Our Stock Trading Mastery course teaches you how to trade the Indian stock market (NSE & BSE) like a professional. Learn technical analysis, fundamental analysis, position sizing, and entry/exit strategies used by successful traders.",
    features: [
      "Technical analysis for stocks",
      "Fundamental analysis techniques",
      "Portfolio construction & rebalancing",
      "Sector-specific trading strategies",
      "Risk management for equity trading",
      "Real-time trading examples",
    ],
    stats: [
      { value: "4000+", label: "Students Trained" },
      { value: "100+", label: "Stock Trading Strategies" },
      { value: "8", label: "Week Course Duration" },
    ],
    image: "/professional-trading-dashboard-with-charts-and-ana.jpg",
  },
  {
    id: "cryptocurrency",
    icon: BookOpen,
    title: "Cryptocurrency Trading Course",
    subtitle: "Digital Assets Trading Education",
    shortDesc: "Learn to trade crypto markets with confidence and expertise.",
    fullDesc:
      "Our Cryptocurrency Trading Course covers everything you need to understand and trade digital assets. From blockchain basics to advanced trading strategies, you'll learn to navigate crypto markets with professional-grade risk management.",
    features: [
      "Blockchain technology fundamentals",
      "Major coins & altcoins analysis",
      "Technical analysis for crypto",
      "Risk management in volatile markets",
      "Portfolio diversification strategies",
      "Live crypto trading demonstrations",
    ],
    stats: [
      { value: "3500+", label: "Crypto Traders Trained" },
      { value: "50+", label: "Assets Covered" },
      { value: "10", label: "Week Course" },
    ],
    image: "/modern-financial-trading-office-with-multiple-moni.jpg",
  },
  {
    id: "forex",
    icon: BookOpen,
    title: "Forex Trading Fundamentals",
    subtitle: "Global Currency Markets Course",
    shortDesc: "Master forex trading with professional analysis techniques.",
    fullDesc:
      "Learn to trade the world's largest financial market. Our Forex Trading course teaches technical analysis, economic indicators, and trading strategies for major currency pairs with proven risk management.",
    features: [
      "Currency pair analysis",
      "Economic indicators for forex",
      "Technical patterns in forex",
      "Leverage management safely",
      "Geopolitical impact on forex",
      "Trading major & exotic pairs",
    ],
    stats: [
      { value: "2000+", label: "Forex Traders Trained" },
      { value: "28", label: "Currency Pairs Taught" },
      { value: "6", label: "Week Intensive Course" },
    ],
    image: "/professional-financial-trading-team-meeting-in-mod.jpg",
  },
  {
    id: "mutual-funds",
    icon: BookOpen,
    title: "Investment Fundamentals",
    subtitle: "Long-term Wealth Building Course",
    shortDesc: "Understand different investment vehicles and build wealth systematically.",
    fullDesc:
      "Our Investment Fundamentals course teaches you about stocks, mutual funds, bonds, and diversified portfolio construction. Perfect for building long-term wealth with professional guidance.",
    features: [
      "Stock market investing basics",
      "Mutual fund analysis & selection",
      "Bond investments & fixed income",
      "Portfolio diversification",
      "Goal-based investing strategies",
      "Tax-efficient investing",
    ],
    stats: [
      { value: "5000+", label: "Investors Trained" },
      { value: "100+", label: "Investment Vehicles Covered" },
      { value: "6", label: "Week Course" },
    ],
    image: "/successful-indian-businessman-in-modern-office-loo.jpg",
  },
]

const investmentPlans = [
  {
    name: "Beginner Course",
    focus: "Core Foundation",
    description: "Start your trading education from the basics",
    features: ["8-week curriculum", "Weekly mentoring", "Trading tools access", "Lifetime course access"],
    recommended: false,
  },
  {
    name: "Advanced Trading",
    focus: "Strategic Mastery",
    description: "Master advanced strategies like professional traders",
    features: ["12-week intensive", "Bi-weekly mentoring", "Live trading room", "Expert certification"],
    recommended: true,
  },
  {
    name: "Elite Mentorship",
    focus: "Personalized Growth",
    description: "1-on-1 guidance from top trading mentors",
    features: ["Custom curriculum", "Weekly private sessions", "Real-time feedback", "Lifetime mentorship"],
    recommended: false,
  },
]

const faqs = [
  {
    question: "Do I need prior trading experience?",
    answer:
      "No! Our Beginner's course starts from scratch. We teach all fundamentals needed to understand markets. If you have experience, our Advanced Trading course builds on that knowledge.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most students report understanding market mechanics within 4-6 weeks. Consistent trading success typically comes after 3-6 months of practice with our strategies. We emphasize proper foundation over rapid financial gains.",
  },
  {
    question: "Will you teach me to trade live?",
    answer:
      "Yes! All our courses include live trading demonstrations where our mentors show real trades being executed. The Advanced and Elite programs include live trading room access for real-time market participation.",
  },
  {
    question: "Can I access courses after completion?",
    answer:
      "You get lifetime access to all course materials, recordings, and regular updates. Our community remains open for networking and sharing insights with fellow traders.",
  },
  {
    question: "What if I don't become profitable?",
    answer:
      "We focus on teaching sustainable trading skills and psychology. While past performance doesn't guarantee future results, our students consistently report improved trading discipline and decision-making. We also offer a 30-day satisfaction guarantee.",
  },
  {
    question: "How do I get started?",
    answer:
      "Take our free assessment quiz, choose the course that matches your level, and start learning immediately. Our team will guide you through the enrollment process and recommend the best learning path.",
  },
]

const processSteps = [
  {
    step: 1,
    title: "Take Assessment",
    description: "Free assessment to determine your trading level and goals.",
    icon: Target,
  },
  {
    step: 2,
    title: "Choose Course",
    description: "Select the trading course that matches your experience level.",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Start Learning",
    description: "Begin your trading education with immediate access to all materials.",
    icon: Lightbulb,
  },
  {
    step: 4,
    title: "Get Mentored",
    description: "Join live sessions and get personalized feedback from expert traders.",
    icon: Users,
  },
]

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(services[0].id)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const currentService = services.find((s) => s.id === activeService) || services[0]

  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#BF953F]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#BF953F]/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-[#BF953F] text-sm uppercase tracking-widest mb-4">Our Services</p>
            <h1 className="text-4xl md:text-6xl font-bold gold-gradient-text mb-6">
              Comprehensive Trading Education
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              From stocks to crypto, forex to mutual funds — we offer a complete suite of trading courses designed
              to build independent market skills.
            </p>
          </motion.div>

          {/* Service Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300 ${
                  activeService === service.id
                    ? "gold-gradient-bg text-[#050505] border-transparent"
                    : "bg-[#0a0a0a] border-yellow-500/20 text-white hover:border-yellow-500/40"
                }`}
              >
                <service.icon className="w-5 h-5" />
                <span className="font-medium">{service.title}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Detail Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl gold-gradient-bg flex items-center justify-center">
                    <currentService.icon className="w-6 h-6 text-[#050505]" />
                  </div>
                  <div>
                    <p className="text-[#BF953F] text-sm uppercase tracking-widest">{currentService.subtitle}</p>
                    <h2 className="text-3xl font-bold text-white">{currentService.title}</h2>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{currentService.fullDesc}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {currentService.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 bg-[#050505] rounded-xl border border-yellow-500/10"
                    >
                      <p className="text-2xl font-bold gold-gradient-text">{stat.value}</p>
                      <p className="text-muted-foreground text-xs mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {currentService.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-[#BF953F] flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <Link
                  href="/onboarding"
                  className="inline-flex items-center gap-2 mt-8 px-8 py-4 gold-gradient-bg text-[#050505] font-bold rounded-xl transition-all duration-300 hover:gold-glow hover:scale-105"
                >
                  Get Started with {currentService.title}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-yellow-500/20">
                  <Image
                    src={currentService.image || "/placeholder.svg"}
                    alt={currentService.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 p-4 rounded-xl bg-[#111] border border-yellow-500/20 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg gold-gradient-bg flex items-center justify-center">
                      <Award className="w-5 h-5 text-[#050505]" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Certified</p>
                      <p className="text-muted-foreground text-sm">Professional Education</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Investment Plans Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#BF953F] text-sm uppercase tracking-widest mb-4">Investment Plans</p>
            <h2 className="text-3xl md:text-4xl font-bold gold-gradient-text mb-4">Choose Your Path to Mastery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible learning plans designed to match your goals, risk tolerance, and trading style.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {investmentPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  plan.recommended
                    ? "bg-gradient-to-b from-[#BF953F]/10 to-[#0a0a0a] border-[#BF953F]/40"
                    : "bg-[#0a0a0a] border-yellow-500/10 hover:border-yellow-500/30"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gold-gradient-bg rounded-full text-[#050505] text-sm font-bold">
                    Recommended
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold gold-gradient-text mb-2">{plan.focus}</p>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-[#BF953F] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/onboarding"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.recommended
                      ? "gold-gradient-bg text-[#050505] hover:gold-glow"
                      : "border border-[#BF953F]/40 text-white hover:bg-[#BF953F]/10"
                  }`}
                >
                  Select Plan
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#BF953F] text-sm uppercase tracking-widest mb-4">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold gold-gradient-text mb-4">Start in 4 Simple Steps</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Getting started with Brightfolio is quick and easy. Here's how it works.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#BF953F] to-transparent" />
                )}

                <div className="w-16 h-16 mx-auto mb-4 rounded-full gold-gradient-bg flex items-center justify-center relative z-10">
                  <step.icon className="w-8 h-8 text-[#050505]" />
                </div>
                <div className="text-[#BF953F] text-sm font-medium mb-2">Step {step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[#BF953F] text-sm uppercase tracking-widest mb-4">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold gold-gradient-text mb-6">The Brightfolio Advantage</h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Bank-Grade Security",
                    description: "Your learning data is protected with military-grade encryption and secure protocols.",
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    description: "Our analysts have 15+ years of combined experience in Indian financial markets.",
                  },
                  {
                    icon: Clock,
                    title: "24/7 Support",
                    description: "Round-the-clock customer support via phone, email, and WhatsApp.",
                  },
                  {
                    icon: BarChart3,
                    title: "Structured Progress",
                    description: "Real-time learning tracking with detailed weekly feedback on your progress.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl gold-gradient-bg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#050505]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-yellow-500/20">
                <Image
                  src="/professional-trading-dashboard-with-charts-and-ana.jpg"
                  alt="Trading Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#BF953F] text-sm uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold gold-gradient-text mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services and investment process.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border border-yellow-500/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-[#050505] hover:bg-[#0a0a0a] transition-colors"
                >
                  <span className="font-medium text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#BF953F] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="p-6 pt-0 text-muted-foreground">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#BF953F]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#BF953F]/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-[#BF953F] text-sm uppercase tracking-widest mb-4">Ready to Start?</p>
            <h2 className="text-3xl md:text-5xl font-bold gold-gradient-text mb-6">
              Begin Your Learning Journey Today
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of successful traders who trust Brightfolio Solutions. Your path to market mastery
              starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/onboarding"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 gold-gradient-bg text-[#050505] font-bold rounded-xl transition-all duration-300 hover:gold-glow hover:scale-105 text-lg"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919588695021"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-[#BF953F]/40 text-white font-semibold rounded-xl transition-all duration-300 hover:border-[#BF953F] hover:bg-[#BF953F]/10 text-lg"
              >
                <Phone className="w-5 h-5" />
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
