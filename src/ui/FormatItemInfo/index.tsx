import React from "react";

import { Trans, useTranslation } from "react-i18next";

import { InfoLabel, Link, makeStyles, Table, TableBody, TableCell, TableRow } from "@fluentui/react-components";

import { extractFieldsFromBitString } from "@/utils";

import { Endianness, type FormatItem, getEndianness } from "@/ieee754";

import type { FC } from "@/types";

const useClasses = makeStyles({
  label: {
    whiteSpace: "initial",
  },
  table: {
    "& td": {
      whiteSpace: "nowrap",
      width: "max-content",
    },
    display: "block",
    overflowX: "auto",
  },
});

export type FormatItemInfoProps = {
  formatItem: FormatItem;
  numberValue: string;
  hexValue: string;
};

export const FormatItemInfo: FC<FormatItemInfoProps> = ({ formatItem, hexValue, numberValue }) => {
  const labelId = React.useId();
  const className = useClasses();
  const { t } = useTranslation("common");

  const fields = extractFieldsFromBitString(formatItem.data.value, formatItem.params, formatItem.data.isLittleEndian);

  return (
    <Table className={className.table} size="extra-small">
      <TableBody>
        <TableRow>
          <TableCell>{t("formatItemInfo.decimalValue")}</TableCell>
          <TableCell>{numberValue}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span id={labelId}>{t("formatItemInfo.hexBitPattern")}</span>
            <InfoLabel
              className={className.label}
              htmlFor={labelId}
              info={
                <Trans
                  components={[
                    <Link href="https://en.wikipedia.org/wiki/Hexadecimal" target="_blank" />,
                    <Link href="https://en.wikipedia.org/wiki/Hexadecimal#Bit_pattern" target="_blank" />,
                    <Link href="https://en.wikipedia.org/wiki/Hexadecimal#Exponential_notation" target="_blank" />,
                  ]}
                  i18nKey="formatItemInfo.infoLabel"
                  t={t}
                />
              }
              size="medium"
            />
          </TableCell>
          <TableCell>{hexValue}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{t("formatItemInfo.binaryBitPattern")}</TableCell>
          <TableCell>{formatItem.data.value}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{t("formatItemInfo.classification")}</TableCell>
          <TableCell>{t(`floatClass.${formatItem.data.floatClass}`)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{t("formatItemInfo.sign")}</TableCell>
          <TableCell>
            {fields.sign} ({t(`formatItemInfo.${fields.sign as "0" | "1"}`)})
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{t("formatItemInfo.biasValue")}</TableCell>
          <TableCell>{formatItem.params.bias}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{t("formatItemInfo.unbiasedExponentValue")}</TableCell>
          <TableCell>{fields.exponent}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{t("formatItemInfo.biasedExponentValue")}</TableCell>
          <TableCell>{fields.biasedExponent}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{t("formatItemInfo.fractionValue")}</TableCell>
          <TableCell>{fields.fraction}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{t("formatItemInfo.endianness")}</TableCell>
          <TableCell>{formatItem.data.isLittleEndian ? Endianness.LE : Endianness.BE}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{t("formatItemInfo.systemEndianness")}</TableCell>
          <TableCell>{getEndianness()}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
