import { IDependencies } from "@/application/interfaces/IDependencies";
import { createPaymentController } from "./createPaymentController";
import { updatePaymentController } from "./updatePaymentController";
import { makePaymentController } from "./makePaymentController";

export const controllers = (dependencies: IDependencies) => {
    return {
        createPayment: createPaymentController(dependencies),
        updatePayment: updatePaymentController(dependencies),
        makePayment: makePaymentController(dependencies)
    }
};