/**
 * Theme mode source.
 * Defines what entity controls theme mode.
 */
export const THEME_MODE_SOURCE = {
  /**
   * System-based theme mode (mode defined by OS)
   */
  SYSTEM: "system",

  /**
   * User-based theme mode (manual control)
   */
  USER: "user",
} as const;

/**
 * Theme mode.
 */
export const THEME_MODE = {
  /**
   * Dark theme
   */
  DARK: "dark",

  /**
   * Light theme
   */
  LIGHT: "light",
} as const;
