import { FluentProvider, makeStaticStyles } from "@fluentui/react-components";

import { useTheme } from "@/store";

import { colorSchemes, THEME_MODE_SOURCE } from "@/theme";

import type { FCWithChildren } from "@/types";

const useStaticStyles = makeStaticStyles({
  "*": { boxSizing: "border-box" },
  "#tp": { minHeight: "100dvh" },
  body: { margin: 0 },
});

export const ThemeProvider: FCWithChildren = ({ children }) => {
  const themeData = useTheme((state) => state);
  useStaticStyles();

  const mode =
    themeData.source === THEME_MODE_SOURCE.SYSTEM && themeData.systemMode !== null
      ? themeData.systemMode
      : themeData.userMode;

  const theme = colorSchemes[mode].find((i) => i.name === themeData[mode])!.theme;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#viewport_units

  return (
    <FluentProvider id="tp" theme={theme}>
      {children}
    </FluentProvider>
  );
};
