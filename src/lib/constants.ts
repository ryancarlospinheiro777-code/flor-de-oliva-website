export const INSTAGRAM_URL = "https://www.instagram.com/flordeolivaa_/";
export const WHATSAPP_NUMBER = "5511989515353";
export const WHATSAPP_DISPLAY = "(11) 98951-5353";
export const INSTAGRAM_HANDLE = "@flordeolivaa_";

export const WA_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Flor de Oliva e gostaria de fazer um pedido.";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function precoBR(valor: number): string {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}
