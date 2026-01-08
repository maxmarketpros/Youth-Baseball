"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "My child's confidence at the plate has completely changed. He actually wants to practice now!",
    author: "Sarah M.",
    role: "Parent of 12-year-old",
  },
  {
    quote: "He explains everything in a way kids can actually understand. Best investment we've made.",
    author: "Mike R.",
    role: "Parent of 10-year-old",
  },
  {
    quote: "We saw improvements after just one session. The video analysis was a game changer.",
    author: "Jennifer L.",
    role: "Parent of 14-year-old",
  },
  {
    quote: "Finally, a coach who focuses on mechanics AND keeps it fun. My son looks forward to every lesson.",
    author: "David K.",
    role: "Parent of 8-year-old",
  },
]

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 0.5
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide text-center">
          What Parents Are Saying
        </h2>
      </div>

      <div ref={scrollRef} className="flex gap-6 overflow-hidden" style={{ scrollBehavior: "auto" }}>
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <Card
            key={index}
            className="flex-shrink-0 w-[350px] bg-white/10 border-white/20 rounded-2xl backdrop-blur-sm"
          >
            <CardContent className="p-6">
              <Quote className="w-8 h-8 text-accent mb-4" />
              <p className="text-white font-sans text-lg leading-relaxed">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="font-sans font-semibold text-white">{testimonial.author}</p>
                <p className="font-sans text-sm text-white/70">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
