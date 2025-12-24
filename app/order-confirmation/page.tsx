"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Package, Truck, MapPin } from "lucide-react"
import Link from "next/link"

export default function OrderConfirmationPage() {
  const orderNumber = "ORD-" + Math.random().toString(36).substring(2, 8).toUpperCase()
  const orderDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Success Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
              <p className="text-gray-600 mb-4">Thank you for your purchase</p>
              <p className="text-2xl font-bold text-gray-900">{orderNumber}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Order Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-600">Order Number</p>
                  <p className="text-lg font-semibold text-gray-900">{orderNumber}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Order Date</p>
                  <p className="text-lg font-semibold text-gray-900">{orderDate}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Amount</p>
                  <p className="text-lg font-semibold text-gray-900">$56.47</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Estimated Delivery</p>
                  <p className="text-lg font-semibold text-gray-900">Dec 28 - Jan 2</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Order Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, label: "Order Confirmed", date: "Just now", completed: true },
                  { icon: Package, label: "Processing", date: "Dec 23 - 24", completed: false },
                  { icon: Truck, label: "Shipped", date: "Dec 25", completed: false },
                  { icon: MapPin, label: "Delivered", date: "Dec 28 - Jan 2", completed: false },
                ].map((step, index) => {
                  const IconComponent = step.icon
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            step.completed ? "bg-green-100" : "bg-gray-100"
                          }`}
                        >
                          <IconComponent className={`w-6 h-6 ${step.completed ? "text-green-600" : "text-gray-400"}`} />
                        </div>
                        {index < 3 && (
                          <div className={`w-0.5 h-12 ${step.completed ? "bg-green-200" : "bg-gray-200"}`} />
                        )}
                      </div>
                      <div className="pt-1.5">
                        <p className={`font-semibold ${step.completed ? "text-gray-900" : "text-gray-600"}`}>
                          {step.label}
                        </p>
                        <p className="text-sm text-gray-600">{step.date}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/account" className="flex-1">
              <Button
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                View Account
              </Button>
            </Link>
            <Link href="/shop" className="flex-1">
              <Button className="w-full coffee-primary-btn">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
