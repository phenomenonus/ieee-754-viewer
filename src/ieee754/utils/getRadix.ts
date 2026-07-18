import { Representation } from "../Representation";

export const Radix = {
  Binary: 2,
  Decimal: 10,
  Hex: 16,
} as const;

export type Radix = (typeof Radix)[keyof typeof Radix];

/**
 * Get [radix](https://en.wikipedia.org/wiki/Radix) value.
 */
export const getRadix = (representation: Representation): Radix => {
  switch (representation) {
    case Representation.HexBitPattern:
      return Radix.Hex;
    case Representation.BitString:
      return Radix.Binary;
    default:
      return Radix.Decimal;
  }
};
