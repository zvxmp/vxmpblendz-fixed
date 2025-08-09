import type { Metadata } from "next"
import ServicesTabs from "@/components/services/services-tabs"
import ServicesBanner from "@/components/services/services-banner"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Our Services - Vxmp Blendz",
  description:
    "Explore our wide range of beauty and grooming services for men and women, including haircuts, styling, nail care, and makeup.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesBanner />
      <div className="py-16 relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80"
            alt="Dark brick wall with atmospheric smoke"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        </div>
        <div className="container-custom relative z-10">
          <ServicesTabs />
        </div>
      </div>
    </>
  )
}
