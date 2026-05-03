import { LucideIcon } from "lucide-react";

interface TechniqueCardProps {
  icon: LucideIcon;
  name: string;
  shortDesc: string;
  details: string[];
}

export function TechniqueCard({ icon: Icon, name, shortDesc, details }: TechniqueCardProps) {
  return (
    <div className="bg-white border border-nude/30 rounded-md p-7 lg:p-8 flex flex-col h-full">
      <Icon className="size-7 text-teal mb-4" strokeWidth={1.4} />
      <h3 className="font-heading text-teal text-xl lg:text-2xl font-medium leading-tight mb-2">
        {name}
      </h3>
      <p className="text-[13px] text-teal/70 leading-relaxed mb-5">
        {shortDesc}
      </p>
      <ul className="space-y-2 mt-auto">
        {details.map((detail, idx) => (
          <li key={idx} className="text-[12px] text-teal/80 leading-relaxed flex items-start gap-2">
            <span className="text-nude mt-1 flex-shrink-0">•</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}