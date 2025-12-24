"use client"
import { products } from "@/lib/mock-data"
import { useParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGallery } from "@/components/product-gallery"
import { ProductOptions } from "@/components/product-options"
import { ProductReviews } from "@/components/product-reviews"
import { FeaturedSection } from "@/components/featured-section"
import { Star } from "lucide-react"
import Link from "next/link"

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const productId = params.id as string

  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
            <Link href="/shop" className="text-[#3B6638] hover:underline">
              Back to shop
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  // Related products (same origin)
  const relatedProducts = products
    .filter((p) => p.origin === product.origin && p.id !== product.id)
    .slice(0, 4)
    .map((p) => p.id)

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-b border-gray-200">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/shop" className="hover:text-gray-900">
              Shop
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>

        {/* Product Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <ProductGallery image={product.image} name={product.name} />

            {/* Info */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <p className="text-sm font-semibold text-[#3B6638] uppercase tracking-wide">{product.origin}</p>
                <h1 className="text-4xl font-bold text-gray-900 mt-2">{product.name}</h1>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="text-4xl font-bold text-gray-900">${product.price}</div>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>

              {/* Coffee Details */}
              <div className="bg-[#f5f1e8] rounded-lg p-6 space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase">Roast Level</p>
                    <p className="text-lg font-semibold text-gray-900 mt-1">
                      {product.roastLevel.charAt(0).toUpperCase() + product.roastLevel.slice(1)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase">Origin</p>
                    <p className="text-lg font-semibold text-gray-900 mt-1">{product.origin}</p>
                  </div>
                </div>

                {/* Flavor Notes */}
                <div>
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Tasting Notes</p>
                  <div className="flex flex-wrap gap-2">
                    {product.flavorProfile.map((flavor) => (
                      <span key={flavor} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-[#8B7355]">
                        {flavor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Options */}
              <ProductOptions
                productId={product.id}
                grindOptions={product.grindOptions}
                packageSizes={product.packageSizes}
                inStock={product.inStock}
              />
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
          <ProductReviews />
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <FeaturedSection
            title="Similar Coffees"
            subtitle={`Other coffees from ${product.origin}`}
            productIds={relatedProducts}
          />
        )}
      </div>
      <Footer />
    </>
  )
}
