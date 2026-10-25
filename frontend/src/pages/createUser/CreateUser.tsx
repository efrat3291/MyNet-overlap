import type { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useStyles } from "./styles";
import { userService } from "../../services/user/user.service";
import type { CreateUserPayload } from "../../services/user/user.service";
import { QUERY_KEYS } from "../../utils/queryKeys";
import {
  getCreateUserValidationRules,
  normalizeCreateUserPayload,
} from "./functions";

const CreateUser: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", {
    keyPrefix: "createUser",
  });

  const validationRules = getCreateUserValidationRules({
    usernameRequired: t("usernameRequired"),
    usernameMinLength: t("usernameMinLength"),
    displayedNameRequired: t("displayedNameRequired"),
    displayedNameMinLength: t("displayedNameMinLength"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateUserPayload>({
    defaultValues: {
      username: "",
      displayedName: "",
    },
  });

  const queryClient = useQueryClient();

  const {
    mutate: createUser,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: userService.createUser,
    onSuccess: () => {
      reset({
        username: "",
        displayedName: "",
      });

      void queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.USERS,
      });
    },
  });

  const onSubmit = (payload: CreateUserPayload): void => {
    createUser(normalizeCreateUserPayload(payload));
  };

  return (
    <div className={classes.createUser}>
      <h1 className={classes.title}>{t("title")}</h1>

      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.field}>
          <label className={classes.label} htmlFor="username">
            {t("username")}
          </label>

          <input
            id="username"
            className={`${classes.input} ${
              errors.username ? classes.inputError : ""
            }`}
            {...register("username", validationRules.username)}
          />

          {errors.username && (
            <p className={classes.error}>{errors.username.message}</p>
          )}
        </div>

        <div className={classes.field}>
          <label className={classes.label} htmlFor="displayedName">
            {t("displayedName")}
          </label>

          <input
            id="displayedName"
            className={`${classes.input} ${
              errors.displayedName ? classes.inputError : ""
            }`}
            {...register("displayedName", validationRules.displayedName)}
          />

          {errors.displayedName && (
            <p className={classes.error}>
              {errors.displayedName.message}
            </p>
          )}
        </div>

        {isError && (
          <p className={classes.serverError} role="alert">
            {t("createError")}
          </p>
        )}

        {isSuccess && (
          <p className={classes.success} role="status">
            {t("createSuccess")}
          </p>
        )}

        <button
          className={classes.button}
          type="submit"
          disabled={isPending}
        >
          {isPending ? t("creating") : t("submit")}
        </button>

        {isPending && (
          <div className={classes.loader}>
            <ContentLoader
              speed={1.5}
              width="100%"
              height={24}
              viewBox="0 0 400 24"
              backgroundColor="#f3f4f6"
              foregroundColor="#e5e7eb"
            >
              <rect x="0" y="6" rx="4" ry="4" width="400" height="12" />
            </ContentLoader>
          </div>
        )}
      </form>
    </div>
  );
};

export { CreateUser };
