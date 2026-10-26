import type { FC } from "react";
import type { User } from "@libs/types/user/user.type.js";
import { useStyles } from "../styles";

type UserCardProps = {
  user: User;
};

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
