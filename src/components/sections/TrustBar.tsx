import { Award, ShieldCheck, BadgeCheck, MapPin } from "lucide-react";

const items = [
  { icon: Award, label: "+15 años de experiencia" },
  { icon: ShieldCheck, label: "Centro médico autorizado" },
  { icon: BadgeCheck, label: "Médicos titulados" },
  { icon: MapPin, label: "Moncloa-Argüelles" },
];

export function TrustBar() {
  return (
    <section className="bg-cream border-b border-teal/8 py-5 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-3 lg:gap-x-14 items-center">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2">
              <Icon className="size-4 text-nude" strokeWidth={1.8} />
              <span className="text-xs lg:text-[11px] font-medium text-teal tracking-wide whitespace-nowrap">
                {item.label}
              </span>
              {idx < items.length - 1 && (
                <span className="hidden lg:inline-block w-px h-3.5 bg-teal/15 ml-6" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}