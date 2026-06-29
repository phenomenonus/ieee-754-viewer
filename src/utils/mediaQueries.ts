import type { CSSProperties } from "react";

/**
 * Media quaries
 */
export const MediaQuaries = {
  /**
   * Large
   */
  lg: `@media (width >= 80rem)`,
  /**
   * Medium
   */
  md: `@media (width >= 64rem)`,
  /**
   * Small
   */
  sm: `@media (width >= 40rem)`,
  /**
   * Extra large
   */
  xl: `@media (width >= 96rem)`,
  /**
   * Extra small
   */
  xs: `@media (width >= 30rem)`,
} as const;

export type Breakpoint = keyof typeof MediaQuaries;
export type MediaQueryRule = (typeof MediaQuaries)[Breakpoint];

type BreakpointFunction<B extends Breakpoint> = (
  style: CSSProperties,
) => Record<(typeof MediaQuaries)[B], CSSProperties>;

const factoryMediaQuery = <B extends Breakpoint>(bp: B) =>
  ((style: CSSProperties) => ({
    [MediaQuaries[bp]]: style,
  })) as BreakpointFunction<B>;

/**
 * {@link MediaQuaries.xs|Extra small} breakpoint
 */
export const xs = factoryMediaQuery("xs");
/**
 * {@link MediaQuaries.sm|Small} breakpoint
 */
export const sm = factoryMediaQuery("sm");
/**
 * {@link MediaQuaries.xs|Medium} breakpoint
 */
export const md = factoryMediaQuery("md");
/**
 * {@link MediaQuaries.xs|Large} breakpoint
 */
export const lg = factoryMediaQuery("lg");
/**
 * {@link MediaQuaries.xs|Extra large} breakpoint
 */
export const xl = factoryMediaQuery("xl");
