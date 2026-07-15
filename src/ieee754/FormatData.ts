import type { ViewOptions } from "@/utils";

import type { BasicFormat } from "./BasicFormat";
import type { FormatParams } from "./BasicFormatParams";
import type { ByteLength } from "./Byte";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Endianness } from "./Endianness";
import type { FloatClass } from "./FloatClass";

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
   * [Hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) number.
   *
   * @example 42
   */
  HexNumber: "hexNumber",
  /**
   * [Hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) string.
   *
   * @example @example <0x>1f = 31
   */
  HexString: "hexString",
  /**
   * {@link BasicFormat} number.
   *
   * @example 42
   */
  Number: "number",
} as const;

export type Representation = (typeof Representation)[keyof typeof Representation];

// ignore rule @typescript-eslint/no-unused-vars
/**
 * Different {@link Representation|representations} and {@link ByteLength|sizes} of data value
 *
 * @namespace
 * @property {bigint|number|string} value    - type of data depending on {@link ByteLength} and {@link Representation}.
 * @property {ByteLength} byteLength         - {@link ByteLength}.
 * @property {FloatClass} floatClass         - {@link FloatClass}.
 * @property {Representation} representation - {@link Representation}.
 * @property {boolean} isLittleEndian        - is the format little-endian? By default is used system {@link Endianness}.
 */
export type FormatDataHexNumber =
  | {
      value: number;
      byteLength: typeof ByteLength.Single;
      floatClass: FloatClass;
      representation: typeof Representation.HexNumber;
      isLittleEndian: boolean;
    }
  | {
      value: bigint;
      byteLength: typeof ByteLength.Double;
      floatClass: FloatClass;
      representation: typeof Representation.HexNumber;
      isLittleEndian: boolean;
    };
export type FormatDataHexString =
  | {
      value: string;
      byteLength: typeof ByteLength.Single;
      floatClass: FloatClass;
      representation: typeof Representation.HexString;
      isLittleEndian: boolean;
    }
  | {
      value: string;
      byteLength: typeof ByteLength.Double;
      floatClass: FloatClass;
      representation: typeof Representation.HexString;
      isLittleEndian: boolean;
    };
export type FormatDataNumber =
  | {
      value: number;
      byteLength: typeof ByteLength.Single;
      floatClass: FloatClass;
      representation: typeof Representation.Number;
      isLittleEndian: boolean;
    }
  | {
      value: number;
      byteLength: typeof ByteLength.Double;
      floatClass: FloatClass;
      representation: typeof Representation.Number;
      isLittleEndian: boolean;
    };
export type FormatDataBitString =
  | {
      value: string;
      byteLength: typeof ByteLength.Single;
      floatClass: FloatClass;
      representation: typeof Representation.BitString;
      isLittleEndian: boolean;
    }
  | {
      value: string;
      byteLength: typeof ByteLength.Double;
      floatClass: FloatClass;
      representation: typeof Representation.BitString;
      isLittleEndian: boolean;
    };

export type Data = FormatDataHexNumber | FormatDataHexString | FormatDataNumber | FormatDataBitString;

export type FormatItem = {
  /**
   * Unique id.
   */
  id: string;
  /**
   * Current {@link BasicFormat}.
   */
  format: BasicFormat;
  /**
   * Position in array.
   */
  idx: number;
  /**
   * {@link FormatParams}.
   */
  params: FormatParams;
  /**
   * View options.
   */
  viewOptions: ViewOptions;
  /**
   * Value data in Hex representation.
   */
  data: FormatDataBitString;
};
