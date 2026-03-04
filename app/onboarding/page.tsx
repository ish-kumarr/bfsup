"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ArrowLeft,
  User,
  Mail,
  Phone,
  Briefcase,
  Target,
  IndianRupee,
  CheckCircle2,
  XCircle,
  Loader2,
  TrendingUp,
  Shield,
  Clock,
  BarChart3,
  Bitcoin,
  Globe,
  Layers,
  DollarSign,
  Sparkles,
  ChevronRight
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface FormData {
  fullName: string
  email: string
  phone: string
  occupation: string
  investmentExperience: string
  investmentGoal: string
  riskTolerance: string
  investmentAmount: string
  preferredServices: string[]
  howDidYouHear: string
}

const steps = [
  { id: 1, title: "Personal Info", subtitle: "Let's get to know you", icon: User },
  { id: 2, title: "Experience", subtitle: "Your financial background", icon: Briefcase },
  { id: 3, title: "Goals", subtitle: "Chart your destination", icon: Target },
  { id: 4, title: "Preferences", subtitle: "Tailor your portfolio", icon: TrendingUp },
]

const experienceOptions = [
  { value: "beginner", label: "Novice", description: "Taking my first steps in the market" },
  { value: "intermediate", label: "Apprentice", description: "1-3 years of active investing" },
  { value: "advanced", label: "Practitioner", description: "3+ years of consistent trading" },
  { value: "expert", label: "Master", description: "Professional institutional trader" },
]

const goalOptions = [
  { value: "wealth-building", label: "Generational Wealth", description: "Long-term compounding" },
  { value: "passive-income", label: "Passive Income", description: "Consistent cash flow" },
  { value: "aggressive-growth", label: "Aggressive Returns", description: "High-risk, high-reward optimization" },
  { value: "retirement", label: "Secure Retirement", description: "Capital preservation & steady growth" },
]

const riskOptions = [
  { value: "conservative", label: "Calculated & Cautious", description: "Prioritizing stability over aggressive spikes" },
  { value: "moderate", label: "Balanced Aggression", description: "Strategic risks for asymmetric upside" },
  { value: "aggressive", label: "Unrestricted Growth", description: "Embracing volatility for maximum leverage" },
]

const investmentAmounts = [
  { value: "1000-5000", label: "$1K - $5K" },
  { value: "5000-15000", label: "$5K - $15K" },
  { value: "15000-50000", label: "$15K - $50K" },
  { value: "50000+", label: "$50K+" },
]

const services = [
  { value: "stock-trading", label: "Equities", icon: "chart" },
  { value: "crypto", label: "Digital Assets", icon: "bitcoin" },
  { value: "forex", label: "Global Forex", icon: "globe" },
  { value: "options", label: "Derivatives", icon: "layers" },
]

const hearAboutOptions = ["Social Discovery", "Private Referral", "Search Engine", "Press/News", "Video Content", "Other Networking"]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    occupation: "",
    investmentExperience: "",
    investmentGoal: "",
    riskTolerance: "",
    investmentAmount: "",
    preferredServices: [],
    howDidYouHear: "",
  })

  const firstName = formData.fullName.split(" ")[0] || "there"

  // Prevent hydration styling mismatch due to scroll restoration
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentStep])

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredServices: prev.preferredServices.includes(service)
        ? prev.preferredServices.filter((s) => s !== service)
        : [...prev.preferredServices, service],
    }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName.trim() !== "" && formData.email.trim() !== "" && formData.phone.trim() !== ""
      case 2:
        return formData.investmentExperience !== ""
      case 3:
        return formData.investmentGoal !== "" && formData.riskTolerance !== ""
      case 4:
        return formData.investmentAmount !== "" && formData.preferredServices.length > 0
      default:
        return false
    }
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1)
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2500))
    const success = Math.random() > 0.1
    setSubmitStatus(success ? "success" : "error")
    setIsSubmitting(false)
  }

  const resetForm = () => {
    setCurrentStep(1)
    setSubmitStatus("idle")
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      occupation: "",
      investmentExperience: "",
      investmentGoal: "",
      riskTolerance: "",
      investmentAmount: "",
      preferredServices: [],
      howDidYouHear: "",
    })
  }

  // Orchestration Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  }

  const elementVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  // --- Success Screen ---
  if (submitStatus === "success") {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#BF953F]/[0.08] rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-xl w-full text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 150, damping: 15 }}
            className="w-32 h-32 mx-auto mb-10 rounded-[2rem] bg-gradient-to-br from-[#BF953F] to-[#7d6023] flex items-center justify-center shadow-[0_0_80px_rgba(191,149,63,0.3)]"
          >
            <CheckCircle2 className="w-16 h-16 text-[#050505]" strokeWidth={2.5} />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-white">
              Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] to-[#FCEABB]">Received</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/60 text-lg md:text-xl font-light mb-12 leading-relaxed"
          >
            You are one step closer to mastering the markets. An elite advisor will review your profile and contact you within the next 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(191,149,63,0.3)] hover:bg-[#BF953F]"
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  // --- Error Screen ---
  if (submitStatus === "error") {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/[0.05] rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-red-500/10 border border-red-500/20 flex items-center justify-center"
          >
            <XCircle className="w-12 h-12 text-red-500" strokeWidth={1.5} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-white mb-4 tracking-tighter"
          >
            Oops! Something Went Wrong
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/50 text-lg mb-10 font-light"
          >
            We couldn't submit your details. Please check your connection or try again.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => setSubmitStatus("idle")}
              className="px-10 py-4 bg-[#BF953F] text-black font-bold uppercase tracking-widest text-sm rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_0_40px_rgba(191,149,63,0.3)]"
            >
              Try Again
            </button>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  // --- Main Form Interface ---
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#BF953F]/30 overflow-hidden relative font-sans">
      {/* Massive Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#BF953F]/[0.05] rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#BF953F]/[0.03] rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/60 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#BF953F]/40 transition-colors">
                <Image
                  src="/images/design-mode/logobright.png"
                  alt="Brightfolio Logo"
                  width={24}
                  height={24}
                  className="object-contain opacity-80 group-hover:opacity-100"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white/90 group-hover:text-white uppercase transition-colors">
                Brightfolio<span className="text-[#BF953F]">.</span>
              </span>
            </Link>

            <Link href="/" className="flex items-center gap-3 text-white/50 hover:text-white text-sm tracking-widest uppercase font-bold transition-all duration-300 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="pt-40 pb-24 px-4 sm:px-6 relative z-10 w-full max-w-[1400px] mx-auto min-h-screen flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* Left Content / Status Sidebar */}
        <div className="lg:w-1/3 flex flex-col justify-between">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-16">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#BF953F]/10 border border-[#BF953F]/20 mb-8">
                <Sparkles className="w-4 h-4 text-[#BF953F]" />
                <span className="text-[#BF953F] text-[10px] font-bold uppercase tracking-widest">Client Onboarding</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">
                Start Your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] to-[#FCEABB]">Journey</span>
              </h1>

              <p className="text-white/50 text-lg font-light leading-relaxed max-w-sm">
                We design bespoke investment ecosystems for high-performance individuals. Provide your parameters to begin.
              </p>
            </motion.div>

            {/* Vertical Step Indicators */}
            <div className="hidden lg:flex flex-col gap-8">
              {steps.map((step, index) => {
                const isActive = currentStep === step.id
                const isPast = currentStep > step.id

                return (
                  <div key={step.id} className={`flex items-start gap-6 transition-all duration-500 ${isActive ? 'opacity-100 translate-x-4' : isPast ? 'opacity-40' : 'opacity-20'}`}>
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border ${isActive ? 'bg-[#BF953F]/10 border-[#BF953F]/50 shadow-[0_0_30px_rgba(191,149,63,0.2)]' : isPast ? 'bg-[#111] border-white/10' : 'bg-transparent border-white/5'}`}>
                        {isPast ? <CheckCircle2 className="w-5 h-5 text-white" /> : <step.icon className={`w-5 h-5 ${isActive ? 'text-[#BF953F]' : 'text-white'}`} />}
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`w-px h-12 my-2 ${isPast ? 'bg-gradient-to-b from-white/20 to-transparent' : 'bg-white/5'}`} />
                      )}
                    </div>
                    <div className="pt-2">
                      <p className={`text-xs font-bold font-mono tracking-widest uppercase mb-1 ${isActive ? 'text-[#BF953F]' : 'text-white/50'}`}>Step 0{step.id}</p>
                      <h3 className="text-xl font-bold text-white tracking-tight">{step.title}</h3>
                      <p className="text-sm text-white/40 font-light hidden xl:block mt-1">{step.subtitle}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="hidden lg:block">
            <p className="text-white/20 text-xs font-mono uppercase tracking-widest">Safe & Secure • Brightfolio {new Date().getFullYear()}</p>
          </div>
        </div>

        {/* Right Form Container */}
        <div className="lg:w-2/3 flex flex-col justify-center min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`step-${currentStep}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-[#0A0A0A]/80 backdrop-blur-2xl rounded-[2rem] border border-white/5 p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden"
            >
              {/* Form Mobile Header (Hidden on Desktop) */}
              <div className="lg:hidden mb-10 flex items-center justify-between pb-6 border-b border-white/5">
                <div>
                  <p className="text-[#BF953F] text-[10px] font-mono tracking-widest uppercase mb-2">Step 0{currentStep} / {steps.length}</p>
                  <h2 className="text-2xl font-bold text-white tracking-tight">{steps[currentStep - 1].title}</h2>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#111] border border-white/5 flex items-center justify-center">
                  {(() => {
                    const CurrentIcon = steps[currentStep - 1].icon;
                    return <CurrentIcon className="w-5 h-5 text-white/50" />;
                  })()}
                </div>
              </div>

              {/* Form Steps Rendering */}
              {/* === STEP 1: PERSONAL INFO === */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <motion.div variants={elementVariants as any} className="hidden lg:block mb-12">
                    <p className="text-[#BF953F] font-mono tracking-widest uppercase text-sm mb-4">Welcome</p>
                    <h2 className="text-4xl font-bold text-white tracking-tight">Let's get to know you.</h2>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <motion.div variants={elementVariants as any} className="md:col-span-2 group">
                      <label className="block text-xs font-bold tracking-widest uppercase text-white/40 mb-3 ml-1 group-focus-within:text-[#BF953F] transition-colors">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => updateFormData("fullName", e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-[#111] border border-white/5 rounded-2xl px-6 py-5 text-white text-lg placeholder:text-white/20 focus:outline-none focus:bg-[#151515] focus:border-[#BF953F]/50 transition-all font-light"
                      />
                    </motion.div>

                    <motion.div variants={elementVariants as any} className="group">
                      <label className="block text-xs font-bold tracking-widest uppercase text-white/40 mb-3 ml-1 group-focus-within:text-[#BF953F] transition-colors">
                        Secure Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-[#111] border border-white/5 rounded-2xl px-6 py-5 text-white text-lg placeholder:text-white/20 focus:outline-none focus:bg-[#151515] focus:border-[#BF953F]/50 transition-all font-light"
                      />
                    </motion.div>

                    <motion.div variants={elementVariants as any} className="group">
                      <label className="block text-xs font-bold tracking-widest uppercase text-white/40 mb-3 ml-1 group-focus-within:text-[#BF953F] transition-colors">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        placeholder="+91 90000 00000"
                        className="w-full bg-[#111] border border-white/5 rounded-2xl px-6 py-5 text-white text-lg placeholder:text-white/20 focus:outline-none focus:bg-[#151515] focus:border-[#BF953F]/50 transition-all font-light"
                      />
                    </motion.div>

                    <motion.div variants={elementVariants as any} className="md:col-span-2 group">
                      <label className="block text-xs font-bold tracking-widest uppercase text-white/40 mb-3 ml-1 group-focus-within:text-white/80 transition-colors">
                        Professional Occupation <span className="opacity-50">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.occupation}
                        onChange={(e) => updateFormData("occupation", e.target.value)}
                        placeholder="Software Engineer, Executive, etc."
                        className="w-full bg-[#111] border border-white/5 rounded-2xl px-6 py-5 text-white text-lg placeholder:text-white/20 focus:outline-none focus:bg-[#151515] focus:border-white/20 transition-all font-light"
                      />
                    </motion.div>
                  </div>
                </div>
              )}

              {/* === STEP 2: EXPERIENCE === */}
              {currentStep === 2 && (
                <div className="space-y-12">
                  <motion.div variants={elementVariants} className="hidden lg:block">
                    <p className="text-[#BF953F] font-mono tracking-widest uppercase text-sm mb-4">Your Background</p>
                    <h2 className="text-4xl font-bold text-white tracking-tight">Hi {firstName}, what's your trading experience?</h2>
                  </motion.div>

                  <motion.div variants={elementVariants}>
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/40 mb-6">Select your experience level</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {experienceOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => updateFormData("investmentExperience", option.value)}
                          className={`relative text-left p-6 lg:p-8 rounded-[1.5rem] border transition-all duration-500 overflow-hidden group ${formData.investmentExperience === option.value
                            ? "bg-[#BF953F]/10 border-[#BF953F]/50 shadow-[0_0_40px_rgba(191,149,63,0.1)]"
                            : "bg-[#111] border-white/5 hover:bg-[#151515] hover:border-white/10"
                            }`}
                        >
                          <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] transition-all duration-500 ${formData.investmentExperience === option.value ? 'bg-[#BF953F]/20 translate-x-10 -translate-y-10' : 'bg-transparent'}`} />

                          <div className="relative z-10 flex items-center justify-between">
                            <div>
                              <p className={`text-xl font-bold tracking-tight mb-2 ${formData.investmentExperience === option.value ? "text-white" : "text-white/70"}`}>{option.label}</p>
                              <p className="text-sm text-white/40 font-light">{option.description}</p>
                            </div>
                            <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${formData.investmentExperience === option.value ? "border-[#BF953F] bg-[#BF953F]" : "border-white/10"}`}>
                              {formData.investmentExperience === option.value && <div className="w-2 h-2 rounded-full bg-black" />}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={elementVariants} className="pt-8 border-t border-white/5">
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/40 mb-6">Discovery Source</label>
                    <div className="flex flex-wrap gap-3">
                      {hearAboutOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => updateFormData("howDidYouHear", option)}
                          className={`px-6 py-3 rounded-full text-sm tracking-wide transition-all duration-300 ${formData.howDidYouHear === option
                            ? "bg-white text-black font-bold"
                            : "bg-[#111] border border-white/5 text-white/50 hover:bg-[#151515] hover:text-white/80"
                            }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}

              {/* === STEP 3: GOALS === */}
              {currentStep === 3 && (
                <div className="space-y-12">
                  <motion.div variants={elementVariants} className="hidden lg:block">
                    <p className="text-[#BF953F] font-mono tracking-widest uppercase text-sm mb-4">Your Goals</p>
                    <h2 className="text-4xl font-bold text-white tracking-tight">What are you looking to achieve?</h2>
                  </motion.div>

                  <motion.div variants={elementVariants}>
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/40 mb-6">Your primary goal</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {goalOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => updateFormData("investmentGoal", option.value)}
                          className={`relative text-left px-6 py-6 rounded-[1.5rem] border transition-all duration-500 overflow-hidden ${formData.investmentGoal === option.value
                            ? "bg-[#BF953F]/10 border-[#BF953F]/50 shadow-[0_0_30px_rgba(191,149,63,0.1)]"
                            : "bg-[#111] border-white/5 hover:bg-[#151515] hover:border-white/10"
                            }`}
                        >
                          <p className={`text-lg font-bold tracking-tight mb-1 ${formData.investmentGoal === option.value ? "text-white" : "text-white/70"}`}>{option.label}</p>
                          <p className="text-sm text-white/40 font-light">{option.description}</p>
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={elementVariants} className="pt-8 border-t border-white/5">
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/40 mb-6">Risk Tolerance Profile</label>
                    <div className="space-y-4">
                      {riskOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => updateFormData("riskTolerance", option.value)}
                          className={`w-full relative text-left p-6 rounded-2xl border transition-all duration-500 flex items-center justify-between ${formData.riskTolerance === option.value
                            ? "bg-[#BF953F]/10 border-[#BF953F]/50 shadow-[0_0_30px_rgba(191,149,63,0.1)]"
                            : "bg-[#111] border-white/5 hover:bg-[#151515] hover:border-white/10"
                            }`}
                        >
                          <div>
                            <p className={`text-lg font-bold tracking-tight mb-1 ${formData.riskTolerance === option.value ? "text-[#BF953F]" : "text-white/70"}`}>{option.label}</p>
                            <p className="text-sm text-white/40 font-light">{option.description}</p>
                          </div>
                          {formData.riskTolerance === option.value && <CheckCircle2 className="w-6 h-6 text-[#BF953F]" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}

              {/* === STEP 4: PREFERENCES === */}
              {currentStep === 4 && (
                <div className="space-y-12">
                  <motion.div variants={elementVariants} className="hidden lg:block">
                    <p className="text-[#BF953F] font-mono tracking-widest uppercase text-sm mb-4">Finishing Up</p>
                    <h2 className="text-4xl font-bold text-white tracking-tight">Let's tailor your experience, {firstName}.</h2>
                  </motion.div>

                  <motion.div variants={elementVariants}>
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/40 mb-6">Learning Budget</label>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {investmentAmounts.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => updateFormData("investmentAmount", option.value)}
                          className={`py-8 rounded-2xl border text-center transition-all duration-500 px-2 ${formData.investmentAmount === option.value
                            ? "bg-[#BF953F]/10 border-[#BF953F]/50 shadow-[0_0_30px_rgba(191,149,63,0.15)] scale-105 z-10"
                            : "bg-[#111] border-white/5 hover:bg-[#151515] hover:border-white/10"
                            }`}
                        >
                          <span className={`text-xl lg:text-2xl font-black tracking-tighter ${formData.investmentAmount === option.value ? "text-white" : "text-white/50"}`}>
                            {option.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={elementVariants} className="pt-8 border-t border-white/5">
                    <div className="flex items-center justify-between mb-6">
                      <label className="block text-xs font-bold tracking-widest uppercase text-white/40">Services Interested In</label>
                      <span className="text-xs text-white/20 font-mono tracking-widest uppercase">Multi-Select Allowed</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service) => {
                        const IconComponent = service.icon === "chart" ? BarChart3 :
                          service.icon === "bitcoin" ? Bitcoin :
                            service.icon === "globe" ? Globe : Layers
                        const isSelected = formData.preferredServices.includes(service.value)

                        return (
                          <button
                            key={service.value}
                            onClick={() => toggleService(service.value)}
                            className={`p-6 rounded-[1.5rem] border transition-all duration-500 overflow-hidden relative ${isSelected
                              ? "bg-[#BF953F]/10 border-[#BF953F]/50 shadow-[0_0_30px_rgba(191,149,63,0.1)]"
                              : "bg-[#111] border-white/5 hover:bg-[#151515] hover:border-white/10"
                              }`}
                          >
                            {isSelected && <div className="absolute top-0 right-0 w-32 h-32 bg-[#BF953F]/20 blur-[50px] rounded-full translate-x-10 -translate-y-10 pointer-events-none" />}
                            <div className="relative z-10 flex items-center gap-5">
                              <div className={`w-14 h-14 rounded-full flex flex-shrink-0 items-center justify-center transition-all duration-500 ${isSelected ? 'bg-gradient-to-br from-[#BF953F] to-[#7d6023] shadow-lg' : 'bg-white/5 border border-white/10'}`}>
                                <IconComponent className={`w-6 h-6 ${isSelected ? 'text-black' : 'text-white/40'}`} />
                              </div>
                              <div className="flex-1 text-left">
                                <p className={`text-xl font-bold tracking-tight ${isSelected ? 'text-white' : 'text-white/60'}`}>{service.label}</p>
                              </div>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </motion.div>
                </div>
              )}

              {/* === CONTROLS NAVIGATION === */}
              <motion.div variants={elementVariants as any} className="mt-16 pt-8 border-t border-white/5 flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
                <button
                  onClick={handleBack}
                  className={`group flex items-center justify-center gap-3 px-6 h-14 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 ${currentStep === 1
                    ? "opacity-0 pointer-events-none"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                    }`}
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span>Back</span>
                </button>

                <button
                  onClick={handleNext}
                  disabled={!canProceed() || isSubmitting}
                  className={`group flex items-center justify-center gap-3 w-full sm:w-auto px-10 h-14 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-500 overflow-hidden relative ${canProceed() && !isSubmitting
                    ? "bg-white text-black hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                    : "bg-[#111] text-white/20 border border-white/5 cursor-not-allowed"
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : currentStep === 4 ? (
                    <>
                      <span className="relative z-10">Submit</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#BF953F] to-[#FCEABB] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </>
                  ) : (
                    <>
                      <span>Next Step</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </motion.div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
