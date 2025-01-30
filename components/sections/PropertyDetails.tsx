'use client'

import { 
  HomeIcon, 
  Ruler, 
  Bed, 
  Bath, 
  Compass, 
  Droplet, 
  Zap, 
  FileText, 
  Car,
  Building2,
  Construction
} from 'lucide-react'

const PropertyDetails = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Informasi Properti</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Primary Info */}
          <div className="space-y-8">
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6 text-green-800">Informasi Utama</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Building2 className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold">2 Lantai</div>
                    <div className="text-green-700">Luas Bangunan 160+ m²</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Ruler className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold">120 m²</div>
                    <div className="text-green-700">Dimensi 10m x 12m</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FileText className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold">SHM</div>
                    <div className="text-green-700">Sertifikat Hak Milik</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Ruangan</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Bed className="w-6 h-6 text-gray-600" />
                  <div>
                    <div className="font-semibold">4 + 1</div>
                    <div className="text-sm text-gray-500">Kamar Tidur</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Bath className="w-6 h-6 text-gray-600" />
                  <div>
                    <div className="font-semibold">4</div>
                    <div className="text-sm text-gray-500">Kamar Mandi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Additional Details */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Spesifikasi Detail</h3>
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-xl flex items-start gap-4">
                <Compass className="w-6 h-6 text-gray-600 mt-1" />
                <div>
                  <div className="font-semibold">Posisi Rumah</div>
                  <div className="text-gray-600">Hadap Selatan</div>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl flex items-start gap-4">
                <Droplet className="w-6 h-6 text-gray-600 mt-1" />
                <div>
                  <div className="font-semibold">Sumber Air</div>
                  <div className="text-gray-600">Sumur Jetpump</div>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl flex items-start gap-4">
                <Zap className="w-6 h-6 text-gray-600 mt-1" />
                <div>
                  <div className="font-semibold">Daya Listrik</div>
                  <div className="text-gray-600">2200 VA</div>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl flex items-start gap-4">
                <Car className="w-6 h-6 text-gray-600 mt-1" />
                <div>
                  <div className="font-semibold">Area Parkir</div>
                  <div className="text-gray-600">Carport untuk 1 mobil</div>
                  <div className="text-sm text-gray-500">+ Area parkir motor di belakang</div>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl flex items-start gap-4">
                <HomeIcon className="w-6 h-6 text-gray-600 mt-1" />
                <div>
                  <div className="font-semibold">Area Servis</div>
                  <div className="text-gray-600">Service/Laundry Area</div>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl flex items-start gap-4">
                <Construction className="w-6 h-6 text-gray-600 mt-1" />
                <div>
                  <div className="font-semibold">Rangka Atap</div>
                  <div className="text-gray-600">Baja Ringan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyDetails