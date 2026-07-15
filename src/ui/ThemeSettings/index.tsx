import React from "react";

import { useTranslation } from "react-i18next";

import {
  Button,
  type ButtonProps,
  Divider,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerHeaderTitle,
  Dropdown,
  InfoLabel,
  makeStyles,
  mergeClasses,
  Option,
  OverlayDrawer,
  useRestoreFocusSource,
  useRestoreFocusTarget,
} from "@fluentui/react-components";

import { IconButtonClose } from "@/components";

import { useTheme } from "@/store";

import { colorSchemes, THEME_MODE, THEME_MODE_SOURCE } from "@/theme";

import type { FC } from "@/types";

import DesktopSVG from "@/assets/icons/desktop.svg?react";
import DesktopRestrictSVG from "@/assets/icons/desktop_restrict.svg?react";
import MoonSVG from "@/assets/icons/moon.svg?react";
import PersonSVG from "@/assets/icons/person.svg?react";
import SunSVG from "@/assets/icons/sun.svg?react";

const useClasses = makeStyles({
  button: {
    justifyContent: "start",
    width: "100%",
  },
  divider: {
    margin: "1rem 0",
  },
  dropdown: {
    minWidth: "auto",
    width: "100%",
  },
  flex: {
    columnGap: "4px",
    display: "flex",
    flexWrap: "nowrap",
  },
  flexBasis: {
    flexBasis: "stretch",
    flexGrow: 1,
    overflow: "hidden",
  },
  flexEnd: {
    justifyContent: "end",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
  },
  mb: {
    marginBottom: "0.75rem",
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

export type ThemeSettingsProps = {
  themeData: {
    isSystemSource: boolean;
    isDarkMode: boolean;
    noSystemMode: boolean;
    systemModeMessage: string;
  };
};

export const ThemeSettings: FC<ThemeSettingsProps & ButtonProps> = ({
  themeData: { isDarkMode, isSystemSource, noSystemMode, systemModeMessage },
  ...rest
}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { dark, light, resetThemeData, setColorScheme, setThemeMode, setThemeModeSource, userMode } = useTheme();
  const { t } = useTranslation("common");
  const className = useClasses();
  const lightId = `${React.useId()}-select`,
    darkId = `${React.useId()}-select`,
    modeName = `mode`,
    schemeName = `scheme`,
    sourceName = `source`;

  const userModeMsg = userMode === THEME_MODE.DARK ? t("theme.msg.userUseDark") : t("theme.msg.userUseLight");

  // all Drawers need manual focus restoration attributes
  // unless (as in the case of some inline drawers, you do not want automatic focus restoration)
  const restoreFocusTargetAttributes = useRestoreFocusTarget();
  const restoreFocusSourceAttributes = useRestoreFocusSource();

  return (
    <>
      <Button onClick={() => setOpen(true)} {...rest} />
      <OverlayDrawer
        {...restoreFocusSourceAttributes}
        onOpenChange={(_, data) => setOpen(data.open)}
        open={open}
        position="end"
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={<IconButtonClose {...restoreFocusTargetAttributes} onClick={() => setOpen(false)} />}
          >
            {t("theme.title")}
          </DrawerHeaderTitle>
        </DrawerHeader>
        <DrawerBody>
          <Divider className={className.divider} />

          <InfoLabel
            aria-label={t("common.info")}
            className={className.label}
            htmlFor={sourceName}
            info={t("theme.sourceInfoLabel")}
            size="large"
          />
          <Button
            appearance={isSystemSource ? "primary" : undefined}
            className={mergeClasses(className.button, className.mb)}
            disabled={noSystemMode}
            icon={noSystemMode ? <DesktopRestrictSVG /> : <DesktopSVG />}
            name={sourceName}
            onClick={() => setThemeModeSource(THEME_MODE_SOURCE.SYSTEM)}
            title={`${t("theme.btnSystemTitle")} (${systemModeMessage})`}
          >
            <span className={className.textEllipsis}>{t("theme.btnSystem")}</span>
          </Button>
          <Button
            appearance={!isSystemSource ? "primary" : undefined}
            className={className.button}
            icon={<PersonSVG />}
            name={sourceName}
            onClick={() => setThemeModeSource(THEME_MODE_SOURCE.USER)}
            title={`${t("theme.btnUserTitle")} (${userModeMsg})`}
          >
            <span className={className.textEllipsis}>{t("theme.btnUser")}</span>
          </Button>

          <Divider className={className.divider} />

          <InfoLabel
            aria-label={t("common.info")}
            className={className.label}
            htmlFor={modeName}
            info={t("theme.modeInfoLabel")}
            size="large"
          />
          <Button
            appearance={!isDarkMode ? "primary" : undefined}
            className={mergeClasses(className.button, className.mb)}
            disabled={isSystemSource}
            icon={<SunSVG />}
            name={modeName}
            onClick={() => setThemeMode(THEME_MODE.LIGHT)}
            title={t("theme.btnLightTitle")}
          >
            <span className={className.textEllipsis}>{t("theme.btnLight")}</span>
          </Button>
          <Button
            appearance={isDarkMode ? "primary" : undefined}
            className={className.button}
            disabled={isSystemSource}
            icon={<MoonSVG />}
            name={modeName}
            onClick={() => setThemeMode(THEME_MODE.DARK)}
            title={t("theme.btnDarkTitle")}
          >
            <span className={className.textEllipsis}>{t("theme.btnDark")}</span>
          </Button>

          <Divider className={className.divider} />

          <InfoLabel
            aria-label={t("common.info")}
            className={className.label}
            htmlFor={schemeName}
            info={t("theme.schemeInfoLabel")}
            size="large"
          />
          <div className={className.flex} role="group">
            <div className={className.flexBasis}>
              <label
                className={mergeClasses(className.label, className.textEllipsis)}
                htmlFor={lightId}
                title={t("theme.lightSchemeTitle")}
              >
                {t("theme.lightScheme")}
              </label>
              <Dropdown
                appearance={!isDarkMode ? "outline" : undefined}
                button={<span className={className.textEllipsis}>{light}</span>}
                className={className.dropdown}
                defaultSelectedOptions={[light]}
                defaultValue={light}
                disabled={isSystemSource && isDarkMode}
                id={lightId}
                name={schemeName}
                onOptionSelect={(_, data) => setColorScheme(data.optionText!, THEME_MODE.LIGHT)}
              >
                {colorSchemes[THEME_MODE.LIGHT].map((scheme) => (
                  <Option key={THEME_MODE.LIGHT + scheme.name} text={scheme.name}>
                    <span className={className.option}>{scheme.name}</span>
                  </Option>
                ))}
              </Dropdown>
            </div>

            <div className={className.flexBasis}>
              <label
                className={mergeClasses(className.label, className.textEllipsis)}
                htmlFor={darkId}
                title={t("theme.darkSchemeTitle")}
              >
                {t("theme.darkScheme")}
              </label>
              <Dropdown
                appearance={isDarkMode ? "filled-darker" : undefined}
                button={<span className={className.textEllipsis}>{dark}</span>}
                className={className.dropdown}
                defaultSelectedOptions={[dark]}
                defaultValue={dark}
                disabled={isSystemSource && !isDarkMode}
                id={darkId}
                name={schemeName}
                onOptionSelect={(_, data) => setColorScheme(data.optionText!, THEME_MODE.DARK)}
              >
                {colorSchemes[THEME_MODE.DARK].map((scheme) => (
                  <Option key={THEME_MODE.DARK + scheme.name} text={scheme.name}>
                    <span className={className.option}>{scheme.name}</span>
                  </Option>
                ))}
              </Dropdown>
            </div>
          </div>

          <Divider className={className.divider} />

          <div className={mergeClasses(className.flex, className.flexEnd, className.mb)}>
            <Button appearance="transparent" onClick={resetThemeData} title={t("theme.btnReset")}>
              {t("theme.btnReset")}
            </Button>
          </div>
        </DrawerBody>

        <DrawerFooter className={className.flexEnd}>
          <Button
            {...restoreFocusTargetAttributes}
            appearance="secondary"
            onClick={() => setOpen(false)}
            title={t("common.close")}
          >
            {t("common.close")}
          </Button>
        </DrawerFooter>
      </OverlayDrawer>
    </>
  );
};
