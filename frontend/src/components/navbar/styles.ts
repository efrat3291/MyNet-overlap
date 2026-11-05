import { createUseStyles } from "react-jss";
import { down } from "../../styles/breakpoints";

export const useStyles = createUseStyles({
  navbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    width: "100%",
    padding: "16px 24px",
    backgroundColor: "var(--surface)",
    borderBottom: "1px solid var(--border)",
    boxShadow: "var(--shadow-md)",
    transition: "background-color 220ms ease, border-color 220ms ease",

    [down("phone")]: {
      gap: 8,
      padding: 12,
    },
  },

  link: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    minHeight: 42,
    padding: "10px 16px",
    border: "1px solid var(--border)",
    borderRadius: 12,
    backgroundColor: "var(--surface)",
    color: "var(--text)",
    fontSize: 14,
    fontWeight: 600,
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition:
      "background-color 180ms ease, color 180ms ease, border-color 180ms ease, transform 180ms ease",

    "&:hover": {
      backgroundColor: "var(--primary)",
      color: "var(--primary-text)",
      borderColor: "var(--primary)",
      transform: "translateY(-1px)",
    },

    "&:active": {
      transform: "translateY(0)",
    },

    "&:focus-visible": {
      outline: "3px solid var(--primary)",
      outlineOffset: 3,
    },

    [down("phone")]: {
      flex: "1 1 auto",
      padding: "9px 12px",
      fontSize: 13,
    },
  },
});
