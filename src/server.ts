import cors from "cors";
import express, { type Express } from "express";
import helmet from "helmet";

import errorHandler from "./middleware/errorHandler";
import { healthCheckController } from "./api/healthCheck/healthCheckController";
import { questionController } from "./api/question/questionController";

const app: Express = express();

// Set the application to trust the reverse proxy
app.set("trust proxy", true);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// Routes
app.get("/health-check", healthCheckController.healthCheck);
app.get("/question", questionController.getQuestions);

// Error handlers
app.use(errorHandler());

export { app };
