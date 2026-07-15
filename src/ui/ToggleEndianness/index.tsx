import React from "react";

import { Trans, useTranslation } from "react-i18next";

import { Button, InfoLabel, Link, makeStyles } from "@fluentui/react-components";

import type { IEEEStore } from "@/store";

import { Endianness } from "@/ieee754";

import type { FC } from "@/types";

const useClasses = makeStyles({
  flexRow: {
    alignItems: "center",
    columnGap: "0.5rem",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "0.5rem",
  },
  infoLabel: {
    display: "block",
  },
});

export type ToggleEndiannessProps = {
  formatDataId: string;
  isLittleEndian: boolean;
  setFormatItemDataEndianness: IEEEStore["setFormatItemDataEndianness"];
};

export const ToggleEndianness: FC<ToggleEndiannessProps> = ({
  formatDataId,
  isLittleEndian,
  setFormatItemDataEndianness,
}) => {
  const labelId = React.useId();
  const defaultClassName = useClasses();
  const { t } = useTranslation("common");

  return (
    <div className={defaultClassName.flexRow}>
      <InfoLabel
        className={defaultClassName.infoLabel}
        htmlFor={labelId}
        info={
          <Trans
            components={[<Link href="https://en.wikipedia.org/wiki/Endianness" target="_blank" />]}
            i18nKey="toggleEndianness.infoLabel"
            t={t}
          />
        }
        size="large"
      />
      <div>
        <Button
          appearance={isLittleEndian ? "primary" : "secondary"}
          onClick={() => setFormatItemDataEndianness(formatDataId, true)}
          shape="square"
          size="small"
        >
          {Endianness.LE}
        </Button>
        <Button
          appearance={isLittleEndian ? "secondary" : "primary"}
          onClick={() => setFormatItemDataEndianness(formatDataId, false)}
          shape="square"
          size="small"
        >
          {Endianness.BE}
        </Button>
      </div>
    </div>
  );
};
