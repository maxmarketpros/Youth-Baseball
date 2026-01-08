import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { TrainingServices } from "@/components/training-services"
import { MeetTheCoach } from "@/components/meet-the-coach"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <TrainingServices />
      <MeetTheCoach />
      <Pricing />
      <Testimonials />
      <FAQ />
      <BookingForm />
      <Footer />
    </main>
  )
}
