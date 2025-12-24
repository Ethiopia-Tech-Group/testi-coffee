"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#2c2c2c] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#3B6638] flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-semibold text-lg">BrewLux</span>
            </div>
            <p className="text-gray-400 text-sm">Premium single-origin coffee delivered fresh to your door.</p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/shop" className="hover:text-white transition">
                  All Coffee
                </Link>
              </li>
              <li>
                <Link href="/shop?roast=light" className="hover:text-white transition">
                  Light Roasts
                </Link>
              </li>
              <li>
                <Link href="/shop?roast=dark" className="hover:text-white transition">
                  Dark Roasts
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition">
                  Limited Edition
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm mb-4">Email: hello@brewlux.com</p>
            <p className="text-gray-400 text-sm mb-4">Phone: +1 (555) 123-4567</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#3B6638] transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#3B6638] transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#3B6638] transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 BrewLux. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="/" className="hover:text-white transition">
              Shipping Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
