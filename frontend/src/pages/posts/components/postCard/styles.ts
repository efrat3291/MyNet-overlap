import { createUseStyles } from "react-jss";
import { down } from "../../../../styles/breakpoints";

export const useStyles = createUseStyles({
  postCard: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    padding: 24,
    border: "1px solid var(--border)",
    borderRadius: 20,
    backgroundColor: "var(--surface)",
    boxShadow: "0 8px 28px rgba(50, 44, 61, 0.06)",
    transition: "transform 180ms ease, box-shadow 180ms ease",

    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 12px 32px rgba(50, 44, 61, 0.1)",
    },

    [down("phone")]: {
      padding: 20,
      borderRadius: 14,
    },

    [down("smallPhone")]: {
      padding: 14,
    },
  },

  postName: {
    margin: "0 0 12px",
    color: "var(--text)",
    fontSize: 21,
    fontWeight: 700,
    overflowWrap: "anywhere",

    [down("phone")]: {
      fontSize: 19,
    },
  },

  postText: {
    margin: "0 0 20px",
    color: "var(--secondary-text)",
    fontSize: 15,
    lineHeight: 1.7,
    whiteSpace: "pre-wrap",
    overflowWrap: "anywhere",
  },

  mediaLink: {
    display: "inline-block",
    alignSelf: "flex-start",
    marginTop: "auto",
    marginBottom: 16,
    color: "var(--primary)",
    fontWeight: 600,
    textDecoration: "none",
    transition: "color 180ms ease",

    "&:hover": {
      textDecoration: "underline",
      opacity: 0.8,
    },
  },

  likes: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: "auto",
    paddingTop: 16,
    borderTop: "1px solid var(--border)",
    color: "var(--secondary-text)",
    fontSize: 14,
  },
});
