/**
 * Types of floating-point numbers.
 */
export const FloatClass = {
  /**
   * Negative [Infinity](https://en.wikipedia.org/wiki/Infinity), `−∞`
   */
  nInfinity: "-Infinity",
  /**
   * Negative [Normal](https://en.wikipedia.org/wiki/Normal_number_(computing))
   */
  nNormal: "-Normal",
  /**
   *  Negative [Subnormal](https://en.wikipedia.org/wiki/Subnormal_number)(**denormalized numbers** or **denormals**)
   */
  nSubnormal: "-Subnormal",
  /**
   * [Negative Zero](https://en.wikipedia.org/wiki/Signed_zero), `-0`
   */
  nZero: "-0",
  /**
   * Positive [Infinity](https://en.wikipedia.org/wiki/Infinity), `+∞`
   */
  pInfinity: "Infinity",
  /**
   * Positive [Normal](https://en.wikipedia.org/wiki/Normal_number_(computing))
   */
  pNormal: "Normal",
  /**
   * Positive [Subnormal](https://en.wikipedia.org/wiki/Subnormal_number)(**denormalized numbers** or **denormals**)
   */
  pSubnormal: "Subnormal",
  /**
   *[Positive Zero](https://en.wikipedia.org/wiki/Signed_zero), `+0`
   */
  pZero: "0",
  /**
   * Quiet `NaN`([not a number](https://en.wikipedia.org/wiki/NaN))
   */
  qNaN: "qNaN",
  /**
   * Signaling `NaN`([not a number](https://en.wikipedia.org/wiki/NaN))
   */
  sNaN: "sNaN",
} as const;

export type FloatClass = (typeof FloatClass)[keyof typeof FloatClass];
