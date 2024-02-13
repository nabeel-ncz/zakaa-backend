import express, { Request, Response, NextFunction, Application } from "express";
import { NotFoundError, ErrorHandler } from "@zakaa/common";
import cookieParser from "cookie-parser";
import { userRoutes } from "./routes/userRoutes";
import { dependencies } from "@/_boot/dependencies";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: "User service ON!"
    })
});

app.use('/api/user', userRoutes(dependencies))

app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new NotFoundError());
});

app.use(ErrorHandler);

export default app;