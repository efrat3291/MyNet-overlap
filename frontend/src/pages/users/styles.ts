
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  users: {
    width: "100%",
    maxWidth: 1000,
    margin: "40px auto",
    padding: "0 24px",
    boxSizing: "border-box",
  },

  title: {
    margin: "0 0 28px",
    color: "#282634",
    fontSize: 28,
    fontWeight: 700,
    textAlign: "center",
  },

  userList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: 20,
  },

  userCard: {
    minWidth: 0,
    padding: 24,
    boxSizing: "border-box",
    backgroundColor: "#fffefa",
    border: "1px solid #ebe6df",
    borderRadius: 16,
    boxShadow: "0 8px 28px rgba(50, 44, 61, 0.06)",
    overflowWrap: "anywhere",
  },

  displayedName: {
    margin: "0 0 10px",
    color: "#282634",
    fontSize: 20,
    fontWeight: 700,
  },

  username: {
    margin: 0,
    color: "#66856a",
    fontSize: 15,
    overflowWrap: "anywhere",
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
    backgroundColor: "#395543",
    color: "#ffffff",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#2d4435",
    },
  },

  emptyState: {
    margin: "32px 0",
    color: "#66616f",
    textAlign: "center",
    fontSize: 16,
  },

  "@media (max-width: 600px)": {
    container: {
      margin: "24px auto",
      padding: "0 12px",
    },

    title: {
      fontSize: 24,
      marginBottom: 22,
    },

    list: {
      gridTemplateColumns: "1fr",
      gap: 16,
    },

    userCard: {
      padding: 20,
    },
  },

  "@media (max-width: 360px)": {
    container: {
      padding: "0 8px",
    },

    title: {
      fontSize: 21,
    },

    userCard: {
      padding: 14,
    },
  },
});
