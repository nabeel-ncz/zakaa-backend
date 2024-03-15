import {
    Application,
    Request,
    Response,
    NextFunction
} from "express";
import morgan from "morgan";

export const setupLogging = (app: Application) => {

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
