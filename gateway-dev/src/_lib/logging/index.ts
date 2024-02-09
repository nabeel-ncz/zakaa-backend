import { Application, Request, Response } from "express";
import morgan from "morgan";

export const setupLogging = (app: Application) => {
    // Define custom tokens for morgan
    morgan.token('req-body', (req: Request) => JSON.stringify(req.body));
    morgan.token('res-body', (req: Request, res: Response) => res.locals.body);

    // Use morgan middleware with custom format
    app.use(morgan(':method :url :status :response-time ms - reqBody: :req-body resBody: :res-body'));

    // Middleware to log request and response bodies
    app.use((req, res, next) => {
        // Log request body
        console.log("Request Body:", req.body);

        // Override res.json to log response body
        const originalJson = res.json;
        res.json = function (body) {
            res.locals.body = body;
            console.log("Response Body:", body);
            return originalJson.call(this, body);
        };

        next();
    });
};
