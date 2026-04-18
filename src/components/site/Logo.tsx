type Props = { className?: string; tone?: "light" | "dark" };

export function Logo({ className = "", tone = "light" }: Props) {
  const stroke = tone === "light" ? "var(--champagne-light)" : "var(--forest)";
  const text = tone === "light" ? "text-champagne-light" : "text-forest";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden>
        <circle cx="20" cy="20" r="18.5" stroke={stroke} strokeWidth="1" />
        <path
          d="M14 12h7.5c2.5 0 4 1.4 4 3.5 0 1.6-.9 2.7-2.3 3.2 1.7.4 2.8 1.7 2.8 3.6 0 2.4-1.7 3.7-4.5 3.7H14V12zm2.5 6h4.6c1.4 0 2.2-.7 2.2-1.9 0-1.1-.8-1.8-2.2-1.8h-4.6V18zm0 6.1h5c1.5 0 2.4-.8 2.4-2 0-1.3-.9-2.1-2.4-2.1h-5v4.1z"
          fill={stroke}
        />
      </svg>
      <div className={`leading-tight ${text}`}>
        <div className="font-serif text-lg tracking-wide">Belvedere Hill</div>
        <div className="text-[10px] tracking-[0.35em] uppercase opacity-80">Residence</div>
      </div>
    </div>
  );
}
