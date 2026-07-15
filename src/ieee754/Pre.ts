/**
 * Prefixed for different number representations.
 */
export const Pre = {
  /**
   * Prefix for [binary](https://en.wikipedia.org/wiki/Binary_number) representation.
   */
  Bin: "0b",
  /**
   * Prefix for [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) representation.
   */
  Hex: "0x",
} as const;

export type Pre = (typeof Pre)[keyof typeof Pre];
