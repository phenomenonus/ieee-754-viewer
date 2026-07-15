import type { ByteLength } from "../Byte";
import { FloatClass } from "../FloatClass";

export const getFloatClassFromDataView = (
  dv: DataView,
  byteLength: ByteLength,
  isLittleEndian: boolean,
): FloatClass => {
  if (byteLength === 4) {
    const bits = dv.getUint32(0, isLittleEndian);
    const sign = (bits >>> 31) & 1;
    const exp = (bits >>> 23) & 0xff;
    const frac = bits & 0x7fffff;

    if (exp === 0xff) {
      if (frac === 0) return sign ? FloatClass.nInfinity : FloatClass.pInfinity;
      return (frac >>> 22) & 1 ? FloatClass.qNaN : FloatClass.sNaN;
    }

    if (exp === 0) {
      if (frac === 0) return sign ? FloatClass.nZero : FloatClass.pZero;
      return sign ? FloatClass.nSubnormal : FloatClass.pSubnormal;
    }

    return sign ? FloatClass.nNormal : FloatClass.pNormal;
  }

  const bits = dv.getBigUint64(0, isLittleEndian);
  const sign = (bits >> 63n) & 1n;
  const exp = (bits >> 52n) & 0x7ffn;
  const frac = bits & 0xfffffffffffffn; // 52 бита

  if (exp === 0x7ffn) {
    if (frac === 0n) return sign === 1n ? FloatClass.nInfinity : FloatClass.pInfinity;
    return ((frac >> 51n) & 1n) === 1n ? FloatClass.qNaN : FloatClass.sNaN;
  }

  if (exp === 0n) {
    if (frac === 0n) return sign === 1n ? FloatClass.nZero : FloatClass.pZero;
    return sign === 1n ? FloatClass.nSubnormal : FloatClass.pSubnormal;
  }

  return sign === 1n ? FloatClass.nNormal : FloatClass.pNormal;
};
