type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconMap({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 21s-6.5-5.4-6.5-10a6.5 6.5 0 1 1 13 0C18.5 15.6 12 21 12 21z" />
      <circle cx="12" cy="11" r="2.6" />
    </svg>
  );
}

export function IconApp({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.4" />
      <path d="M10.5 5.2h3" />
      <path d="m9.7 12.2 1.8 1.8 3.4-3.6" />
      <circle cx="12" cy="18" r="0.4" fill="currentColor" />
    </svg>
  );
}

export function IconTag({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M20.4 13.3 11.2 4H4.6a1.1 1.1 0 0 0-1.1 1.1v6.6l9.2 9.3a2.1 2.1 0 0 0 3 0l4.7-4.7a2.1 2.1 0 0 0 0-3z" />
      <circle cx="7.6" cy="7.2" r="1.2" />
    </svg>
  );
}

export function IconGift({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3.5" y="8" width="17" height="4" />
      <path d="M5.5 12v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8" />
      <path d="M12 8v13" />
      <path d="M12 8c-1.6-3.8-6.8-3.8-6.8-.9C5.2 9.4 9.5 9 12 8zm0 0c1.6-3.8 6.8-3.8 6.8-.9C18.8 9.4 14.5 9 12 8z" />
    </svg>
  );
}

export function IconClock({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.4V12l3.4 2" />
    </svg>
  );
}

export function IconPix({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3.4 20.6 12 12 20.6 3.4 12z" />
      <path d="m12 8.4 3.6 3.6-3.6 3.6-3.6-3.6z" />
    </svg>
  );
}

export function IconReceipt({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M6.5 3h11v18l-2.3-1.6-2.4 1.6-2.3-1.6-2.4 1.6-1.6-1.1z" />
      <path d="M9.5 8.5h5M9.5 12h5" />
    </svg>
  );
}

export function IconCheck({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={2}>
      <path d="m5 12.8 4.4 4.4L19 7.2" />
    </svg>
  );
}

export function IconArrow({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={1.8}>
      <path d="M4 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </svg>
  );
}

export function IconWhatsApp({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export function IconInstagram({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4.6" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Ramo de oliva decorativo (traço). */
export function OliveBranch({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 120 60" className={className} fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      <path d="M4 54 C 34 50, 72 38, 114 8" />
      <path d="M22 51.5 C 14 47, 10 40, 9.5 32 C 18 35, 23.5 42, 22 51.5 Z" />
      <path d="M42 46.5 C 36 41, 34 33.5, 35 25.5 C 42 30, 45 38, 42 46.5 Z" />
      <path d="M64 39.5 C 60 33, 60 25, 63 17.5 C 68 23.5, 68.5 32, 64 39.5 Z" />
      <path d="M88 29.5 C 86 22.5, 88 15, 92.5 9 C 96.5 15.5, 95.5 24, 88 29.5 Z" />
      <ellipse cx="30" cy="44" rx="2.4" ry="4" transform="rotate(-38 30 44)" />
      <ellipse cx="53" cy="39" rx="2.4" ry="4" transform="rotate(-32 53 39)" />
      <ellipse cx="78" cy="33.5" rx="2.4" ry="4" transform="rotate(-26 78 33.5)" />
    </svg>
  );
}

/** Ornamento: linha — losango — linha (como no cardápio da marca). */
export function Ornament({ className = "" }: IconProps) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-current opacity-40 sm:w-16" />
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 fill-current">
        <path d="M6 0l1.9 4.1L12 6 7.9 7.9 6 12 4.1 7.9 0 6l4.1-1.9z" />
      </svg>
      <span className="h-px w-12 bg-current opacity-40 sm:w-16" />
    </div>
  );
}

/** Canto decorativo duplo (estilo moldura do menu da marca). */
export function CornerFrame({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 44 44" className={className} fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <path d="M2 42 V14 Q2 2 14 2 h28" />
      <path d="M9 42 V18 q0-9 9-9 h23" opacity="0.45" />
      <circle cx="2" cy="42" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
