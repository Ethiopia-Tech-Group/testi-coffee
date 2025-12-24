"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-[#3B6638] to-[#2d4e2a] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url(/placeholder.svg?height=600&width=1200&query=premium+coffee+beans+background)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Discover Premium
          <br />
          Single-Origin Coffee
        </h1>
        <p className="text-xl text-gray-100 mb-8 leading-relaxed">
          Ethically sourced, freshly roasted, and delivered straight to your door. Experience the finest coffee from
          around the world.
        </p>
        <Link href="/shop">
          <Button className="coffee-primary-btn text-lg px-8 py-6 h-auto">Shop Coffee</Button>
        </Link>
      </div>
    </section>
  )
}
