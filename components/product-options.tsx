"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Heart } from "lucide-react"

interface ProductOptionsProps {
  productId: string
  grindOptions: string[]
  packageSizes: number[]
  inStock: boolean
}

export function ProductOptions({ grindOptions, packageSizes, inStock }: ProductOptionsProps) {
  const [selectedGrind, setSelectedGrind] = useState(grindOptions[0])
  const [selectedSize, setSelectedSize] = useState(packageSizes[0])
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = () => {
    console.log("Added to cart:", {
      grind: selectedGrind,
      size: selectedSize,
      quantity,
    })
  }

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Select Options</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Grind Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">Grind Type</label>
          <div className="grid grid-cols-2 gap-3">
            {grindOptions.map((grind) => (
              <button
                key={grind}
                onClick={() => setSelectedGrind(grind)}
                className={`py-3 px-4 rounded-lg border-2 font-medium transition ${
                  selectedGrind === grind
                    ? "border-[#3B6638] bg-[#3B6638] text-white"
                    : "border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                {grind}
              </button>
            ))}
          </div>
        </div>

        {/* Package Size */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">Package Size</label>
          <div className="grid grid-cols-3 gap-3">
            {packageSizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-3 px-4 rounded-lg border-2 font-medium transition ${
                  selectedSize === size
                    ? "border-[#3B6638] bg-[#3B6638] text-white"
                    : "border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                {size}g
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">Quantity</label>
          <div className="flex items-center border border-gray-200 rounded-lg w-fit">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
            >
              −
            </button>
            <span className="px-6 py-2 font-semibold text-gray-900">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={!inStock}
          className={`w-full h-12 text-lg font-semibold flex items-center justify-center gap-2 rounded-lg transition ${
            inStock ? "coffee-primary-btn" : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <ShoppingCart className="w-5 h-5" />
          {inStock ? "Add to Cart" : "Out of Stock"}
        </Button>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`w-full h-12 font-semibold rounded-lg border-2 flex items-center justify-center gap-2 transition ${
            isWishlisted
              ? "bg-red-50 border-red-300 text-red-600 hover:bg-red-100"
              : "border-gray-200 text-gray-700 hover:border-gray-300"
          }`}
        >
          <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
          {isWishlisted ? "Added to Wishlist" : "Add to Wishlist"}
        </button>

        {/* Stock Status */}
        <div className="pt-4 border-t border-gray-200">
          {inStock ? (
            <p className="text-green-700 font-medium text-sm">✓ In Stock - Ships within 24 hours</p>
          ) : (
            <p className="text-red-700 font-medium text-sm">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
