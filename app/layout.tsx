import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ProgressiveBlur } from "@/components/progressive-blur"
import { HelpDeskWidget } from "@/components/help-desk-widget"

import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://brightfoliosolutions.com"),
  title: {
    default: "Brightfolio Solutions | Premier Trading Education & Certification Platform",
    template: "%s | Brightfolio Solutions",
  },
  description:
    "Brightfolio Solutions is India's leading trading education platform. Learn stock trading, cryptocurrency, global markets & investment strategies from expert mentors. Join 10,000+ successful students.",
  keywords: [
    "Brightfolio",
    "BrightFolio",
    "Brightfolio Solutions",
    "brightfolio solutions",
    "trading education",
    "stock trading course",
    "cryptocurrency trading",
    "global markets trading course",
    "trading academy India",
    "learn trading",
    "investment education",
    "trading certification",
    "stock market education",
    "trading mentorship",
    "financial education India",
    "trading courses online",
    "learn stock market",
    "crypto trading course",
  ],
  authors: [{ name: "Brightfolio Solutions", url: "https://brightfoliosolutions.com" }],
  creator: "Brightfolio Solutions",
  publisher: "Brightfolio Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://brightfoliosolutions.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://brightfoliosolutions.com",
    siteName: "Brightfolio Solutions",
    title: "Brightfolio Solutions | Premier Trading Education & Certification Platform",
    description:
      "Master the art of trading with India's top trading education platform. Expert-led courses in stocks, crypto, global markets & more. Join 10,000+ successful students.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brightfolio Solutions - Trading Education Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brightfolio Solutions | Trading Education Platform",
    description:
      "Learn trading from experts. Stock, crypto & global markets courses. Join 10,000+ successful students at India's premier trading academy.",
    images: ["/og-image.jpg"],
    creator: "@brightfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#D4AF37" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "education",
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased bg-[#0A0A0A] overflow-x-hidden`} suppressHydrationWarning>
        <ProgressiveBlur />
        {children}
        <HelpDeskWidget />
        <Analytics />
      </body>
    </html>
  )
}
