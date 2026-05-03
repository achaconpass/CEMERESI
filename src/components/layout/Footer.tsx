import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-teal py-12 lg:py-14 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 lg:gap-10 mb-10">
          {/* Col 1: Brand + tagline */}
          <div>
            <div className="font-heading text-white text-lg tracking-[0.18em] font-medium mb-4">
              CEMERESI
            </div>
            <p className="text-cream/70 text-xs leading-relaxed max-w-[260px]">
              Medicina y cirugía estética con criterio médico. Diagnóstico antes que producto.
            </p>
          </div>

          {/* Col 2: Visítanos */}
          <div>
            <h4 className="text-nude text-[10px] tracking-[0.2em] uppercase font-medium mb-4">
              Visítanos
            </h4>
            <address className="not-italic text-cream/85 text-xs leading-relaxed">
              C. de Martín de los Heros, 63<br />
              Moncloa-Aravaca<br />
              28008 Madrid
            </address>
          </div>

          {/* Col 3: Contacto */}
          <div>
            <h4 className="text-nude text-[10px] tracking-[0.2em] uppercase font-medium mb-4">
              Contacto
            </h4>
            <div className="text-cream/85 text-xs leading-relaxed">
              <Link
                href="https://wa.me/34637687934"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors block"
              >
                +34 637 68 79 34
              </Link>
              <div className="mt-1.5">
                Lun – Vie<br />
                9:00 – 20:00
              </div>
            </div>
          </div>

          {/* Col 4: Síguenos */}
          <div>
            <h4 className="text-nude text-[10px] tracking-[0.2em] uppercase font-medium mb-4">
              Síguenos
            </h4>
            <div className="flex gap-2.5">
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/clinicacemeresi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram CEMERESI"
                className="size-8 border border-nude/40 rounded-full flex items-center justify-center hover:border-nude transition-colors"
              >
                <svg
                  className="size-3.5 text-nude"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </Link>

              {/* Facebook */}
              <Link
                href="https://www.facebook.com/Cemeresi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook CEMERESI"
                className="size-8 border border-nude/40 rounded-full flex items-center justify-center hover:border-nude transition-colors"
              >
                <svg
                  className="size-3.5 text-nude"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-nude/20 pt-5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3">
          <div className="text-[10px] text-nude tracking-wider">
            © {new Date().getFullYear()} CEMERESI · Todos los derechos reservados
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-[10px] text-nude tracking-wider hover:text-white transition">
              Aviso legal
            </Link>
            <Link href="#" className="text-[10px] text-nude tracking-wider hover:text-white transition">
              Privacidad
            </Link>
            <Link href="#" className="text-[10px] text-nude tracking-wider hover:text-white transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}