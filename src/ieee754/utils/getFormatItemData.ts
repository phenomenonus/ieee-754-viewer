import type { FormatParams } from "../BasicFormatParams";
import { ByteLength } from "../Byte";
import {
  type Data,
  type FormatDataBitString,
  type FormatDataHexNumber,
  type FormatDataHexString,
  type FormatDataNumber,
  Representation,
} from "../FormatData";
import { Pre } from "../Pre";

import { getFloatClassFromDataView } from "./getFloatClassFromDataView";

export type DataType<R extends Representation> = R extends typeof Representation.HexNumber
  ? FormatDataHexNumber
  : R extends typeof Representation.HexString
    ? FormatDataHexString
    : R extends typeof Representation.Number
      ? FormatDataNumber
      : R extends typeof Representation.BitString
        ? FormatDataBitString
        : never;

export const getFormatItemData = <R extends Representation>(
  data: Data,
  params: FormatParams,
  targetRepresentation: R,
  targetIsLE?: boolean,
): DataType<R> => {
  targetIsLE = targetIsLE ?? data.isLittleEndian;
  const { byteLength, isLittleEndian, representation, value } = data;
  const isSingle = byteLength === ByteLength.Single;
  const dataView = new DataView(new ArrayBuffer(byteLength));

  if (representation === Representation.HexNumber) {
    if (isSingle) dataView.setUint32(0, value, isLittleEndian);
    else dataView.setBigUint64(0, BigInt(value), isLittleEndian);
  } else if (representation === Representation.HexString) {
    if (isSingle) dataView.setUint32(0, parseInt(value, 16), isLittleEndian);
    else dataView.setBigUint64(0, BigInt(Pre.Hex + value), isLittleEndian);
  } else if (representation === Representation.Number) {
    if (isSingle) dataView.setFloat32(0, value, isLittleEndian);
    else dataView.setFloat64(0, value, isLittleEndian);
  } else {
    if (isSingle) dataView.setUint32(0, parseInt(value, 2), isLittleEndian);
    else dataView.setBigUint64(0, BigInt(Pre.Bin + value), isLittleEndian);
  }

  const dataObj: Partial<Data> = {
    floatClass: getFloatClassFromDataView(dataView, byteLength, targetIsLE),
    isLittleEndian: targetIsLE,
    representation: targetRepresentation,
  };

  if (isSingle) dataObj.byteLength = byteLength as typeof ByteLength.Single;
  else dataObj.byteLength = byteLength as typeof ByteLength.Double;

  if (targetRepresentation === Representation.HexNumber) {
    dataObj.value = (isSingle ? dataView.getUint32(0, targetIsLE) : dataView.getBigUint64(0, targetIsLE))
      .toString(16)
      .padStart(params.bitLength / 4, "0");
  } else if (targetRepresentation === Representation.HexString) {
    dataObj.value = (isSingle ? dataView.getUint32(0, targetIsLE) : dataView.getBigUint64(0, targetIsLE))
      .toString(16)
      .padStart(params.bitLength / 4, "0");
  } else if (targetRepresentation === Representation.Number) {
    dataObj.value = isSingle ? dataView.getFloat32(0, targetIsLE) : dataView.getFloat64(0, targetIsLE);
  } else {
    dataObj.value = (isSingle ? dataView.getUint32(0, targetIsLE) : dataView.getBigUint64(0, targetIsLE))
      .toString(2)
      .padStart(params.bitLength, "0");
  }

  return dataObj as DataType<R>;
};
