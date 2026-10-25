import type { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useStyles } from "./styles";
import type { CreatePostProps } from "./props.types";
import { contentService } from "../../services/content/content.service";
import { QUERY_KEYS } from "../../utils/queryKeys";
import type { CreatePostPayload } from "@libs/types/post/postPayload.type";
import {
  getCreatePostValidationRules,
  normalizeCreatePostPayload,
} from "./functions";

const CreatePost: FC<CreatePostProps> = ({ userId }) => {
  const classes = useStyles();
  const { t } = useTranslation("translation", {
    keyPrefix: "createPost",
  });

  const validationRules = getCreatePostValidationRules({
    postNameRequired: t("postNameRequired"),
    textRequired: t("textRequired"),
    textMaxLength: t("textMaxLength"),
    mediaInvalid: t("mediaInvalid"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePostPayload>({
    defaultValues: {
      postName: "",
      userId,
      text: "",
      media: "",
    },
  });

  const queryClient = useQueryClient();

  const {
    mutate: createPost,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: contentService.createPost,
    onSuccess: () => {
      reset({
        postName: "",
        userId,
        text: "",
        media: "",
      });

      void queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.POSTS,
      });
    },
  });

  const onSubmit = (payload: CreatePostPayload): void => {
    createPost(normalizeCreatePostPayload(payload));
  };

  return (
    <div className={classes.createPost}>
      <h1 className={classes.title}>{t("title")}</h1>

      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.field}>
          <label className={classes.label} htmlFor="postName">
            {t("postName")}
          </label>

          <input
            id="postName"
            className={`${classes.input} ${
              errors.postName ? classes.inputError : ""
            }`}
            {...register("postName", validationRules.postName)}
          />

          {errors.postName && (
            <p className={classes.error}>{errors.postName.message}</p>
          )}
        </div>

        <div className={classes.field}>
          <label className={classes.label} htmlFor="text">
            {t("text")}
          </label>

          <textarea
            id="text"
            className={`${classes.textarea} ${
              errors.text ? classes.inputError : ""
            }`}
            {...register("text", validationRules.text)}
          />

          {errors.text && (
            <p className={classes.error}>{errors.text.message}</p>
          )}
        </div>

        <div className={classes.field}>
          <label className={classes.label} htmlFor="media">
            {t("media")}
          </label>

          <input
            id="media"
            className={`${classes.input} ${
              errors.media ? classes.inputError : ""
            }`}
            {...register("media", validationRules.media)}
          />

          {errors.media && (
            <p className={classes.error}>{errors.media.message}</p>
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

export { CreatePost };
