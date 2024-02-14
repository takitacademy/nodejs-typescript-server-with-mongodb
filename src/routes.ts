import { createUserHandler } from "./controller/user.controller";
import { Express, Request, Response } from "express";
import validateResource from "./middleware/validateResources";
import { createUserSchema } from "./schema/user.schema";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/api/users", validateResource(createUserSchema), createUserHandler);
}

export default routes;
