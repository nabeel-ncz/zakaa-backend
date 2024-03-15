import { createProxyMiddleware } from "http-proxy-middleware";
import { Application } from "express";

export const setupProxies = (app: Application, routes: any) => {
    routes.forEach((route: any) => {
        app.use(route.url, createProxyMiddleware(route.proxy));
    });
}