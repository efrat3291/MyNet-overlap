import type { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import { times, isEmpty, map } from "lodash/fp";
import { userService } from "../../services/user/user.service";
import { QUERY_KEYS } from "../../utils/queryKeys";
import { useStyles } from "./styles";
import UserCard from "./components/userCard";
import { USERS_SKELETON_COUNT } from "./consts";

const Users: FC = () => {
  const classes = useStyles();

  const { t } = useTranslation("translation", {
    keyPrefix: "USERS",
  });

  const {
    data: users = [],
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: QUERY_KEYS.USERS,
    queryFn: userService.getUsers,
  });

  return (
    <div className={classes.users}>
      <h1 className={classes.title}>{t("TITLE")}</h1>

      {isPending ? (
        <div className={classes.userList}>
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
            USERS_SKELETON_COUNT,
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
      ) : isEmpty(users) ? (
        <p className={classes.emptyState}>{t("EMPTY")}</p>
      ) : (
        <div className={classes.userList}>
          {map(
            (user) => (
              <UserCard user={user} key={user.username} />
            ),
            users,
          )}
        </div>
      )}
    </div>
  );
};

export { Users };
