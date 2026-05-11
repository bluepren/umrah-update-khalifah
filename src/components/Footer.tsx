export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">ك</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white font-['Playfair_Display']">
                  Khalifah
                </h2>
                <p className="text-xs text-emerald-400 tracking-widest uppercase">
                  Tour &amp; Travel
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Travel umrah dan haji terpercaya, berizin resmi Kemenag RI.
              Mengutamakan kenyamanan dan kekhusyukan ibadah Anda ke Tanah Suci.
            </p>
            <div className="flex gap-3">
              {["WA", "IG", "FB", "YT"].map((social) => (
                <div
                  key={social}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-700 flex items-center justify-center text-xs font-medium transition-colors cursor-pointer"
                >
                  {social}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-slate-300">
              Menu Cepat
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Beranda", id: "home" },
                { label: "Paket Umrah", id: "packages" },
                { label: "Tentang Kami", id: "about" },
                { label: "Testimoni", id: "testimonials" },
                { label: "Kontak", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-slate-400 hover:text-emerald-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-slate-300">
              Paket Umrah
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Paket Silver - 9 Hari", id: "packages" },
                { label: "Paket Gold - 12 Hari", id: "packages" },
                { label: "Paket Platinum - 15 Hari", id: "packages" },
                { label: "Paket Custom", id: "contact" },
                { label: "Paket Haji Khusus", id: "contact" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-slate-400 hover:text-emerald-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-slate-300">
              Kontak
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>Jl. Raya Ahmad Yani No. 88, Jakarta Timur</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>info@khalifahtour.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>Senin - Sabtu, 08:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Khalifah Tour &amp; Travel. Hak
            Cipta Dilindungi. | Berizin Resmi Kemenag RI
          </p>
          <div className="flex gap-6">
            <span className="text-slate-500 text-xs hover:text-emerald-400 cursor-pointer transition-colors">
              Kebijakan Privasi
            </span>
            <span className="text-slate-500 text-xs hover:text-emerald-400 cursor-pointer transition-colors">
              Syarat &amp; Ketentuan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
