import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { AtSign, UserRound } from "lucide-react";
import { userService } from "../../services/user/user.service";
import { contentService } from "../../services/content/content.service";
import { QUERY_KEYS } from "../../utils/queryKeys";
import { PostCard } from "../posts/components/postCard/PostCard";
import { useStyles } from "./styles";
import { filter, isEmpty, map } from "lodash/fp";

const UserProfile: FC = () => {
  const classes = useStyles();
  const { userId } = useParams();

  const { t } = useTranslation("translation", {
    keyPrefix: "USER_PROFILE",
  });

  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useQuery({
    queryKey: [...QUERY_KEYS.USER_BY_ID, userId],
    queryFn: () => userService.getUserById(userId!),
    enabled: Boolean(userId),
  });

  const {
    data: posts,
    isLoading: arePostsLoading,
    isError: arePostsError,
  } = useQuery({
    queryKey: QUERY_KEYS.POSTS,
    queryFn: contentService.getPosts,
  });

  const userPosts = filter(
    (post) => String(post.userId) === userId,
    posts ?? [],
  );

  return (
    <div className={classes.profile}>
      {!userId ? (
        <p>{t("NOT_FOUND")}</p>
      ) : isUserLoading ? (
        <p>{t("LOADING")}</p>
      ) : isUserError ? (
        <p>{t("LOAD_ERROR")}</p>
      ) : !user ? (
        <p>{t("NOT_FOUND")}</p>
      ) : (
        <>
          <UserRound className={classes.avatar} size={52} strokeWidth={1.5} />

          <div className={classes.info}>
            <h1 className={classes.displayedName}>{user.displayedName}</h1>

            <div className={classes.username}>
              <AtSign size={16} />
              <span>{user.username}</span>
            </div>
          </div>

          <section className={classes.postsSection}>
            <h2>{t("POSTS_TITLE")}</h2>

            {arePostsLoading ? (
              <p>{t("POSTS_LOADING")}</p>
            ) : arePostsError ? (
              <p>{t("POSTS_LOAD_ERROR")}</p>
            ) : isEmpty(userPosts) ? (
              <p>{t("POSTS_EMPTY")}</p>
            ) : (
              map((post) => <PostCard key={post._id} post={post} />, userPosts)
            )}
          </section>
        </>
      )}
    </div>
  );
};

export { UserProfile };
