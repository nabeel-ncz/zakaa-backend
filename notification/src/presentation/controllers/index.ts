import { IDependencies } from "@/application/interfaces/IDependencies";
import { sendOTPController } from "@/presentation/controllers/sendOTP";

export const controllers = (dependencies: IDependencies) => {
    return {
        sendOTP: sendOTPController(dependencies)
    }
};