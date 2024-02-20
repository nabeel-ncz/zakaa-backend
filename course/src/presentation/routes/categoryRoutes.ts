import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../controllers";
import { CurrentUser } from "@zakaa/common";
import { requireAdmin } from "@/_lib/http/middlewares";

export const categoryRoutes = (dependencies: IDependencies, router: Router) => {

    const {
        createCategory,
        updateCategory,
        getAllCategories,
        getAvailableCategories
    } = controllers(dependencies);

    router.route("/category")
        .post(CurrentUser, requireAdmin, createCategory)
        .put(CurrentUser, requireAdmin, updateCategory)
        .get(CurrentUser, requireAdmin, getAllCategories);

    router.route("/category/available")
        .get(getAvailableCategories);

    return router;
}