import { useTheme } from "@/store";

import { FluentProvider } from "@fluentui/react-components";

import { colorSchemes, THEME_MODE_SOURCE } from "@/theme";

import type { FCWithChildren } from "@/types";

export const ThemeProvider: FCWithChildren = ({ children }) => {
  const themeData = useTheme((state) => state);

  const mode =
    themeData.source === THEME_MODE_SOURCE.SYSTEM && themeData.systemMode !== null
      ? themeData.systemMode
      : themeData.userMode;

  return (
    <FluentProvider theme={colorSchemes[mode].find((i) => i.name === themeData[mode])!.theme}>
      {children}
    </FluentProvider>
  );
};
