import type { FC } from "react";
import React from "react";

import { useTranslation } from "react-i18next";

import { Button, Label, makeStyles, mergeClasses, tokens } from "@fluentui/react-components";

import { BitIcon } from "@/components";

import { BitAppearance, type BitData, BitLabel, BitSize } from "@/utils";

const useClasses = makeStyles({
  button: {
    margin: "0.5rem 0 0 1px",
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
  sign: {
    backgroundColor: tokens.colorPaletteDarkOrangeBackground1,
    color: tokens.colorPaletteDarkOrangeForeground1,
  },
  wrapper: {
    display: "inline-block",
    margin: "0.5rem 0 0 1px",
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

  const title = `{${bitData.bitValue}}; ${t(`bit.indexInByte`)}: ${bitData.bitIdxInByte}`;

  if (label === BitLabel.None) {
    return (
      <Button
        appearance={appearance !== BitAppearance.Colored ? appearance : undefined}
        className={mergeClasses(className.button, appearance === BitAppearance.Colored && className[bitData.field])}
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
        className={appearance === BitAppearance.Colored ? className[bitData.field] : undefined}
        icon={<BitIcon bit={bitData.bitValue} size={size} />}
        id={id}
        onClick={onClick}
        shape="square"
        size={size}
        title={title}
      />
      <Label className={className.label} htmlFor={id} size={size} title={`${t(`bit.${label}`)}: ${labelValue}`}>
        {labelValue}
      </Label>
    </div>
  );
};
