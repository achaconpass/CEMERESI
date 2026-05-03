import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTAs } from "@/components/layout/FloatingCTAs";
import { ServiceHero } from "@/components/sections/servicio/ServiceHero";
import { EducationalIntro } from "@/components/sections/servicio/EducationalIntro";
import { DoctorVoice } from "@/components/sections/servicio/DoctorVoice";
import { TechniqueCard } from "@/components/sections/servicio/TechniqueCard";
import { ProcessTimeline } from "@/components/sections/servicio/ProcessTimeline";
import { FaqSection } from "@/components/sections/servicio/FaqSection";
import { ServiceCta } from "@/components/sections/servicio/ServiceCta";
import {
  Syringe,
  Sparkles,
  Droplet,
  Clock,
  Eye,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medicina estética en Madrid · Dra. Chris Arenas · CEMERESI",
  description:
    "Tratamientos de medicina estética facial y corporal en Moncloa-Argüelles. Bótox, ácido hialurónico, mesoterapia. Diagnóstico antes que producto, sin venta agresiva.",
  keywords: [
    "medicina estética Madrid",
    "bótox Madrid Moncloa",
    "ácido hialurónico Argüelles",
    "mesoterapia facial Madrid",
    "rejuvenecimiento facial Moncloa",
    "Chris Arenas medicina estética",
    "tratamientos faciales Madrid",
  ],
};

const aestheticConcerns = [
  {
    icon: Clock,
    name: "Envejecimiento natural",
    description:
      "Pérdida de colágeno, líneas de expresión, flacidez progresiva. No es una enfermedad, pero se puede acompañar para envejecer con criterio.",
  },
  {
    icon: Eye,
    name: "Asimetrías y rasgos",
    description:
      "Pequeños ajustes en zonas concretas (mentón, labios, ojeras) que devuelven armonía sin transformar el rostro. La clave está en la sutileza.",
  },
  {
    icon: AlertCircle,
    name: "Marcas y texturas",
    description:
      "Cicatrices de acné, manchas, poros dilatados. Tratables con peelings, mesoterapia o láser dependiendo del caso. El diagnóstico marca la técnica.",
  },
];

const doctorPosts = [
  "https://www.instagram.com/p/CrQ6fc_Av0z/",
  "https://www.instagram.com/p/CrOb3xmNVff/",
  "https://www.instagram.com/p/CnxNzMBhngY/",
];

const treatments = [
  {
    icon: Syringe,
    name: "Toxina botulínica",
    shortDesc:
      "Relajación temporal de músculos faciales para suavizar líneas dinámicas. Resultado natural cuando se dosifica con criterio.",
    details: [
      "Indicado en frente, entrecejo y patas de gallo",
      "Resultado visible a partir del 5º día",
      "Duración media de 4 a 6 meses",
      "Dosis personalizada según expresión facial",
    ],
  },
  {
    icon: Droplet,
    name: "Ácido hialurónico",
    shortDesc:
      "Restauración de volúmenes, hidratación profunda y proyección de rasgos. Reversible si el resultado no convence.",
    details: [
      "Aplicación en labios, ojeras, surcos y mentón",
      "Resultado inmediato, ajuste en revisión",
      "Duración entre 8 y 18 meses según zona",
      "Reversible con hialuronidasa si fuera necesario",
    ],
  },
  {
    icon: Sparkles,
    name: "Mesoterapia y peelings",
    shortDesc:
      "Tratamientos de revitalización cutánea: vitaminas, antioxidantes, ácidos exfoliantes. Resultado progresivo y acumulativo.",
    details: [
      "Mejora textura, luminosidad y firmeza",
      "Sesiones espaciadas (cada 2-4 semanas)",
      "Indicado como mantenimiento o pre-evento",
      "Combinable con otros tratamientos",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Valoración inicial",
    description:
      "Análisis facial completo, escucha de tus objetivos y revisión de tu historia médica. Sin compromiso de tratamiento.",
  },
  {
    number: "02",
    title: "Plan a medida",
    description:
      "Te explicamos qué tratamiento (o combinación) tiene sentido para ti, qué no, y por qué. También te decimos si no lo necesitas.",
  },
  {
    number: "03",
    title: "Tratamiento",
    description:
      "Sesión ambulatoria de 30-60 minutos. Se realiza en consulta, con técnica estéril y dosificación personalizada.",
  },
  {
    number: "04",
    title: "Revisión y mantenimiento",
    description:
      "Revisión a los 15 días para ajustar si es necesario. Plan de mantenimiento opcional según el tratamiento elegido.",
  },
];

const faqs = [
  {
    question: "¿La medicina estética es solo para personas mayores?",
    answer:
      "No. Cada vez más jóvenes acuden por prevención (relajantes musculares en dosis muy bajas), por hidratación, o por pequeños ajustes específicos. La edad no es un criterio: el criterio es si hay algo que se puede mejorar de forma natural y reversible.",
  },
  {
    question: "¿Se nota que me he hecho algo?",
    answer:
      "Si está bien hecho, no. La medicina estética con criterio busca que tú te veas mejor, no que los demás vean que te has tratado. Si ves caras 'tratadas' en redes es porque están mal dosificadas o porque buscan ese efecto. Aquí trabajamos en la dirección contraria.",
  },
  {
    question: "¿Es doloroso?",
    answer:
      "Las inyecciones tienen una molestia mínima, similar a un pellizco. En zonas más sensibles como labios usamos crema anestésica. La mayoría de pacientes describe la experiencia como llevadera, no dolorosa.",
  },
  {
    question: "¿Cuánto duran los resultados?",
    answer:
      "Depende del tratamiento. La toxina botulínica entre 4 y 6 meses, el ácido hialurónico entre 8 y 18 meses según la zona, y la mesoterapia es acumulativa con efecto progresivo. En la valoración te lo concretamos para tu caso.",
  },
  {
    question: "¿Cuándo puedo retomar mi vida normal tras un tratamiento?",
    answer:
      "Inmediatamente. La medicina estética facial no requiere baja. Solo recomendamos evitar deporte intenso, sauna y exposición solar directa durante 24-48 horas.",
  },
  {
    question: "¿La medicina estética siempre es la mejor opción?",
    answer:
      "No. Hay casos donde la cirugía es más adecuada, otros donde basta con hábitos (sueño, hidratación, fotoprotección), y otros donde simplemente no es necesario hacer nada. Eso es lo que determina la valoración previa.",
  },
];

export default function MedicinaEsteticaPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          eyebrow="Medicina estética"
          title="Naturalidad, no transformación."
          description="Tratamientos faciales y corporales sin cirugía con criterio médico. Bótox, ácido hialurónico, mesoterapia y peelings dosificados con un solo objetivo: que te veas mejor sin que se note que te has tratado."
        />

        <EducationalIntro
          eyebrow="Antes de elegir tratamiento"
          title="¿Qué puede y qué no puede la medicina estética?"
          intro="La medicina estética no debería notarse. Si una persona pasa a tu lado y piensa 'a esa le han hecho algo', el tratamiento ha fallado. El objetivo no es transformar tu cara, es acompañar a tu rostro a expresar mejor lo que ya eres. Por eso, antes de elegir un tratamiento, hay que diagnosticar qué está pasando realmente."
          subtitleHeading="Tres áreas que abordamos"
          alopeciaTypes={aestheticConcerns}
        />

        <DoctorVoice
          doctorName="Dra. Chris Arenas"
          doctorTitle="Especialista en medicina estética"
          doctorBio="La Dra. Arenas combina su práctica clínica en CEMERESI con divulgación constante en redes. Su línea editorial es clara: explicar lo que la medicina estética puede hacer, lo que no debería hacer, y cuándo «no» es la respuesta. Si la sigues en Instagram entenderás nuestra misión antes de venir, y eso es exactamente lo que queremos."
          instagramHandle="chrisarenas.dr"
          instagramUrl="https://www.instagram.com/chrisarenas.dr/"
          posts={doctorPosts}
        />

        {/* Sección: Tratamientos */}
        <section className="bg-cream py-16 lg:py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 lg:mb-14">
              <p className="eyebrow mb-3">Tratamientos que aplicamos</p>
              <h2 className="font-heading text-teal text-[26px] lg:text-[40px] font-medium leading-tight tracking-tight">
                Tres familias, mil combinaciones.
              </h2>
              <p className="text-teal/70 text-sm lg:text-[14px] leading-relaxed max-w-[560px] mx-auto mt-3 lg:mt-4">
                Cada paciente es distinto. La gracia está en saber qué combinar y, sobre todo, qué no. La dosis y el momento marcan la diferencia.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {treatments.map((treatment) => (
                <TechniqueCard key={treatment.name} {...treatment} />
              ))}
            </div>
          </div>
        </section>

        {/* Sección: Proceso */}
        <section className="bg-white py-16 lg:py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 lg:mb-14">
              <p className="eyebrow mb-3">Cómo trabajamos</p>
              <h2 className="font-heading text-teal text-[26px] lg:text-[40px] font-medium leading-tight tracking-tight">
                Del análisis al resultado.
              </h2>
            </div>
            <ProcessTimeline steps={processSteps} />
          </div>
        </section>

        {/* Sección: FAQ */}
        <section className="bg-cream py-16 lg:py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 lg:mb-14">
              <p className="eyebrow mb-3">Preguntas frecuentes</p>
              <h2 className="font-heading text-teal text-[26px] lg:text-[40px] font-medium leading-tight tracking-tight">
                Lo que más nos preguntan.
              </h2>
            </div>
            <FaqSection items={faqs} />
          </div>
        </section>

        {/* CTA final */}
        <ServiceCta
          title="Cuéntanos qué quieres mejorar."
          subtitle="Primera valoración gratuita. Te decimos qué tratamiento conviene y, si no conviene tratar, también te lo decimos."
        />
      </main>
      <Footer />
      <FloatingCTAs />
    </>
  );
}