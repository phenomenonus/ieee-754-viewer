import { BasicFormat, type BasicFormatParamsType, BYTE_SIZE, Field, type FormatItem } from "@/ieee754";

export type BitValue = "0" | "1";

/**
 * LSB - least significand value (0).
 * MSB - most significand value (<0).
 */
export type BitData = {
  /**
   * Bit index within the full value’s bit pattern depends on {@link Endianness} (byte order).
   */
  bitIdx: number;
  /**
   * Bit index within the containing byte (0..7).
   */
  bitIdxInByte: number;
  /**
   * Current {@link BitValue}.
   */
  bitValue: BitValue;
  /**
   * Current {@link Field}.
   */
  field: Field;
};

export type ByteData = {
  /**
   * Byte index within the value’s binary representation (byte order depends on {@link Endianness}).
   */
  byteIdx: number;
  /**
   * Array of {@link BitData}.
   */
  bits: BitData[];
};

export type LSBMSBFields = Record<Field, { lsb: number; msb: number }>;

/**
 * Get most significand bits indexes of fields.
 */
const getLSBMSBFields = (params: BasicFormatParamsType[BasicFormat]): LSBMSBFields => {
  const { exponent, fraction } = params;

  return {
    exponent: {
      lsb: fraction,
      msb: exponent + fraction - 1,
    },
    fraction: {
      lsb: 0,
      msb: fraction - 1,
    },
    sign: {
      lsb: exponent + fraction,
      msb: exponent + fraction,
    },
  };
};

/**
 * ```
 * STEP 3: (bit 13 = fieldname3); <=13
 * |                    STEP 1: (bits 0,1,2,3,4,5,6,7,8 = fieldname1); bit<=8
 * |                    |
 * |[13]|[12][11][10][9]|[8][7]|[6][5][4][3]|[2][1][0]
 *      |
 *      STEP 2: (bits 12,11,10,9 = fieldname2); bit<=12
 * ```
 */
export const getBitFieldName = (fields: LSBMSBFields, bitIdx: number): Field => {
  const { exponent, fraction } = fields;

  if (bitIdx >= fraction.lsb && bitIdx <= fraction.msb) return Field.Fraction;
  if (bitIdx <= exponent.msb) return Field.Exponent;
  return Field.Sign;
};

export const getFormatBytes = (formatData: FormatItem): ByteData[] => {
  const fields = getLSBMSBFields(formatData.params);
  const bytedValue = formatData.data.value.match(/.{1,8}/g) as string[];

  return bytedValue.map((byte, idx) => {
    const byteIdx = formatData.data.isLittleEndian ? bytedValue.length - idx - 1 : idx;
    let bitIdx = (byteIdx + 1) * BYTE_SIZE;
    return {
      bits: byte.split("").map((bitValue, k) => {
        bitIdx--;
        return {
          bitIdx,
          bitIdxInByte: BYTE_SIZE - k - 1,
          bitValue: bitValue as BitValue,
          field: getBitFieldName(fields, bitIdx),
        };
      }),
      byteIdx,
    };
  }) as ByteData[];
};
