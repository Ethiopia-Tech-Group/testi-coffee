"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogOut, User, ShoppingBag, MapPin } from "lucide-react"

export function AccountSidebar() {
  const pathname = usePathname()

  const menuItems = [
    { href: "/account", label: "Dashboard", icon: User },
    { href: "/account/orders", label: "Order History", icon: ShoppingBag },
    { href: "/account/addresses", label: "Addresses", icon: MapPin },
  ]

  return (
    <div className="bg-white rounded-lg p-6 h-fit">
      <div className="space-y-2">
        {menuItems.map((item) => {
          const IconComponent = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                isActive ? "bg-[#3B6638] text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>

      <div className="border-t border-gray-200 mt-6 pt-6">
        <button className="flex items-center space-x-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 rounded-lg transition">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  )
}
