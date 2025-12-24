"use client"

import { useState } from "react"
import { ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ShopFiltersProps {
  onFilterChange: (filters: FilterState) => void
  onSearch: (query: string) => void
}

export interface FilterState {
  origins: string[]
  roastLevels: string[]
  priceRange: [number, number]
  flavorProfiles: string[]
}

const ORIGINS = ["Ethiopia", "Colombia", "Kenya", "Brazil", "Costa Rica", "Indonesia", "Guatemala"]
const ROAST_LEVELS = ["Light", "Medium", "Dark"]
const FLAVOR_PROFILES = ["Floral", "Fruity", "Chocolate", "Nuts", "Earthy", "Spicy"]

export function ShopFilters({ onFilterChange, onSearch }: ShopFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    origins: [],
    roastLevels: [],
    priceRange: [0, 30],
    flavorProfiles: [],
  })
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    origin: true,
    roast: true,
    price: true,
    flavor: true,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleOriginChange = (origin: string) => {
    const updated = filters.origins.includes(origin)
      ? filters.origins.filter((o) => o !== origin)
      : [...filters.origins, origin]
    const newFilters = { ...filters, origins: updated }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleRoastChange = (roast: string) => {
    const updated = filters.roastLevels.includes(roast)
      ? filters.roastLevels.filter((r) => r !== roast)
      : [...filters.roastLevels, roast]
    const newFilters = { ...filters, roastLevels: updated }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleFlavorChange = (flavor: string) => {
    const updated = filters.flavorProfiles.includes(flavor)
      ? filters.flavorProfiles.filter((f) => f !== flavor)
      : [...filters.flavorProfiles, flavor]
    const newFilters = { ...filters, flavorProfiles: updated }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handlePriceChange = (type: "min" | "max", value: number) => {
    const newRange: [number, number] = type === "min" ? [value, filters.priceRange[1]] : [filters.priceRange[0], value]
    const newFilters = { ...filters, priceRange: newRange }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    onSearch(query)
  }

  const resetFilters = () => {
    const emptyFilters: FilterState = {
      origins: [],
      roastLevels: [],
      priceRange: [0, 30],
      flavorProfiles: [],
    }
    setFilters(emptyFilters)
    setSearchQuery("")
    onFilterChange(emptyFilters)
    onSearch("")
  }

  const hasActiveFilters =
    filters.origins.length > 0 ||
    filters.roastLevels.length > 0 ||
    filters.flavorProfiles.length > 0 ||
    searchQuery.length > 0

  return (
    <div className="w-full lg:w-80">
      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search coffees..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B6638]"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Reset Button */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          size="sm"
          onClick={resetFilters}
          className="w-full mb-6 text-[#3B6638] border-[#3B6638] hover:bg-[#3B6638] hover:text-white bg-transparent"
        >
          Reset Filters
        </Button>
      )}

      {/* Origin Filter */}
      <Card className="mb-4">
        <CardHeader className="pb-3 cursor-pointer" onClick={() => toggleSection("origin")}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Origin</CardTitle>
            <ChevronDown className={`w-5 h-5 transition-transform ${expandedSections.origin ? "rotate-180" : ""}`} />
          </div>
        </CardHeader>
        {expandedSections.origin && (
          <CardContent className="space-y-3">
            {ORIGINS.map((origin) => (
              <label key={origin} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.origins.includes(origin)}
                  onChange={() => handleOriginChange(origin)}
                  className="w-4 h-4 rounded border-gray-300 text-[#3B6638] cursor-pointer"
                />
                <span className="text-sm text-gray-700">{origin}</span>
              </label>
            ))}
          </CardContent>
        )}
      </Card>

      {/* Roast Level Filter */}
      <Card className="mb-4">
        <CardHeader className="pb-3 cursor-pointer" onClick={() => toggleSection("roast")}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Roast Level</CardTitle>
            <ChevronDown className={`w-5 h-5 transition-transform ${expandedSections.roast ? "rotate-180" : ""}`} />
          </div>
        </CardHeader>
        {expandedSections.roast && (
          <CardContent className="space-y-3">
            {ROAST_LEVELS.map((roast) => (
              <label key={roast} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.roastLevels.includes(roast.toLowerCase())}
                  onChange={() => handleRoastChange(roast.toLowerCase())}
                  className="w-4 h-4 rounded border-gray-300 text-[#3B6638] cursor-pointer"
                />
                <span className="text-sm text-gray-700">{roast}</span>
              </label>
            ))}
          </CardContent>
        )}
      </Card>

      {/* Price Range Filter */}
      <Card className="mb-4">
        <CardHeader className="pb-3 cursor-pointer" onClick={() => toggleSection("price")}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Price Range</CardTitle>
            <ChevronDown className={`w-5 h-5 transition-transform ${expandedSections.price ? "rotate-180" : ""}`} />
          </div>
        </CardHeader>
        {expandedSections.price && (
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Min: ${filters.priceRange[0]}</label>
              <input
                type="range"
                min="0"
                max="30"
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceChange("min", Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Max: ${filters.priceRange[1]}</label>
              <input
                type="range"
                min="0"
                max="30"
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange("max", Number(e.target.value))}
                className="w-full"
              />
            </div>
          </CardContent>
        )}
      </Card>

      {/* Flavor Profile Filter */}
      <Card className="mb-4">
        <CardHeader className="pb-3 cursor-pointer" onClick={() => toggleSection("flavor")}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Flavor Profile</CardTitle>
            <ChevronDown className={`w-5 h-5 transition-transform ${expandedSections.flavor ? "rotate-180" : ""}`} />
          </div>
        </CardHeader>
        {expandedSections.flavor && (
          <CardContent className="space-y-3">
            {FLAVOR_PROFILES.map((flavor) => (
              <label key={flavor} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.flavorProfiles.includes(flavor)}
                  onChange={() => handleFlavorChange(flavor)}
                  className="w-4 h-4 rounded border-gray-300 text-[#3B6638] cursor-pointer"
                />
                <span className="text-sm text-gray-700">{flavor}</span>
              </label>
            ))}
          </CardContent>
        )}
      </Card>
    </div>
  )
}
