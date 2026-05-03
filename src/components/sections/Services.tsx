import {
  Sparkles,
  Scissors,
  Users,
  Flower2,
  Activity,
  Apple,
} from "lucide-react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    icon: Sparkles,
    title: "Medicina estética",
    description:
      "Tratamientos faciales y corporales sin cirugía. Bótox, ácido hialurónico, mesoterapia.",
    href: "#medicina-estetica",
  },
  {
    icon: Scissors,
    title: "Cirugía estética",
    description:
      "Intervenciones faciales, mamarias y corporales. Equipo quirúrgico propio.",
    href: "#cirugia-estetica",
  },
  {
    icon: Users,
    title: "Cirugía capilar",
    description:
      "Técnicas FUE, Implanter y Zafiro. Resultados naturales y duraderos.",
    href: "#cirugia-capilar",
  },
  {
    icon: Flower2,
    title: "Estética integral",
    description:
      "Cuidado facial y corporal continuado. Higiene, peeling, tratamientos rejuvenecedores.",
    href: "#estetica-integral",
  },
  {
    icon: Activity,
    title: "Fisioterapia",
    description:
      "Pilates terapéutico y fisioterapia clínica. Recuperación funcional y postural.",
    href: "#fisioterapia",
  },
  {
    icon: Apple,
    title: "Nutrición",
    description:
      "Dietética clínica personalizada. Plan alimentario adaptado a tu objetivo.",
    href: "#nutricion",
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-cream py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 lg:mb-14">
          <p className="eyebrow mb-3">Lo que hacemos</p>
          <h2 className="font-heading text-teal text-[26px] lg:text-[40px] font-medium leading-tight tracking-tight">
            Seis pilares, un solo criterio.
          </h2>
          <p className="text-teal/70 text-sm lg:text-[14px] leading-relaxed max-w-[480px] mx-auto mt-3 lg:mt-4">
            Cada servicio se ofrece solo si tiene sentido para ti. Si no es necesario, te lo decimos.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}