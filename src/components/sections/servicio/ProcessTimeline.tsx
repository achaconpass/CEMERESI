interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {steps.map((step, idx) => (
        <div key={idx} className="relative">
          <div className="font-heading text-nude text-3xl lg:text-4xl font-medium mb-3">
            {step.number}
          </div>
          <h3 className="font-heading text-teal text-lg font-medium mb-2 leading-tight">
            {step.title}
          </h3>
          <p className="text-[13px] text-teal/70 leading-relaxed">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}