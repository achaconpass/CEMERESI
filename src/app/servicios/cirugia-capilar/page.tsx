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
  Microscope,
  Scissors,
  Gem,
  User,
  Sparkles,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cirugía capilar en Madrid · Dra. Carmen Orozco · CEMERESI",
  description:
    "Injerto capilar con técnicas FUE, Implanter y Zafiro en Moncloa-Argüelles. Diagnóstico previo, contenido educativo y resultados naturales. Valoración gratuita.",
  keywords: [
    "cirugía capilar Madrid",
    "injerto capilar Moncloa",
    "FUE Madrid",
    "técnica Zafiro Madrid",
    "implanter Madrid",
    "trasplante de pelo Argüelles",
    "Carmen Orozco capilar",
    "alopecia Madrid",
  ],
};

const alopeciaTypes = [
  {
    icon: User,
    name: "Androgenética",
    description:
      "La más común. Hereditaria, progresiva y vinculada a hormonas. Afecta principalmente a la zona frontal y la coronilla en hombres, y al volumen general en mujeres.",
  },
  {
    icon: Sparkles,
    name: "Areata",
    description:
      "Caída en placas redondeadas, de origen autoinmune. Puede aparecer y revertirse de forma espontánea. Necesita diagnóstico médico antes de cualquier tratamiento.",
  },
  {
    icon: Activity,
    name: "Efluvio telógeno",
    description:
      "Caída temporal por estrés físico o emocional, postparto, dietas restrictivas o cambios hormonales. Suele resolverse al eliminar la causa, sin necesidad de cirugía.",
  },
];

const doctorPosts = [
  "https://www.instagram.com/p/DOBJGN2CHo9/",
  "https://www.instagram.com/p/DUnSl3JDdeK/",
  "https://www.instagram.com/p/DK2gjvUuDzH/",
];

const techniques = [
  {
    icon: Microscope,
    name: "Técnica FUE",
    shortDesc:
      "Extracción folicular unitaria. Mínimamente invasiva, sin cicatriz lineal.",
    details: [
      "Recuperación entre 7 y 10 días",
      "Sin puntos ni cicatriz visible",
      "Apta para zonas pequeñas y medianas",
      "Permite combinar con otras técnicas",
    ],
  },
  {
    icon: Scissors,
    name: "Implanter (Choi)",
    shortDesc:
      "Implantación directa con dispositivo Choi. Mayor densidad, menor manipulación del folículo.",
    details: [
      "Implantación más precisa por unidad folicular",
      "Reduce el tiempo del folículo fuera del cuerpo",
      "Indicado para barba, cejas y zonas finas",
      "Resultados más naturales en líneas frontales",
    ],
  },
  {
    icon: Gem,
    name: "Zafiro",
    shortDesc:
      "Apertura de canales con micro-cuchillas de zafiro. Cicatrización más rápida.",
    details: [
      "Canales más limpios que con acero quirúrgico",
      "Inflamación post-operatoria menor",
      "Mayor densidad alcanzable por sesión",
      "Recuperación visible en 5-7 días",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Valoración gratuita",
    description:
      "Diagnóstico capilar personalizado: tipo de alopecia, densidad, zona donante y objetivos realistas.",
  },
  {
    number: "02",
    title: "Plan personalizado",
    description:
      "Te explicamos qué técnica conviene y por qué. Si no es necesario operar, te lo decimos.",
  },
  {
    number: "03",
    title: "Intervención",
    description:
      "Sesión ambulatoria de 6-8 horas con anestesia local. Equipo médico titulado en cada paso.",
  },
  {
    number: "04",
    title: "Seguimiento",
    description:
      "Control a los 7 días, mes, 3 meses, 6 meses y 12 meses. El resultado final se ve a partir del año.",
  },
];

const faqs = [
  {
    question: "¿Cuántas sesiones necesito?",
    answer:
      "Depende de la extensión de la zona a tratar. La mayoría de casos se resuelven en una sola sesión. Casos más extensos pueden requerir una segunda sesión a los 12 meses, una vez visible el resultado de la primera.",
  },
  {
    question: "¿Cuándo se ve el resultado final?",
    answer:
      "El pelo trasplantado pasa por varias fases: caída inicial a las 3-6 semanas (es normal y esperado), inicio del crecimiento a los 3-4 meses, densidad notable a los 6 meses y resultado definitivo a los 12 meses.",
  },
  {
    question: "¿La cirugía deja cicatriz?",
    answer:
      "Las técnicas FUE, Implanter y Zafiro no dejan cicatriz lineal visible. Solo quedan microcicatrices puntiformes que son imperceptibles incluso con el pelo muy corto.",
  },
  {
    question: "¿Cuánto tiempo dura el postoperatorio?",
    answer:
      "Puedes incorporarte a tu vida normal en 7-10 días según la técnica. La zona donante cicatriza en 5-7 días. Recomendamos evitar deporte intenso, sol directo y piscinas durante 3-4 semanas.",
  },
  {
    question: "¿La cirugía es la única solución?",
    answer:
      "No siempre. En alopecias areatas o efluvios telógenos, la cirugía no es la primera opción. La valoración previa nos permite descartar tratamientos más adecuados antes de plantear cirugía.",
  },
  {
    question: "¿Cuánto cuesta una intervención?",
    answer:
      "El presupuesto es siempre personalizado y depende del número de unidades foliculares a injertar y la técnica elegida. La primera valoración es gratuita y sin compromiso.",
  },
];

export default function CirugiaCapilarPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          eyebrow="Cirugía capilar"
          title="Recupera tu pelo, no tu inseguridad."
          description="Técnicas FUE, Implanter y Zafiro para alopecias androgenéticas, cicatriciales y reconstrucciones de cejas y barba. Diagnóstico antes que producto: si la cirugía no es la mejor opción, te lo decimos."
        />

        <EducationalIntro
          eyebrow="Antes de hablar de trasplante"
          title="¿Por qué se cae el pelo?"
          intro="No toda caída de pelo es una alopecia que requiera cirugía. Antes de hablar de injertos, hay que entender qué está pasando: hay caídas reversibles, otras que necesitan tratamiento médico, y algunas que sí se resuelven con cirugía. El diagnóstico siempre va primero."
          subtitleHeading="Los tres tipos de alopecia más comunes"
          alopeciaTypes={alopeciaTypes}
        />

        <DoctorVoice
          doctorName="Dra. Carmen Orozco"
          doctorTitle="Especialista en cirugía capilar"
          doctorBio="La Dra. Orozco lleva años especializada en diagnóstico y tratamiento de alopecias en CEMERESI. Su enfoque combina criterio médico con divulgación honesta: la mayoría del contenido que comparte en redes está pensado para que el paciente entienda primero y decida después."
          instagramHandle="dra.koeyu"
          instagramUrl="https://www.instagram.com/dra.koeyu/"
          posts={doctorPosts}
        />

        {/* Sección: Técnicas */}
        <section className="bg-cream py-16 lg:py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 lg:mb-14">
              <p className="eyebrow mb-3">Técnicas que aplicamos</p>
              <h2 className="font-heading text-teal text-[26px] lg:text-[40px] font-medium leading-tight tracking-tight">
                Tres técnicas, una decisión informada.
              </h2>
              <p className="text-teal/70 text-sm lg:text-[14px] leading-relaxed max-w-[560px] mx-auto mt-3 lg:mt-4">
                No todas las técnicas son para todos los casos. Te explicamos cuál te conviene y por qué, sin tecnicismos.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {techniques.map((tech) => (
                <TechniqueCard key={tech.name} {...tech} />
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
                De la primera valoración al resultado.
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
          title="Hablemos de tu caso."
          subtitle="Primera valoración gratuita. Te decimos qué técnica conviene y, si no conviene operar, también te lo decimos."
        />
      </main>
      <Footer />
      <FloatingCTAs />
    </>
  );
}