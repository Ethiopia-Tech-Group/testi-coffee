"use client"

import { products } from "@/lib/mock-data"
import Link from "next/link"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface CartItem {
  productId: string
  quantity: number
  grindType: string
  packageSize: number
}

interface CartItemsProps {
  items: CartItem[]
  onUpdateQuantity: (productId: string, quantity: number) => void
  onRemove: (productId: string) => void
}

export function CartItems({ items, onUpdateQuantity, onRemove }: CartItemsProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">Your cart is empty</p>
        <Link href="/shop">
          <Button className="coffee-primary-btn">Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const product = products.find((p) => p.id === item.productId)
        if (!product) return null

        return (
          <Card key={item.productId}>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Image */}
                <div className="w-24 h-24 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <Link href={`/product/${product.id}`} className="hover:text-[#3B6638] transition">
                    <h3 className="font-semibold text-gray-900 truncate">{product.name}</h3>
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">{product.origin}</p>
                  <div className="text-sm text-gray-600 mt-2 space-y-1">
                    <p>Grind: {item.grindType}</p>
                    <p>Size: {item.packageSize}g</p>
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-200 rounded-lg">
                    <button
                      onClick={() => onUpdateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                      className="px-3 py-2 text-gray-700 hover:bg-gray-100 transition"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 font-semibold text-gray-900">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
                      className="px-3 py-2 text-gray-700 hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>

                  {/* Price */}
                  <div className="text-right min-w-fit">
                    <p className="font-semibold text-gray-900">${(product.price * item.quantity).toFixed(2)}</p>
                    <p className="text-sm text-gray-600">${product.price} each</p>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => onRemove(item.productId)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
