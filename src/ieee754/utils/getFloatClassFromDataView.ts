import type { ByteLength } from "../Byte";
import { FloatClass } from "../FloatClass";

export const getFloatClassFromDataView = (dv: DataView, byteLength: ByteLength): FloatClass => {
  if (byteLength === 4) {
    const bits = dv.getUint32(0, true);

    const negative = (bits & 0x80000000) !== 0;
    const exponent = (bits >>> 23) & 0xff;
    const fraction = bits & 0x007fffff;

    if (exponent === 0xff) {
      if (fraction === 0) {
        return negative ? FloatClass.nInfinity : FloatClass.pInfinity;
      }

      const quiet = (fraction & 0x00400000) !== 0;
      return quiet ? FloatClass.qNaN : FloatClass.sNaN;
    }

    if (exponent === 0) {
      if (fraction === 0) {
        return negative ? FloatClass.nZero : FloatClass.pZero;
      }

      return negative ? FloatClass.nSubnormal : FloatClass.pSubnormal;
    }

    return negative ? FloatClass.nNormal : FloatClass.pNormal;
  }

  const bits = dv.getBigUint64(0, true);

  const negative = (bits & 0x8000000000000000n) !== 0n;
  const exponent = (bits >> 52n) & 0x7ffn;
  const fraction = bits & 0x000fffffffffffffn;

  if (exponent === 0x7ffn) {
    if (fraction === 0n) {
      return negative ? FloatClass.nInfinity : FloatClass.pInfinity;
    }

    const quiet = (fraction & 0x0008000000000000n) !== 0n;
    return quiet ? FloatClass.qNaN : FloatClass.sNaN;
  }

  if (exponent === 0n) {
    if (fraction === 0n) {
      return negative ? FloatClass.nZero : FloatClass.pZero;
    }

    return negative ? FloatClass.nSubnormal : FloatClass.pSubnormal;
  }

  return negative ? FloatClass.nNormal : FloatClass.pNormal;
};
