import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function ServiceHero({ eyebrow, title, description }: ServiceHeroProps) {
  return (
    <section className="bg-teal pt-28 pb-16 lg:pt-36 lg:pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav
          aria-label="Migas de pan"
          className="flex items-center gap-1.5 text-[11px] text-cream/60 mb-8 lg:mb-10"
        >
          <Link href="/" className="hover:text-cream transition">
            Inicio
          </Link>
          <ChevronRight className="size-3" strokeWidth={1.6} />
          <Link href="/#servicios" className="hover:text-cream transition">
            Servicios
          </Link>
          <ChevronRight className="size-3" strokeWidth={1.6} />
          <span className="text-cream/90">{title}</span>
        </nav>

        <p className="eyebrow text-nude mb-4 lg:mb-5">{eyebrow}</p>

        <h1 className="font-heading text-white font-medium leading-[1.1] tracking-tight mb-5 lg:mb-6 text-[34px] sm:text-[42px] lg:text-[56px] max-w-[820px]">
          {title}
        </h1>

        <p className="text-cream/85 text-sm lg:text-base leading-relaxed max-w-[600px]">
          {description}
        </p>
      </div>
    </section>
  );
}