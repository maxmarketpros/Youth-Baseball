import { Card, CardContent } from "@/components/ui/card"
import { Target, Brain, Calendar } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Personalized Mechanics",
    description: "Custom drills designed for your body type and skill level.",
  },
  {
    icon: Brain,
    title: "Mental Approach",
    description: "Learn the mindset and game intelligence of a pro player.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Easy booking that works for busy parents and athletes.",
  },
]

export function ValueProposition() {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary uppercase tracking-wide">
            Why Train With Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Every session is built around your athlete's unique needs and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-card border-none shadow-xl rounded-3xl hover:shadow-2xl transition-shadow duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="mt-3 text-muted-foreground font-sans">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
