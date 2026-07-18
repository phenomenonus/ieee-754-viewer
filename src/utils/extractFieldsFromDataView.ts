import { type FormatParams, Pre, Sign } from "@/ieee754";

import { normalizeBitString } from "./normalizeBitString";

export type FieldsAsStrings = {
  sign: string; // "0" | "1"
  biasedExponent: string; // unsigned integer from exponent bits
  exponent: string | null; // unbiased exponent as string; null for Inf/NaN
  fraction: string; // unsigned integer from fraction bits
};

export function extractFieldsFromBitString(
  bitString: string,
  params: FormatParams,
  isLittleEndian: boolean,
): FieldsAsStrings {
  const { bias, exponent: k, fraction: p, sign: signBits } = params;

  const normalizedBitString = normalizeBitString(bitString, isLittleEndian);

  const signField = normalizedBitString.slice(0, signBits);
  const exponentField = normalizedBitString.slice(signBits, signBits + k);
  const fractionField = normalizedBitString.slice(signBits + k, signBits + k + p);

  const signNum = Number(signField) as Sign;
  const biasedExponentNum = parseInt(exponentField, 2);
  const fractionBig = BigInt(Pre.Bin + fractionField);

  const allOnes = (1 << k) - 1;

  let exponent: string | null;
  if (biasedExponentNum === 0) {
    // subnormal (or zero if fraction==0): E = 1 - bias
    exponent = String(1 - bias);
  } else if (biasedExponentNum === allOnes) {
    // Inf / NaN
    exponent = null;
  } else {
    // normal
    exponent = String(biasedExponentNum - bias);
  }

  return {
    biasedExponent: String(biasedExponentNum),
    exponent,
    fraction: fractionBig.toString(),
    sign: String(signNum),
  };
}
