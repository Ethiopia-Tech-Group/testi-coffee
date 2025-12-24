"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface Review {
  id: string
  author: string
  rating: number
  title: string
  text: string
  date: string
  helpful: number
}

const mockReviews: Review[] = [
  {
    id: "1",
    author: "Sarah Johnson",
    rating: 5,
    title: "Best coffee ever!",
    text: "The flavor is absolutely incredible. Fresh, vibrant, and complex. This is now my go-to coffee.",
    date: "2024-12-10",
    helpful: 12,
  },
  {
    id: "2",
    author: "Michael Chen",
    rating: 5,
    title: "Perfect for espresso",
    text: "Pulled some amazing shots with this. Great crema and balanced flavor. Highly recommend.",
    date: "2024-12-05",
    helpful: 8,
  },
  {
    id: "3",
    author: "Emma Davis",
    rating: 4,
    title: "Very good, expected more acidity",
    text: "Smooth and well-balanced. A bit less acidic than I expected from Ethiopian coffee.",
    date: "2024-11-28",
    helpful: 5,
  },
]

export function ProductReviews() {
  return (
    <div className="space-y-6">
      {/* Reviews Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
          <p className="text-gray-600 mt-1">See what others are saying about this coffee</p>
        </div>
        <Button className="coffee-primary-btn">Write a Review</Button>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {mockReviews.map((review) => (
          <Card key={review.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mt-2">{review.title}</h4>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm mb-4">{review.text}</p>
              <button className="text-sm text-gray-600 hover:text-gray-900 transition">
                Helpful ({review.helpful})
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
