import { BYTE_SIZE, ByteLength, type Data, FloatClass, getRadix } from "@/ieee754";
import { Representation } from "@/ieee754/Representation";

const digitalization = (value: string, representation: Representation, byteLenght: ByteLength): string => {
  if (representation === Representation.BitString) {
    return value.padStart(byteLenght * BYTE_SIZE, "0");
  }
  if (representation === Representation.HexBitPattern) {
    return value.padStart((byteLenght * BYTE_SIZE) / 4, "0");
  }

  return value;
};

const isSimpleValue = (floatClass: FloatClass) =>
  floatClass === FloatClass.pNormal ||
  floatClass === FloatClass.nNormal ||
  floatClass === FloatClass.pSubnormal ||
  floatClass === FloatClass.nSubnormal;

const getValue = (
  dataView: DataView<ArrayBuffer>,
  representation: Representation,
  byteLength: ByteLength,
  targetIsLE: boolean,
) => {
  const isSingle = byteLength === ByteLength.Single;

  if (representation === Representation.Number) {
    return isSingle ? dataView.getFloat32(0, targetIsLE) : dataView.getFloat64(0, targetIsLE);
  }
  return isSingle ? dataView.getUint32(0, targetIsLE) : dataView.getBigUint64(0, targetIsLE);
};

export const numberToString = (dataView: DataView<ArrayBuffer>, targetDataWthoutValue: Omit<Data, "value">): string => {
  const { byteLength, enableSpecialValues, floatClass, isLittleEndian, representation } = targetDataWthoutValue;

  if (representation === Representation.Number && enableSpecialValues && !isSimpleValue(floatClass)) {
    return floatClass;
  }

  const value = getValue(dataView, representation, byteLength, isLittleEndian);

  return digitalization(value.toString(getRadix(representation)), representation, byteLength);
};
