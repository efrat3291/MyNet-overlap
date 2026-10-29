import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { useStyles } from "./styles";
import type { PostCardProps } from "./types";

const PostCard: FC<PostCardProps> = ({
  post: { postName, text, media, likes = 0 },
}) => {
  const classes = useStyles();
  const { t } = useTranslation("translation", {
    keyPrefix: "POSTS",
  });

  return (
    <article className={classes.postCard}>
      <h2 className={classes.postName}>{postName}</h2>

      <p className={classes.postText}>{text}</p>

      {media && (
        <a
          className={classes.mediaLink}
          href={media}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("VIEW_MEDIA")}
        </a>
      )}

      <div className={classes.likes}>
        {t("LIKES", { count: likes })}
      </div>
    </article>
  );
};

export { PostCard };
