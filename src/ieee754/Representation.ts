/**
 * {@link BasicFormat} number representation.
 */
export const Representation = {
  /**
   * [Binary number](https://en.wikipedia.org/wiki/Binary_number) presented as a [bit string](https://en.wikipedia.org/wiki/Bit_array).
   *
   * @example <0b>0000000000000000 = 0
   */
  BitString: "bitString",
  /**
   * [Hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) integer value of the [bitstring](https://en.wikipedia.org/wiki/Hexadecimal#Bit_pattern) printed as hex. Don't confuse this with [hexadecimal floating point values](https://en.wikipedia.org/wiki/Hexadecimal#Exponential_notation) in the style of 0xab.12ef.
   *
   * @example @example <0x>1f = 31
   */
  HexBitPattern: "hexBitPattern",
  /**
   * {@link BasicFormat} number.
   *
   * @example 0.625 or 42
   */
  Number: "number",
} as const;

export type Representation = (typeof Representation)[keyof typeof Representation];
