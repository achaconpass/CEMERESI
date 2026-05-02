import { Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full h-[75vh] lg:h-[85vh] lg:max-h-[720px] overflow-hidden bg-teal">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay teal 67% (valor calibrado) */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(31, 78, 95, 0.67)" }}
      />

      {/* Contenido */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center items-start">
        <p className="eyebrow text-nude mb-5 lg:mb-6">
          Madrid · Moncloa · Argüelles
        </p>

        <h1 className="font-heading text-white font-medium leading-[1.1] tracking-tight mb-5 lg:mb-6 text-[36px] sm:text-[44px] lg:text-[64px] max-w-[720px]">
          Belleza con criterio médico.
        </h1>

        <p className="text-cream/90 text-sm lg:text-base leading-relaxed mb-8 lg:mb-9 max-w-[540px]">
          Diagnóstico antes que producto. Te decimos lo que necesitas y, sobre
          todo, lo que no. Quince años escuchando antes de tratar.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button
            asChild
            className="bg-nude text-white hover:bg-nude-dark h-12 px-6 text-sm tracking-wide"
          >
            <Link href="#reservar">
              <Calendar className="size-4" strokeWidth={1.8} />
              Pide tu cita online
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="bg-transparent border-white/50 text-white hover:bg-white/10 h-12 px-6 text-sm tracking-wide"
          >
            <Link
              href="https://wa.me/34637687934?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20informaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" strokeWidth={1.8} />
              WhatsApp directo
            </Link>
          </Button>
        </div>
      </div>

      {/* Etiqueta esquina inferior izquierda */}
      <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-12 z-10 text-white/70 text-[10px] tracking-[0.15em] uppercase">
        ▶ Tour por la clínica
      </div>
    </section>
  );
}