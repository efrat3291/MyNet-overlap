
import type { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import { contentService } from "../../services/content/content.service";
import { QUERY_KEYS } from "../../utils/queryKeys";
import { useStyles } from "./styles";

const Post: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const {
    data: posts,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: QUERY_KEYS.POSTS,
    queryFn: contentService.getPosts,
  });

  if (isPending) {
    return (
      <main className={classes.container}>
        <h1 className={classes.title}>{t("posts.title")}</h1>

        <ContentLoader
          speed={1.5}
          width="100%"
          height={150}
          viewBox="0 0 400 150"
          backgroundColor="#f3f4f6"
          foregroundColor="#e5e7eb"
        >
          <rect x="0" y="0" rx="8" ry="8" width="400" height="18" />
          <rect x="0" y="30" rx="5" ry="5" width="320" height="12" />
          <rect x="0" y="55" rx="5" ry="5" width="380" height="12" />
          <rect x="0" y="90" rx="8" ry="8" width="400" height="50" />
        </ContentLoader>
      </main>
    );
  }

  if (isError) {
    return (
      <main className={classes.container}>
        <h1 className={classes.title}>{t("posts.title")}</h1>

        <p className={classes.error}>{t("posts.loadError")}</p>

        <button
          type="button"
          className={classes.retryButton}
          onClick={() => refetch()}
        >
          {t("posts.retry", { defaultValue: "Try again" })}
        </button>
      </main>
    );
  }

  return (
    <main className={classes.container}>
      <h1 className={classes.title}>{t("posts.title")}</h1>

      {posts.length === 0 ? (
        <p className={classes.emptyState}>{t("posts.empty")}</p>
      ) : (
        <div className={classes.postsList}>
          {posts.map((post) => (
            <article
              className={classes.postCard}
              key={post._id.toString()}
            >
              <h2 className={classes.postName}>{post.postName}</h2>

              <p className={classes.postText}>{post.text}</p>

              {post.media && (
                <a
                  className={classes.mediaLink}
                  href={post.media}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("posts.viewMedia")}
                </a>
              )}

              <div className={classes.likes}>
                <span>
                  {t("posts.likes", { count: post.likes ?? 0 })}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};

export { Post };
