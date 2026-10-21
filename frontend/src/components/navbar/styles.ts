import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  "@global": {
    ":root": {
      colorScheme: "light",
    },
    "html, body": {
      width: "100%",
      minHeight: "100%",
      margin: 0,
      backgroundColor: "#f7f5f1",
      color: "#282634",
      fontFamily: '"Inter", "Segoe UI", Arial, sans-serif',
    },
    "#root": {
      width: "100%",
      minHeight: "100vh",
      boxSizing: "border-box",
    },
    "*": {
      boxSizing: "border-box",
    },
  },

  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: 10,
    padding: "18px 56px",
    backgroundColor: "#fffefa",
    borderBottom: "1px solid #ebe6df",
    boxShadow: "0 4px 20px rgba(50, 44, 61, 0.04)",
  },

  link: {
    padding: "11px 17px",
    border: "1px solid transparent",
    borderRadius: 999,
    backgroundColor: "transparent",
    color: "#625e6c",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    transition:
      "background-color 180ms ease, color 180ms ease, border-color 180ms ease",

    "&:hover": {
      color: "#395543",
      backgroundColor: "#edf4e9",
      borderColor: "#dce8d6",
    },

    "&:focus-visible": {
      outline: "2px solid #395543",
      outlineOffset: 3,
    },
  },

  "@media (max-width: 600px)": {
    navbar: {
      padding: "16px",
      gap: 8,
    },

    link: {
      padding: "9px 12px",
      fontSize: 14,
    },
  },
});