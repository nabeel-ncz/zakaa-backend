import express, { Application } from "express";
import { setupLogging } from "@/_lib/logging";
import { setupProxies } from "@/_lib/proxy";
import cors from "cors";

const app: Application = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}

app.use(cors(corsOptions));
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
    },
    {
        url: '/api/notification',
        proxy: {
            target: "http://localhost:3003",
            changeOrigin: true,
        }
    },
    {
        url: '/api/course',
        proxy: {
            target: "http://localhost:3004",
            changeOrigin: true,
        }
    },
    {
        url: '/api/payment',
        proxy: {
            target: "http://localhost:3005",
            changeOrigin: true,
        }
    },
    {
        url: '/api/announcement',
        proxy: {
            target: "http://localhost:3006",
            changeOrigin: true,
        }
    },
    {
        url: '/api/chat',
        proxy: {
            target: "http://localhost:3007",
            changeOrigin: true,
        }
    }
]);

export default app;