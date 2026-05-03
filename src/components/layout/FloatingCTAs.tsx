"use client";

import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Calendar, MessageCircle } from "lucide-react";
import Link from "next/link";

export function FloatingCTAs() {
  const [visible, setVisible] = useState(false);

  // Inicializar Cal.com una sola vez
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "primera-valoracion-gratuita" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#1F4E5F" },
          dark: { "cal-brand": "#1F4E5F" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  // Mostrar/ocultar según el scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Aparece tras 300px de scroll
      const showAfter = scrolled > 300;
      // Se oculta a 600px del final (donde suele estar el CTA)
      const hideNearBottom = scrolled + windowHeight < docHeight - 600;

      setVisible(showAfter && hideNearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // chequeo inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 lg:bottom-7 lg:right-7 z-50 flex flex-col gap-2.5 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      {/* WhatsApp */}
      <Link
        href="https://wa.me/34637687934?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20informaci%C3%B3n"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#1fa854] text-white rounded-full shadow-lg shadow-black/15 transition-all h-12 lg:h-13 pl-3.5 pr-3.5 lg:pr-5"
      >
        <MessageCircle className="size-5" strokeWidth={1.8} />
        <span className="hidden lg:inline text-sm font-medium tracking-wide">
          WhatsApp
        </span>
      </Link>

      {/* Pide tu cita (Cal.com) */}
      <button
        data-cal-namespace="primera-valoracion-gratuita"
        data-cal-link="antonio-chacon-bpk8o5/primera-valoracion-gratuita"
        data-cal-config='{"layout":"month_view","theme":"light"}'
        aria-label="Pedir cita online"
        className="group flex items-center gap-2 bg-teal hover:bg-teal-hover text-white rounded-full shadow-lg shadow-black/15 transition-all h-12 lg:h-13 pl-3.5 pr-3.5 lg:pr-5"
      >
        <Calendar className="size-5" strokeWidth={1.8} />
        <span className="hidden lg:inline text-sm font-medium tracking-wide whitespace-nowrap">
          Pide tu cita
        </span>
      </button>
    </div>
  );
}