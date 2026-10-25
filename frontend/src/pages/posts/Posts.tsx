import { useMemo, useState } from "react";
import type { FC, ChangeEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import { contentService } from "../../services/content/content.service";
import { QUERY_KEYS } from "../../utils/queryKeys";
import { useStyles } from "./styles";

const Post: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: posts,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: QUERY_KEYS.POSTS,
    queryFn: contentService.getPosts,
  });

  const filteredPosts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return (posts ?? []).filter((post) =>
      post.postName.toLowerCase().startsWith(normalizedSearch),
    );
  }, [posts, searchTerm]);

  const handleSearchChange = (
  event: ChangeEvent<HTMLInputElement>,
) => {
  setSearchTerm(event.target.value);
};

  const handleRetry = () => {
    void refetch();
  };

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
          onClick={handleRetry}
        >
          {t("posts.retry")}
        </button>
      </main>
    );
  }

  return (
    <main className={classes.container}>
      <h1 className={classes.title}>{t("posts.title")}</h1>

      <input
        type="search"
        className={classes.searchInput}
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder={t("posts.searchPlaceholder", {
          defaultValue: "Search posts by name...",
        })}
        aria-label={t("posts.searchLabel", {
          defaultValue: "Search posts by name",
        })}
      />

      {posts.length === 0 ? (
        <p className={classes.emptyState}>{t("posts.empty")}</p>
      ) : filteredPosts.length === 0 ? (
        <p className={classes.emptyState}>
          {t("posts.noSearchResults", {
            defaultValue: "No posts match your search.",
          })}
        </p>
      ) : (
        <div className={classes.postsList}>
          {filteredPosts.map((post) => (
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