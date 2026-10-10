import Reveal from "./Reveal";
import { IconWhatsApp, IconInstagram, IconArrow, Ornament } from "./Icons";
import Logo from "./Logo";
import { marmitas, bebidas } from "../data/menu";
import { waLink, precoBR, INSTAGRAM_URL } from "../lib/constants";

export default function MenuSection() {
  return (
    <section id="cardapio" className="relative bg-olive-900 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(93,116,64,0.18) 0%, rgba(93,116,64,0) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold tracking-[0.4em] text-gold-300 uppercase">Marmitas</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-cream-50 sm:text-5xl">Cardápio</h2>
          <Ornament className="mt-5 text-gold-300" />
          <p className="mt-5 text-cream-200/80">
            Servimos de segunda a sexta-feira, das 11h às 15h. Escolha a sua e chame a gente no WhatsApp
            ou no Instagram.
          </p>
        </Reveal>

        {/* cards de marmitas */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {marmitas.map((item, i) => (
            <Reveal key={item.nome} delay={(i % 3) * 120}>
              <article className="group flex h-full flex-col overflow-hidden border border-cream-100/12 bg-olive-950/60 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/50 hover:shadow-[0_24px_50px_rgba(0,0,0,0.4)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.nome}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-950/70 via-transparent to-olive-950/10" />
                  <span className="absolute right-3 bottom-3 bg-olive-950/85 px-3 py-1.5 font-display text-lg font-semibold text-gold-300 backdrop-blur-sm">
                    {precoBR(item.preco)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[22px] leading-tight font-semibold text-cream-50">
                    {item.nome}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-cream-300/80">{item.desc}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-cream-100/10 pt-4">
                    <a
                      href={waLink(`Olá! Gostaria de pedir a marmita "${item.nome}" (${precoBR(item.preco)}).`)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-gold-300 uppercase transition-colors hover:text-cream-50"
                    >
                      <IconWhatsApp className="h-4 w-4" />
                      Pedir agora
                      <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Ver no Instagram"
                      className="text-cream-300/60 transition-colors hover:text-gold-300"
                    >
                      <IconInstagram className="h-4.5 w-4.5" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {/* card convite */}
          <Reveal delay={240}>
            <div className="flex h-full flex-col items-center justify-center border border-dashed border-gold-400/40 p-8 text-center">
              <span className="text-gold-300/80">
                <Logo size={72} strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-cream-50">
                Quer sugestão ou o cardápio no seu WhatsApp?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-300/80">
                Fale com a gente — preferências e restrições a combinar na DM.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink("Olá! Quero receber o cardápio da Flor de Oliva no meu WhatsApp.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-cream-100 px-5 py-2.5 text-[11px] font-bold tracking-[0.14em] text-olive-950 uppercase transition-all duration-300 hover:bg-gold-300"
                >
                  <IconWhatsApp className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-cream-100/30 px-5 py-2.5 text-[11px] font-bold tracking-[0.14em] text-cream-100 uppercase transition-all duration-300 hover:border-gold-300 hover:text-gold-300"
                >
                  <IconInstagram className="h-4 w-4" />
                  Instagram
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* bebidas */}
        <Reveal className="mt-20">
          <div className="mx-auto max-w-2xl">
            <div className="text-cream-200">
              <Ornament />
            </div>
            <h3 className="mt-4 text-center font-display text-3xl font-medium tracking-[0.12em] text-cream-50 uppercase">
              Bebidas
            </h3>
            <ul className="mt-8 space-y-4">
              {bebidas.map((b) => (
                <li key={b.nome} className="flex items-end text-[15px]">
                  <span className="text-cream-200/90">{b.nome}</span>
                  <span className="leader-dots" aria-hidden="true" />
                  <span className="font-display text-lg font-semibold text-gold-300">{precoBR(b.preco)}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
