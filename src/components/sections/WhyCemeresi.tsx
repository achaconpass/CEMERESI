const stats = [
  { value: "+15", label: "Años de práctica" },
  { value: "6", label: "Especialidades" },
  { value: "100%", label: "Médicos titulados" },
  { value: "1", label: "Sede en Madrid" },
];

export function WhyCemeresi() {
  return (
    <section className="bg-white py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-12 items-center">
        {/* Imagen / placeholder */}
        <div className="relative aspect-[1/1.1] bg-nude rounded-md overflow-hidden order-1 lg:order-none">
          <div className="absolute inset-0 bg-teal/10" />
          <div className="absolute bottom-5 left-5 text-white/90 text-[10px] tracking-[0.15em] uppercase">
            Equipo médico CEMERESI
          </div>
        </div>

        {/* Contenido textual */}
        <div className="order-2 lg:order-none">
          <p className="eyebrow mb-4">Por qué CEMERESI</p>

          <h2 className="font-heading text-teal text-[26px] lg:text-[40px] font-medium leading-tight tracking-tight mb-5">
            Quince años escuchando antes de tratar.
          </h2>

          <p className="text-teal/80 text-sm lg:text-[14px] leading-relaxed mb-8 max-w-[540px]">
            No vendemos tratamientos. Diagnosticamos. Y si lo que necesitas es nada, te lo decimos. Esa es la diferencia entre una clínica médica y una cadena estética.
          </p>

          {/* Métricas en grid 2x2 */}
          <div className="grid grid-cols-2 gap-y-7 gap-x-6 max-w-[420px]">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-teal text-3xl lg:text-[32px] font-medium leading-none mb-1.5">
                  {stat.value}
                </div>
                <div className="text-[11px] text-teal/60 tracking-[0.05em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}