import type { FC } from "react";
import React from "react";

import { useTranslation } from "react-i18next";

import { Button, Label, makeStyles, mergeClasses, tokens } from "@fluentui/react-components";

import { BitIcon } from "@/components";

import { BitAppearance, type BitData, BitLabel, BitSize } from "@/utils";

const useClasses = makeStyles({
  button: {
    margin: "0.5rem 0 0 1px",
    padding: 0,
  },
  exponent: {
    backgroundColor: tokens.colorPaletteBlueBackground2,
    color: tokens.colorPaletteBlueForeground2,
  },
  fraction: {
    backgroundColor: tokens.colorPaletteGreenBackground1,
    color: tokens.colorPaletteGreenForeground1,
  },
  label: {
    color: tokens.colorNeutralForegroundDisabled,
    display: "block",
    textAlign: "center",
  },
  large: {
    height: "24px",
    minHeight: "24px",
    minWidth: "24px",
    width: "24px",
  },
  medium: {
    height: "22px",
    minHeight: "22px",
    minWidth: "22px",
    width: "22px",
  },
  sign: {
    backgroundColor: tokens.colorPaletteDarkOrangeBackground1,
    color: tokens.colorPaletteDarkOrangeForeground1,
  },
  small: {
    height: "19px",
    minHeight: "19px",
    minWidth: "19px",
    width: "19px",
  },
  wrapper: {
    display: "inline-block",
    margin: "0.5rem 0 0 1px",
  },
});

const useLabelClasses = makeStyles({
  large: {
    fontSize: "14px",
  },
  medium: {
    fontSize: "13px",
  },
  small: {
    fontSize: "12px",
  },
});

export type BitProps = {
  appearance: BitAppearance;
  size: BitSize;
  bitData: BitData;
  label: BitLabel;
  onClick: () => void;
};

export const Bit: FC<BitProps> = ({ appearance, bitData, label, onClick, size }) => {
  const id = React.useId();
  const { t } = useTranslation("common");
  const className = useClasses();
  const labelClassName = useLabelClasses()[size];

  const title = `{${bitData.bitValue}}; ${t(`bit.indexInByte`)}: ${bitData.bitIdxInByte}`;

  if (label === BitLabel.None) {
    return (
      <Button
        appearance={appearance !== BitAppearance.Colored ? appearance : undefined}
        className={mergeClasses(
          className.button,
          className[size],
          appearance === BitAppearance.Colored && className[bitData.field],
        )}
        icon={<BitIcon bit={bitData.bitValue} size={size} />}
        id={id}
        onClick={onClick}
        shape="square"
        size={size}
        title={title}
      />
    );
  }

  const labelValue =
    label === BitLabel.Index
      ? bitData.bitIdx
      : label === BitLabel.IndexInByte
        ? bitData.bitIdxInByte
        : label === BitLabel.Ordinal
          ? bitData.bitIdx + 1
          : label === BitLabel.OrdinalInByte
            ? bitData.bitIdxInByte + 1
            : null;

  return (
    <div className={className.wrapper}>
      <Button
        appearance={appearance !== BitAppearance.Colored ? appearance : undefined}
        className={mergeClasses(className[size], appearance === BitAppearance.Colored && className[bitData.field])}
        icon={<BitIcon bit={bitData.bitValue} size={size} />}
        id={id}
        onClick={onClick}
        shape="square"
        size={size}
        title={title}
      />
      <Label
        className={mergeClasses(className.label, labelClassName)}
        htmlFor={id}
        size={size}
        title={`${t(`bit.${label}`)}: ${labelValue}`}
      >
        {labelValue}
      </Label>
    </div>
  );
};
