import type { FC } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { userService } from "../../../../services/user/user.service";
import { QUERY_KEYS } from "../../../../utils/queryKeys";
import { useStyles } from "./styles";
import type { PostCardProps } from "./types";
import { split, toLower, includes } from "lodash/fp";

const PostCard: FC<PostCardProps> = ({
  post: { postName, text, media, likes = 0, userId },
}) => {
  const classes = useStyles();
  const { t } = useTranslation("translation", {
    keyPrefix: "POSTS",
  });

  const userIdString = String(userId);

  const { data: user } = useQuery({
    queryKey: [...QUERY_KEYS.USER_BY_ID, userIdString],
    queryFn: () => userService.getUserById(userIdString),
    enabled: Boolean(userId),
  });

  const mediaPath = media ? toLower(split(/[?#]/, media)[0] ?? "") : "";

  const isImage =
    /\.(png|jpe?g|gif|webp|avif|bmp|svg)$/.test(mediaPath) ||
    includes("encrypted-tbn", mediaPath) ||
    includes("gstatic.com/images", mediaPath);

  const isPdf = /\.pdf$/i.test(mediaPath);

  return (
    <article className={classes.postCard}>
      <div className={classes.author}>
        <Link to={`/users/${userIdString}`} className={classes.authorLink}>
          {user?.displayedName ?? user?.username ?? userIdString}
        </Link>

        {user?.username && (
          <span className={classes.username}>@{user.username}</span>
        )}
      </div>

      <h2 className={classes.postName}>{postName}</h2>

      <p className={classes.postText}>{text}</p>

      {isImage ? (
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
      ) : (
        media && (
          <a
            className={classes.mediaLink}
            href={media}
            target="_blank"
            rel="noopener noreferrer"
          >
            {isPdf ? t("VIEW_PDF") : t("VIEW_MEDIA")}
          </a>
        )
      )}
      <div className={classes.likes}>{t("LIKES", { count: likes })}</div>
    </article>
  );
};

export { PostCard };
