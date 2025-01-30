'use client'

import { Train, Building, Store, School, GraduationCap, Hospital, Bus } from 'lucide-react'

const Features = () => {
  return (
    <section 
      id="features" 
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.03) 1px, transparent 0)",
        backgroundSize: "24px 24px"
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Lokasi Strategis</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Train className="w-12 h-12 text-green-600" />,
              title: 'Akses Transportasi',
              description: 'Dekat Stasiun LRT Harjamukti dan gerbang tol Cibubur (±10 menit)'
            },
            {
              icon: <Store className="w-12 h-12 text-green-600" />,
              title: 'Pusat Perbelanjaan',
              description: 'Mal Cibubur Junction, Transtudio Mal Cibubur dan area belanja di jalur transyogi (±10 menit)'
            },
            {
              icon: <Building className="w-12 h-12 text-green-600" />,
              title: 'Pasar Tradisional',
              description: 'Dekat dengan Pasar Jaya Cibubur dan akses ke area jl. Raya Bogor'
            },
            {
              icon: <School className="w-12 h-12 text-green-600" />,
              title: 'Sekolah Dasar & Menengah',
              description: 'Dekat ke sekolah terpadu Al Azhar, SDN, SMPN dan SMKN Cibubur dan sekolah swasta lainnya'
            },
            {
              icon: <GraduationCap className="w-12 h-12 text-green-600" />,
              title: 'Universitas',
              description: 'Akses mudah ke Universitas Gunadarma Depok, UI Depok, dan BSI Depok'
            },
            {
              icon: <Hospital className="w-12 h-12 text-green-600" />,
              title: 'Rumah Sakit',
              description: 'Dekat ke RS Meilia, RS Permata dan RSKO Cibubur'
            },
            {
              icon: <Bus className="w-12 h-12 text-green-600" />,
              title: 'Transportasi Umum',
              description: 'Dilalui angkutan umum Jaklingko untuk mobilitas yang mudah',
              className: 'md:col-start-2' // Menambahkan class untuk posisi tengah
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${feature.className || ''}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features