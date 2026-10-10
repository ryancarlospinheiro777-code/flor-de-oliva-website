import type { CSSProperties } from "react";
import Logo from "./Logo";
import { IconWhatsApp, IconInstagram, OliveBranch } from "./Icons";
import { WA_DEFAULT_MESSAGE, waLink, INSTAGRAM_URL } from "../lib/constants";

const d = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

const chips = [
  "Seg–Sex · 11h às 15h",
  "Entrega em todo Mauá",
  "Planos semanais e mensais",
  "Pagamento via Pix",
];

export default function Hero() {
  return (
    <section id="topo" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32 pb-24">
      {/* fundo em camadas */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 65% at 50% 32%, #33431f 0%, #1d2712 48%, #141b0c 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle 340px at 50% 30%, rgba(214,191,136,0.14) 0%, rgba(214,191,136,0) 70%)",
        }}
      />
      <OliveBranch className="absolute -top-6 -left-10 w-56 rotate-12 text-sage-400/25 sm:w-72" />
      <OliveBranch className="absolute -right-12 bottom-24 w-56 -scale-x-100 -rotate-6 text-sage-400/20 sm:w-72" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-olive-950 to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <div className="hero-in inline-flex items-center gap-3 border border-gold-400/40 px-5 py-2" style={d(0.1)}>
          <span className="h-1 w-1 rotate-45 bg-gold-300" />
          <p className="text-[10px] font-bold tracking-[0.4em] text-gold-300 uppercase sm:text-xs">
            Novidade em Mauá · SP
          </p>
          <span className="h-1 w-1 rotate-45 bg-gold-300" />
        </div>

        <div className="hero-in mx-auto mt-6 w-fit text-cream-50" style={d(0.3)}>
          <Logo size={128} animate strokeWidth={1.4} className="sm:h-40 sm:w-40" />
        </div>

        <h1
          className="hero-in mt-4 font-display text-[42px] leading-none font-medium tracking-[0.16em] text-cream-50 uppercase sm:text-7xl"
          style={d(0.55)}
        >
          Flor de Oliva
        </h1>

        <div className="hero-in mt-5 text-gold-300" style={d(0.85)}>
          <svg viewBox="0 0 12 12" className="mx-auto h-3 w-3 fill-current" aria-hidden="true">
            <path d="M6 0l1.9 4.1L12 6 7.9 7.9 6 12 4.1 7.9 0 6l4.1-1.9z" />
          </svg>
        </div>
        <p
          className="hero-in mt-3 text-[11px] font-bold tracking-[0.55em] text-cream-300 uppercase sm:text-sm"
          style={d(0.95)}
        >
          Comidas saudáveis
        </p>

        <p
          className="hero-in mx-auto mt-7 max-w-xl text-base leading-relaxed text-cream-200/85 sm:text-lg"
          style={d(1.1)}
        >
          Marmitas fit com ingredientes frescos, servidas de segunda a sexta. Individual ou no plano que
          encaixa na sua semana — com entrega para toda a região de Mauá.
        </p>

        <div className="hero-in mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row" style={d(1.3)}>
          <a
            href={waLink(WA_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2.5 bg-cream-100 px-8 py-4 text-[13px] font-bold tracking-[0.16em] text-olive-950 uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-[0_16px_36px_rgba(214,191,136,0.3)] sm:w-auto"
          >
            <IconWhatsApp className="h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110" />
            Pedir pelo WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2.5 border border-cream-100/30 px-8 py-4 text-[13px] font-bold tracking-[0.16em] text-cream-100 uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:text-gold-300 sm:w-auto"
          >
            <IconInstagram className="h-4.5 w-4.5" />
            @flordeolivaa_
          </a>
        </div>

        <ul className="hero-in mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] font-semibold tracking-[0.14em] text-cream-300/75 uppercase sm:text-xs" style={d(1.5)}>
          {chips.map((c, i) => (
            <li key={c} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rotate-45 bg-gold-400/60" aria-hidden="true" />}
              {c}
            </li>
          ))}
        </ul>
      </div>

      {/* indicador de rolagem */}
      <a
        href="#sobre"
        className="hero-in absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-cream-300/60 transition-colors hover:text-gold-300"
        style={d(1.9)}
        aria-label="Rolar para a próxima seção"
      >
        <span className="text-[10px] font-semibold tracking-[0.35em] uppercase">Role para conhecer</span>
        <span className="animate-floaty block h-8 w-px bg-gradient-to-b from-gold-300/80 to-transparent" />
      </a>
    </section>
  );
}
