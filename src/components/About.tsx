

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Hotel Strategis",
    description: "Hotel dekat Masjidil Haram & Nabawi, hanya 50-300 meter, memudahkan ibadah Anda.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Bimbingan Ibadah",
    description: "Dipandu oleh ustadz dan muthawwif berpengalaman selama perjalanan ibadah Anda.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Pelayanan Prima",
    description: "Kenyamanan Anda prioritas kami. Layanan 24 jam untuk memastikan perjalanan ibadah yang khusyuk.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Terpercaya & Legal",
    description: "Berizin resmi Kemenag RI dan berpengalaman lebih dari 12 tahun melayani jamaah umrah.",
  },
];

const values = [
  {
    title: "Visi",
    content: "Menjadi travel umrah dan haji terpercaya yang memberikan pengalaman ibadah tak terlupakan dengan pelayanan terbaik dan bimbingan Islami yang komprehensif.",
  },
  {
    title: "Misi",
    content: "Memberikan kemudahan beribadah ke Tanah Suci dengan pelayanan profesional, harga kompetitif, dan bimbingan ibadah sesuai tuntunan Al-Qur'an dan As-Sunnah.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-['Playfair_Display'] mb-4">
            Mengapa Memilih Khalifah?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Kami berkomitmen memberikan layanan umrah terbaik dengan mengutamakan
            kenyamanan, keamanan, dan kekhusyukan ibadah Anda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visi Misi */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-10 md:p-14 border border-emerald-100">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-emerald-800 font-['Playfair_Display']">
                Visi &amp; Misi Kami
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {index === 0 ? "V" : "M"}
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certification */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-700 font-['Playfair_Display']">
                No. Izin
              </div>
              <div className="text-slate-500 text-sm">U.456/2024</div>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-700 font-['Playfair_Display']">
                Kemenag RI
              </div>
              <div className="text-slate-500 text-sm">Tersertifikasi</div>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-700 font-['Playfair_Display']">
                IATA
              </div>
              <div className="text-slate-500 text-sm">Agent Resmi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
