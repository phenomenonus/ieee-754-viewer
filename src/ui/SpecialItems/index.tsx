import React from "react";

import { Trans, useTranslation } from "react-i18next";

import { Button, InfoLabel, Link, makeStyles } from "@fluentui/react-components";

import { ByteLength, type Data, type FormatItem, Representation } from "@/ieee754";

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
  [ByteLength.Single]: number;
  [ByteLength.Double]: bigint;
};

export type SpecialItemsProps = {
  formatItem: FormatItem;
  updateDataValue: (newData: Data) => void;
};

export const SpecialItems: FC<SpecialItemsProps> = ({ formatItem, updateDataValue }) => {
  const labelId = React.useId();
  const { t } = useTranslation("common");
  const className = useClasses();

  const specialItemList: SpecialItem[] = [
    {
      [ByteLength.Double]: 0x3ff0000000000000n,
      [ByteLength.Single]: 0x3f800000,
      name: "1",
    },
    {
      [ByteLength.Double]: 0x3fd3333333333334n,
      [ByteLength.Single]: 0x3e99999a,
      name: "0.1 + 0.2",
    },
    {
      [ByteLength.Double]: 0x0000000000000000n,
      [ByteLength.Single]: 0x00000000,
      name: "0",
    },
    {
      [ByteLength.Double]: 0x8000000000000000n,
      [ByteLength.Single]: 0x80000000,
      name: "-0",
    },
    {
      [ByteLength.Double]: 0x7ff0000000000000n,
      [ByteLength.Single]: 0x7f800000,
      name: "Infinity",
    },
    {
      [ByteLength.Double]: 0xfff0000000000000n,
      [ByteLength.Single]: 0xff800000,
      name: "-Infinity",
    },
    {
      [ByteLength.Double]: 0x7ff8000000000000n,
      [ByteLength.Single]: 0x7fc00000,
      name: "qNaN",
    },
    {
      [ByteLength.Double]: 0x7ff4000000000000n,
      [ByteLength.Single]: 0x7fa00000,
      name: "sNaN",
    },
    {
      [ByteLength.Double]: 0x4340000000000000n, // 2^53
      [ByteLength.Single]: 0x4b800000, // 2^24
      name: "Max Integer",
    },
    {
      [ByteLength.Double]: 0x7fefffffffffffffn,
      [ByteLength.Single]: 0x7f7fffff,
      name: "Max Normal",
    },
    {
      [ByteLength.Double]: 0x0010000000000000n,
      [ByteLength.Single]: 0x00800000,
      name: "Min Normal",
    },
    {
      [ByteLength.Double]: 0x000fffffffffffffn,
      [ByteLength.Single]: 0x007fffff,
      name: "Max Subnormal",
    },
    {
      [ByteLength.Double]: 0x0000000000000001n,
      [ByteLength.Single]: 0x00000001,
      name: "Min Subnormal",
    },
  ];

  // Typescript requires correct types
  const handleClick = React.useCallback(
    (item: SpecialItem) => {
      if (formatItem.data.byteLength === ByteLength.Single) {
        updateDataValue({
          ...formatItem.data,
          isLittleEndian: true,
          representation: Representation.HexNumber,
          value: item[formatItem.data.byteLength],
        });
      } else {
        updateDataValue({
          ...formatItem.data,
          isLittleEndian: true,
          representation: Representation.HexNumber,
          value: item[formatItem.data.byteLength],
        });
      }
    },
    [formatItem.data, updateDataValue],
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
