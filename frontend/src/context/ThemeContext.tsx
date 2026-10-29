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

    const cssVariables = {
      "--background": colors.background,
      "--surface": colors.surface,
      "--text": colors.text,
      "--secondary-text": colors.secondaryText,
      "--border": colors.border,
      "--primary": colors.primary,
      "--primary-text": colors.primaryText,
      "--input-background": colors.inputBackground,
      "--primary-hover": colors.primaryHover,
      "--primary-light": colors.primaryLight,
      "--primary-soft": colors.primarySoft,
      "--surface-hover": colors.surfaceHover,
      "--border-focus": colors.borderFocus,
      "--success": colors.success,
      "--error": colors.error,
      "--warning": colors.warning,
      "--shadow-md": colors.shadow,
    };

    Object.entries(cssVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    root.style.backgroundColor = colors.background;
    root.style.color = colors.text;
    root.style.colorScheme = theme;
  }, [colors, theme]);

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
