import type { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isEmpty, trim } from "lodash/fp";
import {
  USER_NAME_MIN_LENGTH,
  DISPLAYED_NAME_MIN_LENGTH,
} from "@libs/consts/user.consts";
import { useStyles } from "./styles";
import { userService } from "../../services/user/user.service";
import type { CreateUserPayload } from "../../services/user/user.service";
import { QUERY_KEYS } from "../../utils/queryKeys";

const CreateUser: FC = () => {
  const classes = useStyles();

  const { t } = useTranslation("translation", {
    keyPrefix: "CREATE_USER",
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
    onSuccess: async () => {
      reset({
        username: "",
        displayedName: "",
      });

      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.USERS,
      });
    },
  });

  const onSubmit = (payload: CreateUserPayload): void => {
    createUser({
      username: trim(payload.username),
      displayedName: trim(payload.displayedName),
    });
  };

  return (
    <div className={classes.createUser}>
      <h1 className={classes.title}>{t("TITLE")}</h1>

      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.field}>
          <label className={classes.label} htmlFor="username">
            {t("USERNAME")}
          </label>

          <input
            id="username"
            className={`${classes.input} ${
              errors.username ? classes.inputError : ""
            }`}
            {...register("username", {
              validate: (value: string) =>
                !isEmpty(trim(value)) || t("USERNAME_REQUIRED"),
              minLength: {
                value: USER_NAME_MIN_LENGTH,
                message: t("USERNAME_MIN_LENGTH", {
                  minLength: USER_NAME_MIN_LENGTH,
                }),
              },
            })}
          />

          {errors.username && (
            <p className={classes.error}>{errors.username.message}</p>
          )}
        </div>

        <div className={classes.field}>
          <label className={classes.label} htmlFor="displayedName">
            {t("DISPLAYED_NAME")}
          </label>

          <input
            id="displayedName"
            className={`${classes.input} ${
              errors.displayedName ? classes.inputError : ""
            }`}
            {...register("displayedName", {
              validate: (value: string) =>
                !isEmpty(trim(value)) || t("DISPLAYED_NAME_REQUIRED"),
              minLength: {
                value: USER_NAME_MIN_LENGTH,
                message: t("DISPLAYED_NAME_MIN_LENGTH", {
                  minLength: DISPLAYED_NAME_MIN_LENGTH,
                }),
              },
            })}
          />

          {errors.displayedName && (
            <p className={classes.error}>{errors.displayedName.message}</p>
          )}
        </div>

        {isError && (
          <p className={classes.serverError} role="alert">
            {t("CREATE_ERROR")}
          </p>
        )}

        {isSuccess && (
          <p className={classes.success} role="status">
            {t("CREATE_SUCCESS")}
          </p>
        )}

        <button className={classes.button} type="submit" disabled={isPending}>
          {isPending ? t("CREATING") : t("SUBMIT")}
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
