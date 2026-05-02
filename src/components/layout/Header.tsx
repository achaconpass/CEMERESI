"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-nude w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo wordmark */}
        <Link
          href="/"
          className="font-heading text-white text-lg lg:text-xl tracking-[0.18em] font-medium"
        >
          CEMERESI
        </Link>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#" className="text-white text-xs tracking-wide hover:opacity-80 transition">
            Inicio
          </Link>
          <Link href="#servicios" className="text-white text-xs tracking-wide hover:opacity-80 transition">
            Servicios
          </Link>
          <Link href="#equipo" className="text-white text-xs tracking-wide hover:opacity-80 transition">
            Equipo
          </Link>
          <Link href="#blog" className="text-white text-xs tracking-wide hover:opacity-80 transition">
            Blog
          </Link>
          <Link href="#contacto" className="text-white text-xs tracking-wide hover:opacity-80 transition">
            Contacto
          </Link>
          <Button
            asChild
            className="bg-teal text-white hover:bg-teal-hover h-9 px-4 text-xs"
          >
            <Link href="#reservar">Pide tu cita</Link>
          </Button>
        </nav>

        {/* Botón hamburguesa móvil */}
        <button
          className="lg:hidden text-white"
          aria-label="Abrir menú"
        >
          <Menu className="size-6" strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
}