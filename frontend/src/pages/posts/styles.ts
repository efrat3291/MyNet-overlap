import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    width: "100%",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "32px 24px",
    boxSizing: "border-box",
  },

  title: {
    margin: "0 0 28px",
    color: "#1f2937",
    fontSize: "32px",
    fontWeight: 700,
    textAlign: "center",
  },

  postsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "24px",
    alignItems: "stretch",
  },

  postCard: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    padding: "24px",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",

    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.09)",
    },
  },

  postName: {
    margin: "0 0 12px",
    color: "#2563eb",
    fontSize: "22px",
    fontWeight: 700,
    overflowWrap: "anywhere",
  },

  postText: {
    margin: "0 0 20px",
    color: "#4b5563",
    fontSize: "16px",
    lineHeight: 1.7,
    whiteSpace: "pre-wrap",
    overflowWrap: "anywhere",
  },

  mediaLink: {
    display: "inline-block",
    alignSelf: "flex-start",
    marginTop: "auto",
    marginBottom: "16px",
    color: "#2563eb",
    fontWeight: 600,
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },

  likes: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "auto",
    paddingTop: "16px",
    borderTop: "1px solid #f3f4f6",
    color: "#6b7280",
    fontSize: "14px",
  },

  message: {
    padding: "40px 16px",
    color: "#6b7280",
    fontSize: "17px",
    textAlign: "center",
  },

  error: {
    padding: "20px",
    border: "1px solid #fecaca",
    borderRadius: "12px",
    backgroundColor: "#fef2f2",
    color: "#b91c1c",
    textAlign: "center",
  },

  emptyState: {
    gridColumn: "1 / -1",
    padding: "48px 20px",
    border: "1px dashed #d1d5db",
    borderRadius: "16px",
    color: "#6b7280",
    textAlign: "center",
  },

  retryButton: {
    display: "block",
    margin: "16px auto 0",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#1d4ed8",
    },

    retryButton: {
      display: "block",
      margin: "16px auto 0",
      padding: "10px 20px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#2563eb",
      color: "#ffffff",
      fontSize: "15px",
      fontWeight: 600,
      cursor: "pointer",

      "&:hover": {
        backgroundColor: "#1d4ed8",
      },
    },
  },
});
