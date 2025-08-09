import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ServiceProps {
  service: {
    id: string
    name: string
    description: string
    price: number
    image: string
  }
}

export default function ServiceCard({ service }: ServiceProps) {
  return (
    <div className="salon-card overflow-hidden shadow-salon hover:shadow-salon-hover transition-all group">
      <div className="relative h-48 bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{service.name}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-white font-semibold">
            <span className="text-lg">${service.price}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Button asChild className="bg-white text-black hover:bg-gray-100 rounded-full shadow-md">
            <Link href="/contact">Contact</Link>
          </Button>
          <div className="text-black font-bold text-xl">${service.price}</div>
        </div>
      </div>
    </div>
  )
}
