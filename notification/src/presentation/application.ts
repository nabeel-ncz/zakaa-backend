import express, { 
    Application, 
    Request, 
    Response,  
    NextFunction
} from "express";
import { notificationRoutes } from "@/infrastructure/routes/notificationRoutes";
import { dependencies } from "@/_boot/dependencies";
import { ErrorHandler, NotFoundError } from "@zakaa/common";
import cookieParser from "cookie-parser";
import helmet from "helmet";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: "Notification service ON!"
    })
});

app.use('/api/notification', notificationRoutes(dependencies));

app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new NotFoundError());
});

app.use(ErrorHandler);

export default app;
