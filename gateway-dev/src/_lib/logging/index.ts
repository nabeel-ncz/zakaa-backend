import express, {
    Application,
    Request,
    Response,
    NextFunction
} from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";

export const setupLogging = (app: Application) => {
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    app.use(morgan('dev'));
    app.use(
        (
            req: Request,
            res: Response,
            next: NextFunction
        ) => {
            console.log("=================");
            console.log(req?.body);
            console.log(req?.cookies);
            console.log("==================");
            next();
        });
        
};
