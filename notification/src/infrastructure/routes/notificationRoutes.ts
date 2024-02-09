import { Router } from "express";
import { controllers } from "@/presentation/controllers";
import { IDependencies } from "@/application/interfaces/IDependencies";
// import { CurrentUser } from "@zakaa/common";

export const notificationRoutes = (dependencies: IDependencies) => {

    const {
        sendOTP
    } = controllers(dependencies);

    const router = Router();

    router.route("/send-otp")
        .get(sendOTP);

    return router;
}