// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { BasicFormat } from "./BasicFormat";
import type { FormatParams } from "./BasicFormatParams";

/**
 * [The Byte](https://en.wikipedia.org/wiki/Byte) width in [bits](https://en.wikipedia.org/wiki/Bit).
 */
export const BYTE_SIZE = 8;

export type BYTE_SIZE = typeof BYTE_SIZE;

/**
 * Byte length for supported {@link BasicFormat}.
 */
export const ByteLength = {
  Double: 8,
  Single: 4,
} as const;

export type ByteLength = (typeof ByteLength)[keyof typeof ByteLength];

export const getByteLength = (params: FormatParams) => (params.bitLength / BYTE_SIZE) as ByteLength;
