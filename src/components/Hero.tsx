import { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/hero-kaaba.jpg",
    title: "Wujudkan Impian Beribadah\nke Tanah Suci",
    subtitle: "Bersama Khalifah Tour & Travel",
    description:
      "Pengalaman umrah eksklusif dengan bimbingan ibadah penuh, hotel strategis dekat Masjidil Haram, dan pelayanan terbaik sepanjang perjalanan spiritual Anda.",
  },
  {
    image: "/images/madinah.jpg",
    title: "Ziarah ke Kota\nRasulullah ﷺ",
    subtitle: "Madinah Al-Munawwarah",
    description:
      "Kunjungi Masjid Nabawi, Raudhah yang mulia, dan tempat-tempat bersejarah Islam dengan panduan ustadz berpengalaman.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/70 to-emerald-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
      ))}

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-300 text-sm font-medium">
              Keberangkatan Setiap Bulan
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 font-['Playfair_Display']">
            {slides[current].title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < slides[current].title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className="text-xl sm:text-2xl text-amber-400 font-['Amiri'] italic mb-6">
            {slides[current].subtitle}
          </p>

          <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
            {slides[current].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("packages")}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              Lihat Paket Umrah
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              Konsultasi Gratis
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-lg">
            {[
              { value: "5000+", label: "Jamaah Puas" },
              { value: "12+", label: "Tahun Pengalaman" },
              { value: "98%", label: "Rating Positif" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white font-['Playfair_Display']">
                  {stat.value}
                </div>
                <div className="text-amber-300/80 text-xs sm:text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-amber-400 w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
