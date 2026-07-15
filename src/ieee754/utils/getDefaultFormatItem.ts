import { getDefaultViewOptions } from "@/utils";

import type { BasicFormat } from "../BasicFormat";
import { basicFormatParams } from "../BasicFormatParams";
import { getByteLength } from "../Byte";
import { FloatClass } from "../FloatClass";
import { type FormatItem, Representation } from "../FormatData";

import { checkIfLittleEndian } from "./getEndianness";
import { getFormatItemData } from "./getFormatItemData";

export const getDefaultFormatItem = (format: BasicFormat, value = 0): FormatItem => {
  const params = basicFormatParams[format];
  const byteLength = getByteLength(params);
  const isLittleEndian = checkIfLittleEndian();
  const data = getFormatItemData<typeof Representation.BitString>(
    { byteLength, floatClass: FloatClass.pZero, isLittleEndian, representation: Representation.Number, value },
    params,
    Representation.BitString,
    isLittleEndian,
  );

  return {
    data,
    format,
    id: Date.now().toString(),
    idx: 0,
    params,
    viewOptions: getDefaultViewOptions(),
  };
};
