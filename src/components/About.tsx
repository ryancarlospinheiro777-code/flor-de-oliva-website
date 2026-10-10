import Reveal from "./Reveal";
import { IconCheck } from "./Icons";

const destaques = [
  "Marmitas individuais ou em planos semanais e mensais",
  "Preferências e restrições a combinar na DM do Instagram",
  "Entregas por app (Uber e 99) para toda a região de Mauá",
];

const numeros = [
  { valor: "5", rotulo: "preparos no cardápio" },
  { valor: "6", rotulo: "dias de marmita por semana" },
  { valor: "2", rotulo: "formatos de plano: semanal e mensal" },
];

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        {/* imagem */}
        <Reveal>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -top-4 -left-4 h-full w-full border border-gold-400/40" aria-hidden="true" />
            <div className="relative overflow-hidden border border-cream-100/15">
              <img
                src="/images/tabela-oliva.jpg"
                alt="Mesa com ingredientes frescos e azeite de oliva"
                className="img-breathe h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-950/50 via-transparent to-transparent" />
            </div>
            <div className="absolute -right-4 -bottom-6 bg-gold-300 px-5 py-3 text-olive-950 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase">Acabamos de chegar</p>
              <p className="font-display text-xl leading-none font-semibold tracking-[0.1em] uppercase">
                Nova em Mauá
              </p>
            </div>
          </div>
        </Reveal>

        {/* texto */}
        <div>
          <Reveal>
            <p className="text-[11px] font-bold tracking-[0.4em] text-gold-300 uppercase">Sobre nós</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.08] font-medium text-cream-50 sm:text-5xl">
              Uma novidade em Mauá para <em className="italic text-gold-300">comer bem</em> todos os dias
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-base leading-relaxed text-cream-200/85 sm:text-lg">
              A Flor de Oliva é uma marmitaria nova, nascida para acompanhar a rotina de quem trabalha e
              quer comer de verdade: preparos saudáveis, legumes frescos, arroz soltinho e carinho em
              cada marmita — de segunda a sexta, das 11h às 15h.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <ul className="mt-8 space-y-4">
              {destaques.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-cream-200/90">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-gold-400/50 text-gold-300">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 grid grid-cols-3 divide-x divide-cream-100/10 border-y border-cream-100/10">
              {numeros.map((n) => (
                <div key={n.rotulo} className="px-3 py-5 text-center sm:px-5">
                  <p className="font-display text-4xl font-medium text-gold-300">{n.valor}</p>
                  <p className="mt-1 text-[10px] leading-snug font-semibold tracking-[0.12em] text-cream-300/80 uppercase">
                    {n.rotulo}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
