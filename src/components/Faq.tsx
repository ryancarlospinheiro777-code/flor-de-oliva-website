import { useState } from "react";
import Reveal from "./Reveal";
import { faqs } from "../data/menu";
import { cn } from "../utils/cn";

export default function Faq() {
  const [aberta, setAberta] = useState<number>(0);

  return (
    <section id="perguntas" className="bg-olive-900 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <p className="text-[11px] font-bold tracking-[0.4em] text-gold-300 uppercase">Dúvidas</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-cream-50 sm:text-5xl">
            Perguntas frequentes
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const open = aberta === i;
            return (
              <Reveal key={faq.pergunta} delay={i * 90}>
                <div
                  className={cn(
                    "border transition-colors duration-300",
                    open ? "border-gold-400/50 bg-olive-950/70" : "border-cream-100/12 bg-olive-950/40",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setAberta(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-xl font-semibold text-cream-100 sm:text-[22px]">
                      {faq.pergunta}
                    </span>
                    <span
                      className={cn(
                        "relative h-4 w-4 shrink-0 text-gold-300 transition-transform duration-500",
                        open && "rotate-45",
                      )}
                      aria-hidden="true"
                    >
                      <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
                      <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
                    </span>
                  </button>
                  <div className={cn("acc-panel", open && "open")}>
                    <div>
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-cream-300/85">{faq.resposta}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
