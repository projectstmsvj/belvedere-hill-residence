import { useState } from "react";

type Plan = {
  id: string;
  label: string;
  area: string;
  highlight: string;
  rooms: { name: string; area: string }[];
};

const plans: Plan[] = [
  {
    id: "padrao",
    label: "Opção Padrão",
    area: "210 m²",
    highlight: "Com gabinete e varanda gourmet de 34,80 m²",
    rooms: [
      { name: "Suíte Master", area: "20,38 m²" },
      { name: "Suíte 02", area: "13,36 m²" },
      { name: "Suíte 03", area: "10,38 m²" },
      { name: "Suíte 04", area: "10,02 m²" },
      { name: "Estar e Jantar", area: "39,72 m²" },
      { name: "Cozinha", area: "15,92 m²" },
      { name: "Gabinete", area: "7,57 m²" },
      { name: "Varanda Gourmet", area: "34,80 m²" },
    ],
  },
  {
    id: "b",
    label: "Opção B",
    area: "210 m²",
    highlight: "Living, jantar e gourmet integrados em 52,11 m²",
    rooms: [
      { name: "Suíte Master + Closet", area: "18,06 + 5,71 m²" },
      { name: "Suíte 02", area: "15,86 m²" },
      { name: "Suíte 03 + Closet", area: "15,14 + 6,90 m²" },
      { name: "Estar / Jantar / Gourmet", area: "52,11 m²" },
      { name: "Cozinha + Adega", area: "14,17 + 1,20 m²" },
      { name: "Varanda", area: "8,95 m²" },
      { name: "Lavabo", area: "2,46 m²" },
      { name: "Serviço", area: "4,03 m²" },
    ],
  },
  {
    id: "c",
    label: "Opção C",
    area: "210 m²",
    highlight: "Quatro suítes com living integrado de 42,86 m²",
    rooms: [
      { name: "Suíte Master + Closet", area: "15,17 + 5,22 m²" },
      { name: "Suíte 02", area: "16,28 m²" },
      { name: "Suíte 03", area: "15,86 m²" },
      { name: "Suíte 04", area: "10,52 m²" },
      { name: "Estar / Jantar / Gourmet", area: "42,86 m²" },
      { name: "Cozinha + Adega", area: "14,17 + 1,40 m²" },
      { name: "Varanda", area: "9,00 m²" },
      { name: "Lavabo", area: "2,46 m²" },
    ],
  },
];

function PlanIllustration({ id }: { id: string }) {
  // Three distinct stylized SVG floor plan diagrams
  const common = {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.2,
  };
  return (
    <svg viewBox="0 0 400 320" className="w-full h-full text-forest/85">
      <rect x="20" y="20" width="360" height="280" {...common} />
      {id === "padrao" && (
        <>
          <line x1="200" y1="20" x2="200" y2="300" {...common} />
          <line x1="20" y1="160" x2="380" y2="160" {...common} />
          <rect x="40" y="40" width="140" height="100" {...common} />
          <rect x="220" y="40" width="140" height="100" {...common} />
          <rect x="40" y="180" width="140" height="100" {...common} />
          <rect x="220" y="180" width="140" height="100" {...common} />
          <text x="110" y="95" textAnchor="middle" className="text-[10px]" fill="currentColor" fontSize="10">
            SUÍTE MASTER
          </text>
          <text x="290" y="95" textAnchor="middle" fill="currentColor" fontSize="10">
            ESTAR / JANTAR
          </text>
          <text x="110" y="235" textAnchor="middle" fill="currentColor" fontSize="10">
            SUÍTE 02 / 03
          </text>
          <text x="290" y="235" textAnchor="middle" fill="currentColor" fontSize="10">
            VARANDA GOURMET
          </text>
        </>
      )}
      {id === "b" && (
        <>
          <line x1="160" y1="20" x2="160" y2="300" {...common} />
          <line x1="160" y1="180" x2="380" y2="180" {...common} />
          <rect x="40" y="40" width="100" height="240" {...common} />
          <rect x="180" y="40" width="180" height="120" {...common} />
          <rect x="180" y="200" width="180" height="80" {...common} />
          <text x="90" y="160" textAnchor="middle" fill="currentColor" fontSize="10">
            3 SUÍTES
          </text>
          <text x="270" y="105" textAnchor="middle" fill="currentColor" fontSize="11">
            ESTAR / JANTAR / GOURMET
          </text>
          <text x="270" y="245" textAnchor="middle" fill="currentColor" fontSize="10">
            COZINHA + ADEGA
          </text>
        </>
      )}
      {id === "c" && (
        <>
          <line x1="20" y1="160" x2="380" y2="160" {...common} />
          <line x1="200" y1="20" x2="200" y2="160" {...common} />
          <line x1="140" y1="160" x2="140" y2="300" {...common} />
          <line x1="260" y1="160" x2="260" y2="300" {...common} />
          <rect x="40" y="40" width="140" height="100" {...common} />
          <rect x="220" y="40" width="140" height="100" {...common} />
          <text x="110" y="95" textAnchor="middle" fill="currentColor" fontSize="10">
            SUÍTE MASTER
          </text>
          <text x="290" y="95" textAnchor="middle" fill="currentColor" fontSize="10">
            SUÍTE 02
          </text>
          <text x="80" y="235" textAnchor="middle" fill="currentColor" fontSize="10">
            S. 03
          </text>
          <text x="200" y="235" textAnchor="middle" fill="currentColor" fontSize="11">
            ESTAR / GOURMET
          </text>
          <text x="320" y="235" textAnchor="middle" fill="currentColor" fontSize="10">
            S. 04
          </text>
        </>
      )}
    </svg>
  );
}

export function FloorPlans() {
  const [active, setActive] = useState(plans[0].id);
  const plan = plans.find((p) => p.id === active)!;

  return (
    <section id="plantas" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.45em] text-forest/60">Plantas</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest mt-5 leading-[1.05] text-balance">
            Três opções de planta. Uma só assinatura.
          </h2>
          <div className="gold-rule w-24 my-8" />
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {plans.map((p) => {
            const isActive = p.id === active;
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`px-6 py-3 text-xs uppercase tracking-[0.3em] border transition-colors ${
                  isActive
                    ? "bg-forest text-champagne-light border-forest"
                    : "bg-transparent text-forest border-forest/30 hover:border-forest"
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-7 surface-champagne p-8 sm:p-12 elegant-shadow">
            <div className="aspect-[4/3] w-full">
              <PlanIllustration id={plan.id} />
            </div>
            <p className="mt-6 text-center text-[10px] uppercase tracking-[0.3em] text-forest/60">
              Ilustração esquemática · Consulte planta técnica oficial
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-forest/60">
              {plan.label}
            </p>
            <h3 className="font-serif text-4xl text-forest mt-2">{plan.area}</h3>
            <p className="mt-4 text-charcoal/80 text-lg italic">{plan.highlight}</p>
            <div className="gold-rule w-16 my-7" />
            <ul className="divide-y divide-forest/10">
              {plan.rooms.map((r) => (
                <li
                  key={r.name}
                  className="flex items-baseline justify-between py-3 text-sm"
                >
                  <span className="text-forest">{r.name}</span>
                  <span className="text-charcoal/60 font-mono text-xs tracking-wider">
                    {r.area}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              className="mt-9 inline-block bg-forest text-champagne-light px-7 py-4 text-xs uppercase tracking-[0.3em] hover:bg-forest-deep transition-colors"
            >
              Solicitar planta completa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
