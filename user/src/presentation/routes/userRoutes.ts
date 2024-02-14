import { Router } from "express";
import { controllers } from "@/presentation/controllers";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { CurrentUser, RequireAuth } from "@zakaa/common";
import { requireAdmin } from "@/_lib/http/middlewares";

export const userRoutes = (dependencies: IDependencies) => {

    const {
        applyToTeach,
        getInstructorApplications,
        acceptInstructorApplication
    } = controllers(dependencies);

    const router = Router();

    router.route("/instructor/apply")
        .post(RequireAuth, CurrentUser, applyToTeach);

    router.route("/admin/instructor/applications")
        .get(CurrentUser, requireAdmin, getInstructorApplications);

    router.route("/admin/instructor/applications/accept")
        .put(CurrentUser, requireAdmin, acceptInstructorApplication);

    return router;
}