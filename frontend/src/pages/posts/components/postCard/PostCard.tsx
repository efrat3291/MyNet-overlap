import type { FC } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { userService } from "../../../../services/user/user.service";
import { QUERY_KEYS } from "../../../../utils/queryKeys";
import { useStyles } from "./styles";
import type { PostCardProps } from "./types";

const PostCard: FC<PostCardProps> = ({ post }) => {
  const classes = useStyles();
  const { t } = useTranslation("translation", {
    keyPrefix: "POSTS",
  });

  const { postName, text, media, likes = 0 } = post;
  const userId = String(post.userId);

  const { data: user } = useQuery({
    queryKey: [...QUERY_KEYS.USERS, userId],
    queryFn: () => userService.getUserById(userId),
    enabled: Boolean(userId),
  });

  const mediaPath = media?.split(/[?#]/)[0].toLowerCase() ?? "";

  const isImage =
    /\.(png|jpe?g|gif|webp|avif|bmp|svg)$/.test(mediaPath) ||
    mediaPath.includes("encrypted-tbn") ||
    mediaPath.includes("gstatic.com/images");

  const isPdf = /\.pdf$/i.test(mediaPath);

  return (
    <article className={classes.postCard}>
      <div className={classes.author}>
        <Link to={`/users/${userId}`} className={classes.authorLink}>
          {user?.displayedName ?? user?.username ?? userId}
        </Link>

        {user?.username && (
          <span className={classes.username}>@{user.username}</span>
        )}
      </div>

      <h2 className={classes.postName}>{postName}</h2>

      <p className={classes.postText}>{text}</p>

      {media && isImage && (
        <a
          className={classes.mediaImageLink}
          href={media}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={classes.mediaImage}
            src={media}
            alt={postName}
            loading="lazy"
          />
        </a>
      )}

      {media && !isImage && (
        <a
          className={classes.mediaLink}
          href={media}
          target="_blank"
          rel="noopener noreferrer"
        >
          {isPdf ? t("VIEW_PDF") : t("VIEW_MEDIA")}
        </a>
      )}

      <div className={classes.likes}>{t("LIKES", { count: likes })}</div>
    </article>
  );
};

export { PostCard };
export default PostCard;
