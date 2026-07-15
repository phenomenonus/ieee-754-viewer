import React from "react";

import { Trans, useTranslation } from "react-i18next";

import {
  Button,
  InfoLabel,
  Link,
  makeStyles,
  Menu,
  MenuGroup,
  MenuGroupHeader,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from "@fluentui/react-components";

import { BasicFormat } from "@/ieee754";

import type { FC } from "@/types";

const useClasses = makeStyles({
  flexRow: {
    alignItems: "center",
    columnGap: "0.5rem",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "0.25rem",
  },
  list: {
    marginBottom: "0",
    paddingLeft: "1rem",
  },
});

type AddFormatButtonProps = {
  addFormatItem: (format: BasicFormat) => void;
};

export const AddFormatButton: FC<AddFormatButtonProps> = ({ addFormatItem }) => {
  const labelId = React.useId();
  const { t } = useTranslation("common");
  const className = useClasses();

  return (
    <div className={className.flexRow}>
      <InfoLabel
        htmlFor={labelId}
        info={
          <>
            <Trans
              components={[
                <Link href="https://en.wikipedia.org/wiki/IEEE_754#Basic_and_interchange_formats" target="_blank" />,
              ]}
              i18nKey="addFormatButton.infoLabel"
              t={t}
            />
            <ul className={className.list}>
              <li>
                <Link href="https://en.wikipedia.org/wiki/Single-precision_floating-point_format" target="_blank">
                  {t(`ieee.format.binary32`)} ({BasicFormat.Binary32});
                </Link>
              </li>
              <li>
                <Link href="https://en.wikipedia.org/wiki/Double-precision_floating-point_format" target="_blank">
                  {t(`ieee.format.binary64`)} ({BasicFormat.Binary64});
                </Link>
              </li>
              <li>
                <Link href="https://en.wikipedia.org/wiki/Quadruple-precision_floating-point_format" target="_blank">
                  {t(`ieee.format.binary128`)} ({BasicFormat.Binary128});
                </Link>
              </li>
              <li>
                <Link href="https://en.wikipedia.org/wiki/Decimal64_floating-point_format" target="_blank">
                  {t(`ieee.format.decimal64`)} ({BasicFormat.Decimal64});
                </Link>
              </li>
              <li>
                <Link href="https://en.wikipedia.org/wiki/Decimal128_floating-point_format" target="_blank">
                  {t(`ieee.format.decimal128`)} ({BasicFormat.Decimal128}).
                </Link>
              </li>
            </ul>
          </>
        }
        size="large"
      />
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <Button id={labelId}>{t("addFormatButton.button")}</Button>
        </MenuTrigger>

        <MenuPopover>
          <MenuList>
            <MenuGroup>
              <MenuGroupHeader>{t("addFormatButton.title")}</MenuGroupHeader>
              <MenuItem onClick={() => addFormatItem(BasicFormat.Binary32)}>{t("addFormatButton.binary32")}</MenuItem>
              <MenuItem onClick={() => addFormatItem(BasicFormat.Binary64)}>{t("addFormatButton.binary64")}</MenuItem>
              <MenuItem disabled>{t("addFormatButton.binary128")}</MenuItem>
              <MenuItem disabled>{t("addFormatButton.decimal64")}</MenuItem>
              <MenuItem disabled>{t("addFormatButton.decimal128")}</MenuItem>
            </MenuGroup>
          </MenuList>
        </MenuPopover>
      </Menu>
    </div>
  );
};
