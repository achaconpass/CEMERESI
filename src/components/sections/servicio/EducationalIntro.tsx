import { LucideIcon } from "lucide-react";

interface AlopeciaType {
  icon: LucideIcon;
  name: string;
  description: string;
}

interface EducationalIntroProps {
  intro: string;
  alopeciaTypes: AlopeciaType[];
}

export function EducationalIntro({ intro, alopeciaTypes }: EducationalIntroProps) {
  return (
    <section className="bg-white py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <p className="eyebrow mb-3">Antes de hablar de trasplante</p>
          <h2 className="font-heading text-teal text-[26px] lg:text-[40px] font-medium leading-tight tracking-tight mb-5">
            ¿Por qué se cae el pelo?
          </h2>
          <p className="text-teal/75 text-sm lg:text-base leading-relaxed max-w-[680px] mx-auto">
            {intro}
          </p>
        </div>

        <h3 className="font-heading text-teal text-xl lg:text-2xl font-medium text-center mb-8 lg:mb-10">
          Los tres tipos de alopecia más comunes
        </h3>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
          {alopeciaTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div
                key={type.name}
                className="bg-cream/60 border border-nude/30 rounded-md p-7 lg:p-8"
              >
                <Icon
                  className="size-7 text-teal mb-4"
                  strokeWidth={1.4}
                />
                <h4 className="font-heading text-teal text-lg font-medium leading-tight mb-2">
                  {type.name}
                </h4>
                <p className="text-[13px] text-teal/70 leading-relaxed">
                  {type.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}