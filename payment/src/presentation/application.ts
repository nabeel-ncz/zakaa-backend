import express, { Request, Response, NextFunction, Application } from "express";
import { NotFoundError, ErrorHandler } from "@zakaa/common";
import { dependencies } from "@/_boot/dependencies";
import { routes } from "@/infrastructure/routes";
import cookieParser from "cookie-parser";
import helmet from "helmet";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: "Payment service ON!"
    })
});

app.use("/api/payment", routes(dependencies));

app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new NotFoundError());
});

app.use(ErrorHandler);

export default app;