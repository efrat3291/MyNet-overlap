import type { FC } from "react";
import { useStyles } from "./styles";
import type { UserCardProps } from "./types";

const UserCard: FC<UserCardProps> = ({
  user: { displayedName, username },
}) => {
  const classes = useStyles();

  return (
    <article className={classes.userCard}>
      <h2 className={classes.displayedName}>{displayedName}</h2>

      <p className={classes.username}>@{username}</p>
    </article>
  );
};

export { UserCard };