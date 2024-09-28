import express, { RequestHandler, type Request, type Response, type Router } from "express";

export const healthCheckRouter: Router = express.Router();

healthCheckRouter.get("/", (_req: Request, res: Response) => {
  return res.json({ status: "Success" });
});

class HeathCheckController {
  public healthCheck: RequestHandler = async (_req: Request, res: Response) => {
    return res.status(200).send({ status: "Success" });
  };
}

export const healthCheckController = new HeathCheckController();
