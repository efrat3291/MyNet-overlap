import { createUseStyles } from "react-jss";
import { down } from "../../styles/breakpoints";

export const useStyles = createUseStyles({
  users: {
    width: "100%",
    maxWidth: 1000,
    margin: "40px auto",
    padding: "0 24px",
    boxSizing: "border-box",

    [down("phone")]: {
      margin: "24px auto",
      padding: "0 12px",
    },

    [down("smallPhone")]: {
      padding: "0 8px",
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

  userList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: 20,

    [down("phone")]: {
      gridTemplateColumns: "1fr",
      gap: 16,
    },
  },

  error: {
    color: "#c03939",
    textAlign: "center",
  },

  retryButton: {
    display: "block",
    margin: "16px auto 0",
    padding: "10px 20px",
    border: "none",
    borderRadius: 999,
    backgroundColor: "var(--primary)",
    color: "var(--primary-text)",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",

    "&:hover": {
      opacity: 0.9,
    },
  },

  emptyState: {
    margin: "32px 0",
    color: "var(--secondary-text)",
    textAlign: "center",
    fontSize: 16,
  },
});
