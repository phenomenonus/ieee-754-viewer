import { type BrandVariants, createDarkTheme, createLightTheme, type Theme } from "@fluentui/react-components";

const desert: BrandVariants = {
  10: "#050301",
  100: "#A97815",
  110: "#BB8513",
  120: "#CE9211",
  130: "#DFA026",
  140: "#E8B254",
  150: "#F0C37C",
  160: "#F7D5A2",
  20: "#1E1709",
  30: "#32250F",
  40: "#423012",
  50: "#523B13",
  60: "#624715",
  70: "#735315",
  80: "#855F16",
  90: "#966B16",
};

export const lightDesert: Theme = {
  ...createLightTheme(desert),
};

export const darkDesert: Theme = {
  ...createDarkTheme(desert),
};

darkDesert.colorBrandForeground1 = desert[110];
darkDesert.colorBrandForeground2 = desert[120];
