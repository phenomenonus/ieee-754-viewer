import { ByteLength } from "../Byte";
import { type Data } from "../FormatData";
import { Pre } from "../Pre";
import { Representation } from "../Representation";

import { getFloatClassFromDataView } from "./getFloatClassFromDataView";
import { numberToString } from "./numberToString";

export type TargetDataOptions = Partial<Pick<Data, "enableSpecialValues" | "isLittleEndian" | "representation">>;

type Resolve<D extends Data, T extends TargetDataOptions, K extends keyof TargetDataOptions> = undefined extends T[K]
  ? D[K]
  : T[K];

type Result<D extends Data, T extends TargetDataOptions> = Omit<
  Data,
  "enableSpecialValues" | "representation" | "isLittleEndian"
> & {
  enableSpecialValues: Resolve<D, T, "enableSpecialValues">;
  representation: Resolve<D, T, "representation">;
  isLittleEndian: Resolve<D, T, "isLittleEndian">;
};

export const getFormatItemData = <D extends Data, T extends TargetDataOptions = TargetDataOptions>(
  data: D,
  target: T,
): Result<D, T> => {
  const enableSpecialValues = target.enableSpecialValues ?? data.enableSpecialValues;
  const representation = target.representation ?? data.representation;
  const isLittleEndian = target.isLittleEndian ?? data.isLittleEndian;
  const byteLength = data.byteLength;
  const dataView = new DataView(new ArrayBuffer(byteLength));

  if (data.representation === Representation.HexBitPattern) {
    if (byteLength === ByteLength.Single) dataView.setUint32(0, Number(Pre.Hex + data.value), data.isLittleEndian);
    else dataView.setBigUint64(0, BigInt(Pre.Hex + data.value), data.isLittleEndian);
  } else if (data.representation === Representation.Number) {
    if (byteLength === ByteLength.Single) dataView.setFloat32(0, Number(data.value), data.isLittleEndian);
    else dataView.setFloat64(0, Number(data.value), data.isLittleEndian);
  } else {
    if (byteLength === ByteLength.Single) dataView.setUint32(0, parseInt(data.value, 2), data.isLittleEndian);
    else dataView.setBigUint64(0, BigInt(Pre.Bin + data.value), data.isLittleEndian);
  }

  const floatClass = getFloatClassFromDataView(dataView, byteLength);

  return {
    byteLength,
    enableSpecialValues,
    floatClass,
    isLittleEndian,
    representation,
    value: numberToString(dataView, {
      byteLength,
      enableSpecialValues,
      floatClass,
      isLittleEndian,
      representation,
    }),
  };
};
