"use client"

import { ShoppingCart, Search, User, Heart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [cartItemCount] = useState(2)

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.jpg"
              alt="Testi Coffee Logo"
              width={40}
              height={40}
              className="rounded-full w-12 h-12"
            />
            <span className="font-semibold text-lg text-gray-900">Testi Coffee</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-sm font-medium text-gray-700 hover:text-[#3B6638] transition">
              Shop
            </Link>
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-[#3B6638] transition">
              About
            </Link>
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-[#3B6638] transition">
              Contact
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <Link href="/account" className="p-2 hover:bg-gray-100 rounded-lg transition">
              <User className="w-5 h-5 text-gray-700" />
            </Link>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Heart className="w-5 h-5 text-gray-700" />
            </button>
            <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-lg transition">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-[#3B6638] rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
