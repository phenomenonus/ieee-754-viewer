import { type FormatDataBitString, type FormatItem, Representation } from "../FormatData";

import { getFormatItemData } from "./getFormatItemData";

export const changeDataValueEndianness = (formatData: FormatItem, targetIsLE: boolean): FormatDataBitString => {
  return getFormatItemData<typeof Representation.BitString>(
    formatData.data,
    formatData.params,
    Representation.BitString,
    targetIsLE,
  );
};
