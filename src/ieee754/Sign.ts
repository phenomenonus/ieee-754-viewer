/**
 * 1-bit sign
 */
export const Sign = {
  /**
   * Negative number
   */
  Negative: 1,
  /**
   * Positive number
   */
  Positive: 0,
} as const;

export type Sign = (typeof Sign)[keyof typeof Sign];
