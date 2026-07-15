import { BasicFormat } from "./BasicFormat";

/**
 * The ratio of the bit ordinal number to the field, which is defined in the standard as Sign/Exponent/Fraction.
 */
export const BitField = {
  Exponent: "exponent",
  Fraction: "fraction",
  Sign: "sign",
} as const;

export type BitField = (typeof BitField)[keyof typeof BitField];

export type FormatParams = {
  bias: number;
  bitLength: number;
  sign: number;
  exponent: number;
  fraction: number;
};

export type BasicFormatParamsType = Record<BasicFormat, FormatParams>;

/**
 * Parameters for supported {@link BasicFormat}.
 */
export const basicFormatParams: BasicFormatParamsType = {
  [BasicFormat.Binary32]: {
    bias: 127,
    bitLength: 32,
    exponent: 8,
    fraction: 23,
    sign: 1,
  },
  [BasicFormat.Binary64]: {
    bias: 1023,
    bitLength: 64,
    exponent: 11,
    fraction: 52,
    sign: 1,
  },
};
