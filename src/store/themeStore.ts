import { create } from "zustand";
import { persist } from "zustand/middleware";

import { getThemeData, type ThemeData, type ThemeMode, type ThemeModeSource } from "@/theme";

type State = ThemeData;

type Actions = {
  setThemeMode: (mode: ThemeMode) => void;
  setThemeModeSource: (source: ThemeModeSource) => void;
  setColorScheme: (colorSchemeName: string, mode: ThemeMode) => void;
  setThemeModeAndSource: (mode: ThemeMode, source: ThemeModeSource) => void;
  resetThemeData: () => void;
};

type ThemeStore = State & Actions;

export const useTheme = create<ThemeStore>()(
  persist(
    (set) => ({
      resetThemeData: () => set(getThemeData()),
      setColorScheme: (colorSchemeName: string, mode: ThemeMode) =>
        set((state) => ({ ...state, [mode]: colorSchemeName })),
      setThemeMode: (mode: ThemeMode) => set((state) => ({ ...state, userMode: mode })),
      setThemeModeAndSource: (mode: ThemeMode, source: ThemeModeSource) =>
        set((state) => ({ ...state, source, userMode: mode })),
      setThemeModeSource: (source: ThemeModeSource) => set((state) => ({ ...state, source })),
      ...getThemeData(),
    }),
    { name: "theme-storage" },
  ),
);
