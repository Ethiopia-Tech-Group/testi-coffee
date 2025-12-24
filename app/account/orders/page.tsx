"use client"

import { orders } from "@/lib/mock-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AccountSidebar } from "@/components/account-sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, CheckCircle, Truck } from "lucide-react"

export default function OrderHistoryPage() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "shipped":
        return <Truck className="w-5 h-5 text-blue-600" />
      default:
        return <Package className="w-5 h-5 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-50 text-green-700"
      case "shipped":
        return "bg-blue-50 text-blue-700"
      default:
        return "bg-gray-50 text-gray-700"
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-gray-900">Order History</h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AccountSidebar />
            </div>

            {/* Orders */}
            <div className="lg:col-span-3 space-y-4">
              {orders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                      {/* Order ID */}
                      <div>
                        <p className="text-xs font-semibold text-gray-600 uppercase">Order Number</p>
                        <p className="text-lg font-bold text-gray-900 mt-1">{order.id}</p>
                      </div>

                      {/* Date */}
                      <div>
                        <p className="text-xs font-semibold text-gray-600 uppercase">Order Date</p>
                        <p className="text-gray-900 mt-1">{order.date}</p>
                      </div>

                      {/* Status */}
                      <div>
                        <p className="text-xs font-semibold text-gray-600 uppercase">Status</p>
                        <div
                          className={`inline-flex items-center space-x-2 mt-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}
                        >
                          {getStatusIcon(order.status)}
                          <span className="capitalize">{order.status}</span>
                        </div>
                      </div>

                      {/* Price and Button */}
                      <div className="flex items-end justify-between md:flex-col md:items-start md:space-y-2">
                        <div>
                          <p className="text-xs font-semibold text-gray-600 uppercase">Total</p>
                          <p className="text-lg font-bold text-gray-900">${order.total.toFixed(2)}</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm font-semibold text-gray-600 mb-2">Items</p>
                      <div className="space-y-1">
                        {order.items.map((item, idx) => (
                          <p key={idx} className="text-sm text-gray-700">
                            {item.name} × {item.quantity}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
