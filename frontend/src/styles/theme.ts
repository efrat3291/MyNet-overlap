export const themes = {
  light: {
    background: "#f7f5fc",
    surface: "#ffffff",
    text: "#302747",
    secondaryText: "#79718c",
    border: "#e8e1f2",
    primary: "#7654d6",
    primaryText: "#ffffff",
    inputBackground: "#ffffff",

    primaryHover: "#6542c3",
    primaryLight: "#eee8ff",
    primarySoft: "#f5f1ff",
    surfaceHover: "#faf8ff",
    borderFocus: "#a28ae9",
    success: "#21865b",
    error: "#d14355",
    warning: "#a86b12",
    shadow: "0 8px 24px rgba(48, 39, 71, 0.08)",
  },

  dark: {
    background: "#171421",
    surface: "#221d30",
    text: "#f4efff",
    secondaryText: "#b7aecb",
    border: "#3b334d",
    primary: "#b39aff",
    primaryText: "#211832",
    inputBackground: "#2b253a",

    primaryHover: "#c6b4ff",
    primaryLight: "#382c52",
    primarySoft: "#2c243d",
    surfaceHover: "#302741",
    borderFocus: "#b39aff",
    success: "#70d6a4",
    error: "#ff8795",
    warning: "#f3c16d",
    shadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
  },
};

export type AppTheme = keyof typeof themes;