import { notFound } from "next/navigation"
import ServiceDetailPage from "../service_details_page"

const services = {
  residential: {
    serviceName: "Residential Cleaning",
    tagline: "A spotless home, maintained effortlessly. Reliable, thorough and tailored to your schedule.",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
    priceFrom: 120,
    duration: "2–4 hours",
    availability: "Same Day",
    includedItems: [
      "Full kitchen clean including benchtops, stovetop and splashback",
      "Bathroom and toilet sanitisation",
      "Vacuuming all floors and carpets",
      "Mopping all hard floor surfaces",
      "Dusting surfaces, shelves and skirting boards",
      "Mirrors and glass surfaces cleaned streak-free",
      "Bin emptying and reline throughout",
      "Making beds and tidying living areas",
    ],
    includedImage: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80",
    whyChooseUs: [
      {
        icon: "sparkles" as const,
        heading: "Consistent Quality",
        description: "The same trained cleaner attends every visit so your preferences are always remembered.",
      },
      {
        icon: "shield" as const,
        heading: "Fully Insured",
        description: "All staff are covered by public liability insurance for your complete peace of mind.",
      },
      {
        icon: "award" as const,
        heading: "Eco-Friendly Products",
        description: "We use biodegradable, non-toxic cleaning products that are safe for children and pets.",
      },
    ],
    pricingIncludes: [
      "All cleaning products and equipment supplied",
      "Up to 3 bedrooms and 2 bathrooms",
      "Kitchen, living and dining areas",
      "Free re-clean if not satisfied",
    ],
  },

  commercial: {
    serviceName: "Commercial Cleaning",
    tagline: "Professional cleaning solutions for offices and commercial spaces. Discreet, reliable and after-hours available.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80",
    priceFrom: 180,
    duration: "2–6 hours",
    availability: "After Hours",
    includedItems: [
      "Full office vacuuming and mopping",
      "Workstation and desk surface sanitisation",
      "Kitchen and breakroom deep clean",
      "Bathroom and amenities sanitisation",
      "Bin emptying and waste removal",
      "Glass partitions and entrance doors cleaned",
      "Reception and common area presentation",
      "Restocking paper products and soap dispensers",
    ],
    includedImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    whyChooseUs: [
      {
        icon: "shield" as const,
        heading: "Police Checked Staff",
        description: "All commercial cleaning staff are police checked and hold current security clearances.",
      },
      {
        icon: "sparkles" as const,
        heading: "After-Hours Service",
        description: "We work around your business hours so cleaning never disrupts your team or clients.",
      },
      {
        icon: "award" as const,
        heading: "Tailored Schedules",
        description: "Daily, weekly or fortnightly — we build a cleaning schedule around your business needs.",
      },
    ],
    pricingIncludes: [
      "All cleaning products and equipment supplied",
      "Up to 200sqm office space",
      "Bathrooms, kitchen and common areas",
      "Flexible scheduling including weekends",
    ],
  },

  "end-of-lease": {
    serviceName: "End of Lease Cleaning",
    tagline: "Bond-back guaranteed cleaning that meets the strictest real estate agent standards.",
    heroImage: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1400&q=80",
    priceFrom: 280,
    duration: "4–8 hours",
    availability: "7 Days a Week",
    includedItems: [
      "Full oven, stovetop and rangehood degrease",
      "Inside and outside of all cupboards wiped down",
      "All walls spot cleaned and marked areas addressed",
      "Carpet steam cleaning throughout",
      "Window tracks, sills and frames cleaned",
      "Blinds wiped down individually",
      "Garage sweep and pressure wash if applicable",
      "Full bathroom re-grout and tile scrub",
    ],
    includedImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    whyChooseUs: [
      {
        icon: "award" as const,
        heading: "Bond Back Guarantee",
        description: "If your property manager is not satisfied we return within 48 hours at no extra charge.",
      },
      {
        icon: "sparkles" as const,
        heading: "Real Estate Standard",
        description: "We follow standard real estate inspection checklists to ensure nothing is missed.",
      },
      {
        icon: "shield" as const,
        heading: "Fully Insured",
        description: "Complete public liability cover protects you and your landlord throughout the clean.",
      },
    ],
    pricingIncludes: [
      "All cleaning products and equipment supplied",
      "Carpet steam cleaning included",
      "Oven and appliance deep clean included",
      "Bond back guarantee included",
    ],
  },

  carpet: {
    serviceName: "Carpet Cleaning",
    tagline: "Deep steam cleaning that removes stains, allergens and odours — leaving carpets fresh and renewed.",
    heroImage: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=1400&q=80",
    priceFrom: 89,
    duration: "1–3 hours",
    availability: "Same Day",
    includedItems: [
      "Hot water extraction steam cleaning",
      "Pre-treatment of heavy stain areas",
      "Deodorising treatment throughout",
      "Allergen and dust mite removal",
      "Fast-dry treatment to reduce drying time",
      "Furniture moved and replaced after cleaning",
      "Post-clean grooming of carpet pile",
      "Protective scotchguard coating available on request",
    ],
    includedImage: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    whyChooseUs: [
      {
        icon: "sparkles" as const,
        heading: "Hot Water Extraction",
        description: "Industrial-grade steam cleaning equipment removes deep-set dirt that vacuuming cannot reach.",
      },
      {
        icon: "shield" as const,
        heading: "Safe for Families",
        description: "Our cleaning solutions are child and pet safe with no harsh chemical residue left behind.",
      },
      {
        icon: "award" as const,
        heading: "Stain Guarantee",
        description: "Most stains removed or we re-treat at no charge. Results you can see or your money back.",
      },
    ],
    pricingIncludes: [
      "Per room pricing — no hidden fees",
      "Pre-treatment and deodorising included",
      "Furniture repositioning included",
      "Fast-dry treatment included",
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const service = services[params.slug as keyof typeof services]
  if (!service) return {}
  return {
    title: `${service.serviceName} | Sparkle Clean Campbelltown`,
    description: service.tagline,
  }
}

export default function ServicePage({
  params,
}: {
  params: { slug: string }
}) {
  const service = services[params.slug as keyof typeof services]
  if (!service) notFound()
  return <ServiceDetailPage {...service} />
}