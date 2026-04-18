import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#empreendimento", label: "O Empreendimento" },
  { href: "#lazer", label: "Lazer" },
  { href: "#plantas", label: "Plantas" },
  { href: "#localizacao", label: "Localização" },
  { href: "#construtora", label: "Construtora" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--forest-deep)]/90 backdrop-blur-md py-3 border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Logo tone="light" />
        <nav className="hidden lg:flex items-center gap-9 text-sm text-champagne-light/85">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-champagne transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 border border-champagne/40 text-champagne-light px-5 py-2.5 text-xs uppercase tracking-[0.25em] hover:bg-champagne hover:text-forest transition-colors"
        >
          Reserve sua unidade
        </a>
      </div>
    </header>
  );
}
