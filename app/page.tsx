import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MarqueeSection } from "@/components/marquee-section"
import { CoreValuesSection } from "@/components/core-values-section"
import { BenefitsSection } from "@/components/benefits-section"
import { EducationSection } from "@/components/education-section"
import { StatsSection } from "@/components/stats-section"
import { InvestmentModulesSection } from "@/components/investment-modules-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden w-full">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MarqueeSection />
      <CoreValuesSection />
      <BenefitsSection />
      <EducationSection />
      <StatsSection />
      <InvestmentModulesSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </main>
  )
}
