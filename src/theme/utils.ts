import type { Theme } from "@fluentui/react-components";

import { THEME_MODE } from "./constants";
import type { ColorScheme, ThemeMode } from "./types";

/**
 * Fabric injects typography into the theme options and creates a theme entity.
 */
export const colorSchemeFabric = (name: string, theme: Theme): ColorScheme => {
  return {
    name,
    theme,
  };
};

/**
 * Returns the system mode, or null if the system mode is not defined.
 */
export const getPreferredSystemThemeMode = (): null | ThemeMode => {
  if (!window.matchMedia) return null;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return THEME_MODE.DARK;
  if (window.matchMedia("(prefers-color-scheme: light)").matches) return THEME_MODE.LIGHT;
  return null;
};
