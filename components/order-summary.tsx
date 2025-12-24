"use client"

import { products } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CartItem {
  productId: string
  quantity: number
}

interface OrderSummaryProps {
  items: CartItem[]
  onCheckout?: () => void
}

export function OrderSummary({ items, onCheckout }: OrderSummaryProps) {
  const subtotal = items.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId)
    return sum + (product?.price || 0) * item.quantity
  }, 0)

  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <Card className="h-fit sticky top-24">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2 pb-4 border-b border-gray-200">
          <div className="flex justify-between text-gray-700">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Shipping</span>
            {shipping === 0 ? (
              <span className="text-green-600 font-medium">FREE</span>
            ) : (
              <span>${shipping.toFixed(2)}</span>
            )}
          </div>
          {shipping === 0 && <p className="text-xs text-green-600 font-medium">Free shipping applied</p>}
          <div className="flex justify-between text-gray-700">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex justify-between text-lg font-bold text-gray-900 pb-4">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <Button onClick={onCheckout} className="w-full coffee-primary-btn h-12 text-lg font-semibold">
          Proceed to Checkout
        </Button>

        <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
          Continue Shopping
        </Button>
      </CardContent>
    </Card>
  )
}
