const itens = [
  "Comidas saudáveis",
  "Novidade em Mauá",
  "Entrega em toda a região",
  "Planos semanais e mensais",
  "Pagamento via Pix",
  "Segunda a sexta · 11h às 15h",
];

function Faixa({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
      {itens.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-6 font-display text-lg tracking-[0.28em] whitespace-nowrap text-cream-200/80 uppercase sm:px-8 sm:text-xl">
            {item}
          </span>
          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 shrink-0 fill-gold-400" aria-hidden="true">
            <path d="M6 0l1.9 4.1L12 6 7.9 7.9 6 12 4.1 7.9 0 6l4.1-1.9z" />
          </svg>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee overflow-hidden border-y border-cream-100/10 bg-olive-900 py-4">
      <div className="marquee-track flex w-max">
        <Faixa />
        <Faixa ariaHidden />
      </div>
    </div>
  );
}
