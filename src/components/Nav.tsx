import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import Logo from "./Logo";
import { IconWhatsApp } from "./Icons";
import { WA_DEFAULT_MESSAGE, waLink } from "../lib/constants";

const links = [
  { label: "Cardápio", href: "#cardapio" },
  { label: "Planos", href: "#planos" },
  { label: "Entrega", href: "#entrega" },
  { label: "Funcionamento", href: "#funcionamento" },
  { label: "Contato", href: "#contato" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* faixa de aviso */}
      <div
        className={cn(
          "overflow-hidden bg-olive-800 text-cream-200 transition-all duration-500",
          scrolled ? "max-h-0" : "max-h-10",
        )}
      >
        <p className="mx-auto max-w-6xl px-4 py-2 text-center text-[11px] font-semibold tracking-[0.18em] uppercase sm:text-xs">
          Novidade em Mauá — marmitas fit de segunda a sexta, das 11h às 15h
        </p>
      </div>

      {/* barra principal */}
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "border-b border-cream-100/10 bg-olive-950/90 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#topo" className="group flex items-center gap-3 text-cream-100">
            <span className="text-gold-300 transition-transform duration-500 group-hover:rotate-6">
              <Logo size={34} strokeWidth={2} />
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

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-[13px] font-semibold tracking-[0.14em] text-cream-200/85 uppercase transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-300 after:transition-all after:duration-300 hover:text-cream-50 hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={waLink(WA_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 border border-cream-100/25 bg-cream-100 px-4 py-2 text-[12px] font-bold tracking-[0.14em] text-olive-950 uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-[0_12px_28px_rgba(214,191,136,0.25)] sm:inline-flex"
            >
              <IconWhatsApp className="h-4 w-4" />
              Pedir agora
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-cream-100/25 text-cream-100 lg:hidden"
            >
              <span
                className={cn(
                  "h-px w-5 bg-current transition-transform duration-300",
                  open && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-5 bg-current transition-transform duration-300",
                  open && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </button>
          </div>
        </nav>

        {/* menu mobile */}
        <div
          className={cn(
            "grid overflow-hidden border-cream-100/10 bg-olive-950/95 backdrop-blur-md transition-all duration-500 lg:hidden",
            open ? "grid-rows-[1fr] border-b" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <ul className="space-y-1 px-6 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-cream-100/10 py-3 font-display text-xl text-cream-100 transition-colors hover:text-gold-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href={waLink(WA_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-cream-100 px-5 py-2.5 text-[12px] font-bold tracking-[0.14em] text-olive-950 uppercase"
                >
                  <IconWhatsApp className="h-4 w-4" />
                  Pedir pelo WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
