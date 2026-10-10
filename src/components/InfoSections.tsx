import Reveal from "./Reveal";
import { IconMap, IconApp, IconTag, IconGift, IconClock, IconPix, IconReceipt, CornerFrame, Ornament } from "./Icons";
import { entregaItens } from "../data/menu";

const icones = {
  map: IconMap,
  app: IconApp,
  tag: IconTag,
  gift: IconGift,
} as const;

export function Entrega() {
  return (
    <section id="entrega" className="bg-olive-900 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold tracking-[0.4em] text-gold-300 uppercase">Entrega</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-cream-50 sm:text-5xl">
            A marmita chega até você
          </h2>
          <Ornament className="mt-5 text-gold-300" />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {entregaItens.map((item, i) => {
            const Icone = icones[item.icone];
            return (
              <Reveal key={item.titulo} delay={i * 110}>
                <div className="group h-full border border-cream-100/12 bg-olive-950/50 p-7 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/50">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center border border-gold-400/40 text-gold-300 transition-all duration-500 group-hover:rotate-6 group-hover:bg-gold-300 group-hover:text-olive-950">
                    <Icone className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-cream-50">{item.titulo}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cream-300/80">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const linhasFuncionamento = [
  { rotulo: "Funcionamento", valor: "De segunda a sexta-feira" },
  { rotulo: "Marmitas unitárias", valor: "Das 11h às 15h" },
  { rotulo: "Fechamentos de planos", valor: "Entrar em contato" },
];

const linhasPagamento = [
  { rotulo: "Pagamentos", valor: "Exclusivamente via Pix" },
  { rotulo: "Envios", valor: "Mediante comprovante" },
];

export function Funcionamento() {
  return (
    <section id="funcionamento" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <p className="text-[11px] font-bold tracking-[0.4em] text-gold-300 uppercase">Funcionamento</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-cream-50 sm:text-5xl">
            Informações de funcionamento
          </h2>
          <Ornament className="mt-5 text-gold-300" />
        </Reveal>

        {/* painel com moldura ornamentada, como o card do menu */}
        <Reveal delay={150}>
          <div className="relative mt-14 border border-cream-100/20 p-2 sm:p-3">
            <CornerFrame className="absolute -top-px -left-px h-9 w-9 text-gold-300/80 sm:h-11 sm:w-11" />
            <CornerFrame className="absolute -top-px -right-px h-9 w-9 rotate-90 text-gold-300/80 sm:h-11 sm:w-11" />
            <CornerFrame className="absolute -right-px -bottom-px h-9 w-9 rotate-180 text-gold-300/80 sm:h-11 sm:w-11" />
            <CornerFrame className="absolute -bottom-px -left-px h-9 w-9 -rotate-90 text-gold-300/80 sm:h-11 sm:w-11" />

            <div className="grid gap-px bg-cream-100/10 sm:grid-cols-2">
              <div className="bg-olive-900/80 p-8 sm:p-10">
                <div className="flex items-center gap-3 text-gold-300">
                  <IconClock className="h-7 w-7" />
                  <h3 className="font-display text-2xl font-semibold tracking-[0.1em] text-cream-50 uppercase">
                    Horários
                  </h3>
                </div>
                <ul className="mt-7 space-y-5">
                  {linhasFuncionamento.map((l) => (
                    <li key={l.rotulo} className="border-b border-cream-100/10 pb-5 last:border-0 last:pb-0">
                      <p className="text-[10px] font-bold tracking-[0.3em] text-cream-300/70 uppercase">
                        {l.rotulo}
                      </p>
                      <p className="mt-1.5 font-display text-2xl text-cream-100 italic">{l.valor}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-olive-900/80 p-8 sm:p-10">
                <div className="flex items-center gap-3 text-gold-300">
                  <IconPix className="h-7 w-7" />
                  <h3 className="font-display text-2xl font-semibold tracking-[0.1em] text-cream-50 uppercase">
                    Pagamento
                  </h3>
                </div>
                <ul className="mt-7 space-y-5">
                  {linhasPagamento.map((l) => (
                    <li key={l.rotulo} className="border-b border-cream-100/10 pb-5 last:border-0 last:pb-0">
                      <p className="text-[10px] font-bold tracking-[0.3em] text-cream-300/70 uppercase">
                        {l.rotulo}
                      </p>
                      <p className="mt-1.5 font-display text-2xl text-cream-100 italic">{l.valor}</p>
                    </li>
                  ))}
                  <li className="mt-2 flex items-start gap-3 border border-gold-400/30 bg-olive-950/60 p-4 text-sm text-cream-200/85">
                    <IconReceipt className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                    Envie o comprovante do Pix junto com o seu pedido pelo WhatsApp.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
