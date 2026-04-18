import tennis from "@/assets/amenity-tennis.jpg";
import fitness from "@/assets/amenity-fitness.jpg";
import gourmet from "@/assets/amenity-gourmet.jpg";
import pool from "@/assets/amenity-pool.jpg";

const items = [
  {
    title: "Quadra de tênis oficial",
    desc: "Dimensões oficiais, drenagem profissional e iluminação noturna.",
    img: tennis,
    tag: "Esportes",
  },
  {
    title: "Quadra de squash",
    desc: "Espaço dedicado para a prática regular, com piso técnico.",
    icon: "squash",
    tag: "Esportes",
  },
  {
    title: "Fitness Center · 70m²",
    desc: "Equipamentos premium, fight club e espaço yoga dentro do mesmo ambiente.",
    img: fitness,
    tag: "Bem-estar",
  },
  {
    title: "Espaço Gourmet",
    desc: "Ambiente fino para receber, integrado à varanda e às áreas de convivência.",
    img: gourmet,
    tag: "Lazer",
  },
  {
    title: "Piscina com queda d'água",
    desc: "Deck molhado, piscina infantil e sauna compõem o complexo aquático.",
    img: pool,
    tag: "Lazer",
  },
  {
    title: "Espaço Pet · Banho & Tosa",
    desc: "Ambiente próprio para o seu pet, com área para petmóvel e banho.",
    icon: "pet",
    tag: "Comodidade",
  },
  {
    title: "Estrutura para carros elétricos",
    desc: "Pontos de carregamento, lava-jato e bicicletário no subsolo.",
    icon: "ev",
    tag: "Comodidade",
  },
  {
    title: "Quadra poliesportiva",
    desc: "Para várias modalidades, com playground integrado ao espaço kids.",
    icon: "court",
    tag: "Esportes",
  },
];

function Icon({ name }: { name?: string }) {
  const common = "w-10 h-10 stroke-[1.2]";
  switch (name) {
    case "squash":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor">
          <rect x="3" y="3" width="18" height="18" />
          <path d="M3 16h18M9 3v18" />
        </svg>
      );
    case "pet":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor">
          <circle cx="6" cy="9" r="1.6" />
          <circle cx="10" cy="6" r="1.6" />
          <circle cx="14" cy="6" r="1.6" />
          <circle cx="18" cy="9" r="1.6" />
          <path d="M8 17c0-2.5 1.8-4 4-4s4 1.5 4 4-1.8 3-4 3-4-.5-4-3z" />
        </svg>
      );
    case "ev":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor">
          <rect x="2" y="6" width="13" height="12" rx="1" />
          <path d="M15 10h3l2 2v4a2 2 0 0 1-2 2h-3" />
          <path d="M7 12l3-3-1 3h3l-3 3 1-3H7z" />
        </svg>
      );
    case "court":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor">
          <rect x="3" y="6" width="18" height="12" />
          <path d="M12 6v12M3 12h18" />
        </svg>
      );
    default:
      return null;
  }
}

export function Amenities() {
  return (
    <section id="lazer" className="py-24 sm:py-32 surface-champagne">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.45em] text-forest/60">
            Lazer & Bem-estar
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest mt-5 leading-[1.05] text-balance">
            Um ambiente fino e rico em opções de lazer.
          </h2>
          <div className="gold-rule w-24 my-8" />
          <p className="text-forest/75 text-lg leading-relaxed">
            Estrutura completa para toda a família, distribuída com a precisão
            de quem entende que viver bem é também viver com tempo livre.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <article
              key={i}
              className="bg-champagne-light border border-forest/10 lift overflow-hidden flex flex-col"
            >
              {it.img ? (
                <img
                  src={it.img}
                  alt={it.title}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />
              ) : (
                <div className="h-56 bg-forest text-champagne flex items-center justify-center">
                  <Icon name={it.icon} />
                </div>
              )}
              <div className="p-7 flex-1 flex flex-col">
                <span className="text-[9px] uppercase tracking-[0.4em] text-forest/50">
                  {it.tag}
                </span>
                <h3 className="font-serif text-2xl text-forest mt-3">{it.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mt-3 flex-1">
                  {it.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
