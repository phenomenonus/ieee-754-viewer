import { useTranslation } from "react-i18next";

import { Button, makeStyles, mergeClasses } from "@fluentui/react-components";

import { ThemeSettings } from "@/ui/ThemeSettings";

import { useTheme } from "@/store";

import { THEME_MODE, THEME_MODE_SOURCE } from "@/theme";

import type { FC } from "@/types";

import BrightnessSVG from "@/assets/icons/brightness.svg?react";
import DesktopRestrictSVG from "@/assets/icons/desktop_restrict.svg?react";
import MoonSVG from "@/assets/icons/moon.svg?react";
import PaletteSVG from "@/assets/icons/palette.svg?react";
import SunSVG from "@/assets/icons/sun.svg?react";

const useClasses = makeStyles({
  button: {
    justifyContent: "flex-start",
    width: "100%",
  },
  flex: {
    alignItems: "center",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
  },
  mb: {
    marginBottom: "0.75rem",
  },
  textEllipsis: {
    overflowX: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});

export const Theme: FC = () => {
  const { t } = useTranslation("common");
  const className = useClasses();
  const { setThemeModeAndSource, setThemeModeSource, source, systemMode, userMode } = useTheme();

  const isSystemSource = source === THEME_MODE_SOURCE.SYSTEM;
  /**
   * If system mode is not defined, only user mode is available, meaning the source is set to "user" value.
   */
  const mode = isSystemSource ? systemMode! : userMode;
  const isDarkMode = mode === THEME_MODE.DARK;
  const noSystemMode = systemMode === null;

  const systemModeMessage = noSystemMode
    ? t("theme.msg.systemNotDefined")
    : systemMode === THEME_MODE.DARK
      ? t("theme.msg.systemUseDark")
      : t("theme.msg.systemUseLight");

  return (
    <>
      <Button
        appearance={!isSystemSource && !isDarkMode ? "primary" : undefined}
        className={mergeClasses(className.button, className.mb)}
        icon={<SunSVG />}
        onClick={() => setThemeModeAndSource(THEME_MODE.LIGHT, THEME_MODE_SOURCE.USER)}
        title={t("theme.btnLightTitle")}
      >
        <span className={className.textEllipsis}>{t("theme.btnLight")}</span>
      </Button>
      <Button
        appearance={isSystemSource ? "primary" : undefined}
        className={mergeClasses(className.button, className.mb)}
        disabled={noSystemMode}
        icon={noSystemMode ? <DesktopRestrictSVG /> : <BrightnessSVG />}
        onClick={() => setThemeModeSource(THEME_MODE_SOURCE.SYSTEM)}
        title={`${t("theme.btnSystemTitle")} [${systemModeMessage}]`}
      >
        <span className={className.textEllipsis}>{t("theme.btnSystem")}</span>
      </Button>
      <Button
        appearance={!isSystemSource && isDarkMode ? "primary" : undefined}
        className={mergeClasses(className.button, className.mb)}
        icon={<MoonSVG />}
        onClick={() => setThemeModeAndSource(THEME_MODE.DARK, THEME_MODE_SOURCE.USER)}
        title={t("theme.btnDarkTitle")}
      >
        <span className={className.textEllipsis}>{t("theme.btnDark")}</span>
      </Button>

      <div className={className.flex}>
        <ThemeSettings
          appearance="transparent"
          icon={<PaletteSVG />}
          themeData={{ isDarkMode, isSystemSource, noSystemMode, systemModeMessage }}
          title={t("theme.btn")}
        >
          {t("theme.btn")}
        </ThemeSettings>
      </div>
    </>
  );
};
