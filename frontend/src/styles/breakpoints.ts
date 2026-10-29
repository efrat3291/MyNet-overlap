export type Breakpoint = "smallPhone" | "phone" | "tablet" | "desktop";

const breakpointWidths: Record<Breakpoint, number> = {
  smallPhone: 360,
  phone: 600,
  tablet: 768,
  desktop: 1024,
};

export const up = (breakpoint: Breakpoint): string =>
  `@media (min-width: ${breakpointWidths[breakpoint]}px)`;

export const down = (breakpoint: Breakpoint): string =>
  `@media (max-width: ${breakpointWidths[breakpoint]}px)`;
