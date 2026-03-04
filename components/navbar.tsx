"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight, Home, Users, BookOpen, Layers, MessageSquare, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { ProgressiveBlur } from "@/components/core/progressive-blur"

const navLinks = [
  { label: "Home", url: "/", icon: Home },
  { label: "About", url: "/about", icon: Users },
  { label: "Modules", url: "/modules", icon: Layers },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault()

    if (url.startsWith("/#")) {
      const hash = url.substring(1)
      if (pathname === "/") {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        router.push("/")
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
      }
    } else {
      window.scrollTo(0, 0)
      router.push(url)
    }

    setIsMobileMenuOpen(false)
  }

  const isActiveLink = (url: string) => {
    if (url === "/") return pathname === "/"
    if (url.startsWith("/#")) return pathname === "/"
    return pathname === url
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <AnimatePresence>
          {(isScrolled || isMobileMenuOpen) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 -z-10 overflow-hidden"
            >
              <ProgressiveBlur
                direction="top"
                blurIntensity={6}
                blurLayers={16}
                className="absolute inset-0 h-full w-full"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="/" onClick={(e) => handleNavClick(e, "/")} className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/images/design-mode/logobright.png"
                alt="Brightfolio Solutions Logo"
                width={50}
                height={50}
                className="object-contain w-10 h-10 sm:w-[50px] sm:h-[50px]"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold gold-gradient-text leading-tight">Brightfolio</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground leading-tight">Solutions</span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.filter(link => link.label !== "Home").map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  onClick={(e) => handleNavClick(e, link.url)}
                  className={`transition-colors duration-300 text-sm font-medium ${isActiveLink(link.url) ? "text-[#BF953F]" : "text-muted-foreground hover:text-white"
                    }`}
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/onboarding"
                className="px-6 py-2.5 gold-gradient-bg text-[#050505] font-semibold rounded-lg transition-all duration-300 hover:gold-glow hover:scale-105 text-sm"
              >
                Book Free Demo
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white relative z-50"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav >

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {
          isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Sidebar */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-[280px] border-l border-yellow-500/10 z-40 md:hidden flex flex-col overflow-hidden"
              >
                <ProgressiveBlur
                  direction="left"
                  blurIntensity={1.5}
                  blurLayers={10}
                  className="absolute inset-0 h-full w-full -z-10"
                />
                {/* Sidebar Header */}
                <div className="p-6 pt-24 border-b border-yellow-500/10">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/design-mode/logobright.png"
                      alt="Brightfolio Solutions Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                    <div>
                      <p className="font-bold gold-gradient-text">Brightfolio</p>
                      <p className="text-xs text-muted-foreground">Solutions</p>
                    </div>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 py-6 px-4 overflow-y-auto">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4 px-2">Navigation</p>
                  <div className="space-y-1">
                    {navLinks.map((link, index) => {
                      const Icon = link.icon
                      const isActive = isActiveLink(link.url)
                      return (
                        <motion.a
                          key={link.label}
                          href={link.url}
                          onClick={(e) => handleNavClick(e, link.url)}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300 group ${isActive
                            ? "bg-[#BF953F]/10 text-[#BF953F]"
                            : "text-muted-foreground hover:text-white hover:bg-[#1a1a1a]"
                            }`}
                        >
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${isActive ? "bg-[#BF953F]/20" : "bg-[#1a1a1a] group-hover:bg-[#252525]"
                            }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="font-medium flex-1">{link.label}</span>
                          <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-[#BF953F]" : "opacity-0 group-hover:opacity-100"}`} />
                        </motion.a>
                      )
                    })}
                  </div>
                </div>

                {/* Sidebar Footer */}
                <div className="p-4 border-t border-yellow-500/10">
                  <Link
                    href="/onboarding"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 gold-gradient-bg text-[#050505] font-semibold rounded-lg transition-all duration-300"
                  >
                    Book Free Demo
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                    <Phone className="w-3 h-3" />
                    <span>+91 92171 62001</span>
                  </div>
                </div>
              </motion.div>
            </>
          )
        }
      </AnimatePresence >
    </>
  )
}
