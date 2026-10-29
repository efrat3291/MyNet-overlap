import { createUseStyles } from "react-jss";
import type { themes } from "../../styles/theme";
import { down } from "../../styles/breakpoints";

type ThemeColors = (typeof themes)["light"];

export const useStyles = createUseStyles({
  navbar: (colors: ThemeColors) => ({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    width: "100%",
    padding: "16px 24px",
    backgroundColor: colors.surface,
    borderBottom: `1px solid ${colors.border}`,
    boxShadow: "0 4px 16px rgba(48, 39, 71, 0.04)",
    transition: "background-color 220ms ease, border-color 220ms ease",

    [down("phone")]: {
      gap: 8,
      padding: 12,
    },
  }),

  link: (colors: ThemeColors) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    minHeight: 42,
    padding: "10px 16px",
    border: `1px solid ${colors.border}`,
    borderRadius: 12,
    backgroundColor: colors.surface,
    color: colors.text,
    fontSize: 14,
    fontWeight: 600,
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition:
      "background-color 180ms ease, color 180ms ease, border-color 180ms ease, transform 180ms ease",

    "&:hover": {
      backgroundColor: colors.primary,
      color: colors.primaryText,
      borderColor: colors.primary,
      transform: "translateY(-1px)",
    },

    "&:active": {
      transform: "translateY(0)",
    },

    "&:focus-visible": {
      outline: `3px solid ${colors.primary}`,
      outlineOffset: 3,
    },

    [down("phone")]: {
      flex: "1 1 auto",
      padding: "9px 12px",
      fontSize: 13,
    },
  }),
});