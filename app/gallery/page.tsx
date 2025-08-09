import type { Metadata } from "next"
import GalleryGrid from "@/components/gallery/gallery-grid"
import GalleryBanner from "@/components/gallery/gallery-banner"

export const metadata: Metadata = {
  title: "Gallery - Vxmp Blendz",
  description: "View our gallery of hairstyles, nail art, makeup looks, and more from Vxmp Blendz.",
}

export default function GalleryPage() {
  return (
    <>
      <GalleryBanner />
      <div className="py-16">
        <div className="container-custom">
          <GalleryGrid />
        </div>
      </div>
    </>
  )
}
