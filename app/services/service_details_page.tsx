"use client"

import { DollarSign, Clock, Calendar, Check, Sparkles, Shield, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ServiceDetailPageProps {
  serviceName: string
  tagline: string
  heroImage?: string
  priceFrom: number
  duration: string
  availability: string
  includedItems: string[]
  includedImage?: string
  whyChooseUs: {
    icon: "sparkles" | "shield" | "award"
    heading: string
    description: string
  }[]
  pricingIncludes: string[]
}

const iconMap = {
  sparkles: Sparkles,
  shield: Shield,
  award: Award,
}

export default function ServiceDetailPage({
  serviceName,
  tagline,
  heroImage = "https://picsum.photos/1400/600?random=10",
  priceFrom,
  duration,
  availability,
  includedItems,
  includedImage = "https://picsum.photos/600/700?random=11",
  whyChooseUs,
  pricingIncludes,
}: ServiceDetailPageProps) {
  return (
    <div className="min-h-screen bg-stone-950">
      {/* 1. Service Hero */}
      <section className="relative h-96 lg:h-[600px] w-full overflow-hidden">
        <Image
          src={heroImage}
          alt={serviceName}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/70 to-transparent" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="px-6 md:px-12 lg:px-24 max-w-3xl">
            <div className="border-l-2 border-amber-400 pl-6">
              {/* Breadcrumb */}
              <p className="text-stone-400 text-sm tracking-widest uppercase mb-4">
                Services / {serviceName}
              </p>
              
              {/* Headline */}
              <h1 className="text-amber-50 text-3xl md:text-4xl lg:text-5xl font-light tracking-widest uppercase mb-4">
                {serviceName}
              </h1>
              
              {/* Tagline */}
              <p className="text-stone-300 text-base lg:text-lg mb-8">
                {tagline}
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="inline-block bg-amber-400 text-stone-950 px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-amber-300 transition-colors duration-300 text-center"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="tel:0412345678"
                  className="inline-block border border-amber-400 text-amber-400 px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-amber-400/10 transition-colors duration-300 text-center"
                >
                  Call 0412 345 678
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Strip */}
      <section className="bg-stone-900">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-amber-900/20">
          {/* Price */}
          <div className="flex items-center justify-center gap-4 p-6 lg:p-8">
            <DollarSign className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <div>
              <p className="text-stone-400 text-xs tracking-widest uppercase mb-1">Starting From</p>
              <p className="text-amber-50 text-lg font-light tracking-wide">${priceFrom}</p>
            </div>
          </div>
          
          {/* Duration */}
          <div className="flex items-center justify-center gap-4 p-6 lg:p-8">
            <Clock className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <div>
              <p className="text-stone-400 text-xs tracking-widest uppercase mb-1">Duration</p>
              <p className="text-amber-50 text-lg font-light tracking-wide">{duration}</p>
            </div>
          </div>
          
          {/* Availability */}
          <div className="flex items-center justify-center gap-4 p-6 lg:p-8">
            <Calendar className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <div>
              <p className="text-stone-400 text-xs tracking-widest uppercase mb-1">Availability</p>
              <p className="text-amber-50 text-lg font-light tracking-wide">{availability}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What's Included */}
      <section className="bg-stone-950 py-16 lg:py-24">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="lg:col-span-2">
              <h2 className="text-amber-50 text-2xl lg:text-3xl font-light tracking-widest uppercase mb-10">
                What&apos;s Included
              </h2>
              
              <ul className="space-y-4">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-300 text-base lg:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right Column - Image */}
            <div className="lg:col-span-1">
              <div className="relative h-80 lg:h-full min-h-[400px] border border-amber-400/20">
                <Image
                  src={includedImage}
                  alt="Service details"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us for This Service */}
      <section className="bg-stone-900 py-16 lg:py-24">
        <div className="px-6 md:px-12 lg:px-24">
          <h2 className="text-amber-50 text-2xl lg:text-3xl font-light tracking-widest uppercase mb-12 text-center">
            Why Choose Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const IconComponent = iconMap[item.icon]
              return (
                <div
                  key={index}
                  className="bg-stone-950 border border-amber-900/20 p-6 lg:p-8"
                >
                  <IconComponent className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="text-amber-50 text-sm tracking-widest uppercase font-light mb-3">
                    {item.heading}
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Pricing Block */}
      <section className="bg-stone-950 py-16 lg:py-24">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-amber-50 text-2xl lg:text-3xl font-light tracking-widest uppercase mb-12">
              Simple, Transparent Pricing
            </h2>
            
            <div className="border border-amber-400/20 p-8 lg:p-12">
              <p className="text-amber-400 text-4xl lg:text-5xl font-light tracking-wide mb-8">
                From ${priceFrom}
              </p>
              
              <ul className="space-y-3 mb-10">
                {pricingIncludes.map((item, index) => (
                  <li key={index} className="flex items-center justify-center gap-3">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="text-stone-300 text-sm lg:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="/#contact"
                className="inline-block bg-amber-400 text-stone-950 px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-amber-300 transition-colors duration-300"
              >
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <section className="bg-amber-400 py-16 lg:py-20">
        <div className="px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-stone-950 text-2xl lg:text-3xl font-light tracking-widest uppercase mb-4">
            Ready for a Spotless Space?
          </h2>
          <p className="text-stone-950/80 text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Get a free quote today. We&apos;ll respond within 2 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-block bg-stone-950 text-amber-50 px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-stone-900 transition-colors duration-300"
            >
              Get a Free Quote
            </Link>
            <Link
              href="tel:0412345678"
              className="inline-block border-2 border-stone-950 text-stone-950 px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-stone-950/10 transition-colors duration-300"
            >
              Call Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
