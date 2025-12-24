"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FormData {
  email: string
  firstName: string
  lastName: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
}

interface CheckoutFormProps {
  onSubmit: (data: FormData) => void
}

export function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const [formData, setFormData] = useState<FormData>({
    email: "john@example.com",
    firstName: "John",
    lastName: "Doe",
    address: "123 Main Street",
    city: "San Francisco",
    state: "CA",
    zip: "94102",
    phone: "(555) 123-4567",
  })

  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B6638]"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B6638]"
            required
          />
        </CardContent>
      </Card>

      {/* Shipping Address */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Shipping Address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B6638]"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B6638]"
              required
            />
          </div>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Street Address"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B6638]"
            required
          />
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B6638]"
              required
            />
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B6638]"
              required
            >
              <option value="">State</option>
              <option value="CA">CA</option>
              <option value="NY">NY</option>
              <option value="TX">TX</option>
              <option value="FL">FL</option>
            </select>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="ZIP Code"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B6638]"
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* Payment Method */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Payment Method</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { value: "credit-card", label: "Credit/Debit Card" },
            { value: "telebirr", label: "Telebirr" },
            { value: "cbe-birr", label: "CBE Birr" },
            { value: "paypal", label: "PayPal" },
          ].map((method) => (
            <label
              key={method.value}
              className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <input
                type="radio"
                name="payment"
                value={method.value}
                checked={paymentMethod === method.value}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 text-[#3B6638] cursor-pointer"
              />
              <span className="ml-3 font-medium text-gray-900">{method.label}</span>
            </label>
          ))}
        </CardContent>
      </Card>

      {/* Submit */}
      <Button type="submit" className="w-full coffee-primary-btn h-12 text-lg font-semibold">
        Complete Order
      </Button>
    </form>
  )
}
