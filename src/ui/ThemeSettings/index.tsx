import React from "react";

import { useTranslation } from "react-i18next";

import { Stack } from "@fluentui/react";
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
  },
  divider: {
    margin: "1rem 0",
  },
  dropdown: {
    minWidth: "auto",
  },
  footer: {
    justifyContent: "end",
  },
  icon: {
    margin: "0 2px",
    verticalAlign: "middle",
  },
  label: {
    display: "block",
    margin: "0.25rem",
  },
  option: {
    overflow: "hidden",
    overflowWrap: "break-word",
  },
  stackBasis: {
    flexBasis: "stretch",
    overflow: "hidden",
  },
  stackGroup: {
    rowGap: "0.5rem",
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
    sourceId = `${React.useId()}-source`,
    modeId = `${React.useId()}-mode`;

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
            htmlFor={sourceId}
            info={t("theme.sourceInfoLabel")}
            size="large"
          />
          <Stack className={className.stackGroup} id={sourceId} role="group">
            <Button
              appearance={isSystemSource ? "primary" : undefined}
              className={className.button}
              disabled={noSystemMode}
              icon={noSystemMode ? <DesktopRestrictSVG /> : <DesktopSVG />}
              onClick={() => setThemeModeSource(THEME_MODE_SOURCE.SYSTEM)}
              title={`${t("theme.btnSystemTitle")} (${systemModeMessage})`}
            >
              <span className={className.textEllipsis}>{t("theme.btnSystem")}</span>
            </Button>
            <Button
              appearance={!isSystemSource ? "primary" : undefined}
              className={className.button}
              icon={<PersonSVG />}
              onClick={() => setThemeModeSource(THEME_MODE_SOURCE.USER)}
              title={`${t("theme.btnUserTitle")} (${userModeMsg})`}
            >
              <span className={className.textEllipsis}>{t("theme.btnUser")}</span>
            </Button>
          </Stack>

          <Divider className={className.divider} />

          <InfoLabel
            aria-label={t("common.info")}
            className={className.label}
            htmlFor={modeId}
            info={t("theme.modeInfoLabel")}
            size="large"
          />
          <Stack className={className.stackGroup} id={modeId} role="group">
            <Button
              appearance={!isDarkMode ? "primary" : undefined}
              className={className.button}
              disabled={isSystemSource}
              icon={<SunSVG />}
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
              onClick={() => setThemeMode(THEME_MODE.DARK)}
              title={t("theme.btnDarkTitle")}
            >
              <span className={className.textEllipsis}>{t("theme.btnDark")}</span>
            </Button>
          </Stack>

          <Divider className={className.divider} />

          <InfoLabel
            aria-label={t("common.info")}
            className={className.label}
            htmlFor={modeId}
            info={t("theme.schemeInfoLabel")}
            size="large"
          />
          <Stack grow horizontal role="group">
            <Stack className={className.stackBasis} grow>
              <label
                className={mergeClasses(className.label, className.textEllipsis)}
                htmlFor={lightId}
                title={t("theme.lightSchemeTitle")}
              >
                <SunSVG className={className.icon} />
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
                onOptionSelect={(_, data) => setColorScheme(data.optionText!, THEME_MODE.LIGHT)}
              >
                {colorSchemes[THEME_MODE.LIGHT].map((scheme) => (
                  <Option key={THEME_MODE.LIGHT + scheme.name} text={scheme.name}>
                    <span className={className.option}>{scheme.name}</span>
                  </Option>
                ))}
              </Dropdown>
            </Stack>

            <Stack className={className.stackBasis} grow>
              <label
                className={mergeClasses(className.label, className.textEllipsis)}
                htmlFor={darkId}
                title={t("theme.darkSchemeTitle")}
              >
                <MoonSVG className={className.icon} />
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
                onOptionSelect={(_, data) => setColorScheme(data.optionText!, THEME_MODE.DARK)}
              >
                {colorSchemes[THEME_MODE.DARK].map((scheme) => (
                  <Option key={THEME_MODE.DARK + scheme.name} text={scheme.name}>
                    <span className={className.option}>{scheme.name}</span>
                  </Option>
                ))}
              </Dropdown>
            </Stack>
          </Stack>

          <Divider className={className.divider} />

          <Stack grow horizontal horizontalAlign="end">
            <Button appearance="transparent" onClick={resetThemeData} title={t("theme.btnReset")}>
              {t("theme.btnReset")}
            </Button>
          </Stack>
        </DrawerBody>

        <DrawerFooter className={className.footer}>
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
