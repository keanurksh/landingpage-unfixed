'use client'

import { useState } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <nav 
      className="fixed top-0 w-full z-50 bg-gradient-to-br from-green-900/95 via-green-700/95 to-green-600/95 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-white drop-shadow-md">
            PropertyName
          </div>
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Beranda' },
              { id: 'features', label: 'Lokasi' },
              { id: 'facilities', label: 'Fasilitas' },
              { id: 'gallery', label: 'Galeri' },
              { id: 'contact', label: 'Kontak' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-300 drop-shadow-md ${
                  activeSection === item.id
                    ? 'text-white font-semibold'
                    : 'text-green-100 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar