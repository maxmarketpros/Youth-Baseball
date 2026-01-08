"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Video, Settings } from "lucide-react"

const scrollToBooking = () => {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/2.jpg')" }} />
      <div className="absolute inset-0 bg-primary/75" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight text-balance leading-tight">
          Build Better Players.
          <br />
          <span className="text-accent">Build Bigger Confidence.</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-sans text-pretty">
          Private 1-on-1 hitting, pitching, and outfield lessons tailored to ages 6–18. Local training that gets
          results.
        </p>

        <div className="mt-10">
          <Button
            size="lg"
            onClick={scrollToBooking}
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 py-6 text-lg font-sans font-bold shadow-2xl hover:scale-105 transition-transform"
          >
            Book Your First Lesson
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Badge
            variant="secondary"
            className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2 text-sm font-sans"
          >
            <Users className="w-4 h-4 mr-2" />
            Ages 6–18
          </Badge>
          <Badge
            variant="secondary"
            className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2 text-sm font-sans"
          >
            <Video className="w-4 h-4 mr-2" />
            Video Analysis
          </Badge>
          <Badge
            variant="secondary"
            className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2 text-sm font-sans"
          >
            <Settings className="w-4 h-4 mr-2" />
            Mechanics Focused
          </Badge>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
