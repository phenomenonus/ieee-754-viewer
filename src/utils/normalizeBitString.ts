/**
 * Converts a little-endian byte-ordered bit string to canonical order.
 * BigInt/parseInt do not handle endianness, so bytes must be reordered first.
 */
export const normalizeBitString = (bitString: string, littleEndian: boolean): string => {
  if (littleEndian) return bitString;

  return bitString.match(/.{8}/g)!.reverse().join("");
};
