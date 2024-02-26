import { Router } from "express";
import { controllers } from "@/presentation/controllers";
import { IDependencies } from "@/application/interfaces/IDependencies";

export const routes = (dependencies: IDependencies) => {
    const router = Router();

    const {
        createPayment,
        updatePayment
    } = controllers(dependencies);

    router.route("/")
        .post(createPayment)
        .put(updatePayment);

    return router;
}