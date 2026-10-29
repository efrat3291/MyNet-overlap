import { useState } from "react";
import type { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import {
  filter,
  startsWith,
  toLower,
  trim,
  isEmpty,
  map,
  times,
} from "lodash/fp";
import { contentService } from "../../services/content/content.service";
import { QUERY_KEYS } from "../../utils/queryKeys";
import { useStyles } from "./styles";
import  PostCard  from "./components/postCard";
import { POSTS_SKELETON_COUNT } from "./consts";

const Post: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", {
    keyPrefix: "POSTS",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: posts = [],
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: QUERY_KEYS.POSTS,
    queryFn: contentService.getPosts,
  });

  const normalizedSearch = toLower(trim(searchTerm));

  const filteredPosts = filter(
    ({ postName }) => startsWith(normalizedSearch, toLower(postName)),
    posts,
  );


  return (
    <div className={classes.posts}>
      <h1 className={classes.title}>{t("TITLE")}</h1>

      {isPending ? (
        <div className={classes.postList}>
          {times(
            (index) => (
              <ContentLoader
                key={index}
                speed={1.5}
                width="100%"
                height={100}
                viewBox="0 0 400 100"
                backgroundColor="#f3f4f6"
                foregroundColor="#e5e7eb"
              >
                <rect x="0" y="0" rx="8" ry="8" width="400" height="18" />
                <rect x="0" y="30" rx="5" ry="5" width="320" height="12" />
                <rect x="0" y="55" rx="5" ry="5" width="200" height="12" />
              </ContentLoader>
            ),
            POSTS_SKELETON_COUNT,
          )}
        </div>
      ) : isError ? (
        <>
          <p className={classes.error}>{t("LOAD_ERROR")}</p>

          <button
            type="button"
            className={classes.retryButton}
            onClick={() => void refetch()}
          >
            {t("RETRY")}
          </button>
        </>
      ) : (
        <>
          <input
            type="search"
            className={classes.searchInput}
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder={t("SEARCH_PLACEHOLDER")}
            aria-label={t("SEARCH_LABEL")}
          />

          {isEmpty(posts) ? (
            <p className={classes.emptyState}>{t("EMPTY")}</p>
          ) : isEmpty(filteredPosts) ? (
            <p className={classes.emptyState}>{t("NO_SEARCH_RESULTS")}</p>
          ) : (
            <div className={classes.postList}>
              {map(
                (post) => (
                  <PostCard post={post} key={String(post._id)} />
                ),
                filteredPosts,
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export { Post };
