import heroImg from "@/assets/hero-tower.jpg";
import { LeadForm } from "./LeadForm";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Belvedere Hill Residence — torre residencial de luxo no Caminho das Árvores, Salvador"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-20 lg:pt-48 lg:pb-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 text-champagne-light animate-fade-up">
          <p className="text-[11px] tracking-[0.45em] uppercase text-champagne/80 mb-6">
            Alameda das Catabas · Caminho das Árvores · Salvador
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance">
            A vida a seu <em className="text-champagne italic font-light">Bel-Prazer</em>
            <br />
            no Caminho das Árvores.
          </h1>
          <div className="gold-rule w-40 my-8" />
          <h2 className="font-sans text-base sm:text-lg tracking-[0.2em] uppercase text-champagne-light/90">
            4 Suítes · 210m² · Gabinete
          </h2>
          <p className="mt-6 max-w-xl text-champagne-light/80 text-base sm:text-lg leading-relaxed">
            Torre única, nascente total, dois apartamentos por andar.
            Um endereço pensado para quem entende que conforto, privacidade
            e localização não se negociam.
          </p>
        </div>

        <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <LeadForm />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-champagne-light/70 text-[10px] tracking-[0.4em] uppercase">
        Role para descobrir
      </div>
    </section>
  );
}
