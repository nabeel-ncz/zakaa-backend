import { Application } from "express";
import morgan from "morgan";

export const setupLogging = (app: Application) => {
    app.use(morgan('combined'));
} 