/**
 * IEEE 754 basic formats. There are only supported formats are specified.
 */
export const BasicFormat = {
  /**
   * [Quadruple-precision floating-point format](https://en.wikipedia.org/wiki/Quadruple-precision_floating-point_format)
   */
  Binary128: "binary128",
  /**
   * [Single-precision floating-point format](https://en.wikipedia.org/wiki/Single-precision_floating-point_format)
   */
  Binary32: "binary32",
  /**
   * [Double-precision floating-point format](https://en.wikipedia.org/wiki/Double-precision_floating-point_format)
   */
  Binary64: "binary64",
  /**
   * [decimal128 floating-point format](https://en.wikipedia.org/wiki/Decimal128_floating-point_format)
   */
  Decimal128: "decimal128",
  /**
   * [decimal64 floating-point format](https://en.wikipedia.org/wiki/Decimal64_floating-point_format)
   */
  Decimal64: "decimal64",
} as const;

export type AllBasicFormats = (typeof BasicFormat)[keyof typeof BasicFormat];

export type BasicFormat = Exclude<AllBasicFormats, "binary128" | "decimal64" | "decimal128">;
