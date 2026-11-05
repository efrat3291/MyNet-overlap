import type { ReactNode } from "react";
import type { themes } from "../../styles/theme";

export type AppTheme = keyof typeof themes;

export type Theme = AppTheme;

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export type ThemeProviderProps = {
  children: ReactNode;
};
