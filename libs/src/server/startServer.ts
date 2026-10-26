import type { Express } from "express";

export const startServer = async (
  app: Express,
  port: number,
  connectDatabase: () => Promise<void>,
  serviceName: string,
): Promise<void> => {
  await connectDatabase();

  app.listen(port, () => {
    console.log(
      `[${serviceName}] is running on port ${port} 🚀`,
    );
  });
};
