"use client"

import { products } from "@/lib/mock-data"
import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface FeaturedSectionProps {
  title: string
  subtitle: string
  productIds: string[]
}

export function FeaturedSection({ title, subtitle, productIds }: FeaturedSectionProps) {
  const featuredProducts = products.filter((p) => productIds.includes(p.id))

  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                <CardHeader className="p-0 overflow-hidden h-64 bg-gray-100">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  {/* Product Info */}
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-[#3B6638] uppercase tracking-wide">{product.origin}</p>
                    <h3 className="text-lg font-semibold text-gray-900 mt-1">{product.name}</h3>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="text-xs text-gray-600 ml-2">({product.reviews})</span>
                  </div>

                  {/* Stock Badge */}
                  <div className="mb-3">
                    {product.stockLevel === "in-stock" && (
                      <span className="inline-block px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded">
                        In Stock
                      </span>
                    )}
                    {product.stockLevel === "low-stock" && (
                      <span className="inline-block px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded">
                        Low Stock
                      </span>
                    )}
                    {product.stockLevel === "out-of-stock" && (
                      <span className="inline-block px-2 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded">
                        Out of Stock
                      </span>
                    )}
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    <Button
                      size="sm"
                      className="coffee-primary-btn"
                      onClick={(e) => {
                        e.preventDefault()
                      }}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
