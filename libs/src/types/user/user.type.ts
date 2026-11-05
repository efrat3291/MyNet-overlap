export type User = {
  _id: string;
  username: string;
  displayedName: string;
};

export type CreateUserPayload = Pick<User, "username" | "displayedName">;