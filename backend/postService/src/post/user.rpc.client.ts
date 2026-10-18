const USER_SERVICE_URL =
  process.env.USER_SERVICE_URL;

export const createUserRpcClient = () => {
  const getUserById = async (userId: string): Promise<boolean> => {
    const response = await fetch(
      `${USER_SERVICE_URL}/rpc/users/${encodeURIComponent(userId)}`,
    );

    if (response.status === 404) {
      return false;
    }

    if (!response.ok) {
      throw new Error(
        `UserService RPC failed with status ${response.status}`,
      );
    }

    return true;
  };

  return {
    getUserById,
  };
};