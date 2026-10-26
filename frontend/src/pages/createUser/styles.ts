import { createUseStyles } from "react-jss";
import { down } from "../../styles/breakpoints";

export const useStyles = createUseStyles({
  createUser: {
    width: "100%",
    maxWidth: 640,
    margin: "40px auto",
    padding: 32,
    boxSizing: "border-box",
    backgroundColor: "#fffefa",
    border: "1px solid #ebe6df",
    borderRadius: 20,
    boxShadow: "0 8px 28px rgba(50, 44, 61, 0.06)",
  },

  title: {
    margin: "0 0 28px",
    color: "#282634",
    fontSize: 28,
    fontWeight: 700,
    textAlign: "center",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 22,
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    minWidth: 0,
  },

  label: {
    color: "#454150",
    fontSize: 15,
    fontWeight: 600,
  },

  input: {
    width: "100%",
    minWidth: 0,
    padding: "12px 14px",
    boxSizing: "border-box",
    border: "1px solid #dcd7cf",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    color: "#282634",
    fontSize: 15,
    outline: "none",
    transition: "border-color 180ms ease, box-shadow 180ms ease",

    "&:focus": {
      borderColor: "#66856a",
      boxShadow: "0 0 0 3px rgba(102, 133, 106, 0.14)",
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
    backgroundColor: "#395543",
    color: "#ffffff",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    transition: "background-color 180ms ease, transform 180ms ease",

    "&:hover": {
      backgroundColor: "#2d4435",
    },

    "&:active": {
      transform: "scale(0.99)",
    },

    "&:disabled": {
      backgroundColor: "#9aa99b",
      cursor: "not-allowed",
      transform: "none",
    },
  },

  loader: {
    width: "100%",
    overflow: "hidden",
  },

  [down("phone")]: {
    createUser: {
      width: "calc(100% - 24px)",
      margin: "24px auto",
      padding: 20,
      borderRadius: 14,
    },

    title: {
      fontSize: 24,
      marginBottom: 22,
    },

    form: {
      gap: 18,
    },
  },

  [down("smallPhone")]: {
    createUser: {
      width: "calc(100% - 16px)",
      padding: 14,
    },

    title: {
      fontSize: 21,
    },

    input: {
      padding: "10px 12px",
    },
  },
});
