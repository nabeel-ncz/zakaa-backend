import express, { Request, Response, NextFunction, Application } from "express";
import { NotFoundError, ErrorHandler } from "@zakaa/common";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { dependencies } from "@/_boot/dependencies";
import { limiter } from "@/_lib/http/rateLimit";
import { authRoutes } from "@/infrastructure/routes/authRoutes";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(limiter);

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: "Auth service ON!"
    })
});

app.use("/api/auth", authRoutes(dependencies));

app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new NotFoundError());
});

app.use(ErrorHandler);

export default app;