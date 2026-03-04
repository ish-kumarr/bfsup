"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export function SmoothScrolling() {
    useEffect(() => {
        // Initialize Lenis. Note: smoothWheel is true for desktop.
        // By default, smoothTouch is false, so it's naturally disabled on mobile/tablets.
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard awwwards easing
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Hijack anchor links for smooth scrolling via Lenis
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const anchor = target.closest("a")
            if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
                // Exclude Next.js internal router links if they don't have matching IDs on the current page
                const element = document.querySelector(anchor.hash) as HTMLElement
                if (element) {
                    e.preventDefault()
                    lenis.scrollTo(element, { offset: -50, duration: 1.5 })
                }
            }
        }

        document.documentElement.addEventListener("click", handleAnchorClick)

        return () => {
            lenis.destroy()
            document.documentElement.removeEventListener("click", handleAnchorClick)
        }
    }, [])

    return null
}
