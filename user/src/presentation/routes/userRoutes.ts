import { Router } from "express";
import { controllers } from "@/presentation/controllers";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { CurrentUser, RequireAuth } from "@zakaa/common";
import { requireAdmin } from "@/_lib/http/middlewares";

export const userRoutes = (dependencies: IDependencies) => {

    const {
        applyToTeach,
        getInstructorApplications,
        acceptInstructorApplication,
        verifyInstructorApplication
    } = controllers(dependencies);

    const router = Router();

    router.route("/instructor/verify")
        .get(CurrentUser, RequireAuth, verifyInstructorApplication);

    router.route("/instructor/apply")
        .post(CurrentUser, RequireAuth, applyToTeach);

    router.route("/admin/instructor/applications")
        .get(CurrentUser, requireAdmin, getInstructorApplications);

    router.route("/admin/instructor/applications/accept")
        .put(CurrentUser, requireAdmin, acceptInstructorApplication);

    return router;
}