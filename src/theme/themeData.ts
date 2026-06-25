import { DEFAULT_DARK_COLOR_SCHEME_NAME, DEFAULT_LIGHT_COLOR_SCHEME_NAME } from "./colorSchemes";
import { THEME_MODE, THEME_MODE_SOURCE } from "./constants";
import type { ThemeData } from "./types";
import { getPreferredSystemThemeMode } from "./utils";

/**
 * Theme mode by default.
 * The system theme preference is unavailable (e.g., restricted by browser settings), and the user has not selected a theme on initial load.
 */
export const DEFAULT_THEME_MODE = THEME_MODE.LIGHT;

/**
 * Trying to find theme mode using this source
 */
export const DEFAULT_THEME_MODE_SOURCE = THEME_MODE_SOURCE.SYSTEM;

export const getThemeData = (): ThemeData => {
  const systemMode = getPreferredSystemThemeMode();

  return {
    dark: DEFAULT_DARK_COLOR_SCHEME_NAME,
    light: DEFAULT_LIGHT_COLOR_SCHEME_NAME,
    source: systemMode !== null ? DEFAULT_THEME_MODE_SOURCE : THEME_MODE_SOURCE.USER,
    systemMode,
    userMode: DEFAULT_THEME_MODE,
  };
};
