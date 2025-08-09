import type { Metadata } from "next"
import ContactInfo from "@/components/contact/contact-info"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Contact Us - Vxmp Blendz",
  description: "Get in touch with Vxmp Blendz. Find our contact information.",
}

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=600&fit=crop&crop=center&auto=format&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="heading-xl mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-white/90">Get in touch with us for appointments and inquiries.</p>
          </div>
        </div>
      </section>

      <div className="py-20 relative">
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
          <div className="max-w-2xl mx-auto">
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  )
}
