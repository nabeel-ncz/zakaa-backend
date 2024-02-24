import express, { Request, Response, NextFunction, Application } from "express";
import { NotFoundError, ErrorHandler } from "@zakaa/common";
import { dependencies } from "@/_boot/dependencies";
import { routes } from "@/infrastructure/routes";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import path from "path";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());

app.use("/api/course/images", express.static(path.join(__dirname, "..", "public", "images")));

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: "Auth service ON!"
    })
});

app.use("/api/course", routes(dependencies));

app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new NotFoundError());
});

app.use(ErrorHandler);

export default app;