export const themes = {
  light: {
    background: "#f7f8fa",
    surface: "#ffffff",
    text: "#202124",
    secondaryText: "#666666",
    border: "#e0e0e0",
    primary: "#4f46e5",
    primaryText: "#ffffff",
    inputBackground: "#ffffff",
  },
  dark: {
    background: "#121212",
    surface: "#1e1e1e",
    text: "#f5f5f5",
    secondaryText: "#b0b0b0",
    border: "#383838",
    primary: "#818cf8",
    primaryText: "#121212",
    inputBackground: "#292929",
  },
};

export type AppTheme = keyof typeof themes;