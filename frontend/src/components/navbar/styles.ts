import { createUseStyles } from "react-jss";
import type { themes } from "../../styles/theme";

type ThemeColors = (typeof themes)["light"];

export const useStyles = createUseStyles({
  navbar: (colors: ThemeColors) => ({
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    padding: 16,
    backgroundColor: colors.surface,
    borderBottom: `1px solid ${colors.border}`,
  }),

  link: (colors: ThemeColors) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 14px",
    border: `1px solid ${colors.border}`,
    borderRadius: 8,
    backgroundColor: colors.surface,
    color: colors.text,
    cursor: "pointer",
  }),
});
