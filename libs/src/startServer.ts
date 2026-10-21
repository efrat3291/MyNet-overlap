import type { Express } from "express";

export const startServer = async (
  app: Express,
  port: number ,
  connectDatabase: () => Promise<void>,
  serviceName: string,
): Promise<void> => {
  if (port === undefined || !Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(
      `[${serviceName}] Invalid or missing server port`,
    );
  }

  await connectDatabase();

  app.listen(port, () => {
    console.log(
      `[${serviceName}] is running on port ${port} 🚀`,
    );
  });
};
