import type { FC } from "react";
import { useTranslation } from "react-i18next";
import type { contentService } from "../../../services/content/content.service";
import { useStyles } from "../styles";

type PostData = Awaited<
  ReturnType<typeof contentService.getPosts>
>[number];

type PostCardProps = {
  post: PostData;
};

const PostCard: FC<PostCardProps> = ({ post }) => {
  const classes = useStyles();
  const { t } = useTranslation("translation", {
    keyPrefix: "POSTS",
  });

  const { postName, text, media, likes } = post;

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
        <span>{t("LIKES", { count: likes ?? 0 })}</span>
      </div>
    </article>
  );
};

export { PostCard };
