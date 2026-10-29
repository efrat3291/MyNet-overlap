import { createUseStyles } from "react-jss";
import { down } from "../../styles/breakpoints";

export const useStyles = createUseStyles({
  posts: {
    width: "100%",
    maxWidth: 1100,
    margin: "40px auto",
    padding: "32px 24px",
    boxSizing: "border-box",

    [down("phone")]: {
      margin: "24px auto",
      padding: "20px 12px",
    },

    [down("smallPhone")]: {
      padding: "16px 8px",
    },
  },

  title: {
    margin: "0 0 28px",
    color: "var(--text)",
    fontSize: 28,
    fontWeight: 700,
    textAlign: "center",

    [down("phone")]: {
      fontSize: 24,
      marginBottom: 22,
    },

    [down("smallPhone")]: {
      fontSize: 21,
    },
  },

  postList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 24,
    alignItems: "stretch",

    [down("phone")]: {
      gridTemplateColumns: "1fr",
      gap: 16,
    },
  },

  error: {
    padding: 20,
    border: "1px solid #f0caca",
    borderRadius: 10,
    backgroundColor: "#fff0f0",
    color: "#a52d2d",
    fontSize: 14,
    lineHeight: 1.5,
    textAlign: "center",
  },

  emptyState: {
    gridColumn: "1 / -1",
    padding: "48px 20px",
    border: "1px dashed var(--border)",
    borderRadius: 16,
    backgroundColor: "var(--surface)",
    color: "var(--secondary-text)",
    fontSize: 15,
    textAlign: "center",
  },

  searchInput: {
    display: "block",
    width: "100%",
    maxWidth: "32rem",
    minWidth: 0,
    boxSizing: "border-box",
    padding: "0.75rem 1rem",
    marginBottom: "1.5rem",
    border: "1px solid var(--border)",
    borderRadius: "0.5rem",
    backgroundColor: "var(--input-background)",
    color: "var(--text)",
    fontSize: "1rem",
    outlineOffset: "2px",

    [down("phone")]: {
      maxWidth: "100%",
      marginBottom: 20,
    },
  },

  retryButton: {
    display: "block",
    margin: "16px auto 0",
    padding: "12px 22px",
    border: "none",
    borderRadius: 999,
    backgroundColor: "var(--primary)",
    color: "var(--primary-text)",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    transition: "background-color 180ms ease, transform 180ms ease",

    "&:hover": {
      opacity: 0.9,
    },

    "&:active": {
      transform: "scale(0.99)",
    },
  },
});
