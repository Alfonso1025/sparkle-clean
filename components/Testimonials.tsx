"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Sparkle Clean transformed our home before we listed it for sale. The end of lease clean was immaculate — our property manager was genuinely impressed. Worth every cent.",
    name: "Sarah M.",
    location: "Campbelltown",
    service: "End of Lease Clean",
  },
  {
    quote:
      "We've had them in fortnightly for six months now. Consistent, thorough, and the team is always respectful of our space. The house smells amazing after every visit.",
    name: "James & Lisa T.",
    location: "Narellan",
    service: "Residential Cleaning",
  },
  {
    quote:
      "As a small business owner I needed after-hours cleaning for my office. Sparkle Clean are punctual, professional, and discreet. Highly recommend for any commercial space.",
    name: "David K.",
    location: "Macarthur",
    service: "Commercial Cleaning",
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-stone-950 py-24 px-6 lg:py-32 lg:px-12"
    >
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-amber-400/10" />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-amber-400 text-xs font-light tracking-[0.2em] uppercase">
            What Our Clients Say
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl text-amber-50 font-light tracking-widest uppercase">
            Trusted by Homeowners Across Campbelltown
          </h2>
          <p className="mt-4 text-stone-400 text-sm lg:text-base font-light tracking-wide">
            {"Don't just take our word for it"}
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-stone-900 border border-amber-900/20 p-6 lg:p-8 transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-400/5"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                {/* Decorative opening quote */}
                <span className="absolute -top-4 -left-2 text-6xl lg:text-7xl text-amber-400/20 font-serif leading-none select-none">
                  &ldquo;
                </span>
                <p className="relative text-stone-300 italic leading-relaxed text-sm lg:text-base pl-4">
                  {testimonial.quote}
                </p>
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-amber-900/20" />

              {/* Reviewer info */}
              <div>
                <p className="text-amber-50 font-light tracking-widest uppercase text-sm">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-stone-400 text-xs lg:text-sm">
                  {testimonial.location} &middot; {testimonial.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-amber-400/10" />
    </section>
  )
}
