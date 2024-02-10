import { IDependencies } from "@/application/interfaces/IDependencies";
import { signupController } from "./signup";
import { loginController } from "./login";
import { findAvailableUsernameController } from "./findUsername";
import { getUserController } from "./getUser";
import { getUsernameSuggestionsController } from "./getUsernameSuggestions";

export const controllers = (dependencies: IDependencies) => {
    return {
        signup: signupController(dependencies),
        login: loginController(dependencies),
        findUsername: findAvailableUsernameController(dependencies),
        getUser: getUserController(dependencies),
        getUsernameSuggestions: getUsernameSuggestionsController(dependencies) 
    }
};