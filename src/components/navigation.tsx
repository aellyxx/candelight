"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Guide", id: "guide" },
    { name: "Materials", id: "materials" },
  ]

  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleScroll("home")}>
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
             <span className="text-white font-bold text-sm">🕯️</span>
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">Candlelight</span>
          </div>


          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
            <button
               key={link.id}
                   onClick={() => handleScroll(link.id)}
              className="text-foreground/70 hover:text-foreground transition"
              >
              {link.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-200/20 rounded-lg transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>




        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (

              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="block w-full text-left px-4 py-2 text-foreground/70 hover:bg-gray-200/20 rounded transition"
              >

                {link.name}


              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
