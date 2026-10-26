import { userAxios } from "../axios";

export type LoginPayload = {
  username: string;
};

export type AuthResponse = {
  token: string;
  user: {
    id: string;
    username: string;
    displayedName: string;
  };
};

export const authService = {
  login: async (payload: LoginPayload): Promise<AuthResponse> => {
    const response = await userAxios.post<AuthResponse>(
      "/auth/login",
      payload,
    );

    return response.data;
  },
};