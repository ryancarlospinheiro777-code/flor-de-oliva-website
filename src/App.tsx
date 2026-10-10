import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
import Plans from "./components/Plans";
import { Entrega, Funcionamento } from "./components/InfoSections";
import Faq from "./components/Faq";
import Footer, { CtaFinal } from "./components/Footer";
import { IconWhatsApp } from "./components/Icons";
import { waLink, WA_DEFAULT_MESSAGE } from "./lib/constants";

function BotaoWhatsAppFlutuante() {
  return (
    <a
      href={waLink(WA_DEFAULT_MESSAGE)}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed right-5 bottom-5 z-40"
    >
      <span className="pulse-ring absolute inset-0 rounded-full bg-[#25d366]/60" aria-hidden="true" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-olive-950 shadow-[0_14px_30px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
        <IconWhatsApp className="h-7 w-7" />
      </span>
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-olive-950 font-body text-cream-100">
      <div className="noise-overlay" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <MenuSection />
        <Plans />
        <Entrega />
        <Funcionamento />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <BotaoWhatsAppFlutuante />
    </div>
  );
}
