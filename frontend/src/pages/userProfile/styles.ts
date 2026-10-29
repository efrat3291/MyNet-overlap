import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  profile: {
    display: "flex",
    alignItems: "center",
    gap: 24,
    maxWidth: 640,
    margin: "40px auto",
    padding: 32,
    backgroundColor: "#fffefa",
    border: "1px solid #ebe6df",
    borderRadius: 16,
    boxSizing: "border-box",
  },

  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 80,
    height: 80,
    borderRadius: "50%",
    backgroundColor: "#ebe6df",
  },

  info: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    minWidth: 0,
  },

  displayedName: {
    margin: 0,
    fontSize: 24,
    overflowWrap: "anywhere",
  },

  username: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    color: "#777",
    overflowWrap: "anywhere",
  },
  postsSection: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: "100%",
    marginTop: 24,
  },
});
