import { Router } from "express";
import { controllers } from "@/presentation/controllers";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { CurrentUser } from "@zakaa/common";

export const authRoutes = (dependencies: IDependencies) => {

    const {
        signup,
        login,
        findUsername,
        getUser,
        getUsernameSuggestions
    } = controllers(dependencies);

    const router = Router();

    router.route("/")
        .get(CurrentUser, getUser);

    router.route("/signup")
        .post(signup);

    router.route("/login")
        .post(login);

    router.route("/available/username")
        .get(getUsernameSuggestions);

    router.route("/available/username/:username")
        .get(findUsername);


    return router;
}