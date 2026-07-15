/**
 * [Endianness](https://en.wikipedia.org/wiki/Endianness)
 */
export const Endianness = {
  /**
   * Big-endian (BE)
   *
   * LSB `A B C D` MSB
   */
  BE: "big-endian",
  /**
   * Little-endian (LE)
   *
   * MSB `D C B A` LSB
   */
  LE: "little-endian",
} as const;

export type Endianness = (typeof Endianness)[keyof typeof Endianness];
