const projects = [
  "Imperial Morro Ipiranga",
  "Imperia Lounge Itacimirim",
  "Bora Bora Itacimirim",
  "Belvedere Ville Itacimirim",
  "Palm Ville Eco Residencial",
  "Village Imbassaí Summer Flats",
  "Absolut Ville Itacimirim",
  "Solar Riviera",
  "Itacimirim Eco Ville",
  "Hotel Riviera Premium",
  "Edif. Varandas do Imbuí",
  "Eco Ville Itacimirim",
];

export function Developer() {
  return (
    <section id="construtora" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <p className="text-[10px] uppercase tracking-[0.45em] text-forest/60">A Construtora</p>
          <h2 className="font-serif text-5xl sm:text-6xl text-forest mt-5 leading-[0.95]">
            Grupo
            <br />
            <em className="italic font-light text-accent">Azinunes.</em>
          </h2>
          <div className="gold-rule w-24 my-8" />
          <p className="text-charcoal/80 text-lg leading-relaxed">
            Empresa baiana com mais de <strong className="text-forest">10 anos</strong> no
            mercado, com foco em construção de edifícios comerciais e
            residenciais. A busca contínua pelo aperfeiçoamento das obras, a
            fidelidade nos prazos de entrega e a satisfação dos clientes
            consolidaram nossa marca como sinônimo de excelência e credibilidade.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              ["10+", "Anos"],
              ["14", "Empreendimentos"],
              ["100%", "Entregas no prazo"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="font-serif text-3xl text-forest">{v}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/60 mt-1">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-[10px] uppercase tracking-[0.4em] text-forest/60 mb-6">
            Alguns dos nossos sucessos imobiliários
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8">
            {projects.map((p) => (
              <li
                key={p}
                className="flex items-baseline gap-3 py-4 border-b border-forest/10 text-forest"
              >
                <span className="text-accent font-serif text-sm">◆</span>
                <span className="font-serif text-lg">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
