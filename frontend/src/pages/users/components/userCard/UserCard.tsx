
import type { FC } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import type { UserCardProps } from "./types";

const UserCard: FC<UserCardProps> = ({
  user: { _id, displayedName, username },
}) => {
  const classes = useStyles();

  return (
    <article className={classes.userCard}>
      <h2 className={classes.displayedName}>{displayedName}</h2>

      <p className={classes.username}>@{username}</p>

      <Link to={`/users/${_id}`}>
        View profile
      </Link>
    </article>
  );
};

export { UserCard };
