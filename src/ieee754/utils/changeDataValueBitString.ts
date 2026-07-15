import type { FormatParams } from "../BasicFormatParams";
import { type Data, type FormatDataBitString, Representation } from "../FormatData";

import { getFormatItemData } from "./getFormatItemData";

export const changeDataValueBitString = (
  newData: Data,
  params: FormatParams,
  targetIsLE?: boolean,
): FormatDataBitString => {
  return getFormatItemData<typeof Representation.BitString>(newData, params, Representation.BitString, targetIsLE);
};
