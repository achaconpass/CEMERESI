"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServiceCtaProps {
  title: string;
  subtitle: string;
}

export function ServiceCta({ title, subtitle }: ServiceCtaProps) {
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

  return (
    <section className="bg-nude py-16 lg:py-20 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-teal text-[26px] lg:text-[36px] font-medium leading-tight tracking-tight mb-3">
          {title}
        </h2>
        <p className="text-teal/80 text-sm lg:text-base leading-relaxed max-w-[480px] mx-auto mb-8">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            data-cal-namespace="primera-valoracion-gratuita"
            data-cal-link="antonio-chacon-bpk8o5/primera-valoracion-gratuita"
            data-cal-config='{"layout":"month_view","theme":"light"}'
            className="bg-teal text-white hover:bg-teal-hover h-12 px-6 text-sm tracking-wide"
          >
            Pide tu valoración gratuita
          </Button>
          <Button
            asChild
            variant="outline"
            className="bg-transparent border-teal/40 text-teal hover:bg-teal/5 h-12 px-6 text-sm tracking-wide"
          >
            <Link
              href="https://wa.me/34637687934?text=Hola%2C%20tengo%20una%20duda%20sobre%20cirug%C3%ADa%20capilar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" strokeWidth={1.8} />
              WhatsApp directo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}