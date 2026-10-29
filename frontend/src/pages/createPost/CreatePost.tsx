import type { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isEmpty, trim } from "lodash/fp";
import { POST_TEXT_MAX_LENGTH } from "@libs/consts/post.consts";
import type { CreatePostPayload } from "@libs/types/post/post.type";
import { useStyles } from "./styles";
import type { CreatePostProps } from "./types";
import { contentService } from "../../services/content/content.service";
import { QUERY_KEYS } from "../../utils/queryKeys";

const CreatePost: FC<CreatePostProps> = ({ userId }) => {
  const classes = useStyles();

  const { t } = useTranslation("translation", {
    keyPrefix: "CREATE_POST",
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
    onSuccess: async () => {
      reset({
        postName: "",
        userId,
        text: "",
        media: "",
      });

      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.POSTS,
      });
    },
  });

  const onSubmit = (payload: CreatePostPayload): void => {
    const postName = trim(payload.postName);
    const text = trim(payload.text);
    const media = trim(payload.media ?? "");

    createPost({
      postName,
      text,
      userId: payload.userId,
      ...(media ? { media } : {}),
    });
  };

  return (
    <div className={classes.createPost}>
      <h1 className={classes.title}>{t("TITLE")}</h1>

      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.field}>
          <label className={classes.label} htmlFor="postName">
            {t("POST_NAME")}
          </label>

          <input
            id="postName"
            className={`${classes.input} ${
              errors.postName ? classes.inputError : ""
            }`}
            {...register("postName", {
              validate: (value: string) =>
                !isEmpty(trim(value)) || t("POST_NAME_REQUIRED"),
            })}
          />

          {errors.postName && (
            <p className={classes.error}>{errors.postName.message}</p>
          )}
        </div>

        <div className={classes.field}>
          <label className={classes.label} htmlFor="text">
            {t("TEXT")}
          </label>

          <textarea
            id="text"
            className={`${classes.textarea} ${
              errors.text ? classes.inputError : ""
            }`}
            {...register("text", {
              validate: {
                notEmpty: (value: string) =>
                  !isEmpty(trim(value)) || t("TEXT_REQUIRED"),
                maxLength: (value: string) =>
                  value.length <= POST_TEXT_MAX_LENGTH ||
                  t("TEXT_MAX_LENGTH", {
                    maxLength: POST_TEXT_MAX_LENGTH,
                  }),
              },
            })}
          />

          {errors.text && (
            <p className={classes.error}>{errors.text.message}</p>
          )}
        </div>

        <div className={classes.field}>
          <label className={classes.label} htmlFor="media">
            {t("MEDIA")}
          </label>

          <input
            id="media"
            className={`${classes.input} ${
              errors.media ? classes.inputError : ""
            }`}
            {...register("media", {
              validate: (value: string | undefined) => {
                const media = trim(value ?? "");

                return (
                  !media || /^https?:\/\/.+/.test(media) || t("MEDIA_INVALID")
                );
              },
            })}
          />

          {errors.media && (
            <p className={classes.error}>{errors.media.message}</p>
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

export { CreatePost };
