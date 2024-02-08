import { IDependencies } from "@/application/interfaces/IDependencies";
import { signupController } from "./signup";
import { loginController } from "./login";
import { findAvailableUsernameController } from "./username";

export const controllers = (dependencies: IDependencies) => {
    return {
        signup: signupController(dependencies),
        login: loginController(dependencies),
        findUsername: findAvailableUsernameController(dependencies)
    }
};