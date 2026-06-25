import { type BrandVariants, createDarkTheme, createLightTheme, type Theme } from "@fluentui/react-components";

const emerald: BrandVariants = {
  10: "#020403",
  100: "#1E967A",
  110: "#1CA687",
  120: "#18B694",
  130: "#11C7A2",
  140: "#40D6B1",
  150: "#7CE1C3",
  160: "#A9EBD6",
  20: "#101C18",
  30: "#152E27",
  40: "#193C32",
  50: "#1B4A3D",
  60: "#1D5849",
  70: "#1E6755",
  80: "#1F7661",
  90: "#1F866D",
};

export const lightEmerald: Theme = {
  ...createLightTheme(emerald),
};

export const darkEmerald: Theme = {
  ...createDarkTheme(emerald),
};

darkEmerald.colorBrandForeground1 = emerald[110];
darkEmerald.colorBrandForeground2 = emerald[120];
