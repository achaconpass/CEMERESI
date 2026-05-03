"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CtaDual() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "primera-valoracion-gratuita" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#1F4E5F",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="reservar" className="bg-nude py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <p className="eyebrow text-teal/70 mb-3">Reserva tu cita</p>

        <h2 className="font-heading text-teal text-[26px] lg:text-[40px] font-medium leading-tight tracking-tight mb-3">
          Hablemos sin compromiso.
        </h2>

        <p className="text-teal/80 text-sm lg:text-[14px] leading-relaxed max-w-[440px] mx-auto mb-8 lg:mb-10">
          Primera valoración gratuita. Sin venta agresiva.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 lg:gap-4 max-w-[700px] mx-auto">
          {/* Card WhatsApp */}
          <div className="bg-white rounded-md p-7 lg:p-8 text-center flex flex-col">
            <div className="size-11 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="size-5 text-white" strokeWidth={1.8} />
            </div>
            <h3 className="font-heading text-teal text-lg font-medium mb-1">
              WhatsApp
            </h3>
            <p className="text-[11px] text-teal/60 tracking-wide mb-4">
              Respuesta en menos de 1 hora
            </p>
            <Link
              href="https://wa.me/34637687934?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20informaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-teal font-medium bg-cream py-3 rounded-md mt-auto hover:bg-cream/70 transition-colors"
            >
              +34 637 68 79 34
            </Link>
          </div>

          {/* Card Cal.com */}
          <div className="bg-white rounded-md p-7 lg:p-8 text-center flex flex-col">
            <div className="size-11 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="size-5 text-white" strokeWidth={1.8} />
            </div>
            <h3 className="font-heading text-teal text-lg font-medium mb-1">
              Reserva online
            </h3>
            <p className="text-[11px] text-teal/60 tracking-wide mb-4">
              Calendario en tiempo real
            </p>
            <Button
              data-cal-namespace="primera-valoracion-gratuita"
              data-cal-link="antonio-chacon-bpk8o5/primera-valoracion-gratuita"
              data-cal-config='{"layout":"month_view","theme":"light"}'
              className="bg-teal text-white hover:bg-teal-hover h-11 mt-auto text-xs tracking-wide"
            >
              Ver disponibilidad
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}