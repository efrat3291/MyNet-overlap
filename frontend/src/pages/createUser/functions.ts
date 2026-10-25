import { isEmpty, trim } from "lodash/fp";
import type { CreateUserPayload } from "../../services/user/user.service";

type UserValidationMessages = {
  usernameRequired: string;
  usernameMinLength: string;
  displayedNameRequired: string;
  displayedNameMinLength: string;
};

export const normalizeCreateUserPayload = (
  payload: CreateUserPayload,
): CreateUserPayload => ({
  username: trim(payload.username),
  displayedName: trim(payload.displayedName),
});

export const getCreateUserValidationRules = (
  messages: UserValidationMessages,
) => ({
  username: {
    required: messages.usernameRequired,
    validate: (value: string) =>
      !isEmpty(trim(value)) || messages.usernameRequired,
    minLength: {
      value: 2,
      message: messages.usernameMinLength,
    },
  },
  displayedName: {
    required: messages.displayedNameRequired,
    validate: (value: string) =>
      !isEmpty(trim(value)) || messages.displayedNameRequired,
    minLength: {
      value: 2,
      message: messages.displayedNameMinLength,
    },
  },
});
