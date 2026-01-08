"use client"

import Link from "next/link"

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-primary text-white px-6 py-16">
      <div className="max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Thanks for reaching out</p>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">We&apos;ll be in touch soon</h1>
        <p className="text-lg text-white/80 mb-8">
          Your message has been received and we&apos;ll respond within 24 hours to help you get started with the training
          plan you need.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-accent text-black font-semibold hover:bg-accent/90 transition"
        >
          Return to home
        </Link>
      </div>
    </main>
  )
}
