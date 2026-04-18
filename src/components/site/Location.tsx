const points = [
  { x: 50, y: 50, label: "Belvedere Hill", main: true },
  { x: 22, y: 32, label: "Salvador Shopping" },
  { x: 78, y: 28, label: "Shopping da Bahia" },
  { x: 18, y: 70, label: "Hospital Aliança" },
  { x: 80, y: 70, label: "Hospital Português" },
  { x: 38, y: 18, label: "Colégio Antônio Vieira" },
  { x: 65, y: 82, label: "Pan Americano" },
  { x: 30, y: 85, label: "Centro Empresarial Iguatemi" },
];

export function Location() {
  return (
    <section id="localizacao" className="py-24 sm:py-32 surface-forest">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5">
          <p className="text-[10px] uppercase tracking-[0.45em] text-champagne/70">
            Localização
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-champagne mt-5 leading-[1.05] text-balance">
            Num bairro nobre, com tudo às suas ordens.
          </h2>
          <div className="gold-rule w-24 my-8" />
          <p className="text-champagne-light/80 text-lg leading-relaxed">
            Alameda das Catabas, no coração do Caminho das Árvores —
            o endereço mais bem servido de Salvador. Shoppings, hospitais,
            escolas de elite, restaurantes e centros empresariais a poucos
            minutos a pé.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              ["Shoppings", "3 min"],
              ["Hospitais", "5 min"],
              ["Escolas", "4 min"],
              ["Centros emp.", "2 min"],
            ].map(([k, v]) => (
              <div key={k} className="border-l-2 border-accent pl-4">
                <div className="font-serif text-2xl text-champagne">{v}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-champagne-light/60 mt-1">
                  {k}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative aspect-square sm:aspect-[4/3] w-full bg-forest-deep border border-champagne/15 overflow-hidden">
            {/* Stylized grid */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-champagne/10">
              <defs>
                <pattern id="g" width="6" height="6" patternUnits="userSpaceOnUse">
                  <path d="M 6 0 L 0 0 0 6" fill="none" stroke="currentColor" strokeWidth="0.2" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#g)" />
              {/* Roads */}
              <path d="M0 50 L100 50 M50 0 L50 100 M0 20 L100 30 M0 80 L100 70" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.4"/>
            </svg>

            {/* Points */}
            {points.map((p, i) => (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <div className="flex flex-col items-center group">
                  <span
                    className={`block rounded-full ${
                      p.main
                        ? "w-4 h-4 bg-accent ring-4 ring-accent/30 animate-pulse-soft"
                        : "w-2.5 h-2.5 bg-champagne"
                    }`}
                  />
                  <span
                    className={`mt-2 whitespace-nowrap text-[10px] tracking-[0.18em] uppercase ${
                      p.main ? "text-accent font-semibold" : "text-champagne-light/80"
                    }`}
                  >
                    {p.label}
                  </span>
                </div>
              </div>
            ))}

            <div className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.3em] text-champagne-light/50">
              Caminho das Árvores · Salvador / BA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
