"use client"

import { Leaf, Truck, Coffee, Check } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: Leaf,
      title: "Ethically Sourced",
      description: "We partner directly with farmers to ensure fair trade and sustainable practices.",
    },
    {
      icon: Coffee,
      title: "Freshly Roasted",
      description: "Roasted to order and shipped within 24 hours for maximum freshness.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Free shipping on orders over $50. Delivered within 3-5 business days.",
    },
    {
      icon: Check,
      title: "Quality Guaranteed",
      description: "Not satisfied? We offer 100% satisfaction guarantee with no questions asked.",
    },
  ]

  return (
    <section className="section-spacing bg-[#f5f1e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose BrewLux?</h2>
          <p className="text-lg text-gray-600">What sets us apart from other coffee roasters.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3B6638] bg-opacity-10 mb-4">
                  <IconComponent className="w-8 h-8 text-[#3B6638]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
