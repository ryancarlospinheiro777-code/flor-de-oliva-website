import Reveal from "./Reveal";
import { IconWhatsApp, IconGift, Ornament } from "./Icons";
import { planos } from "../data/menu";
import { waLink, INSTAGRAM_URL } from "../lib/constants";

export default function Plans() {
  const semanais = planos.filter((p) => p.tipo === "Semanal");
  const mensais = planos.filter((p) => p.tipo === "Mensal");

  const Grupo = ({ titulo, nota, itens }: { titulo: string; nota: string; itens: typeof planos }) => (
    <div>
      <div className="flex items-center gap-4">
        <h3 className="font-display text-2xl font-semibold tracking-[0.14em] whitespace-nowrap text-cream-50 uppercase sm:text-3xl">
          Plano {titulo}
        </h3>
        <span className="h-px flex-1 bg-cream-100/15" aria-hidden="true" />
      </div>
      <div className="mt-6 space-y-5">
        {itens.map((plano, i) => (
          <Reveal key={plano.marmitas} delay={i * 130}>
            <article className="group relative border border-cream-100/15 bg-olive-900/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-[0_22px_48px_rgba(0,0,0,0.4)] sm:p-7">
              <span className="absolute top-0 right-0 bg-gold-300 px-3 py-1 text-[10px] font-bold tracking-[0.22em] text-olive-950 uppercase">
                Frete grátis
              </span>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
                    {plano.marmitas}
                  </p>
                  <p className="mt-1 text-sm text-cream-300/80">({plano.porDia})</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-3xl font-semibold text-gold-300 sm:text-4xl">
                    R$ {plano.preco}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-3 border-t border-cream-100/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-sage-300 uppercase">
                  <IconGift className="h-4.5 w-4.5" />
                  Entrega grátis incluída
                </span>
                <a
                  href={waLink(
                    `Olá! Quero fechar o plano ${plano.tipo.toLowerCase()} de ${plano.marmitas} (${plano.porDia}).`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-cream-100 px-5 py-2.5 text-[11px] font-bold tracking-[0.14em] text-olive-950 uppercase transition-all duration-300 hover:bg-gold-300"
                >
                  <IconWhatsApp className="h-4 w-4" />
                  Fechar plano
                </a>
              </div>
              <p className="mt-4 text-xs text-cream-300/60">*{nota}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );

  return (
    <section id="planos" className="relative py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 45% at 50% 100%, rgba(93,116,64,0.14) 0%, rgba(93,116,64,0) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold tracking-[0.4em] text-gold-300 uppercase">Planos</p>
          <h2 className="mt-4 font-display text-4xl leading-tight font-medium text-cream-50 sm:text-5xl">
            Planos de marmitas: preços e opções
          </h2>
          <Ornament className="mt-5 text-gold-300" />
          <p className="mt-5 text-cream-200/80">
            Feche um plano e ganhe <strong className="text-gold-300">entrega grátis</strong> para toda a
            região de Mauá. Para fechar, é só entrar em contato.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <Grupo
            titulo="Semanal"
            nota="Os planos de 6 e 12 marmitas são para 6 dias na semana."
            itens={semanais}
          />
          <Grupo
            titulo="Mensal"
            nota="Os planos de 24 e 48 marmitas são para 6 dias na semana (cobrem o mês)."
            itens={mensais}
          />
        </div>

        <Reveal delay={150}>
          <p className="mt-10 text-center text-sm text-cream-300/70">
            Preferências e restrições a combinar na DM ·{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gold-300 underline decoration-gold-400/40 underline-offset-4 transition-colors hover:text-cream-50"
            >
              @flordeolivaa_
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
