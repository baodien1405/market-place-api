import { CategoryRoute, ProductRoute } from "@/routes";
import { Application } from "express";

export default async (app: Application) => {
  app.use("/v1/api/products", ProductRoute);
  app.use("/v1/api/categories", CategoryRoute);

  return app;
};
