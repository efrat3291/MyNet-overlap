import { createUseStyles } from "react-jss";
import { down } from "../../styles/breakpoints";

export const useStyles = createUseStyles({
  createPost: {
    width: "100%",
    maxWidth: 640,
    margin: "40px auto",
    padding: 32,
    boxSizing: "border-box",
    backgroundColor: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 20,
    boxShadow: "0 8px 28px rgba(50, 44, 61, 0.06)",

    [down("phone")]: {
      width: "calc(100% - 24px)",
      margin: "24px auto",
      padding: 20,
      borderRadius: 14,
    },

    [down("smallPhone")]: {
      width: "calc(100% - 16px)",
      padding: 14,
    },
  },

  title: {
    margin: "0 0 28px",
    color: "var(--text)",
    fontSize: 28,
    fontWeight: 700,
    textAlign: "center",

    [down("phone")]: {
      marginBottom: 22,
      fontSize: 24,
    },

    [down("smallPhone")]: {
      fontSize: 21,
    },
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 22,

    [down("phone")]: {
      gap: 18,
    },
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    minWidth: 0,
  },

  label: {
    color: "var(--text)",
    fontSize: 15,
    fontWeight: 600,
  },

  input: {
    width: "100%",
    minWidth: 0,
    padding: "12px 14px",
    boxSizing: "border-box",
    border: "1px solid var(--border)",
    borderRadius: 10,
    backgroundColor: "var(--input-background)",
    color: "var(--text)",
    fontSize: 15,
    outline: "none",
    transition: "border-color 180ms ease, box-shadow 180ms ease",

    "&:focus": {
      borderColor: "var(--primary)",
      boxShadow: "0 0 0 3px rgba(129, 140, 248, 0.14)",
    },

    [down("smallPhone")]: {
      padding: "10px 12px",
    },
  },

  textarea: {
    width: "100%",
    minWidth: 0,
    minHeight: 130,
    padding: "12px 14px",
    boxSizing: "border-box",
    border: "1px solid var(--border)",
    borderRadius: 10,
    backgroundColor: "var(--input-background)",
    color: "var(--text)",
    fontFamily: "inherit",
    fontSize: 15,
    lineHeight: 1.6,
    resize: "vertical",
    outline: "none",
    transition: "border-color 180ms ease, box-shadow 180ms ease",

    "&:focus": {
      borderColor: "var(--primary)",
      boxShadow: "0 0 0 3px rgba(129, 140, 248, 0.14)",
    },

    [down("smallPhone")]: {
      padding: "10px 12px",
    },
  },

  inputError: {
    borderColor: "#c84c4c",

    "&:focus": {
      borderColor: "#c84c4c",
      boxShadow: "0 0 0 3px rgba(200, 76, 76, 0.12)",
    },
  },

  error: {
    margin: 0,
    color: "#c03939",
    fontSize: 13,
    lineHeight: 1.5,
  },

  serverError: {
    margin: 0,
    padding: "12px 14px",
    border: "1px solid #f0caca",
    borderRadius: 10,
    backgroundColor: "#fff0f0",
    color: "#a52d2d",
    fontSize: 14,
    lineHeight: 1.5,
  },

  success: {
    margin: 0,
    padding: "12px 14px",
    border: "1px solid #cfe4ce",
    borderRadius: 10,
    backgroundColor: "#eef7ec",
    color: "#315c36",
    fontSize: 14,
    lineHeight: 1.5,
  },

  button: {
    width: "100%",
    padding: "13px 18px",
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

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
      transform: "none",
    },
  },

  loader: {
    width: "100%",
    overflow: "hidden",
  },
});
