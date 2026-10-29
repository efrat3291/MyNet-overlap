import { createUseStyles } from "react-jss";
import { down } from "../../../../styles/breakpoints";

export const useStyles = createUseStyles({
  userCard: {
    minWidth: 0,
    padding: 24,
    boxSizing: "border-box",
    backgroundColor: "#fffefa",
    border: "1px solid #ebe6df",
    borderRadius: 16,
    boxShadow: "0 8px 28px rgba(50, 44, 61, 0.06)",
    overflowWrap: "anywhere",
    [down("phone")]: {
      padding: 20,
    },
    [down("smallPhone")]: {
      padding: 14,
    },
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
});