"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Video, Trophy, Calendar, Film, Target, Clock } from "lucide-react"

const packages = [
  {
    name: "Free First Lesson",
    price: "$0",
    priceLabel: "FREE",
    duration: "30 Minutes",
    description: "Skill assessment & fit check. No commitment.",
    features: ["Initial skill evaluation", "Training plan preview", "Q&A with coach"],
    popular: false,
  },
  {
    name: "30 Minute Session",
    price: "$45",
    priceLabel: "per session",
    duration: "30 Minutes",
    description: "Focused 1-on-1 training for quick skill work.",
    features: ["Personalized drills", "Mechanics breakdown", "Progress tracking", "+$100 for video analysis"],
    popular: false,
  },
  {
    name: "60 Minute Session",
    price: "$65",
    priceLabel: "per session",
    duration: "60 Minutes",
    description: "Full intensive session for comprehensive training.",
    features: [
      "Extended personalized drills",
      "Deep mechanics breakdown",
      "Progress tracking",
      "+$100 for video analysis",
    ],
    popular: true,
  },
]

const elitePackage = {
  name: "Elite Package",
  price: "$1,500",
  duration: "Full Season",
  description: "The ultimate training program for athletes committed to reaching the next level.",
  features: [
    { icon: Clock, text: "30 sessions (60 min each)" },
    { icon: Calendar, text: "Priority scheduling" },
    { icon: Film, text: "Video analysis included" },
    { icon: Target, text: "Custom training program" },
    { icon: Video, text: "Game film review" },
  ],
}

const scrollToBooking = () => {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
}

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary uppercase tracking-wide">
            Training Packages
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Flexible options designed to fit your athlete's needs and your schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`relative rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl ${
                pkg.popular ? "border-accent shadow-xl scale-105" : "border-border shadow-lg"
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-sans font-semibold px-4 py-1">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pt-8 pb-4">
                <h3 className="font-heading text-xl font-bold text-foreground uppercase tracking-wide">{pkg.name}</h3>
                <div className="mt-4">
                  <span className="font-heading text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground font-sans ml-2">{pkg.priceLabel}</span>
                </div>
                <p className="text-sm text-muted-foreground font-sans mt-2">{pkg.duration}</p>
              </CardHeader>
              <CardContent className="pb-8">
                <p className="text-center text-muted-foreground font-sans mb-6">{pkg.description}</p>
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      {feature.includes("$100") ? (
                        <Video className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      ) : (
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      )}
                      <span className="font-sans text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToBooking}
                  className={`w-full mt-8 rounded-full font-sans font-semibold ${
                    pkg.popular
                      ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                >
                  {pkg.price === "$0" ? "Book Free Session" : "Book Now"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          <Card className="relative overflow-hidden rounded-3xl border-2 border-accent bg-gradient-to-br from-primary via-primary to-primary/90 shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <Badge className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-accent text-accent-foreground font-sans font-bold px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm z-10">
              <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 fill-current" />
              Best Value
            </Badge>

            <div className="relative p-6 sm:p-8 md:p-12">
              {/* Header section */}
              <div className="pr-24 sm:pr-32 mb-8">
                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">
                  {elitePackage.name}
                </h3>
                <p className="mt-3 text-white/80 font-sans text-base sm:text-lg max-w-xl">{elitePackage.description}</p>
                <div className="mt-4 sm:mt-6 flex items-baseline gap-2 sm:gap-3">
                  <span className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                    {elitePackage.price}
                  </span>
                  <span className="text-white/70 font-sans text-base sm:text-lg">{elitePackage.duration}</span>
                </div>
              </div>

              {/* Features grid - always full width */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8">
                {elitePackage.features.map((feature) => (
                  <li
                    key={feature.text}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3"
                  >
                    <feature.icon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-sans text-white text-sm font-medium">{feature.text}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button - full width on mobile, auto on larger */}
              <div className="flex justify-center sm:justify-start">
                <Button
                  onClick={scrollToBooking}
                  size="lg"
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-sans font-bold text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Claim Your Spot
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
