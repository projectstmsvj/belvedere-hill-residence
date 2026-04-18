import { useState } from "react";
import { toast } from "sonner";

export function LeadForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Recebemos seu contato. Em breve nossa consultoria responderá.");
    }, 700);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-champagne-light/95 backdrop-blur-sm border border-champagne/60 elegant-shadow p-8 sm:p-10"
    >
      <p className="text-[10px] uppercase tracking-[0.4em] text-forest/70">
        Atendimento exclusivo
      </p>
      <h3 className="font-serif text-2xl sm:text-3xl text-forest mt-2">
        Receba o material completo
      </h3>
      <div className="gold-rule w-16 my-5" />
      <div className="space-y-4">
        <Field name="name" label="Nome" required />
        <Field name="email" label="E-mail" type="email" required />
        <Field name="phone" label="Telefone / WhatsApp" type="tel" required />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-7 w-full bg-forest text-champagne-light py-4 text-xs uppercase tracking-[0.3em] hover:bg-forest-deep transition-colors disabled:opacity-60"
      >
        {loading ? "Enviando..." : "Quero conhecer"}
      </button>
      <p className="mt-4 text-[11px] text-charcoal/60 leading-relaxed">
        Ao enviar, você autoriza nosso contato. Tavares Júnior · CRECI/J 1068.
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.3em] text-forest/70">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-transparent border-b border-forest/30 py-2 text-forest placeholder:text-forest/30 focus:outline-none focus:border-forest transition-colors"
      />
    </label>
  );
}
