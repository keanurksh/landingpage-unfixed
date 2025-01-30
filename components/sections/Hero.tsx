'use client'

const Hero = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className="pt-16">
            <div className="relative h-screen bg-fixed bg-cover bg-center" 
            style={{
                backgroundImage: `url('/images/hero-placeholder.jpg')`
            }}>
                <div className="absolute inset-0 bg-black bg-opacity-75">
                    <div className="h-full flex flex-col justify-center items-center px-4">
                        <div className="text-center text-white max-w-3xl">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Hunian Eksklusif</h1>
                            <p className="text-xl md:text-3xl mb-8 font-light">Di Pusat LDII</p>
                            <p className="text-lg font-semibold md:text-xl mb-12 max-w-2xl mx-auto">Hunian mewah yang bisa menunjang kegiatan ibadah anda</p>
                            <div className="flex gap-4 justify-center">
                                <button
                                    onClick={() => scrollToSection('Contact')}
                                    className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                                    >
                                        Hubungi Kami
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('gallery')}
                                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                                        >
                                            Lihat Galeri
                                        </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

  export default Hero