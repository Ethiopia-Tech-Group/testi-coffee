"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AccountSidebar } from "@/components/account-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit2, Trash2, Plus, CheckCircle } from "lucide-react"

interface Address {
  id: string
  name: string
  address: string
  city: string
  state: string
  zip: string
  default: boolean
}

export default function AddressesPage() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      name: "Home",
      address: "123 Main Street",
      city: "San Francisco",
      state: "CA",
      zip: "94102",
      default: true,
    },
    {
      id: "2",
      name: "Work",
      address: "456 Tech Avenue",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      default: false,
    },
    {
      id: "3",
      name: "Parents",
      address: "789 Oak Road",
      city: "Berkeley",
      state: "CA",
      zip: "94704",
      default: false,
    },
  ])

  const handleDelete = (id: string) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id))
  }

  const handleSetDefault = (id: string) => {
    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        default: addr.id === id,
      })),
    )
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-gray-900">Saved Addresses</h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AccountSidebar />
            </div>

            {/* Addresses */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <Button className="coffee-primary-btn flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add New Address
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addresses.map((address) => (
                  <Card key={address.id} className={`relative ${address.default ? "border-[#3B6638] border-2" : ""}`}>
                    {address.default && (
                      <div className="absolute top-0 right-0 bg-[#3B6638] text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-semibold flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Default
                      </div>
                    )}

                    <CardHeader>
                      <CardTitle className="text-lg">{address.name}</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-600">{address.address}</p>
                        <p className="text-sm text-gray-600">
                          {address.city}, {address.state} {address.zip}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent flex items-center justify-center gap-2"
                        >
                          <Edit2 className="w-4 h-4" />
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(address.id)}
                          className="flex-1 border-red-300 text-red-700 hover:bg-red-50 bg-transparent flex items-center justify-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </Button>
                      </div>

                      {!address.default && (
                        <Button
                          size="sm"
                          onClick={() => handleSetDefault(address.id)}
                          className="w-full coffee-primary-btn"
                        >
                          Set as Default
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
