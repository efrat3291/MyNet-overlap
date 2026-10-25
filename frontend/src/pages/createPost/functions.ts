import { isEmpty, trim } from "lodash/fp";
import type { CreatePostPayload } from "@libs/types/post/postPayload.type";
import { POST_TEXT_MAX_LENGTH } from "@libs/consts/post.consts";

type PostValidationMessages = {
  postNameRequired: string;
  textRequired: string;
  textMaxLength: string;
  mediaInvalid: string;
};

export const normalizeCreatePostPayload = (
  payload: CreatePostPayload,
): CreatePostPayload => {
  const postName = trim(payload.postName);
  const text = trim(payload.text);
  const media = trim(payload.media ?? "");

  return {
    postName,
    text,
    userId: payload.userId,
    ...(media ? { media } : {}),
  };
};

export const getCreatePostValidationRules = (
  messages: PostValidationMessages,
) => ({
  postName: {
    required: messages.postNameRequired,
    validate: (value: string) =>
      !isEmpty(trim(value)) || messages.postNameRequired,
  },
  text: {
    required: messages.textRequired,
    validate: {
      notEmpty: (value: string) =>
        !isEmpty(trim(value)) || messages.textRequired,
      maxLength: (value: string) =>
        value.length <= POST_TEXT_MAX_LENGTH || messages.textMaxLength,
    },
  },
  media: {
    validate: (value: string | undefined) => {
      const media = trim(value ?? "");

      return (
        !media ||
        /^https?:\/\/.+/.test(media) ||
        messages.mediaInvalid
      );
    },
  },
});
