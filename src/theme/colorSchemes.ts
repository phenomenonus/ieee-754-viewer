import { darkDesert, lightDesert } from "@/theme/colorSchemes/desert";
import { darkEmerald, lightEmerald } from "@/theme/colorSchemes/emerald";
import { darkFluent, lightFluent } from "@/theme/colorSchemes/fluent";
import { darkMonochrome, lightMonochrome } from "@/theme/colorSchemes/monochrome";

import { THEME_MODE } from "./constants";
import type { ColorScheme, ThemeMode } from "./types";
import { colorSchemeFabric } from "./utils";

/**
 * Color schemes.
 *
 * New custom color scheme can be added here depending on its mode(dark or light) using colorSchemeFabric.
 */
export const colorSchemes: Record<ThemeMode, ColorScheme[]> = {
  /**
   * Dark mode color schemes
   */
  [THEME_MODE.DARK]: [
    colorSchemeFabric("desert", darkDesert),
    colorSchemeFabric("emerald", darkEmerald),
    colorSchemeFabric("fluent", darkFluent),
    colorSchemeFabric("monochrome", darkMonochrome),
  ],

  /**
   * Light mode color schemes
   */
  [THEME_MODE.LIGHT]: [
    colorSchemeFabric("desert", lightDesert),
    colorSchemeFabric("emerald", lightEmerald),
    colorSchemeFabric("fluent", lightFluent),
    colorSchemeFabric("monochrome", lightMonochrome),
  ],
};

/**
 * Default active color scheme for dark mode
 * You can use any name from dark mode field in colorSchemes object
 */
export const DEFAULT_DARK_COLOR_SCHEME_NAME = "fluent";

/**
 * Default active color scheme for light mode
 * You can use any name from light mode field in colorSchemes object
 */
export const DEFAULT_LIGHT_COLOR_SCHEME_NAME = "fluent";
