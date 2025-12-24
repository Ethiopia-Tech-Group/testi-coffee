"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartItems } from "@/components/cart-items"
import { OrderSummary } from "@/components/order-summary"
import { useRouter } from "next/navigation"

interface CartItem {
  productId: string
  quantity: number
  grindType: string
  packageSize: number
}

export default function CartPage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      productId: "1",
      quantity: 2,
      grindType: "Filter",
      packageSize: 250,
    },
    {
      productId: "2",
      quantity: 1,
      grindType: "Espresso",
      packageSize: 500,
    },
  ])

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((items) => items.map((item) => (item.productId === productId ? { ...item, quantity } : item)))
  }

  const handleRemove = (productId: string) => {
    setCartItems((items) => items.filter((item) => item.productId !== productId))
  }

  const handleCheckout = () => {
    router.push("/checkout")
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600 mt-2">{cartItems.length} items in your cart</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {cartItems.length === 0 ? (
            <CartItems items={[]} onUpdateQuantity={() => {}} onRemove={() => {}} />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <CartItems items={cartItems} onUpdateQuantity={handleUpdateQuantity} onRemove={handleRemove} />
              </div>

              {/* Summary */}
              <div>
                <OrderSummary items={cartItems} onCheckout={handleCheckout} />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
