import type { Request, RequestHandler, Response } from "express";
import { questionService } from "./questionService";

class QuestionController {
  public getQuestions: RequestHandler = async (_req: Request, res: Response) => {
    const serviceResponse = await questionService.getAllQuestions();
    return res.status(200).send(serviceResponse);
  };
}

export const questionController = new QuestionController();
