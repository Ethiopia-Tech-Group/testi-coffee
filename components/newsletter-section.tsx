"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated submission
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="section-spacing bg-[#3B6638]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Never Miss a Roast</h2>
        <p className="text-lg text-green-100 mb-8">
          Subscribe to our newsletter for exclusive offers, new releases, and brewing tips.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <Button type="submit" className="bg-white text-[#3B6638] hover:bg-gray-100 font-semibold px-8">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
