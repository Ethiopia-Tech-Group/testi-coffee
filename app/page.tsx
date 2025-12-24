import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedSection } from "@/components/featured-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsletterSection } from "@/components/newsletter-section"

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturedSection title="Best Sellers" subtitle="Our most loved coffees" productIds={["1", "2", "4", "5"]} />
      <FeaturedSection title="New Arrivals" subtitle="Fresh roasts just in" productIds={["3", "6", "7", "8"]} />
      <WhyChooseUs />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </>
  )
}
