"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ServiceCard from "@/components/services/service-card"
import { UserIcon as Male, Users } from "lucide-react"

// Service data
const services = {
  men: [
    {
      id: "m1",
      name: "Men's Haircut",
      description: "Precision cutting and styling tailored to your face shape and preferences.",
      price: 30,
      image:
        "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
    {
      id: "m2",
      name: "Beard Trim & Styling",
      description: "Expert beard shaping and grooming to enhance your facial features.",
      price: 10,
      image:
        "https://images.unsplash.com/photo-1461799821556-055545cf32dc?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
    {
      id: "m4",
      name: "Men's Facial",
      description: "Deep cleansing facial designed specifically for men's skin needs.",
      price: 20,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
    {
      id: "u2",
      name: "Eyebrow Threading",
      description: "Perfect your brows with our precise threading technique.",
      price: 5,
      image:
        "https://images.unsplash.com/photo-1535637603896-07c179d71103?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
  ],
  unisex: [
    {
      id: "u4",
      name: "Blendz Premium",
      description: "One time fee of $50 and get 10% off each cut.",
      price: 50,
      image:
        "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=500&h=350&fit=crop&crop=focalpoint&auto=format&q=80",
    },
  ],
}

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState("all")

  // Filter services based on active tab
  const getFilteredServices = () => {
    if (activeTab === "all") {
      return [...services.men, ...services.unisex]
    }
    return services[activeTab as keyof typeof services] || []
  }

  return (
    <>
      <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>All</span>
            </TabsTrigger>
            <TabsTrigger value="men" className="flex items-center gap-2">
              <Male className="h-4 w-4" />
              <span>Men's</span>
            </TabsTrigger>
            <TabsTrigger value="unisex" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Premium</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredServices().map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="men" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.men.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="unisex" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.unisex.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}
