import { AddFormatButton, FormatPreviewer } from "@/ui";

import { useIEEE } from "@/store";

import type { FC } from "@/types";

export const IEEEWrapper: FC = () => {
  const {
    addFormatItem,
    changeViewOption,
    deleteFormatItem,
    getFormatItemDataValue: getFormatDataValue,
    list,
    setFormatItemData,
    setFormatItemDataEndianness,
  } = useIEEE();

  return (
    <>
      <AddFormatButton addFormatItem={addFormatItem} />
      {list.map((formatData) => (
        <FormatPreviewer
          changeViewOption={changeViewOption}
          deleteFormatItem={deleteFormatItem}
          formatItem={formatData}
          getFormatItemDataValue={getFormatDataValue}
          key={formatData.id}
          setFormatItemData={setFormatItemData}
          setFormatItemDataEndianness={setFormatItemDataEndianness}
        />
      ))}
    </>
  );
};
