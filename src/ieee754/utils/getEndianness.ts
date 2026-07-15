import { Endianness } from "@/ieee754";

/**
 * @returns {Endianness} system {@link Endianness}
 */
export const getEndianness = (): Endianness => {
  const array = new Uint8Array(4);
  const view = new Uint32Array(array.buffer);
  return (view[0] = 1) & array[0] ? Endianness.LE : Endianness.BE;
};

/**
 * Check if system {@link Endianness} is little-endian.
 */
export const checkIfLittleEndian = (): boolean => {
  return getEndianness() === Endianness.LE;
};
