"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShopFilters, type FilterState } from "@/components/shop-filters"
import { products } from "@/lib/mock-data"
import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ShopPage() {
  const [filters, setFilters] = useState<FilterState>({
    origins: [],
    roastLevels: [],
    priceRange: [0, 30],
    flavorProfiles: [],
  })
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false
      }

      // Origin filter
      if (filters.origins.length > 0 && !filters.origins.includes(product.origin)) {
        return false
      }

      // Roast level filter
      if (filters.roastLevels.length > 0 && !filters.roastLevels.includes(product.roastLevel)) {
        return false
      }

      // Price range filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }

      // Flavor profile filter
      if (filters.flavorProfiles.length > 0) {
        const hasMatchingFlavor = product.flavorProfile.some((flavor) => filters.flavorProfiles.includes(flavor))
        if (!hasMatchingFlavor) {
          return false
        }
      }

      return true
    })
  }, [filters, searchQuery])

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-gray-900">Shop Coffee</h1>
            <p className="text-gray-600 mt-2">Discover our collection of {filteredProducts.length} premium coffees</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="hidden lg:block lg:col-span-1">
              <ShopFilters onFilterChange={setFilters} onSearch={setSearchQuery} />
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-lg p-12 text-center">
                  <p className="text-lg text-gray-600">No products found matching your filters.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
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
                            <p className="text-xs font-semibold text-[#3B6638] uppercase tracking-wide">
                              {product.origin}
                            </p>
                            <h3 className="text-lg font-semibold text-gray-900 mt-1">{product.name}</h3>
                          </div>

                          {/* Roast Level Badge */}
                          <div className="mb-2">
                            <span className="inline-block px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded">
                              {product.roastLevel.charAt(0).toUpperCase() + product.roastLevel.slice(1)} Roast
                            </span>
                          </div>

                          {/* Flavor Profile */}
                          <div className="mb-3 flex flex-wrap gap-1">
                            {product.flavorProfile.slice(0, 2).map((flavor) => (
                              <span key={flavor} className="text-xs text-[#8B7355] bg-[#f5f1e8] px-2 py-1 rounded">
                                {flavor}
                              </span>
                            ))}
                          </div>

                          {/* Rating */}
                          <div className="flex items-center space-x-1 mb-3">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                            <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
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
                              disabled={!product.inStock}
                            >
                              <ShoppingCart className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
