import { AddFormatButton, FormatPreviewer } from "@/ui";

import { useIEEE } from "@/store";

import type { FC } from "@/types";

export const IEEEWrapper: FC = () => {
  const {
    addFormatItem,
    changeViewOption,
    deleteFormatItem,
    endianness,
    getFormatItemDataValue,
    list,
    setEnableSpecialValues,
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
          getFormatItemDataValue={getFormatItemDataValue}
          key={formatData.id}
          setEnableSpecialValues={setEnableSpecialValues}
          setFormatItemData={setFormatItemData}
          setFormatItemDataEndianness={setFormatItemDataEndianness}
          systemEndianness={endianness}
        />
      ))}
    </>
  );
};
