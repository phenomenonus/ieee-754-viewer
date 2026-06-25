import type { Theme } from "@fluentui/react-components";

import type { THEME_MODE, THEME_MODE_SOURCE } from "./constants";

/**
 * A color scheme or theme that includes a name and design options.
 */
export type ColorScheme = {
  name: string;
  theme: Theme;
};

export type ThemeMode = (typeof THEME_MODE)[keyof typeof THEME_MODE];

export type ThemeModeSource = (typeof THEME_MODE_SOURCE)[keyof typeof THEME_MODE_SOURCE];

export type ThemeData = {
  /**
   * System theme mode.
   * null indicates if a browser can't detect a system theme mode
   */
  systemMode: ThemeMode | null;
  /**
   * User theme mode
   */
  userMode: ThemeMode;
  /**
   * Current theme mode source
   */
  source: ThemeModeSource;

  /**
   * Current color scheme for dark mode
   */
  [THEME_MODE.DARK]: string;

  /**
   * Current color scheme for light mode
   */
  [THEME_MODE.LIGHT]: string;
};
