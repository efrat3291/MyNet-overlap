import { createContext, useContext, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import { themes } from "../styles/theme";

type Theme = keyof typeof themes;

type ThemeContextType = {
  theme: Theme;
  colors: (typeof themes)[Theme];
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const colors = themes[theme];

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--background", colors.background);
    root.style.setProperty("--surface", colors.surface);
    root.style.setProperty("--text", colors.text);
    root.style.setProperty("--secondary-text", colors.secondaryText);
    root.style.setProperty("--border", colors.border);
    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--primary-text", colors.primaryText);
    root.style.setProperty("--input-background", colors.inputBackground);

    root.style.backgroundColor = colors.background;
    root.style.color = colors.text;
  }, [colors]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};