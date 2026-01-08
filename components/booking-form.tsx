"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react"

export function BookingForm() {
  return (
    <section id="booking" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-sans font-semibold uppercase tracking-wider mb-4">
            Get Started Today
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white uppercase tracking-wide">
            Book Your Session
          </h2>
          <p className="mt-4 text-xl text-white/80 font-sans max-w-2xl mx-auto">
            Ready to take your game to the next level? Fill out the form below and we'll get back to you within 24
            hours.
          </p>
          <p className="mt-2 text-lg text-accent font-sans font-semibold">
            Serving Long Beach, CA and surrounding areas
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide mb-6">What You Get</h3>
              <ul className="space-y-4">
                {[
                  "Free first lesson - no commitment",
                  "One-on-one personalized coaching",
                  "Video analysis included with 60 min sessions",
                  "Flexible scheduling",
                  "Progress tracking & feedback",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent rounded-2xl p-6 text-center">
              <p className="font-heading text-lg font-bold text-white uppercase">Questions?</p>
              <p className="font-sans text-white/90 mt-2">Call or text anytime</p>
              <a
                href="tel:5628840746"
                className="font-heading text-2xl font-bold text-white mt-2 block hover:underline"
              >
                (562) 884-0746
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              name="booking"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10"
            >
              <input type="hidden" name="form-name" value="booking" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="parentName"
                      className="font-sans font-semibold text-primary flex items-center gap-2"
                    >
                      <User className="w-4 h-4 text-accent" />
                      Parent/Guardian Name
                    </Label>
                    <Input
                      id="parentName"
                      name="parentName"
                      placeholder="John Smith"
                      className="h-12 rounded-xl border-2 border-muted focus:border-accent bg-muted/30"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="playerName"
                      className="font-sans font-semibold text-primary flex items-center gap-2"
                    >
                      <User className="w-4 h-4 text-accent" />
                      Player Name
                    </Label>
                    <Input
                      id="playerName"
                      name="playerName"
                      placeholder="Jake Smith"
                      className="h-12 rounded-xl border-2 border-muted focus:border-accent bg-muted/30"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-sans font-semibold text-primary flex items-center gap-2">
                      <Mail className="w-4 h-4 text-accent" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="h-12 rounded-xl border-2 border-muted focus:border-accent bg-muted/30"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-sans font-semibold text-primary flex items-center gap-2">
                      <Phone className="w-4 h-4 text-accent" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="h-12 rounded-xl border-2 border-muted focus:border-accent bg-muted/30"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="playerAge" className="font-sans font-semibold text-primary flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      Player Age
                    </Label>
                    <select
                      id="playerAge"
                      name="playerAge"
                      className="flex h-12 w-full rounded-xl border-2 border-muted bg-muted/30 px-3 py-2 text-base focus:border-accent focus:outline-none"
                      required
                    >
                      <option value="">Select age</option>
                      {Array.from({ length: 13 }, (_, i) => i + 6).map((age) => (
                        <option key={age} value={age}>
                          {age} years old
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="sessionType"
                      className="font-sans font-semibold text-primary flex items-center gap-2"
                    >
                      <Clock className="w-4 h-4 text-accent" />
                      Session Type
                    </Label>
                    <select
                      id="sessionType"
                      name="sessionType"
                      className="flex h-12 w-full rounded-xl border-2 border-muted bg-muted/30 px-3 py-2 text-base focus:border-accent focus:outline-none"
                      required
                    >
                      <option value="">Select session</option>
                      <option value="free-first-lesson">Free First Lesson (30 min)</option>
                      <option value="30-min-session-45">30 Minute Session - $45</option>
                      <option value="30-min-video-145">30 Minute Session + Video - $145</option>
                      <option value="60-min-session-65">60 Minute Session - $65</option>
                      <option value="60-min-video-165">60 Minute Session + Video - $165</option>
                      <option value="elite-package-1500">Elite Package - $1,500</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-sans font-semibold text-primary flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-accent" />
                    Additional Information (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your player's goals, experience level, or any specific areas you'd like to focus on..."
                    className="rounded-xl border-2 border-muted focus:border-accent bg-muted/30 min-h-[120px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white rounded-full py-7 text-lg font-sans font-bold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
                >
                  Submit Booking Request
                </Button>

                <p className="text-center text-sm text-muted-foreground font-sans">
                  We'll confirm your session within 24 hours. Your first lesson is always FREE!
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
