import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white p-7 lg:p-8 border border-nude/30 rounded-md hover:border-teal transition-colors duration-300 flex flex-col h-full"
    >
      <Icon className="size-7 text-teal mb-4" strokeWidth={1.4} />
      <h3 className="font-heading text-teal text-lg lg:text-[17px] font-medium leading-tight mb-2">
        {title}
      </h3>
      <p className="text-xs lg:text-[13px] text-teal/70 leading-relaxed flex-grow">
        {description}
      </p>
      <span className="text-[11px] text-nude tracking-[0.1em] uppercase font-medium mt-4 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
        Ver más
        <ArrowRight className="size-3" strokeWidth={1.8} />
      </span>
    </Link>
  );
}