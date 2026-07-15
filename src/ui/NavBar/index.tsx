import { type FC } from "react";

import { useTranslation } from "react-i18next";

import { makeStyles, Title3 } from "@fluentui/react-components";

import { Settings } from "@/ui";

import { xl } from "@/utils";

import DotsVSVG from "@/assets/icons/dots-v.svg?react";

const useClasses = makeStyles({
  flex: {
    alignItems: "center",
    ...xl({ padding: "1rem 0" }),
    columnGap: "4px",
    display: "flex",
    flexWrap: "nowrap",
    margin: "auto",
    maxWidth: "1280px",
    padding: "0.75rem 0.325rem",
  },
  title: {
    flexGrow: 1,
  },
});

export const NavBar: FC = () => {
  const { t } = useTranslation();
  const className = useClasses();

  return (
    <>
      <div className={className.flex}>
        <Title3 className={className.title} title={t("navBar.title")} truncate wrap={false}>
          {t("navBar.title")}
        </Title3>
        <Settings
          appearance="outline"
          aria-label={t("navBar.settings")}
          icon={<DotsVSVG />}
          title={t("navBar.settings")}
        />
      </div>
    </>
  );
};
