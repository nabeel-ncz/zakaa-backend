import { Router } from "express";
import { courseRoutes } from "./courseRoutes";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { categoryRoutes } from "./categoryRoutes";

export const routes = (dependencies: IDependencies) => {
    const router = Router();

    router.use(courseRoutes(dependencies, router));
    router.use(categoryRoutes(dependencies, router));

    return router;
}