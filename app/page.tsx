import Hero from '@/components/sections/Hero'
import Navbar from '@/components/sections/Navbar'
import Features from '@/components/sections/Features'
import Facilities from '@/components/sections/Facilities'  // Tambahkan import ini
import Gallery from '@/components/sections/Gallery'
import Contact from '@/components/sections/Contact'
import PropertyDetails from '@/components/sections/PropertyDetails'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero 
        backgroundImage='/images/hero-placeholder.jpg'
        backgroundOpacity={60}
      />
      <PropertyDetails />
      <Features />
      <Facilities /> 
      <Gallery />
      <Contact />
    </main>
  )
}