import React from "react";

import { Trans, useTranslation } from "react-i18next";

import { Button, InfoLabel, Link, makeStyles } from "@fluentui/react-components";

import type { IEEEStore } from "@/store";

import { ByteLength, type Data, type FormatItem } from "@/ieee754";
import { Representation } from "@/ieee754/Representation";

import type { FC } from "@/types";

const useClasses = makeStyles({
  button: {
    minWidth: "0",
  },
  flex: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginBottom: "0.5rem",
  },
});

type SpecialItem = {
  name: string;
  [ByteLength.Single]: string;
  [ByteLength.Double]: string;
};

export type SpecialItemsProps = {
  formatItem: FormatItem;
  setFormatItemData: IEEEStore["setFormatItemData"];
  updateDataValue: (newData?: Data) => void;
};

export const SpecialItems: FC<SpecialItemsProps> = ({ formatItem, setFormatItemData, updateDataValue }) => {
  const labelId = React.useId();
  const { t } = useTranslation("common");
  const className = useClasses();

  const specialItemList: SpecialItem[] = [
    {
      [ByteLength.Double]: "3ff0000000000000",
      [ByteLength.Single]: "3f800000",
      name: "1",
    },
    {
      [ByteLength.Double]: "3fd3333333333334",
      [ByteLength.Single]: "3e99999a",
      name: "0.1 + 0.2",
    },
    {
      [ByteLength.Double]: "0000000000000000",
      [ByteLength.Single]: "00000000",
      name: "0",
    },
    {
      [ByteLength.Double]: "8000000000000000",
      [ByteLength.Single]: "80000000",
      name: "-0",
    },
    {
      [ByteLength.Double]: "7ff0000000000000",
      [ByteLength.Single]: "7f800000",
      name: "Infinity",
    },
    {
      [ByteLength.Double]: "fff0000000000000",
      [ByteLength.Single]: "ff800000",
      name: "-Infinity",
    },
    {
      [ByteLength.Double]: "7ff8000000000000",
      [ByteLength.Single]: "7fc00000",
      name: "qNaN",
    },
    {
      [ByteLength.Double]: "7ff4000000000000",
      [ByteLength.Single]: "7fa00000",
      name: "sNaN",
    },
    {
      [ByteLength.Double]: "4340000000000000",
      [ByteLength.Single]: "4b800000",
      name: "Max Integer",
    },
    {
      [ByteLength.Double]: "7fefffffffffffff",
      [ByteLength.Single]: "7f7fffff",
      name: "Max Normal",
    },
    {
      [ByteLength.Double]: "0010000000000000",
      [ByteLength.Single]: "00800000",
      name: "Min Normal",
    },
    {
      [ByteLength.Double]: "000fffffffffffff",
      [ByteLength.Single]: "007fffff",
      name: "Max Subnormal",
    },
    {
      [ByteLength.Double]: "0000000000000001",
      [ByteLength.Single]: "00000001",
      name: "Min Subnormal",
    },
  ];

  // Typescript requires correct types
  const handleClick = React.useCallback(
    (item: SpecialItem) => {
      setFormatItemData(
        formatItem.id,
        {
          ...formatItem.data,
          isLittleEndian: true,
          representation: Representation.HexBitPattern,
          value: item[formatItem.data.byteLength],
        },
        formatItem.data.isLittleEndian,
      );
      updateDataValue();
    },
    [formatItem.data, formatItem.id, setFormatItemData, updateDataValue],
  );

  return (
    <>
      <div className={className.flex} id={labelId}>
        {specialItemList.map((item) => (
          <Button className={className.button} key={item.name} onClick={() => handleClick(item)} size="small">
            {item.name}
          </Button>
        ))}
        <InfoLabel
          htmlFor={labelId}
          info={
            <Trans
              components={[
                <Link href="https://en.wikipedia.org/wiki/IEEE_754#Special_values" target="_blank" />,
                <Link href="https://en.wikipedia.org/wiki/Computer_number_format" target="_blank" />,
              ]}
              i18nKey="specialItems.label"
              t={t}
            />
          }
          size="large"
        />
      </div>
    </>
  );
};
