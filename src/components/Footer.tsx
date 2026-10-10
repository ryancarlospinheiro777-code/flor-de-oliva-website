import Reveal from "./Reveal";
import Logo from "./Logo";
import { IconWhatsApp, IconInstagram, Ornament } from "./Icons";
import {
  waLink,
  WA_DEFAULT_MESSAGE,
  WHATSAPP_DISPLAY,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "../lib/constants";

export function CtaFinal() {
  return (
    <section id="contato" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 75% 60% at 50% 50%, rgba(93,116,64,0.22) 0%, rgba(93,116,64,0) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <span className="mx-auto block w-fit text-cream-50">
            <Logo size={92} strokeWidth={1.7} />
          </span>
          <h2 className="mt-6 font-display text-4xl leading-tight font-medium text-cream-50 sm:text-6xl">
            Bateu a fome?
          </h2>
          <Ornament className="mt-6 text-gold-300" />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream-200/85 sm:text-lg">
            Chama a gente no WhatsApp ou no Instagram, escolha a sua marmita (ou o seu plano) e
            combinamos a entrega. Pagamento via Pix, com envio mediante comprovante.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={waLink(WA_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2.5 bg-cream-100 px-8 py-4 text-[13px] font-bold tracking-[0.16em] text-olive-950 uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-[0_16px_36px_rgba(214,191,136,0.3)] sm:w-auto"
            >
              <IconWhatsApp className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              Pedir no WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 border border-cream-100/30 px-8 py-4 text-[13px] font-bold tracking-[0.16em] text-cream-100 uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:text-gold-300 sm:w-auto"
            >
              <IconInstagram className="h-5 w-5" />
              Seguir no Instagram
            </a>
          </div>
          <p className="mt-6 text-sm text-cream-300/70">
            {WHATSAPP_DISPLAY} · {INSTAGRAM_HANDLE}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-cream-100/10 bg-olive-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <a href="#topo" className="flex items-center gap-3 text-cream-100">
            <span className="text-gold-300">
              <Logo size={40} strokeWidth={1.8} />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold tracking-[0.22em] uppercase">
                Flor de Oliva
              </span>
              <span className="block text-[9px] font-semibold tracking-[0.42em] text-cream-300/80 uppercase">
                Comidas saudáveis
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-300/75">
            Marmitaria fit nova em Mauá · SP. Comida saudável de verdade, feita para acompanhar a sua
            semana.
          </p>
        </div>

        <div>
          <h3 className="text-[11px] font-bold tracking-[0.35em] text-gold-300 uppercase">Funcionamento</h3>
          <ul className="mt-5 space-y-2.5 text-sm text-cream-300/80">
            <li>De segunda a sexta-feira</li>
            <li>Marmitas unitárias: das 11h às 15h</li>
            <li>Fechamentos de planos: entrar em contato</li>
            <li>Pagamento exclusivamente via Pix</li>
            <li>Entrega para toda a região de Mauá</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-bold tracking-[0.35em] text-gold-300 uppercase">Atendimento</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={waLink(WA_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 text-cream-200/85 transition-colors hover:text-gold-300"
              >
                <span className="flex h-9 w-9 items-center justify-center border border-cream-100/20 transition-colors group-hover:border-gold-300">
                  <IconWhatsApp className="h-4 w-4" />
                </span>
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 text-cream-200/85 transition-colors hover:text-gold-300"
              >
                <span className="flex h-9 w-9 items-center justify-center border border-cream-100/20 transition-colors group-hover:border-gold-300">
                  <IconInstagram className="h-4 w-4" />
                </span>
                {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li className="pt-1 text-xs text-cream-300/60">
              Entregas feitas por app (Uber e 99) · frete grátis nos planos
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-center text-xs text-cream-300/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Flor de Oliva — todos os direitos reservados.</p>
          <p className="tracking-[0.14em]">CNPJ 69.413.033/0001-60</p>
          <p className="tracking-[0.14em] uppercase">Mauá · São Paulo</p>
        </div>
      </div>
    </footer>
  );
}
