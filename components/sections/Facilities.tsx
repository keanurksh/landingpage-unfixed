'use client'

import { Landmark, Building2, Building, GraduationCap, Plane, Trophy } from 'lucide-react'

const Facilities = () => {
  return (
    <section 
      id="facilities" 
      className="py-20 bg-gradient-to-t from-gray-100 to-white relative"
      style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.03) 1px, transparent 0)",
        backgroundSize: "24px 24px"
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Fasilitas Area</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Landmark className="w-12 h-12 text-green-600" />,
              title: 'Mesjid Agung Baitushobirin',
              description: 'Mesjid megah dengan arsitektur indah yang menjadi kebanggaan daerah'
            },
            {
              icon: <Building2 className="w-12 h-12 text-green-600" />,
              title: 'Mesjid Kelompok',
              description: 'Tersedia 5 mesjid kelompok yang tersebar di area perumahan'
            },
            {
              icon: <Building className="w-12 h-12 text-green-600" />,
              title: 'Kantor BMT',
              description: 'Layanan keuangan syariah untuk mendukung kebutuhan warga'
            },
            {
              icon: <GraduationCap className="w-12 h-12 text-green-600" />,
              title: 'Fasilitas Pendidikan',
              description: 'TK dan Pondok Pesantren Jamaah Minhajusobirin Boarding School'
            },
            {
              icon: <Plane className="w-12 h-12 text-green-600" />,
              title: 'Travel Haji & Umroh',
              description: 'Yayasan KBIH Minhaajushobirin untuk layanan Haji & Umroh'
            },
            {
              icon: <Trophy className="w-12 h-12 text-green-600" />,
              title: 'Fasilitas Olahraga',
              description: 'Lapangan bola, basket & jogging track untuk gaya hidup sehat'
            }
          ].map((facility, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{facility.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Facilities