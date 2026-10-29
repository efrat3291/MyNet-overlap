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

const UserProfile: FC = () => {
  const classes = useStyles();
  const { userId } = useParams<{ userId: string }>();

  const { t } = useTranslation("translation", {
    keyPrefix: "USER_PROFILE",
  });

  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useQuery({
    queryKey: [...QUERY_KEYS.USERS, userId],
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
    enabled: Boolean(userId),
  });

  if (!userId) {
    return <p>{t("NOT_FOUND")}</p>;
  }

  if (isUserLoading) {
    return <p>{t("LOADING")}</p>;
  }

  if (isUserError) {
    return <p>{t("LOAD_ERROR")}</p>;
  }

  if (!user) {
    return <p>{t("NOT_FOUND")}</p>;
  }

  const userPosts =
    posts?.filter((post) => String(post.userId) === userId) ?? [];
  return (
    <div className={classes.profile}>
      <div className={classes.avatar}>
        <UserRound size={52} strokeWidth={1.5} />
      </div>

      <div className={classes.info}>
        <h1 className={classes.displayedName}>{user.displayedName}</h1>

        <div className={classes.username}>
          <AtSign size={16} />
          <span>{user.username}</span>
        </div>
      </div>

      <section className={classes.postsSection}>
        <h2>{t("POSTS_TITLE")}</h2>

        {arePostsLoading && <p>{t("POSTS_LOADING")}</p>}

        {arePostsError && <p>{t("POSTS_LOAD_ERROR")}</p>}

        {!arePostsLoading && !arePostsError && userPosts.length === 0 && (
          <p>{t("POSTS_EMPTY")}</p>
        )}

        {!arePostsLoading &&
          !arePostsError &&
          userPosts.map((post) => <PostCard key={post._id} post={post} />)}
      </section>
    </div>
  );
};

export { UserProfile };
