import { Router } from "express";
import { CurrentUser } from "@zakaa/common";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "@/presentation/controllers";

export const notificationRoutes = (dependencies: IDependencies) => {

    const {
        sendVerificationMail
    } = controllers(dependencies);

    const router = Router();

    router.route("/account/verify")
        .get(CurrentUser, sendVerificationMail);

   
    return router;
}