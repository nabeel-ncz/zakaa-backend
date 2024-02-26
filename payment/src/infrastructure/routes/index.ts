import { Router } from "express";
import { controllers } from "@/presentation/controllers";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { CurrentUser, RequireAuth } from "@zakaa/common";

export const routes = (dependencies: IDependencies) => {
    const router = Router();

    const {
        createPayment,
        updatePayment,
        makePayment
    } = controllers(dependencies);

    router.route("/")
        .post(CurrentUser, RequireAuth, createPayment)
        .put(CurrentUser, RequireAuth, updatePayment);
    
    router.route("/stripe")
        .post(makePayment);
        

    return router;
}