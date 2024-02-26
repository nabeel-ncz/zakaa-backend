import { IDependencies } from "@/application/interfaces/IDependencies";
import { createPaymentController } from "./createPaymentController";
import { updatePaymentController } from "./updatePaymentController";

export const controllers = (dependencies: IDependencies) => {
    return {
        createPayment: createPaymentController(dependencies),
        updatePayment: updatePaymentController(dependencies)
    }
};