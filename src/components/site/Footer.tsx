import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="contato" className="surface-forest pt-24 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-14 pb-16 border-b border-champagne/15">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-6 text-champagne-light/75 text-base leading-relaxed max-w-md">
              A vida a seu Bel-Prazer no Caminho das Árvores. Atendimento
              exclusivo para investidores e moradores de alto padrão.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.4em] text-champagne/70 mb-5">
              Endereço
            </p>
            <p className="text-champagne-light/85 leading-relaxed">
              Alameda das Catabas
              <br />
              Caminho das Árvores
              <br />
              Salvador · Bahia
            </p>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.4em] text-champagne/70 mb-5">
              Atendimento
            </p>
            <a
              href="https://wa.me/5571999999999"
              className="block text-champagne-light hover:text-champagne transition-colors text-lg"
            >
              +55 (71) 99999-9999
            </a>
            <a
              href="mailto:reservas@belvederehill.com.br"
              className="block text-champagne-light/85 hover:text-champagne transition-colors mt-2"
            >
              reservas@belvederehill.com.br
            </a>
            <p className="mt-5 text-[11px] uppercase tracking-[0.3em] text-champagne/70">
              CRECI/J 1068 · Tavares Júnior
            </p>
          </div>
        </div>

        <div className="pt-10 grid md:grid-cols-2 gap-6 text-[11px] text-champagne-light/55 leading-relaxed">
          <p>
            © {new Date().getFullYear()} Belvedere Hill Residence · Incorporação
            Azinunes Construções & Incorporações Ltda.
          </p>
          <p className="md:text-right">
            Em conformidade com a Lei nº 4.591/64. Imagens, perspectivas,
            móveis, vegetação e paisagismo têm caráter meramente ilustrativo.
            Projeto técnico em estudo. RT: Pedro Neves Azi · CREA 40975.
          </p>
        </div>
      </div>
    </footer>
  );
}
