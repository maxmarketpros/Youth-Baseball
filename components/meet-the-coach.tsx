import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function MeetTheCoach() {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/3.jpg" alt="Professional Baseball Coach" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-2xl shadow-xl hidden sm:block">
              <span className="font-heading text-2xl font-bold">10+</span>
              <span className="font-sans text-sm ml-2">Years Experience</span>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary uppercase tracking-wide">
              Train With Experience
            </h2>
            <p className="mt-6 text-lg text-muted-foreground font-sans leading-relaxed">
              I don't just teach drills; I teach the game. With years of competitive experience, I blend discipline with
              energy to help kids understand <em>why</em> they are doing what they're doing.
            </p>
            <p className="mt-4 text-lg text-foreground font-sans font-medium">
              My Goal: Help athletes improve fast—while still loving the game.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Individualized training plans",
                "Focus on fundamentals & mechanics",
                "Game situation simulations",
                "Positive, high-energy environment",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-sans text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
