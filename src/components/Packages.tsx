import { cn } from "../utils/cn";

const packages = [
  {
    id: "silver",
    name: "Paket Silver",
    nameAr: "الفضة",
    duration: "9 Hari",
    price: "28.500.000",
    popular: false,
    color: "slate",
    features: [
      "Tiket pesawat PP (economy)",
      "Hotel Makkah bintang 3",
      "Hotel Madinah bintang 3",
      "Visa umrah",
      "Transportasi darat AC",
      "Bimbingan manasik",
      "Muthawwif berpengalaman",
      "Air zamzam 5 liter",
    ],
  },
  {
    id: "gold",
    name: "Paket Gold",
    nameAr: "الذهب",
    duration: "12 Hari",
    price: "38.500.000",
    popular: true,
    color: "amber",
    features: [
      "Tiket pesawat PP (economy)",
      "Hotel Makkah bintang 4 (300m dari Masjidil Haram)",
      "Hotel Madinah bintang 4 (200m dari Masjid Nabawi)",
      "Visa umrah",
      "Transportasi darat AC eksklusif",
      "Bimbingan manasik intensif",
      "Muthawwif berpengalaman",
      "Umrah sunnah tambahan",
      "Ziarah Makkah & Madinah",
      "Air zamzam 10 liter",
      "Perlengkapan umrah",
    ],
  },
  {
    id: "platinum",
    name: "Paket Platinum",
    nameAr: "البلاتين",
    duration: "15 Hari",
    price: "55.000.000",
    popular: false,
    color: "emerald",
    features: [
      "Tiket pesawat PP (business class opsional)",
      "Hotel Makkah bintang 5 (view Masjidil Haram)",
      "Hotel Madinah bintang 5 (50m dari Masjid Nabawi)",
      "Visa umrah VIP",
      "Transportasi private luxury",
      "Bimbingan manasik privat",
      "Muthawwif bersertifikasi",
      "Umrah sunnah (2x)",
      "Ziarah VIP Makkah & Madinah",
      "Makan 3x sehari menu Nusantara",
      "Air zamzam 20 liter",
      "Perlengkapan umrah premium",
      "Layanan laundry",
      "SIM card local",
    ],
  },
];

export default function Packages() {
  

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="packages" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            Paket Perjalanan
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-['Playfair_Display'] mb-4">
            Pilih Paket Umrah Anda
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Kami menyediakan berbagai pilihan paket umrah yang dapat disesuaikan
            dengan kebutuhan dan budget Anda. Semua paket sudah termasuk
            bimbingan ibadah lengkap.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              className={cn(
                "relative rounded-2xl p-8 transition-all duration-500 border",
                pkg.popular
                  ? "bg-white border-amber-300 shadow-2xl shadow-amber-100 scale-105 md:-mt-4 md:-mb-4 z-10"
                  : "bg-white border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-2"
              )}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-amber-200">
                  Paling Populer
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div
                  className={cn(
                    "w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4",
                    pkg.popular
                      ? "bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-200"
                      : "bg-gradient-to-br from-slate-100 to-slate-200"
                  )}
                >
                  <span
                    className={cn(
                      "text-2xl font-['Amiri']",
                      pkg.popular ? "text-white" : "text-slate-700"
                    )}
                  >
                    {pkg.nameAr}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">
                  {pkg.name}
                </h3>
                <p className="text-emerald-600 font-semibold text-sm">
                  {pkg.duration}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-sm text-slate-400 mb-1">Mulai dari</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg text-slate-500">Rp</span>
                  <span
                    className={cn(
                      "text-4xl font-bold font-['Playfair_Display']",
                      pkg.popular ? "text-amber-600" : "text-slate-800"
                    )}
                  >
                    {pkg.price}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => scrollTo("contact")}
                className={cn(
                  "w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300",
                  pkg.popular
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-lg hover:shadow-amber-200"
                    : "border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white"
                )}
              >
                Pilih Paket
              </button>
            </div>
          ))}
        </div>

        {/* Custom Package Banner */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-4">
            Tidak menemukan paket yang sesuai? Kami juga melayani{" "}
            <strong className="text-emerald-700">paket custom</strong> sesuai
            kebutuhan Anda.
          </p>
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 text-emerald-700 rounded-full font-semibold text-sm hover:bg-emerald-100 transition-colors"
          >
            Request Paket Custom
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
