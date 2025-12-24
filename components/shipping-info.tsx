"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Globe, Clock, AlertCircle } from "lucide-react"

export function ShippingInfo() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Shipping & Delivery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Local Shipping */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Truck className="w-6 h-6 text-[#3B6638]" />
                <CardTitle>Domestic Shipping</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Standard Delivery</p>
                <p className="text-gray-600 text-sm">3-5 business days • $9.99</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Express Delivery</p>
                <p className="text-gray-600 text-sm">1-2 business days • $24.99</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm text-green-700">
                  <strong>Free shipping</strong> on orders over $50!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* International Shipping */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-6 h-6 text-[#3B6638]" />
                <CardTitle>International Shipping</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Standard International</p>
                <p className="text-gray-600 text-sm">7-14 business days • $34.99</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Express International</p>
                <p className="text-gray-600 text-sm">3-5 business days • $79.99</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-700">Available to 50+ countries worldwide</p>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Timeline */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-6 h-6 text-[#3B6638]" />
                <CardTitle>Order Processing</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">Order Placed:</span>
                  <span className="text-gray-600">Immediately</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">Processing:</span>
                  <span className="text-gray-600">24 hours</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">Roasting:</span>
                  <span className="text-gray-600">24 hours (custom)</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">Shipped:</span>
                  <span className="text-gray-600">Within 48 hours</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Guarantee */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-6 h-6 text-[#3B6638]" />
                <CardTitle>Our Guarantee</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#3B6638] font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">100% freshness guarantee</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3B6638] font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">Free returns within 30 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3B6638] font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">Insured shipping</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
