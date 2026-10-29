import type { Client } from "jayson/promise/index.js";

export const rpcClientRequest = async <T>(
  rpcClient: Client,
  method: string,
  args?: Record<string, unknown>,
): Promise<T> => {
  const response = await rpcClient.request(
    method,
    Object.values(args ?? {}),
  );

  const rpcResponse = response as {
    result?: T;
    error?: { message: string; code?: number };
  };

  if (rpcResponse.error) {
    throw new Error(
      `RPC error ${rpcResponse.error.code}: ${rpcResponse.error.message}`,
    );
  }

  return rpcResponse.result as T;
};

export const rpcServerRequest = <TArgs extends unknown[], TResult>(
  managerFunction: (...args: TArgs) => Promise<TResult>,
) =>
  async (...args: TArgs): Promise<TResult> => {
    return managerFunction(...args);
  };
