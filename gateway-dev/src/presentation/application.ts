import express, { Application } from "express";
import { setupLogging } from "@/_lib/logging";
import { setupProxies } from "@/_lib/proxy";
import cors from "cors";

const app: Application = express();

app.use(cors());
setupLogging(app);
setupProxies(app, [
    {
        url: '/api/auth',
        proxy: {
            target: "http://localhost:3001",
            changeOrigin: true,
        }
    }, 
    {
        url: '/api/user',
        proxy: {
            target: "http://localhost:3002",
            changeOrigin: true,
        }
    }
]);

export default app;