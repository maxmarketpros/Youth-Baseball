import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What ages do you train?",
    answer:
      "We work with athletes ages 6–18. Training is tailored to each player's developmental stage and skill level.",
  },
  {
    question: "Where are lessons held?",
    answer:
      "Lessons are held at local fields in the area. Call or text for specific location details based on your preference.",
  },
  {
    question: "What should my child bring?",
    answer:
      "Players should bring their own gear (glove, bat, helmet if hitting) and plenty of water. We'll provide any additional training equipment needed.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We require 24-hour notice for cancellations. This allows us to offer the slot to other players and keeps our schedule running smoothly.",
  },
  {
    question: "How do I book a session?",
    answer:
      "Simply call or text us at (562) 884-0746, or use the booking button on this page. We'll get back to you within 24 hours to confirm your slot.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary uppercase tracking-wide">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-2xl border-none shadow-lg px-6 data-[state=open]:shadow-xl transition-shadow"
            >
              <AccordionTrigger className="font-sans font-semibold text-foreground text-left hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-muted-foreground pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
