import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import GoogleAnalytics from "@/components/analytics/google-analytics"
import PageTransition from "@/components/layout/page-transition"
import BackgroundMusic from "@/components/layout/background-music"
import MouseTrail from "@/components/effects/mouse-trail"
import { Suspense } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Vxmp Blendz - Embrace Yourself With Clippers",
  description:
    "A sharp mind is just as important as a sharp blade—your mentality shapes every cut, every client, every success.",
  keywords: "vxmp blendz, barber shop, men's haircuts, beard trim, grooming, trap beats, barbershop",
  openGraph: {
    title: "Vxmp Blendz - Embrace Yourself With Clippers",
    description:
      "A sharp mind is just as important as a sharp blade—your mentality shapes every cut, every client, every success.",
    url: "https://vxmpblendz.com",
    siteName: "Vxmp Blendz",
    images: [
      {
        url: "https://vxmpblendz.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vxmp Blendz - Professional Barbershop",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vxmp Blendz - Embrace Yourself With Clippers",
    description:
      "A sharp mind is just as important as a sharp blade—your mentality shapes every cut, every client, every success.",
    images: ["https://vxmpblendz.com/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://vxmpblendz.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <Suspense fallback={null}>
          <GoogleAnalytics />
          <PageTransition />
          <BackgroundMusic />
          <MouseTrail />
          <Header />
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  )
}
