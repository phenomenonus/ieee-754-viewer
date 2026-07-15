import { useTranslation } from "react-i18next";

import { Caption1, Caption2, makeStyles, mergeClasses, tokens } from "@fluentui/react-components";

import type { FormatParams } from "@/ieee754";

import type { FC } from "@/types";

const useClasses = makeStyles({
  cell: {
    border: `1px solid ${tokens.colorNeutralForeground2}`,
    padding: "0.075rem 0.5rem",
  },
  exponent: {
    backgroundColor: tokens.colorPaletteBlueBackground2,
    color: tokens.colorPaletteBlueForeground2,
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2px",
  },
  fraction: {
    backgroundColor: tokens.colorPaletteGreenBackground1,
    color: tokens.colorPaletteGreenForeground1,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "0.32fr 2.56fr 7.36fr",
    marginBottom: "0.5rem",
    maxWidth: "400px",
  },
  hideSideBorder: {
    borderLeft: "none",
    borderRight: "none",
  },
  sign: {
    backgroundColor: tokens.colorPaletteDarkOrangeBackground1,
    color: tokens.colorPaletteDarkOrangeForeground1,
  },
});

export type FieldsInfoProps = {
  params: FormatParams;
  enableColors: boolean;
};

export const FieldsInfo: FC<FieldsInfoProps> = ({ enableColors, params }) => {
  const className = useClasses();
  const { t } = useTranslation("common");

  return (
    <div className={className.grid}>
      <div>
        <Caption1 align="center" block title={t("fieldsInfo.numberOfBits")}>
          {params.sign}
        </Caption1>
        <Caption1
          align="center"
          block
          className={mergeClasses(className.cell, enableColors && className.sign)}
          title={t("fieldsInfo.sign")}
        >
          S
        </Caption1>
      </div>
      <div>
        <Caption1 align="center" block title={t("fieldsInfo.numberOfBits")}>
          {params.exponent}
        </Caption1>
        <Caption1
          align="center"
          block
          className={mergeClasses(className.cell, className.hideSideBorder, enableColors && className.exponent)}
          title={t("fieldsInfo.exponent")}
        >
          E
        </Caption1>
        <div className={className.flex}>
          <Caption2 align="start" title={t("fieldsInfo.msb")}>
            MSB
          </Caption2>
          <Caption2 align="end" title={t("fieldsInfo.lsb")}>
            LSB
          </Caption2>
        </div>
      </div>
      <div>
        <Caption1 align="center" block title={t("fieldsInfo.numberOfBits")}>
          {params.fraction}
        </Caption1>
        <Caption1
          align="center"
          block
          className={mergeClasses(className.cell, enableColors && className.fraction)}
          title={t("fieldsInfo.fraction")}
        >
          F
        </Caption1>
        <div className={className.flex}>
          <Caption2 align="start" title={t("fieldsInfo.msb")}>
            MSB
          </Caption2>
          <Caption2 align="end" title={t("fieldsInfo.lsb")}>
            LSB
          </Caption2>
        </div>
      </div>
    </div>
  );
};
