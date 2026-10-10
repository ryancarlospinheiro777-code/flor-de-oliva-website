import type { CSSProperties } from "react";
import { cn } from "../utils/cn";

type LogoProps = {
  size?: number;
  animate?: boolean;
  className?: string;
  strokeWidth?: number;
};

const delay = (s: string) => ({ "--d": s }) as CSSProperties;

/**
 * Lírio em traço contínuo — a marca da Flor de Oliva.
 * Com `animate`, os traços se desenham em sequência (como tinta).
 */
export default function Logo({ size = 64, animate = false, className = "", strokeWidth = 1.6 }: LogoProps) {
  const petals = [0, 60, 120, 180, 240, 300];
  const stamens = [30, 90, 150, 210, 270, 330];

  return (
    <svg
      viewBox="0 0 220 260"
      width={size}
      height={(size * 260) / 220}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(animate && "flor-draw", className)}
      aria-hidden="true"
    >
      {/* caule */}
      <path pathLength={1} style={delay("0s")} d="M110 254 C 109 228, 109 172, 110 142" />
      {/* folhas */}
      <path pathLength={1} style={delay("0.35s")} d="M110 236 C 80 230, 58 208, 50 180 C 82 186, 102 206, 110 232 Z" />
      <path pathLength={1} style={delay("0.5s")} d="M110 214 C 140 208, 160 188, 167 162 C 134 168, 116 188, 110 210 Z" />
      <path pathLength={1} style={delay("0.62s")} d="M110 233 C 94 222, 78 208, 62 190" opacity={0.55} />
      <path pathLength={1} style={delay("0.72s")} d="M110 211 C 126 200, 142 187, 154 172" opacity={0.55} />
      {/* flor */}
      <g transform="translate(110 96)">
        {petals.map((a, i) => (
          <g key={`p-${a}`} transform={`rotate(${a})`}>
            <path
              pathLength={1}
              style={delay(`${0.8 + i * 0.14}s`)}
              d="M0 0 C -14 -20, -16 -50, 0 -76 C 16 -50, 14 -20, 0 0"
            />
            <path
              pathLength={1}
              style={delay(`${1.15 + i * 0.14}s`)}
              d="M0 -10 C -1 -30, -1 -50, 0 -66"
              opacity={0.6}
            />
          </g>
        ))}
        {stamens.map((a, i) => (
          <g key={`s-${a}`} transform={`rotate(${a})`}>
            <line pathLength={1} style={delay(`${1.5 + i * 0.08}s`)} x1="0" y1="-10" x2="0" y2="-36" />
            <ellipse pathLength={1} style={delay(`${1.65 + i * 0.08}s`)} cx="0" cy="-42" rx="3" ry="6" />
          </g>
        ))}
      </g>
    </svg>
  );
}
