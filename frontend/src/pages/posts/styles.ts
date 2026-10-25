import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    width: "100%",
    maxWidth: 1100,
    margin: "40px auto",
    padding: "32px 24px",
    boxSizing: "border-box",
  },

  title: {
    margin: "0 0 28px",
    color: "#282634",
    fontSize: 28,
    fontWeight: 700,
    textAlign: "center",
  },

  postsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 24,
    alignItems: "stretch",
  },

  postCard: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    padding: 24,
    border: "1px solid #ebe6df",
    borderRadius: 20,
    backgroundColor: "#fffefa",
    boxShadow: "0 8px 28px rgba(50, 44, 61, 0.06)",
    transition: "transform 180ms ease, box-shadow 180ms ease",

    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 12px 32px rgba(50, 44, 61, 0.1)",
    },
  },

  postName: {
    margin: "0 0 12px",
    color: "#395543",
    fontSize: 21,
    fontWeight: 700,
    overflowWrap: "anywhere",
  },

  postText: {
    margin: "0 0 20px",
    color: "#454150",
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
    color: "#395543",
    fontWeight: 600,
    textDecoration: "none",
    transition: "color 180ms ease",

    "&:hover": {
      color: "#66856a",
      textDecoration: "underline",
    },
  },

  likes: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: "auto",
    paddingTop: 16,
    borderTop: "1px solid #ebe6df",
    color: "#6d6878",
    fontSize: 14,
  },

  message: {
    padding: "40px 16px",
    color: "#6d6878",
    fontSize: 16,
    textAlign: "center",
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
    border: "1px dashed #dcd7cf",
    borderRadius: 16,
    backgroundColor: "#fffefa",
    color: "#6d6878",
    fontSize: 15,
    textAlign: "center",
  },

   searchInput: {
      width: "100%",
      maxWidth: "32rem",
      boxSizing: "border-box",
      padding: "0.75rem 1rem",
      marginBottom: "1.5rem",
      border: "1px solid #d1d5db",
      borderRadius: "0.5rem",
      fontSize: "1rem",
      outlineOffset: "2px",
    },

  retryButton: {
    display: "block",
    margin: "16px auto 0",
    padding: "12px 22px",
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
  },

  "@media (max-width: 600px)": {
    container: {
      width: "100%",
      margin: "24px auto",
      padding: "20px 12px",
    },

    title: {
      fontSize: 24,
      marginBottom: 22,
    },

    postsList: {
      gridTemplateColumns: "1fr",
      gap: 16,
    },

    postCard: {
      padding: 20,
      borderRadius: 14,
    },

    postName: {
      fontSize: 19,
    },

  },
});
