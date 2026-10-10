export type Marmita = {
  nome: string;
  desc: string;
  preco: number;
  img: string;
};

export const marmitas: Marmita[] = [
  {
    nome: "Macarrão com legumes",
    desc: "Macarrão paratamol com carne moída de patinho, acompanhado de tomate-cereja, chuchu e batata-doce.",
    preco: 29.9,
    img: "/images/macarrao-legumes.jpg",
  },
  {
    nome: "Patinho ao creme de mandioquinha",
    desc: "Patinho desfiado, acompanhado de arroz branco soltinho e cremoso purê de mandioquinha.",
    preco: 29.9,
    img: "/images/patininho-mandioquinha.jpg",
  },
  {
    nome: "Carne moída com legumes",
    desc: "Carne moída de patinho, acompanhada de arroz branco soltinho e uma seleção de legumes frescos: tomate-cereja, chuchu e batata-doce.",
    preco: 29.9,
    img: "/images/carne-moida-legumes.jpg",
  },
  {
    nome: "Frango grelhado com legumes",
    desc: "Frango grelhado, acompanhado de arroz branco soltinho e uma seleção de legumes frescos: tomate-cereja, chuchu e batata-doce.",
    preco: 24.9,
    img: "/images/frango-grelhado-legumes.jpg",
  },
  {
    nome: "Frango cremoso com brócolis",
    desc: "Peito de frango em cubos, brócolis e batata ao molho cremoso, acompanhado de arroz branco soltinho.",
    preco: 23.9,
    img: "/images/frango-brocolis.jpg",
  },
];

export type Bebida = { nome: string; preco: number };

export const bebidas: Bebida[] = [
  { nome: "Água 500 ml", preco: 3.5 },
  { nome: "Coca zero lata 350 ml", preco: 6.0 },
  { nome: "Guaraná zero lata 350 ml", preco: 5.5 },
  { nome: "Sprite zero lata 350 ml", preco: 5.5 },
];

export type Plano = {
  tipo: "Semanal" | "Mensal";
  marmitas: string;
  porDia: string;
  preco: string;
};

export const planos: Plano[] = [
  {
    tipo: "Semanal",
    marmitas: "6 marmitas",
    porDia: "1 marmita por dia",
    preco: "119,90",
  },
  {
    tipo: "Semanal",
    marmitas: "12 marmitas",
    porDia: "2 marmitas por dia",
    preco: "219,90",
  },
  {
    tipo: "Mensal",
    marmitas: "24 marmitas",
    porDia: "1 marmita por dia",
    preco: "650,00",
  },
  {
    tipo: "Mensal",
    marmitas: "48 marmitas",
    porDia: "2 marmitas por dia",
    preco: "1.100,00",
  },
];

export const entregaItens = [
  {
    icone: "map",
    titulo: "Toda a região de Mauá",
    desc: "Entregamos para toda a região de Mauá.",
  },
  {
    icone: "app",
    titulo: "Entregas por app",
    desc: "Entregas feitas por app: Uber e 99.",
  },
  {
    icone: "tag",
    titulo: "Marmitas individuais",
    desc: "O valor da entrega não é incluso para marmitas individuais.",
  },
  {
    icone: "gift",
    titulo: "Planos",
    desc: "Entrega grátis somente para planos.",
  },
] as const;

export const faqs = [
  {
    pergunta: "Vocês entregam em qual região?",
    resposta:
      "Entregamos para toda a região de Mauá, com entregas feitas por app (Uber e 99). Para marmitas individuais, o valor da entrega não está incluso no preço — já nos planos a entrega é grátis.",
  },
  {
    pergunta: "Como funciona o pagamento?",
    resposta:
      "O pagamento é exclusivamente via Pix e os envios são feitos mediante comprovante.",
  },
  {
    pergunta: "Como funcionam os planos?",
    resposta:
      "Os planos semanais (6 e 12 marmitas) e mensais (24 e 48 marmitas) cobrem 6 dias na semana. Para fechar um plano, basta entrar em contato pelo WhatsApp ou Instagram.",
  },
  {
    pergunta: "Aceitam preferências e restrições alimentares?",
    resposta:
      "Sim! Preferências e restrições são combinadas na DM do nosso Instagram.",
  },
  {
    pergunta: "A Flor de Oliva é nova?",
    resposta:
      "Sim, acabamos de chegar a Mauá! Servimos marmitas saudáveis de segunda a sexta-feira, das 11h às 15h.",
  },
];
