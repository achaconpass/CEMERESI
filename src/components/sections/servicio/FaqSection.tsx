"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items: FaqItem[];
}

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {items.map((item, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-nude/30">
          <AccordionTrigger className="text-left font-heading text-teal text-base lg:text-lg font-medium py-5 hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-[13px] lg:text-sm text-teal/75 leading-relaxed pb-5">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}