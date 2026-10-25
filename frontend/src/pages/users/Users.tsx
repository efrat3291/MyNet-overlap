import type { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import { userService } from "../../services/user/user.service";
import { QUERY_KEYS } from "../../utils/queryKeys";
import { useStyles } from "./styles";

const Users: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const {
    data: users,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: QUERY_KEYS.USERS,
    queryFn: userService.getUsers,
  });

  if (isPending) {
    return (
      <main className={classes.container}>
        <h1 className={classes.title}>{t("users.title")}</h1>

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
        <h1 className={classes.title}>{t("users.title")}</h1>

        <p className={classes.error}>{t("users.loadError")}</p>

        <button
          type="button"
          className={classes.retryButton}
          onClick={() => refetch()}
        >
          {t("users.retry", { defaultValue: "Try again" })}
        </button>
      </main>
    );
  }

  return (
    <main className={classes.container}>
      <h1 className={classes.title}>{t("users.title")}</h1>

      {users.length === 0 ? (
        <p className={classes.emptyState}>{t("users.empty")}</p>
      ) : (
        <div className={classes.list}>
          {users.map((user) => (
            <article
              className={classes.userCard}
              key={user.username}
            >
              <h2 className={classes.displayedName}>
                {user.displayedName}
              </h2>

              <p className={classes.username}>
                @{user.username}
              </p>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};

export { Users };
