import { useState, useEffect } from "react";
import { cn } from "../utils/cn";

const testimonials = [
  {
    name: "H. Ahmad Fauzi",
    location: "Jakarta",
    role: "Jamaah Umrah 2024",
    content:
      "Alhamdulillah, perjalanan umrah bersama Khalifah sangat berkesan. Hotelnya dekat Masjidil Haram, makanannya enak, dan bimbingan ustadznya sangat membantu. Terima kasih Khalifah!",
    rating: 5,
    avatar: "AF",
  },
  {
    name: "Ibu Siti Maryam",
    location: "Surabaya",
    role: "Jamaah Umrah 2024",
    content:
      "Saya umrah bersama suami dan anak-anak. Pelayanannya luar biasa, dari berangkat sampai pulang semua terurus dengan baik. Muthawwifnya sabar dan telaten membimbing kami.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Bpk. Rahmat Hidayat",
    location: "Bandung",
    role: "Jamaah Umrah 2023",
    content:
      "Baru pertama kali umrah dan memilih Khalifah. Tidak menyesal! Bimbingan manasiknya sangat detail, jadi saya tidak bingung saat di Tanah Suci. Insya Allah akan umrah lagi bersama Khalifah.",
    rating: 5,
    avatar: "RH",
  },
  {
    name: "Keluarga H. Ibrahim",
    location: "Medan",
    role: "Jamaah Umrah 2024",
    content:
      "Kami rombongan keluarga 15 orang. Khalifah memberikan pelayanan yang sangat baik. Koordinasi dan komunikasinya bagus. Hotel bintang 5 persis di depan Masjidil Haram. Masya Allah!",
    rating: 5,
    avatar: "HI",
  },
  {
    name: "Ibu Nurhasanah",
    location: "Yogyakarta",
    role: "Jamaah Umrah 2024",
    content:
      "Pelayanan terbaik! Saya yang sudah lansia sangat diperhatikan. Ada pendampingan khusus untuk jamaah lansia. Makanan Indonesia selalu tersedia. Sangat direkomendasikan!",
    rating: 5,
    avatar: "NH",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const itemsPerView = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-50 to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            Testimoni Jamaah
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-['Playfair_Display'] mb-4">
            Cerita dari Jamaah Kami
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Dengarkan pengalaman para jamaah yang telah berangkat umrah bersama
            Khalifah Tour &amp; Travel.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const isActive =
              index >= current &&
              index < current + itemsPerView;

            return (
              <div
                key={index}
                className={cn(
                  "bg-white rounded-2xl p-6 border transition-all duration-500 hover:shadow-xl hover:-translate-y-1",
                  isActive
                    ? "border-emerald-200 shadow-lg"
                    : "border-slate-100 opacity-70"
                )}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: testimonials.length - itemsPerView + 1 }).map(
            (_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  current === i
                    ? "bg-emerald-600 w-6"
                    : "bg-slate-300 hover:bg-slate-400"
                )}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
