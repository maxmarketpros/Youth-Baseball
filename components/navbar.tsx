"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault()
  document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
}

const scrollToBooking = () => {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMobileClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    smoothScroll(e, targetId)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span
              className={`font-heading text-xl sm:text-2xl font-bold tracking-wider transition-colors duration-300 ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              YOUTH BASEBALL TRAINING
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#training"
              onClick={(e) => smoothScroll(e, "training")}
              className={`font-sans transition-colors font-medium ${
                isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              Training
            </a>
            <a
              href="#about"
              onClick={(e) => smoothScroll(e, "about")}
              className={`font-sans transition-colors font-medium ${
                isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              About
            </a>
            <a
              href="#pricing"
              onClick={(e) => smoothScroll(e, "pricing")}
              className={`font-sans transition-colors font-medium ${
                isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={(e) => smoothScroll(e, "faq")}
              className={`font-sans transition-colors font-medium ${
                isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              FAQ
            </a>
          </div>

          <div className="hidden md:block">
            <Button
              onClick={scrollToBooking}
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 font-sans font-semibold"
            >
              Book FREE First Lesson
            </Button>
          </div>

          <button
            className={`md:hidden transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg rounded-2xl mt-2 p-6 shadow-xl">
            <div className="flex flex-col gap-4">
              <a
                href="#training"
                onClick={(e) => handleMobileClick(e, "training")}
                className="font-sans text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              >
                Training
              </a>
              <a
                href="#about"
                onClick={(e) => handleMobileClick(e, "about")}
                className="font-sans text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              >
                About
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleMobileClick(e, "pricing")}
                className="font-sans text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              >
                Pricing
              </a>
              <a
                href="#faq"
                onClick={(e) => handleMobileClick(e, "faq")}
                className="font-sans text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              >
                FAQ
              </a>
              <Button
                onClick={() => {
                  scrollToBooking()
                  setIsMobileMenuOpen(false)
                }}
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-sans font-semibold mt-2"
              >
                Book FREE First Lesson
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
