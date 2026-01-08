"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide">
            Ready to Level Up?
          </h2>
          <p className="mt-4 text-white/80 font-sans text-lg">Call or text to grab your free spot.</p>
          <a
            href="tel:5628840746"
            className="inline-block mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-accent hover:text-accent/80 transition-colors"
          >
            (562) 884-0746
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <h3 className="font-heading text-xl font-bold uppercase tracking-wide mb-6">Send a Message</h3>
            <form
              name="contact"
              method="POST"
              action="/thank-you"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div>
                <Label htmlFor="footer-name" className="font-sans text-white/80">
                  Name
                </Label>
                <Input
                  id="footer-name"
                  name="name"
                  placeholder="Your name"
                  className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl"
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="footer-age" className="font-sans text-white/80">
                    Player Age
                  </Label>
                  <Input
                    id="footer-age"
                    name="age"
                    placeholder="e.g., 12"
                    className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="footer-position" className="font-sans text-white/80">
                    Position
                  </Label>
                  <Input
                    id="footer-position"
                    name="position"
                    placeholder="e.g., Outfield"
                    className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="footer-message" className="font-sans text-white/80">
                  Message
                </Label>
                <Textarea
                  id="footer-message"
                  name="message"
                  placeholder="Tell us about your training goals..."
                  rows={4}
                  className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-sans font-bold py-6"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide">Contact Info</h3>
              <div className="space-y-4">
                <a
                  href="tel:5628840746"
                  className="flex items-center gap-4 text-white/80 hover:text-white transition-colors font-sans"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  (562) 884-0746
                </a>
                <div className="flex items-center gap-4 text-white/80 font-sans">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  Long Beach, CA
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="font-heading text-2xl font-bold tracking-wider">YOUTH BASEBALL TRAINING</p>
              <p className="mt-2 text-white/60 font-sans text-sm">Ac {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
