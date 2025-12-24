"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AccountSidebar } from "@/components/account-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AccountPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-gray-900">My Account</h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AccountSidebar />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Profile Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Profile Information</CardTitle>
                    <Button className="coffee-primary-btn text-sm">Edit Profile</Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 pb-4 border-b border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-[#3B6638] flex items-center justify-center text-white text-xl font-bold">
                      JD
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">John Doe</p>
                      <p className="text-sm text-gray-600">Premium Member</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-[#3B6638] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-600">Email</p>
                        <p className="text-gray-900">john@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-[#3B6638] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-600">Phone</p>
                        <p className="text-gray-900">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 md:col-span-2">
                      <MapPin className="w-5 h-5 text-[#3B6638] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-600">Default Address</p>
                        <p className="text-gray-900">123 Main Street, San Francisco, CA 94102</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-3xl font-bold text-[#3B6638]">5</p>
                    <p className="text-gray-600 text-sm mt-1">Total Orders</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-3xl font-bold text-[#3B6638]">$234.50</p>
                    <p className="text-gray-600 text-sm mt-1">Total Spent</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-3xl font-bold text-[#3B6638]">3</p>
                    <p className="text-gray-600 text-sm mt-1">Saved Addresses</p>
                  </CardContent>
                </Card>
              </div>

              {/* Preferences */}
              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-[#3B6638] rounded cursor-pointer" />
                    <span className="text-gray-700">Subscribe to newsletter</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-[#3B6638] rounded cursor-pointer" />
                    <span className="text-gray-700">Receive order updates via email</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#3B6638] rounded cursor-pointer" />
                    <span className="text-gray-700">Receive promotional offers</span>
                  </label>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
