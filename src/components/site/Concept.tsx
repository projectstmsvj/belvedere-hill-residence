import interior from "@/assets/interior-living.jpg";

export function Concept() {
  return (
    <section id="empreendimento" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5">
          <p className="text-[10px] uppercase tracking-[0.45em] text-forest/60">
            O Empreendimento
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest mt-5 leading-[1.05] text-balance">
            Imponente por fora,{" "}
            <em className="italic font-light text-forest/80">exuberante por dentro.</em>
          </h2>
          <div className="gold-rule w-24 my-8" />
          <p className="text-charcoal/85 leading-relaxed text-lg">
            Você tem o livre arbítrio para escolher viver bem. Bom é acordar num
            lugar agradável, rodeado de comodidades. Melhor é repousar com sua
            família, com todo o conforto e sofisticação. Perfeito é viver do seu
            jeito — e nós reunimos tudo isso para completar sua vida.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6">
            {[
              ["31", "Andares"],
              ["61", "Unidades exclusivas"],
              ["3", "Opções de planta"],
              ["3", "Elevadores"],
            ].map(([v, l]) => (
              <div key={l} className="border-l-2 border-accent pl-4">
                <dt className="font-serif text-3xl text-forest">{v}</dt>
                <dd className="text-xs uppercase tracking-[0.25em] text-charcoal/60 mt-1">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="lg:col-span-7 relative">
          <img
            src={interior}
            alt="Interior do living de um apartamento Belvedere Hill com janelas amplas e vista verde"
            width={1600}
            height={1100}
            loading="lazy"
            className="w-full h-[420px] sm:h-[560px] object-cover elegant-shadow"
          />
          <div className="absolute -bottom-6 -left-6 sm:-left-10 surface-champagne px-8 py-6 max-w-xs hidden sm:block">
            <p className="font-serif text-2xl text-forest leading-tight">210m²</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-forest/70 mt-1">
              com gabinete · 4 suítes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
