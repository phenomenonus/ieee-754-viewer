import { type FC } from "react";

import { useTranslation } from "react-i18next";

import { Stack } from "@fluentui/react";
import { makeStyles, Title3 } from "@fluentui/react-components";

import { Settings } from "@/ui";

import { xl } from "@/utils";

import DotsVSVG from "@/assets/icons/dots-v.svg?react";

const useClasses = makeStyles({
  root: {
    margin: "auto",
    maxWidth: "1280px",
    padding: "0.75rem 0.5rem",
    ...xl({ padding: "1rem 0" }),
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
      <Stack className={className.root} horizontal verticalAlign="center">
        <Title3 className={className.title} title={t("navBar.title")} truncate wrap={false}>
          {t("navBar.title")}
        </Title3>
        <Settings
          appearance="outline"
          aria-label={t("navBar.settings")}
          icon={<DotsVSVG />}
          title={t("navBar.settings")}
        />
      </Stack>
    </>
  );
};
