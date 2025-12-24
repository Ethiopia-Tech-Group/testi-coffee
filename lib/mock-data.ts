// Mock data for the coffee e-commerce store
export interface Product {
  id: string
  name: string
  price: number
  image: string
  roastLevel: "light" | "medium" | "dark"
  origin: string
  flavorProfile: string[]
  rating: number
  reviews: number
  inStock: boolean
  stockLevel: "in-stock" | "low-stock" | "out-of-stock"
  description: string
  grindOptions: string[]
  packageSizes: number[]
}

export interface Review {
  id: string
  author: string
  rating: number
  text: string
  date: string
}

export interface CartItem {
  productId: string
  quantity: number
  grindType: string
  packageSize: number
}

export const products: Product[] = [
  {
    id: "1",
    name: "Ethiopian Yirgacheffe",
    price: 16.99,
    image: "/premium-ethiopian-coffee-beans.jpg",
    roastLevel: "light",
    origin: "Ethiopia",
    flavorProfile: ["Floral", "Fruity", "Citrus"],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    stockLevel: "in-stock",
    description: "Bright and complex with floral notes and a crisp finish. Perfect for pour-over brewing.",
    grindOptions: ["Whole Bean", "Filter", "Espresso", "French Press"],
    packageSizes: [250, 500, 1000],
  },
  {
    id: "2",
    name: "Colombian Geisha",
    price: 24.99,
    image: "/premium-colombian-geisha-coffee.jpg",
    roastLevel: "medium",
    origin: "Colombia",
    flavorProfile: ["Chocolate", "Caramel", "Hazelnut"],
    rating: 4.9,
    reviews: 98,
    inStock: true,
    stockLevel: "low-stock",
    description: "Smooth and balanced with rich chocolate and caramel undertones. Great for espresso.",
    grindOptions: ["Whole Bean", "Filter", "Espresso", "French Press"],
    packageSizes: [250, 500, 1000],
  },
  {
    id: "3",
    name: "Kenyan AA Reserve",
    price: 19.99,
    image: "/premium-kenyan-aa-coffee-beans.jpg",
    roastLevel: "medium",
    origin: "Kenya",
    flavorProfile: ["Blackcurrant", "Almond", "Jasmine"],
    rating: 4.7,
    reviews: 87,
    inStock: true,
    stockLevel: "in-stock",
    description: "Bold and distinctive with blackcurrant notes and floral nuances.",
    grindOptions: ["Whole Bean", "Filter", "Espresso", "French Press"],
    packageSizes: [250, 500, 1000],
  },
  {
    id: "4",
    name: "Brazilian Bourbon",
    price: 14.99,
    image: "/premium-brazilian-bourbon-coffee.jpg",
    roastLevel: "dark",
    origin: "Brazil",
    flavorProfile: ["Nuts", "Chocolate", "Spice"],
    rating: 4.6,
    reviews: 156,
    inStock: true,
    stockLevel: "in-stock",
    description: "Full-bodied with nutty and chocolatey notes. Ideal for daily brewing.",
    grindOptions: ["Whole Bean", "Filter", "Espresso", "French Press"],
    packageSizes: [250, 500, 1000],
  },
  {
    id: "5",
    name: "Costa Rican Tarrazú",
    price: 17.99,
    image: "/premium-costa-rican-tarrazu-coffee.jpg",
    roastLevel: "medium",
    origin: "Costa Rica",
    flavorProfile: ["Cherry", "Cocoa", "Sweetness"],
    rating: 4.8,
    reviews: 112,
    inStock: true,
    stockLevel: "in-stock",
    description: "Well-rounded with cherry and cocoa notes and a naturally sweet finish.",
    grindOptions: ["Whole Bean", "Filter", "Espresso", "French Press"],
    packageSizes: [250, 500, 1000],
  },
  {
    id: "6",
    name: "Sumatra Mandheling",
    price: 18.99,
    image: "/premium-sumatra-mandheling-coffee.jpg",
    roastLevel: "dark",
    origin: "Indonesia",
    flavorProfile: ["Earthy", "Herbal", "Cedar"],
    rating: 4.5,
    reviews: 73,
    inStock: false,
    stockLevel: "out-of-stock",
    description: "Deep and earthy with herbal notes. Full-bodied and low acidity.",
    grindOptions: ["Whole Bean", "Filter", "Espresso", "French Press"],
    packageSizes: [250, 500, 1000],
  },
  {
    id: "7",
    name: "Guatemalan Huehuetenango",
    price: 16.99,
    image: "/premium-guatemalan-coffee-beans.jpg",
    roastLevel: "medium",
    origin: "Guatemala",
    flavorProfile: ["Apple", "Cinnamon", "Smoke"],
    rating: 4.7,
    reviews: 94,
    inStock: true,
    stockLevel: "in-stock",
    description: "Altitude-grown coffee with apple and spice notes.",
    grindOptions: ["Whole Bean", "Filter", "Espresso", "French Press"],
    packageSizes: [250, 500, 1000],
  },
  {
    id: "8",
    name: "Single-Origin Espresso Blend",
    price: 21.99,
    image: "/premium-single-origin-espresso-blend.jpg",
    roastLevel: "dark",
    origin: "Mixed Origins",
    flavorProfile: ["Dark Chocolate", "Intense", "Crema"],
    rating: 4.9,
    reviews: 203,
    inStock: true,
    stockLevel: "in-stock",
    description: "Specially crafted for espresso machines. Rich, intense, and perfect crema.",
    grindOptions: ["Whole Bean", "Filter", "Espresso", "French Press"],
    packageSizes: [250, 500],
  },
]

export const reviews: Review[] = [
  {
    id: "1",
    author: "Sarah Johnson",
    rating: 5,
    text: "Best coffee I've had in years! The flavor is so clean and crisp.",
    date: "2024-12-15",
  },
  {
    id: "2",
    author: "Michael Chen",
    rating: 5,
    text: "Excellent quality and incredibly fresh. Fast shipping too!",
    date: "2024-12-10",
  },
  {
    id: "3",
    author: "Emma Davis",
    rating: 4,
    text: "Great taste, would appreciate more brewing guides.",
    date: "2024-12-05",
  },
  {
    id: "4",
    author: "James Wilson",
    rating: 5,
    text: "My favorite coffee roaster. Never disappointed!",
    date: "2024-11-28",
  },
]

export const orders = [
  {
    id: "ORD-001",
    date: "2024-11-15",
    status: "delivered",
    total: 45.97,
    items: [{ productId: "1", quantity: 2, name: "Ethiopian Yirgacheffe" }],
  },
  {
    id: "ORD-002",
    date: "2024-12-01",
    status: "shipped",
    total: 24.99,
    items: [{ productId: "2", quantity: 1, name: "Colombian Geisha" }],
  },
]
