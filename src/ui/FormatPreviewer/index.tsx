import React from "react";

import { Trans, useTranslation } from "react-i18next";

import {
  Body1Strong,
  Button,
  Card,
  Divider,
  InfoLabel,
  Link,
  makeStyles,
  mergeClasses,
  Subtitle2,
  tokens,
} from "@fluentui/react-components";

import { InputFieldWithLabel } from "@/components";

import { Bit, FieldsInfo, SpecialItems, ToggleEndianness, ViewOptionsButton } from "@/ui";

import { BitAppearance, type ByteData, ByteLabel, getFormatBytes, ViewOption } from "@/utils";

import type { IEEEStore } from "@/store";

import { BYTE_SIZE, type Data, type FormatItem, Representation } from "@/ieee754";

import type { FC } from "@/types";

const useClasses = makeStyles({
  byte: {
    display: "inline-block",
    width: "max-content",
  },
  byteLabel: {
    border: `3px solid ${tokens.colorNeutralForegroundDisabled}`,
    borderBottom: "none",
    borderRadius: `${tokens.borderRadiusLarge} ${tokens.borderRadiusLarge} 0 0`,
    color: tokens.colorNeutralForegroundDisabled,
    display: "block",
    margin: "0.25rem 0.75rem 0",
  },
  bytesInColumn: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  bytesInRow: {
    display: "flex",
    flexWrap: "wrap",
  },
  divider: {
    margin: "1rem 0",
  },
  flexRow: {
    alignItems: "center",
    columnGap: "0.5rem",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "0.5rem",
  },
  mb: {
    marginBottom: "0.5rem",
  },
  mb2: {
    marginBottom: "1rem",
  },
  splittedBytesInRow: {
    columnGap: "1rem",
    display: "flex",
    flexWrap: "wrap",
  },
});

export type FormatPreviewerProps = {
  formatItem: FormatItem;
  changeViewOption: IEEEStore["changeViewOption"];
  deleteFormatItem: IEEEStore["deleteFormatItem"];
  getFormatItemDataValue: IEEEStore["getFormatItemDataValue"];
  setFormatItemData: IEEEStore["setFormatItemData"];
  setFormatItemDataEndianness: IEEEStore["setFormatItemDataEndianness"];
};

export const FormatPreviewer: FC<FormatPreviewerProps> = ({
  changeViewOption,
  deleteFormatItem,
  formatItem,
  getFormatItemDataValue,
  setFormatItemData,
  setFormatItemDataEndianness,
}) => {
  const formatItemId = formatItem.id;
  const [numberValue, setNumberValue] = React.useState<string>(
    getFormatItemDataValue(formatItemId, Representation.Number),
  );

  const labelId = React.useId();
  const className = useClasses();
  const { t } = useTranslation("common");

  const appearance = formatItem.viewOptions[ViewOption.Appearance][0];
  const size = formatItem.viewOptions[ViewOption.Size][0];
  const bitLabel = formatItem.viewOptions[ViewOption.BitLabel][0];
  const byteLabel = formatItem.viewOptions[ViewOption.ByteLabel][0];
  const view = formatItem.viewOptions[ViewOption.View][0];

  const isLittleEndian = formatItem.data.isLittleEndian;

  const bytes: ByteData[] = getFormatBytes(formatItem);

  const updateDataValue = (newData: Data) => {
    setFormatItemData(formatItemId, newData);
    setNumberValue(getFormatItemDataValue(formatItemId, Representation.Number));
  };

  const toggleFormatBit = (byteIdx: number, bitIdxInByte: number) => {
    const bitString = formatItem.data.value.split("");
    const bytePosInString = formatItem.data.isLittleEndian
      ? (formatItem.data.byteLength - byteIdx - 1) * BYTE_SIZE
      : byteIdx * BYTE_SIZE;
    const bitPosInString = bytePosInString + BYTE_SIZE - bitIdxInByte - 1;
    bitString[bitPosInString] = bitString[bitPosInString] === "0" ? "1" : "0";
    updateDataValue({ ...formatItem.data, value: bitString.join("") });
  };

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>, data: HTMLInputElement) => {
    e.preventDefault();
    updateDataValue({
      ...formatItem.data,
      representation: Representation.Number,
      value: Number(data.value),
    });
  };

  return (
    <>
      <Divider className={className.divider} />

      <Subtitle2 block className={className.mb}>
        {t(`ieee.format.${formatItem.format}`)}
      </Subtitle2>

      <ToggleEndianness
        formatDataId={formatItemId}
        isLittleEndian={isLittleEndian}
        setFormatItemDataEndianness={setFormatItemDataEndianness}
      />

      <InputFieldWithLabel
        className={className.mb}
        infoLabel={
          <Trans
            components={[
              <Link href="https://en.wikipedia.org/wiki/Decimal" target="_blank" />,
              <Link href="https://tc39.es/ecma262/" target="_blank" />,
              <Link href="https://en.wikipedia.org/wiki/IEEE_754" target="_blank" />,
            ]}
            i18nKey="formatPreviewer.inputFieldWithLabel"
            t={t}
          />
        }
        label={t("formatPreviewer.inputLabel")}
        onChange={(_, data) => setNumberValue(data.value)}
        onSubmit={onSubmit}
        size="medium"
        type="text"
        value={numberValue}
      />

      <SpecialItems formatItem={formatItem} updateDataValue={updateDataValue} />

      <div className={className.flexRow}>
        <InfoLabel
          htmlFor={labelId}
          info={
            <Trans
              components={[
                <Link href="https://en.wikipedia.org/wiki/Bit" target="_blank" />,
                <Link href="https://en.wikipedia.org/wiki/Truth_value" target="_blank" />,
              ]}
              i18nKey="formatPreviewer.infoLabel"
              t={t}
            />
          }
          size="large"
        />
        <ViewOptionsButton changeViewOption={changeViewOption} id={formatItemId} viewOptions={formatItem.viewOptions} />
      </div>

      <div className={mergeClasses(className.mb, className[view])} id={labelId}>
        {bytes.map((byteData) => (
          <div className={className.byte} key={`${formatItemId}-byte-${byteData.byteIdx}`}>
            {byteLabel !== ByteLabel.None && (
              <Body1Strong align="center" className={className.byteLabel} title={t(`formatPreviewer.${byteLabel}`)}>
                {byteLabel === ByteLabel.Index ? byteData.byteIdx : byteData.byteIdx + 1}
              </Body1Strong>
            )}
            {byteData.bits.map((bitData) => {
              return (
                <React.Fragment key={`${formatItemId}-bit-${bitData.bitIdx}`}>
                  <Bit
                    appearance={appearance}
                    bitData={bitData}
                    label={bitLabel}
                    onClick={() => toggleFormatBit(byteData.byteIdx, bitData.bitIdxInByte)}
                    size={size}
                  />
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </div>

      <Card appearance="filled-alternative" className={className.mb2} size="small">
        <FieldsInfo enableColors={appearance === BitAppearance.Colored} params={formatItem.params} />
      </Card>

      <div className={className.flexRow}>
        <Button onClick={() => deleteFormatItem(formatItemId)}>{t("formatPreviewer.remove")}</Button>
      </div>
    </>
  );
};
