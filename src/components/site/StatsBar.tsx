const stats = [
  { value: "Torre", label: "Única" },
  { value: "2", label: "Por andar" },
  { value: "Nascente", label: "Total" },
  { value: "4 Vagas", label: "+ Depósito" },
];

export function StatsBar() {
  return (
    <section className="surface-forest py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 divide-x divide-champagne/15">
        {stats.map((s, i) => (
          <div key={i} className="text-center px-4">
            <div className="font-serif text-3xl sm:text-4xl text-champagne">{s.value}</div>
            <div className="mt-2 text-[10px] sm:text-xs tracking-[0.35em] uppercase text-champagne-light/70">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
