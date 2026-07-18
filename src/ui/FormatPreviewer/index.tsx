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
  Switch,
  tokens,
} from "@fluentui/react-components";

import { InputFieldWithLabel } from "@/components";

import { Bit, FieldsInfo, FormatItemInfo, SpecialItems, ToggleEndianness, ViewOptionsButton } from "@/ui";

import { BitAppearance, type ByteData, ByteLabel, getFormatBytes, ViewOption } from "@/utils";

import type { IEEEStore } from "@/store";

import { BYTE_SIZE, type Data, Endianness, type FormatItem } from "@/ieee754";
import { Representation } from "@/ieee754/Representation";

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
  flexR: {
    alignItems: "center",
    display: "flex",
  },
  flexRow: {
    alignItems: "center",
    columnGap: "0.5rem",
    display: "flex",
  },
  flexRowBetween: {
    alignItems: "center",
    columnGap: "0.5rem",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.5rem",
  },
  flexRowEnd: {
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
  changeViewOption: IEEEStore["changeViewOption"];
  deleteFormatItem: IEEEStore["deleteFormatItem"];
  formatItem: FormatItem;
  getFormatItemDataValue: IEEEStore["getFormatItemDataValue"];
  setEnableSpecialValues: IEEEStore["setEnableSpecialValues"];
  setFormatItemData: IEEEStore["setFormatItemData"];
  setFormatItemDataEndianness: IEEEStore["setFormatItemDataEndianness"];
  systemEndianness: Endianness;
};

export const FormatPreviewer: FC<FormatPreviewerProps> = ({
  changeViewOption,
  deleteFormatItem,
  formatItem,
  getFormatItemDataValue,
  setEnableSpecialValues,
  setFormatItemData,
  setFormatItemDataEndianness,
  systemEndianness,
}) => {
  const isSystemLE = systemEndianness === Endianness.LE;
  const formatItemId = formatItem.id;
  const [numberValue, setNumberValue] = React.useState<string>(
    getFormatItemDataValue(formatItemId, { isLittleEndian: isSystemLE, representation: Representation.Number }),
  );

  const labelId = React.useId();
  const switchLabelId = React.useId();
  const className = useClasses();
  const { t } = useTranslation("common");

  const appearance = formatItem.viewOptions[ViewOption.Appearance][0];
  const size = formatItem.viewOptions[ViewOption.Size][0];
  const bitLabel = formatItem.viewOptions[ViewOption.BitLabel][0];
  const byteLabel = formatItem.viewOptions[ViewOption.ByteLabel][0];
  const view = formatItem.viewOptions[ViewOption.View][0];

  const isLittleEndian = formatItem.data.isLittleEndian;

  const bytes: ByteData[] = getFormatBytes(formatItem);

  const updateDataValue = (newData?: Data) => {
    if (newData !== undefined) setFormatItemData(formatItemId, newData);
    setNumberValue(
      getFormatItemDataValue(formatItemId, { isLittleEndian: isSystemLE, representation: Representation.Number }),
    );
  };

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setEnableSpecialValues(formatItemId, ev.currentTarget.checked);
    updateDataValue();
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
      value: data.value,
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

      <div className={mergeClasses(className.flexR, className.mb)}>
        <Switch
          checked={formatItem.data.enableSpecialValues}
          id={switchLabelId}
          label={t("formatPreviewer.switch")}
          onChange={onChange}
          size="small"
        />
        <InfoLabel
          htmlFor={labelId}
          info={
            <Trans
              components={[
                <Link href="https://en.wikipedia.org/wiki/IEEE_754#Special_values" target="_blank" />,
                <Link href="https://en.wikipedia.org/wiki/IEEE_754#Signed_zero" target="_blank" />,
                <Link href="https://en.wikipedia.org/wiki/IEEE_754#NaNs" target="_blank" />,
                <Link href="https://tc39.es/ecma262/#sec-ecmascript-language-types-number-type" target="_blank" />,
              ]}
              i18nKey="formatPreviewer.switchInfoLabel"
              t={t}
            />
          }
          size="large"
        />
      </div>

      <SpecialItems formatItem={formatItem} setFormatItemData={setFormatItemData} updateDataValue={updateDataValue} />

      <div className={className.flexRowEnd}>
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
        <Divider appearance="subtle" />
        <FormatItemInfo
          formatItem={formatItem}
          hexValue={getFormatItemDataValue(formatItemId, {
            enableSpecialValues: false,
            representation: Representation.HexBitPattern,
          })}
          numberValue={getFormatItemDataValue(formatItemId, {
            enableSpecialValues: false,
            isLittleEndian: isSystemLE,
            representation: Representation.Number,
          })}
        />
      </Card>

      <div className={className.flexRowEnd}>
        <Button onClick={() => deleteFormatItem(formatItemId)}>{t("formatPreviewer.remove")}</Button>
      </div>
    </>
  );
};
