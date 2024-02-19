import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";

export const categoryRoutes = (dependencies: IDependencies, router: Router) => {

    router.route("/category")
        .post()
        .put()
        .get();

    router.route("/category/available")
        .get();

    return router;
}