import { Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section className="bg-cream py-14 lg:py-20 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <Quote className="size-7 lg:size-8 text-nude mx-auto mb-4" strokeWidth={1.4} fill="currentColor" />

        <blockquote className="font-heading text-teal text-lg lg:text-2xl font-medium italic leading-snug mb-5">
          “Me dijeron lo que no necesitaba. Por eso volví.”
        </blockquote>

        <cite className="not-italic text-[11px] text-teal/60 tracking-[0.1em] uppercase">
          Marta R. · Paciente desde 2019
        </cite>
      </div>
    </section>
  );
}