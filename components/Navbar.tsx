"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkles, Menu, X, Phone, } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home", anchor : "#hero"},
  { href: "/services", label: "Services", anchor : "#services"},
  { href: "/testimonials", label: "Testimonials", anchor : "#testimonials" },
  { href: "/contact", label: "Contact", anchor : "#contact" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  const getLinkHref = (link: { href: string; anchor: string | null }) => {
    if (isHome && link.anchor) return link.anchor
    return link.href
  }



  return (
    <nav className="bg-stone-950 border-b border-amber-900/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Sparkles className="w-7 h-7 text-amber-400 transition-all duration-500 group-hover:text-amber-300" />
              <div className="absolute inset-0 blur-sm bg-amber-400/30 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-amber-50 font-light text-xl tracking-widest uppercase">
                Sparkle
              </span>
              <span className="text-amber-400/80 text-[10px] tracking-[0.3em] uppercase -mt-1">
                Clean
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getLinkHref(link)}
                className="relative text-stone-400 hover:text-amber-50 transition-colors duration-300 text-sm tracking-[0.2em] uppercase font-light group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <a
            href="tel:0412345678"
            className="hidden lg:flex items-center gap-3 bg-transparent border border-amber-400/40 hover:border-amber-400 hover:bg-amber-400/10 text-amber-50 px-8 py-3 transition-all duration-300 group"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span className="text-sm tracking-widest font-light">0412 345 678</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-amber-50 p-2 hover:text-amber-400 transition-colors duration-300"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 border-t border-amber-900/20">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getLinkHref(link)}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-stone-400 hover:text-amber-50 hover:bg-amber-400/5 transition-all duration-300 text-sm tracking-[0.2em] uppercase font-light py-4 px-4"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 px-4">
                <a
                  href="tel:0412345678"
                  className="flex items-center justify-center gap-3 border border-amber-400/40 hover:border-amber-400 hover:bg-amber-400/10 text-amber-50 px-8 py-4 transition-all duration-300"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span className="text-sm tracking-widest font-light">0412 345 678</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
