import { createUseStyles } from "react-jss";
import { down } from "../../styles/breakpoints";

export const useStyles = createUseStyles({
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: 24,
    width: "calc(100% - 48px)",
    maxWidth: 760,
    margin: "36px auto",
    boxSizing: "border-box",

    [down("phone")]: {
      width: "calc(100% - 24px)",
      margin: "24px auto",
      gap: 20,
    },
  },

  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: 88,
    height: 88,
    borderRadius: "50%",
    backgroundColor: "var(--primary-light)",
    color: "var(--primary)",
    border: "3px solid var(--surface)",
    boxShadow: "0 0 0 2px var(--border)",
  },

  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    minWidth: 0,
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    padding: "32px 24px",
    backgroundColor: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 20,
    boxShadow: "var(--shadow-md)",
    textAlign: "center",
  },

  displayedName: {
    margin: 0,
    color: "var(--text)",
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 1.3,
    overflowWrap: "anywhere",
  },

  username: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    padding: "7px 14px",
    borderRadius: 999,
    backgroundColor: "var(--primary-soft)",
    color: "var(--secondary-text)",
    fontSize: 14,
    overflowWrap: "anywhere",
  },

  postsSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: 20,
    width: "100%",
    minWidth: 0,
    maxWidth: "100%",
    padding: 24,
    boxSizing: "border-box",
    overflow: "hidden",
    backgroundColor: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 20,
    boxShadow: "var(--shadow-md)",

    "& > article": {
      width: "100%",
      minWidth: 0,
      maxWidth: "100%",
      boxSizing: "border-box",
    },

    "& img": {
      maxWidth: "100%",
    },

    "& h2": {
      margin: "0 0 4px",
      color: "var(--text)",
      fontSize: 22,
      fontWeight: 700,
    },

    "& > p": {
      margin: 0,
      color: "var(--secondary-text)",
    },

    [down("phone")]: {
      padding: 16,
      gap: 16,
      borderRadius: 16,
    },
  },
});
