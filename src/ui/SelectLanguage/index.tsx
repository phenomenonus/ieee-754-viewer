import React from "react";

import { Trans, useTranslation } from "react-i18next";

import { supportedLngs } from "@/i18n";

import { Dropdown, InfoLabel, Link, makeStyles, Option } from "@fluentui/react-components";

import { type LanguageRegionValue, localeDisplayNameByCode } from "@/utils";

import type { FC } from "@/types";

const useClasses = makeStyles({
  dropdown: {
    marginRight: "0.5rem",
    minWidth: "auto",
    width: "100%",
  },
  flex: {
    alignItems: "center",
    display: "flex",
    flexWrap: "nowrap",
  },
  option: {
    overflow: "hidden",
    overflowWrap: "break-word",
  },
  textEllipsis: {
    overflowX: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});

export type SelectLanguageProps = React.HTMLAttributes<HTMLDivElement>;

export const SelectLanguage: FC<SelectLanguageProps> = (props) => {
  const labelId = React.useId();
  const { i18n, t } = useTranslation();
  const className = useClasses();
  const currentLanguage = localeDisplayNameByCode[i18n.language as LanguageRegionValue];

  return (
    <div className={className.flex} {...props}>
      <Dropdown
        aria-label={t("selectLanguage.aria")}
        button={<span className={className.textEllipsis}>{currentLanguage}</span>}
        className={className.dropdown}
        defaultSelectedOptions={[i18n.language]}
        defaultValue={currentLanguage}
        onOptionSelect={(_, data) => i18n.changeLanguage(data.optionText)}
        title={currentLanguage}
      >
        {supportedLngs.map((lng) => (
          <Option key={lng} text={lng}>
            <span className={className.option}>{localeDisplayNameByCode[lng]}</span>
          </Option>
        ))}
      </Dropdown>
      <InfoLabel
        aria-label={t("common.info")}
        htmlFor={labelId}
        info={
          <Trans
            components={[
              <Link
                href="https://en.wikipedia.org/wiki/Language_localisation#Language_tags_and_codes"
                target="_blank"
              />,
            ]}
            i18nKey="selectLanguage.label"
            t={t}
          />
        }
        size="large"
      />
    </div>
  );
};
