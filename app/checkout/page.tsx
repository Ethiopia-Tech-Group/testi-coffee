"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/checkout-form"
import { OrderSummary } from "@/components/order-summary"

interface CartItem {
  productId: string
  quantity: number
}

export default function CheckoutPage() {
  const router = useRouter()
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Mock cart items
  const cartItems: CartItem[] = [
    { productId: "1", quantity: 2 },
    { productId: "2", quantity: 1 },
  ]

  const handleCheckoutSubmit = (data: any) => {
    // Simulate order processing
    console.log("Order submitted:", data)
    setShowConfirmation(true)

    // Redirect after 2 seconds
    setTimeout(() => {
      router.push("/order-confirmation")
    }, 2000)
  }

  if (showConfirmation) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <span className="text-3xl text-green-600">✓</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600 mb-8">Your order has been placed successfully. Redirecting...</p>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-gray-900">Checkout</h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <CheckoutForm onSubmit={handleCheckoutSubmit} />
            </div>

            {/* Order Summary */}
            <div>
              <OrderSummary items={cartItems} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
