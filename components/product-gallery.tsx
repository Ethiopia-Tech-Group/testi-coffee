"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface ProductGalleryProps {
  image: string
  name: string
}

export function ProductGallery({ image, name }: ProductGalleryProps) {
  const [selectedImage] = useState(image)

  // Simulated gallery images
  const galleryImages = [image, image, image]

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <Card className="overflow-hidden bg-gray-100 h-96">
        <CardContent className="p-0 w-full h-full flex items-center justify-center">
          <img src={selectedImage || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </CardContent>
      </Card>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-3 gap-4">
        {galleryImages.map((img, index) => (
          <Card key={index} className="overflow-hidden bg-gray-100 cursor-pointer hover:shadow-md transition">
            <CardContent className="p-0 h-24 flex items-center justify-center">
              <img
                src={img || "/placeholder.svg"}
                alt={`${name} view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
