export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5571999999999?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Belvedere%20Hill%20Residence."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed z-50 bottom-6 right-6 h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[oklch(0.65_0.18_145)] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform animate-pulse-soft"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" aria-hidden>
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1s-.8 1-1 1.2c-.2.2-.4.2-.7.1-1-.4-1.9-1-2.7-1.9-.7-.7-1.2-1.5-1.7-2.4-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.8L2 22l5.4-1.3c1.4.7 3 1.1 4.6 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2" />
      </svg>
    </a>
  );
}
