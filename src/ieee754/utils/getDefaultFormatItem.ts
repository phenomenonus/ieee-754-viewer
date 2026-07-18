import { getDefaultViewOptions } from "@/utils";

import type { BasicFormat } from "../BasicFormat";
import { basicFormatParams } from "../BasicFormatParams";
import { getByteLength } from "../Byte";
import { FloatClass } from "../FloatClass";
import { type FormatItem } from "../FormatData";
import { Representation } from "../Representation";

import { checkIfLittleEndian } from "./getEndianness";
import { getFormatItemData } from "./getFormatItemData";

export const getDefaultFormatItem = (format: BasicFormat): FormatItem => {
  const params = basicFormatParams[format];

  return {
    data: getFormatItemData(
      {
        byteLength: getByteLength(params),
        enableSpecialValues: true,
        floatClass: FloatClass.pZero,
        isLittleEndian: checkIfLittleEndian(),
        representation: Representation.Number,
        value: String(0),
      },
      { representation: Representation.BitString },
    ),
    format,
    id: Date.now().toString(),
    idx: 0,
    params,
    viewOptions: getDefaultViewOptions(),
  };
};
